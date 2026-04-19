#!/usr/bin/env node
// scripts/setup/gsc-oauth.mjs
// Einmaliges OAuth-Setup für Google Search Console API
// Erzeugt Refresh-Token das dann in GitHub Secrets gespeichert wird
//
// Nutzung:
//   1. Im Google Cloud Console OAuth-Credentials erstellen (siehe SETUP.md)
//   2. GSC_CLIENT_ID und GSC_CLIENT_SECRET als Environment-Variablen setzen
//   3. node scripts/setup/gsc-oauth.mjs starten
//   4. Im Browser authorisieren, der erhaltene Code wird in die Konsole eingegeben
//   5. Das gezeigte Refresh-Token als GSC_REFRESH_TOKEN speichern

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const clientId = process.env.GSC_CLIENT_ID;
const clientSecret = process.env.GSC_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('❌ GSC_CLIENT_ID und GSC_CLIENT_SECRET müssen als ENV-Variablen gesetzt sein');
  console.error('');
  console.error('Setup:');
  console.error('  1. https://console.cloud.google.com/apis/credentials');
  console.error('  2. OAuth 2.0 Client IDs, Desktop App');
  console.error('  3. Klient-ID und Secret kopieren');
  console.error('  4. export GSC_CLIENT_ID="..." GSC_CLIENT_SECRET="..."');
  console.error('  5. node scripts/setup/gsc-oauth.mjs');
  process.exit(1);
}

// OOB-Flow (Out-of-Band) für Desktop Apps ist deprecated, wir nutzen localhost-Callback
const REDIRECT_URI = 'http://localhost:8080';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
authUrl.searchParams.set('client_id', clientId);
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('scope', SCOPE);
authUrl.searchParams.set('access_type', 'offline');
authUrl.searchParams.set('prompt', 'consent');

console.log('');
console.log('🔐 Google Search Console OAuth Setup');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log('1. Öffne folgende URL im Browser:');
console.log('');
console.log(authUrl.toString());
console.log('');
console.log('2. Logge dich mit dem Google-Account ein der Zugriff auf die GSC-Properties hat');
console.log('');
console.log('3. Nach Zustimmung wirst du auf http://localhost:8080/?code=... weitergeleitet');
console.log('   (Browser zeigt Fehlermeldung, das ist normal)');
console.log('');
console.log('4. Kopiere den "code"-Parameter aus der URL und füge ihn hier ein:');
console.log('');

const rl = readline.createInterface({ input, output });
const code = (await rl.question('Code: ')).trim();
rl.close();

if (!code) {
  console.error('❌ Kein Code eingegeben');
  process.exit(1);
}

console.log('\n🔄 Tausche Code gegen Refresh-Token...');

const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  }).toString(),
});

if (!tokenResponse.ok) {
  const text = await tokenResponse.text();
  console.error('❌ Token-Exchange fehlgeschlagen:', text);
  process.exit(1);
}

const tokenData = await tokenResponse.json();

console.log('\n✅ Erfolgreich!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log('📋 Speichere folgende Werte als GitHub Secrets:');
console.log('');
console.log(`GSC_CLIENT_ID="${clientId}"`);
console.log(`GSC_CLIENT_SECRET="${clientSecret}"`);
console.log(`GSC_REFRESH_TOKEN="${tokenData.refresh_token}"`);
console.log('');
console.log('Access-Token (nur temporär, nicht speichern):');
console.log(`  ${tokenData.access_token.slice(0, 30)}...`);
console.log('');
console.log('Das Refresh-Token ist unbegrenzt gültig solange du es nicht widerrufst.');
console.log('Im GitHub Repo: Settings → Secrets and variables → Actions → New secret');
