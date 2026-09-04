import { AdminDataset } from '@services/admin/dataset';
import {
  ADMIN_DATASET_DELETE_MUTATION,
  ADMIN_DATASET_GET_MANY_QUERY,
  ADMIN_DATASET_GET_ONE_QUERY,
  ADMIN_DATASET_UPDATE_MUTATION,
  ADMIN_DATASET_UPDATE_VISIBILITY_MUTATION,
} from '@services/admin/dataset/queries';

import { describePassthrough } from '../../../../test/support/passthrough';

describePassthrough(
  'AdminDataset service',
  context => new AdminDataset(context),
  [
    {
      method: 'getOne',
      kind: 'query',
      document: ADMIN_DATASET_GET_ONE_QUERY,
      rootField: 'adminDataset',
    },
    {
      method: 'getMany',
      kind: 'query',
      document: ADMIN_DATASET_GET_MANY_QUERY,
      rootField: 'adminDatasets',
    },
    {
      method: 'update',
      kind: 'mutate',
      document: ADMIN_DATASET_UPDATE_MUTATION,
      rootField: 'adminDatasetUpdate',
    },
    {
      method: 'updateVisibility',
      kind: 'mutate',
      document: ADMIN_DATASET_UPDATE_VISIBILITY_MUTATION,
      rootField: 'adminDatasetUpdateVisibility',
    },
    {
      method: 'delete',
      kind: 'mutate',
      document: ADMIN_DATASET_DELETE_MUTATION,
      rootField: 'adminDatasetDelete',
    },
  ],
);
