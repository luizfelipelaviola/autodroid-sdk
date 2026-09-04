import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AutoDroidSdk } from '@package';

import { Admin } from '@services/admin';
import { AdminDataset } from '@services/admin/dataset';
import { AdminProcessor } from '@services/admin/processor';
import { AdminProcessing } from '@services/admin/processing';
import { AdminWorker } from '@services/admin/worker';
import { User } from '@services/user';
import { Dataset } from '@services/dataset';
import { Processor } from '@services/processor';
import { Processing } from '@services/processing';
import { HealthCheck } from '@services/healthCheck';
import { Worker } from '@services/worker';

import { USER_QUERY } from '@services/user/queries';
import { USER_DATASET_GET_ONE_QUERY } from '@services/dataset/queries';
import { USER_PROCESSOR_GET_ONE_QUERY } from '@services/processor/queries';
import { USER_PROCESSING_GET_ONE_QUERY } from '@services/processing/queries';
import { HEALTH_LIVENESS_CHECK_QUERY } from '@services/healthCheck/queries';
import { WORKER_QUERY } from '@services/worker/queries';
import { ADMIN_DATASET_GET_ONE_QUERY } from '@services/admin/dataset/queries';
import { ADMIN_PROCESSOR_GET_ONE_QUERY } from '@services/admin/processor/queries';
import { ADMIN_PROCESSING_GET_ONE_QUERY } from '@services/admin/processing/queries';
import { ADMIN_WORKER_GET_ONE_QUERY } from '@services/admin/worker/queries';

const { createApolloClientMock } = vi.hoisted(() => ({
  createApolloClientMock: vi.fn(),
}));

vi.mock('@api/apolloClient', async () => {
  const actual =
    await vi.importActual<typeof import('@api/apolloClient')>(
      '@api/apolloClient',
    );
  return { ...actual, createApolloClient: createApolloClientMock };
});

type RoutingCase = {
  service: string;
  invoke: (sdk: AutoDroidSdk) => Promise<unknown>;
  expectedCall: Record<string, unknown>;
  rootField: string;
};

const routingCases: RoutingCase[] = [
  {
    service: 'user',
    invoke: sdk => sdk.user.getCurrent(),
    expectedCall: { query: USER_QUERY },
    rootField: 'user',
  },
  {
    service: 'dataset',
    invoke: sdk => sdk.dataset.getOne({ datasetId: 'dataset-id' }),
    expectedCall: {
      query: USER_DATASET_GET_ONE_QUERY,
      variables: { datasetId: 'dataset-id' },
    },
    rootField: 'userDataset',
  },
  {
    service: 'processor',
    invoke: sdk => sdk.processor.getOne({ processorId: 'processor-id' }),
    expectedCall: {
      query: USER_PROCESSOR_GET_ONE_QUERY,
      variables: { processorId: 'processor-id' },
    },
    rootField: 'userProcessor',
  },
  {
    service: 'processing',
    invoke: sdk => sdk.processing.getOne({ processingId: 'processing-id' }),
    expectedCall: {
      query: USER_PROCESSING_GET_ONE_QUERY,
      variables: { processingId: 'processing-id' },
    },
    rootField: 'userProcessing',
  },
  {
    service: 'healthCheck',
    invoke: sdk => sdk.healthCheck.livenessCheck({}),
    expectedCall: { query: HEALTH_LIVENESS_CHECK_QUERY, variables: {} },
    rootField: 'healthLivenessCheck',
  },
  {
    service: 'worker',
    invoke: sdk => sdk.worker.getCurrent({}),
    expectedCall: { query: WORKER_QUERY, variables: {} },
    rootField: 'worker',
  },
  {
    service: 'admin.dataset',
    invoke: sdk => sdk.admin.dataset.getOne({ datasetId: 'dataset-id' }),
    expectedCall: {
      query: ADMIN_DATASET_GET_ONE_QUERY,
      variables: { datasetId: 'dataset-id' },
    },
    rootField: 'adminDataset',
  },
  {
    service: 'admin.processor',
    invoke: sdk => sdk.admin.processor.getOne({ processorId: 'processor-id' }),
    expectedCall: {
      query: ADMIN_PROCESSOR_GET_ONE_QUERY,
      variables: { processorId: 'processor-id' },
    },
    rootField: 'adminProcessor',
  },
  {
    service: 'admin.processing',
    invoke: sdk =>
      sdk.admin.processing.getOne({ processingId: 'processing-id' }),
    expectedCall: {
      query: ADMIN_PROCESSING_GET_ONE_QUERY,
      variables: { processingId: 'processing-id' },
    },
    rootField: 'adminProcessing',
  },
  {
    service: 'admin.worker',
    invoke: sdk => sdk.admin.worker.getOne({ workerId: 'worker-id' }),
    expectedCall: {
      query: ADMIN_WORKER_GET_ONE_QUERY,
      variables: { workerId: 'worker-id' },
    },
    rootField: 'adminWorker',
  },
];

