# Loop 03: Deploy + Pipeline Monitor

**Zeitplan:** Dienstag + Freitag 10:03 (CronCreate: `3 10 * * 2,5`)
**Zweck:** Template-Version-Drift erkennen, Deploy-Zustand der Client-Repos pruefen, Pipeline-Blockaden melden.

---

## Prompt

```
Fuehre den Deploy + Pipeline Monitor aus.

ZIEL: Sicherstellen dass Client-Repos nicht vom KMU-Template abdriften und keine blockierten Tasks im Backlog vergessen werden.

TEIL A - TEMPLATE_VERSION Check:

KMU-Template-Referenz: D:\dev\meyso\meyso-kmu-template
Lies package.json dort und notiere die version.
Lies auch CLAUDE.md oder template.config.* fuer TEMPLATE_VERSION falls vorhanden.

Client-Repos mit Template-Basis:
- D:\dev\clients\hirmax-scheibenbilder
- D:\dev\clients\sq-schmidt-website
- D:\dev\meyso\meyso-demo-schreinerei

Fuer jeden Client: package.json lesen und version vergleichen.
Falls vorhanden: template.config.* oder CLAUDE.md auf TEMPLATE_VERSION pruefen.
Drift = Client-Version liegt mehr als 1 Minor-Version hinter Template.
Drift als P2 Task in TASKS.md eintragen: `- [ ] 🤖 Claude | <Projektname>: Template-Version aktualisieren (<aktuell> -> <neu>)`

TEIL B - Pipeline-Blockaden Check:

Lies D:\dev\meyso\meyso-os\TASKS.md.
Suche nach Tasks die:
1. Als P0 oder P1 markiert sind
2. Seit mehr als 14 Tagen unveraendert als [ ] (offen) stehen
3. Als 🤖 Claude markiert sind (also automatisierbar)

Melde diese Tasks: sie sind vermutlich blockiert oder vergessen.
Empfehle ob sie: erledigt / neu bewertet / auf GEPARKT gesetzt werden sollten.
Keine automatischen Aenderungen vornehmen - nur melden.

TEIL C - Letzter Commit Check:

Fuer alle Repos: `git log -1 --format="%ar %s"` (letzter Commit, wie lange her, Subject)
Repos mit letztem Commit > 30 Tage: melden als moeglicherweise inaktiv.
Ausnahme: meyso-os (dokumentations-lastiges Repo, niedrigere Aktivitaet normal).

TEIL D - TASKS.md Update + Push:

Nur Template-Drift Findings in TASKS.md eintragen (P2 Section, passende Projekt-Section).
Pipeline-Blockaden und inaktive Repos: nur als Bericht ausgeben, nicht in TASKS.md eintragen.

Falls TASKS.md geaendert:
git add TASKS.md + commit "chore: Pipeline Monitor - Template-Drift eingetragen" + push

TEIL E - Report ausgeben:

Abschnitt 1: Template-Drift
- Repo | Template-Version | Client-Version | Status

Abschnitt 2: Pipeline-Blockaden
- Task-Text | Seit wann offen | Empfehlung

Abschnitt 3: Repo-Aktivitaet
- Repo | Letzter Commit | Status

REGELN:
- Keine em-dashes
- Kein force-push, kein --no-verify
- Keine automatischen Task-Loeschungen oder Prioritaets-Aenderungen
- Bericht kurz halten, nur Auffaelligkeiten melden
```

---

## CronCreate Aufruf

```json
{
  "cron": "3 10 * * 2,5",
  "prompt": "<siehe Prompt-Block oben>",
  "durable": true,
  "recurring": true
}
```

---

## Notizen

- Dienstag: Wochenmitte-Check bevor neue Features starten
- Freitag: End-of-Week Check bevor Wochenende
- Template-Drift-Tracking ist Wave-3-Kern-Feature (steht in meyso OS Rule 5: TEMPLATE_VERSION tracking)
- Pipeline-Blockaden werden nur gemeldet, nicht automatisch geaendert (Dave entscheidet)
