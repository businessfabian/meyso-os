#!/usr/bin/env node
// scripts/quick-pagespeed.mjs
// Ad-hoc PageSpeed-Check fuer einzelne oder mehrere URLs

import { checkLighthouse } from './lib/lighthouse.mjs';

const DEFAULT_URLS = [
  'https://www.meyso.de/',
  'https://www.meyso.de/leistungen/webseiten',
  'https://www.meyso.de/leistungen/ki-automatisierung',
  'https://www.meyso.de/projekte',
  'https://www.meyso.de/webentwicklung-brigachtal',
  'https://www.meyso.de/analyse',
];

// ANSI color codes
const C = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
};

// ─── Argument parsing ────────────────────────────────────────────────────────

const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
if (!apiKey) {
  console.error(
    C.red +
    'GOOGLE_PAGESPEED_API_KEY nicht gesetzt. In .env eintragen oder\n' +
    'export GOOGLE_PAGESPEED_API_KEY=... vor Aufruf.' +
    C.reset
  );
  process.exit(1);
}

const rawArgs  = process.argv.slice(2);
const doBoth   = rawArgs.includes('--both');
const doDesktop = rawArgs.includes('--desktop') && !doBoth;
const urlArg   = rawArgs.find(a => !a.startsWith('--'));

const urls = urlArg
  ? urlArg.split(',').map(s => s.trim()).filter(Boolean)
  : DEFAULT_URLS;

