# Loops aktivieren

Diese Datei beschreibt wie die 3 autonomen Loops in einer neuen Claude Code Session gestartet werden.

## Warum manuell aktivieren?

CronCreate-Jobs sind session-bound. Mit `durable: true` wird der Prompt in `.claude/scheduled_tasks.json` gespeichert, aber der Job muss pro Session neu gestartet werden. Das ist gewollt: Loop laeuft nur wenn der Rechner an ist und Claude Code offen ist.

## Aktivierungsbefehl

Sage Claude Code am Sessionstart:

> Lies docs/autonomous-workflows/activate-loops.md und starte alle 3 Loops via CronCreate.

Oder manuell in der Session:

**Loop 01 - TASKS.md Triage (taeglich 09:03):**
CronCreate mit cron="3 9 * * *", durable=true, recurring=true, prompt = vollstaendiger Inhalt aus loop-01-tasks-triage.md

**Loop 02 - Repo Health Sweep (montags 08:47):**
CronCreate mit cron="47 8 * * 1", durable=true, recurring=true, prompt = vollstaendiger Inhalt aus loop-02-repo-health.md

**Loop 03 - Pipeline Monitor (Di + Fr 10:03):**
CronCreate mit cron="3 10 * * 2,5", durable=true, recurring=true, prompt = vollstaendiger Inhalt aus loop-03-pipeline-monitor.md

## Status pruefen

CronList aufrufen um aktive Jobs anzuzeigen.

## Loop stoppen

CronDelete mit der Job-ID aus CronList.

## 7-Tage Limit

Alle Jobs verfallen nach 7 Tagen automatisch. Danach einmalig neu aktivieren.
