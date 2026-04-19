# SEO-Status: hirmax-scheiben.de

**Letzter manueller Audit:** (erster Audit)
**Projekttyp:** Kundenprojekt (B2B-Bestellportal)
**Betreut von:** Dave, Kunde: Max Hirt

---

## Kurz-Status

**Hinweis:** Hirmax ist ein B2B-Portal mit bestehender Kundenbasis (339 Kunden), weniger Fokus auf öffentliches SEO, mehr auf Portal-Funktionalität für Bestandskunden.

**Bekannte Stärken:**
- Moderner Stack (Next.js, Supabase, Lexware-Anbindung)
- Klare B2B-Nische (Schießsport-Scheibenbilder)
- Rabattsystem voll funktional (47/47 Tests passing)

**SEO-Relevanz:**
- Niedrig-Mittel: Primär Bestandskundengeschäft
- Aber: Neue Kunden über Meyton-Referenzliste (94 Leads identifiziert)
- Public-Seite (Marketing) kann SEO-Wert haben für Neukundengewinnung

---

## Audit-Ergebnisse

### Kategorie 1: Technical SEO

- [ ] T1.1: Lighthouse ≥ 90
- [x] T1.2: Next.js
- [ ] T1.3: Sitemap.xml (für Public-Seite)
- [ ] T1.4: robots.txt (Admin-Bereich muss disallowed sein)
- [x] T1.5: HTTPS
- [ ] T1.6: Mobile-Friendly prüfen
- [ ] T1.7: Schema.org (Organization, Product wenn Produkt-Katalog public)
- [ ] T1.8: 404-Check
- [ ] T1.9: Canonical Tags
- [ ] T1.10: Security Headers

### Kategorie 2: On-Page SEO

**Für Public-Seite:**
- [ ] O2.1-O2.10: Komplett durchgehen bei Relaunch oder Audit

### Kategorie 3: Local SEO

**Relevant für Hirmax lokal (Brigachtal):**
- [ ] L3.1: Hat Hirmax ein GBP?
- [ ] L3.2: NAP-Konsistenz
- [ ] L3.3: LocalBusiness Schema
- [ ] L3.4: Reviews (Schießvereine als Kunden, schwierig)
- [ ] L3.5: Reviews beantworten
- [ ] L3.6: Regional-Seiten nicht kritisch
- [ ] L3.7: Service-Area
- [ ] L3.8: Backlinks von DSB-Verband, Schützen-Verzeichnissen

### Kategorie 4: Content & Authority

- [ ] C4.1: Author-Info
- [x] C4.2: Impressum (wurde bei Go-Live geprüft)
- [x] C4.3: Datenschutzerklärung
- [x] C4.4: Kontakt
- [ ] C4.5: Über-uns mit Geschichte der Hirmax
- [ ] C4.6: Blog? (niedrige Priorität für B2B-Portal)
- [ ] C4.7: Referenzen (Schießvereine die Hirmax nutzen)
- [ ] C4.8: Testimonials

### Kategorie 5: AI-Visibility

- [ ] A5.1: Wenn jemand ChatGPT "Scheibenbilder B2B Hersteller Deutschland" fragt, wird Hirmax erwähnt?
- [ ] A5.2: Originalität hoch (Nische)
- [ ] A5.3: Brand-Mentions in Schieß-Communities?
- [ ] A5.4: Schema.org
- [ ] A5.5: Einträge in Schützen-Branchenverzeichnissen
- [ ] A5.6: Quartalsweise AI-Check

### Kategorie 6: Tracking

- [ ] M6.1: GSC?
- [ ] M6.2: Sitemap
- [ ] M6.3: Core Web Vitals
- [ ] M6.4: Analytics (DSGVO)
- [ ] M6.5: Backlinks

### Kategorie 7: Risiko-Signale

Standardmäßig alle grün, da Projekt frisch und sauber gebaut.

### Kategorie 8: Meyso-Spezifisch

- [ ] M8.1: Lighthouse 100
- [x] M8.2: Next.js
- [x] M8.3: Supabase (App-Logic, da B2B-Portal)
- [x] M8.4: DSGVO-konform
- [x] M8.5: CLAUDE.md

---

## Top 3 Prioritäten

1. **Public-Marketing-Seite auditen:** Getrennt vom Portal-Bereich prüfen
2. **Hirmax GBP prüfen/anlegen:** Falls noch nicht vorhanden
3. **Schema.org Produkt-Katalog:** Wenn Produkte public sichtbar

## Offene Questions

- Ist die Public-Seite eigenes Deployment oder Teil des Portal-Deployments?
- Hat Hirmax ein Google Business Profile?
- Ist der Produkt-Katalog für Nicht-Kunden sichtbar (dann SEO-relevant)?
