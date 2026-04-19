// scripts/lib/report.mjs
// Generiert Markdown-Reports aus den Check-Ergebnissen
// Updated sowohl Per-Projekt Status-MDs als auch den Gesamt-Monatsreport

import fs from 'node:fs/promises';
import path from 'node:path';

const ICON = {
  ok: '✅',
  warning: '⚠️',
  error: '❌',
  info: 'ℹ️',
  up: '📈',
  down: '📉',
  neutral: '➡️',
};

/**
 * Erzeugt einen kompletten Report-Block für ein einzelnes Projekt.
 */
export function formatProjectReport(result) {
  const sections = [];
  const timestamp = new Date().toISOString().split('T')[0];

  sections.push(`## Auto-Check ${timestamp}`);
  sections.push('');

  // Lighthouse
  if (result.checks.lighthouse && !result.checks.lighthouse.error) {
    sections.push(formatLighthouseSection(result.checks.lighthouse));
  }

  // GSC Data
  if (result.checks.gsc && !result.checks.gsc.error) {
    sections.push(formatGscSection(result.checks.gsc));
  }

  // Technical
  if (result.checks.technical) {
    sections.push(formatTechnicalSection(result.checks.technical));
  }

  // AI Visibility
  if (result.checks.aiVisibility && !result.checks.aiVisibility.skipped) {
    sections.push(formatAiSection(result.checks.aiVisibility));
  }

  // Action Items
  const actionItems = deriveActionItems(result);
  if (actionItems.length > 0) {
    sections.push('### Priorisierte Empfehlungen');
    sections.push('');
    for (const item of actionItems) {
      sections.push(`- **${item.priority}:** ${item.text}`);
    }
    sections.push('');
  }

  sections.push('---');
  sections.push('');

  return sections.join('\n');
}

function formatLighthouseSection(lh) {
  const lines = ['### Lighthouse'];
  lines.push('');

  if (lh.average) {
    const m = lh.average.mobile;
    const d = lh.average.desktop;
    lines.push(`| Kategorie | Mobile | Desktop |`);
    lines.push(`|-----------|--------|---------|`);
    lines.push(`| Performance | ${scoreIcon(m.performance)} ${m.performance} | ${scoreIcon(d.performance)} ${d.performance} |`);
    lines.push(`| SEO | ${scoreIcon(m.seo)} ${m.seo} | ${scoreIcon(d.seo)} ${d.seo} |`);
    lines.push(`| Accessibility | ${scoreIcon(m.accessibility)} ${m.accessibility} | ${scoreIcon(d.accessibility)} ${d.accessibility} |`);
    lines.push(`| Best Practices | ${scoreIcon(m.bestPractices)} ${m.bestPractices} | ${scoreIcon(d.bestPractices)} ${d.bestPractices} |`);
    lines.push('');
  }

  if (lh.worstPage && lh.worstPage.score < 90) {
    lines.push(`**Schwächste Seite:** ${lh.worstPage.url} (Performance ${lh.worstPage.score})`);
    lines.push('');
  }

  // Core Web Vitals von Homepage
  const firstPage = Object.values(lh.pages ?? {})[0];
  if (firstPage?.mobile?.coreWebVitals) {
    const cwv = firstPage.mobile.coreWebVitals;
    lines.push(`**Core Web Vitals (Homepage, Mobile):**`);
    if (cwv.lcp) lines.push(`- LCP: ${(cwv.lcp / 1000).toFixed(2)}s ${cwvIcon('lcp', cwv.lcp)}`);
    if (cwv.inp) lines.push(`- INP: ${Math.round(cwv.inp)}ms ${cwvIcon('inp', cwv.inp)}`);
    if (cwv.cls) lines.push(`- CLS: ${cwv.cls.toFixed(3)} ${cwvIcon('cls', cwv.cls)}`);
    lines.push('');
  }

  return lines.join('\n');
}

