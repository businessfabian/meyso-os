// scripts/lib/gsc.mjs
// Google Search Console API Integration
// OAuth-Flow: einmalig Refresh-Token erzeugen, dann dauerhaft nutzen

const OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GSC_API_BASE = 'https://searchconsole.googleapis.com/webmasters/v3';

/**
 * Holt ein frisches Access-Token via Refresh-Token.
 */
async function getAccessToken() {
  const clientId = process.env.GSC_CLIENT_ID;
  const clientSecret = process.env.GSC_CLIENT_SECRET;
  const refreshToken = process.env.GSC_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('GSC-Credentials unvollständig');
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });

  const response = await fetch(OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OAuth token refresh failed: ${response.status} ${text.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Ruft Search Analytics Daten für ein Property ab.
 * @param {string} property - GSC Property (z.B. "sc-domain:meyso.de")
 * @param {object} options - Zeitraum und Filter
 */
export async function getSearchAnalytics(property, options = {}) {
  if (!property) {
    return { error: 'Kein GSC-Property gesetzt' };
  }

  try {
    const accessToken = await getAccessToken();

    const {
      startDate = daysAgo(28),
      endDate = daysAgo(1),
      dimensions = ['query'],
      rowLimit = 25,
    } = options;

    const url = `${GSC_API_BASE}/sites/${encodeURIComponent(property)}/searchAnalytics/query`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions,
        rowLimit,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return { error: `GSC API error: ${response.status} ${text.slice(0, 200)}` };
    }

    const data = await response.json();
    return {
      property,
      startDate,
      endDate,
      rows: (data.rows ?? []).map(row => ({
        keys: row.keys,
        clicks: row.clicks ?? 0,
        impressions: row.impressions ?? 0,
        ctr: row.ctr ?? 0,
        position: row.position ?? 0,
      })),
    };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Holt Top-Queries mit Trends (aktuell vs. vorheriger Zeitraum).
 */
export async function getTopQueriesWithTrend(property) {
  const current = await getSearchAnalytics(property, {
    startDate: daysAgo(28),
    endDate: daysAgo(1),
    dimensions: ['query'],
    rowLimit: 25,
  });

  if (current.error) return current;

  const previous = await getSearchAnalytics(property, {
    startDate: daysAgo(56),
    endDate: daysAgo(29),
    dimensions: ['query'],
    rowLimit: 50,
  });

  // Map für schnelles Lookup
  const previousMap = new Map();
  if (!previous.error) {
    for (const row of previous.rows) {
      previousMap.set(row.keys[0], row);
    }
  }

  // Aktuelle Queries mit Delta anreichern
  const enriched = current.rows.map(row => {
    const query = row.keys[0];
    const prev = previousMap.get(query);
    return {
      query,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: Math.round(row.ctr * 10000) / 100, // in %
      position: Math.round(row.position * 10) / 10,
      trend: prev ? {
        clicksDelta: row.clicks - prev.clicks,
        impressionsDelta: row.impressions - prev.impressions,
        positionDelta: Math.round((row.position - prev.position) * 10) / 10,
      } : null,
    };
  });

  return {
    property,
    topQueries: enriched,
    opportunities: findOpportunities(enriched),
  };
}

/**
 * Identifiziert Optimierungs-Chancen:
 * Queries mit hohen Impressions aber schlechter Position (11-20).
 */
function findOpportunities(queries) {
  return queries
    .filter(q => q.position >= 11 && q.position <= 20 && q.impressions >= 30)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10)
    .map(q => ({
      query: q.query,
      position: q.position,
      impressions: q.impressions,
      potentialGain: `Position ${Math.floor(q.position)} → Top 10 könnte CTR von ${q.ctr}% auf ~5-10% heben`,
    }));
}

/**
 * Prüft Coverage-Status (welche URLs sind indexiert, welche haben Probleme).
 */
export async function getCoverageStatus(property) {
  // GSC hat keine offizielle API für Coverage-Report, nur via Inspection API (URL für URL)
  // Als Proxy prüfen wir Sitemap-Status
  try {
    const accessToken = await getAccessToken();
    const url = `${GSC_API_BASE}/sites/${encodeURIComponent(property)}/sitemaps`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      const text = await response.text();
      return { error: `Sitemaps API error: ${response.status} ${text.slice(0, 200)}` };
    }

    const data = await response.json();
    return {
      sitemaps: (data.sitemap ?? []).map(s => ({
        path: s.path,
        lastSubmitted: s.lastSubmitted,
        isPending: s.isPending,
        warnings: parseInt(s.warnings ?? 0, 10),
        errors: parseInt(s.errors ?? 0, 10),
      })),
    };
  } catch (error) {
    return { error: error.message };
  }
}

function daysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().split('T')[0];
}
