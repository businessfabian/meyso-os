# SEO-Agent Architektur

**Zweck:** Dokumentiert den automatisierten SEO-Monitoring-Agent für alle Meyso-Projekte.

**Deployment-Ort:** meyso-os Repo (bestehendes agentisches Workflow-System)

---

## Design-Prinzipien

Basierend auf den Realitäten aus der 2026 SEO-Landschaft:

1. **Messbares automatisieren, Strategisches beim Menschen lassen**
   - Lighthouse, Core Web Vitals, Backlinks, GSC-Daten = Agent
   - Content-Strategie, Positionierungs-Entscheidungen = Dave

2. **Daten sammeln, nicht interpretieren**
   - Agent zeigt Veränderungen, User entscheidet was zu tun ist
   - Ausnahme: klare Regressionen (Lighthouse Score fällt um 20+ Punkte → Alert)

3. **Konservative Cadence**
   - Monatlich als Standard
   - Deploy-Trigger für Real-Time-Regression-Detection
   - Kein Daily-Poll, das generiert nur Rauschen

4. **Nie autonom handelnd**
   - Agent darf NICHT Code ändern
   - Agent darf NICHT Content publizieren
   - Agent darf NICHT Third-Party-Calls machen die Geld kosten ohne Budget-Check

5. **DSGVO-konform**
   - Keine User-Tracking-Daten erfassen
   - Nur Daten aus eigenen GSC-Accounts, nicht Third-Party-Crawls

---

## Architektur-Übersicht

```
┌─────────────────────────────────────────────────────────┐
│  meyso-os (GitHub Repository)                           │
│                                                          │
│  .github/workflows/                                      │
│  ├── seo-monthly.yml       (Cron: 1. des Monats, 9:00)  │
│  └── seo-post-deploy.yml   (Trigger: after Deploy)      │
│                                                          │
│  scripts/                                                │
│  ├── seo-check.mjs         (Haupt-Check-Script)         │
│  ├── lib/                                                │
│  │   ├── lighthouse.mjs    (Lighthouse API-Wrapper)     │
│  │   ├── gsc.mjs           (Google Search Console API)  │
│  │   ├── ai-visibility.mjs (ChatGPT/Perplexity-Check)   │
│  │   └── report.mjs        (Markdown-Report-Generator)  │
│  └── config/                                             │
│      └── projects.json     (Projekte und deren URLs)    │
│                                                          │
│  docs/seo/                                               │
│  └── project-status/       (Agent schreibt hierhin)     │
│      ├── meyso.md                                        │
│      ├── toolradar.md                                    │
│      └── ...                                             │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │  ntfy.sh (meyso-dave) │
              │  Push-Notifications   │
              └───────────────────────┘
```

---

## Was der Agent prüft

### Monthly Run (1. Monat, 9:00)

**Pro Projekt:**

1. **Lighthouse-Check** (PageSpeed Insights API)
   - Mobile + Desktop Scores
   - Core Web Vitals (LCP, INP, CLS)
   - Vergleich zu letztem Monat: Diff melden

2. **GSC-Daten** (Google Search Console API)
   - Impressions und Klicks letzte 28 Tage
   - Top 20 Queries nach Impressions
   - Average Position pro Top-Query
   - Indexing-Status: gibt es Errors?

3. **Sitemap-Validation**
   - Sitemap.xml abrufen, prüfen ob alle URLs responden (Status 200)
   - Broken Links in Sitemap melden

4. **Schema.org Validation**
   - Pro Haupt-Seite: Rich Results Test API Call
   - Errors/Warnings melden

5. **Backlink-Check** (via GSC External Links Report)
   - Neue verlinkende Domains seit letztem Check
   - Verlorene Backlinks melden

6. **AI-Visibility-Check** (optional, weil API-Kosten)
   - 3-5 Core-Queries pro Projekt bei ChatGPT/Perplexity
   - Wird die Website zitiert? Ja/Nein
   - Wenn ja: welche URL?

**Output:**
- Update der Status-MD pro Projekt
- Zusammenfassung als ntfy-Push
- Bei kritischen Regressions: rote Flag + direkter Link

### Post-Deploy Run (triggered bei Vercel-Deploy via Webhook)

**Schnell-Check (< 2 Minuten):**

1. **Lighthouse Quick-Check**
   - Nur Homepage und 2-3 wichtige Unterseiten
   - Vergleich zu letztem Deploy

2. **Broken Links Check**
   - Interne Links Crawler
   - 404er melden

3. **Meta-Tags Präsenz**
   - Title, Description, H1 auf Haupt-Seiten vorhanden?
   - Canonical Tag?

4. **Schema.org Präsenz**
   - Mindestens Organization Schema auf Homepage?

**Output:**
- Bei kritischen Regressionen (z.B. Lighthouse fällt >20 Punkte): sofortiger ntfy-Push
- Sonst: stiller Log

---

## Technologie-Entscheidungen

### Warum GitHub Actions (nicht cron-job.org)

- Vertraut: meyso-os nutzt bereits 4 GitHub Actions Workflows
- Kostenlos bis 2000 Min/Monat
- Integriert mit Repo, schreibt direkt in MDs
- Secrets-Management für API-Keys

