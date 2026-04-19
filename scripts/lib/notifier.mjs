// scripts/lib/notifier.mjs
// Push-Notifications via ntfy.sh

/**
 * Sendet eine Push-Notification.
 * @param {string} title - Titel der Notification
 * @param {string} message - Nachrichtentext
 * @param {'min'|'low'|'default'|'high'|'max'} priority - Priorität
 */
export async function sendNotification(title, message, priority = 'default') {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) {
    console.log('NTFY_TOPIC nicht gesetzt, skip Notification');
    return;
  }

  try {
    const response = await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      headers: {
        Title: title,
        Priority: priority,
        Tags: priority === 'high' ? 'warning' : 'chart_with_upwards_trend',
      },
      body: message,
    });

    if (!response.ok) {
      console.warn(`ntfy request failed: ${response.status}`);
    }
  } catch (error) {
    console.warn(`ntfy error: ${error.message}`);
  }
}

/**
 * Baut Zusammenfassungs-Text aus allen Projekt-Ergebnissen.
 */
export function buildSummary(results) {
  const lines = [];

  for (const r of results) {
    if (r.error) {
      lines.push(`❌ ${r.project.name}: ${r.error}`);
      continue;
    }

    const perf = r.checks.lighthouse?.average?.mobile?.performance;
    const gscClicks = r.checks.gsc?.topQueries?.reduce((s, q) => s + q.clicks, 0);
    const critical = countCritical(r);

    let line = `${critical > 0 ? '⚠️' : '✅'} ${r.project.name}`;
    if (perf !== undefined) line += ` L:${perf}`;
    if (gscClicks !== undefined) line += ` | ${gscClicks} Klicks`;
    if (critical > 0) line += ` | ${critical} kritisch`;

    lines.push(line);
  }

  return lines.join('\n');
}

function countCritical(result) {
  let count = 0;

  const mobilePerf = result.checks.lighthouse?.average?.mobile?.performance;
  if (mobilePerf !== undefined && mobilePerf < 70) count++;

  const broken = result.checks.technical?.brokenLinks?.brokenLinks?.length ?? 0;
  if (broken > 0) count++;

  const sitemapStatus = result.checks.technical?.sitemap?.status;
  if (sitemapStatus === 'error') count++;

  return count;
}
