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
| meyso-website | C:\Users\fabia\meyso-website |
| meyso-kmu-template | C:\Users\fabia\meyso-kmu-template |
| meyso-demo-schreinerei | C:\Users\fabia\meyso-demo-schreinerei |
| hirmax | C:\Users\fabia\hirmax-scheibenbilder |
| sq-schmidt | C:\Users\fabia\sq-schmidt-website |
| toolradar | C:\code\toolradar |

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

## Was du IMMER tun sollst
- TASKS.md sauber und sortiert halten
- Bei neuen Architektur-Regeln prüfen ob sie alle Projekte betreffen oder nur eins
- Nach TASKS.md Updates committen und pushen damit meyso.de/admin/tasks Dashboard aktuell ist

## Was du NIE tun sollst
- Em-dashes schreiben
- Tasks ohne Projekt-Zuordnung erstellen
- Architektur-Rules hinzufügen ohne zu begründen warum
- Projekt-spezifischen Code hier einbauen, das gehört ins jeweilige Projekt-Repo
- Force Push, --no-verify, Git Hook Skipping
