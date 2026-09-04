import { gql } from '@gql';

export const USER_DATASET_GET_ONE_QUERY = gql(`
  query UserDataset($datasetId: String!) {
    userDataset(dataset_id: $datasetId) {
      ...DatasetFragment
    }
  }
`);

export const USER_DATASET_GET_MANY_QUERY = gql(`
  query UserDatasets(
    $sorting: [SortingFieldSchema!]

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,
  ) {
    userDatasets(
      sorting: $sorting

      skip: $skip,
      take: $take,

      first: $first,
      after: $after,

      before: $before,
      last: $last,
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

export const USER_DATASET_CREATE_MUTATION = gql(`
  mutation UserDatasetCreate($data: UserDatasetCreateSchema!) {
    userDatasetCreate(data: $data) {
      ...DatasetFragment
    }
  }
`);

export const USER_DATASET_UPDATE_MUTATION = gql(`
  mutation UserDatasetUpdate($datasetId: String!, $data: UserDatasetUpdateSchema!) {
    userDatasetUpdate(dataset_id: $datasetId, data: $data) {
      ...DatasetFragment
    }
  }
`);

export const USER_DATASET_REQUEST_PUBLICATION_MUTATION = gql(`
  mutation UserDatasetRequestPublication($datasetId: String!) {
    userDatasetRequestPublication(dataset_id: $datasetId) {
      ...DatasetFragment
    }
  }
`);

export const USER_DATASET_DELETE_MUTATION = gql(`
  mutation UserDatasetDelete($datasetId: String!) {
    userDatasetDelete(dataset_id: $datasetId) {
      ...DatasetFragment
    }
  }
`);
