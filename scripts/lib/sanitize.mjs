// scripts/lib/sanitize.mjs
// Entfernt bekannte Secret-Patterns aus Log-Strings

const SECRET_PATTERNS = [
  /AIza[A-Za-z0-9_-]{35}/g,
  /sk-ant-[A-Za-z0-9_-]{95,}/g,
  /[A-Za-z0-9_-]{40,}\.apps\.googleusercontent\.com/g,
  /ya29\.[A-Za-z0-9_-]+/g,
  /1\/\/[A-Za-z0-9_-]+/g,
];

export function sanitize(text) {
  if (typeof text !== 'string') return text;
  let result = text;
  for (const pattern of SECRET_PATTERNS) {
    result = result.replace(pattern, '[REDACTED]');
  }
  return result;
}
