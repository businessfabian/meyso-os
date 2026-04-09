# Loops aktivieren

Migriert zu GitHub Actions am 09.04.2026 abends.

---

## Section 1: Production - GitHub Actions (Default)

Die 3 Loops laufen als GitHub Actions Workflows in `meyso-os/.github/workflows/`.
Keine manuelle Aktivierung noetig, keine Session-Abhaengigkeit.

### Workflows

| Loop | Datei | Zeitplan |
| --- | --- | --- |
| Morning Brief | `morning-brief.yml` | Taeglich 08:30 Berlin (07:30 UTC) |
| News Scout | `news-scout.yml` | Montags 09:00 Berlin (08:00 UTC) |
| Weekly Health | `weekly-health.yml` | Montags 09:30 Berlin (08:30 UTC) |

### Voraussetzungen (einmalig)

1. `CLAUDE_API_KEY` als GitHub Secret setzen:
   - Repo: `businessfabian/meyso-os`
   - Settings > Secrets and variables > Actions > New repository secret
   - Name: `CLAUDE_API_KEY`
   - Value: Anthropic API Key (beginnt mit `sk-ant-...`)

2. Fuer Weekly Health optional: `GH_PAT` setzen (Personal Access Token mit `repo` scope),
   damit der Workflow meyso-website auschecken kann fuer Lint und Audit.
   Ohne GH_PAT laeuft der Workflow trotzdem, aber ohne echte Lint/Audit-Daten.

### Manueller Test-Trigger

Im GitHub UI: Actions Tab > Workflow auswaehlen > "Run workflow" Button.

Oder via gh CLI:
```bash
gh workflow run morning-brief.yml --repo businessfabian/meyso-os
gh workflow run news-scout.yml --repo businessfabian/meyso-os
gh workflow run weekly-health.yml --repo businessfabian/meyso-os
```

### Output

Briefings landen in: `docs/autonomous-workflows/briefings/`
Format: `YYYY-MM-DD-morning.md`, `YYYY-MM-DD-news.md`, `YYYY-MM-DD-health.md`

Committed automatisch als `github-actions[bot]`.

---

## Section 2: Fallback - Manuelle Claude Code Session

Falls GitHub Actions down sind oder der CLAUDE_API_KEY nicht gesetzt ist:

Sag Claude Code am Session-Start:

> Lies docs/autonomous-workflows/activate-loops.md und starte alle 3 Loops via CronCreate.

### Loop 01 - Morning Brief (taeglich 08:30)

CronCreate:
- cron: "30 8 * * *"
- durable: true
- recurring: true
- prompt: vollstaendiger Inhalt aus loop-01-morning-brief.md (Prompt-Block)

### Loop 02 - News Scout (montags 09:00)

CronCreate:
- cron: "0 9 * * 1"
- durable: true
- recurring: true
- prompt: vollstaendiger Inhalt aus loop-02-news-scout.md (Prompt-Block)

### Loop 03 - Weekly Codebase Health (montags 09:30)

CronCreate:
- cron: "30 9 * * 1"
- durable: true
- recurring: true
- prompt: vollstaendiger Inhalt aus loop-03-codebase-health.md (Prompt-Block)

### Status pruefen

CronList aufrufen.

### Loop stoppen

CronDelete mit Job-ID aus CronList.

### Hinweis: durable auf Windows

durable=true wird akzeptiert aber Jobs laufen als session-only (Windows-Pfad-Problem mit
.claude/scheduled_tasks.json). Deshalb bei jedem Session-Start neu aktivieren.
Das ist der Grund fuer die Migration zu GitHub Actions.
