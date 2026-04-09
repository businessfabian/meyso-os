# Autonomous Workflows Layer

Stand: 2026-04-09 (Wave 3 Abschluss)

Drei scheduled Loops die in Claude Code laufen und Dave taeglich und woechentlich informieren.

---

## Loop-Uebersicht

| # | Name | Datei | Zeitplan | Status |
|---|------|-------|----------|--------|
| 01 | Morning Brief | loop-01-morning-brief.md | Taeglich 08:30 | active |
| 02 | News Scout | loop-02-news-scout.md | Montags 09:00 | active |
| 03 | Weekly Codebase Health | loop-03-codebase-health.md | Montags 09:30 | active |

---

## Was passiert wann

**Jeden Morgen um 08:30:**
Loop 01 liest TASKS.md, prueft git status in allen 7 Repos und schreibt:
`docs/autonomous-workflows/briefings/YYYY-MM-DD-morning.md`

**Jeden Montag um 09:00:**
Loop 02 sucht nach Stack-Updates (Next.js, Vercel, Claude Code, Supabase) und schreibt:
`docs/autonomous-workflows/briefings/YYYY-MM-DD-news.md`

**Jeden Montag um 09:30:**
Loop 03 analysiert meyso-website (TODO/FIXME, Lint, npm audit, grosse Dateien) und schreibt:
`docs/autonomous-workflows/briefings/YYYY-MM-DD-health.md`

---

## Technologie

**Gewaehlt: CronCreate (Claude Code built-in)**

- Laeuft lokal in Claude Code REPL, kein externer Service noetig
- Voller Zugriff auf D:\dev\... Dateisystem
- Sofort aktivierbar ohne Cloud-Konfiguration

**Bekannte Einschraenkung (Windows):**
`durable: true` wird akzeptiert aber Jobs laufen als `session-only` - die Jobs persistieren nicht ueber Session-Neustarts. Grund vermutlich Windows-Pfad-Inkompatibilitaet mit `.claude/scheduled_tasks.json`.

Workaround: Bei jedem Session-Start neu aktivieren (siehe activate-loops.md).

**Upgrade-Pfad: RemoteTrigger (claude.ai)**
Wenn Loops unabhaengig vom lokalen Rechner laufen sollen, koennen sie als Remote Trigger migriert werden. Prompts sind dafuer bereits kompatibel.

---

## Loops aktivieren

Sag Claude Code am Session-Start:

> Lies docs/autonomous-workflows/activate-loops.md und starte alle 3 Loops.

Oder manuell testen (ohne auf Scheduling zu warten):

> Fuehre den Morning Brief fuer heute aus (Prompt in loop-01-morning-brief.md).

---

## Manuellen Test-Run starten

Fuer jeden Loop funktioniert:

> Fuehre Loop 01 Morning Brief jetzt manuell aus - heute ist 2026-04-09.

---

## Loop deaktivieren

1. CronList aufrufen um Job-IDs zu sehen
2. CronDelete mit der jeweiligen ID aufrufen

---

## 7-Tage Limit

Alle Jobs verfallen nach 7 Tagen automatisch. Danach einmalig neu aktivieren.

---

## Output-Dateien

Alle Briefings landen in: `docs/autonomous-workflows/briefings/`

Namensschema: `YYYY-MM-DD-morning.md`, `YYYY-MM-DD-news.md`, `YYYY-MM-DD-health.md`

---

## Geplante naechste Loops (TASKS.md)

- npm audit auto-PR Loop (braucht MCP GitHub integration)
- Hirmax Order Monitoring Loop (braucht MCP Supabase)
- toolradar Content Generation Loop (braucht Gemini + Quality Gate)
