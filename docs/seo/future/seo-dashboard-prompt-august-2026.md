> ⚠️ NICHT VOR AUGUST 2026 AUSFÜHREN ⚠️
> 
> Diese Datei ist ein vorbereitetes Prompt-Paket für ein Zukunftsfeature.
> Sie soll im August 2026 genutzt werden, wenn mindestens 3 echte 
> Monthly-Runs erfolgt sind. Siehe "Voraussetzungen prüfen bevor du 
> startest" weiter unten.
>
> Nicht einfach den kompletten Inhalt an Claude Code geben!

---

# SEO-Dashboard-Integration Prompt

**Geplant für:** August 2026 (nach 3+ Monaten echter Agent-Daten)
**Aufwand:** 10-15h verteilt über mehrere Sessions
**Repos betroffen:** meyso-os (SEO-Agent) + meyso-website (Admin-Dashboard)

## Voraussetzungen prüfen bevor du startest

Bevor du diesen Prompt nutzt, check folgende Dinge:

- [ ] Mindestens 3 Monthly-Runs haben stattgefunden (Mai, Juni, Juli 2026)
- [ ] docs/seo/reports/ enthält mindestens 3 Report-Dateien
- [ ] docs/seo/project-status/ ist aktuell und enthält Historie
- [ ] Das Admin-Dashboard ist produktiv und stabil
- [ ] Du hast eine freie Session von 2-3 Stunden

## Kontext der Planung

**Problem:**
Die SEO-Daten liegen aktuell in Markdown-Files im meyso-os Repo. Um den Trend zu sehen, muss ich Dateien öffnen und manuell vergleichen. Das skaliert nicht.

**Ziel:**
SEO-Daten aus dem Agent strukturiert in Supabase speichern und im Admin-Dashboard (/admin/seo) grafisch darstellen.

**Architektur-Entscheidung:**
- Agent bleibt Source of Truth (schreibt MD-Files wie bisher)
- Neuer Supabase-Write-Layer parallel (nicht ersetzen)
- Admin-Dashboard liest aus Supabase für UI
- MD-Files als Fallback und für Offline-Lesbarkeit

## Phase 1: Backend-Setup (ca. 4-5h)

Kopiere diesen Prompt an Claude Code in meyso-os:

```
Baue das Backend für die SEO-Dashboard-Integration.

KONTEXT:

Ich habe seit Mai 2026 einen SEO-Agent der monatliche Reports generiert.
Die Daten liegen aktuell in docs/seo/reports/YYYY-MM.md und
docs/seo/project-status/*.md als Markdown.

Nach mehreren Monaten will ich die Daten im Admin-Dashboard visualisieren.
Dafür muss der Agent parallel nach Supabase schreiben.

AUFGABE:

1. Neue Supabase-Tabellen anlegen (Migration im meyso-website Repo):

   - seo_runs: id, run_date, triggered_by, status, notes
   - seo_metrics: id, run_id, project, lighthouse_mobile, 
     lighthouse_desktop, lcp, tbt, cls, clicks_28d, impressions_28d, 
     avg_position, ctr_28d, indexed_pages
   - seo_queries: id, run_id, project, query, position, impressions, 
     clicks, ctr
   - seo_issues: id, run_id, project, severity, category, description, 
     affected_url
   - seo_ai_visibility: id, run_id, project, query, response_text, 
     mentions_project, score

   RLS-Policies: nur admin-Rolle darf lesen/schreiben

2. Neues Modul in meyso-os/scripts/lib/supabase-writer.mjs:

   - Funktion: async writeRun(runData)
   - Speichert Run-Metadata und alle Metrics/Queries/Issues
   - Error-Handling: Agent-Run darf nicht scheitern wenn Supabase down
   - Log-Output: welche Daten wurden geschrieben

3. Integration in scripts/seo-check.mjs:

   - Nach dem Bericht-Generieren zusätzlich writeRun aufrufen
   - Nur wenn SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY als ENV gesetzt
   - Bei Fehler: Warning loggen, Run trotzdem als erfolgreich melden
   - Kein Blocker für bestehenden MD-File-Output

4. GitHub Secrets für den Workflow:

   Dokumentiere in docs/seo/setup.md welche neuen Secrets nötig sind:
   - SEO_DASHBOARD_SUPABASE_URL
   - SEO_DASHBOARD_SUPABASE_SERVICE_ROLE_KEY

5. Test mit letztem Report:

   Lese docs/seo/reports/2026-07.md (oder den aktuellsten) und 
   schreibe ihn testweise nach Supabase. Prüfe in Supabase Studio 
   dass alle Tabellen korrekt befüllt sind.

6. Commit-Strategie:

   Feature-Branch erstellen, einzelne Commits:
   - feat(supabase): tabellen-migrationen für seo-dashboard
   - feat(agent): supabase-writer-modul
   - feat(agent): integration in seo-check.mjs
   - docs(seo): setup-dokumentation für neue secrets

KEINE UI ÄNDERN. Nur Backend.

Bericht am Ende:
- Welche Tabellen sind angelegt?
- Wurde Test-Schreibvorgang erfolgreich?
- Welche Secrets müssen noch gesetzt werden?
- Was ist der nächste Schritt für Phase 2?
```

## Phase 2: Frontend-UI (ca. 5-7h)

Erst nachdem Phase 1 durch ist und Daten in Supabase sind. Neuer Prompt für Claude Code im meyso-website Repo:

