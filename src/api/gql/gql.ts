/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query UserDatasetScalars($datasetId: String!) {\n    userDataset(dataset_id: $datasetId) {\n      id\n      seq\n      created_at\n    }\n  }\n": types.UserDatasetScalarsDocument,
    "\n  query AdminDataset($datasetId: String!) {\n    adminDataset(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n": types.AdminDatasetDocument,
    "\n  query AdminDatasets(\n    $user_id: String,\n    $file_id: String,\n    $visibility: DATASET_VISIBILITY,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminDatasets(\n      user_id: $user_id,\n      file_id: $file_id,\n      visibility: $visibility,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...DatasetFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.AdminDatasetsDocument,
    "\n  mutation AdminDatasetDelete($datasetId: String!) {\n    adminDatasetDelete(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n": types.AdminDatasetDeleteDocument,
    "\n  mutation AdminDatasetUpdate($datasetId: String!, $data: AdminDatasetUpdateSchema!) {\n    adminDatasetUpdate(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n": types.AdminDatasetUpdateDocument,
    "\n  mutation AdminDatasetUpdateVisibility($datasetId: String!, $data: AdminDatasetUpdateVisibilitySchema!) {\n    adminDatasetUpdateVisibility(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n": types.AdminDatasetUpdateVisibilityDocument,
    "\n  query AdminProcessing($processingId: String!) {\n    adminProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.AdminProcessingDocument,
    "\n  query AdminProcesses(\n    $userId: String,\n    $workerId: String,\n    $resultFileId: String,\n    $metricsFileId: String,\n\n    $datasetId: String,\n    $processorId: String,\n\n    $started: Boolean,\n    $finished: Boolean,\n\n    $status: PROCESSING_STATUS,\n    $visibility: PROCESSING_VISIBILITY,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n) {\n    adminProcesses(\n      user_id: $userId,\n      worker_id: $workerId,\n      result_file_id: $resultFileId,\n      metrics_file_id: $metricsFileId,\n\n      dataset_id: $datasetId,\n      processor_id: $processorId,\n\n      started: $started,\n      finished: $finished,\n\n      status: $status,\n      visibility: $visibility,\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessingFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.AdminProcessesDocument,
    "\n  mutation AdminProcessingDelete($processingId: String!) {\n    adminProcessingDelete(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.AdminProcessingDeleteDocument,
    "\n  mutation AdminProcessingUpdate($processingId: String!, $data: AdminProcessingUpdateSchema!) {\n    adminProcessingUpdate(processing_id: $processingId, data: $data) {\n      ...ProcessingFragment\n    }\n  }\n": types.AdminProcessingUpdateDocument,
    "\n  mutation AdminProcessingCleanExpired {\n    adminProcessingCleanExpired\n  }\n": types.AdminProcessingCleanExpiredDocument,
    "\n  query AdminProcessor($processorId: String!) {\n    adminProcessor(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n": types.AdminProcessorDocument,
    "\n  query AdminProcessors(\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminProcessors(\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessorFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.AdminProcessorsDocument,
    "\n  mutation AdminProcessorCreate($data: ProcessorSchema!) {\n    adminProcessorCreate(data: $data) {\n      ...ProcessorFragment\n    }\n  }\n": types.AdminProcessorCreateDocument,
    "\n  mutation AdminProcessorDelete($processorId: String!) {\n    adminProcessorDelete(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n": types.AdminProcessorDeleteDocument,
    "\n  mutation AdminProcessorUpdate($processorId: String!, $data: ProcessorSchema!) {\n    adminProcessorUpdate(processor_id: $processorId, data: $data) {\n      ...ProcessorFragment\n    }\n  }\n": types.AdminProcessorUpdateDocument,
    "\n  query AdminWorker($workerId: String!) {\n    adminWorker(worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n": types.AdminWorkerDocument,
    "\n  query AdminWorkers(\n    $userId: String,\n    $registrationTokenId: String,\n    $archived: Boolean,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminWorkers(\n      user_id: $userId,\n      registration_token_id: $registrationTokenId,\n      archived: $archived,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...WorkerFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.AdminWorkersDocument,
    "\n  mutation AdminWorkerUpdate($workerId: String!, $data: AdminWorkerUpdateSchema!) {\n    adminWorkerUpdate(worker_id: $workerId, data: $data) {\n      ...WorkerFragment\n    }\n  }\n": types.AdminWorkerUpdateDocument,
    "\n  mutation AdminWorkerDelete($workerId: String!) {\n    adminWorkerDelete(worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n": types.AdminWorkerDeleteDocument,
    "\n  query AdminWorkerRegistrationToken($workerRegistrationTokenId: String!) {\n    adminWorkerRegistrationToken(worker_registration_token_id: $workerRegistrationTokenId) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n": types.AdminWorkerRegistrationTokenDocument,
    "\n  query AdminWorkerRegistrationTokens(\n    $userId: String,\n    $activatable: Boolean,\n    $activated: Boolean,\n    $archived: Boolean,\n    $expired: Boolean,\n    $isUnlimitedUsage: Boolean,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminWorkerRegistrationTokens(\n      user_id: $userId,\n      activatable: $activatable,\n      activated: $activated,\n      archived: $archived,\n      expired: $expired,\n      is_unlimited_usage: $isUnlimitedUsage,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...WorkerRegistrationTokenFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.AdminWorkerRegistrationTokensDocument,
    "\n  mutation AdminWorkerRegistrationTokenCreate($data: WorkerRegistrationTokenCreateSchema!) {\n    adminWorkerRegistrationTokenCreate(data: $data) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n": types.AdminWorkerRegistrationTokenCreateDocument,
    "\n  mutation AdminWorkerRegistrationTokenDelete($workerRegistrationTokenId: String!) {\n    adminWorkerRegistrationTokenDelete(worker_registration_token_id: $workerRegistrationTokenId) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n": types.AdminWorkerRegistrationTokenDeleteDocument,
    "\n  mutation AdminWorkerCleanMissing {\n    adminWorkerCleanMissing\n  }\n": types.AdminWorkerCleanMissingDocument,
    "\n  fragment DatasetFragment on Dataset {\n    id\n    seq\n    description\n    tags\n    visibility\n    created_at\n    updated_at\n\n    user_id\n    user {\n      ...UserFragment\n    }\n\n    file_id\n    file {\n      ...FileFragment\n    }\n  }\n": types.DatasetFragmentFragmentDoc,
    "\n  query UserDataset($datasetId: String!) {\n    userDataset(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n": types.UserDatasetDocument,
    "\n  query UserDatasets(\n    $sorting: [SortingFieldSchema!]\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n  ) {\n    userDatasets(\n      sorting: $sorting\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n    ) {\n      edges {\n        node {\n          ...DatasetFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserDatasetsDocument,
    "\n  mutation UserDatasetCreate($data: UserDatasetCreateSchema!) {\n    userDatasetCreate(data: $data) {\n      ...DatasetFragment\n    }\n  }\n": types.UserDatasetCreateDocument,
    "\n  mutation UserDatasetUpdate($datasetId: String!, $data: UserDatasetUpdateSchema!) {\n    userDatasetUpdate(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n": types.UserDatasetUpdateDocument,
    "\n  mutation UserDatasetRequestPublication($datasetId: String!) {\n    userDatasetRequestPublication(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n": types.UserDatasetRequestPublicationDocument,
    "\n  mutation UserDatasetDelete($datasetId: String!) {\n    userDatasetDelete(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n": types.UserDatasetDeleteDocument,
    "\n  fragment FileFragment on File {\n    id\n    seq\n    storage_provider\n    provider_path\n    provider_status\n    provider_verified_at\n    type\n    upload_url\n    upload_url_expires_at\n    allow_public_access\n    public_url_expires_at\n    filename\n    mime_type\n    size\n    md5_hash\n    created_at\n    updated_at\n    public_url\n  }\n": types.FileFragmentFragmentDoc,
    "\n  query HealthCheck {\n    healthCheck\n  }\n": types.HealthCheckDocument,
    "\n  query HealthLivenessCheck {\n    healthLivenessCheck\n  }\n": types.HealthLivenessCheckDocument,
    "\n  query HealthReadinessCheck {\n    healthReadinessCheck\n  }\n": types.HealthReadinessCheckDocument,
    "\n  fragment ProcessingFragment on Processing {\n    id\n    seq\n    status\n    visibility\n    started_at\n    finished_at\n    keep_until\n    verified_at\n    attempts\n    message\n    configuration {\n      key\n      value\n    }\n    created_at\n    updated_at\n\n    processor_id\n    processor {\n      ...ProcessorFragment\n    }\n\n    dataset_id\n    dataset {\n      ...DatasetFragment\n    }\n\n    result_file_id\n    result_file {\n      ...FileFragment\n    }\n\n    metrics_file_id\n    metrics_file {\n      ...FileFragment\n    }\n\n    estimated_finish {\n      dataset_id\n      estimated_finish_time\n      estimated_start_time\n      processing_id\n      processor_id\n    }\n\n    worker_id\n    user_id\n  }\n": types.ProcessingFragmentFragmentDoc,
    "\n  query UserProcessing($processingId: String!) {\n    userProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.UserProcessingDocument,
    "\n  query UserProcesses(\n    $datasetId: String,\n    $processorId: String,\n\n    $started: Boolean,\n    $finished: Boolean,\n\n    $status: PROCESSING_STATUS,\n    $visibility: PROCESSING_VISIBILITY,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n) {\n    userProcesses(\n      dataset_id: $datasetId,\n      processor_id: $processorId,\n\n      started: $started,\n      finished: $finished,\n\n      status: $status,\n      visibility: $visibility,\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessingFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserProcessesDocument,
    "\n  mutation UserRequestDatasetProcessing($data: RequestDatasetProcessingSchema!) {\n    userRequestDatasetProcessing(data: $data) {\n      ...ProcessingFragment\n    }\n  }\n": types.UserRequestDatasetProcessingDocument,
    "\n  mutation UserProcessingUpdateVisibility(\n    $processingId: String!\n    $visibility: PROCESSING_VISIBILITY!\n  ) {\n    userProcessingUpdateVisibility(\n      processing_id: $processingId,\n      visibility: $visibility\n    ) {\n      ...ProcessingFragment\n    }\n  }\n": types.UserProcessingUpdateVisibilityDocument,
    "\n  mutation UserProcessingExtendKeepUntil(\n    $processingId: String!,\n    $keepUntil: DateTimeISO!\n  ) {\n    userProcessingExtendKeepUntil(\n      processing_id: $processingId,\n      keep_until: $keepUntil\n      ) {\n      ...ProcessingFragment\n    }\n  }\n": types.UserProcessingExtendKeepUntilDocument,
    "\n  mutation UserProcessingDelete($processingId: String!) {\n    userProcessingDelete(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.UserProcessingDeleteDocument,
    "\n  query UserProcessingTimeEstimation($datasetId: String!, $processorId: String!) {\n    userProcessingTimeEstimation(\n      dataset_id: $datasetId\n      processor_id: $processorId\n    ) {\n      dataset_id\n      processor_id\n      estimated_waiting_time\n      estimated_execution_time\n      estimated_total_time\n    }\n  }\n": types.UserProcessingTimeEstimationDocument,
    "\n  query UserProcessingEstimatedFinish($processingId: String!) {\n    userProcessingEstimatedFinish(\n      processing_id: $processingId\n    ) {\n      dataset_id\n      processor_id\n      processing_id\n      estimated_start_time\n      estimated_finish_time\n    }\n  }\n": types.UserProcessingEstimatedFinishDocument,
    "\n  fragment ProcessorFragment on Processor {\n    id\n    seq\n    name\n    version\n    image_tag\n    description\n    tags\n    allowed_mime_types\n    visibility\n    configuration {\n      output_metrics_file_glob_patterns\n      output_result_file_glob_patterns\n      parameters {\n        sequence\n        name\n        description\n        type\n        is_required\n        default_value\n      }\n      dataset_input_argument\n      dataset_input_value\n      dataset_output_argument\n      dataset_output_value\n      command\n    }\n    created_at\n    updated_at\n  }\n": types.ProcessorFragmentFragmentDoc,
    "\n  query UserProcessor($processorId: String!) {\n    userProcessor(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n": types.UserProcessorDocument,
    "\n  query UserProcessors(\n    $sorting: [SortingFieldSchema!]\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n  ) {\n    userProcessors(\n      sorting: $sorting\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n    ) {\n      edges {\n        node {\n          ...ProcessorFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserProcessorsDocument,
    "\n  fragment UserFragment on User {\n    id\n    seq\n    email\n    name\n    phone_number\n    learning_data\n    language\n    created_at\n    updated_at\n    is_admin\n    notifications_enabled\n  }\n": types.UserFragmentFragmentDoc,
    "\n  fragment UserAuthProviderConnFragment on UserAuthProviderConn {\n    id\n    seq\n    auth_provider\n    code\n    disconnected_at\n    created_at\n    updated_at\n    user_id\n  }\n": types.UserAuthProviderConnFragmentFragmentDoc,
    "\n  fragment UserSessionFragment on UserSession {\n    access_token\n    access_token_expires_at\n    refresh_token\n    refresh_token_expires_at\n    user_auth_provider_conn_id\n  }\n": types.UserSessionFragmentFragmentDoc,
    "\n  fragment SessionFragment on Session {\n    user {\n      ...UserFragment\n    }\n    user_auth_provider_conn {\n      ...UserAuthProviderConnFragment\n    }\n    user_session {\n      ...UserSessionFragment\n    }\n  }\n": types.SessionFragmentFragmentDoc,
    "\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n": types.UserDocument,
    "\n  query Session {\n    session {\n      ...SessionFragment\n    }\n  }\n": types.SessionDocument,
    "\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n": types.UserUpdateDataDocument,
    "\n  mutation UserSessionsClose {\n    userSessionsClose {\n      ...UserAuthProviderConnFragment\n    }\n  }\n": types.UserSessionsCloseDocument,
    "\n  mutation UserUpdateLearningData($data: JSON!) {\n    userUpdateLearningData(data: $data) {\n      ...UserFragment\n    }\n  }\n": types.UserUpdateLearningDataDocument,
    "\n  fragment WorkerRegistrationTokenFragment on WorkerRegistrationToken {\n    archived_at\n    created_at\n    expires_at\n    id\n    seq\n    is_unlimited_usage\n    token\n    updated_at\n    user_id\n  }\n": types.WorkerRegistrationTokenFragmentFragmentDoc,
    "\n  fragment WorkerFragment on Worker {\n    agent_info\n    archived_at\n    created_at\n    id\n    seq\n    internal_id\n    name\n    payload\n    refresh_token\n    refresh_token_expires_at\n    registration_token_id\n    signature\n    system_info\n    description\n    tags\n    last_seen_at\n    updated_at\n    user_id\n    version\n  }\n": types.WorkerFragmentFragmentDoc,
    "\n  query Worker {\n    worker {\n      ...WorkerFragment\n    }\n  }\n": types.WorkerDocument,
    "\n  query WorkerProcessing($processingId: String!) {\n    workerProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.WorkerProcessingDocument,
    "\n  mutation WorkerProcessingCaptureMetricsFileUpload($processingId: String!) {\n    workerProcessingCaptureMetricsFileUpload(processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n": types.WorkerProcessingCaptureMetricsFileUploadDocument,
    "\n  mutation WorkerProcessingCaptureResultFileUpload($processingId: String!) {\n    workerProcessingCaptureResultFileUpload(processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n": types.WorkerProcessingCaptureResultFileUploadDocument,
    "\n  mutation WorkerProcessingGenerateMetricsFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {\n    workerProcessingGenerateMetricsFileUpload(data: $data, processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n": types.WorkerProcessingGenerateMetricsFileUploadDocument,
    "\n  mutation WorkerProcessingGenerateResultFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {\n    workerProcessingGenerateResultFileUpload(data: $data, processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n": types.WorkerProcessingGenerateResultFileUploadDocument,
    "\n  mutation WorkerProcessingRegisterFailure($processingId: String!) {\n    workerProcessingRegisterFailure(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.WorkerProcessingRegisterFailureDocument,
    "\n  mutation WorkerProcessingRegisterProgress($processingId: String!) {\n    workerProcessingRegisterProgress(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.WorkerProcessingRegisterProgressDocument,
    "\n  mutation WorkerProcessingRegisterSuccess($processingId: String!) {\n    workerProcessingRegisterSuccess(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n": types.WorkerProcessingRegisterSuccessDocument,
    "\n  mutation WorkerRegister($internalId: String!, $name: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!) {\n    workerRegister(internal_id: $internalId, name: $name, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo) {\n      ...WorkerFragment\n    }\n  }\n": types.WorkerRegisterDocument,
    "\n  mutation WorkerUpdateAccessToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {\n    workerUpdateAccessToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {\n      access_token\n      access_token_expires_at\n    }\n  }\n": types.WorkerUpdateAccessTokenDocument,
    "\n  mutation WorkerUpdateRefreshToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {\n    workerUpdateRefreshToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n": types.WorkerUpdateRefreshTokenDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserDatasetScalars($datasetId: String!) {\n    userDataset(dataset_id: $datasetId) {\n      id\n      seq\n      created_at\n    }\n  }\n"): (typeof documents)["\n  query UserDatasetScalars($datasetId: String!) {\n    userDataset(dataset_id: $datasetId) {\n      id\n      seq\n      created_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminDataset($datasetId: String!) {\n    adminDataset(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  query AdminDataset($datasetId: String!) {\n    adminDataset(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminDatasets(\n    $user_id: String,\n    $file_id: String,\n    $visibility: DATASET_VISIBILITY,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminDatasets(\n      user_id: $user_id,\n      file_id: $file_id,\n      visibility: $visibility,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...DatasetFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AdminDatasets(\n    $user_id: String,\n    $file_id: String,\n    $visibility: DATASET_VISIBILITY,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminDatasets(\n      user_id: $user_id,\n      file_id: $file_id,\n      visibility: $visibility,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...DatasetFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminDatasetDelete($datasetId: String!) {\n    adminDatasetDelete(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminDatasetDelete($datasetId: String!) {\n    adminDatasetDelete(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminDatasetUpdate($datasetId: String!, $data: AdminDatasetUpdateSchema!) {\n    adminDatasetUpdate(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminDatasetUpdate($datasetId: String!, $data: AdminDatasetUpdateSchema!) {\n    adminDatasetUpdate(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminDatasetUpdateVisibility($datasetId: String!, $data: AdminDatasetUpdateVisibilitySchema!) {\n    adminDatasetUpdateVisibility(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminDatasetUpdateVisibility($datasetId: String!, $data: AdminDatasetUpdateVisibilitySchema!) {\n    adminDatasetUpdateVisibility(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminProcessing($processingId: String!) {\n    adminProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  query AdminProcessing($processingId: String!) {\n    adminProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminProcesses(\n    $userId: String,\n    $workerId: String,\n    $resultFileId: String,\n    $metricsFileId: String,\n\n    $datasetId: String,\n    $processorId: String,\n\n    $started: Boolean,\n    $finished: Boolean,\n\n    $status: PROCESSING_STATUS,\n    $visibility: PROCESSING_VISIBILITY,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n) {\n    adminProcesses(\n      user_id: $userId,\n      worker_id: $workerId,\n      result_file_id: $resultFileId,\n      metrics_file_id: $metricsFileId,\n\n      dataset_id: $datasetId,\n      processor_id: $processorId,\n\n      started: $started,\n      finished: $finished,\n\n      status: $status,\n      visibility: $visibility,\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessingFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AdminProcesses(\n    $userId: String,\n    $workerId: String,\n    $resultFileId: String,\n    $metricsFileId: String,\n\n    $datasetId: String,\n    $processorId: String,\n\n    $started: Boolean,\n    $finished: Boolean,\n\n    $status: PROCESSING_STATUS,\n    $visibility: PROCESSING_VISIBILITY,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n) {\n    adminProcesses(\n      user_id: $userId,\n      worker_id: $workerId,\n      result_file_id: $resultFileId,\n      metrics_file_id: $metricsFileId,\n\n      dataset_id: $datasetId,\n      processor_id: $processorId,\n\n      started: $started,\n      finished: $finished,\n\n      status: $status,\n      visibility: $visibility,\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessingFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminProcessingDelete($processingId: String!) {\n    adminProcessingDelete(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminProcessingDelete($processingId: String!) {\n    adminProcessingDelete(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminProcessingUpdate($processingId: String!, $data: AdminProcessingUpdateSchema!) {\n    adminProcessingUpdate(processing_id: $processingId, data: $data) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminProcessingUpdate($processingId: String!, $data: AdminProcessingUpdateSchema!) {\n    adminProcessingUpdate(processing_id: $processingId, data: $data) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminProcessingCleanExpired {\n    adminProcessingCleanExpired\n  }\n"): (typeof documents)["\n  mutation AdminProcessingCleanExpired {\n    adminProcessingCleanExpired\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminProcessor($processorId: String!) {\n    adminProcessor(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n"): (typeof documents)["\n  query AdminProcessor($processorId: String!) {\n    adminProcessor(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminProcessors(\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminProcessors(\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessorFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AdminProcessors(\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminProcessors(\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessorFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminProcessorCreate($data: ProcessorSchema!) {\n    adminProcessorCreate(data: $data) {\n      ...ProcessorFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminProcessorCreate($data: ProcessorSchema!) {\n    adminProcessorCreate(data: $data) {\n      ...ProcessorFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminProcessorDelete($processorId: String!) {\n    adminProcessorDelete(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminProcessorDelete($processorId: String!) {\n    adminProcessorDelete(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminProcessorUpdate($processorId: String!, $data: ProcessorSchema!) {\n    adminProcessorUpdate(processor_id: $processorId, data: $data) {\n      ...ProcessorFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminProcessorUpdate($processorId: String!, $data: ProcessorSchema!) {\n    adminProcessorUpdate(processor_id: $processorId, data: $data) {\n      ...ProcessorFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminWorker($workerId: String!) {\n    adminWorker(worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n"): (typeof documents)["\n  query AdminWorker($workerId: String!) {\n    adminWorker(worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminWorkers(\n    $userId: String,\n    $registrationTokenId: String,\n    $archived: Boolean,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminWorkers(\n      user_id: $userId,\n      registration_token_id: $registrationTokenId,\n      archived: $archived,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...WorkerFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AdminWorkers(\n    $userId: String,\n    $registrationTokenId: String,\n    $archived: Boolean,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminWorkers(\n      user_id: $userId,\n      registration_token_id: $registrationTokenId,\n      archived: $archived,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...WorkerFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminWorkerUpdate($workerId: String!, $data: AdminWorkerUpdateSchema!) {\n    adminWorkerUpdate(worker_id: $workerId, data: $data) {\n      ...WorkerFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminWorkerUpdate($workerId: String!, $data: AdminWorkerUpdateSchema!) {\n    adminWorkerUpdate(worker_id: $workerId, data: $data) {\n      ...WorkerFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminWorkerDelete($workerId: String!) {\n    adminWorkerDelete(worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminWorkerDelete($workerId: String!) {\n    adminWorkerDelete(worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminWorkerRegistrationToken($workerRegistrationTokenId: String!) {\n    adminWorkerRegistrationToken(worker_registration_token_id: $workerRegistrationTokenId) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n"): (typeof documents)["\n  query AdminWorkerRegistrationToken($workerRegistrationTokenId: String!) {\n    adminWorkerRegistrationToken(worker_registration_token_id: $workerRegistrationTokenId) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminWorkerRegistrationTokens(\n    $userId: String,\n    $activatable: Boolean,\n    $activated: Boolean,\n    $archived: Boolean,\n    $expired: Boolean,\n    $isUnlimitedUsage: Boolean,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminWorkerRegistrationTokens(\n      user_id: $userId,\n      activatable: $activatable,\n      activated: $activated,\n      archived: $archived,\n      expired: $expired,\n      is_unlimited_usage: $isUnlimitedUsage,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...WorkerRegistrationTokenFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query AdminWorkerRegistrationTokens(\n    $userId: String,\n    $activatable: Boolean,\n    $activated: Boolean,\n    $archived: Boolean,\n    $expired: Boolean,\n    $isUnlimitedUsage: Boolean,\n\n    $after: ConnectionCursor,\n    $before: ConnectionCursor,\n\n    $first: Int,\n    $last: Int,\n\n    $skip: Int,\n    $take: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    adminWorkerRegistrationTokens(\n      user_id: $userId,\n      activatable: $activatable,\n      activated: $activated,\n      archived: $archived,\n      expired: $expired,\n      is_unlimited_usage: $isUnlimitedUsage,\n\n      after: $after,\n      before: $before,\n\n      first: $first,\n      last: $last,\n\n      skip: $skip,\n      take: $take,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...WorkerRegistrationTokenFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminWorkerRegistrationTokenCreate($data: WorkerRegistrationTokenCreateSchema!) {\n    adminWorkerRegistrationTokenCreate(data: $data) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminWorkerRegistrationTokenCreate($data: WorkerRegistrationTokenCreateSchema!) {\n    adminWorkerRegistrationTokenCreate(data: $data) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminWorkerRegistrationTokenDelete($workerRegistrationTokenId: String!) {\n    adminWorkerRegistrationTokenDelete(worker_registration_token_id: $workerRegistrationTokenId) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n"): (typeof documents)["\n  mutation AdminWorkerRegistrationTokenDelete($workerRegistrationTokenId: String!) {\n    adminWorkerRegistrationTokenDelete(worker_registration_token_id: $workerRegistrationTokenId) {\n      ...WorkerRegistrationTokenFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AdminWorkerCleanMissing {\n    adminWorkerCleanMissing\n  }\n"): (typeof documents)["\n  mutation AdminWorkerCleanMissing {\n    adminWorkerCleanMissing\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment DatasetFragment on Dataset {\n    id\n    seq\n    description\n    tags\n    visibility\n    created_at\n    updated_at\n\n    user_id\n    user {\n      ...UserFragment\n    }\n\n    file_id\n    file {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  fragment DatasetFragment on Dataset {\n    id\n    seq\n    description\n    tags\n    visibility\n    created_at\n    updated_at\n\n    user_id\n    user {\n      ...UserFragment\n    }\n\n    file_id\n    file {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserDataset($datasetId: String!) {\n    userDataset(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  query UserDataset($datasetId: String!) {\n    userDataset(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserDatasets(\n    $sorting: [SortingFieldSchema!]\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n  ) {\n    userDatasets(\n      sorting: $sorting\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n    ) {\n      edges {\n        node {\n          ...DatasetFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserDatasets(\n    $sorting: [SortingFieldSchema!]\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n  ) {\n    userDatasets(\n      sorting: $sorting\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n    ) {\n      edges {\n        node {\n          ...DatasetFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserDatasetCreate($data: UserDatasetCreateSchema!) {\n    userDatasetCreate(data: $data) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserDatasetCreate($data: UserDatasetCreateSchema!) {\n    userDatasetCreate(data: $data) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserDatasetUpdate($datasetId: String!, $data: UserDatasetUpdateSchema!) {\n    userDatasetUpdate(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserDatasetUpdate($datasetId: String!, $data: UserDatasetUpdateSchema!) {\n    userDatasetUpdate(dataset_id: $datasetId, data: $data) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserDatasetRequestPublication($datasetId: String!) {\n    userDatasetRequestPublication(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserDatasetRequestPublication($datasetId: String!) {\n    userDatasetRequestPublication(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserDatasetDelete($datasetId: String!) {\n    userDatasetDelete(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserDatasetDelete($datasetId: String!) {\n    userDatasetDelete(dataset_id: $datasetId) {\n      ...DatasetFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FileFragment on File {\n    id\n    seq\n    storage_provider\n    provider_path\n    provider_status\n    provider_verified_at\n    type\n    upload_url\n    upload_url_expires_at\n    allow_public_access\n    public_url_expires_at\n    filename\n    mime_type\n    size\n    md5_hash\n    created_at\n    updated_at\n    public_url\n  }\n"): (typeof documents)["\n  fragment FileFragment on File {\n    id\n    seq\n    storage_provider\n    provider_path\n    provider_status\n    provider_verified_at\n    type\n    upload_url\n    upload_url_expires_at\n    allow_public_access\n    public_url_expires_at\n    filename\n    mime_type\n    size\n    md5_hash\n    created_at\n    updated_at\n    public_url\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HealthCheck {\n    healthCheck\n  }\n"): (typeof documents)["\n  query HealthCheck {\n    healthCheck\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HealthLivenessCheck {\n    healthLivenessCheck\n  }\n"): (typeof documents)["\n  query HealthLivenessCheck {\n    healthLivenessCheck\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HealthReadinessCheck {\n    healthReadinessCheck\n  }\n"): (typeof documents)["\n  query HealthReadinessCheck {\n    healthReadinessCheck\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProcessingFragment on Processing {\n    id\n    seq\n    status\n    visibility\n    started_at\n    finished_at\n    keep_until\n    verified_at\n    attempts\n    message\n    configuration {\n      key\n      value\n    }\n    created_at\n    updated_at\n\n    processor_id\n    processor {\n      ...ProcessorFragment\n    }\n\n    dataset_id\n    dataset {\n      ...DatasetFragment\n    }\n\n    result_file_id\n    result_file {\n      ...FileFragment\n    }\n\n    metrics_file_id\n    metrics_file {\n      ...FileFragment\n    }\n\n    estimated_finish {\n      dataset_id\n      estimated_finish_time\n      estimated_start_time\n      processing_id\n      processor_id\n    }\n\n    worker_id\n    user_id\n  }\n"): (typeof documents)["\n  fragment ProcessingFragment on Processing {\n    id\n    seq\n    status\n    visibility\n    started_at\n    finished_at\n    keep_until\n    verified_at\n    attempts\n    message\n    configuration {\n      key\n      value\n    }\n    created_at\n    updated_at\n\n    processor_id\n    processor {\n      ...ProcessorFragment\n    }\n\n    dataset_id\n    dataset {\n      ...DatasetFragment\n    }\n\n    result_file_id\n    result_file {\n      ...FileFragment\n    }\n\n    metrics_file_id\n    metrics_file {\n      ...FileFragment\n    }\n\n    estimated_finish {\n      dataset_id\n      estimated_finish_time\n      estimated_start_time\n      processing_id\n      processor_id\n    }\n\n    worker_id\n    user_id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserProcessing($processingId: String!) {\n    userProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  query UserProcessing($processingId: String!) {\n    userProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserProcesses(\n    $datasetId: String,\n    $processorId: String,\n\n    $started: Boolean,\n    $finished: Boolean,\n\n    $status: PROCESSING_STATUS,\n    $visibility: PROCESSING_VISIBILITY,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n) {\n    userProcesses(\n      dataset_id: $datasetId,\n      processor_id: $processorId,\n\n      started: $started,\n      finished: $finished,\n\n      status: $status,\n      visibility: $visibility,\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessingFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserProcesses(\n    $datasetId: String,\n    $processorId: String,\n\n    $started: Boolean,\n    $finished: Boolean,\n\n    $status: PROCESSING_STATUS,\n    $visibility: PROCESSING_VISIBILITY,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n) {\n    userProcesses(\n      dataset_id: $datasetId,\n      processor_id: $processorId,\n\n      started: $started,\n      finished: $finished,\n\n      status: $status,\n      visibility: $visibility,\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...ProcessingFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserRequestDatasetProcessing($data: RequestDatasetProcessingSchema!) {\n    userRequestDatasetProcessing(data: $data) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserRequestDatasetProcessing($data: RequestDatasetProcessingSchema!) {\n    userRequestDatasetProcessing(data: $data) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserProcessingUpdateVisibility(\n    $processingId: String!\n    $visibility: PROCESSING_VISIBILITY!\n  ) {\n    userProcessingUpdateVisibility(\n      processing_id: $processingId,\n      visibility: $visibility\n    ) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserProcessingUpdateVisibility(\n    $processingId: String!\n    $visibility: PROCESSING_VISIBILITY!\n  ) {\n    userProcessingUpdateVisibility(\n      processing_id: $processingId,\n      visibility: $visibility\n    ) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserProcessingExtendKeepUntil(\n    $processingId: String!,\n    $keepUntil: DateTimeISO!\n  ) {\n    userProcessingExtendKeepUntil(\n      processing_id: $processingId,\n      keep_until: $keepUntil\n      ) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserProcessingExtendKeepUntil(\n    $processingId: String!,\n    $keepUntil: DateTimeISO!\n  ) {\n    userProcessingExtendKeepUntil(\n      processing_id: $processingId,\n      keep_until: $keepUntil\n      ) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserProcessingDelete($processingId: String!) {\n    userProcessingDelete(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserProcessingDelete($processingId: String!) {\n    userProcessingDelete(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserProcessingTimeEstimation($datasetId: String!, $processorId: String!) {\n    userProcessingTimeEstimation(\n      dataset_id: $datasetId\n      processor_id: $processorId\n    ) {\n      dataset_id\n      processor_id\n      estimated_waiting_time\n      estimated_execution_time\n      estimated_total_time\n    }\n  }\n"): (typeof documents)["\n  query UserProcessingTimeEstimation($datasetId: String!, $processorId: String!) {\n    userProcessingTimeEstimation(\n      dataset_id: $datasetId\n      processor_id: $processorId\n    ) {\n      dataset_id\n      processor_id\n      estimated_waiting_time\n      estimated_execution_time\n      estimated_total_time\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserProcessingEstimatedFinish($processingId: String!) {\n    userProcessingEstimatedFinish(\n      processing_id: $processingId\n    ) {\n      dataset_id\n      processor_id\n      processing_id\n      estimated_start_time\n      estimated_finish_time\n    }\n  }\n"): (typeof documents)["\n  query UserProcessingEstimatedFinish($processingId: String!) {\n    userProcessingEstimatedFinish(\n      processing_id: $processingId\n    ) {\n      dataset_id\n      processor_id\n      processing_id\n      estimated_start_time\n      estimated_finish_time\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProcessorFragment on Processor {\n    id\n    seq\n    name\n    version\n    image_tag\n    description\n    tags\n    allowed_mime_types\n    visibility\n    configuration {\n      output_metrics_file_glob_patterns\n      output_result_file_glob_patterns\n      parameters {\n        sequence\n        name\n        description\n        type\n        is_required\n        default_value\n      }\n      dataset_input_argument\n      dataset_input_value\n      dataset_output_argument\n      dataset_output_value\n      command\n    }\n    created_at\n    updated_at\n  }\n"): (typeof documents)["\n  fragment ProcessorFragment on Processor {\n    id\n    seq\n    name\n    version\n    image_tag\n    description\n    tags\n    allowed_mime_types\n    visibility\n    configuration {\n      output_metrics_file_glob_patterns\n      output_result_file_glob_patterns\n      parameters {\n        sequence\n        name\n        description\n        type\n        is_required\n        default_value\n      }\n      dataset_input_argument\n      dataset_input_value\n      dataset_output_argument\n      dataset_output_value\n      command\n    }\n    created_at\n    updated_at\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserProcessor($processorId: String!) {\n    userProcessor(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n"): (typeof documents)["\n  query UserProcessor($processorId: String!) {\n    userProcessor(processor_id: $processorId) {\n      ...ProcessorFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserProcessors(\n    $sorting: [SortingFieldSchema!]\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n  ) {\n    userProcessors(\n      sorting: $sorting\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n    ) {\n      edges {\n        node {\n          ...ProcessorFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserProcessors(\n    $sorting: [SortingFieldSchema!]\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n  ) {\n    userProcessors(\n      sorting: $sorting\n\n      skip: $skip,\n      take: $take,\n\n      first: $first,\n      after: $after,\n\n      before: $before,\n      last: $last,\n    ) {\n      edges {\n        node {\n          ...ProcessorFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFragment on User {\n    id\n    seq\n    email\n    name\n    phone_number\n    learning_data\n    language\n    created_at\n    updated_at\n    is_admin\n    notifications_enabled\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    seq\n    email\n    name\n    phone_number\n    learning_data\n    language\n    created_at\n    updated_at\n    is_admin\n    notifications_enabled\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserAuthProviderConnFragment on UserAuthProviderConn {\n    id\n    seq\n    auth_provider\n    code\n    disconnected_at\n    created_at\n    updated_at\n    user_id\n  }\n"): (typeof documents)["\n  fragment UserAuthProviderConnFragment on UserAuthProviderConn {\n    id\n    seq\n    auth_provider\n    code\n    disconnected_at\n    created_at\n    updated_at\n    user_id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserSessionFragment on UserSession {\n    access_token\n    access_token_expires_at\n    refresh_token\n    refresh_token_expires_at\n    user_auth_provider_conn_id\n  }\n"): (typeof documents)["\n  fragment UserSessionFragment on UserSession {\n    access_token\n    access_token_expires_at\n    refresh_token\n    refresh_token_expires_at\n    user_auth_provider_conn_id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment SessionFragment on Session {\n    user {\n      ...UserFragment\n    }\n    user_auth_provider_conn {\n      ...UserAuthProviderConnFragment\n    }\n    user_session {\n      ...UserSessionFragment\n    }\n  }\n"): (typeof documents)["\n  fragment SessionFragment on Session {\n    user {\n      ...UserFragment\n    }\n    user_auth_provider_conn {\n      ...UserAuthProviderConnFragment\n    }\n    user_session {\n      ...UserSessionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Session {\n    session {\n      ...SessionFragment\n    }\n  }\n"): (typeof documents)["\n  query Session {\n    session {\n      ...SessionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserSessionsClose {\n    userSessionsClose {\n      ...UserAuthProviderConnFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserSessionsClose {\n    userSessionsClose {\n      ...UserAuthProviderConnFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserUpdateLearningData($data: JSON!) {\n    userUpdateLearningData(data: $data) {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserUpdateLearningData($data: JSON!) {\n    userUpdateLearningData(data: $data) {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment WorkerRegistrationTokenFragment on WorkerRegistrationToken {\n    archived_at\n    created_at\n    expires_at\n    id\n    seq\n    is_unlimited_usage\n    token\n    updated_at\n    user_id\n  }\n"): (typeof documents)["\n  fragment WorkerRegistrationTokenFragment on WorkerRegistrationToken {\n    archived_at\n    created_at\n    expires_at\n    id\n    seq\n    is_unlimited_usage\n    token\n    updated_at\n    user_id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment WorkerFragment on Worker {\n    agent_info\n    archived_at\n    created_at\n    id\n    seq\n    internal_id\n    name\n    payload\n    refresh_token\n    refresh_token_expires_at\n    registration_token_id\n    signature\n    system_info\n    description\n    tags\n    last_seen_at\n    updated_at\n    user_id\n    version\n  }\n"): (typeof documents)["\n  fragment WorkerFragment on Worker {\n    agent_info\n    archived_at\n    created_at\n    id\n    seq\n    internal_id\n    name\n    payload\n    refresh_token\n    refresh_token_expires_at\n    registration_token_id\n    signature\n    system_info\n    description\n    tags\n    last_seen_at\n    updated_at\n    user_id\n    version\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Worker {\n    worker {\n      ...WorkerFragment\n    }\n  }\n"): (typeof documents)["\n  query Worker {\n    worker {\n      ...WorkerFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query WorkerProcessing($processingId: String!) {\n    workerProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  query WorkerProcessing($processingId: String!) {\n    workerProcessing(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingCaptureMetricsFileUpload($processingId: String!) {\n    workerProcessingCaptureMetricsFileUpload(processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingCaptureMetricsFileUpload($processingId: String!) {\n    workerProcessingCaptureMetricsFileUpload(processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingCaptureResultFileUpload($processingId: String!) {\n    workerProcessingCaptureResultFileUpload(processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingCaptureResultFileUpload($processingId: String!) {\n    workerProcessingCaptureResultFileUpload(processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingGenerateMetricsFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {\n    workerProcessingGenerateMetricsFileUpload(data: $data, processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingGenerateMetricsFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {\n    workerProcessingGenerateMetricsFileUpload(data: $data, processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingGenerateResultFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {\n    workerProcessingGenerateResultFileUpload(data: $data, processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingGenerateResultFileUpload($data: RequestFileUploadSignedUrlSchema!, $processingId: String!) {\n    workerProcessingGenerateResultFileUpload(data: $data, processing_id: $processingId) {\n      ...FileFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingRegisterFailure($processingId: String!) {\n    workerProcessingRegisterFailure(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingRegisterFailure($processingId: String!) {\n    workerProcessingRegisterFailure(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingRegisterProgress($processingId: String!) {\n    workerProcessingRegisterProgress(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingRegisterProgress($processingId: String!) {\n    workerProcessingRegisterProgress(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerProcessingRegisterSuccess($processingId: String!) {\n    workerProcessingRegisterSuccess(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerProcessingRegisterSuccess($processingId: String!) {\n    workerProcessingRegisterSuccess(processing_id: $processingId) {\n      ...ProcessingFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerRegister($internalId: String!, $name: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!) {\n    workerRegister(internal_id: $internalId, name: $name, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo) {\n      ...WorkerFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerRegister($internalId: String!, $name: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!) {\n    workerRegister(internal_id: $internalId, name: $name, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo) {\n      ...WorkerFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerUpdateAccessToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {\n    workerUpdateAccessToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {\n      access_token\n      access_token_expires_at\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerUpdateAccessToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {\n    workerUpdateAccessToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {\n      access_token\n      access_token_expires_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation WorkerUpdateRefreshToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {\n    workerUpdateRefreshToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n"): (typeof documents)["\n  mutation WorkerUpdateRefreshToken($internalId: String!, $name: String!, $refreshToken: String!, $registrationToken: String!, $signature: String!, $systemInfo: JSON!, $workerId: String!) {\n    workerUpdateRefreshToken(internal_id: $internalId, name: $name, refresh_token: $refreshToken, registration_token: $registrationToken, signature: $signature, system_info: $systemInfo, worker_id: $workerId) {\n      ...WorkerFragment\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;