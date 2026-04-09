#!/usr/bin/env node
// Generic script: reads a prompt file, calls Anthropic API, writes response to output file.
// Used by GitHub Actions workflows for autonomous loops.
//
// Required env vars:
//   CLAUDE_API_KEY  - Anthropic API key
//   PROMPT_FILE     - path to file containing the prompt text
//   OUTPUT_FILE     - path where the response will be written
//
// Optional env vars:
//   WORKFLOW_ID     - workflow id to update in workflows.json lastRun field

const https = require('https');
const fs = require('fs');
const path = require('path');

function callAnthropic(prompt) {
  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    throw new Error('CLAUDE_API_KEY environment variable is not set');
  }

  const body = JSON.stringify({
    model: 'claude-opus-4-6',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }]
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.anthropic.com',
        port: 443,
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
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
              reject(new Error(`Anthropic API error: ${parsed.error.message}`));
            } else {
              resolve(parsed.content[0].text);
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

  const prompt = fs.readFileSync(PROMPT_FILE, 'utf-8');
  console.log(`Calling Claude API (prompt length: ${prompt.length} chars)...`);

  const response = await callAnthropic(prompt);

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
