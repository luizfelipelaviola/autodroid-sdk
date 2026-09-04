import { describe, expect, it } from 'vitest';
import { DocumentNode, FragmentDefinitionNode, Kind, visit } from 'graphql';

import * as adminDatasetQueries from '@services/admin/dataset/queries';
import * as adminProcessingQueries from '@services/admin/processing/queries';
import * as adminProcessorQueries from '@services/admin/processor/queries';
import * as adminWorkerQueries from '@services/admin/worker/queries';
import * as datasetQueries from '@services/dataset/queries';
import * as healthCheckQueries from '@services/healthCheck/queries';
import * as processingQueries from '@services/processing/queries';
import * as processorQueries from '@services/processor/queries';
import * as userQueries from '@services/user/queries';
import * as workerQueries from '@services/worker/queries';

import * as datasetFragments from '@services/dataset/fragments';
import * as fileFragments from '@services/file/fragments';
import * as processingFragments from '@services/processing/fragments';
import * as processorFragments from '@services/processor/fragments';
import * as userFragments from '@services/user/fragments';
import * as workerFragments from '@services/worker/fragments';

type DocumentModule = Record<string, unknown>;

const queryModules: Record<string, DocumentModule> = {
  'admin/dataset/queries': adminDatasetQueries,
  'admin/processing/queries': adminProcessingQueries,
  'admin/processor/queries': adminProcessorQueries,
  'admin/worker/queries': adminWorkerQueries,
  'dataset/queries': datasetQueries,
  'healthCheck/queries': healthCheckQueries,
  'processing/queries': processingQueries,
  'processor/queries': processorQueries,
  'user/queries': userQueries,
  'worker/queries': workerQueries,
};

const fragmentModules: Record<string, DocumentModule> = {
  'dataset/fragments': datasetFragments,
  'file/fragments': fileFragments,
  'processing/fragments': processingFragments,
  'processor/fragments': processorFragments,
  'user/fragments': userFragments,
  'worker/fragments': workerFragments,
};

type ExportedDocument = {
  module: string;
  name: string;
  document: DocumentNode;
};

const collectExports = (
  modules: Record<string, DocumentModule>,
): ExportedDocument[] =>
  Object.entries(modules).flatMap(([module, exports]) =>
    Object.entries(exports).map(([name, document]) => ({
      module,
      name,
      document: document as DocumentNode,
    })),
  );

const collectSpreadNames = (document: DocumentNode): string[] => {
  const spreads: string[] = [];
  visit(document, {
    FragmentSpread: node => {
      spreads.push(node.name.value);
    },
  });
  return spreads;
};

const collectFragmentDefinitions = (
  document: DocumentNode,
): FragmentDefinitionNode[] =>
  document.definitions.filter(
    (definition): definition is FragmentDefinitionNode =>
      definition.kind === Kind.FRAGMENT_DEFINITION,
  );

const moduleNames = [
  ...Object.keys(queryModules),
  ...Object.keys(fragmentModules),
];
const queryExports = collectExports(queryModules);
const fragmentExports = collectExports(fragmentModules);

describe('service gql documents', () => {
  it.each(moduleNames)('exports at least one document from %s', module => {
    const exports = queryModules[module] ?? fragmentModules[module];

    expect(Object.keys(exports).length).toBeGreaterThan(0);
  });

  it.each([...queryExports, ...fragmentExports])(
    'resolves $name in $module to a parsed document instead of the gql fallback',
    ({ document }) => {
      expect(document.kind).toBe(Kind.DOCUMENT);
      expect(document.definitions.length).toBeGreaterThan(0);
    },
  );

  it.each(queryExports)(
    'declares exactly one named operation for $name in $module',
    ({ document }) => {
      const operations = document.definitions.filter(
        definition => definition.kind === Kind.OPERATION_DEFINITION,
      );

      expect(operations).toHaveLength(1);
      expect(operations[0]).toHaveProperty('name.value', expect.any(String));
    },
  );

  it.each(fragmentExports)(
    'declares only typed fragments for $name in $module',
    ({ document }) => {
      const definitions = collectFragmentDefinitions(document);
      const untyped = definitions.filter(
        fragment => !fragment.typeCondition.name.value,
      );

      expect(definitions.length).toBeGreaterThan(0);
      expect(definitions).toHaveLength(document.definitions.length);
      expect(untyped).toEqual([]);
    },
  );

  it.each([...queryExports, ...fragmentExports])(
    'inlines every fragment spread used by $name in $module',
    ({ document }) => {
      const defined = collectFragmentDefinitions(document).map(
        fragment => fragment.name.value,
      );
      const missing = collectSpreadNames(document).filter(
        spread => !defined.includes(spread),
      );

      expect(missing).toEqual([]);
    },
  );
});
