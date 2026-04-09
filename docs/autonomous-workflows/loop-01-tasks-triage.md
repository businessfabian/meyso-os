# Loop 01: TASKS.md Triage

**Zeitplan:** Taeglich 09:03 (CronCreate: `3 9 * * *`)
**Zweck:** Alle 8 Repos nach ungettrackten Code-Schulden durchsuchen und in TASKS.md eintragen.

---

## Prompt

```
Fuehre den taeglichen TASKS.md Triage Loop aus.

ZIEL: Neue Code-Schulden in allen Repos finden und in TASKS.md eintragen, damit nichts verloren geht.

REPOS ZUM SCANNEN:
- D:\dev\meyso\meyso-website
- D:\dev\meyso\meyso-os
- D:\dev\meyso\meyso-kmu-template
- D:\dev\meyso\meyso-demo-schreinerei
- D:\dev\clients\hirmax-scheibenbilder
- D:\dev\clients\sq-schmidt-website
- D:\dev\products\toolradar

SCHRITT 1 - TODO/FIXME/HACK Scanner:
Suche in jedem Repo nach Kommentaren mit TODO, FIXME, HACK, XXX (case-insensitive).
Nur in Quellcode-Dateien: .ts, .tsx, .js, .jsx, .mjs, .cjs
Ignoriere: node_modules, .next, dist, build, .git

SCHRITT 2 - Findings pruefen:
Lies D:\dev\meyso\meyso-os\TASKS.md.
Fuer jeden Fund: pruefe ob er bereits in TASKS.md enthalten ist (Stichwortvergleich reicht).

SCHRITT 3 - Neue Eintraege hinzufuegen:
Neue Findings (nicht bereits in TASKS.md) als Task in die passende Projekt-Section eintragen.
Format: `- [ ] 🤖 Claude | <Projektname>: <Beschreibung> (<Datei>:<Zeile>)`
Prioritaet: P2 fuer FIXME/HACK, P3 fuer TODO.
Keine Duplikate anlegen.

SCHRITT 4 - Sicherheitsmuster-Scan:
Pruefe stichprobenartig auf offensichtliche Antipatterns:
- Hardcoded Strings wie "password", "secret", "api_key" in nicht-.env Dateien
- console.log mit sensiblen Variablennamen
Nur wirklich auffaellige Funde melden, kein False-Positive Rauschen.

SCHRITT 5 - Commit + Push (nur wenn Aenderungen):
Wenn TASKS.md geaendert wurde:
  git add D:\dev\meyso\meyso-os\TASKS.md
  git commit -m "chore: TASKS.md Triage Loop - neue Code-Schulden eingetragen"
  git push origin main
(Pfad: D:\dev\meyso\meyso-os)

SCHRITT 6 - Kurze Zusammenfassung ausgeben:
- Wie viele Repos gescannt
- Wie viele neue Findings
- Was wurde eingetragen (Liste)
- Was wurde uebersprungen weil schon bekannt

REGELN:
- Keine em-dashes (U+2014 oder U+2013)
- Keine Tasks ohne Projekt-Zuordnung
- Nicht mehr als 5 neue Tasks pro Loop-Lauf (Spam vermeiden)
- Keine force-push, kein --no-verify
```

---

## CronCreate Aufruf

```json
{
  "cron": "3 9 * * *",
  "prompt": "<siehe Prompt-Block oben>",
  "durable": true,
  "recurring": true
}
```

---

## Notizen

- Loop laeuft nur wenn Claude Code REPL gerade idle ist
- Bei > 5 Findings: die 5 wichtigsten nehmen (FIXME vor TODO, nach Projekt-Prioritaet)
- Security-Findings sofort als P0 eintragen, nicht als P2
