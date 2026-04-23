#!/usr/bin/env node
// Generic script: reads a prompt file, calls Gemini API, writes response to output file.
// Used by GitHub Actions workflows for autonomous loops.
//
// Required env vars:
//   GEMINI_API_KEY  - Google Gemini API key
//   PROMPT_FILE     - path to file containing the prompt text
//   OUTPUT_FILE     - path where the response will be written
//
// Optional env vars:
//   WORKFLOW_ID     - workflow id to update in workflows.json lastRun field
//   LOOP_NAME       - loop identifier; set to "news-scout" to enable Google Search Grounding

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function callGemini(prompt, useGrounding, model) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set');
  }

  const bodyObj = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 8000 }
  };

  if (useGrounding) {
    bodyObj.tools = [{ google_search: {} }];
  }

  const body = JSON.stringify(bodyObj);
  const apiPath = `/v1beta/models/${model}:generateContent?key=${apiKey}`;

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'generativelanguage.googleapis.com',
        port: 443,
        path: apiPath,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'content-length': Buffer.byteLength(body)
        }
      },
      (res) => {
        let raw = '';
        res.on('data', (chunk) => { raw += chunk; });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(raw);
            if (parsed.error) {
              const err = new Error(`Gemini API error (${parsed.error.code}): ${parsed.error.message}`);
              err.statusCode = parsed.error.code;
              reject(err);
            } else {
              resolve(parsed.candidates[0].content.parts[0].text);
            }
          } catch (e) {
            reject(new Error(`Failed to parse API response: ${raw.substring(0, 300)}`));
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function tryWithRetries(prompt, useGrounding, model, maxRetries, delays) {
  let lastErr;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await callGemini(prompt, useGrounding, model);
    } catch (err) {
      lastErr = err;
      const code = err.statusCode;
      const isRetryable = code === 429 || (typeof code === 'number' && code >= 500);
      if (!isRetryable || attempt === maxRetries) break;
      const waitMs = delays[attempt];
      console.log(`Retry ${attempt + 1}/${maxRetries} nach ${waitMs / 1000}s... (API error ${code})`);
      await new Promise((r) => setTimeout(r, waitMs));
    }
  }
  throw lastErr;
}

async function callGeminiWithRetry(prompt, useGrounding, models) {
  const primaryModel = models.primary;
  const fallback1 = models.fallback1;
  const fallback2 = models.fallback2;
  const delays = [10000, 30000, 60000];

  let primaryErr;
  try {
    return await tryWithRetries(prompt, useGrounding, primaryModel, 3, delays);
  } catch (err) {
    primaryErr = err;
    console.log(`Fallback auf ${fallback1}...`);
  }

  let groundingForFallback = useGrounding;
  if (useGrounding) {
    console.log('Grounding deaktiviert fuer Fallback Models');
    groundingForFallback = false;
  }

  let fallback1Err;
  try {
    return await tryWithRetries(prompt, groundingForFallback, fallback1, 1, [10000]);
  } catch (err) {
    fallback1Err = err;
    console.log(`Fallback auf ${fallback2}...`);
  }

  try {
    return await tryWithRetries(prompt, groundingForFallback, fallback2, 1, [10000]);
  } catch (fallback2Err) {
    throw new Error(
      `Gemini API nicht erreichbar. ${primaryModel}: ${primaryErr.message}. ${fallback1}: ${fallback1Err.message}. ${fallback2}: ${fallback2Err.message}`
    );
  }
}

function updateWorkflowsJson(workflowId) {
  const wfPath = path.join(__dirname, '..', 'docs', 'autonomous-workflows', 'workflows.json');
  if (!fs.existsSync(wfPath)) return;

  const wf = JSON.parse(fs.readFileSync(wfPath, 'utf-8'));
  const found = wf.workflows.find((w) => w.id === workflowId);
  if (found) {
    found.lastRun = new Date().toISOString();
    fs.writeFileSync(wfPath, JSON.stringify(wf, null, 2) + '\n');
    console.log(`Updated lastRun in workflows.json for: ${workflowId}`);
  }
}

async function main() {
  const { PROMPT_FILE, OUTPUT_FILE, WORKFLOW_ID } = process.env;

  if (!PROMPT_FILE || !OUTPUT_FILE) {
    console.error('Error: PROMPT_FILE and OUTPUT_FILE env vars are required');
    process.exit(1);
  }

  if (!fs.existsSync(PROMPT_FILE)) {
    console.error(`Error: prompt file not found: ${PROMPT_FILE}`);
    process.exit(1);
  }

  const loopName = process.env.LOOP_NAME || '';
  const useGrounding = loopName === 'news-scout';

  const models = loopName === 'news-scout'
    ? { primary: 'gemini-2.5-pro', fallback1: 'gemini-2.5-flash', fallback2: 'gemini-flash-latest' }
    : { primary: 'gemini-2.5-flash', fallback1: 'gemini-flash-latest', fallback2: 'gemini-2.5-pro' };

  const prompt = fs.readFileSync(PROMPT_FILE, 'utf-8');
  console.log(`Calling Gemini API (primary: ${models.primary}, fallback1: ${models.fallback1}, fallback2: ${models.fallback2}, grounding: ${useGrounding}, prompt length: ${prompt.length} chars)...`);

  const response = await callGeminiWithRetry(prompt, useGrounding, models);

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_FILE, response);
  console.log(`Response written to: ${OUTPUT_FILE}`);

  if (WORKFLOW_ID) {
    updateWorkflowsJson(WORKFLOW_ID);
  }
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
