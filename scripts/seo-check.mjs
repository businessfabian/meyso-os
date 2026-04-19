#!/usr/bin/env node
// scripts/seo-check.mjs
// Haupt-Script für den Meyso SEO Monitoring Agent
// Führt alle Checks durch, updated Status-Files, sendet Notifications

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { checkProjectLighthouse } from './lib/lighthouse.mjs';
import { getTopQueriesWithTrend, getCoverageStatus } from './lib/gsc.mjs';
import { checkAiVisibility } from './lib/ai-visibility.mjs';
import {
  checkSitemap,
  checkSchemaOrg,
  checkMetaTags,
  checkBrokenLinks,
} from './lib/technical-checks.mjs';
import {
  updateProjectStatusFile,
  generateMonthlyReport,
} from './lib/report.mjs';
import { sendNotification, buildSummary } from './lib/notifier.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = path.join(__dirname, 'config', 'projects.json');
const STATUS_DIR = path.join(__dirname, '..', 'docs', 'seo', 'project-status');
const REPORTS_DIR = path.join(__dirname, '..', 'docs', 'seo', 'reports');

const mode = parseArg('--mode') ?? 'monthly';
const projectFilter = parseArg('--project');
const dryRun = process.argv.includes('--dry-run');

async function main() {
  console.log(`🚀 Meyso SEO Agent | Mode: ${mode}${dryRun ? ' | DRY RUN' : ''}`);
  console.log(`📅 ${new Date().toISOString()}\n`);

  const config = JSON.parse(await fs.readFile(CONFIG_PATH, 'utf-8'));
  let projects = config.projects ?? [];

  if (projectFilter) {
    projects = projects.filter(p => p.name === projectFilter);
    if (projects.length === 0) {
      console.error(`Projekt nicht gefunden: ${projectFilter}`);
      process.exit(1);
    }
  }

  console.log(`Checking ${projects.length} Projekt(e): ${projects.map(p => p.name).join(', ')}\n`);

  const results = [];

  for (const project of projects) {
    console.log(`\n━━━ ${project.name} ━━━`);
    const result = await checkProject(project);
    results.push(result);
  }

  // Status-Files updaten
  if (!dryRun) {
    await fs.mkdir(STATUS_DIR, { recursive: true });
    for (const r of results) {
      if (!r.error) {
        const update = await updateProjectStatusFile(STATUS_DIR, r.project, r);
        if (update.updated) {
          console.log(`📝 Updated ${update.path}`);
        } else {
          console.warn(`⚠️ ${update.reason}: ${update.path}`);
        }
      }
    }

    // Monatsreport generieren
    if (mode === 'monthly') {
      await fs.mkdir(REPORTS_DIR, { recursive: true });
      const reportMd = generateMonthlyReport(results);
      const reportMonth = new Date().toISOString().slice(0, 7);
      const reportPath = path.join(REPORTS_DIR, `${reportMonth}.md`);
      await fs.writeFile(reportPath, reportMd, 'utf-8');
      console.log(`📄 Monatsreport: ${reportPath}`);
    }
  }

  // Summary für Console und Notification
  const summary = buildSummary(results);
  console.log('\n━━━ Zusammenfassung ━━━');
  console.log(summary);

  // Notification senden
  if (!dryRun) {
    const hasCritical = results.some(r => countCritical(r) > 0);
    await sendNotification(
      `SEO ${mode} ${new Date().toLocaleDateString('de-DE')}`,
      summary,
      hasCritical ? 'high' : 'default',
    );
  }

  console.log('\n✅ Fertig');

  // Exit-Code: 1 wenn kritische Probleme, sonst 0
  const hasErrors = results.some(r => r.error || countCritical(r) > 0);
  process.exit(hasErrors ? 1 : 0);
}

/**
 * Führt alle Checks für ein Projekt durch.
 */
