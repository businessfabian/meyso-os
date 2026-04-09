# Loop 02: News Scout

**Zeitplan:** Montags 09:00 (CronCreate: `0 9 * * 1`)
**Zweck:** Stack-Updates fuer Daves Tech-Stack zusammenfassen. Nur Breaking Changes und neue Features.

---

## Prompt (registriert via CronCreate)

```
News Scout fuer Dave. Ermittle das aktuelle Datum via Bash (Get-Date -Format 'yyyy-MM-dd').
Dave arbeitet mit: Next.js, Tailwind, TypeScript, Vercel, Sanity, Supabase, Gemini API, Claude Code.

Tu folgendes:

1. Fuehre diese 4 Web Searches durch:
   - "Next.js release 2026"
   - "Vercel new feature 2026"
   - "Claude Code new feature 2026"
   - "Supabase new feature 2026"

2. Fuer jede Quelle: extrahiere nur Releases mit Breaking Changes oder neuen Features in Major/Minor Versionen.
   Kleinere Bug Fixes ignorieren. Keine Spekulationen, nur was in den Search Results steht.

3. Schreib das Ergebnis als Markdown in:
   D:\dev\meyso\meyso-os\docs\autonomous-workflows\briefings\<DATUM>-news.md

   Format:
   # News Scout <DATUM>

   ## Next.js
   - Was + warum das fuer Dave relevant ist (1 Satz)

   ## Vercel
   - Was + warum relevant

   ## Claude Code
   - Was + warum relevant

   ## Supabase
   - Was + warum relevant

   ## Action Items diese Woche
   - Konkrete Todo-Liste (nur wenn wirklich relevant)

4. Keine em-dashes.
   Keine Abschnitte wenn keine relevanten Neuigkeiten gefunden: dann "Nichts Relevantes diese Woche" schreiben.
```

---

## CronCreate Aufruf

```json
{
  "cron": "0 9 * * 1",
  "prompt": "<Prompt-Text oben>",
  "durable": true,
  "recurring": true
}
```

---

## Output

Datei: `docs/autonomous-workflows/briefings/YYYY-MM-DD-news.md`
