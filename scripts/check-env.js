// Diagnostic script – prints Node version and runtime config.
// Run with: node scripts/check-env.js
// (no compilation needed; works as a plain ES module)

import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

/** @type {Record<string, unknown>} */
const pkg = require(path.join(__dirname, '../package.json'));

// ── Node & OS ────────────────────────────────────────────────────────────────
console.log('=== Runtime ===');
console.log(`Node.js  : ${process.version}`);
console.log(`V8       : ${process.versions.v8}`);
console.log(`Platform : ${process.platform} (${os.release()})`);
console.log(`Arch     : ${process.arch}`);
console.log(`CPUs     : ${os.cpus().length}`);

// ── Package config ───────────────────────────────────────────────────────────
console.log('\n=== Package config ===');
console.log(`name           : ${pkg.name}`);
console.log(`version        : ${pkg.version}`);
console.log(`packageManager : ${pkg.packageManager ?? '(not set)'}`);
console.log(
  `engines.node   : ${pkg.engines?.node ?? '(not set)'}`,
);
console.log(
  `volta.node     : ${pkg.volta?.node ?? '(not set)'}`,
);

// ── CI environment variables ─────────────────────────────────────────────────
const CI_VARS = [
  'CI',
  'NODE_ENV',
  'npm_config_user_agent',
  'GITHUB_ACTIONS',
  'GITHUB_WORKFLOW',
  'GITHUB_REF',
  'RUNNER_OS',
  'RUNNER_ARCH',
];

console.log('\n=== CI environment ===');
for (const key of CI_VARS) {
  const val = process.env[key];
  console.log(`${key.padEnd(24)}: ${val ?? '(not set)'}`);
}