async function checkProject(project) {
  const result = {
    project,
    timestamp: new Date().toISOString(),
    checks: {},
  };

  try {
    // Lighthouse (kostet API-Calls, aber wichtigster Check)
    console.log('🔦 Lighthouse...');
    if (process.env.GOOGLE_PAGESPEED_API_KEY) {
      result.checks.lighthouse = await checkProjectLighthouse(
        project,
        process.env.GOOGLE_PAGESPEED_API_KEY
      );
      const avg = result.checks.lighthouse.average?.mobile?.performance;
      console.log(`   Mobile Performance: ${avg ?? '?'}`);
    } else {
      result.checks.lighthouse = { error: 'GOOGLE_PAGESPEED_API_KEY fehlt' };
      console.log('   ⏭️  übersprungen (kein API-Key)');
    }

    // GSC-Daten (nur im Monthly-Mode, komplex wegen OAuth)
    if (mode === 'monthly' && project.gsc_property) {
      console.log('📊 Google Search Console...');
      try {
        result.checks.gsc = await getTopQueriesWithTrend(project.gsc_property);
        if (!result.checks.gsc.error) {
          console.log(`   ${result.checks.gsc.topQueries?.length ?? 0} Queries erfasst`);
        } else {
          const msg = result.checks.gsc.error.includes('403')
            ? `GSC-Zugriff fehlt fuer ${project.name}. Siehe SETUP.md fuer Permission-Setup.`
            : result.checks.gsc.error;
          console.log(`   ⚠️ ${msg}`);
        }
      } catch (gscErr) {
        result.checks.gsc = { error: gscErr.message, configError: true };
        console.log(`   ⚠️ GSC-Fehler: ${gscErr.message}`);
      }
    }

    // Technical Checks
    console.log('🔧 Technical Checks...');
    result.checks.technical = {
      sitemap: await checkSitemap(project.url),
      schemaOrg: await checkSchemaOrg(project.url),
      metaTags: await checkMetaTags(project.url),
      brokenLinks: await checkBrokenLinks(project.url, 15),
    };
    console.log(`   Sitemap: ${result.checks.technical.sitemap.status}`);
    console.log(`   Schema.org: ${result.checks.technical.schemaOrg.status}`);
    console.log(`   Meta-Tags: ${result.checks.technical.metaTags.status}`);
    console.log(`   Broken Links: ${result.checks.technical.brokenLinks.status}`);

    // AI-Visibility (kostet Tokens, nur im Monthly-Mode)
    if (mode === 'monthly' && process.env.ANTHROPIC_API_KEY) {
      console.log('🤖 AI-Visibility...');
      result.checks.aiVisibility = await checkAiVisibility(
        project,
        process.env.ANTHROPIC_API_KEY
      );
      if (!result.checks.aiVisibility.skipped) {
        console.log(`   Visibility-Rate: ${result.checks.aiVisibility.summary?.visibilityRate ?? '?'}%`);
      }
    }

    return result;
  } catch (error) {
    console.error(`💥 Fehler bei ${project.name}:`, error.message);
    return { ...result, error: error.message };
  }
}

function countCritical(result) {
  // Config-Fehler (GSC 403, fehlende Credentials) sind keine kritischen Agent-Fehler
  if (result.error && !result.checks?.gsc?.configError) return 1;
  let count = 0;
  const perf = result.checks?.lighthouse?.average?.mobile?.performance;
  if (perf !== undefined && perf < 70) count++;
  const broken = result.checks?.technical?.brokenLinks?.brokenLinks?.length ?? 0;
  if (broken > 0) count++;
  // 'skipped' (z.B. vercel.app ohne Sitemap) zaehlt nicht als Fehler
  const sitemapStatus = result.checks?.technical?.sitemap?.status;
  if (sitemapStatus === 'error') count++;
  return count;
}

function parseArg(name) {
  const arg = process.argv.find(a => a.startsWith(`${name}=`));
  return arg?.split('=')[1];
}

main().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
