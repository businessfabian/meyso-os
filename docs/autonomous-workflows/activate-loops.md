# Loops aktivieren

Sag Claude Code am Session-Start:

> Lies docs/autonomous-workflows/activate-loops.md und starte alle 3 Loops via CronCreate.

## Loop 01 - Morning Brief (taeglich 08:30)

CronCreate:
- cron: "30 8 * * *"
- durable: true
- recurring: true
- prompt: vollstaendiger Inhalt aus loop-01-morning-brief.md (Prompt-Block)

## Loop 02 - News Scout (montags 09:00)

CronCreate:
- cron: "0 9 * * 1"
- durable: true
- recurring: true
- prompt: vollstaendiger Inhalt aus loop-02-news-scout.md (Prompt-Block)

## Loop 03 - Weekly Codebase Health (montags 09:30)

CronCreate:
- cron: "30 9 * * 1"
- durable: true
- recurring: true
- prompt: vollstaendiger Inhalt aus loop-03-codebase-health.md (Prompt-Block)

## Status pruefen

CronList aufrufen.

## Loop stoppen

CronDelete mit Job-ID aus CronList.

## Hinweis: durable auf Windows

durable=true wird akzeptiert aber Jobs laufen als session-only (Windows-Pfad-Problem mit .claude/scheduled_tasks.json). Deshalb bei jedem Session-Start neu aktivieren.
