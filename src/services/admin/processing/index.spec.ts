import { AdminProcessing } from '@services/admin/processing';
import {
  ADMIN_PROCESSING_CLEAN_EXPIRED_MUTATION,
  ADMIN_PROCESSING_DELETE_MUTATION,
  ADMIN_PROCESSING_GET_MANY_QUERY,
  ADMIN_PROCESSING_GET_ONE_QUERY,
  ADMIN_PROCESSING_UPDATE_MUTATION,
} from '@services/admin/processing/queries';

import { describePassthrough } from '../../../../test/support/passthrough';

describePassthrough(
  'AdminProcessing service',
  context => new AdminProcessing(context),
  [
    {
      method: 'getOne',
      kind: 'query',
      document: ADMIN_PROCESSING_GET_ONE_QUERY,
      rootField: 'adminProcessing',
    },
    {
      method: 'getMany',
      kind: 'query',
      document: ADMIN_PROCESSING_GET_MANY_QUERY,
      rootField: 'adminProcesses',
    },
    {
      method: 'update',
      kind: 'mutate',
      document: ADMIN_PROCESSING_UPDATE_MUTATION,
      rootField: 'adminProcessingUpdate',
    },
    {
      method: 'delete',
      kind: 'mutate',
      document: ADMIN_PROCESSING_DELETE_MUTATION,
      rootField: 'adminProcessingDelete',
    },
    {
      method: 'cleanExpired',
      kind: 'mutate',
      document: ADMIN_PROCESSING_CLEAN_EXPIRED_MUTATION,
      rootField: 'adminProcessingCleanExpired',
    },
  ],
);
