import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { buildSchema, printSchema } from "graphql";

const SDK_ROOT = path.dirname(
  path.dirname(fileURLToPath(import.meta.url)),
);
const SDK_SCHEMA_PATH = path.join(SDK_ROOT, "src/api/gql/schema.graphql");
// Local dev: this monorepo's sibling-checkout layout. CI: actions/checkout
// can't place a second repo outside $GITHUB_WORKSPACE, so the workflow sets
// BACKEND_SCHEMA_PATH explicitly to wherever it actually checked it out.
const BACKEND_SCHEMA_PATH =
  process.env.BACKEND_SCHEMA_PATH ||
  path.join(
    SDK_ROOT,
    "../autodroid-api-gateway/packages/api/src/shared/infrastructure/graphql/generated/schema.gql",
  );

// These specific directives are backend-internal annotations never exposed by
// introspection, so the SDK's introspected schema.graphql never carries them
// — strip only them before comparing, so the diff still reflects real drift
// on any client-relevant directive (e.g. @deprecated) that introspection DOES
// expose and that SHOULD cause a mismatch.
const BACKEND_ONLY_DIRECTIVES = ["auth", "constraint"];

// A regex can't safely find the matching ")" when a directive argument is a
// quoted string containing its own parens (e.g. @constraint(pattern: "(a|b)"))
// — scan character-by-character, quote-aware, tracking paren depth instead.
const stripDirectiveUsages = sdl => {
  let result = "";
  let i = 0;
  while (i < sdl.length) {
    const directiveName = BACKEND_ONLY_DIRECTIVES.find(name =>
      sdl.startsWith(`@${name}`, i),
    );
    if (!directiveName) {
      result += sdl[i];
      i += 1;
      continue;
    }

    i += 1 + directiveName.length;
    if (sdl[i] !== "(") continue;

    let depth = 0;
    let inString = false;
    while (i < sdl.length) {
      const char = sdl[i];
      if (char === '"' && sdl[i - 1] !== "\\") inString = !inString;
      if (!inString && char === "(") depth += 1;
      if (!inString && char === ")") {
        depth -= 1;
        i += 1;
        if (depth === 0) break;
        continue;
      }
      i += 1;
    }
  }
  return result;
};

const normalize = filePath =>
  printSchema(buildSchema(stripDirectiveUsages(readFileSync(filePath, "utf8"))));

// Only meaningful in this monorepo's sibling-checkout layout. Locally, skip
// cleanly when the backend repo isn't checked out alongside the SDK. In CI,
// a silent skip means this gate never actually runs — GitHub Actions'
// default `actions/checkout` only clones this one repo, so exiting 0 here
// would make `yarn lint` permanently green regardless of real schema drift.
// Fail loudly instead, forcing CI to either provide the sibling checkout or
// accept it deliberately doesn't run this check.
if (!existsSync(BACKEND_SCHEMA_PATH)) {
  const message = `Backend schema not found at ${BACKEND_SCHEMA_PATH} (sibling autodroid-api-gateway checkout not present).`;
  if (process.env.CI) {
    console.error(
      `${message}\nThis check cannot run in CI without it — add a checkout step for autodroid-api-gateway alongside this repo, or remove "lint:schema" from CI if that's not intended.`,
    );
    process.exit(1);
  }
  console.log(`Skipping schema freshness check — ${message}`);
  process.exit(0);
}

const backendSdl = normalize(BACKEND_SCHEMA_PATH);

const sdkSdl = normalize(SDK_SCHEMA_PATH);

if (sdkSdl !== backendSdl) {
  console.error(
    "SDK's checked-in schema.graphql has drifted from the backend's live schema.\n" +
      `Run \`BACKEND_GRAPHQL_ENDPOINT=<live-endpoint> yarn codegen\` to refresh it, then commit the result.\n` +
      `SDK schema:     ${SDK_SCHEMA_PATH}\n` +
      `Backend schema: ${BACKEND_SCHEMA_PATH}`,
  );
  process.exit(1);
}

console.log("SDK schema matches the backend schema.");
