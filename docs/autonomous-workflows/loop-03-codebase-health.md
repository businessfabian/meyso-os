# Loop 03: Weekly Codebase Health

**Zeitplan:** Montags 09:30 (CronCreate: `30 9 * * 1`)
**Zweck:** Woechentlicher Health Report fuer meyso-website: Tech Debt, Lint, Audit, Oversized Files.

---

## Prompt (registriert via CronCreate)

```
Weekly Codebase Health Report fuer meyso-website. Ermittle das aktuelle Datum via Bash (Get-Date -Format 'yyyy-MM-dd').

Tu folgendes (alle Befehle in D:\dev\meyso\meyso-website):

1. TODO/FIXME/HACK zaehlen:
   Bash: grep -r -l "TODO\|FIXME\|HACK" D:\dev\meyso\meyso-website\src --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l
   Dann: grep -r -h "TODO\|FIXME\|HACK" D:\dev\meyso\meyso-website\src --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l

2. Lint ausfuehren:
   Bash: cd D:\dev\meyso\meyso-website && npm run lint 2>&1 | head -30
   Erfasse: exit code, Anzahl errors, Anzahl warnings (letzte Zeile des Lint-Outputs).

3. npm audit (optional, wenn Netzwerk verfuegbar):
   Bash: cd D:\dev\meyso\meyso-website && npm audit --json 2>/dev/null | python -c "import sys,json; d=json.load(sys.stdin); v=d.get('metadata',{}).get('vulnerabilities',{}); print('critical:', v.get('critical',0), 'high:', v.get('high',0), 'moderate:', v.get('moderate',0))" 2>/dev/null || echo "audit nicht verfuegbar"

4. Oversized Files (> 500 Zeilen):
   Bash: find D:\dev\meyso\meyso-website\src -name "*.ts" -o -name "*.tsx" 2>/dev/null | xargs wc -l 2>/dev/null | awk '$1 > 500 {print $1, $2}' | sort -rn | head -10

5. Schreib Report in:
   D:\dev\meyso\meyso-os\docs\autonomous-workflows\briefings\<DATUM>-health.md

   Format:
   # Codebase Health Report <DATUM>

   ## Tech Debt
   - TODO/FIXME/HACK: X in Y Dateien

   ## Lint Status
   - Errors: X
   - Warnings: Y
   - (erste auffaellige Zeilen falls vorhanden)

   ## Audit Status
   - Critical: X / High: Y / Moderate: Z

   ## Oversized Files
   - Datei (Zeilen)

   ## Empfehlung
   1-3 Saetze: was waere der naechste sinnvolle Schritt?

6. Keine em-dashes.
```

---

## CronCreate Aufruf

```json
{
  "cron": "30 9 * * 1",
  "prompt": "<Prompt-Text oben>",
  "durable": true,
  "recurring": true
}
```

---

## Output

Datei: `docs/autonomous-workflows/briefings/YYYY-MM-DD-health.md`
