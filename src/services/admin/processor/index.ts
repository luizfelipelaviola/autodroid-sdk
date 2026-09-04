import type { AutoDroidSdk } from '@package';

import { Res } from '@utils/response.type';

import {
  AdminProcessorDeleteMutation,
  AdminProcessorDeleteMutationVariables,
  AdminProcessorQuery,
  AdminProcessorQueryVariables,
  AdminProcessorsQuery,
  AdminProcessorsQueryVariables,
  AdminProcessorUpdateMutation,
  AdminProcessorUpdateMutationVariables,
  AdminProcessorCreateMutation,
  AdminProcessorCreateMutationVariables,
} from '@gql/graphql';

import {
  ADMIN_PROCESSOR_DELETE_MUTATION,
  ADMIN_PROCESSOR_GET_ONE_QUERY,
  ADMIN_PROCESSOR_UPDATE_MUTATION,
  ADMIN_PROCESSOR_CREATE_MUTATION,
  ADMIN_PROCESSOR_GET_MANY_QUERY,
} from './queries';

export class AdminProcessor {
  constructor(private context: AutoDroidSdk) {}

  public async getOne(
    variables: AdminProcessorQueryVariables,
  ): Promise<Res<AdminProcessorQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_PROCESSOR_GET_ONE_QUERY,
      variables,
    });
    return data.adminProcessor;
  }

  public async getMany(
    variables: AdminProcessorsQueryVariables,
  ): Promise<Res<AdminProcessorsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_PROCESSOR_GET_MANY_QUERY,
      variables,
    });
    return data.adminProcessors;
  }

  public async create(
    variables: AdminProcessorCreateMutationVariables,
  ): Promise<Res<AdminProcessorCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_PROCESSOR_CREATE_MUTATION,
      variables,
    });
    return data!.adminProcessorCreate;
  }

  public async delete(
    variables: AdminProcessorDeleteMutationVariables,
  ): Promise<Res<AdminProcessorDeleteMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_PROCESSOR_DELETE_MUTATION,
      variables,
    });
    return data!.adminProcessorDelete;
  }

  public async update(
    variables: AdminProcessorUpdateMutationVariables,
  ): Promise<Res<AdminProcessorUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_PROCESSOR_UPDATE_MUTATION,
      variables,
    });
    return data!.adminProcessorUpdate;
  }
}
