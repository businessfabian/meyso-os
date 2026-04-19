// scripts/lib/technical-checks.mjs
// Technische SEO-Checks: Sitemap, Broken Links, Schema.org, Meta-Tags

/**
 * Prüft Sitemap: erreichbar, valide, alle URLs responden.
 */
export async function checkSitemap(baseUrl) {
  const sitemapUrl = new URL('/sitemap.xml', baseUrl).toString();

  try {
    const response = await fetch(sitemapUrl, {
      signal: AbortSignal.timeout(15_000),
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
      return { status: 'warning', reason: 'Sitemap enthält keine URLs' };
    }

    // Sample von max 10 URLs prüfen um Laufzeit zu begrenzen
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
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Prüft Schema.org Präsenz auf einer Seite.
 */
export async function checkSchemaOrg(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': 'Meyso SEO Monitor' },
    });

    if (!response.ok) {
      return { status: 'error', reason: `HTTP ${response.status}` };
    }

    const html = await response.text();

    // Ld+JSON Blocks finden
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
 * Prüft Basis-Meta-Tags auf einer Seite.
 */
export async function checkMetaTags(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': 'Meyso SEO Monitor' },
    });

    if (!response.ok) {
      return { status: 'error', reason: `HTTP ${response.status}` };
    }

    const html = await response.text();
    const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? html;

    const title = extract(head, /<title[^>]*>([^<]+)<\/title>/i);
    const description = extract(head, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
    const canonical = extract(head, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const ogTitle = extract(head, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);
    const ogDescription = extract(head, /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);
    const ogImage = extract(head, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    const robots = extract(head, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);

    // H1 aus Body
    const bodyH1 = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);

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
    if (!bodyH1) issues.push('H1 fehlt');

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
      h1: bodyH1?.replace(/<[^>]+>/g, '').trim().slice(0, 200),
      issues,
    };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

function extract(text, regex) {
  const match = text.match(regex);
  return match?.[1]?.trim() ?? null;
}

/**
 * Findet interne Broken-Links durch begrenztes Crawlen der Startseite.
 */
export async function checkBrokenLinks(baseUrl, maxLinks = 20) {
  try {
    const response = await fetch(baseUrl, {
      signal: AbortSignal.timeout(15_000),
      headers: { 'User-Agent': 'Meyso SEO Monitor' },
    });

    if (!response.ok) {
      return { status: 'error', reason: `Startseite HTTP ${response.status}` };
    }

    const html = await response.text();
    const baseHost = new URL(baseUrl).hostname;

    // Alle Links extrahieren
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
