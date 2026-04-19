# SEO-Status: toolradar.de

**Letzter manueller Audit:** (erster Audit)
**Letzter automatischer Check:** (Agent noch nicht deployed)

---

## Kurz-Status

**Aktuelle Hauptziele:**
- Phase 1 der 12-Wochen-Roadmap: 500 Besucher/Monat erreichen
- Purchase-Intent SEO aufbauen (Phase 2 Vorbereitung)
- DSGVO-Positionierung verstärken

**Bekannte Stärken:**
- SSR-Fix hat ~450% organisches Wachstum gebracht
- ~148 qualitätsgeprüfte Tools (Qualitäts-Gate von 283 auf 148 reduziert)
- Blog-Generator läuft (2 Artikel/Woche)
- LinkedIn Auto-Posting via Sanity-Webhook
- DSGVO-Fokus als Differenziator

**Bekannte Baustellen:**
- GA4 wurde identifiziert als DSGVO-Verstoß, Entfernung erforderlich (Status prüfen)
- Affiliate-Integration (Phase 2) noch nicht umgesetzt
- Konkurrenz: toolradar.com (mit MCP-Server) ist distinkt aber sollte im Blick bleiben

---

## Audit-Ergebnisse

### Kategorie 1: Technical SEO

- [ ] T1.1: Lighthouse ≥ 90 (Status prüfen)
- [x] T1.2: Next.js ISR/SSG
- [ ] T1.3: Sitemap.xml prüfen (mit ~148 Tools)
- [ ] T1.4: robots.txt
- [x] T1.5: HTTPS
- [x] T1.6: Mobile-Friendly
- [ ] T1.7: Schema.org (Product oder SoftwareApplication per Tool)
- [ ] T1.8: 404-Check (besonders nach Qualitäts-Gate-Reduktion)
- [ ] T1.9: Canonical Tags
- [ ] T1.10: Security Headers

### Kategorie 2: On-Page SEO

- [ ] O2.1: Unique Titles pro Tool-Seite (häufig bei Directories ein Problem)
- [ ] O2.2: Unique Meta-Descriptions
- [ ] O2.3: H1 pro Seite
- [ ] O2.4: Hx-Hierarchie auf Tool-Seiten
- [ ] O2.5: Alt-Texte für Tool-Logos
- [ ] O2.6: Interne Verlinkung zwischen Tool-Kategorien
- [ ] O2.7: Content-Länge bei Tool-Beschreibungen
- [ ] O2.8: Keywords natürlich
- [ ] O2.9: Thin Pages? (bei 148 Tools: jede Tool-Seite sollte substanziell sein)
- [ ] O2.10: FAQ-Schema wo passend

### Kategorie 3: Local SEO

**Nicht primär relevant für Toolradar** (nationales/DACH-weites Publikum)

### Kategorie 4: Content & Authority

- [ ] C4.1: Author-Info auf Blog-Artikeln
- [x] C4.2: Impressum
- [x] C4.3: Datenschutzerklärung (wichtig bei DSGVO-Fokus)
- [x] C4.4: Kontakt
- [ ] C4.5: Über-uns mit Substanz
- [x] C4.6: Blog-Artikel (2/Woche via Generator)
- [ ] C4.7: Case Studies? (eher Tool-Reviews)
- [ ] C4.8: Nutzer-Testimonials über Plattform?

### Kategorie 5: AI-Visibility

- [ ] A5.1: Content-Struktur AI-citable (Tool-Vergleiche sind ideal für AI-Citation)
- [x] A5.2: Originalität (DSGVO-Bewertungen sind unique)
- [ ] A5.3: Brand-Mentions außerhalb
- [ ] A5.4: Schema.org SoftwareApplication/Product
- [ ] A5.5: Listungs in externen Tool-Vergleichs-Sites
- [ ] A5.6: Monatlicher ChatGPT/Perplexity-Check zu Tool-Queries

### Kategorie 6: Tracking & Monitoring

- [x] M6.1: Google Search Console
- [x] M6.2: Sitemap in GSC
- [ ] M6.3: Core Web Vitals
- [ ] M6.4: Analytics DSGVO-konform (GA4-Status klären, Entfernung war geplant)
- [ ] M6.5: Backlink-Monitoring

### Kategorie 7: Risiko-Signale

- [x] R7.1: Keine Doorway-Pages
- [x] R7.2: Kein Keyword-Stuffing
- [x] R7.3: Keine versteckten Texte
- [x] R7.4: Keine gekauften Backlinks
- [ ] R7.5: KI-Content-Qualität der Blog-Generator-Artikel
- [x] R7.6: Kein Cloaking
- [ ] R7.7: Spam-Backlinks prüfen

### Kategorie 8: Meyso-Spezifisch

- [ ] M8.1: Lighthouse 100 (nach SSR-Fix prüfen)
- [x] M8.2: Next.js
- [x] M8.3: Sanity CMS
- [x] M8.4: DSGVO-konform (zentrales Feature)
- [x] M8.5: CLAUDE.md

---

## Top 5 Prioritäten

1. **GA4-Status klären:** Ist es entfernt? Falls nicht: Vercel Analytics oder Plausible als Ersatz
2. **Tool-Seiten Content-Qualität prüfen:** Sample 10 Tool-Seiten durchgehen, Thin Content identifizieren
3. **Schema.org SoftwareApplication:** Für jede Tool-Seite strukturierte Daten
4. **Blog-Generator-Qualität:** Stichproben-Review der letzten Artikel, Manual Review Prozess
5. **Backlink-Aufbau:** In welchen Tool-Vergleichs-Listen ist Toolradar noch nicht?

## Offene Questions

- Aktueller Traffic-Stand? (Phase 1 Gate: 500/Monat)
- GA4 bereits entfernt?
- Blog-Artikel werden menschlich reviewed oder nur generiert?
