import { gql } from '@gql';

export const ADMIN_WORKER_GET_ONE_QUERY = gql(`
  query AdminWorker($workerId: String!) {
    adminWorker(worker_id: $workerId) {
      ...WorkerFragment
    }
  }
`);

export const ADMIN_WORKER_GET_MANY_QUERY = gql(`
  query AdminWorkers(
    $userId: String,
    $registrationTokenId: String,
    $archived: Boolean,

    $after: ConnectionCursor,
    $before: ConnectionCursor,

    $first: Int,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    adminWorkers(
      user_id: $userId,
      registration_token_id: $registrationTokenId,
      archived: $archived,

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
          ...WorkerFragment
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

export const ADMIN_WORKER_UPDATE_MUTATION = gql(`
  mutation AdminWorkerUpdate($workerId: String!, $data: AdminWorkerUpdateSchema!) {
    adminWorkerUpdate(worker_id: $workerId, data: $data) {
      ...WorkerFragment
    }
  }
`);

export const ADMIN_WORKER_DELETE_MUTATION = gql(`
  mutation AdminWorkerDelete($workerId: String!) {
    adminWorkerDelete(worker_id: $workerId) {
      ...WorkerFragment
    }
  }
`);

export const ADMIN_WORKER_REGISTRATION_TOKEN_GET_ONE_QUERY = gql(`
  query AdminWorkerRegistrationToken($workerRegistrationTokenId: String!) {
    adminWorkerRegistrationToken(worker_registration_token_id: $workerRegistrationTokenId) {
      ...WorkerRegistrationTokenFragment
    }
  }
`);

export const ADMIN_WORKER_REGISTRATION_TOKEN_GET_MANY_QUERY = gql(`
  query AdminWorkerRegistrationTokens(
    $userId: String,
    $activatable: Boolean,
    $activated: Boolean,
    $archived: Boolean,
    $expired: Boolean,
    $isUnlimitedUsage: Boolean,

    $after: ConnectionCursor,
    $before: ConnectionCursor,

    $first: Int,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    adminWorkerRegistrationTokens(
      user_id: $userId,
      activatable: $activatable,
      activated: $activated,
      archived: $archived,
      expired: $expired,
      is_unlimited_usage: $isUnlimitedUsage,

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
          ...WorkerRegistrationTokenFragment
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

export const ADMIN_WORKER_REGISTRATION_TOKEN_CREATE_MUTATION = gql(`
  mutation AdminWorkerRegistrationTokenCreate($data: WorkerRegistrationTokenCreateSchema!) {
    adminWorkerRegistrationTokenCreate(data: $data) {
      ...WorkerRegistrationTokenFragment
    }
  }
`);

export const ADMIN_WORKER_REGISTRATION_TOKEN_DELETE_MUTATION = gql(`
  mutation AdminWorkerRegistrationTokenDelete($workerRegistrationTokenId: String!) {
    adminWorkerRegistrationTokenDelete(worker_registration_token_id: $workerRegistrationTokenId) {
      ...WorkerRegistrationTokenFragment
    }
  }
`);

export const ADMIN_WORKER_CLEAN_MISSING_MUTATION = gql(`
  mutation AdminWorkerCleanMissing {
    adminWorkerCleanMissing
  }
`);
