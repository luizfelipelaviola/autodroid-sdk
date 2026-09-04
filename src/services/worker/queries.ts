import { gql } from '@gql';

export const WORKER_QUERY = gql(`
  query Worker {
    worker {
      ...WorkerFragment
    }
  }
`);

export const WORKER_PROCESSING_GET_ONE_QUERY = gql(`
  query WorkerProcessing($processingId: String!) {
    workerProcessing(processing_id: $processingId) {
      ...ProcessingFragment
    }
  }
`);

export const WORKER_PROCESSING_CAPTURE_METRICS_FILE_UPLOAD_MUTATION = gql(`
  mutation WorkerProcessingCaptureMetricsFileUpload($processingId: String!) {
    workerProcessingCaptureMetricsFileUpload(processing_id: $processingId) {
      ...FileFragment
    }
  }
`);

export const WORKER_PROCESSING_CAPTURE_RESULT_FILE_UPLOAD_MUTATION = gql(`
  mutation WorkerProcessingCaptureResultFileUpload($processingId: String!) {
    workerProcessingCaptureResultFileUpload(processing_id: $processingId) {
      ...FileFragment
    }
  }
`);

export const WORKER_PROCESSING_GENERATE_METRICS_FILE_UPLOAD_MUTATION = gql(`
  mutation WorkerProcessingGenerateMetricsFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {
    workerProcessingGenerateMetricsFileUpload(data: $data, processing_id: $processingId) {
      ...FileFragment
    }
  }
`);

export const WORKER_PROCESSING_GENERATE_RESULT_FILE_UPLOAD_MUTATION = gql(`
  mutation WorkerProcessingGenerateResultFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {
    workerProcessingGenerateResultFileUpload(data: $data, processing_id: $processingId) {
      ...FileFragment
    }
  }
`);

export const WORKER_PROCESSING_REGISTER_FAILURE_MUTATION = gql(`
  mutation WorkerProcessingRegisterFailure($processingId: String!) {
    workerProcessingRegisterFailure(processing_id: $processingId) {
      ...ProcessingFragment
    }
  }
`);

export const WORKER_PROCESSING_REGISTER_PROGRESS_MUTATION = gql(`
  mutation WorkerProcessingRegisterProgress($processingId: String!) {
    workerProcessingRegisterProgress(processing_id: $processingId) {
      ...ProcessingFragment
    }
  }
`);

export const WORKER_PROCESSING_REGISTER_SUCCESS_MUTATION = gql(`
  mutation WorkerProcessingRegisterSuccess($processingId: String!) {
    workerProcessingRegisterSuccess(processing_id: $processingId) {
      ...ProcessingFragment
    }
  }
`);

export const WORKER_REGISTER_MUTATION = gql(`
  mutation WorkerRegister($internalId: String!, $name: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!) {
    workerRegister(internal_id: $internalId, name: $name, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo) {
      ...WorkerFragment
    }
  }
`);

export const WORKER_UPDATE_ACCESS_TOKEN_MUTATION = gql(`
  mutation WorkerUpdateAccessToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {
    workerUpdateAccessToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {
      access_token
      access_token_expires_at
    }
  }
`);

export const WORKER_UPDATE_REFRESH_TOKEN_MUTATION = gql(`
  mutation WorkerUpdateRefreshToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {
    workerUpdateRefreshToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {
      ...WorkerFragment
    }
  }
`);
