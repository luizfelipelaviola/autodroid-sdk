import { gql } from '@gql';

export const WORKER_REGISTRATION_TOKEN_FRAGMENT = gql(`
  fragment WorkerRegistrationTokenFragment on WorkerRegistrationToken {
    archived_at
    created_at
    expires_at
    id
    seq
    is_unlimited_usage
    token
    updated_at
    user_id
  }
`);

export const WORKER_FRAGMENT = gql(`
  fragment WorkerFragment on Worker {
    agent_info
    archived_at
    created_at
    id
    seq
    internal_id
    name
    payload
    refresh_token
    refresh_token_expires_at
    registration_token_id
    signature
    system_info
    description
    tags
    last_seen_at
    updated_at
    user_id
    version
  }
`);