### Warum nicht Edge Functions / Vercel Cron

- Vercel Hobby Plan hat keine Crons (dokumentiert in Memory)
- GitHub Actions ist etabliertes Muster bei dir

### APIs die genutzt werden

- **Google PageSpeed Insights API** (Lighthouse): kostenlos, Key erforderlich
- **Google Search Console API**: kostenlos, OAuth-Setup einmalig
- **Google Rich Results Test**: kein offizielles API, alternativ schema.org Validator von schemaguru.org
- **OpenAI oder Claude API** (für AI-Visibility-Check): kostet wenige Cent pro Monat
- **Perplexity API**: optional, falls Budget passt

### Cost-Control

- OpenAI/Claude-Calls: Budget-Check vor Ausführung (max 5€/Monat)
- Bei Überschreitung: AI-Check skippen, nur Markdown-Status

---

## Secrets die benötigt werden

In GitHub Repository Secrets eintragen:

```
GOOGLE_PAGESPEED_API_KEY     # für Lighthouse
GSC_REFRESH_TOKEN            # für Search Console OAuth
GSC_CLIENT_ID
GSC_CLIENT_SECRET
NTFY_TOPIC                   # "meyso-dave"
ANTHROPIC_API_KEY            # für AI-Visibility-Check (optional)
```

---

## Implementation-Reihenfolge (MVP → Full)

### MVP (Phase 1, 2-3 Stunden Claude Code)

Minimal funktionsfähiger Agent:

1. `projects.json` mit den 5 Projekten und deren URLs
2. `seo-check.mjs` mit Lighthouse-Check via PageSpeed Insights
3. `seo-monthly.yml` Workflow (nur Lighthouse)
4. `ntfy`-Integration für Zusammenfassung
5. Template-Updates der Status-MDs

**Output nach MVP:** Monatlicher Report mit Lighthouse-Werten aller Projekte, Push-Notification wenn Werte sinken.

### Phase 2 (weitere 2-3 Stunden)

Erweiterungen:

6. GSC-API-Integration (komplexer wegen OAuth)
7. Sitemap-Validator
8. Broken-Links-Crawler
9. Post-Deploy-Trigger via Vercel Webhook

### Phase 3 (optional, je nach Bedarf)

10. AI-Visibility-Check
11. Schema.org Validation
12. Backlink-Tracking via Ahrefs/Semrush wenn Account vorhanden

---

## Report-Format (ntfy-Push)

**Monthly:**
```
📊 SEO-Monthly - April 2026

✅ meyso.de: Lighthouse 100/100, +12% Impressions
⚠️ toolradar.de: Lighthouse 87/100 (-5), Check T1.1
✅ hirmax: Lighthouse 95/100, keine Änderungen
✅ sq-sv.de: Lighthouse 100/100, Fortbildungen indexed
✅ villa-nina: neue Backlinks +2

Details: github.com/businessfabian/meyso-os/docs/seo/
```

**Post-Deploy (nur bei Problem):**
```
🔴 SEO-Regression bei meyso.de

Deploy 4f3a2b1c:
- Lighthouse Performance 78/100 (vorher 98)
- 2 Broken Links

Sofort prüfen: [Link zum Deploy]
```

---

## Wartung des Agents

**Quartalsweise Review:**
- Laufen alle API-Calls noch?
- Sind API-Keys noch gültig?
- Gibt es neue SEO-Faktoren die ergänzt werden sollten?

**Bei neuen Projekten:**
- `projects.json` erweitern
- Neue Status-MD in `project-status/` anlegen (Template kopieren)

**Bei großen Core Updates (Google):**
- 2-3 Wochen später: manueller Audit aller Projekte
- Agent-Thresholds ggf. anpassen

---

## Was der Agent NICHT kann (bewusst)

- **Keine strategische Beratung:** Welche Keywords du targetieren solltest, welcher Content fehlt, ob eine Nische sich lohnt = alles Mensch-Aufgabe
- **Keine Content-Generierung:** Der Agent triggert NICHT automatisch Blog-Post-Generator
- **Keine Code-Änderungen:** Findet Probleme, zeigt sie an, fixen musst du oder Claude Code
- **Keine SERP-Scraping:** Das wäre Google-TOS-Verstoß

## Failsafes

Um Shadow-Ban-Risiko zu minimieren:

- **Keine massen-anonymen Abfragen:** API-Calls laufen via offizielle Google-APIs mit Keys
- **Realistic Request-Rate:** 1 Call pro Minute pro API
- **Respect robots.txt:** Wenn eigene Projekt-robots.txt crawling einschränkt, respektieren
- **DSGVO-Scope:** Agent sammelt KEINE Nutzerdaten, nur eigene Analytics/GSC-Daten

---

## Nächste Schritte

1. Diesen Masterplan in meyso-os einchecken (`docs/seo/`)
2. MVP-Phase mit Claude Code starten
3. API-Keys generieren und in Secrets hinterlegen
4. Ersten monatlichen Run durchlaufen lassen
5. Pro gewonnenem Monat iterativ erweitern
