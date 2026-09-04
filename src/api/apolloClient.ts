import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { NetworkError } from '@apollo/client/errors';
import { setContext } from '@apollo/client/link/context';
import { withScalars } from 'apollo-link-scalars';
import {
  GraphQLError,
  GraphQLFormattedError,
  GraphQLScalarType,
  IntrospectionQuery,
  Kind,
  buildClientSchema,
} from 'graphql';
import { DateTimeISOResolver } from 'graphql-scalars';

import introspectionResult from './gql/schema.graphql.json' assert { type: 'json' };

interface IAutoDroidSdkParams {
  baseUrl: string;

  getAuthToken?: () => Promise<string>;
  onAuthError?: () => void;

  onGraphQLError?: (errors: ReadonlyArray<GraphQLFormattedError>) => void;
  onNetworkError?: (error: NetworkError) => void;
}

// eslint-disable-next-line func-names
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const BigIntScalar = new GraphQLScalarType({
  name: 'BigInt',
  description:
    'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
  serialize(outputValue: any) {
    const bigint = BigInt(outputValue.toString());
    if (outputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${outputValue}`);
    return bigint;
  },
  parseValue(inputValue: any) {
    const bigint = BigInt(inputValue.toString());
    if (inputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${inputValue}`);
    return bigint;
  },
  parseLiteral(ast: any) {
    if (ast.kind !== Kind.INT && ast.kind !== Kind.STRING)
      throw new GraphQLError(
        `BigInt cannot represent non-integer value: ${ast}`,
      );
    try {
      const bigint = BigInt(ast.value);
      if (ast.value !== bigint.toString()) throw new Error();
      return bigint;
    } catch (err) {
      throw new GraphQLError(`BigInt cannot represent value: ${ast.value}`);
    }
  },
  extensions: {
    codegenScalarType: 'bigint',
    jsonSchema: {
      type: 'integer',
      format: 'int64',
    },
  },
});

const schema = buildClientSchema(
  introspectionResult as unknown as IntrospectionQuery,
);

export const createApolloClient = ({
  baseUrl,
  getAuthToken,

  onGraphQLError,
  onNetworkError,
  onAuthError,
}: IAutoDroidSdkParams) => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors?.length && typeof onGraphQLError === 'function')
      onGraphQLError(graphQLErrors);

    if (networkError && typeof onNetworkError === 'function')
      onNetworkError(networkError);

    if (
      graphQLErrors?.some(error =>
        ['UNAUTHENTICATED', 'UNAUTHORIZED'].includes(
          String(error.extensions?.code ?? ''),
        ),
      ) &&
      typeof onAuthError === 'function'
    )
      onAuthError();
  });

  const scalarLink = withScalars({
    schema,
    typesMap: {
      BigInt: BigIntScalar,
      DateTimeISO: DateTimeISOResolver,
    },
  });

  const authLink = setContext(async (_, { headers }) => {
    const selectedToken =
      typeof getAuthToken === 'function'
        ? (await getAuthToken()) || null
        : null;

    return {
      headers: {
        ...headers,
        ...(selectedToken && {
          authorization: `Bearer ${selectedToken}`,
        }),
      },
    };
  });

  const httpLink = createHttpLink({ uri: baseUrl });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, scalarLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};

export type { IAutoDroidSdkParams };
export default createApolloClient;
