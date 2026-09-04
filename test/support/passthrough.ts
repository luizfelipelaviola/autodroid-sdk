import { beforeEach, describe, expect, it, vi } from 'vitest';

export type PassthroughCase = {
  method: string;
  kind: 'query' | 'mutate';
  document: unknown;
  rootField: string;
  variables?: Record<string, unknown>;
  noVariables?: boolean;
};

export const describePassthrough = (
  name: string,
  createService: (context: any) => any,
  cases: PassthroughCase[],
) => {
  describe(name, () => {
    const query = vi.fn();
    const mutate = vi.fn();
    const context = { apolloClient: { query, mutate } } as any;

    beforeEach(() => {
      query.mockReset();
      mutate.mockReset();
    });

    it.each(cases)(
      'forwards $method as a $kind and unwraps $rootField',
      async ({ method, kind, document, rootField, variables, noVariables }) => {
        const service = createService(context);
        const call = kind === 'query' ? query : mutate;
        const documentKey = kind === 'query' ? 'query' : 'mutation';
        const payload = { [rootField]: { unwrapped: true } };

        call.mockResolvedValue({ data: payload });

        const result = noVariables
          ? await service[method]()
          : await service[method](variables ?? {});

        expect(call).toHaveBeenCalledWith(
          noVariables
            ? { [documentKey]: document }
            : { [documentKey]: document, variables: variables ?? {} },
        );
        expect(result).toBe(payload[rootField]);
      },
    );
  });
};
