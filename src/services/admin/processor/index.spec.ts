import { AdminProcessor } from '@services/admin/processor';
import {
  ADMIN_PROCESSOR_CREATE_MUTATION,
  ADMIN_PROCESSOR_DELETE_MUTATION,
  ADMIN_PROCESSOR_GET_MANY_QUERY,
  ADMIN_PROCESSOR_GET_ONE_QUERY,
  ADMIN_PROCESSOR_UPDATE_MUTATION,
} from '@services/admin/processor/queries';

import { describePassthrough } from '../../../../test/support/passthrough';

describePassthrough(
  'AdminProcessor service',
  context => new AdminProcessor(context),
  [
    {
      method: 'getOne',
      kind: 'query',
      document: ADMIN_PROCESSOR_GET_ONE_QUERY,
      rootField: 'adminProcessor',
    },
    {
      method: 'getMany',
      kind: 'query',
      document: ADMIN_PROCESSOR_GET_MANY_QUERY,
      rootField: 'adminProcessors',
    },
    {
      method: 'create',
      kind: 'mutate',
      document: ADMIN_PROCESSOR_CREATE_MUTATION,
      rootField: 'adminProcessorCreate',
    },
    {
      method: 'delete',
      kind: 'mutate',
      document: ADMIN_PROCESSOR_DELETE_MUTATION,
      rootField: 'adminProcessorDelete',
    },
    {
      method: 'update',
      kind: 'mutate',
      document: ADMIN_PROCESSOR_UPDATE_MUTATION,
      rootField: 'adminProcessorUpdate',
    },
  ],
);
