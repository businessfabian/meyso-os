# SEO-Status: sq-sv.de (SQ Schmidt Qualitätssicherung)

**Letzter manueller Audit:** (erster Audit)
**Projekttyp:** Kundenprojekt (Dienstleister-Website + Fortbildungsplattform)
**Betreut von:** Dave, Kunde: SQ Schmidt

---

## Kurz-Status

**Bekannte Stärken:**
- Lighthouse 100 Score
- Unter 1,5 Sekunden Ladezeit
- Sanity CMS (Team pflegt selbst)
- 56 Fortbildungen als strukturierte Landingpages
- SEO-Optimierung ist bereits laufendes Thema

**Aktuelle SEO-Arbeiten:**
- Umlaut-Slug-Bugs gefixt
- Subpage-Metadata erweitert (zieht aus Sanity)
- Google Search Console Setup
- Fortbildungs-Page mit 56 Seminaren

---

## Audit-Ergebnisse

### Kategorie 1: Technical SEO

- [x] T1.1: Lighthouse 100
- [x] T1.2: Next.js
- [x] T1.3: Sitemap.xml
- [ ] T1.4: robots.txt prüfen
- [x] T1.5: HTTPS
- [x] T1.6: Mobile-Friendly
- [ ] T1.7: Schema.org (Organization, Service, EducationalEvent für Fortbildungen?)
- [ ] T1.8: 404-Check
- [ ] T1.9: Canonical Tags (nach Umlaut-Slug-Fix prüfen)
- [ ] T1.10: Security Headers

### Kategorie 2: On-Page SEO

- [x] O2.1: Unique Titles (Metadata zieht aus Sanity)
- [x] O2.2: Unique Meta-Descriptions
- [x] O2.3: H1 pro Seite
- [ ] O2.4: Hx-Hierarchie prüfen
- [ ] O2.5: Alt-Texte aller Bilder
- [ ] O2.6: Interne Verlinkung (Leistungen ↔ Projekte ↔ Fortbildungen)
- [ ] O2.7: Content-Länge
- [x] O2.8: Keywords natürlich
- [ ] O2.9: Thin Pages (besonders bei 56 Fortbildungs-Seiten)
- [ ] O2.10: FAQ-Schema auf Fortbildungs-Seiten

### Kategorie 3: Local SEO (Trossingen)

- [ ] L3.1: SQ Schmidt GBP Status?
- [ ] L3.2: NAP-Konsistenz
- [ ] L3.3: LocalBusiness Schema
- [ ] L3.4: Reviews
- [ ] L3.5: Reviews beantworten
- [ ] L3.6: Regional-Seiten
- [ ] L3.7: Service-Area definieren
- [ ] L3.8: Lokale Backlinks (Trossingen, BW)

### Kategorie 4: Content & Authority

- [ ] C4.1: Author-Info auf Fortbildungen (wer lehrt?)
- [x] C4.2: Impressum
- [x] C4.3: Datenschutz
- [x] C4.4: Kontakt
- [ ] C4.5: Über-uns
- [ ] C4.6: Blog? (relevant für SEO, fraglich ob für Geschäft)
- [ ] C4.7: Case Studies (welche QS-Projekte wurden gemacht?)
- [ ] C4.8: Testimonials

### Kategorie 5: AI-Visibility

- [ ] A5.1: Fortbildungs-Inhalte AI-citable
- [ ] A5.2: Originalität (spezielle QS-Themen könnten hoch ranken)
- [ ] A5.3: Brand-Mentions
- [ ] A5.4: Schema.org EducationalEvent für Fortbildungen wäre ideal
- [ ] A5.5: Einträge in Weiterbildungs-Verzeichnissen
- [ ] A5.6: AI-Check

### Kategorie 6: Tracking

- [x] M6.1: GSC (Setup läuft gerade)
- [x] M6.2: Sitemap
- [ ] M6.3: Core Web Vitals
- [ ] M6.4: Analytics
- [ ] M6.5: Backlinks

### Kategorie 7: Risiko-Signale

Alle grün.

### Kategorie 8: Meyso-Spezifisch

- [x] M8.1: Lighthouse 100
- [x] M8.2: Next.js
- [x] M8.3: Sanity CMS
- [x] M8.4: DSGVO
- [x] M8.5: CLAUDE.md

---

## Top 3 Prioritäten

1. **Schema.org EducationalEvent auf Fortbildungen:** Jedes Seminar als strukturiertes Event, verbessert Rich Results und AI-Citation
2. **Lokales SEO für Trossingen:** GBP-Status prüfen, lokale Backlinks
3. **Thin Content Audit der 56 Fortbildungs-Seiten:** Haben alle genug substanziellen Inhalt?

## Offene Questions

- Ist GBP für SQ Schmidt vorhanden?
- Welche Fortbildungen sind die traffic-stärksten?
- Gibt es Seminar-Teilnehmer die eine Review/Testimonial hinterlassen würden?

---

## Auto-Check 2026-04-19

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 82 | 🟢 94 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://sq-sv.de (Performance 77)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 5.13s 🔴
- CLS: 0.004 🟢

### Technical SEO

✅ **Sitemap:** 35 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 82. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---

## Auto-Check 2026-04-20

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 79 | 🟢 95 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://sq-sv.de (Performance 74)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 5.06s 🔴

### Technical SEO

✅ **Sitemap:** 35 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 79. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---

## Auto-Check 2026-04-20

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 86 | 🟢 96 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://www.sq-sv.de (Performance 81)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 4.43s 🔴
- CLS: 0.004 🟢

### Technical SEO

✅ **Sitemap:** 35 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 86. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---

## Auto-Check 2026-05-01

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 86 | 🟢 99 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://www.sq-sv.de (Performance 77)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 4.28s 🔴

### Technical SEO

✅ **Sitemap:** 38 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 86. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---

## Auto-Check 2026-06-01

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 85 | 🟢 99 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://www.sq-sv.de/leistungen (Performance 81)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 4.28s 🔴
- CLS: 0.004 🟢

### Technical SEO

✅ **Sitemap:** 38 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 85. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---

## Auto-Check 2026-07-01

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 85 | 🟢 100 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://www.sq-sv.de (Performance 82)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 4.28s 🔴

### Technical SEO

✅ **Sitemap:** 38 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 85. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---

## Auto-Check 2026-08-01

### Lighthouse

| Kategorie | Mobile | Desktop |
|-----------|--------|---------|
| Performance | 🟡 87 | 🟢 99 |
| SEO | 🟢 97 | 🟢 97 |
| Accessibility | 🟡 86 | 🟢 91 |
| Best Practices | 🟢 100 | 🟢 100 |

**Schwächste Seite:** https://www.sq-sv.de (Performance 81)

**Core Web Vitals (Homepage, Mobile):**
- LCP: 4.28s 🔴

### Technical SEO

✅ **Sitemap:** 38 URLs, 10 geprüft, alle OK
✅ **Interne Links:** 15 geprüft, keine broken
✅ **Schema.org:** ProfessionalService
⚠️ **Meta-Tags:** 1 Warnung(en)
  - Title zu lang: 68 Zeichen

### Priorisierte Empfehlungen

- **MITTEL:** Mobile Performance 87. Optimierungs-Potential.
- **NIEDRIG:** 1 Meta-Tag-Warnung(en) auf Startseite.

---
