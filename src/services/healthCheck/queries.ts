import { gql } from '@gql';

export const HEALTH_CHECK_QUERY = gql(`
  query HealthCheck {
    healthCheck
  }
`);

export const HEALTH_LIVENESS_CHECK_QUERY = gql(`
  query HealthLivenessCheck {
    healthLivenessCheck
  }
`);

export const HEALTH_READINESS_CHECK_QUERY = gql(`
  query HealthReadinessCheck {
    healthReadinessCheck
  }
`);
