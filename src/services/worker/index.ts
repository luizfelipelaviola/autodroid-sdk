import type { AutoDroidSdk } from '@package';
import type { Res } from '@utils/response.type';

import {
  WorkerProcessingCaptureMetricsFileUploadMutation,
  WorkerProcessingCaptureMetricsFileUploadMutationVariables,
  WorkerProcessingCaptureResultFileUploadMutation,
  WorkerProcessingCaptureResultFileUploadMutationVariables,
  WorkerProcessingGenerateMetricsFileUploadMutation,
  WorkerProcessingGenerateMetricsFileUploadMutationVariables,
  WorkerProcessingGenerateResultFileUploadMutation,
  WorkerProcessingGenerateResultFileUploadMutationVariables,
  WorkerProcessingQuery,
  WorkerProcessingQueryVariables,
  WorkerProcessingRegisterFailureMutation,
  WorkerProcessingRegisterFailureMutationVariables,
  WorkerProcessingRegisterProgressMutation,
  WorkerProcessingRegisterProgressMutationVariables,
  WorkerProcessingRegisterSuccessMutation,
  WorkerProcessingRegisterSuccessMutationVariables,
  WorkerQuery,
  WorkerQueryVariables,
  WorkerRegisterMutation,
  WorkerRegisterMutationVariables,
  WorkerUpdateAccessTokenMutation,
  WorkerUpdateAccessTokenMutationVariables,
  WorkerUpdateRefreshTokenMutation,
  WorkerUpdateRefreshTokenMutationVariables,
} from '@gql/graphql';

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
} from './queries';

export class Worker {
  constructor(private context: AutoDroidSdk) {}

  public async register(
    variables: WorkerRegisterMutationVariables,
  ): Promise<Res<WorkerRegisterMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_REGISTER_MUTATION,
      variables,
    });
    return data!.workerRegister;
  }

  public async updateAccessToken(
    variables: WorkerUpdateAccessTokenMutationVariables,
  ): Promise<Res<WorkerUpdateAccessTokenMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_UPDATE_ACCESS_TOKEN_MUTATION,
      variables,
    });
    return data!.workerUpdateAccessToken;
  }

  public async updateRefreshToken(
    variables: WorkerUpdateRefreshTokenMutationVariables,
  ): Promise<Res<WorkerUpdateRefreshTokenMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_UPDATE_REFRESH_TOKEN_MUTATION,
      variables,
    });
    return data!.workerUpdateRefreshToken;
  }

  public async getCurrent(
    variables: WorkerQueryVariables,
  ): Promise<Res<WorkerQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: WORKER_QUERY,
      variables,
    });
    return data.worker;
  }

  public async getOneProcessing(
    variables: WorkerProcessingQueryVariables,
  ): Promise<Res<WorkerProcessingQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: WORKER_PROCESSING_GET_ONE_QUERY,
      variables,
    });
    return data.workerProcessing;
  }

  public async generateProcessingResultFileUpload(
    variables: WorkerProcessingGenerateResultFileUploadMutationVariables,
  ): Promise<Res<WorkerProcessingGenerateResultFileUploadMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_GENERATE_RESULT_FILE_UPLOAD_MUTATION,
      variables,
    });
    return data!.workerProcessingGenerateResultFileUpload;
  }

  public async captureProcessingResultFileUpload(
    variables: WorkerProcessingCaptureResultFileUploadMutationVariables,
  ): Promise<Res<WorkerProcessingCaptureResultFileUploadMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_CAPTURE_RESULT_FILE_UPLOAD_MUTATION,
      variables,
    });

    return data!.workerProcessingCaptureResultFileUpload;
  }

  public async generateProcessingMetricsFileUpload(
    variables: WorkerProcessingGenerateMetricsFileUploadMutationVariables,
  ): Promise<Res<WorkerProcessingGenerateMetricsFileUploadMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_GENERATE_METRICS_FILE_UPLOAD_MUTATION,
      variables,
    });
    return data!.workerProcessingGenerateMetricsFileUpload;
  }

  public async captureProcessingMetricsFileUpload(
    variables: WorkerProcessingCaptureMetricsFileUploadMutationVariables,
  ): Promise<Res<WorkerProcessingCaptureMetricsFileUploadMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_CAPTURE_METRICS_FILE_UPLOAD_MUTATION,
      variables,
    });

    return data!.workerProcessingCaptureMetricsFileUpload;
  }

  public async registerProcessingProgress(
    variables: WorkerProcessingRegisterProgressMutationVariables,
  ): Promise<Res<WorkerProcessingRegisterProgressMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_REGISTER_PROGRESS_MUTATION,
      variables,
    });

    return data!.workerProcessingRegisterProgress;
  }

  public async registerProcessingSuccess(
    variables: WorkerProcessingRegisterSuccessMutationVariables,
  ): Promise<Res<WorkerProcessingRegisterSuccessMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_REGISTER_SUCCESS_MUTATION,
      variables,
    });

    return data!.workerProcessingRegisterSuccess;
  }

  public async registerProcessingFailure(
    variables: WorkerProcessingRegisterFailureMutationVariables,
  ): Promise<Res<WorkerProcessingRegisterFailureMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: WORKER_PROCESSING_REGISTER_FAILURE_MUTATION,
      variables,
    });

    return data!.workerProcessingRegisterFailure;
  }
}
