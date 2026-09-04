export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** Cursor for pagination */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum AUTH_PROVIDER {
  FIREBASE = 'FIREBASE'
}

export type AdminDatasetUpdateSchema = {
  description?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
};

export type AdminDatasetUpdateVisibilitySchema = {
  visibility: DATASET_VISIBILITY;
};

export type AdminProcessingUpdateSchema = {
  keep_until: Scalars['DateTimeISO']['input'];
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
};

export type AdminWorkerUpdateSchema = {
  description?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
};

export enum DATASET_VISIBILITY {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
  UNDER_REVIEW = 'UNDER_REVIEW'
}

export type Dataset = {
  __typename?: 'Dataset';
  created_at: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  file: File;
  file_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  processes: ProcessingPaginationConnection;
  seq: Scalars['BigInt']['output'];
  tags?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
  visibility: DATASET_VISIBILITY;
};


export type DatasetprocessesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  dataset_id?: InputMaybe<Scalars['String']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  processor_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
};

export type DatasetPaginationConnection = {
  __typename?: 'DatasetPaginationConnection';
  edges: Array<DatasetPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DatasetPaginationEdge = {
  __typename?: 'DatasetPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Dataset;
};

export enum FILE_PROVIDER_STATUS {
  NOT_FOUND = 'NOT_FOUND',
  PENDING = 'PENDING',
  READY = 'READY'
}

export enum FILE_TYPE {
  DATASET = 'DATASET',
  PROCESSING_METRICS = 'PROCESSING_METRICS',
  PROCESSING_RESULT = 'PROCESSING_RESULT'
}

export type File = {
  __typename?: 'File';
  allow_public_access: Scalars['Boolean']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  md5_hash: Scalars['String']['output'];
  mime_type: MIME_TYPE;
  payload: Scalars['JSON']['output'];
  provider_path: Scalars['String']['output'];
  provider_status: FILE_PROVIDER_STATUS;
  provider_verified_at?: Maybe<Scalars['DateTimeISO']['output']>;
  public_url?: Maybe<Scalars['String']['output']>;
  public_url_expires_at?: Maybe<Scalars['DateTimeISO']['output']>;
  seq: Scalars['BigInt']['output'];
  size: Scalars['Int']['output'];
  storage_provider: STORAGE_PROVIDER;
  type: FILE_TYPE;
  updated_at: Scalars['DateTimeISO']['output'];
  upload_url?: Maybe<Scalars['String']['output']>;
  upload_url_expires_at?: Maybe<Scalars['DateTimeISO']['output']>;
};

export enum MIME_TYPE {
  CSV = 'CSV',
  JPEG = 'JPEG',
  OTHER = 'OTHER',
  PDF = 'PDF',
  PNG = 'PNG',
  ZIP = 'ZIP'
}

export type Mutation = {
  __typename?: 'Mutation';
  adminDatasetDelete: Dataset;
  adminDatasetUpdate: Dataset;
  adminDatasetUpdateVisibility: Dataset;
  adminFileRemoveAllDangling: Scalars['Int']['output'];
  adminProcessingCleanExpired: Scalars['Int']['output'];
  adminProcessingDelete: Processing;
  adminProcessingFailDangling: Scalars['Int']['output'];
  adminProcessingUpdate: Processing;
  adminProcessorCreate: Processor;
  adminProcessorDelete: Processor;
  adminProcessorUpdate: Processor;
  adminWorkerCleanMissing: Scalars['Int']['output'];
  adminWorkerDelete: Worker;
  adminWorkerRegistrationTokenCreate: WorkerRegistrationToken;
  adminWorkerRegistrationTokenDelete: WorkerRegistrationToken;
  adminWorkerUpdate: Worker;
  userDatasetCreate: Dataset;
  userDatasetDelete: Dataset;
  userDatasetRequestPublication: Dataset;
  userDatasetUpdate: Dataset;
  userProcessingDelete: Processing;
  userProcessingExtendKeepUntil: Processing;
  userProcessingUpdateVisibility: Processing;
  userRequestDatasetProcessing: Processing;
  userSessionsClose: UserAuthProviderConn;
  userUpdateData: User;
  userUpdateLearningData: User;
  workerProcessingCaptureMetricsFileUpload: File;
  workerProcessingCaptureResultFileUpload: File;
  workerProcessingGenerateMetricsFileUpload: File;
  workerProcessingGenerateResultFileUpload: File;
  workerProcessingRegisterFailure: Processing;
  workerProcessingRegisterProgress: Processing;
  workerProcessingRegisterSuccess: Processing;
  workerRegister: Worker;
  workerUpdateAccessToken: WorkerAccessToken;
  workerUpdateRefreshToken: Worker;
};


export type MutationadminDatasetDeleteArgs = {
  dataset_id: Scalars['String']['input'];
};


export type MutationadminDatasetUpdateArgs = {
  data: AdminDatasetUpdateSchema;
  dataset_id: Scalars['String']['input'];
};


export type MutationadminDatasetUpdateVisibilityArgs = {
  data: AdminDatasetUpdateVisibilitySchema;
  dataset_id: Scalars['String']['input'];
};


export type MutationadminProcessingDeleteArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationadminProcessingFailDanglingArgs = {
  created_at_end_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
};


export type MutationadminProcessingUpdateArgs = {
  data: AdminProcessingUpdateSchema;
  processing_id: Scalars['String']['input'];
};


export type MutationadminProcessorCreateArgs = {
  data: ProcessorSchema;
};


export type MutationadminProcessorDeleteArgs = {
  processor_id: Scalars['String']['input'];
};


export type MutationadminProcessorUpdateArgs = {
  data: ProcessorSchema;
  processor_id: Scalars['String']['input'];
};


export type MutationadminWorkerDeleteArgs = {
  worker_id: Scalars['String']['input'];
};


export type MutationadminWorkerRegistrationTokenCreateArgs = {
  data: WorkerRegistrationTokenCreateSchema;
};


export type MutationadminWorkerRegistrationTokenDeleteArgs = {
  worker_registration_token_id: Scalars['String']['input'];
};


export type MutationadminWorkerUpdateArgs = {
  data: AdminWorkerUpdateSchema;
  worker_id: Scalars['String']['input'];
};


export type MutationuserDatasetCreateArgs = {
  data: UserDatasetCreateSchema;
};


export type MutationuserDatasetDeleteArgs = {
  dataset_id: Scalars['String']['input'];
};


export type MutationuserDatasetRequestPublicationArgs = {
  dataset_id: Scalars['String']['input'];
};


export type MutationuserDatasetUpdateArgs = {
  data: UserDatasetUpdateSchema;
  dataset_id: Scalars['String']['input'];
};


export type MutationuserProcessingDeleteArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationuserProcessingExtendKeepUntilArgs = {
  keep_until: Scalars['DateTimeISO']['input'];
  processing_id: Scalars['String']['input'];
};


export type MutationuserProcessingUpdateVisibilityArgs = {
  processing_id: Scalars['String']['input'];
  visibility: PROCESSING_VISIBILITY;
};


export type MutationuserRequestDatasetProcessingArgs = {
  data: RequestDatasetProcessingSchema;
};


export type MutationuserUpdateDataArgs = {
  data: UserUpdateDataSchema;
};


export type MutationuserUpdateLearningDataArgs = {
  data: Scalars['JSON']['input'];
};


export type MutationworkerProcessingCaptureMetricsFileUploadArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationworkerProcessingCaptureResultFileUploadArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationworkerProcessingGenerateMetricsFileUploadArgs = {
  data: RequestFileUploadSignedUrlSchema;
  processing_id: Scalars['String']['input'];
};


export type MutationworkerProcessingGenerateResultFileUploadArgs = {
  data: RequestFileUploadSignedUrlSchema;
  processing_id: Scalars['String']['input'];
};


export type MutationworkerProcessingRegisterFailureArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationworkerProcessingRegisterProgressArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationworkerProcessingRegisterSuccessArgs = {
  processing_id: Scalars['String']['input'];
};


export type MutationworkerRegisterArgs = {
  internal_id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  registration_token: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  system_info: Scalars['JSON']['input'];
};


export type MutationworkerUpdateAccessTokenArgs = {
  internal_id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  refresh_token: Scalars['String']['input'];
  registration_token: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  system_info: Scalars['JSON']['input'];
  worker_id: Scalars['String']['input'];
};


export type MutationworkerUpdateRefreshTokenArgs = {
  internal_id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  refresh_token: Scalars['String']['input'];
  registration_token: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  system_info: Scalars['JSON']['input'];
  worker_id: Scalars['String']['input'];
};

export enum PROCESSING_STATUS {
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  SUCCEEDED = 'SUCCEEDED'
}

export enum PROCESSING_VISIBILITY {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export enum PROCESSOR_PARAMETER_TYPE {
  BOOLEAN = 'BOOLEAN',
  INTEGER = 'INTEGER',
  STRING = 'STRING'
}

export enum PROCESSOR_VISIBILITY {
  HIDDEN = 'HIDDEN',
  PUBLIC = 'PUBLIC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Processing = {
  __typename?: 'Processing';
  archived_at?: Maybe<Scalars['DateTimeISO']['output']>;
  attempts?: Maybe<Scalars['Int']['output']>;
  configuration: Array<ProcessingParameter>;
  created_at: Scalars['DateTimeISO']['output'];
  dataset: Dataset;
  dataset_id: Scalars['String']['output'];
  estimated_finish?: Maybe<ProcessingFinishTimeEstimation>;
  finished_at?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  keep_until?: Maybe<Scalars['DateTimeISO']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  metrics_file?: Maybe<File>;
  metrics_file_id?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  processor: Processor;
  processor_id: Scalars['String']['output'];
  reported_at?: Maybe<Scalars['DateTimeISO']['output']>;
  result_file?: Maybe<File>;
  result_file_id?: Maybe<Scalars['String']['output']>;
  seq: Scalars['BigInt']['output'];
  started_at?: Maybe<Scalars['DateTimeISO']['output']>;
  status: PROCESSING_STATUS;
  updated_at: Scalars['DateTimeISO']['output'];
  user: User;
  user_id: Scalars['String']['output'];
  verified_at?: Maybe<Scalars['DateTimeISO']['output']>;
  visibility: PROCESSING_VISIBILITY;
  worker_id?: Maybe<Scalars['String']['output']>;
};

export type ProcessingFinishTimeEstimation = {
  __typename?: 'ProcessingFinishTimeEstimation';
  dataset_id: Scalars['String']['output'];
  estimated_finish_time?: Maybe<Scalars['DateTimeISO']['output']>;
  estimated_start_time?: Maybe<Scalars['DateTimeISO']['output']>;
  processing_id: Scalars['String']['output'];
  processor_id: Scalars['String']['output'];
};

export type ProcessingPaginationConnection = {
  __typename?: 'ProcessingPaginationConnection';
  edges: Array<ProcessingPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProcessingPaginationEdge = {
  __typename?: 'ProcessingPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Processing;
};

export type ProcessingParameter = {
  __typename?: 'ProcessingParameter';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ProcessingTimeEstimation = {
  __typename?: 'ProcessingTimeEstimation';
  dataset_id: Scalars['String']['output'];
  /** Estimated execution time in seconds after the start of the processing. */
  estimated_execution_time?: Maybe<Scalars['Int']['output']>;
  /** Estimated total time in seconds before the end of the processing. */
  estimated_total_time?: Maybe<Scalars['Int']['output']>;
  /** Estimated waiting time in seconds before the start of the processing to acquire the available worker. */
  estimated_waiting_time?: Maybe<Scalars['Int']['output']>;
  processor_id: Scalars['String']['output'];
};

export type Processor = {
  __typename?: 'Processor';
  allowed_mime_types: Scalars['String']['output'];
  configuration: ProcessorConfiguration;
  created_at: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image_tag: Scalars['String']['output'];
  name: Scalars['String']['output'];
  payload: Scalars['JSON']['output'];
  processes: ProcessingPaginationConnection;
  seq: Scalars['BigInt']['output'];
  tags?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeISO']['output'];
  version: Scalars['String']['output'];
  visibility: PROCESSOR_VISIBILITY;
};


export type ProcessorprocessesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  dataset_id?: InputMaybe<Scalars['String']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  processor_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
};

export type ProcessorConfiguration = {
  __typename?: 'ProcessorConfiguration';
  command: Scalars['String']['output'];
  dataset_input_argument: Scalars['String']['output'];
  dataset_input_value: Scalars['String']['output'];
  dataset_output_argument: Scalars['String']['output'];
  dataset_output_value: Scalars['String']['output'];
  output_metrics_file_glob_patterns: Array<Scalars['String']['output']>;
  output_result_file_glob_patterns: Array<Scalars['String']['output']>;
  parameters: Array<ProcessorParameter>;
};

export type ProcessorConfigurationParameterSchema = {
  default_value?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  is_required: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  sequence: Scalars['Int']['input'];
  type: PROCESSOR_PARAMETER_TYPE;
};

export type ProcessorConfigurationSchema = {
  command: Scalars['String']['input'];
  dataset_input_argument: Scalars['String']['input'];
  dataset_input_value: Scalars['String']['input'];
  dataset_output_argument: Scalars['String']['input'];
  dataset_output_value: Scalars['String']['input'];
  output_metrics_file_glob_patterns: Array<Scalars['String']['input']>;
  output_result_file_glob_patterns: Array<Scalars['String']['input']>;
  parameters: Array<ProcessorConfigurationParameterSchema>;
};

export type ProcessorPaginationConnection = {
  __typename?: 'ProcessorPaginationConnection';
  edges: Array<ProcessorPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProcessorPaginationEdge = {
  __typename?: 'ProcessorPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Processor;
};

export type ProcessorParameter = {
  __typename?: 'ProcessorParameter';
  default_value?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  is_required: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  type: PROCESSOR_PARAMETER_TYPE;
};

export type ProcessorSchema = {
  allowed_mime_types: Scalars['String']['input'];
  configuration: ProcessorConfigurationSchema;
  description?: InputMaybe<Scalars['String']['input']>;
  image_tag: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
  visibility: PROCESSOR_VISIBILITY;
};

export type Query = {
  __typename?: 'Query';
  adminDataset: Dataset;
  adminDatasets: DatasetPaginationConnection;
  adminProcesses: ProcessingPaginationConnection;
  adminProcessing: Processing;
  adminProcessingTimeEstimation: Array<ProcessingTimeEstimation>;
  adminProcessor: Processor;
  adminProcessors: ProcessorPaginationConnection;
  adminWorker: Worker;
  adminWorkerRegistrationToken: WorkerRegistrationToken;
  adminWorkerRegistrationTokens: WorkerRegistrationTokenPaginationConnection;
  adminWorkers: WorkerPaginationConnection;
  healthCheck: Scalars['DateTimeISO']['output'];
  healthLivenessCheck: Scalars['DateTimeISO']['output'];
  healthReadinessCheck: Scalars['DateTimeISO']['output'];
  session: Session;
  user: User;
  userDataset: Dataset;
  userDatasets: DatasetPaginationConnection;
  userProcesses: ProcessingPaginationConnection;
  userProcessing: Processing;
  userProcessingEstimatedFinish: ProcessingFinishTimeEstimation;
  userProcessingTimeEstimation: ProcessingTimeEstimation;
  userProcessor: Processor;
  userProcessors: ProcessorPaginationConnection;
  worker: Worker;
  workerProcessing: Processing;
};


export type QueryadminDatasetArgs = {
  dataset_id: Scalars['String']['input'];
};


export type QueryadminDatasetsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  file_id?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<DATASET_VISIBILITY>;
};


export type QueryadminProcessesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  created_at_end_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  created_at_start_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  dataset_id?: InputMaybe<Scalars['String']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  include_archived?: InputMaybe<Scalars['Boolean']['input']>;
  keep_until_end_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  keep_until_start_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  metrics_file_id?: InputMaybe<Scalars['String']['input']>;
  processor_id?: InputMaybe<Scalars['String']['input']>;
  result_file_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
  worker_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminProcessingArgs = {
  processing_id: Scalars['String']['input'];
};


export type QueryadminProcessingTimeEstimationArgs = {
  dataset_id?: InputMaybe<Scalars['String']['input']>;
  processor_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminProcessorArgs = {
  processor_id: Scalars['String']['input'];
};


export type QueryadminProcessorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminWorkerArgs = {
  worker_id: Scalars['String']['input'];
};


export type QueryadminWorkerRegistrationTokenArgs = {
  worker_registration_token_id: Scalars['String']['input'];
};


export type QueryadminWorkerRegistrationTokensArgs = {
  activatable?: InputMaybe<Scalars['Boolean']['input']>;
  activated?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_unlimited_usage?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminWorkersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  missing?: InputMaybe<Scalars['Boolean']['input']>;
  registration_token_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserDatasetArgs = {
  dataset_id: Scalars['String']['input'];
};


export type QueryuserDatasetsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserProcessesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  dataset_id?: InputMaybe<Scalars['String']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  processor_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
};


export type QueryuserProcessingArgs = {
  processing_id: Scalars['String']['input'];
};


export type QueryuserProcessingEstimatedFinishArgs = {
  processing_id: Scalars['String']['input'];
};


export type QueryuserProcessingTimeEstimationArgs = {
  dataset_id: Scalars['String']['input'];
  processor_id: Scalars['String']['input'];
};


export type QueryuserProcessorArgs = {
  processor_id: Scalars['String']['input'];
};


export type QueryuserProcessorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryworkerProcessingArgs = {
  processing_id: Scalars['String']['input'];
};

export type RequestDatasetProcessingParameterSchema = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type RequestDatasetProcessingSchema = {
  dataset_id: Scalars['String']['input'];
  parameters: Array<RequestDatasetProcessingParameterSchema>;
  processor_id: Scalars['String']['input'];
};

export type RequestFileUploadSignedUrlSchema = {
  filename: Scalars['String']['input'];
  md5_hash: Scalars['String']['input'];
  mime_type: MIME_TYPE;
  size: Scalars['Int']['input'];
};

export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum STORAGE_PROVIDER {
  GOOGLE_CLOUD_STORAGE = 'GOOGLE_CLOUD_STORAGE'
}

export type Session = {
  __typename?: 'Session';
  user: User;
  user_auth_provider_conn: UserAuthProviderConn;
  user_session: UserSession;
};

export type SortingFieldSchema = {
  field: Scalars['String']['input'];
  order: SORT_ORDER;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_admin: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  learning_data: Scalars['JSON']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notifications_enabled?: Maybe<Scalars['Boolean']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  seq: Scalars['BigInt']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};

export type UserAuthProviderConn = {
  __typename?: 'UserAuthProviderConn';
  auth_provider: AUTH_PROVIDER;
  code: Scalars['String']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  disconnected_at?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  payload: Scalars['JSON']['output'];
  seq: Scalars['BigInt']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type UserDatasetCreateSchema = {
  description?: InputMaybe<Scalars['String']['input']>;
  filename: Scalars['String']['input'];
  md5_hash: Scalars['String']['input'];
  mime_type: MIME_TYPE;
  size: Scalars['Int']['input'];
  tags?: InputMaybe<Scalars['String']['input']>;
};

export type UserDatasetUpdateSchema = {
  description?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
};

export type UserSession = {
  __typename?: 'UserSession';
  access_token: Scalars['String']['output'];
  access_token_expires_at: Scalars['DateTimeISO']['output'];
  payload: Scalars['JSON']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTimeISO']['output']>;
  user_auth_provider_conn: UserAuthProviderConn;
  user_auth_provider_conn_id: Scalars['String']['output'];
};

export type UserUpdateDataSchema = {
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notifications_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type Worker = {
  __typename?: 'Worker';
  agent_info: Scalars['JSON']['output'];
  archived_at?: Maybe<Scalars['DateTimeISO']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal_id: Scalars['String']['output'];
  last_seen_at?: Maybe<Scalars['DateTimeISO']['output']>;
  missing: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  refresh_token: Scalars['String']['output'];
  refresh_token_expires_at: Scalars['DateTimeISO']['output'];
  registration_token: WorkerRegistrationToken;
  registration_token_id: Scalars['String']['output'];
  seq: Scalars['BigInt']['output'];
  signature: Scalars['String']['output'];
  system_info: Scalars['JSON']['output'];
  tags?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

export type WorkerAccessToken = {
  __typename?: 'WorkerAccessToken';
  access_token: Scalars['String']['output'];
  access_token_expires_at: Scalars['DateTimeISO']['output'];
};

export type WorkerPaginationConnection = {
  __typename?: 'WorkerPaginationConnection';
  edges: Array<WorkerPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkerPaginationEdge = {
  __typename?: 'WorkerPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Worker;
};

export type WorkerRegistrationToken = {
  __typename?: 'WorkerRegistrationToken';
  activated_at?: Maybe<Scalars['DateTimeISO']['output']>;
  archived_at?: Maybe<Scalars['DateTimeISO']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  is_unlimited_usage: Scalars['Boolean']['output'];
  seq: Scalars['BigInt']['output'];
  token: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type WorkerRegistrationTokenCreateSchema = {
  expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  is_unlimited_usage: Scalars['Boolean']['input'];
};

export type WorkerRegistrationTokenPaginationConnection = {
  __typename?: 'WorkerRegistrationTokenPaginationConnection';
  edges: Array<WorkerRegistrationTokenPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkerRegistrationTokenPaginationEdge = {
  __typename?: 'WorkerRegistrationTokenPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: WorkerRegistrationToken;
};

export type UserDatasetScalarsQueryVariables = Exact<{
  datasetId: Scalars['String']['input'];
}>;


export type UserDatasetScalarsQuery = { __typename?: 'Query', userDataset: { __typename?: 'Dataset', id: string, seq: bigint, created_at: any } };

export type AdminDatasetQueryVariables = Exact<{
  datasetId: Scalars['String']['input'];
}>;


export type AdminDatasetQuery = { __typename?: 'Query', adminDataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type AdminDatasetsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['String']['input']>;
  file_id?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<DATASET_VISIBILITY>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type AdminDatasetsQuery = { __typename?: 'Query', adminDatasets: { __typename?: 'DatasetPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'DatasetPaginationEdge', cursor: any, node: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdminDatasetDeleteMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
}>;


export type AdminDatasetDeleteMutation = { __typename?: 'Mutation', adminDatasetDelete: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type AdminDatasetUpdateMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
  data: AdminDatasetUpdateSchema;
}>;


export type AdminDatasetUpdateMutation = { __typename?: 'Mutation', adminDatasetUpdate: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type AdminDatasetUpdateVisibilityMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
  data: AdminDatasetUpdateVisibilitySchema;
}>;


export type AdminDatasetUpdateVisibilityMutation = { __typename?: 'Mutation', adminDatasetUpdateVisibility: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type AdminProcessingQueryVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type AdminProcessingQuery = { __typename?: 'Query', adminProcessing: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type AdminProcessesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  workerId?: InputMaybe<Scalars['String']['input']>;
  resultFileId?: InputMaybe<Scalars['String']['input']>;
  metricsFileId?: InputMaybe<Scalars['String']['input']>;
  datasetId?: InputMaybe<Scalars['String']['input']>;
  processorId?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type AdminProcessesQuery = { __typename?: 'Query', adminProcesses: { __typename?: 'ProcessingPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'ProcessingPaginationEdge', cursor: any, node: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdminProcessingDeleteMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type AdminProcessingDeleteMutation = { __typename?: 'Mutation', adminProcessingDelete: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type AdminProcessingUpdateMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
  data: AdminProcessingUpdateSchema;
}>;


export type AdminProcessingUpdateMutation = { __typename?: 'Mutation', adminProcessingUpdate: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type AdminProcessingCleanExpiredMutationVariables = Exact<{ [key: string]: never; }>;


export type AdminProcessingCleanExpiredMutation = { __typename?: 'Mutation', adminProcessingCleanExpired: number };

export type AdminProcessorQueryVariables = Exact<{
  processorId: Scalars['String']['input'];
}>;


export type AdminProcessorQuery = { __typename?: 'Query', adminProcessor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } };

export type AdminProcessorsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type AdminProcessorsQuery = { __typename?: 'Query', adminProcessors: { __typename?: 'ProcessorPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'ProcessorPaginationEdge', cursor: any, node: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdminProcessorCreateMutationVariables = Exact<{
  data: ProcessorSchema;
}>;


export type AdminProcessorCreateMutation = { __typename?: 'Mutation', adminProcessorCreate: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } };

export type AdminProcessorDeleteMutationVariables = Exact<{
  processorId: Scalars['String']['input'];
}>;


export type AdminProcessorDeleteMutation = { __typename?: 'Mutation', adminProcessorDelete: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } };

export type AdminProcessorUpdateMutationVariables = Exact<{
  processorId: Scalars['String']['input'];
  data: ProcessorSchema;
}>;


export type AdminProcessorUpdateMutation = { __typename?: 'Mutation', adminProcessorUpdate: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } };

export type AdminWorkerQueryVariables = Exact<{
  workerId: Scalars['String']['input'];
}>;


export type AdminWorkerQuery = { __typename?: 'Query', adminWorker: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } };

export type AdminWorkersQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  registrationTokenId?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type AdminWorkersQuery = { __typename?: 'Query', adminWorkers: { __typename?: 'WorkerPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'WorkerPaginationEdge', cursor: any, node: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdminWorkerUpdateMutationVariables = Exact<{
  workerId: Scalars['String']['input'];
  data: AdminWorkerUpdateSchema;
}>;


export type AdminWorkerUpdateMutation = { __typename?: 'Mutation', adminWorkerUpdate: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } };

export type AdminWorkerDeleteMutationVariables = Exact<{
  workerId: Scalars['String']['input'];
}>;


export type AdminWorkerDeleteMutation = { __typename?: 'Mutation', adminWorkerDelete: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } };

export type AdminWorkerRegistrationTokenQueryVariables = Exact<{
  workerRegistrationTokenId: Scalars['String']['input'];
}>;


export type AdminWorkerRegistrationTokenQuery = { __typename?: 'Query', adminWorkerRegistrationToken: { __typename?: 'WorkerRegistrationToken', archived_at?: any | null, created_at: any, expires_at?: any | null, id: string, seq: bigint, is_unlimited_usage: boolean, token: string, updated_at: any, user_id: string } };

export type AdminWorkerRegistrationTokensQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  activatable?: InputMaybe<Scalars['Boolean']['input']>;
  activated?: InputMaybe<Scalars['Boolean']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnlimitedUsage?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type AdminWorkerRegistrationTokensQuery = { __typename?: 'Query', adminWorkerRegistrationTokens: { __typename?: 'WorkerRegistrationTokenPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'WorkerRegistrationTokenPaginationEdge', cursor: any, node: { __typename?: 'WorkerRegistrationToken', archived_at?: any | null, created_at: any, expires_at?: any | null, id: string, seq: bigint, is_unlimited_usage: boolean, token: string, updated_at: any, user_id: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdminWorkerRegistrationTokenCreateMutationVariables = Exact<{
  data: WorkerRegistrationTokenCreateSchema;
}>;


export type AdminWorkerRegistrationTokenCreateMutation = { __typename?: 'Mutation', adminWorkerRegistrationTokenCreate: { __typename?: 'WorkerRegistrationToken', archived_at?: any | null, created_at: any, expires_at?: any | null, id: string, seq: bigint, is_unlimited_usage: boolean, token: string, updated_at: any, user_id: string } };

export type AdminWorkerRegistrationTokenDeleteMutationVariables = Exact<{
  workerRegistrationTokenId: Scalars['String']['input'];
}>;


export type AdminWorkerRegistrationTokenDeleteMutation = { __typename?: 'Mutation', adminWorkerRegistrationTokenDelete: { __typename?: 'WorkerRegistrationToken', archived_at?: any | null, created_at: any, expires_at?: any | null, id: string, seq: bigint, is_unlimited_usage: boolean, token: string, updated_at: any, user_id: string } };

export type AdminWorkerCleanMissingMutationVariables = Exact<{ [key: string]: never; }>;


export type AdminWorkerCleanMissingMutation = { __typename?: 'Mutation', adminWorkerCleanMissing: number };

export type DatasetFragmentFragment = { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } };

export type UserDatasetQueryVariables = Exact<{
  datasetId: Scalars['String']['input'];
}>;


export type UserDatasetQuery = { __typename?: 'Query', userDataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type UserDatasetsQueryVariables = Exact<{
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UserDatasetsQuery = { __typename?: 'Query', userDatasets: { __typename?: 'DatasetPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'DatasetPaginationEdge', cursor: any, node: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserDatasetCreateMutationVariables = Exact<{
  data: UserDatasetCreateSchema;
}>;


export type UserDatasetCreateMutation = { __typename?: 'Mutation', userDatasetCreate: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type UserDatasetUpdateMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
  data: UserDatasetUpdateSchema;
}>;


export type UserDatasetUpdateMutation = { __typename?: 'Mutation', userDatasetUpdate: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type UserDatasetRequestPublicationMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
}>;


export type UserDatasetRequestPublicationMutation = { __typename?: 'Mutation', userDatasetRequestPublication: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type UserDatasetDeleteMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
}>;


export type UserDatasetDeleteMutation = { __typename?: 'Mutation', userDatasetDelete: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } } };

export type FileFragmentFragment = { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null };

export type HealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckQuery = { __typename?: 'Query', healthCheck: any };

export type HealthLivenessCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthLivenessCheckQuery = { __typename?: 'Query', healthLivenessCheck: any };

export type HealthReadinessCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthReadinessCheckQuery = { __typename?: 'Query', healthReadinessCheck: any };

export type ProcessingFragmentFragment = { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null };

export type UserProcessingQueryVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type UserProcessingQuery = { __typename?: 'Query', userProcessing: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type UserProcessesQueryVariables = Exact<{
  datasetId?: InputMaybe<Scalars['String']['input']>;
  processorId?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<PROCESSING_STATUS>;
  visibility?: InputMaybe<PROCESSING_VISIBILITY>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserProcessesQuery = { __typename?: 'Query', userProcesses: { __typename?: 'ProcessingPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'ProcessingPaginationEdge', cursor: any, node: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserRequestDatasetProcessingMutationVariables = Exact<{
  data: RequestDatasetProcessingSchema;
}>;


export type UserRequestDatasetProcessingMutation = { __typename?: 'Mutation', userRequestDatasetProcessing: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type UserProcessingUpdateVisibilityMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
  visibility: PROCESSING_VISIBILITY;
}>;


export type UserProcessingUpdateVisibilityMutation = { __typename?: 'Mutation', userProcessingUpdateVisibility: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type UserProcessingExtendKeepUntilMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
  keepUntil: Scalars['DateTimeISO']['input'];
}>;


export type UserProcessingExtendKeepUntilMutation = { __typename?: 'Mutation', userProcessingExtendKeepUntil: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type UserProcessingDeleteMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type UserProcessingDeleteMutation = { __typename?: 'Mutation', userProcessingDelete: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type UserProcessingTimeEstimationQueryVariables = Exact<{
  datasetId: Scalars['String']['input'];
  processorId: Scalars['String']['input'];
}>;


export type UserProcessingTimeEstimationQuery = { __typename?: 'Query', userProcessingTimeEstimation: { __typename?: 'ProcessingTimeEstimation', dataset_id: string, processor_id: string, estimated_waiting_time?: number | null, estimated_execution_time?: number | null, estimated_total_time?: number | null } };

export type UserProcessingEstimatedFinishQueryVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type UserProcessingEstimatedFinishQuery = { __typename?: 'Query', userProcessingEstimatedFinish: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, processor_id: string, processing_id: string, estimated_start_time?: any | null, estimated_finish_time?: any | null } };

export type ProcessorFragmentFragment = { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } };

export type UserProcessorQueryVariables = Exact<{
  processorId: Scalars['String']['input'];
}>;


export type UserProcessorQuery = { __typename?: 'Query', userProcessor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } };

export type UserProcessorsQueryVariables = Exact<{
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UserProcessorsQuery = { __typename?: 'Query', userProcessors: { __typename?: 'ProcessorPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'ProcessorPaginationEdge', cursor: any, node: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserFragmentFragment = { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null };

export type UserAuthProviderConnFragmentFragment = { __typename?: 'UserAuthProviderConn', id: string, seq: bigint, auth_provider: AUTH_PROVIDER, code: string, disconnected_at?: any | null, created_at: any, updated_at: any, user_id: string };

export type UserSessionFragmentFragment = { __typename?: 'UserSession', access_token: string, access_token_expires_at: any, refresh_token?: string | null, refresh_token_expires_at?: any | null, user_auth_provider_conn_id: string };

export type SessionFragmentFragment = { __typename?: 'Session', user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, user_auth_provider_conn: { __typename?: 'UserAuthProviderConn', id: string, seq: bigint, auth_provider: AUTH_PROVIDER, code: string, disconnected_at?: any | null, created_at: any, updated_at: any, user_id: string }, user_session: { __typename?: 'UserSession', access_token: string, access_token_expires_at: any, refresh_token?: string | null, refresh_token_expires_at?: any | null, user_auth_provider_conn_id: string } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null } };

export type SessionQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionQuery = { __typename?: 'Query', session: { __typename?: 'Session', user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, user_auth_provider_conn: { __typename?: 'UserAuthProviderConn', id: string, seq: bigint, auth_provider: AUTH_PROVIDER, code: string, disconnected_at?: any | null, created_at: any, updated_at: any, user_id: string }, user_session: { __typename?: 'UserSession', access_token: string, access_token_expires_at: any, refresh_token?: string | null, refresh_token_expires_at?: any | null, user_auth_provider_conn_id: string } } };

export type UserUpdateDataMutationVariables = Exact<{
  data: UserUpdateDataSchema;
}>;


export type UserUpdateDataMutation = { __typename?: 'Mutation', userUpdateData: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null } };

export type UserSessionsCloseMutationVariables = Exact<{ [key: string]: never; }>;


export type UserSessionsCloseMutation = { __typename?: 'Mutation', userSessionsClose: { __typename?: 'UserAuthProviderConn', id: string, seq: bigint, auth_provider: AUTH_PROVIDER, code: string, disconnected_at?: any | null, created_at: any, updated_at: any, user_id: string } };

export type UserUpdateLearningDataMutationVariables = Exact<{
  data: Scalars['JSON']['input'];
}>;


export type UserUpdateLearningDataMutation = { __typename?: 'Mutation', userUpdateLearningData: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null } };

export type WorkerRegistrationTokenFragmentFragment = { __typename?: 'WorkerRegistrationToken', archived_at?: any | null, created_at: any, expires_at?: any | null, id: string, seq: bigint, is_unlimited_usage: boolean, token: string, updated_at: any, user_id: string };

export type WorkerFragmentFragment = { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null };

export type WorkerQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkerQuery = { __typename?: 'Query', worker: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } };

export type WorkerProcessingQueryVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingQuery = { __typename?: 'Query', workerProcessing: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type WorkerProcessingCaptureMetricsFileUploadMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingCaptureMetricsFileUploadMutation = { __typename?: 'Mutation', workerProcessingCaptureMetricsFileUpload: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } };

export type WorkerProcessingCaptureResultFileUploadMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingCaptureResultFileUploadMutation = { __typename?: 'Mutation', workerProcessingCaptureResultFileUpload: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } };

export type WorkerProcessingGenerateMetricsFileUploadMutationVariables = Exact<{
  data: RequestFileUploadSignedUrlSchema;
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingGenerateMetricsFileUploadMutation = { __typename?: 'Mutation', workerProcessingGenerateMetricsFileUpload: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } };

export type WorkerProcessingGenerateResultFileUploadMutationVariables = Exact<{
  data: RequestFileUploadSignedUrlSchema;
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingGenerateResultFileUploadMutation = { __typename?: 'Mutation', workerProcessingGenerateResultFileUpload: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } };

export type WorkerProcessingRegisterFailureMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingRegisterFailureMutation = { __typename?: 'Mutation', workerProcessingRegisterFailure: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type WorkerProcessingRegisterProgressMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingRegisterProgressMutation = { __typename?: 'Mutation', workerProcessingRegisterProgress: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type WorkerProcessingRegisterSuccessMutationVariables = Exact<{
  processingId: Scalars['String']['input'];
}>;


export type WorkerProcessingRegisterSuccessMutation = { __typename?: 'Mutation', workerProcessingRegisterSuccess: { __typename?: 'Processing', id: string, seq: bigint, status: PROCESSING_STATUS, visibility: PROCESSING_VISIBILITY, started_at?: any | null, finished_at?: any | null, keep_until?: any | null, verified_at?: any | null, attempts?: number | null, message?: string | null, created_at: any, updated_at: any, processor_id: string, dataset_id: string, result_file_id?: string | null, metrics_file_id?: string | null, worker_id?: string | null, user_id: string, configuration: Array<{ __typename?: 'ProcessingParameter', key: string, value: string }>, processor: { __typename?: 'Processor', id: string, seq: bigint, name: string, version: string, image_tag: string, description?: string | null, tags?: string | null, allowed_mime_types: string, visibility: PROCESSOR_VISIBILITY, created_at: any, updated_at: any, configuration: { __typename?: 'ProcessorConfiguration', output_metrics_file_glob_patterns: Array<string>, output_result_file_glob_patterns: Array<string>, dataset_input_argument: string, dataset_input_value: string, dataset_output_argument: string, dataset_output_value: string, command: string, parameters: Array<{ __typename?: 'ProcessorParameter', sequence: number, name: string, description: string, type: PROCESSOR_PARAMETER_TYPE, is_required: boolean, default_value?: string | null }> } }, dataset: { __typename?: 'Dataset', id: string, seq: bigint, description?: string | null, tags?: string | null, visibility: DATASET_VISIBILITY, created_at: any, updated_at: any, user_id: string, file_id: string, user: { __typename?: 'User', id: string, seq: bigint, email: string, name?: string | null, phone_number?: string | null, learning_data: any, language?: string | null, created_at: any, updated_at: any, is_admin: boolean, notifications_enabled?: boolean | null }, file: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } }, result_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, metrics_file?: { __typename?: 'File', id: string, seq: bigint, storage_provider: STORAGE_PROVIDER, provider_path: string, provider_status: FILE_PROVIDER_STATUS, provider_verified_at?: any | null, type: FILE_TYPE, upload_url?: string | null, upload_url_expires_at?: any | null, allow_public_access: boolean, public_url_expires_at?: any | null, filename: string, mime_type: MIME_TYPE, size: number, md5_hash: string, created_at: any, updated_at: any, public_url?: string | null } | null, estimated_finish?: { __typename?: 'ProcessingFinishTimeEstimation', dataset_id: string, estimated_finish_time?: any | null, estimated_start_time?: any | null, processing_id: string, processor_id: string } | null } };

export type WorkerRegisterMutationVariables = Exact<{
  internalId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  registrationToken: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  systemInfo: Scalars['JSON']['input'];
}>;


export type WorkerRegisterMutation = { __typename?: 'Mutation', workerRegister: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } };

export type WorkerUpdateAccessTokenMutationVariables = Exact<{
  internalId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
  registrationToken: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  systemInfo: Scalars['JSON']['input'];
  workerId: Scalars['String']['input'];
}>;


export type WorkerUpdateAccessTokenMutation = { __typename?: 'Mutation', workerUpdateAccessToken: { __typename?: 'WorkerAccessToken', access_token: string, access_token_expires_at: any } };

export type WorkerUpdateRefreshTokenMutationVariables = Exact<{
  internalId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
  registrationToken: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  systemInfo: Scalars['JSON']['input'];
  workerId: Scalars['String']['input'];
}>;


export type WorkerUpdateRefreshTokenMutation = { __typename?: 'Mutation', workerUpdateRefreshToken: { __typename?: 'Worker', agent_info: any, archived_at?: any | null, created_at: any, id: string, seq: bigint, internal_id: string, name?: string | null, payload: any, refresh_token: string, refresh_token_expires_at: any, registration_token_id: string, signature: string, system_info: any, description?: string | null, tags?: string | null, last_seen_at?: any | null, updated_at: any, user_id: string, version?: string | null } };
