// scripts/lib/lighthouse.mjs
// Lighthouse-Check via Google PageSpeed Insights API
// Prüft Performance, SEO, Accessibility, Best Practices plus Core Web Vitals

const PAGESPEED_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

/**
 * Führt Lighthouse-Check für eine einzelne URL durch.
 * @param {string} url - Die zu prüfende URL
 * @param {string} apiKey - Google PageSpeed API Key
 * @param {'mobile'|'desktop'} strategy - Mobile oder Desktop-Strategie
 * @returns {Promise<object>} Lighthouse-Ergebnisse oder null bei Fehler
 */
export async function checkLighthouse(url, apiKey, strategy = 'mobile') {
  if (!apiKey) {
    return { error: 'API-Key fehlt' };
  }

  const apiUrl = new URL(PAGESPEED_API);
  apiUrl.searchParams.set('url', url);
  apiUrl.searchParams.set('key', apiKey);
  apiUrl.searchParams.set('strategy', strategy);
  apiUrl.searchParams.append('category', 'performance');
  apiUrl.searchParams.append('category', 'seo');
  apiUrl.searchParams.append('category', 'accessibility');
  apiUrl.searchParams.append('category', 'best-practices');

  try {
    const response = await fetch(apiUrl.toString(), {
      signal: AbortSignal.timeout(60_000), // PageSpeed braucht manchmal lang
    });

    if (!response.ok) {
      const text = await response.text();
      return { error: `HTTP ${response.status}: ${text.slice(0, 200)}` };
    }

    const data = await response.json();
    const lighthouse = data.lighthouseResult;
    if (!lighthouse) {
      return { error: 'Kein Lighthouse-Ergebnis in Response' };
    }

    const categories = lighthouse.categories ?? {};
    const audits = lighthouse.audits ?? {};

    return {
      strategy,
      scores: {
        performance: Math.round((categories.performance?.score ?? 0) * 100),
        seo: Math.round((categories.seo?.score ?? 0) * 100),
        accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
        bestPractices: Math.round((categories['best-practices']?.score ?? 0) * 100),
      },
      coreWebVitals: {
        lcp: audits['largest-contentful-paint']?.numericValue ?? null,
        cls: audits['cumulative-layout-shift']?.numericValue ?? null,
        inp: audits['interaction-to-next-paint']?.numericValue ?? null,
        fcp: audits['first-contentful-paint']?.numericValue ?? null,
        ttfb: audits['server-response-time']?.numericValue ?? null,
      },
      // Wichtige Probleme aus den Audits extrahieren
      issues: extractIssues(audits),
    };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Prüft mehrere URLs eines Projekts und aggregiert die Ergebnisse.
 */
export async function checkProjectLighthouse(project, apiKey) {
  const pages = [project.url, ...(project.important_pages ?? []).slice(1).map(p =>
    new URL(p, project.url).toString()
  )];

  const results = {
    pages: {},
    average: null,
    worstPage: null,
  };

  // Sequenziell, um Rate-Limits zu respektieren (PageSpeed: 240 req/min)
  for (const pageUrl of pages.slice(0, 5)) {
    // Zuerst mobile, dann desktop
    const mobile = await checkLighthouse(pageUrl, apiKey, 'mobile');
    await sleep(1000); // 1s Pause zwischen Calls
    const desktop = await checkLighthouse(pageUrl, apiKey, 'desktop');
    await sleep(1000);

    results.pages[pageUrl] = { mobile, desktop };
  }

  // Durchschnitt über alle Seiten berechnen
  results.average = calculateAverages(results.pages);
  results.worstPage = findWorstPage(results.pages);

  return results;
}

/**
 * Extrahiert die wichtigsten Probleme aus Lighthouse-Audits.
 */
function extractIssues(audits) {
  const criticalAudits = [
    'render-blocking-resources',
    'unused-css-rules',
    'unused-javascript',
    'modern-image-formats',
    'uses-optimized-images',
    'uses-text-compression',
    'uses-responsive-images',
    'server-response-time',
    'meta-description',
    'document-title',
    'html-has-lang',
    'image-alt',
    'link-text',
    'hreflang',
    'canonical',
  ];

  const issues = [];
  for (const auditKey of criticalAudits) {
    const audit = audits[auditKey];
    if (audit && audit.score !== null && audit.score < 0.9) {
      issues.push({
        audit: auditKey,
        title: audit.title,
        description: audit.description,
        score: audit.score,
        displayValue: audit.displayValue ?? null,
      });
    }
  }

  return issues;
}

/**
 * Berechnet Durchschnittswerte über alle geprüften Seiten.
 */
function calculateAverages(pages) {
  const pageList = Object.values(pages).filter(p => !p.mobile?.error);
  if (pageList.length === 0) return null;

  const sums = {
    mobile: { performance: 0, seo: 0, accessibility: 0, bestPractices: 0 },
    desktop: { performance: 0, seo: 0, accessibility: 0, bestPractices: 0 },
  };

  for (const page of pageList) {
    if (page.mobile?.scores) {
      sums.mobile.performance += page.mobile.scores.performance;
      sums.mobile.seo += page.mobile.scores.seo;
      sums.mobile.accessibility += page.mobile.scores.accessibility;
      sums.mobile.bestPractices += page.mobile.scores.bestPractices;
    }
    if (page.desktop?.scores) {
      sums.desktop.performance += page.desktop.scores.performance;
      sums.desktop.seo += page.desktop.scores.seo;
      sums.desktop.accessibility += page.desktop.scores.accessibility;
      sums.desktop.bestPractices += page.desktop.scores.bestPractices;
    }
  }

  const count = pageList.length;
  return {
    mobile: {
      performance: Math.round(sums.mobile.performance / count),
      seo: Math.round(sums.mobile.seo / count),
      accessibility: Math.round(sums.mobile.accessibility / count),
      bestPractices: Math.round(sums.mobile.bestPractices / count),
    },
    desktop: {
      performance: Math.round(sums.desktop.performance / count),
      seo: Math.round(sums.desktop.seo / count),
      accessibility: Math.round(sums.desktop.accessibility / count),
      bestPractices: Math.round(sums.desktop.bestPractices / count),
    },
  };
}

/**
 * Findet die Seite mit dem schlechtesten mobilen Performance-Score.
 */
function findWorstPage(pages) {
  let worst = null;
  let worstScore = 101;

  for (const [url, data] of Object.entries(pages)) {
    const perf = data.mobile?.scores?.performance;
    if (perf !== undefined && perf < worstScore) {
      worstScore = perf;
      worst = { url, score: perf };
    }
  }

  return worst;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
