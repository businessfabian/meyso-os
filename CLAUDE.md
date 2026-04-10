# meyso-os

Das Betriebssystem hinter meyso. Enthält TASKS.md (Single Source of Truth für alle Backlogs), Meyso OS Architektur-Doku, das KMU-Template und die OS-Logik die projektübergreifend gilt.

## Sprache
Antworte auf Deutsch.

## Stack
Markdown + YAML für Konfig und Tasks. Node/TypeScript Tooling wo nötig (Scripts, Template-Sync, Version-Bump Tools).

## Rolle dieses Repos
- Tasks: TASKS.md ist Single Source of Truth für alle meyso Projekte (meyso-website, hirmax, toolradar, sq-schmidt, kmu-template, demo-schreinerei)
- Templates: KMU-Template als Base für neue Client-Projekte
- Architektur-Doku: Meyso OS Rules, ADRs, Decision Rules
- Scripts: projektübergreifende Automatisierung (Provisioning, Outreach Crawler, etc.)

## Projekte (Repos die TASKS.md konsumieren)
| Projekt | Pfad |
|---------|------|
| meyso-website | D:\dev\meyso\meyso-website |
| meyso-kmu-template | D:\dev\meyso\meyso-kmu-template |
| meyso-demo-schreinerei | D:\dev\meyso\meyso-demo-schreinerei |
| hirmax | D:\dev\clients\hirmax-scheibenbilder |
| sq-schmidt | D:\dev\clients\sq-schmidt-website |
| toolradar | D:\dev\products\toolradar |

## Meyso OS Architektur Rules (für alle Projekte die dieses OS nutzen)
1. 3-Folder Structure: modules, features, app
2. Configs sind Zod-validiert, keine Magic Strings
3. Feature Flags statt projekt-spezifischer if-Statements
4. Kill-Switches auf allen Mail- und Push-Operations (env-basiert)
5. TEMPLATE_VERSION tracking bei jedem KMU Template Edit

## Decision Rules (projektübergreifend)
- Sanity vs Supabase: "Editiert ein Kunde das im Studio?" Ja = Sanity, Nein = Supabase
- LLM Calls: ausschließlich über zentrale KI-API, keine direkten Provider-Aufrufe
- Server vs Client Components: Server default, Client nur bei State, Effects, Browser APIs

## TASKS.md Handling
- TASKS.md ist der einzige Ort für Backlog-Einträge aller Projekte
- Format: Markdown Checklisten, gruppiert nach Projekt
- Bei neuen Tasks: in die richtige Projekt-Section einsortieren
- Bei erledigten Tasks: [x] markieren, direkt committen und pushen
- Dashboard auf meyso.de/admin/tasks fetcht diese Datei live von GitHub, also nach jedem Update pushen damit das Dashboard aktuell ist
- Raw-URL für Reads: https://raw.githubusercontent.com/businessfabian/meyso-os/main/TASKS.md

## Workflow
- Vor Änderungen die Kontext brauchen: explorer Subagent
- Commits: conventional commits, deutsch wo natürlich
- Commit-Frequenz: nach jedem logisch abgeschlossenen Block, kleine Commits bevorzugt
- Bei Änderungen an der Architektur-Doku oder an Rules: erst mit mir besprechen, nicht einfach einbauen
- Pushe nach main

## Konventionen
- KEINE em-dashes (Gedankenstriche, U+2014) in Code, Comments, Strings, Docs. Komma, Punkt oder Zeilenumbruch stattdessen.
- Deutsch für Dokumentation, Englisch für Code
- Umlaute als ae/oe/ue in Code-Strings (Vercel Encoding Kompatibilität)
- Markdown-Dokumente: klare Überschriften-Hierarchie, knapp halten

## Anti-Halluzinations Regeln
- Jede faktische Aussage braucht eine echte, klickbare Quelle
- Trainingswissen ist keine Quelle, nur aktuelle Web Search Ergebnisse
- Versionsnummern und Daten muessen zum aktuellen Datum passen
- Wenn keine aktuelle Quelle findbar: "Keine Quelle gefunden" statt erfinden
- Ein ehrliches "nichts gefunden" ist besser als ein erfundener Report

## Context Management
- Ein Task pro Session. Nach Abschluss /clear oder neue Session starten.
- Bei /compact bewahren: geaenderte Files, Test-Status, offene TODOs dieser Session.
- Subagents nutzen fuer Research statt im Haupt-Context hunderte Files zu lesen.
- /btw fuer schnelle Fragen die nicht in den Context muessen.

## Was du IMMER tun sollst
- TASKS.md sauber und sortiert halten
- Bei neuen Architektur-Regeln prüfen ob sie alle Projekte betreffen oder nur eins
- Nach TASKS.md Updates committen und pushen damit meyso.de/admin/tasks Dashboard aktuell ist

## Hooks

Em-dash Blocker ist aktiv in `~/.claude/settings.json`.

- Blockiert `Write`, `Edit` und `MultiEdit` wenn der geschriebene Inhalt ein em-dash (U+2014) oder en-dash (U+2013) enthaelt
- Script: `~/.claude/hooks/no-em-dash.ps1` (PowerShell, UTF-8-aware)
- Mechanik: PreToolUse, exit 0 + JSON `permissionDecision: "deny"`
- Aktiviert und getestet am 09.04.2026

## Custom Slash Commands

Globale Commands liegen in ~/.claude/commands/ und sind in jedem Repo verfuegbar.

- `/meyso-component <name>` - Erstellt neue React Komponente nach meyso Konventionen (kebab-case input, PascalCase component). Beispiel: `/meyso-component hero-section`
- `/meyso-preflight` - Pre-deploy sanity check. Prueft git clean, gepusht, type-check, lint und env vars Vollstaendigkeit. Laeuft in ca 30 Sekunden.
- `/meyso-paths-update` - Aktualisiert CLAUDE.md Pfad-Referenzen zu anderen meyso Repos (8 Pfad-Mappings, zeigt Diff, wartet auf Bestaetigung vor Commit).

Erstellt am 09.04.2026.

## Was du NIE tun sollst
- Em-dashes schreiben
- Tasks ohne Projekt-Zuordnung erstellen
- Architektur-Rules hinzufügen ohne zu begründen warum
- Projekt-spezifischen Code hier einbauen, das gehört ins jeweilige Projekt-Repo
- Force Push, --no-verify, Git Hook Skipping
