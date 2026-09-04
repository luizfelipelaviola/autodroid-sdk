import type { AutoDroidSdk } from '@package';

import { Res } from '@utils/response.type';

import {
  AdminWorkerCleanMissingMutation,
  AdminWorkerCleanMissingMutationVariables,
  AdminWorkerDeleteMutation,
  AdminWorkerDeleteMutationVariables,
  AdminWorkerQuery,
  AdminWorkerQueryVariables,
  AdminWorkerUpdateMutation,
  AdminWorkerUpdateMutationVariables,
  AdminWorkerRegistrationTokenCreateMutation,
  AdminWorkerRegistrationTokenCreateMutationVariables,
  AdminWorkerRegistrationTokenDeleteMutation,
  AdminWorkerRegistrationTokenDeleteMutationVariables,
  AdminWorkerRegistrationTokenQuery,
  AdminWorkerRegistrationTokenQueryVariables,
  AdminWorkerRegistrationTokensQuery,
  AdminWorkerRegistrationTokensQueryVariables,
  AdminWorkersQuery,
  AdminWorkersQueryVariables,
} from '@gql/graphql';

import {
  ADMIN_WORKER_DELETE_MUTATION,
  ADMIN_WORKER_GET_ONE_QUERY,
  ADMIN_WORKER_GET_MANY_QUERY,
  ADMIN_WORKER_UPDATE_MUTATION,
  ADMIN_WORKER_REGISTRATION_TOKEN_GET_ONE_QUERY,
  ADMIN_WORKER_REGISTRATION_TOKEN_GET_MANY_QUERY,
  ADMIN_WORKER_REGISTRATION_TOKEN_CREATE_MUTATION,
  ADMIN_WORKER_REGISTRATION_TOKEN_DELETE_MUTATION,
  ADMIN_WORKER_CLEAN_MISSING_MUTATION,
} from './queries';

export class AdminWorker {
  constructor(private context: AutoDroidSdk) {}

  public async getOne(
    variables: AdminWorkerQueryVariables,
  ): Promise<Res<AdminWorkerQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_WORKER_GET_ONE_QUERY,
      variables,
    });
    return data.adminWorker;
  }

  public async getMany(
    variables: AdminWorkersQueryVariables,
  ): Promise<Res<AdminWorkersQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_WORKER_GET_MANY_QUERY,
      variables,
    });
    return data.adminWorkers;
  }

  public async update(
    variables: AdminWorkerUpdateMutationVariables,
  ): Promise<Res<AdminWorkerUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_WORKER_UPDATE_MUTATION,
      variables,
    });
    return data!.adminWorkerUpdate;
  }

  public async delete(
    variables: AdminWorkerDeleteMutationVariables,
  ): Promise<Res<AdminWorkerDeleteMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_WORKER_DELETE_MUTATION,
      variables,
    });
    return data!.adminWorkerDelete;
  }

  public async getRegistrationToken(
    variables: AdminWorkerRegistrationTokenQueryVariables,
  ): Promise<Res<AdminWorkerRegistrationTokenQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_WORKER_REGISTRATION_TOKEN_GET_ONE_QUERY,
      variables,
    });
    return data.adminWorkerRegistrationToken;
  }

  public async getRegistrationTokens(
    variables: AdminWorkerRegistrationTokensQueryVariables,
  ): Promise<Res<AdminWorkerRegistrationTokensQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_WORKER_REGISTRATION_TOKEN_GET_MANY_QUERY,
      variables,
    });
    return data.adminWorkerRegistrationTokens;
  }

  public async createRegistrationToken(
    variables: AdminWorkerRegistrationTokenCreateMutationVariables,
  ): Promise<Res<AdminWorkerRegistrationTokenCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_WORKER_REGISTRATION_TOKEN_CREATE_MUTATION,
      variables,
    });
    return data!.adminWorkerRegistrationTokenCreate;
  }

  public async deleteRegistrationToken(
    variables: AdminWorkerRegistrationTokenDeleteMutationVariables,
  ): Promise<Res<AdminWorkerRegistrationTokenDeleteMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_WORKER_REGISTRATION_TOKEN_DELETE_MUTATION,
      variables,
    });
    return data!.adminWorkerRegistrationTokenDelete;
  }

  public async cleanMissing(
    variables: AdminWorkerCleanMissingMutationVariables,
  ): Promise<Res<AdminWorkerCleanMissingMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_WORKER_CLEAN_MISSING_MUTATION,
      variables,
    });
    return data!.adminWorkerCleanMissing;
  }
}
