// scripts/lib/ai-visibility.mjs
// Prueft ob AI-Systeme (aktuell Claude) Meyso-Projekte bei relevanten Queries erwaehnen
// Nutzt Claude API mit Web-Search-Tool fuer realistische Ergebnisse

import { sanitize } from './sanitize.mjs';

const USER_AGENT = 'Meyso-SEO-Agent/1.0 (+https://meyso.de)';

/**
 * Fuehrt AI-Visibility-Checks fuer ein Projekt durch.
 * Fragt fuer jede definierte Query, ob Claude die Website erwaehnt.
 */
export async function checkAiVisibility(project, apiKey) {
  if (!apiKey) {
    return { error: 'ANTHROPIC_API_KEY fehlt', skipped: true };
  }

  const queries = project.aiVisibilityQueries ?? [];
  if (queries.length === 0) {
    return { skipped: true, reason: 'Keine Queries definiert' };
  }

  const results = {
    project: project.name,
    url: project.url,
    domain: extractDomain(project.url),
    queries: [],
    summary: { mentioned: 0, notMentioned: 0, errors: 0 },
  };

  for (const query of queries.slice(0, 5)) { // Max 5 Queries, um Kosten zu begrenzen
    const result = await runSingleQuery(query, results.domain, apiKey);
    results.queries.push(result);

    if (result.error) results.summary.errors++;
    else if (result.mentioned) results.summary.mentioned++;
    else results.summary.notMentioned++;

    await sleep(2000); // Rate limit Respekt
  }

  results.summary.visibilityRate = queries.length > 0
    ? Math.round((results.summary.mentioned / queries.length) * 100)
    : 0;

  return results;
}

/**
 * Fuehrt eine einzelne Query aus und prueft auf Domain-Erwaehnung.
 */
async function runSingleQuery(query, domain, apiKey) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        tools: [
          {
            type: 'web_search_20260209',
            name: 'web_search',
          },
        ],
        messages: [
          {
            role: 'user',
            content: `Recherchiere und beantworte sachlich: ${query}. Nenne konkrete Websites und Unternehmen als Quellen.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return { query, error: `API error ${response.status}: ${sanitize(text.slice(0, 200))}` };
    }

    const data = await response.json();
    const fullText = extractResponseText(data);
    const citations = extractCitations(data);

    const domainMentioned = fullText.normalize('NFC').toLowerCase().includes(domain.normalize('NFC').toLowerCase()) ||
      citations.some(c => c.includes(domain));

    return {
      query,
      mentioned: domainMentioned,
      citations: citations.slice(0, 10),
      responsePreview: fullText.slice(0, 500),
    };
  } catch (error) {
    return { query, error: error.message };
  }
}

/**
 * Extrahiert Text aus Claude-Response (die aus mehreren Content-Bloecken bestehen kann).
 */
function extractResponseText(data) {
  const blocks = data.content ?? [];
  return blocks
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('\n');
}

/**
 * Extrahiert Citation-URLs aus Claude-Response.
 */
function extractCitations(data) {
  const blocks = data.content ?? [];
  const urls = new Set();

  for (const block of blocks) {
    if (block.type === 'text' && block.citations) {
      for (const citation of block.citations) {
        if (citation.url) urls.add(citation.url);
      }
    }
    if (block.type === 'web_search_tool_result' && block.content) {
      for (const result of block.content) {
        if (result.url) urls.add(result.url);
      }
    }
  }

  return [...urls];
}

/**
 * Extrahiert Domain aus URL (ohne Protokoll, ohne www).
 */
function extractDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