```
Baue die SEO-Dashboard-UI unter /admin/seo im Meyso Admin Dashboard.

KONTEXT:

Das SEO-Agent-Backend schreibt monatlich Metriken, Queries, Issues und 
AI-Visibility-Daten nach Supabase (Tabellen: seo_runs, seo_metrics, 
seo_queries, seo_issues, seo_ai_visibility).

Ich will diese Daten im Admin-Dashboard visualisieren.

AUFGABE:

1. Neue Route /admin/seo mit Layout:

   - Navigation: "SEO Monitor" in Sidebar
   - Übersichtsseite zeigt alle 5 Projekte als Cards
   - Pro Card:
     * Projekt-Name
     * Aktueller Lighthouse Mobile Score (groß)
     * Aktuelle GSC-Klicks und Impressions (28 Tage)
     * Anzahl kritischer Issues
     * Link zum Detail

2. Detail-Seite /admin/seo/[project]:

   - Übersichts-Header mit Key-Metriken
   - Tabs:
     * Overview: KPI-Tiles
     * Trends: Charts (Lighthouse über Zeit, Klicks über Zeit)
     * Queries: Tabelle mit Top-Queries, Position-Sparklines
     * Issues: Liste kritischer und mittlerer Findings
     * AI Visibility: Ergebnisse der KI-Queries
     * History: Timeline aller Runs mit Changes

3. Components bauen:

   components/seo/
   ├── ProjectCard.tsx
   ├── KPITile.tsx
   ├── LighthouseTrend.tsx (recharts)
   ├── QueriesTable.tsx (mit Sparklines)
   ├── IssuesList.tsx
   ├── AIVisibilityPanel.tsx
   └── RunTimeline.tsx

4. Data-Fetching:

   - Server Components für Initial-Load
   - Supabase Queries im app/admin/seo/page.tsx und [project]/page.tsx
   - Revalidate: alle 1h (ISR)
   - Fehlerbehandlung: falls Supabase leer, "Noch keine Daten" anzeigen

5. Responsive Design:

   - Mobile: Cards untereinander, kompakte Tabellen
   - Desktop: Grid-Layout
   - Nutze bestehende Design-System-Komponenten aus dem Admin

6. Auth-Schutz:

   - Route muss durch bestehende Admin-Auth geschützt sein
   - Bei fehlendem Login: Redirect zu /admin/login

7. Keine Mock-Daten:

   Alle Daten kommen aus Supabase. Wenn keine vorhanden: 
   "Noch keine Daten vorhanden. Agent läuft am 1. des Monats."

8. Tests:

   - npm run build muss grün sein
   - Lokaler Test mit echten Supabase-Daten
   - Screenshots machen für PR

COMMIT-STRATEGIE:

Feature-Branch, kleinere Commits:
- feat(admin): seo-dashboard route und layout
- feat(admin/seo): projekt-cards und übersicht
- feat(admin/seo): detail-seite mit tabs
- feat(admin/seo): trend-charts mit recharts
- feat(admin/seo): queries-tabelle und ai-visibility
- docs(admin): seo-dashboard dokumentation

DESIGN-REFERENZ:

Halte Design konsistent zum bestehenden Admin-Dashboard. Keine neuen 
Farbthemen, keine neuen Font-Imports.

Bericht am Ende mit:
- Welche Routes sind live?
- Welche Features sind implementiert?
- Welche Features sind geparkt für Phase 3?
- Screenshots der fertigen Dashboard-Views
```

## Phase 3: Optional-Features (ca. 3-4h)

Erst nachdem Phase 1 und 2 stabil sind und genutzt werden.

Mögliche Erweiterungen:

- Alert-System: Push-Notification bei kritischen Findings
- PDF-Export: Report als PDF für Kunden
- Vergleich: Month-over-Month und Year-over-Year
- Forecasting: Trendanalyse ob Metriken steigen oder fallen
- Per-Kunde-Reports: nicht nur meyso-intern, sondern für Kunden im Portal

Dafür separater Prompt wenn relevant.

## Risiken und Vorbehalte

**Vor Phase 1 klären:**

1. **Datenhaltung:** Sollen SEO-Daten in der Haupt-Supabase liegen oder 
   separater Supabase-Instanz?
2. **Kosten:** Supabase Free-Tier hat Zeilen-Limits. Bei 5 Projekten 
   und 10+ Monthly-Runs konservative Schätzung: <10k Zeilen. Passt.
3. **RLS:** Nur Admin-User dürfen lesen. Keine public access.

**Während Phase 2 klären:**

1. **Real-time:** Brauchen wir Live-Updates? Nein, monatlich genügt.
2. **Historie-Tiefe:** Alles behalten oder nach 24 Monaten archivieren?
3. **Mobile-Optimierung:** Dashboards schauen Unterwegs auf Handy?

## Erinnerung

Du hast am **20. April 2026** entschieden dieses Feature zu parken bis:
- 3+ Monate echte Daten vorliegen (erfüllt August 2026)
- Das Admin-Dashboard stabil ist
- Du Zeit für strukturierte Umsetzung hast

Wenn diese Voraussetzungen nicht alle erfüllt sind: NICHT starten. 
Lieber warten bis es passt.

## Nach Abschluss

Sobald beide Phasen durch sind:

1. TASKS.md-Eintrag "SEO-Dashboard-Integration" von offen auf erledigt setzen
2. docs/seo/baseline-system.md Verweis auf Dashboard ergänzen
3. Changes.md-Eintrag
4. Ein Screenshot vom fertigen Dashboard aufheben (für Case-Study Material)

Viel Erfolg. Du wirst dich über die Visualisierung freuen wenn sie da ist.
