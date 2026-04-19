// scripts/lib/technical-checks.mjs
// Technische SEO-Checks: Sitemap, Broken Links, Schema.org, Meta-Tags

import * as cheerio from 'cheerio';

const USER_AGENT = 'Meyso-SEO-Agent/1.0 (+https://meyso.de)';

/**
 * Prueft Sitemap: erreichbar, valide, alle URLs responden.
 */
export async function checkSitemap(baseUrl) {
  const sitemapUrl = new URL('/sitemap.xml', baseUrl).toString();

  try {
    const response = await fetch(sitemapUrl, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': USER_AGENT },
    });

    if (!response.ok) {
      return {
        status: 'error',
        reason: `Sitemap HTTP ${response.status}`,
      };
    }

    const xml = await response.text();
    const urls = extractUrlsFromSitemap(xml);

    if (urls.length === 0) {
      return { status: 'warning', reason: 'Sitemap enthaelt keine URLs' };
    }

    const sample = urls.slice(0, 10);
    const brokenUrls = [];

    for (const url of sample) {
      const ok = await quickUrlCheck(url);
      if (!ok) brokenUrls.push(url);
      await sleep(200);
    }

    return {
      status: brokenUrls.length === 0 ? 'ok' : 'warning',
      totalUrls: urls.length,
      sampleChecked: sample.length,
      brokenUrls,
    };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

function extractUrlsFromSitemap(xml) {
  const urls = [];
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  for (const match of matches) {
    urls.push(match[1].trim());
  }
  return urls;
}

async function quickUrlCheck(url) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(10_000),
      headers: { 'User-Agent': USER_AGENT },
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Prueft Schema.org Praesenz auf einer Seite.
 */
export async function checkSchemaOrg(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': USER_AGENT },
    });

    if (!response.ok) {
      return { status: 'error', reason: `HTTP ${response.status}` };
    }

    const html = await response.text();

    const ldJsonBlocks = [...html.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    )];

    if (ldJsonBlocks.length === 0) {
      return { status: 'missing', schemas: [] };
    }

    const schemas = [];
    for (const [, content] of ldJsonBlocks) {
      try {
        const parsed = JSON.parse(content.trim());
        const types = collectTypes(parsed);
        schemas.push(...types);
      } catch {
        // Invalides JSON ignorieren
      }
    }

    return {
      status: schemas.length > 0 ? 'ok' : 'invalid',
      schemas: [...new Set(schemas)],
      count: ldJsonBlocks.length,
    };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

function collectTypes(node) {
  const types = [];
  if (!node) return types;

  if (Array.isArray(node)) {
    for (const item of node) types.push(...collectTypes(item));
    return types;
  }

  if (typeof node === 'object') {
    if (node['@type']) {
      if (Array.isArray(node['@type'])) {
        types.push(...node['@type']);
      } else {
        types.push(node['@type']);
      }
    }
    if (node['@graph']) {
      types.push(...collectTypes(node['@graph']));
    }
  }

  return types;
}

/**
 * Prueft Basis-Meta-Tags auf einer Seite mit cheerio (attribut-reihenfolge-unabhaengig).
 */
export async function checkMetaTags(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': USER_AGENT },
    });

    if (!response.ok) {
      return { status: 'error', reason: `HTTP ${response.status}` };
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const title = $('title').first().text().trim() || null;
    const description = $('meta[name="description"]').attr('content') || null;
    const canonical = $('link[rel="canonical"]').attr('href') || null;
    const ogTitle = $('meta[property="og:title"]').attr('content') || null;
    const ogDescription = $('meta[property="og:description"]').attr('content') || null;
    const ogImage = $('meta[property="og:image"]').attr('content') || null;
    const robots = $('meta[name="robots"]').attr('content') || null;
    const h1 = $('h1').first().text().trim() || null;

    const issues = [];
    if (!title) issues.push('Title-Tag fehlt');
    else if (title.length > 60) issues.push(`Title zu lang: ${title.length} Zeichen`);
    else if (title.length < 20) issues.push(`Title sehr kurz: ${title.length} Zeichen`);

    if (!description) issues.push('Meta-Description fehlt');
    else if (description.length > 160) issues.push(`Description zu lang: ${description.length} Zeichen`);
    else if (description.length < 100) issues.push(`Description sehr kurz: ${description.length} Zeichen`);

    if (!canonical) issues.push('Canonical-Tag fehlt');
    if (!ogTitle) issues.push('OG:title fehlt');
    if (!ogImage) issues.push('OG:image fehlt');
    if (!h1) issues.push('H1 fehlt');
    if (robots?.includes('noindex')) issues.push('Seite ist auf noindex');

    return {
      status: issues.length === 0 ? 'ok' : 'warning',
      title,
      description,
      canonical,
      ogTitle,
      ogDescription,
      ogImage,
      robots,
      h1: h1?.slice(0, 200),
      issues,
    };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

/**
 * Findet interne Broken-Links durch begrenztes Crawlen der Startseite.
 */
export async function checkBrokenLinks(baseUrl, maxLinks = 20) {
  try {
    const response = await fetch(baseUrl, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': USER_AGENT },
    });

    if (!response.ok) {
      return { status: 'error', reason: `Startseite HTTP ${response.status}` };
    }

    const html = await response.text();
    const baseHost = new URL(baseUrl).hostname;

    const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)]
      .map(m => m[1])
      .filter(href => !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:'))
      .map(href => {
        try {
          return new URL(href, baseUrl).toString();
        } catch {
          return null;
        }
      })
      .filter(url => url && new URL(url).hostname === baseHost);

    const unique = [...new Set(links)].slice(0, maxLinks);
    const broken = [];

    for (const link of unique) {
      const ok = await quickUrlCheck(link);
      if (!ok) broken.push(link);
      await sleep(150);
    }

    return {
      status: broken.length === 0 ? 'ok' : 'warning',
      checkedLinks: unique.length,
      brokenLinks: broken,
    };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
