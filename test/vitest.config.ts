import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    setupFiles: ['dotenv/config'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: 'test/outputs/coverage',
      reporter: ['json-summary', 'text-summary', 'html'],
      all: true,
      reportOnFailure: true,
      include: ['src/**/*.ts'],
      exclude: [
        '**/*.spec.ts',
        'src/@types/**',
        'src/api/gql/types.ts',
        '**/*.d.ts',
        '**/*.type.ts',
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
  // https://github.com/vitest-dev/vitest/issues/4605
  resolve: {
    alias: {
      'graphql/language/printer': 'graphql/language/printer.js',
      'graphql/language': 'graphql/language/index.js',
      graphql: 'graphql/index.js',
    },
  },
});
