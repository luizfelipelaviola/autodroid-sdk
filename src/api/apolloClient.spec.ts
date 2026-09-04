import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Kind } from 'graphql';
import {
  ApolloClient,
  ApolloLink,
  Observable,
  createHttpLink,
  gql,
} from '@apollo/client/core';

import { BigIntScalar, createApolloClient } from '@api/apolloClient';
import { HEALTH_CHECK_QUERY } from '@services/healthCheck/queries';

vi.mock('@apollo/client/core', async importOriginal => {
  const actual = await importOriginal<typeof import('@apollo/client/core')>();
  return { ...actual, createHttpLink: vi.fn() };
});

const mockedCreateHttpLink = vi.mocked(createHttpLink);

const DATASET_SCALARS_QUERY = gql`
  query UserDatasetScalars($datasetId: String!) {
    userDataset(dataset_id: $datasetId) {
      id
      seq
      created_at
    }
  }
`;

type TerminalResponse = {
  data?: Record<string, unknown> | null;
  errors?: ReadonlyArray<Record<string, unknown>>;
  networkError?: Error;
};

let capturedHeaders: Record<string, string> | undefined;

const terminalLink = (response: TerminalResponse) =>
  new ApolloLink(
    operation =>
      new Observable(observer => {
        capturedHeaders = operation.getContext().headers;
        if (response.networkError) {
          observer.error(response.networkError);
          return;
        }
        observer.next({
          data: response.data ?? null,
          ...(response.errors && { errors: response.errors }),
        } as any);
        observer.complete();
      }),
  );

describe('BigIntScalar', () => {
  it('serializes bigint values through the JSON prototype patch', () => {
    expect((10n as any).toJSON()).toBe('10');
  });

  it('serialize returns a bigint for representable values', () => {
    expect(BigIntScalar.serialize('123')).toBe(123n);
  });

  it('serialize throws when the value cannot be represented', () => {
    expect(() => BigIntScalar.serialize('007')).toThrow(
      'BigInt cannot represent value: 007',
    );
  });

  it('parseValue returns a bigint for representable values', () => {
    expect(BigIntScalar.parseValue('456')).toBe(456n);
  });

  it('parseValue throws when the value cannot be represented', () => {
    expect(() => BigIntScalar.parseValue('008')).toThrow(
      'BigInt cannot represent value: 008',
    );
  });

  it('parseLiteral parses INT literals', () => {
    expect(
      BigIntScalar.parseLiteral({ kind: Kind.INT, value: '789' } as any, {}),
    ).toBe(789n);
  });

  it('parseLiteral parses STRING literals', () => {
    expect(
      BigIntScalar.parseLiteral({ kind: Kind.STRING, value: '321' } as any, {}),
    ).toBe(321n);
  });

  it('parseLiteral throws for non-integer kinds', () => {
    expect(() =>
      BigIntScalar.parseLiteral({ kind: Kind.FLOAT, value: '1.5' } as any, {}),
    ).toThrow('BigInt cannot represent non-integer value');
  });

  it('parseLiteral throws when the literal cannot be represented', () => {
    expect(() =>
      BigIntScalar.parseLiteral({ kind: Kind.STRING, value: '007' } as any, {}),
    ).toThrow('BigInt cannot represent value: 007');
  });
});