describe('AutoDroidSdk', () => {
  const params = { baseUrl: 'http://localhost:3000/graphql' };

  const query = vi.fn();
  const mutate = vi.fn();
  const apolloClient = { query, mutate };

  beforeEach(() => {
    query.mockReset();
    mutate.mockReset();
    createApolloClientMock.mockReset();
    createApolloClientMock.mockReturnValue(apolloClient);
  });

  it('builds a single apollo client from the provided params', () => {
    const sdk = new AutoDroidSdk(params);

    expect(createApolloClientMock).toHaveBeenCalledTimes(1);
    expect(createApolloClientMock).toHaveBeenCalledWith(params);
    expect(sdk.apolloClient).toBe(apolloClient);
  });

  it('forwards the optional callbacks to the apollo client factory', () => {
    const getAuthToken = vi.fn();
    const onAuthError = vi.fn();
    const onGraphQLError = vi.fn();
    const onNetworkError = vi.fn();

    const fullParams = {
      ...params,
      getAuthToken,
      onAuthError,
      onGraphQLError,
      onNetworkError,
    };

    const sdk = new AutoDroidSdk(fullParams);

    expect(createApolloClientMock).toHaveBeenCalledWith(fullParams);
    expect(sdk.apolloClient).toBe(apolloClient);
  });

  it('exposes every service as an instance of its own class', () => {
    const sdk = new AutoDroidSdk(params);

    expect(sdk.admin).toBeInstanceOf(Admin);
    expect(sdk.user).toBeInstanceOf(User);
    expect(sdk.dataset).toBeInstanceOf(Dataset);
    expect(sdk.processor).toBeInstanceOf(Processor);
    expect(sdk.processing).toBeInstanceOf(Processing);
    expect(sdk.healthCheck).toBeInstanceOf(HealthCheck);
    expect(sdk.worker).toBeInstanceOf(Worker);

    expect(sdk.admin.dataset).toBeInstanceOf(AdminDataset);
    expect(sdk.admin.processor).toBeInstanceOf(AdminProcessor);
    expect(sdk.admin.processing).toBeInstanceOf(AdminProcessing);
    expect(sdk.admin.worker).toBeInstanceOf(AdminWorker);
  });

  it('gives each sdk instance its own services', () => {
    const first = new AutoDroidSdk(params);
    const second = new AutoDroidSdk(params);

    expect(second.user).not.toBe(first.user);
    expect(second.admin).not.toBe(first.admin);
    expect(second.admin.worker).not.toBe(first.admin.worker);
  });

  it.each(routingCases)(
    'routes $service calls through the apollo client it built',
    async ({ invoke, expectedCall, rootField }) => {
      const sdk = new AutoDroidSdk(params);
      const payload = { [rootField]: { routed: true } };

      query.mockResolvedValue({ data: payload });

      const result = await invoke(sdk);

      expect(query).toHaveBeenCalledTimes(1);
      expect(query).toHaveBeenCalledWith(expectedCall);
      expect(result).toBe(payload[rootField]);
    },
  );

  it('propagates apollo client failures to the caller', async () => {
    const sdk = new AutoDroidSdk(params);
    const failure = new Error('network down');

    query.mockRejectedValue(failure);

    await expect(sdk.healthCheck.livenessCheck({})).rejects.toBe(failure);
  });
});
