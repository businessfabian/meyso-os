# Meyso SEO-System

**Zweck:** Zentrales SEO-Wissen, Audits und automatisiertes Monitoring für alle Meyso-Projekte.

---

## Struktur

```
docs/seo/
├── README.md                       ← Du bist hier
├── SEO-AUDIT-CHECKLIST.md          ← Was macht ein gut-optimiertes Projekt aus
├── SEO-PLAYBOOK.md                 ← Wie baue ich SEO in neuen Projekten auf
├── SEO-AGENT.md                    ← Architektur des Monitoring-Agents
└── project-status/                 ← Aktueller Stand pro Projekt
    ├── meyso.md
    ├── toolradar.md
    ├── hirmax.md
    └── sq-schmidt-und-villa-nina.md

.github/workflows/
└── seo-monthly.yml                 ← Monatlicher Cron-Job

scripts/
├── seo-check.mjs                   ← Haupt-Check-Skript
└── config/
    └── projects.json               ← Alle Projekte und deren URLs
```

## Wann was nutzen

### Bei neuem Projekt-Start
→ `SEO-PLAYBOOK.md` lesen, Phasen 0 und 1 abarbeiten

### Bei monatlichem Audit
→ `SEO-AUDIT-CHECKLIST.md` öffnen, `project-status/[projekt].md` pro Projekt updaten

### Bei Frage "wie steht es um Projekt X"
→ `project-status/[projekt].md` öffnen, dort alles auf einen Blick

### Bei SEO-Problem-Verdacht
→ Checklist-Kategorie 7 (Risiko-Signale) durchgehen

### Bei strategischen Fragen (Keywords, Content, Nischen)
→ NICHT in diesen Docs suchen, sondern mit Claude oder Experten besprechen

## Setup des Automated Agents

Einmalig:
1. GitHub Secrets setzen (siehe SEO-AGENT.md)
2. Workflow manuell einmal triggern (`workflow_dispatch`)
3. Prüfen ob Status-MDs updated wurden
4. Ab dann: läuft automatisch am 1. jedes Monats

## Update-Cadence der Docs selbst

| Dokument | Update-Häufigkeit |
|----------|-------------------|
| SEO-AUDIT-CHECKLIST.md | Bei jährlichem Whitespark-Report + Core Updates |
| SEO-PLAYBOOK.md | Jährlich im Januar |
| SEO-AGENT.md | Bei Architektur-Änderung |
| project-status/*.md | Monatlich (manuell) + automatisch via Agent |

## Prinzipien

1. **Messbares automatisieren, Strategisches beim Menschen lassen**
2. **Nur belegte Praktiken, keine Spekulation**
3. **DSGVO-konform by default**
4. **Kein Shadow-Ban-Risiko (keine Manipulationstaktiken)**
5. **Information Gain statt Content-Masse**

## Bei Fragen

- Technische Probleme: Claude Code
- Strategische Fragen: mit Dave besprechen oder externen Experten
- Aktuelle SEO-Trends: einmal im Quartal die Quellen in SEO-AUDIT-CHECKLIST durchgehen
