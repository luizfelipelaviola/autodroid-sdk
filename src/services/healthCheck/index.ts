import type { AutoDroidSdk } from '@package';

import { Res } from '@utils/response.type';

import {
  HealthCheckQuery,
  HealthCheckQueryVariables,
  HealthLivenessCheckQuery,
  HealthLivenessCheckQueryVariables,
  HealthReadinessCheckQuery,
  HealthReadinessCheckQueryVariables,
} from '@gql/graphql';

import {
  HEALTH_CHECK_QUERY,
  HEALTH_LIVENESS_CHECK_QUERY,
  HEALTH_READINESS_CHECK_QUERY,
} from './queries';

export class HealthCheck {
  constructor(private context: AutoDroidSdk) {}

  public async healthCheck(
    variables: HealthCheckQueryVariables,
  ): Promise<Res<HealthCheckQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: HEALTH_CHECK_QUERY,
      variables,
    });

    return data.healthCheck;
  }

  public async livenessCheck(
    variables: HealthLivenessCheckQueryVariables,
  ): Promise<Res<HealthLivenessCheckQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: HEALTH_LIVENESS_CHECK_QUERY,
      variables,
    });

    return data.healthLivenessCheck;
  }

  public async readinessCheck(
    variables: HealthReadinessCheckQueryVariables,
  ): Promise<Res<HealthReadinessCheckQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: HEALTH_READINESS_CHECK_QUERY,
      variables,
    });

    return data.healthReadinessCheck;
  }
}
