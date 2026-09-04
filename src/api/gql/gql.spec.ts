import { describe, expect, it } from 'vitest';

import { gql } from './gql';

describe('Api: gql', () => {
  it('should resolve a generated document from its source', () => {
    const source =
      '\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n';

    expect(gql(source)).not.toEqual({});
  });

  it('should fall back to an empty document for a source that was never generated', () => {
    expect(gql('query NotGenerated { nothing }')).toEqual({});
  });
});
