# SEO-Status: meyso.de

**Letzter manueller Audit:** (bisher nicht, erster Audit startet jetzt)
**Letzter automatischer Check:** 2026-04-19
**Betreut von:** Dave (Fabian Meyer)

---

## Kurz-Status

**Aktuelle Hauptziele:**
- Regional-SEO stärken für VS, Donaueschingen, Rottweil, Tuttlingen, St. Georgen
- AI-Visibility für Long-Tail-Queries aufbauen
- Reviews kontinuierlich einholen

**Bekannte Stärken:**
- Lighthouse 100 auf allen Haupt-Seiten
- Moderne Next.js 16 + Sanity CMS Stack
- Echte Case Studies (Hirmax, SQ Schmidt)
- Klare Positionierung ("Dein Entwickler, nicht deine Agentur")
- V3 Regions-Seiten mit Unique Content deployed

**Bekannte Baustellen:**
- GBP Services-Liste evtl. unvollständig
- Reviews: nur 2 Testimonials bisher, noch nicht in Google
- Keine Blog-Artikel als Case Studies
- IHK-Profil-Status unklar

---

## Audit-Ergebnisse

### Kategorie 1: Technical SEO

- [x] T1.1: Lighthouse ≥ 90 (Lighthouse 100)
- [x] T1.2: Next.js ISR/SSG verwendet
- [x] T1.3: Sitemap.xml vorhanden
- [x] T1.4: robots.txt konfiguriert
- [x] T1.5: HTTPS
- [x] T1.6: Mobile-Friendly
- [ ] T1.7: Schema.org vollständig (prüfen: LocalBusiness, Service, Article, FAQPage)
- [ ] T1.8: Keine 404-Fehler (monatlich prüfen)
- [ ] T1.9: Canonical Tags (prüfen)
- [ ] T1.10: Security Headers Score (prüfen via securityheaders.com)

### Kategorie 2: On-Page SEO

- [x] O2.1: Unique Titles (geprüft bei V2-Arbeit)
- [x] O2.2: Unique Meta-Descriptions
- [x] O2.3: H1 pro Seite
- [ ] O2.4: Strukturierte Hx-Hierarchie (spot-check durchführen)
- [ ] O2.5: Alt-Texte aller Bilder (prüfen)
- [x] O2.6: Interne Verlinkung (nach V3 verbessert)
- [x] O2.7: Content-Länge angemessen
- [x] O2.8: Keywords natürlich
- [x] O2.9: Keine Thin Pages (V2 hat das bereinigt)
- [ ] O2.10: FAQ-Schema (implementieren wo noch nicht)

### Kategorie 3: Local SEO

- [x] L3.1: GBP existiert (Service Area Business)
- [ ] L3.1: GBP vollständig? (Services mit Beschreibung prüfen)
- [ ] L3.2: NAP-Konsistenz zwischen Website, GBP, anderen Einträgen prüfen
- [ ] L3.3: LocalBusiness Schema.org
- [ ] L3.4: Reviews aktiv einholen (TODO: Max Hirt, Jonathan Romer)
- [ ] L3.5: Reviews beantworten (noch keine vorhanden)
- [x] L3.6: Regions-Pages mit echtem lokalen Mehrwert (V3 erledigt)
- [ ] L3.7: Service-Area in GBP (Rottweil, Tuttlingen, St. Georgen prüfen)
- [ ] L3.8: Lokale Backlinks (IHK-Profil anlegen)

### Kategorie 4: Content & Authority

- [ ] C4.1: Author-Info (Fabian Meyer als Autor etablieren)
- [x] C4.2: Impressum vollständig
- [x] C4.3: Datenschutzerklärung
- [x] C4.4: Kontaktseite
- [ ] C4.5: Über-uns-Seite mit Substanz (prüfen ob vorhanden und stark genug)
- [ ] C4.6: Blog mit regelmäßigen Artikeln (aktuell: Frequenz prüfen)
- [ ] C4.7: Case Studies mit echten Daten (Hirmax als Case ausbauen)
- [x] C4.8: Testimonials (2 vorhanden: Max Hirt, Jonathan Romer)

### Kategorie 5: AI-Visibility

