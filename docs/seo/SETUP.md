# SEO-Agent Setup-Anleitung

Einmaliges Setup für den Meyso SEO Monitoring Agent. Plane ca. 1 bis 1,5 Stunden ein.

## Voraussetzungen

- Zugang zum meyso-os Repository auf GitHub
- Google-Account mit Zugriff auf Search Console der relevanten Properties
- ntfy.sh Topic bereits im Einsatz (laut Memory: "meyso-dave")
- Optional: Anthropic API Key (Budget ca. 1-2 USD/Monat für AI-Visibility)

---

## Schritt 1: Dateien ins Repo kopieren

```powershell
cd D:\dev\meyso\meyso-os

# Entpacke die Agent-Dateien in dieses Verzeichnis
# (aus dem mitgelieferten Zip)

# Struktur sollte sein:
# meyso-os/
#   .github/workflows/seo-monthly.yml
#   scripts/seo-check.mjs
#   scripts/lib/*.mjs
#   scripts/config/projects.json
#   scripts/setup/gsc-oauth.mjs
#   docs/seo/SETUP.md (dieses File)
#   docs/seo/SEO-AUDIT-CHECKLIST.md
#   docs/seo/SEO-PLAYBOOK.md
#   docs/seo/SEO-AGENT.md
#   docs/seo/README.md
#   docs/seo/project-status/*.md
```

Committen aber noch NICHT pushen (Secrets müssen erst eingerichtet werden).

---

## Schritt 2: Google PageSpeed Insights API Key

Kostet: nichts. Dauer: 5 Minuten.

1. https://console.cloud.google.com/ öffnen
2. Projekt anlegen (z.B. "meyso-seo-monitoring") oder bestehendes wählen
3. Links im Menü: "APIs & Services" → "Library"
4. Suche: "PageSpeed Insights API" → aktivieren
5. "APIs & Services" → "Credentials" → "Create Credentials" → "API Key"
6. Key kopieren
7. **Wichtig:** Key einschränken: "Edit API Key" → "API Restrictions" → "Restrict key" → "PageSpeed Insights API" auswählen

Key merken, brauchst du in Schritt 5.

---

## Schritt 3: Google Search Console API (OAuth)

Kostet: nichts. Dauer: 15-20 Minuten.

### 3.1 OAuth Credentials erstellen

1. Gleiches Google Cloud Projekt wie oben
2. "APIs & Services" → "Library" → "Search Console API" aktivieren
3. "APIs & Services" → "OAuth consent screen" konfigurieren wenn noch nicht geschehen:
   - User Type: "External" (für personal Account)
   - App name: "Meyso SEO Agent"
   - Email: deine Meyso-Email
   - Scopes: `auth/webmasters.readonly` hinzufügen
   - Test users: deine Email als Test-User eintragen
4. "APIs & Services" → "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Application type: **Desktop app**
6. Name: "Meyso SEO Agent CLI"
7. Create → Client ID und Client Secret kopieren

### 3.2 Refresh Token generieren

Lokal auf deinem Windows-Rechner:

```powershell
cd D:\dev\meyso\meyso-os

# Environment-Variablen setzen (PowerShell Syntax)
$env:GSC_CLIENT_ID="dein-client-id.apps.googleusercontent.com"
$env:GSC_CLIENT_SECRET="GOCSPX-..."

# Setup-Script ausführen
node scripts/setup/gsc-oauth.mjs
```

Das Script:
1. Zeigt dir eine Google-Login-URL
2. Öffne die URL im Browser
3. Wähle den Account aus der Zugriff auf GSC hat
4. Zustimmen
5. Browser wird auf `http://localhost:8080/?code=4/...` weitergeleitet (Seite lädt nicht, das ist okay)
6. Kopiere den `code`-Parameter aus der URL (alles nach `code=` und vor `&scope=`)
7. Füge den Code in die Konsole ein
8. Script zeigt das Refresh-Token

**Wichtig:** Refresh-Token notieren, brauchst du in Schritt 5. Es ist unbegrenzt gültig.

### 3.3 GSC-Properties verifizieren

Stelle sicher dass die 5 Projekte in deinem GSC-Account verifiziert sind:
- meyso.de
- toolradar.de
- hirmax-scheiben.de
- sq-sv.de
- (villa-nina wird ohne GSC laufen, bis eigene Domain da ist)

Falls eine Property noch nicht verifiziert ist: https://search.google.com/search-console

---

## Schritt 4: Anthropic API Key (optional aber empfohlen)

Kostet: ca. 1-2 USD/Monat. Dauer: 5 Minuten.

1. https://console.anthropic.com/ öffnen
2. API Keys → Create Key
3. Namen vergeben: "Meyso SEO Agent"
4. Key kopieren (wird nur einmal angezeigt)

**Budget-Schutz:**
1. Billing → Usage limits
2. Monthly hard limit auf 5 USD setzen

Das AI-Visibility-Check-Modul macht ca. 5 Queries × 5 Projekte × 12 Monate = 300 Calls/Jahr. Kosten: wenige Cent pro Call. Zusammen mit 5 USD Limit null Risiko.

---

## Schritt 5: GitHub Secrets setzen

Kostet: nichts. Dauer: 5 Minuten.

