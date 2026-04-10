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

const https = require('https');
const fs = require('fs');
const path = require('path');

function callGemini(prompt, useGrounding) {
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
  const apiPath = `/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

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

async function callGeminiWithRetry(prompt, useGrounding) {
  const delays = [5000, 15000, 45000];
  let lastErr;

  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      return await callGemini(prompt, useGrounding);
    } catch (err) {
      lastErr = err;
      const code = err.statusCode;
      const isRetryable = code === 429 || (typeof code === 'number' && code >= 500);
      if (!isRetryable || attempt === delays.length) break;
      const waitMs = delays[attempt];
      console.log(`Retry ${attempt + 1}/3 nach ${waitMs / 1000}s... (API error ${code})`);
      await new Promise((r) => setTimeout(r, waitMs));
    }
  }

  throw new Error(`Gemini API nach 3 Retries nicht erreichbar: ${lastErr.message}`);
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

  const prompt = fs.readFileSync(PROMPT_FILE, 'utf-8');
  console.log(`Calling Gemini API (model: gemini-2.5-flash, grounding: ${useGrounding}, prompt length: ${prompt.length} chars)...`);

  const response = await callGeminiWithRetry(prompt, useGrounding);

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