function formatGscSection(gsc) {
  const lines = ['### Google Search Console (letzte 28 Tage)'];
  lines.push('');

  if (gsc.topQueries && gsc.topQueries.length > 0) {
    const totalClicks = gsc.topQueries.reduce((s, q) => s + q.clicks, 0);
    const totalImpressions = gsc.topQueries.reduce((s, q) => s + q.impressions, 0);
    lines.push(`**Gesamt (Top 25):** ${totalClicks} Klicks, ${totalImpressions} Impressions`);
    lines.push('');

    lines.push('**Top 10 Queries:**');
    lines.push('');
    lines.push(`| Query | Klicks | Impr. | CTR | Position | Δ Pos |`);
    lines.push(`|-------|--------|-------|-----|----------|-------|`);
    for (const q of gsc.topQueries.slice(0, 10)) {
      const delta = q.trend?.positionDelta;
      const deltaStr = delta !== undefined && delta !== null
        ? (delta < 0 ? `↑${Math.abs(delta)}` : delta > 0 ? `↓${delta}` : '–')
        : '–';
      lines.push(`| ${truncate(q.query, 40)} | ${q.clicks} | ${q.impressions} | ${q.ctr}% | ${q.position} | ${deltaStr} |`);
    }
    lines.push('');
  }

  if (gsc.opportunities && gsc.opportunities.length > 0) {
    lines.push('**Optimierungs-Chancen (Position 11-20 mit Traffic):**');
    lines.push('');
    for (const opp of gsc.opportunities.slice(0, 5)) {
      lines.push(`- \`${opp.query}\` auf Position ${opp.position}, ${opp.impressions} Impressions`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function formatTechnicalSection(tech) {
  const lines = ['### Technical SEO'];
  lines.push('');

  if (tech.sitemap) {
    const sm = tech.sitemap;
    if (sm.status === 'ok') {
      lines.push(`${ICON.ok} **Sitemap:** ${sm.totalUrls} URLs, ${sm.sampleChecked} geprüft, alle OK`);
    } else if (sm.status === 'warning') {
      lines.push(`${ICON.warning} **Sitemap:** ${sm.totalUrls} URLs, ${sm.brokenUrls?.length ?? 0} broken`);
      if (sm.brokenUrls?.length) {
        for (const url of sm.brokenUrls.slice(0, 3)) {
          lines.push(`  - ${url}`);
        }
      }
    } else {
      lines.push(`${ICON.error} **Sitemap:** ${sm.reason}`);
    }
  }

  if (tech.brokenLinks) {
    const bl = tech.brokenLinks;
    if (bl.status === 'ok') {
      lines.push(`${ICON.ok} **Interne Links:** ${bl.checkedLinks} geprüft, keine broken`);
    } else if (bl.status === 'warning') {
      lines.push(`${ICON.warning} **Interne Links:** ${bl.brokenLinks.length} broken von ${bl.checkedLinks}`);
      for (const url of bl.brokenLinks.slice(0, 5)) {
        lines.push(`  - ${url}`);
      }
    }
  }

  if (tech.schemaOrg) {
    const s = tech.schemaOrg;
    if (s.status === 'ok') {
      lines.push(`${ICON.ok} **Schema.org:** ${s.schemas.join(', ')}`);
    } else if (s.status === 'missing') {
      lines.push(`${ICON.warning} **Schema.org:** fehlt auf Startseite`);
    } else {
      lines.push(`${ICON.error} **Schema.org:** ${s.reason ?? 'invalid'}`);
    }
  }

  if (tech.metaTags) {
    const mt = tech.metaTags;
    if (mt.status === 'ok') {
      lines.push(`${ICON.ok} **Meta-Tags:** vollständig`);
    } else if (mt.issues?.length) {
      lines.push(`${ICON.warning} **Meta-Tags:** ${mt.issues.length} Warnung(en)`);
      for (const issue of mt.issues.slice(0, 5)) {
        lines.push(`  - ${issue}`);
      }
    }
  }

  lines.push('');
  return lines.join('\n');
}

function formatAiSection(ai) {
  const lines = ['### AI-Visibility'];
  lines.push('');

  if (ai.skipped) {
    lines.push(`${ICON.info} Übersprungen: ${ai.reason ?? 'n/a'}`);
    lines.push('');
    return lines.join('\n');
  }

  const rate = ai.summary?.visibilityRate ?? 0;
  const rateIcon = rate >= 50 ? ICON.ok : rate >= 20 ? ICON.warning : ICON.error;
  lines.push(`${rateIcon} **Visibility-Rate:** ${rate}% (${ai.summary?.mentioned ?? 0}/${ai.queries?.length ?? 0} Queries)`);
  lines.push('');

  if (ai.queries) {
    lines.push('**Ergebnisse pro Query:**');
    lines.push('');
    for (const q of ai.queries) {
      if (q.error) {
        lines.push(`- ${ICON.error} \`${q.query}\`: ${q.error}`);
      } else if (q.mentioned) {
        lines.push(`- ${ICON.ok} \`${q.query}\`: erwähnt`);
      } else {
        lines.push(`- ${ICON.warning} \`${q.query}\`: nicht erwähnt`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Leitet Handlungsempfehlungen aus den Ergebnissen ab.
 */
function deriveActionItems(result) {
  const items = [];

  // Performance
  const mobilePerf = result.checks.lighthouse?.average?.mobile?.performance;
  if (mobilePerf !== undefined && mobilePerf < 70) {
    items.push({
      priority: 'HOCH',
      text: `Mobile Performance ${mobilePerf} ist kritisch. Worst-Page prüfen und optimieren.`,
    });
  } else if (mobilePerf !== undefined && mobilePerf < 90) {
    items.push({
      priority: 'MITTEL',
      text: `Mobile Performance ${mobilePerf}. Optimierungs-Potential.`,
    });
  }

  // GSC Opportunities
  const opps = result.checks.gsc?.opportunities ?? [];
  if (opps.length > 0) {
    items.push({
      priority: 'MITTEL',
      text: `${opps.length} Queries auf Position 11-20. Top-Chance: "${opps[0].query}" (${opps[0].impressions} Impressions).`,
    });
  }

  // Broken Links
  const broken = result.checks.technical?.brokenLinks?.brokenLinks?.length ?? 0;
  if (broken > 0) {
    items.push({
      priority: 'HOCH',
      text: `${broken} Broken Internal Links gefunden. Sofort fixen.`,
    });
  }

  // Meta-Tags Issues
  const metaIssues = result.checks.technical?.metaTags?.issues ?? [];
  if (metaIssues.length > 0) {
    items.push({
      priority: 'NIEDRIG',
      text: `${metaIssues.length} Meta-Tag-Warnung(en) auf Startseite.`,
    });
  }

  // Schema.org fehlt
  if (result.checks.technical?.schemaOrg?.status === 'missing') {
    items.push({
      priority: 'MITTEL',
      text: 'Schema.org auf Startseite fehlt. LocalBusiness/Organization ergänzen.',
    });
  }

  // AI-Visibility niedrig
  const aiRate = result.checks.aiVisibility?.summary?.visibilityRate;
  if (aiRate !== undefined && aiRate < 20) {
    items.push({
      priority: 'NIEDRIG',
      text: `AI-Visibility-Rate nur ${aiRate}%. Content für AI-Citation strukturieren.`,
    });
  }

  return items;
}

/**
 * Updated die Per-Projekt Status-MD.
 * Fügt neuen Auto-Check-Report am Ende an, behält History.
 */
export async function updateProjectStatusFile(statusDir, project, result) {
  const fileName = sanitizeFilename(project.name) + '.md';
  const filePath = path.join(statusDir, fileName);

  const timestamp = new Date().toISOString().split('T')[0];
  const newReport = formatProjectReport(result);

  try {
    let content = await fs.readFile(filePath, 'utf-8');

    // "Letzter automatischer Check" updaten
    content = content.replace(
      /\*\*Letzter automatischer Check:\*\*.*$/m,
      `**Letzter automatischer Check:** ${timestamp}`
    );

    // Neuen Report am Ende anfügen (vor eventueller Trailing-Newline)
    content = content.trimEnd() + '\n\n' + newReport;

    await fs.writeFile(filePath, content, 'utf-8');
    return { updated: true, path: filePath };
  } catch (error) {
    if (error.code === 'ENOENT') {
      return { updated: false, reason: 'Status-File nicht gefunden', path: filePath };
    }
    throw error;
  }
}

/**
 * Generiert den Gesamt-Monatsreport über alle Projekte.
 */
export function generateMonthlyReport(results) {
  const month = new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
  const sections = [];

  sections.push(`# SEO-Monatsreport ${month}`);
  sections.push('');
  sections.push(`**Generiert:** ${new Date().toISOString()}`);
  sections.push('');
  sections.push('## Zusammenfassung');
  sections.push('');

  // Tabelle mit allen Projekten
  sections.push('| Projekt | Lighthouse Mobile | GSC Klicks (28d) | AI-Visibility | Status |');
  sections.push('|---------|-------------------|------------------|---------------|--------|');

  const criticalItems = [];

  for (const r of results) {
    if (r.error) {
      sections.push(`| ${r.project.name} | – | – | – | ${ICON.error} Error: ${r.error} |`);
      continue;
    }

    const perf = r.checks.lighthouse?.average?.mobile?.performance ?? '–';
    const gscClicks = r.checks.gsc?.topQueries?.reduce((s, q) => s + q.clicks, 0) ?? '–';
    const aiRate = r.checks.aiVisibility?.summary?.visibilityRate;
    const aiRateStr = aiRate !== undefined ? `${aiRate}%` : 'skipped';
    const status = deriveOverallStatus(r);

    sections.push(
      `| ${r.project.name} | ${scoreIcon(perf)} ${perf} | ${gscClicks} | ${aiRateStr} | ${status} |`
    );

    // Kritische Punkte sammeln
    const items = deriveActionItems(r);
    const critical = items.filter(i => i.priority === 'HOCH');
    for (const item of critical) {
      criticalItems.push({ project: r.project.name, text: item.text });
    }
  }

  sections.push('');

  if (criticalItems.length > 0) {
    sections.push('## Kritische Punkte (sofort prüfen)');
    sections.push('');
    for (const item of criticalItems) {
      sections.push(`- **${item.project}:** ${item.text}`);
    }
    sections.push('');
  }

  sections.push('## Details pro Projekt');
  sections.push('');
  sections.push('Die ausführlichen Ergebnisse stehen in den jeweiligen Status-Dateien:');
  sections.push('');
  for (const r of results) {
    if (!r.error) {
      sections.push(`- [${r.project.name}](./project-status/${sanitizeFilename(r.project.name)}.md)`);
    }
  }
  sections.push('');

  return sections.join('\n');
}

function deriveOverallStatus(result) {
  const items = deriveActionItems(result);
  const high = items.filter(i => i.priority === 'HOCH').length;
  const medium = items.filter(i => i.priority === 'MITTEL').length;

  if (high > 0) return `${ICON.error} ${high} kritisch`;
  if (medium > 0) return `${ICON.warning} ${medium} zu prüfen`;
  return `${ICON.ok} gesund`;
}

function scoreIcon(score) {
  if (typeof score !== 'number') return '';
  if (score >= 90) return '🟢';
  if (score >= 70) return '🟡';
  return '🔴';
}

function cwvIcon(metric, value) {
  const thresholds = {
    lcp: { good: 2500, poor: 4000 },
    inp: { good: 200, poor: 500 },
    cls: { good: 0.1, poor: 0.25 },
  };
  const t = thresholds[metric];
  if (!t) return '';
  if (value <= t.good) return '🟢';
  if (value <= t.poor) return '🟡';
  return '🔴';
}

function truncate(str, len) {
  if (!str) return '';
  return str.length > len ? str.slice(0, len - 1) + '…' : str;
}

function sanitizeFilename(name) {
  return name.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

/**
 * Escaped Text für sichere Markdown-Tabellen-Zellen.
 */
export function escapeMd(text) {
  if (!text) return '';
  return String(text).replace(/\|/g, '\\|').replace(/\n/g, ' ');
}