1. GitHub öffnen → meyso-os Repository
2. Settings → Secrets and variables → Actions
3. "New repository secret" für jedes:

| Secret Name | Wert |
|-------------|------|
| `GOOGLE_PAGESPEED_API_KEY` | Key aus Schritt 2 |
| `GSC_CLIENT_ID` | Client ID aus Schritt 3.1 |
| `GSC_CLIENT_SECRET` | Client Secret aus Schritt 3.1 |
| `GSC_REFRESH_TOKEN` | Token aus Schritt 3.2 |
| `ANTHROPIC_API_KEY` | Key aus Schritt 4 (optional) |
| `NTFY_TOPIC` | `meyso-dave` (bereits im Einsatz) |

---

## Schritt 6: Manuell triggern für ersten Test

1. GitHub → meyso-os → Actions Tab
2. Links: "SEO Monthly Monitor"
3. Rechts: "Run workflow" Button
4. Optional: Dry-Run aktivieren für ersten Test
5. "Run workflow" klicken

Warte 5-15 Minuten (je nach Anzahl Projekte und API-Geschwindigkeit).

**Was passiert:**
- Alle Projekte werden gecheckt
- Status-Files in `docs/seo/project-status/` werden geupdatet
- Monatsreport wird generiert in `docs/seo/reports/YYYY-MM.md`
- Commit mit allem wird gemacht
- ntfy-Push an dein Handy mit Zusammenfassung

**Bei erstem Test:**
- Lighthouse sollte funktionieren (einfachster Check)
- GSC-Daten funktionieren wenn OAuth erfolgreich war
- AI-Visibility funktioniert wenn Anthropic-Key gesetzt ist
- Technical Checks sollten immer funktionieren

---

## Schritt 7: Ergebnisse prüfen

```powershell
cd D:\dev\meyso\meyso-os
git pull

# Status-Files anschauen
code docs/seo/project-status/meyso-de.md
code docs/seo/reports/
```

---

## Troubleshooting

### "Error: API key not valid"
Google PageSpeed API Key wurde falsch kopiert oder nicht aktiviert. Prüfe in Google Cloud Console dass der Key existiert und PageSpeed Insights API aktiviert ist.

### "OAuth token refresh failed: 400 invalid_grant"
Das Refresh-Token ist ungültig oder widerrufen. Führe Schritt 3.2 erneut aus.

### "GSC API error: 403"
Der Google-Account hat keinen Zugriff auf die Property. Prüfe in Search Console ob die Property verifiziert ist.

### AI-Visibility-Check skipped
ANTHROPIC_API_KEY fehlt. Entweder in Secrets hinzufügen oder akzeptieren dass dieser Check ausfällt.

### Workflow läuft 25 Minuten durch aber ohne Commit
Zwei Möglichkeiten:
1. Dry-Run war aktiviert
2. Keine Status-Files zum Committen (ersten Run macht das immer etwas auf)

Nächsten Run normal laufen lassen.

### Status-File für Projekt nicht gefunden
Das Template für das Projekt fehlt unter `docs/seo/project-status/`. Vorhandene als Vorlage kopieren, sanitize-Name entspricht dem Projekt-Namen in projects.json (lowercase, bindestrich-separated).

---

## Danach: Nutzung im Alltag

**Automatisch:** 1. jedes Monats um 10:00 MEZ läuft der Agent.

**Manuell triggern:** Jederzeit via GitHub Actions UI möglich. Single-Project-Check via `project=meyso.de` Input.

**Lokal testen:** 
```powershell
# Environment-Variablen setzen
$env:GOOGLE_PAGESPEED_API_KEY="..."
$env:GSC_CLIENT_ID="..."
# etc.

# Einzelnes Projekt im Dry-Run
node scripts/seo-check.mjs --project=meyso.de --dry-run
```

**Ergebnisse lesen:**
- Schneller Blick: `docs/seo/reports/YYYY-MM.md` für Gesamtbild
- Details pro Projekt: `docs/seo/project-status/*.md`
- Push-Notification gibt Zusammenfassung auf das Handy

---

## Kosten-Überblick

| Komponente | Monatliche Kosten |
|------------|-------------------|
| Google PageSpeed Insights | 0 USD (Free Tier reicht) |
| Google Search Console API | 0 USD |
| Anthropic API (AI-Visibility) | ca. 0.50 - 2.00 USD |
| GitHub Actions Runtime | 0 USD (Free Tier 2000 Min/Monat) |
| ntfy.sh | 0 USD (Free Plan) |
| **Summe** | **~0.50 - 2.00 USD/Monat** |

---

## Erweiterungen für später

Wenn das MVP 3-6 Monate gelaufen ist und du Daten gesammelt hast:

1. **Post-Deploy-Trigger:** GitHub Action bei jedem Vercel-Deploy als zusätzlicher Quick-Check
2. **Competitor-Tracking:** Konkurrenten-Domains mit überwachen
3. **Multi-Language-Checks:** Bei Villa Nina die 3 Sprachversionen einzeln prüfen
4. **Custom Alerts:** Threshold-basierte Sofort-Benachrichtigungen
5. **Semi-autonome Assistenz:** Nach 6+ Monaten Daten, erste Regel-basierte Auto-Vorschläge

**Nicht jetzt, aber gut zu wissen dass der Weg offen ist.**
