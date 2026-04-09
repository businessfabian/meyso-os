# Loop 01: Morning Brief

**Zeitplan:** Taeglich 08:30 (CronCreate: `30 8 * * *`)
**Zweck:** Taeglicher Ueberblick fuer Dave: Top Tasks, Repo-Status, eine konkrete Frage.

---

## Prompt (registriert via CronCreate)

```
Morning Brief fuer Dave. Ermittle zuerst das aktuelle Datum via Bash (Get-Date -Format 'yyyy-MM-dd').

Tu folgendes:

1. Lies D:\dev\meyso\meyso-os\TASKS.md und finde die top 3 Tasks die offen sind (zuerst P0, dann P1).

2. Pruefe per Bash fuer jedes dieser Repos ob es unpushed commits gibt:
   - D:\dev\meyso\meyso-website
   - D:\dev\meyso\meyso-os
   - D:\dev\meyso\meyso-kmu-template
   - D:\dev\meyso\meyso-demo-schreinerei
   - D:\dev\clients\hirmax-scheibenbilder
   - D:\dev\clients\sq-schmidt-website
   - D:\dev\products\toolradar
   Befehl pro Repo: git -C <pfad> status --short --branch
   Nur Repos mit unpushed commits oder uncommitted changes erwaehnen.

3. Schreib das Ergebnis als Markdown in die Datei:
   D:\dev\meyso\meyso-os\docs\autonomous-workflows\briefings\<DATUM>-morning.md

   Format:
   # Morning Brief <DATUM>

   ## Top 3 Tasks heute
   1. [P0/P1] Taskbeschreibung
   2. ...
   3. ...

   ## Repo Status
   - <Repo>: <Status>
   (Nur Repos mit Aenderungen, saubere Repos weglassen)

   ## Frage an Dich
   <Eine konkrete, entscheidbare Frage basierend auf den Top Tasks>

4. Keine em-dashes verwenden.
```

---

## CronCreate Aufruf

```json
{
  "cron": "30 8 * * *",
  "prompt": "<Prompt-Text oben>",
  "durable": true,
  "recurring": true
}
```

---

## Output

Datei: `docs/autonomous-workflows/briefings/YYYY-MM-DD-morning.md`
