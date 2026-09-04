import { gql } from '@gql';

export const PROCESSING_FRAGMENT = gql(`
  fragment ProcessingFragment on Processing {
    id
    seq
    status
    visibility
    started_at
    finished_at
    keep_until
    verified_at
    attempts
    message
    configuration {
      key
      value
    }
    created_at
    updated_at

    processor_id
    processor {
      ...ProcessorFragment
    }

    dataset_id
    dataset {
      ...DatasetFragment
    }

    result_file_id
    result_file {
      ...FileFragment
    }

    metrics_file_id
    metrics_file {
      ...FileFragment
    }

    estimated_finish {
      dataset_id
      estimated_finish_time
      estimated_start_time
      processing_id
      processor_id
    }

    worker_id
    user_id
  }
`);
