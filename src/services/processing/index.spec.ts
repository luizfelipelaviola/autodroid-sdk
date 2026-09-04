import { Processing } from '@services/processing';
import {
  USER_PROCESSING_DELETE_MUTATION,
  USER_PROCESSING_EXECUTION_TIME_ESTIMATION_QUERY,
  USER_PROCESSING_EXTEND_KEEP_UNTIL_MUTATION,
  USER_PROCESSING_FINISH_TIME_ESTIMATION_QUERY,
  USER_PROCESSING_GET_MANY_QUERY,
  USER_PROCESSING_GET_ONE_QUERY,
  USER_PROCESSING_REQUEST_DATASET_PROCESSING_MUTATION,
  USER_PROCESSING_UPDATE_VISIBILITY_MUTATION,
} from '@services/processing/queries';

import { describePassthrough } from '../../../test/support/passthrough';

describePassthrough('Processing service', context => new Processing(context), [
  {
    method: 'getOne',
    kind: 'query',
    document: USER_PROCESSING_GET_ONE_QUERY,
    rootField: 'userProcessing',
  },
  {
    method: 'getMany',
    kind: 'query',
    document: USER_PROCESSING_GET_MANY_QUERY,
    rootField: 'userProcesses',
  },
  {
    method: 'requestDatasetProcessing',
    kind: 'mutate',
    document: USER_PROCESSING_REQUEST_DATASET_PROCESSING_MUTATION,
    rootField: 'userRequestDatasetProcessing',
  },
  {
    method: 'updateVisibility',
    kind: 'mutate',
    document: USER_PROCESSING_UPDATE_VISIBILITY_MUTATION,
    rootField: 'userProcessingUpdateVisibility',
  },
  {
    method: 'extendKeepUntil',
    kind: 'mutate',
    document: USER_PROCESSING_EXTEND_KEEP_UNTIL_MUTATION,
    rootField: 'userProcessingExtendKeepUntil',
  },
  {
    method: 'delete',
    kind: 'mutate',
    document: USER_PROCESSING_DELETE_MUTATION,
    rootField: 'userProcessingDelete',
  },
  {
    method: 'getExecutionTimeEstimation',
    kind: 'query',
    document: USER_PROCESSING_EXECUTION_TIME_ESTIMATION_QUERY,
    rootField: 'userProcessingTimeEstimation',
  },
  {
    method: 'getFinishTimeEstimation',
    kind: 'query',
    document: USER_PROCESSING_FINISH_TIME_ESTIMATION_QUERY,
    rootField: 'userProcessingEstimatedFinish',
  },
]);
