import { gql } from '@gql';

export const ADMIN_DATASET_GET_ONE_QUERY = gql(`
  query AdminDataset($datasetId: String!) {
    adminDataset(dataset_id: $datasetId) {
      ...DatasetFragment
    }
  }
`);

export const ADMIN_DATASET_GET_MANY_QUERY = gql(`
  query AdminDatasets(
    $user_id: String,
    $file_id: String,
    $visibility: DATASET_VISIBILITY,

    $after: ConnectionCursor,
    $before: ConnectionCursor,

    $first: Int,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    adminDatasets(
      user_id: $user_id,
      file_id: $file_id,
      visibility: $visibility,

      after: $after,
      before: $before,

      first: $first,
      last: $last,

      skip: $skip,
      take: $take,

      sorting: $sorting
    ) {
      edges {
        node {
          ...DatasetFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`);

export const ADMIN_DATASET_DELETE_MUTATION = gql(`
  mutation AdminDatasetDelete($datasetId: String!) {
    adminDatasetDelete(dataset_id: $datasetId) {
      ...DatasetFragment
    }
  }
`);

export const ADMIN_DATASET_UPDATE_MUTATION = gql(`
  mutation AdminDatasetUpdate($datasetId: String!, $data: AdminDatasetUpdateSchema!) {
    adminDatasetUpdate(dataset_id: $datasetId, data: $data) {
      ...DatasetFragment
    }
  }
`);

export const ADMIN_DATASET_UPDATE_VISIBILITY_MUTATION = gql(`
  mutation AdminDatasetUpdateVisibility($datasetId: String!, $data: AdminDatasetUpdateVisibilitySchema!) {
    adminDatasetUpdateVisibility(dataset_id: $datasetId, data: $data) {
      ...DatasetFragment
    }
  }
`);
