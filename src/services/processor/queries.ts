import { gql } from '@gql';

export const USER_PROCESSOR_GET_ONE_QUERY = gql(`
  query UserProcessor($processorId: String!) {
    userProcessor(processor_id: $processorId) {
      ...ProcessorFragment
    }
  }
`);

export const USER_PROCESSOR_GET_MANY_QUERY = gql(`
  query UserProcessors(
    $sorting: [SortingFieldSchema!]

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,
  ) {
    userProcessors(
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
