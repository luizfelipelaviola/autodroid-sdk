import { AdminWorker } from '@services/admin/worker';
import {
  ADMIN_WORKER_CLEAN_MISSING_MUTATION,
  ADMIN_WORKER_DELETE_MUTATION,
  ADMIN_WORKER_GET_MANY_QUERY,
  ADMIN_WORKER_GET_ONE_QUERY,
  ADMIN_WORKER_REGISTRATION_TOKEN_CREATE_MUTATION,
  ADMIN_WORKER_REGISTRATION_TOKEN_DELETE_MUTATION,
  ADMIN_WORKER_REGISTRATION_TOKEN_GET_MANY_QUERY,
  ADMIN_WORKER_REGISTRATION_TOKEN_GET_ONE_QUERY,
  ADMIN_WORKER_UPDATE_MUTATION,
} from '@services/admin/worker/queries';

import { describePassthrough } from '../../../../test/support/passthrough';

describePassthrough(
  'AdminWorker service',
  context => new AdminWorker(context),
  [
    {
      method: 'getOne',
      kind: 'query',
      document: ADMIN_WORKER_GET_ONE_QUERY,
      rootField: 'adminWorker',
    },
    {
      method: 'getMany',
      kind: 'query',
      document: ADMIN_WORKER_GET_MANY_QUERY,
      rootField: 'adminWorkers',
    },
    {
      method: 'update',
      kind: 'mutate',
      document: ADMIN_WORKER_UPDATE_MUTATION,
      rootField: 'adminWorkerUpdate',
    },
    {
      method: 'delete',
      kind: 'mutate',
      document: ADMIN_WORKER_DELETE_MUTATION,
      rootField: 'adminWorkerDelete',
    },
    {
      method: 'getRegistrationToken',
      kind: 'query',
      document: ADMIN_WORKER_REGISTRATION_TOKEN_GET_ONE_QUERY,
      rootField: 'adminWorkerRegistrationToken',
    },
    {
      method: 'getRegistrationTokens',
      kind: 'query',
      document: ADMIN_WORKER_REGISTRATION_TOKEN_GET_MANY_QUERY,
      rootField: 'adminWorkerRegistrationTokens',
    },
    {
      method: 'createRegistrationToken',
      kind: 'mutate',
      document: ADMIN_WORKER_REGISTRATION_TOKEN_CREATE_MUTATION,
      rootField: 'adminWorkerRegistrationTokenCreate',
    },
    {
      method: 'deleteRegistrationToken',
      kind: 'mutate',
      document: ADMIN_WORKER_REGISTRATION_TOKEN_DELETE_MUTATION,
      rootField: 'adminWorkerRegistrationTokenDelete',
    },
    {
      method: 'cleanMissing',
      kind: 'mutate',
      document: ADMIN_WORKER_CLEAN_MISSING_MUTATION,
      rootField: 'adminWorkerCleanMissing',
    },
  ],
);
