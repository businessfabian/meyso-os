# Loop 02: Repo Health Sweep

**Zeitplan:** Montags 08:47 (CronCreate: `47 8 * * 1`)
**Zweck:** Woechentlicher Gesundheitscheck aller Repos. Stale branches, npm audit, uncommitted changes.

---

## Prompt

```
Fuehre den woechentlichen Repo Health Sweep aus.

ZIEL: Den Zustand aller 8 Repos pruefen und kritische Findings in TASKS.md eintragen.

REPOS:
- D:\dev\meyso\meyso-website
- D:\dev\meyso\meyso-os
- D:\dev\meyso\meyso-kmu-template
- D:\dev\meyso\meyso-demo-schreinerei
- D:\dev\clients\hirmax-scheibenbilder
- D:\dev\clients\sq-schmidt-website
- D:\dev\products\toolradar

SCHRITT 1 - Git Status Check:
Fuer jedes Repo: `git status --short`
Melde Repos mit uncommitted changes oder untracked files.
Pruefe ob .env oder .env.local versehentlich committed wurde (git ls-files | grep .env).

SCHRITT 2 - Stale Branch Check:
Fuer jedes Repo: `git branch --sort=-committerdate --format="%(refname:short) %(committerdate:relative)"`
Branches die laenger als 14 Tage keinen Commit hatten = stale, melden.
Hauptbranch (main) ignorieren.

SCHRITT 3 - npm audit Summary:
Fuer Repos mit package.json: `npm audit --json 2>/dev/null | jq '.metadata.vulnerabilities'`
Nur critical und high melden. Moderate und low ignorieren.
Falls jq nicht verfuegbar: `npm audit 2>/dev/null | grep -E "(critical|high)"` als Fallback.

SCHRITT 4 - Findings bewerten:
Kritisch (P0): committete .env Dateien, critical npm vulnerabilities
Wichtig (P1): stale branches mit WIP-Namen (wip/, feature/, fix/), high npm vulnerabilities
Info (P2): uncommitted changes die laenger als 7 Tage so bestehen

SCHRITT 5 - TASKS.md aktualisieren:
Lies D:\dev\meyso\meyso-os\TASKS.md.
Neue Findings eintragen (nur wenn nicht schon vorhanden).
Format: `- [ ] 🤖 Claude | <Projektname>: <Beschreibung (Health Sweep <Datum>)>`

SCHRITT 6 - Commit + Push (nur wenn Aenderungen):
git add TASKS.md + git commit "chore: Repo Health Sweep - Findings eingetragen" + git push
(Pfad: D:\dev\meyso\meyso-os)

SCHRITT 7 - Health Report ausgeben:
Tabelle: Repo | Git Clean | Stale Branches | npm audit | Status
Status: OK / WARNUNG / KRITISCH

REGELN:
- Keine em-dashes
- Kein force-push, kein --no-verify
- npm audit nur lesen, nicht fixen (fix ist manueller Task)
- Bei npm audit Fehlern (Netzwerk etc.) ueberspringen und im Report vermerken
```

---

## CronCreate Aufruf

```json
{
  "cron": "47 8 * * 1",
  "prompt": "<siehe Prompt-Block oben>",
  "durable": true,
  "recurring": true
}
```

---

## Notizen

- Laeuft montags, damit die Woche mit einem sauberen Bild startet
- npm audit kann bei schlechter Verbindung fehlschlagen - Loop ist tolerant dafuer gebaut
- .env Findings sind immer P0 auch wenn der Inhalt harmlos aussieht (sq-schmidt Praezedens)