- [ ] A5.1: Content-Struktur AI-citable (FAQ-Format, Listicles)
- [x] A5.2: Originalität des Content (durch V2/V3 gut)
- [ ] A5.3: Brand-Mentions außerhalb eigener Domain (ausbauen)
- [ ] A5.4: Strukturierte Daten für AI (T1.7 Überlappung)
- [ ] A5.5: Citations in externen Verzeichnissen (IHK, Das Telefonbuch)
- [ ] A5.6: ChatGPT/Perplexity-Check monatlich

### Kategorie 6: Tracking & Monitoring

- [x] M6.1: Google Search Console (eingerichtet)
- [x] M6.2: Sitemap in GSC eingereicht
- [ ] M6.3: Core Web Vitals Tracking (regelmäßig prüfen)
- [x] M6.4: Analytics DSGVO-konform (kein GA4, Vercel Analytics oder keine)
- [ ] M6.5: Backlink-Monitoring (Tool wählen)

### Kategorie 7: Risiko-Signale (muss NICHT vorhanden sein)

- [x] R7.1: Keine Doorway-Pages (V3 hat das adressiert)
- [x] R7.2: Kein Keyword-Stuffing
- [x] R7.3: Keine versteckten Texte
- [x] R7.4: Keine gekauften Backlinks
- [x] R7.5: Kein KI-Content ohne Review
- [x] R7.6: Kein Cloaking
- [ ] R7.7: Spam-Backlinks (prüfen via GSC)

### Kategorie 8: Meyso-Spezifisch

- [x] M8.1: Lighthouse 100
- [x] M8.2: Next.js 16
- [x] M8.3: Sanity CMS (für Content)
- [x] M8.4: DSGVO-konform
- [x] M8.5: CLAUDE.md existiert

---

## Top 5 Prioritäten (aktuell)

1. **Reviews einholen:** Max Hirt, Jonathan Romer, SQ Schmidt um Google Review bitten
2. **GBP vervollständigen:** Services mit Beschreibungen, alle 6 Service-Area-Städte
3. **IHK-Profil anlegen:** Schwarzwald-Baar-Heuberg, mit Backlink zu meyso.de
4. **Erste Case-Study im Blog:** Hirmax Bestellportal als ausführlicher Artikel
5. **FAQ-Schema auf Leistungs-Seiten prüfen und implementieren**

## Offene Questions / Research needed

- Welches Analytics läuft aktuell? (Vercel Analytics, GA4, nichts?)
- Ist das LocalBusiness Schema.org bereits auf meyso.de eingebunden?
- Wurden alle V3 Regions-Seiten von Google indexiert?

## Historie

- **Apr 2026:** V2 (Positionierung) deployed, V3 (Regions-SEO) deployed
- **Apr 2026:** preisNote-Fix, Layout-Refinement
- (ältere History siehe Projekt-Memory)

## Auto-Check 2026-04-19

### Lighthouse

### Google Search Console (letzte 28 Tage)

**Gesamt (Top 25):** 1 Klicks, 174 Impressions

**Top 10 Queries:**

| Query | Klicks | Impr. | CTR | Position | Δ Pos |
|-------|--------|-------|-----|----------|-------|
| meyso | 1 | 7 | 14.29% | 6 | ↑8.2 |
| industriedesigner schwarzwald-baar-kreis | 0 | 1 | 0% | 41 | – |
| mobile app development | 0 | 1 | 0% | 10 | – |
| moyso | 0 | 1 | 0% | 8 | – |
| seo optimierung bad-dürrheim | 0 | 1 | 0% | 21 | – |
| seo optimierung brigachtal | 0 | 1 | 0% | 1 | – |
| seo st. georgen im schwarzwald | 0 | 1 | 0% | 12 | – |
| webagentur bad dürrheim | 0 | 25 | 0% | 14.2 | – |
| webdesign bad dürrheim | 0 | 20 | 0% | 16.9 | – |
| webdesign triberg | 0 | 7 | 0% | 14.3 | – |

### Technical SEO

✅ **Sitemap:** 18 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 13 geprüft, keine broken
✅ **Schema.org:** LocalBusiness
⚠️ **Meta-Tags:** 1 Warnung(en)
  - OG:image fehlt

### Priorisierte Empfehlungen

- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---
