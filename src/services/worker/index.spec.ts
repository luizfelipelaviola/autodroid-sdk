import { Worker } from '@services/worker';
import {
  WORKER_PROCESSING_CAPTURE_METRICS_FILE_UPLOAD_MUTATION,
  WORKER_PROCESSING_CAPTURE_RESULT_FILE_UPLOAD_MUTATION,
  WORKER_PROCESSING_GENERATE_METRICS_FILE_UPLOAD_MUTATION,
  WORKER_PROCESSING_GENERATE_RESULT_FILE_UPLOAD_MUTATION,
  WORKER_PROCESSING_GET_ONE_QUERY,
  WORKER_PROCESSING_REGISTER_FAILURE_MUTATION,
  WORKER_PROCESSING_REGISTER_PROGRESS_MUTATION,
  WORKER_PROCESSING_REGISTER_SUCCESS_MUTATION,
  WORKER_QUERY,
  WORKER_REGISTER_MUTATION,
  WORKER_UPDATE_ACCESS_TOKEN_MUTATION,
  WORKER_UPDATE_REFRESH_TOKEN_MUTATION,
} from '@services/worker/queries';

import { describePassthrough } from '../../../test/support/passthrough';

describePassthrough('Worker service', context => new Worker(context), [
  {
    method: 'register',
    kind: 'mutate',
    document: WORKER_REGISTER_MUTATION,
    rootField: 'workerRegister',
  },
  {
    method: 'updateAccessToken',
    kind: 'mutate',
    document: WORKER_UPDATE_ACCESS_TOKEN_MUTATION,
    rootField: 'workerUpdateAccessToken',
  },
  {
    method: 'updateRefreshToken',
    kind: 'mutate',
    document: WORKER_UPDATE_REFRESH_TOKEN_MUTATION,
    rootField: 'workerUpdateRefreshToken',
  },
  {
    method: 'getCurrent',
    kind: 'query',
    document: WORKER_QUERY,
    rootField: 'worker',
  },
  {
    method: 'getOneProcessing',
    kind: 'query',
    document: WORKER_PROCESSING_GET_ONE_QUERY,
    rootField: 'workerProcessing',
  },
  {
    method: 'generateProcessingResultFileUpload',
    kind: 'mutate',
    document: WORKER_PROCESSING_GENERATE_RESULT_FILE_UPLOAD_MUTATION,
    rootField: 'workerProcessingGenerateResultFileUpload',
  },
  {
    method: 'captureProcessingResultFileUpload',
    kind: 'mutate',
    document: WORKER_PROCESSING_CAPTURE_RESULT_FILE_UPLOAD_MUTATION,
    rootField: 'workerProcessingCaptureResultFileUpload',
  },
  {
    method: 'generateProcessingMetricsFileUpload',
    kind: 'mutate',
    document: WORKER_PROCESSING_GENERATE_METRICS_FILE_UPLOAD_MUTATION,
    rootField: 'workerProcessingGenerateMetricsFileUpload',
  },
  {
    method: 'captureProcessingMetricsFileUpload',
    kind: 'mutate',
    document: WORKER_PROCESSING_CAPTURE_METRICS_FILE_UPLOAD_MUTATION,
    rootField: 'workerProcessingCaptureMetricsFileUpload',
  },
  {
    method: 'registerProcessingProgress',
    kind: 'mutate',
    document: WORKER_PROCESSING_REGISTER_PROGRESS_MUTATION,
    rootField: 'workerProcessingRegisterProgress',
  },
  {
    method: 'registerProcessingSuccess',
    kind: 'mutate',
    document: WORKER_PROCESSING_REGISTER_SUCCESS_MUTATION,
    rootField: 'workerProcessingRegisterSuccess',
  },
  {
    method: 'registerProcessingFailure',
    kind: 'mutate',
    document: WORKER_PROCESSING_REGISTER_FAILURE_MUTATION,
    rootField: 'workerProcessingRegisterFailure',
  },
]);
