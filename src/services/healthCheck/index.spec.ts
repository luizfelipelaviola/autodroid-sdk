import { HealthCheck } from '@services/healthCheck';
import {
  HEALTH_CHECK_QUERY,
  HEALTH_LIVENESS_CHECK_QUERY,
  HEALTH_READINESS_CHECK_QUERY,
} from '@services/healthCheck/queries';

import { describePassthrough } from '../../../test/support/passthrough';

describePassthrough(
  'HealthCheck service',
  context => new HealthCheck(context),
  [
    {
      method: 'healthCheck',
      kind: 'query',
      document: HEALTH_CHECK_QUERY,
      rootField: 'healthCheck',
    },
    {
      method: 'livenessCheck',
      kind: 'query',
      document: HEALTH_LIVENESS_CHECK_QUERY,
      rootField: 'healthLivenessCheck',
    },
    {
      method: 'readinessCheck',
      kind: 'query',
      document: HEALTH_READINESS_CHECK_QUERY,
      rootField: 'healthReadinessCheck',
    },
  ],
);
