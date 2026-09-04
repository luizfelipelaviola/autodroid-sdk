import { gql } from '@gql';

export const ADMIN_PROCESSOR_GET_ONE_QUERY = gql(`
  query AdminProcessor($processorId: String!) {
    adminProcessor(processor_id: $processorId) {
      ...ProcessorFragment
    }
  }
`);

export const ADMIN_PROCESSOR_GET_MANY_QUERY = gql(`
  query AdminProcessors(
    $after: ConnectionCursor,
    $before: ConnectionCursor,

    $first: Int,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    adminProcessors(
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
          ...ProcessorFragment
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

export const ADMIN_PROCESSOR_CREATE_MUTATION = gql(`
  mutation AdminProcessorCreate($data: ProcessorSchema!) {
    adminProcessorCreate(data: $data) {
      ...ProcessorFragment
    }
  }
`);

export const ADMIN_PROCESSOR_DELETE_MUTATION = gql(`
  mutation AdminProcessorDelete($processorId: String!) {
    adminProcessorDelete(processor_id: $processorId) {
      ...ProcessorFragment
    }
  }
`);

export const ADMIN_PROCESSOR_UPDATE_MUTATION = gql(`
  mutation AdminProcessorUpdate($processorId: String!, $data: ProcessorSchema!) {
    adminProcessorUpdate(processor_id: $processorId, data: $data) {
      ...ProcessorFragment
    }
  }
`);
