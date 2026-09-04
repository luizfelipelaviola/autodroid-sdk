import type { AutoDroidSdk } from '@package';

import { Res } from '@utils/response.type';

import {
  AdminDatasetDeleteMutation,
  AdminDatasetDeleteMutationVariables,
  AdminDatasetQuery,
  AdminDatasetQueryVariables,
  AdminDatasetsQuery,
  AdminDatasetsQueryVariables,
  AdminDatasetUpdateMutation,
  AdminDatasetUpdateMutationVariables,
  AdminDatasetUpdateVisibilityMutation,
  AdminDatasetUpdateVisibilityMutationVariables,
} from '@gql/graphql';

import {
  ADMIN_DATASET_DELETE_MUTATION,
  ADMIN_DATASET_GET_ONE_QUERY,
  ADMIN_DATASET_UPDATE_MUTATION,
  ADMIN_DATASET_UPDATE_VISIBILITY_MUTATION,
  ADMIN_DATASET_GET_MANY_QUERY,
} from './queries';

export class AdminDataset {
  constructor(private context: AutoDroidSdk) {}

  public async getOne(
    variables: AdminDatasetQueryVariables,
  ): Promise<Res<AdminDatasetQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_DATASET_GET_ONE_QUERY,
      variables,
    });
    return data.adminDataset;
  }

  public async getMany(
    variables: AdminDatasetsQueryVariables,
  ): Promise<Res<AdminDatasetsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: ADMIN_DATASET_GET_MANY_QUERY,
      variables,
    });
    return data.adminDatasets;
  }

  public async update(
    variables: AdminDatasetUpdateMutationVariables,
  ): Promise<Res<AdminDatasetUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_DATASET_UPDATE_MUTATION,
      variables,
    });
    return data!.adminDatasetUpdate;
  }

  public async updateVisibility(
    variables: AdminDatasetUpdateVisibilityMutationVariables,
  ): Promise<Res<AdminDatasetUpdateVisibilityMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_DATASET_UPDATE_VISIBILITY_MUTATION,
      variables,
    });
    return data!.adminDatasetUpdateVisibility;
  }

  public async delete(
    variables: AdminDatasetDeleteMutationVariables,
  ): Promise<Res<AdminDatasetDeleteMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ADMIN_DATASET_DELETE_MUTATION,
      variables,
    });
    return data!.adminDatasetDelete;
  }
}
