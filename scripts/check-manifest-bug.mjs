#!/usr/bin/env node
// scripts/check-manifest-bug.mjs
// Einmal-Check: PWA manifest start_url Bug in allen lokalen Meyso-Repos

import fs from 'node:fs/promises';
import path from 'node:path';

const C = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
};

const REPOS = [
  { name: 'meyso-website',        path: 'D:/dev/meyso/meyso-website' },
  { name: 'meyso-os',             path: 'D:/dev/meyso/meyso-os' },
  { name: 'meyso-kmu-template',   path: 'D:/dev/meyso/meyso-kmu-template' },
  { name: 'meyso-demo-schreinerei', path: 'D:/dev/meyso/meyso-demo-schreinerei' },
  { name: 'hirmax-scheibenbilder', path: 'D:/dev/clients/hirmax-scheibenbilder' },
  { name: 'sq-schmidt-website',   path: 'D:/dev/clients/sq-schmidt-website' },
  { name: 'toolradar',            path: 'D:/dev/products/toolradar' },
];

const MANIFEST_CANDIDATES = [
  'app/manifest.ts',
  'app/manifest.tsx',
  'app/manifest.js',
  'app/manifest.json',
  'public/manifest.json',
  'public/manifest.webmanifest',
];

async function findManifest(repoPath) {
  for (const candidate of MANIFEST_CANDIDATES) {
    const fullPath = path.join(repoPath, candidate);
    try {
      await fs.access(fullPath);
      return { file: candidate, fullPath };
    } catch {
      // not found, try next
    }
  }
  return null;
}

async function extractStartUrl(fullPath, filename) {
  const content = await fs.readFile(fullPath, 'utf-8');

  // JSON manifest
  if (filename.endsWith('.json') || filename.endsWith('.webmanifest')) {
    try {
      const parsed = JSON.parse(content);
      return { startUrl: parsed.start_url ?? null, scope: parsed.scope ?? null };
    } catch {
      return { startUrl: null, scope: null, parseError: true };
    }
  }

  // TypeScript/JS manifest (Next.js MetadataRoute.Manifest)
  const startUrlMatch = content.match(/start_url\s*:\s*['"`]([^'"`]+)['"`]/);
  const scopeMatch    = content.match(/scope\s*:\s*['"`]([^'"`]+)['"`]/);
  return {
    startUrl: startUrlMatch?.[1] ?? null,
    scope:    scopeMatch?.[1] ?? null,
  };
}

function classify(startUrl, parseError) {
  if (parseError)        return { label: '⚠️  PARSE_ERR', color: C.yellow };
  if (startUrl === null) return { label: '⚠️  NO_URL',    color: C.yellow };
  if (startUrl === '/')  return { label: '✅ OK',          color: C.green };
  if (startUrl === '/admin') return { label: '❌ BUG',     color: C.red };
  return { label: '⚠️  UNCLEAR',  color: C.yellow };
}

// ─── Table helpers ────────────────────────────────────────────────────────────

function stripAnsi(s) { return s.replace(/\x1b\[[0-9;]*m/g, ''); }
function pad(s, len)  { return s + ' '.repeat(Math.max(0, len - stripAnsi(s).length)); }

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n${C.bold}━━━ PWA Manifest start_url Bug Check ━━━${C.reset}\n`);

  const rows = [];

  for (const repo of REPOS) {
    let row = { name: repo.name, manifestFile: null, startUrl: null, scope: null, status: null };

    try {
      await fs.access(repo.path);
    } catch {
      row.status = { label: '⏭️  NO_DIR', color: C.dim };
      rows.push(row);
      continue;
    }

    const manifest = await findManifest(repo.path);
    if (!manifest) {
      row.status = { label: '⏭️  NO_MANIFEST', color: C.dim };
      rows.push(row);
      continue;
    }

    row.manifestFile = manifest.file;

    try {
      const { startUrl, scope, parseError } = await extractStartUrl(manifest.fullPath, manifest.file);
      row.startUrl = startUrl;
      row.scope    = scope;
      row.status   = classify(startUrl, parseError);
    } catch (err) {
      row.status = { label: '⚠️  READ_ERR', color: C.yellow };
    }

    rows.push(row);
  }

  // Column widths
  const W = {
    name:     Math.max(4, ...rows.map(r => r.name.length)) + 2,
    manifest: Math.max(9, ...rows.map(r => (r.manifestFile ?? 'none').length)) + 2,
    url:      Math.max(9, ...rows.map(r => (r.startUrl ?? '-').length)) + 2,
    status:   14,
  };

  const top    = '┌' + '─'.repeat(W.name) + '┬' + '─'.repeat(W.manifest) + '┬' + '─'.repeat(W.url) + '┬' + '─'.repeat(W.status) + '┐';
  const mid    = '├' + '─'.repeat(W.name) + '┼' + '─'.repeat(W.manifest) + '┼' + '─'.repeat(W.url) + '┼' + '─'.repeat(W.status) + '┤';
  const bottom = '└' + '─'.repeat(W.name) + '┴' + '─'.repeat(W.manifest) + '┴' + '─'.repeat(W.url) + '┴' + '─'.repeat(W.status) + '┘';

  const header = `│ ${pad(C.bold + 'Repo' + C.reset, W.name - 1)}│ ${pad(C.bold + 'Manifest' + C.reset, W.manifest - 1)}│ ${pad(C.bold + 'start_url' + C.reset, W.url - 1)}│ ${pad(C.bold + 'Status' + C.reset, W.status - 1)}│`;

  console.log(top);
  console.log(header);
  console.log(mid);

  for (const r of rows) {
    const name     = pad(r.name, W.name - 1);
    const manifest = pad(r.manifestFile ?? C.dim + 'none' + C.reset, W.manifest - 1);
    const url      = pad(r.startUrl != null ? r.startUrl : C.dim + '-' + C.reset, W.url - 1);
    const status   = pad(r.status.color + r.status.label + C.reset, W.status - 1);
    console.log(`│ ${name}│ ${manifest}│ ${url}│ ${status}│`);
  }

  console.log(bottom);

  // Summary
  const bugs    = rows.filter(r => r.startUrl === '/admin');
  const ok      = rows.filter(r => r.startUrl === '/');
  const noMani  = rows.filter(r => !r.manifestFile);
  const unclear = rows.filter(r => r.manifestFile && r.startUrl !== '/' && r.startUrl !== '/admin');

  console.log('');
  console.log(`${C.bold}Summary:${C.reset}`);
  console.log(`  ${C.red}${bugs.length} Repo(s) mit BUG${C.reset}${bugs.length ? ': ' + bugs.map(r => r.name).join(', ') : ''}`);
  console.log(`  ${C.green}${ok.length} Repo(s) OK${C.reset}`);
  console.log(`  ${C.dim}${noMani.length} Repo(s) ohne Manifest${C.reset}`);
  if (unclear.length) console.log(`  ${C.yellow}${unclear.length} Repo(s) unklar${C.reset}: ${unclear.map(r => r.name).join(', ')}`);

  if (bugs.length > 0) {
    console.log('');
    console.log(`${C.yellow}Empfehlung:${C.reset} start_url auf "/" setzen in den BUG-Repos.`);
    console.log(`Pattern (Next.js app/manifest.ts):`);
    console.log(`  ${C.dim}start_url: '/',${C.reset}`);
    console.log(`  ${C.dim}scope: '/',${C.reset}`);
  }

  console.log('');
}

main().catch(err => {
  console.error(`${C.red}Fehler: ${err.message}${C.reset}`);
  process.exit(1);
});
