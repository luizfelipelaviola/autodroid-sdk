import { gql } from '@gql';

export const FILE_FRAGMENT = gql(`
  fragment FileFragment on File {
    id
    seq
    storage_provider
    provider_path
    provider_status
    provider_verified_at
    type
    upload_url
    upload_url_expires_at
    allow_public_access
    public_url_expires_at
    filename
    mime_type
    size
    md5_hash
    created_at
    updated_at
    public_url
  }
`);
