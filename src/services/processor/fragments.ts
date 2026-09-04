import { gql } from '@gql';

export const PROCESSOR_FRAGMENT = gql(`
  fragment ProcessorFragment on Processor {
    id
    seq
    name
    version
    image_tag
    description
    tags
    allowed_mime_types
    visibility
    configuration {
      output_metrics_file_glob_patterns
      output_result_file_glob_patterns
      parameters {
        sequence
        name
        description
        type
        is_required
        default_value
      }
      dataset_input_argument
      dataset_input_value
      dataset_output_argument
      dataset_output_value
      command
    }
    created_at
    updated_at
  }
`);