describe('createApolloClient', () => {
  const baseUrl = 'http://localhost:3000/graphql';

  beforeEach(() => {
    mockedCreateHttpLink.mockReset();
    capturedHeaders = undefined;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns an ApolloClient with no-cache default policies', () => {
    mockedCreateHttpLink.mockReturnValue(terminalLink({ data: {} }));

    const client = createApolloClient({ baseUrl });

    expect(client).toBeInstanceOf(ApolloClient);
    expect(client.defaultOptions.query?.fetchPolicy).toBe('no-cache');
    expect(client.defaultOptions.mutate?.fetchPolicy).toBe('no-cache');
    expect(client.defaultOptions.watchQuery?.fetchPolicy).toBe('no-cache');
    expect(mockedCreateHttpLink).toHaveBeenCalledWith({ uri: baseUrl });
  });

  it('injects the bearer token when getAuthToken resolves a value', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({ data: { healthCheck: '2026-01-01T00:00:00.000Z' } }),
    );

    const client = createApolloClient({
      baseUrl,
      getAuthToken: async () => 'token-123',
    });

    await client.query({ query: HEALTH_CHECK_QUERY });

    expect(capturedHeaders?.authorization).toBe('Bearer token-123');
  });

  it('omits the authorization header when getAuthToken resolves empty', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({ data: { healthCheck: '2026-01-01T00:00:00.000Z' } }),
    );

    const client = createApolloClient({
      baseUrl,
      getAuthToken: async () => '',
    });

    await client.query({ query: HEALTH_CHECK_QUERY });

    expect(capturedHeaders?.authorization).toBeUndefined();
  });

  it('omits the authorization header when getAuthToken is not provided', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({ data: { healthCheck: '2026-01-01T00:00:00.000Z' } }),
    );

    const client = createApolloClient({ baseUrl });

    await client.query({ query: HEALTH_CHECK_QUERY });

    expect(capturedHeaders?.authorization).toBeUndefined();
  });

  it('parses DateTimeISO response fields into Date instances', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({ data: { healthCheck: '2026-01-01T00:00:00.000Z' } }),
    );

    const client = createApolloClient({ baseUrl });

    const result = await client.query({ query: HEALTH_CHECK_QUERY });

    expect(result.data.healthCheck).toBeInstanceOf(Date);
    expect((result.data.healthCheck as Date).toISOString()).toBe(
      '2026-01-01T00:00:00.000Z',
    );
  });

  it('parses BigInt response fields beyond Number.MAX_SAFE_INTEGER', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({
        data: {
          userDataset: {
            __typename: 'Dataset',
            id: 'dataset-id',
            seq: '9007199254740993',
            created_at: '2026-01-01T00:00:00.000Z',
          },
        },
      }),
    );

    const client = createApolloClient({ baseUrl });

    const result = await client.query({
      query: DATASET_SCALARS_QUERY,
      variables: { datasetId: 'dataset-id' },
    });

    expect(result.data.userDataset.seq).toBe(9007199254740993n);
    expect(result.data.userDataset.created_at).toBeInstanceOf(Date);
    expect(result.data.userDataset.id).toBe('dataset-id');
  });

  it('routes UNAUTHENTICATED errors to onGraphQLError and onAuthError', async () => {
    const onGraphQLError = vi.fn();
    const onNetworkError = vi.fn();
    const onAuthError = vi.fn();

    mockedCreateHttpLink.mockReturnValue(
      terminalLink({
        data: null,
        errors: [
          { message: 'Unauthorized', extensions: { code: 'UNAUTHENTICATED' } },
        ],
      }),
    );

    const client = createApolloClient({
      baseUrl,
      onGraphQLError,
      onNetworkError,
      onAuthError,
    });

    await expect(client.query({ query: HEALTH_CHECK_QUERY })).rejects.toThrow();

    expect(onGraphQLError).toHaveBeenCalledTimes(1);
    expect(onAuthError).toHaveBeenCalledTimes(1);
    expect(onNetworkError).not.toHaveBeenCalled();
  });

  it('routes the backend UNAUTHORIZED auth code to onAuthError', async () => {
    const onGraphQLError = vi.fn();
    const onAuthError = vi.fn();

    mockedCreateHttpLink.mockReturnValue(
      terminalLink({
        data: null,
        errors: [
          {
            message: 'Authentication error.',
            extensions: { code: 'UNAUTHORIZED' },
          },
        ],
      }),
    );

    const client = createApolloClient({
      baseUrl,
      onGraphQLError,
      onAuthError,
    });

    await expect(client.query({ query: HEALTH_CHECK_QUERY })).rejects.toThrow();

    expect(onGraphQLError).toHaveBeenCalledTimes(1);
    expect(onAuthError).toHaveBeenCalledTimes(1);
  });

  it('reports GraphQL errors without invoking onAuthError when not UNAUTHENTICATED', async () => {
    const onGraphQLError = vi.fn();
    const onAuthError = vi.fn();

    mockedCreateHttpLink.mockReturnValue(
      terminalLink({
        data: null,
        errors: [
          { message: 'Boom' },
          { message: 'Invalid', extensions: { code: 'BAD_USER_INPUT' } },
        ],
      }),
    );

    const client = createApolloClient({ baseUrl, onGraphQLError, onAuthError });

    await expect(client.query({ query: HEALTH_CHECK_QUERY })).rejects.toThrow();

    expect(onGraphQLError).toHaveBeenCalledTimes(1);
    expect(onAuthError).not.toHaveBeenCalled();
  });

  it('does not invoke onGraphQLError when the errors array is empty', async () => {
    const onGraphQLError = vi.fn();
    const onAuthError = vi.fn();

    mockedCreateHttpLink.mockReturnValue(
      terminalLink({
        data: { healthCheck: '2026-01-01T00:00:00.000Z' },
        errors: [],
      }),
    );

    const client = createApolloClient({ baseUrl, onGraphQLError, onAuthError });

    await client.query({ query: HEALTH_CHECK_QUERY });

    expect(onGraphQLError).not.toHaveBeenCalled();
    expect(onAuthError).not.toHaveBeenCalled();
  });

  it('routes network errors to onNetworkError only', async () => {
    const onGraphQLError = vi.fn();
    const onNetworkError = vi.fn();
    const onAuthError = vi.fn();

    mockedCreateHttpLink.mockReturnValue(
      terminalLink({ networkError: new Error('offline') }),
    );

    const client = createApolloClient({
      baseUrl,
      onGraphQLError,
      onNetworkError,
      onAuthError,
    });

    await expect(client.query({ query: HEALTH_CHECK_QUERY })).rejects.toThrow();

    expect(onNetworkError).toHaveBeenCalledTimes(1);
    expect(onGraphQLError).not.toHaveBeenCalled();
    expect(onAuthError).not.toHaveBeenCalled();
  });

  it('tolerates GraphQL errors when no callbacks are provided', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({
        data: null,
        errors: [
          { message: 'Unauthorized', extensions: { code: 'UNAUTHENTICATED' } },
        ],
      }),
    );

    const client = createApolloClient({ baseUrl });

    await expect(client.query({ query: HEALTH_CHECK_QUERY })).rejects.toThrow();
  });

  it('tolerates network errors when no callbacks are provided', async () => {
    mockedCreateHttpLink.mockReturnValue(
      terminalLink({ networkError: new Error('offline') }),
    );

    const client = createApolloClient({ baseUrl });

    await expect(client.query({ query: HEALTH_CHECK_QUERY })).rejects.toThrow();
  });
});
