# Autonomous Workflows Layer

Stand: 2026-04-09

Drei scheduled Loops die in Claude Code laufen und das meyso-os autonom aktuell halten.

---

## Uebersicht

| Loop | Datei | Zeitplan | Zweck |
|------|-------|----------|-------|
| 01 TASKS.md Triage | loop-01-tasks-triage.md | Taeglich 09:03 | Code-Schulden in allen Repos aufspueren und in TASKS.md eintragen |
| 02 Repo Health Sweep | loop-02-repo-health.md | Montags 08:47 | git status, npm audit, stale branches ueberpruefen |
| 03 Deploy + Pipeline Monitor | loop-03-pipeline-monitor.md | Di + Fr 10:03 | Template-Version-Drift, uncommitted changes, Deploy-Zustand |

---

## Technologie-Entscheidung

**Gewaehlt: CronCreate mit durable=true**

Gruende:
- Laeuft lokal in Claude Code (REPL), kein externer Service noetig
- `durable: true` persistiert Jobs in `.claude/scheduled_tasks.json` und ueberlebt Session-Neustarts
- Voller Zugriff auf das lokale Dateisystem (D:\dev\...) ohne API-Tokens
- Sofort aktivierbar ohne Cloud-Konfiguration

**Upgrade-Pfad: RemoteTrigger (claude.ai)**

Wenn die Loops unabhaengig vom lokalen Rechner laufen sollen (z.B. 24/7 Monitoring), koennen sie als Remote Trigger auf claude.ai migriert werden. Die Prompt-Dateien sind so geschrieben, dass sie ohne Anpassung uebertragen werden koennen.

**Warum nicht GitHub Actions?**

GitHub Actions ist eine valide Alternative (kostenlos, durable, immer an). Nachteil: kein Zugriff auf lokales Dateisystem, kein Claude Code Kontext. Geeignet als Fallback wenn CronCreate nicht verfuegbar ist.

---

## Aktivierung

Loops werden beim Start einer neuen Claude Code Session manuell reaktiviert, da CronCreate-Jobs session-bound sind (auch mit durable=true wird nur der Prompt gespeichert, nicht der laufende Job).

**Start-Befehl fuer alle 3 Loops:**

Lies die Datei `docs/autonomous-workflows/activate-loops.md` und fuehre die CronCreate-Aufrufe darin aus.

Oder manuell einzeln aktivieren - Prompts und Zeitplaene stehen in den jeweiligen loop-*.md Dateien.

---

## Limits und bekannte Einschraenkungen

- CronCreate-Jobs verfallen nach 7 Tagen automatisch
- Jobs feuern nur wenn die Claude Code REPL idle ist (nicht mid-Query)
- Maximale Laufzeit pro Loop: haengt vom Repo-Scan-Umfang ab, typisch 1-3 Minuten

**durable=true funktioniert in dieser Umgebung nicht wie dokumentiert:**
Beim Erstellen der 3 Jobs wurde `durable: true` uebergeben, aber alle Jobs liefen als `session-only` (nicht auf Disk persistiert). Moeglich Ursache: Windows-Pfad-Inkompatibilitaet mit `.claude/scheduled_tasks.json`. Workaround: `activate-loops.md` beschreibt wie Jobs bei jedem Session-Start neu aktiviert werden. Die Prompts stehen in den loop-*.md Dateien und koennen jederzeit als CronCreate-Argument eingesetzt werden.

---

## Repos die gescannt werden

```
D:\dev\meyso\meyso-website
D:\dev\meyso\meyso-os
D:\dev\meyso\meyso-kmu-template
D:\dev\meyso\meyso-demo-schreinerei
D:\dev\clients\hirmax-scheibenbilder
D:\dev\clients\sq-schmidt-website
D:\dev\products\toolradar
```

---

## Entscheidungslog

**2026-04-09** - Autonomous Workflows Layer erstellt. Loop-Prompts eigenstaendig definiert da Task-Beschreibung nach Phasen-Uebersicht abgeschnitten war. Gewaehlt wurden 3 Loops die den groessten autonomen Mehrwert liefern: taeglich TASKS.md frisch halten (Loop 01), woechentlich Repo-Gesundheit pruefen (Loop 02), zweimal woechentlich Deploy-Zustand und Template-Drift melden (Loop 03). CronCreate bevorzugt gegenueber Remote Triggers wegen lokalem Dateisystem-Zugriff.