const defaultStrategy = doDesktop ? 'desktop' : 'mobile';

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n${C.bold}━━━ PageSpeed Quick-Check ━━━${C.reset}`);
  console.log(`${C.dim}📅 ${new Date().toISOString()}${C.reset}`);
  console.log(
    `${C.dim}🔧 Strategy: ${doBoth ? 'mobile + desktop' : defaultStrategy}${C.reset}\n`
  );

  const rows = [];
  const strategies = doBoth ? ['mobile', 'desktop'] : [defaultStrategy];

  for (const url of urls) {
    for (const strat of strategies) {
      process.stdout.write(`  ${shortenUrl(url)} [${strat}]...`);
      try {
        const data = await checkLighthouse(url, apiKey, strat);
        if (data.error) {
          process.stdout.write(` ${C.red}${data.error}${C.reset}\n`);
          rows.push({ url, strategy: strat, error: data.error });
        } else {
          process.stdout.write(` ${C.green}OK${C.reset}\n`);
          rows.push({ url, strategy: strat, data });
        }
      } catch (err) {
        process.stdout.write(` ${C.red}${err.message}${C.reset}\n`);
        rows.push({ url, strategy: strat, error: err.message });
      }
      await sleep(1000);
    }
  }

  console.log('');
  printTable(rows, doBoth);
  printAuffaellig(rows);
  console.log('');
}

// ─── Table rendering ─────────────────────────────────────────────────────────

const DATA_COLS = [
  { key: 'perf', header: 'Perf', width: 6 },
  { key: 'lcp',  header: 'LCP',  width: 7 },
  { key: 'tbt',  header: 'TBT',  width: 7 },
  { key: 'fcp',  header: 'FCP',  width: 7 },
  { key: 'si',   header: 'SI',   width: 7 },
  { key: 'cls',  header: 'CLS',  width: 7 },
];

function printTable(rows, showStrategy) {
  const cols = showStrategy
    ? [{ key: 'mode', header: 'Mode', width: 8 }, ...DATA_COLS]
    : DATA_COLS;

  const urlPaths = rows.map(r => shortenUrl(r.url));
  const urlColW  = Math.max(5, ...urlPaths.map(p => p.length)) + 2;

  const topBorder    = '┌' + '─'.repeat(urlColW) + cols.map(c => '┬' + '─'.repeat(c.width)).join('') + '┐';
  const midBorder    = '├' + '─'.repeat(urlColW) + cols.map(c => '┼' + '─'.repeat(c.width)).join('') + '┤';
  const bottomBorder = '└' + '─'.repeat(urlColW) + cols.map(c => '┴' + '─'.repeat(c.width)).join('') + '┘';

  // Header row
  const headerUrl = centerPad('URL', urlColW);
  const headerCells = cols.map(c => centerPad(C.bold + c.header + C.reset, c.width));
  const headerRow = `│${headerUrl}│${headerCells.join('│')}│`;

  console.log(topBorder);
  console.log(headerRow);
  console.log(midBorder);

  for (const row of rows) {
    const path     = shortenUrl(row.url);
    const urlCell  = ' ' + padEnd(path, urlColW - 1);
    const cells    = cols.map(c => centerPad(formatCell(c.key, row), c.width));
    console.log(`│${urlCell}│${cells.join('│')}│`);
  }

  console.log(bottomBorder);
  console.log('');
  console.log(C.dim + 'Legende:');
  console.log('  Perf: 90+ = gruen, 50-89 = gelb, <50 = rot');
  console.log('  LCP (s):  <2.5 gruen, 2.5-4 gelb, >4 rot');
  console.log('  TBT (ms): <200 gruen, 200-600 gelb, >600 rot' + C.reset);
}

function formatCell(key, row) {
  if (key === 'mode') return row.strategy ?? '';
  if (row.error) return C.dim + 'n/a' + C.reset;

  const cwv = row.data?.coreWebVitals ?? {};
  const scores = row.data?.scores ?? {};

  switch (key) {
    case 'perf': {
      const v = scores.performance;
      if (v == null) return naStr();
      const color = v >= 90 ? C.green : v >= 50 ? C.yellow : C.red;
      return color + String(v) + C.reset;
    }
    case 'lcp': {
      const v = cwv.lcp;
      if (v == null) return naStr();
      const s = (v / 1000).toFixed(1);
      const color = v <= 2500 ? C.green : v <= 4000 ? C.yellow : C.red;
      return color + s + C.reset;
    }
    case 'tbt': {
      const v = cwv.tbt;
      if (v == null) return naStr();
      const ms = Math.round(v);
      const color = ms < 200 ? C.green : ms < 600 ? C.yellow : C.red;
      return color + String(ms) + C.reset;
    }
    case 'fcp': {
      const v = cwv.fcp;
      if (v == null) return naStr();
      const s = (v / 1000).toFixed(1);
      const color = v <= 1800 ? C.green : v <= 3000 ? C.yellow : C.red;
      return color + s + C.reset;
    }
    case 'si': {
      const v = cwv.si;
      if (v == null) return naStr();
      const s = (v / 1000).toFixed(1);
      const color = v <= 3400 ? C.green : v <= 5800 ? C.yellow : C.red;
      return color + s + C.reset;
    }
    case 'cls': {
      const v = cwv.cls;
      if (v == null) return naStr();
      const color = v <= 0.1 ? C.green : v <= 0.25 ? C.yellow : C.red;
      return color + v.toFixed(3) + C.reset;
    }
    default:
      return naStr();
  }
}

// ─── Auffaellig section ───────────────────────────────────────────────────────

function printAuffaellig(rows) {
  const flagged = [];

  for (const row of rows) {
    if (row.error) continue;
    if (row.strategy === 'desktop') continue; // nur mobile pruefen

    const perf = row.data?.scores?.performance;
    const lcp  = row.data?.coreWebVitals?.lcp;
    const reasons = [];

    if (perf != null && perf < 90) reasons.push(`Performance ${perf}`);
    if (lcp  != null && lcp > 2500) reasons.push(`LCP ${(lcp / 1000).toFixed(1)}s`);

    if (reasons.length > 0) {
      flagged.push({ path: shortenUrl(row.url), reasons });
    }
  }

  if (flagged.length === 0) {
    console.log(`${C.green}Keine Auffaelligkeiten.${C.reset}`);
    return;
  }

  console.log(`${C.yellow}⚠️  Auffaellig:${C.reset}`);
  for (const f of flagged) {
    console.log(`  ${C.yellow}-${C.reset} ${f.path}: ${f.reasons.join(', ')} (Review empfohlen)`);
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shortenUrl(url) {
  try {
    const u = new URL(url);
    return u.pathname || '/';
  } catch {
    return url;
  }
}

function naStr() {
  return C.dim + 'n/a' + C.reset;
}

function stripAnsi(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

function padEnd(str, len) {
  const visible = stripAnsi(str).length;
  return str + ' '.repeat(Math.max(0, len - visible));
}

function centerPad(str, len) {
  const visible = stripAnsi(str).length;
  const total   = Math.max(0, len - visible);
  const left    = Math.floor(total / 2);
  const right   = total - left;
  return ' '.repeat(left) + str + ' '.repeat(right);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Run ─────────────────────────────────────────────────────────────────────

main().catch(err => {
  console.error(`${C.red}Fehler: ${err.message}${C.reset}`);
  process.exit(1);
});
