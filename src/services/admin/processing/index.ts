import type { AutoDroidSdk } from '@package';

import { Res } from '@utils/response.type';

import {
  AdminProcessingDeleteMutation,
  AdminProcessingDeleteMutationVariables,
  AdminProcessingQuery,
  AdminProcessingQueryVariables,
  AdminProcessesQuery,
  AdminProcessesQueryVariables,
  AdminProcessingUpdateMutation,
  AdminProcessingUpdateMutationVariables,
  AdminProcessingCleanExpiredMutationVariables,
  AdminProcessingCleanExpiredMutation,
} from '@gql/graphql';

import {
  ADMIN_PROCESSING_DELETE_MUTATION,
  ADMIN_PROCESSING_GET_ONE_QUERY,
  ADMIN_PROCESSING_UPDATE_MUTATION,
  ADMIN_PROCESSING_GET_MANY_QUERY,
  ADMIN_PROCESSING_CLEAN_EXPIRED_MUTATION,
} from './queries';

export class AdminProcessing {
  constructor(private context: AutoDroidSdk) {}

  public async getOne(
    variables: AdminProcessingQueryVariables,
  ): Promise<Res<AdminProcessingQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_PROCESSING_GET_ONE_QUERY,
      variables,
    });
    return data.adminProcessing;
  }

  public async getMany(
    variables: AdminProcessesQueryVariables,
  ): Promise<Res<AdminProcessesQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_PROCESSING_GET_MANY_QUERY,
      variables,
    });
    return data.adminProcesses;
  }

  public async update(
    variables: AdminProcessingUpdateMutationVariables,
  ): Promise<Res<AdminProcessingUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_PROCESSING_UPDATE_MUTATION,
      variables,
    });
    return data!.adminProcessingUpdate;
  }

  public async delete(
    variables: AdminProcessingDeleteMutationVariables,
  ): Promise<Res<AdminProcessingDeleteMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_PROCESSING_DELETE_MUTATION,
      variables,
    });
    return data!.adminProcessingDelete;
  }

  public async cleanExpired(
    variables: AdminProcessingCleanExpiredMutationVariables,
  ): Promise<Res<AdminProcessingCleanExpiredMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_PROCESSING_CLEAN_EXPIRED_MUTATION,
      variables,
    });
    return data!.adminProcessingCleanExpired;
  }
}
