# SEO Playbook für neue Projekte

**Zweck:** Phasen-basierter Aufbau von SEO in neuen Projekten. Von Tag 1 bis 6 Monate nach Launch.

**Zielgruppe:** Dave selbst oder Claude Code beim Start eines neuen Meyso-Projekts.

**Referenz:** Die Checklist-Punkte verweisen auf `SEO-AUDIT-CHECKLIST.md`.

---

## Phase 0: Vor Projekt-Start (Strategie, 1-2 Stunden)

Bevor eine Zeile Code geschrieben wird, diese Fragen beantworten:

**0.1 Zielgruppe definieren**
- Wer sucht nach diesem Service? Konkrete Persona: Beruf, Region, Problem
- Welche Keywords nutzen diese Personen? (Google Keyword Planner, answerthepublic.com)
- Was ist die Intent: Informational, Commercial, Transactional, Navigational?

**0.2 Konkurrenz-Analyse**
- Top 3 Konkurrenten für Haupt-Keyword recherchieren
- Was machen sie gut? Was fehlt ihnen?
- Lücke identifizieren wo das neue Projekt stärker sein kann (Information Gain)

**0.3 Content-Struktur planen**
- Welche Haupt-Seiten braucht das Projekt?
- Welche Themen-Cluster ergeben Sinn?
- Skizze der URL-Struktur bevor Code geschrieben wird

**0.4 Tech-Stack-Entscheidung**
- Meyso-Standard: Next.js 16+, Sanity CMS (wenn Content-intensiv), Supabase (wenn App-Logic), Vercel
- Ausnahmen begründen

**0.5 Business-Integration**
- CRM/Leads-Tool geplant?
- E-Mail-Versand über Resend?
- Tracking DSGVO-konform geplant?

---

## Phase 1: Development (Tag 1 bis Launch-Readiness, 1-3 Wochen)

### 1.1 Technical Foundation (direkt beim Setup)

Beim ersten `npx create-next-app` oder Template-Fork sofort einbauen:

**TypeScript strict mode**
- verhindert Laufzeit-Bugs die SEO-Fehler auslösen können

**Sitemap.xml generator**
- `app/sitemap.ts` oder `next-sitemap` package
- Dynamisch, zieht URLs aus Sanity/Datenquelle

**Robots.txt**
- `app/robots.ts`
- Während Development: `Disallow: /` damit Vorschau-Deploys nicht indexiert werden
- Vor Launch: produktive Version die nur Dev-Pfade blockt

**Security Headers (next.config.ts)**
```typescript
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }]
}
```

**Schema.org Base-Component**
- Wiederverwendbare `<JsonLd>` Komponente
- Varianten: Organization, LocalBusiness, Service, Article, FAQPage

### 1.2 Pro Haupt-Seitentyp

Bei jeder wichtigen Seite (Leistungen, Blog-Listing, Projekte etc.):

**Metadata implementieren (app/[route]/page.tsx)**
```typescript
export const metadata = {
  title: 'Primär-Keyword | Sekundär-Info | Brand',
  description: '140-160 Zeichen, aktive Ansprache, konkretes Angebot',
  openGraph: { /* ... */ },
  alternates: { canonical: 'https://domain.de/route' },
}
```

**H1-Struktur einhalten**
- Genau ein H1 pro Seite
- H2, H3 in logischer Hierarchie

**Schema.org einfügen**
- Welches Schema passt zum Seitentyp?
- Siehe Checklist T1.7

**Interne Verlinkung**
- Mindestens 3 interne Links pro Seite, kontextuell sinnvoll
- Verwandte Themen-Cluster verlinken

### 1.3 Content-Erstellung

Für alle statischen Inhalte:

**Unique und substantiell**
- Keine Thin Content Pages (Checklist O2.9)
- Jede Seite bietet echten Wert, nicht Füllmaterial

**Fragen echter Nutzer beantworten**
- FAQs aus realen Support-Anfragen ableiten
- Nicht erfundene SEO-FAQs

**Case Studies mit echten Zahlen**
- Projekt-Seiten mit Vorher/Nachher/Ergebnis
- Konkrete Metriken statt "wir haben viel erreicht"

### 1.4 Performance-Optimierung

**Bilder**
- Next.js `<Image>` Komponente nutzen
- WebP oder AVIF, lazy loading
- Echte Alt-Texte

**Fonts**
- `next/font` für Layout-Shift-freies Laden
- Nur Fonts die wirklich genutzt werden

**Dependencies minimal halten**
- Bundle-Size prüfen mit `@next/bundle-analyzer`
- Alternativen zu schweren Libraries?

**Checkliste Phase 1 vor Launch:**
- [ ] Lighthouse Mobile und Desktop ≥ 90 (Ziel 100)
- [ ] Kein Console-Error auf produktiver Seite
- [ ] Sitemap.xml valide
- [ ] Robots.txt korrekt (ohne "Disallow: /")
- [ ] Alle Haupt-Seiten haben unique Title + Meta
- [ ] Schema.org auf allen Haupt-Seiten
- [ ] HTTPS aktiv
- [ ] Security Headers Score B oder besser (securityheaders.com)

---

## Phase 2: Pre-Launch (1-3 Tage vor Go-Live)

### 2.1 Final Technical Check

**Lighthouse auf allen Haupt-Seiten**
- Mobile und Desktop, alle Werte dokumentieren
- Alles unter 90 ist ein Blocker

**Broken Links Check**
- Online-Tool oder Screaming Frog
- Alle internen 404er fixen

**Meta-Tags Review**
- Jede wichtige Seite einzeln prüfen
- Kein "Untitled" oder generisches "Home"

**Schema.org Validation**
- Rich Results Test Tool auf allen wichtigen Seitentypen
- Keine Errors, Warnings wo möglich auflösen

### 2.2 Analytics-Setup

**DSGVO-konformes Tracking**
- Vercel Analytics (datenschutzfreundlich, kein Consent nötig)
- Oder Plausible (EU-basiert)
- GA4 nur mit Consent-Management

**Event-Tracking definieren**
- Was sind wichtige Conversions? (Kontaktformular, Telefon-Click, etc.)
- Tracking implementieren

### 2.3 Content-Review

**Alle Seiten lesen**
- Klingt das wie Mensch oder wie Marketing-Bot?
- Alt-Texte aller Bilder prüfen
- Korrekturlesen, keine Tippfehler

**Rechtliche Seiten**
- Impressum vollständig (§ 5 TMG)
- Datenschutz aktualisiert, alle Dienste genannt
- AGB wenn relevant
- Cookie-Banner wenn Consent-pflichtige Scripts

---

## Phase 3: Launch-Tag

**3.1 Deployment**
- Production-Deploy via Vercel
- DNS korrekt? (www, apex, HTTPS-Zwang)

**3.2 Sofort-Tasks**
- [ ] Google Search Console: Property verifizieren
- [ ] Sitemap in GSC einreichen
- [ ] Google Business Profile (wenn neues Unternehmen) anlegen oder updaten
- [ ] Bing Webmaster Tools einrichten (für AI-Suche relevant)

**3.3 Social Signals**
- LinkedIn-Post (wenn zulässig)
- Internen Bestand informieren (E-Mail, Kunden, Netzwerk)

---

## Phase 4: Post-Launch Woche 1-2

**4.1 Indexierung beobachten**
- GSC Coverage-Report: wurden Seiten indexiert?
- Bei Problemen: URL-Inspection → Manuelle Indexierung anfordern

**4.2 Erste Daten**
- Analytics: Wo kommen erste Besucher her?
- GSC: Welche Queries?
- Bounce Rate und Engagement prüfen

**4.3 Quick Wins**
- Falls eine wichtige Seite nicht indexiert ist: Ursache finden
- Falls Lighthouse auf echtem Traffic schwächer ist: Optimieren
- Broken Links in Real-World-Nutzung?

---

## Phase 5: Monat 1-3

**5.1 Content-Ausbau**
- Pro Monat mindestens 1 Blog-Artikel
- Fokus: Long-Tail-Keywords der definierten Persona
- Format abwechslungsreich: Case Study, Listicle, Tutorial

**5.2 Backlink-Aufbau**
- IHK-Profil anlegen
- Relevante Branchenverzeichnisse
- Ein Gastbeitrag oder eine Pressemeldung

**5.3 Reviews sammeln (bei lokalen Projekten)**
- Nach jedem erfolgreichen Projekt: höfliche Review-Anfrage
- Ziel: Mindestens 1 neue Review alle 4-6 Wochen

**5.4 Monatlicher Audit**
- Checklist-Punkte durchgehen
- Status-Datei in `project-status/` updaten

---

## Phase 6: Monat 3-6

**6.1 Daten-getriebene Anpassung**
- Welche Seiten performen gut, welche nicht?
- GSC: Queries mit hoher Impression aber niedrigem CTR = Title/Meta anpassen
- GSC: Queries mit Position 11-20 = Content vertiefen für Top 10

**6.2 AI-Visibility-Check**
- ChatGPT, Perplexity befragen zu relevanten Queries
- Wird die Website erwähnt?
- Was fehlt damit AI sie zitieren würde?

**6.3 Konkurrenz-Re-Check**
- Was machen Konkurrenten jetzt anders?
- Neue Content-Lücken?

**6.4 Quartals-Review**
- Ausführlicher Audit anhand Checklist
- Strategie-Anpassung dokumentieren

---

## Meyso-Standard Template für neue Projekte

Bei jedem neuen Meyso-Projekt, diese Datei-Struktur initialisieren:

```
projekt-repo/
├── app/
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx              (mit base Schema.org, Metadata)
│   └── [seiten]/
├── components/
│   └── JsonLd.tsx              (wiederverwendbar für Schema.org)
├── lib/
│   └── seo.ts                  (Utility-Funktionen für Metadata)
├── CLAUDE.md                    (Projekt-Dokumentation, SEO-Status-Link)
├── next.config.ts              (mit Security Headers)
└── package.json
```

## Anti-Patterns die vermieden werden

Diese Dinge NIEMALS machen, egal wie verlockend:

1. **Massen-Regions-Pages ohne echten Content**
   - Siehe Innosirius-Fall als Beispiel was man NICHT macht

2. **KI-generierte Blog-Artikel ohne Review**
   - Helpful Content System straft das ab

3. **Gekaufte Backlinks**
   - Kurze Wirkung, langfristige Abstrafung

4. **Keyword-Stuffing in Title oder Content**
   - Ranking-Schaden seit 2010+

5. **Versteckte Texte für Google**
   - Manual Action Risiko

6. **Hreflang-Fehler in mehrsprachigen Projekten**
   - Silent Killer für internationale Rankings

7. **Duplicate Content ohne Canonical**
   - Verwirrt Google, reduziert Ranking

---

## Quick-Reference: Wichtigste Ranking-Faktoren 2026

Aus Whitespark 2026 Report (Local) und Core Ranking Consensus:

| Faktor | Gewicht | Wo einzuordnen |
|--------|---------|----------------|
| Proximity (bei Local) | ~55% | Nicht beeinflussbar außer durch GBP |
| Google Business Profile | ~32% | L3.1, L3.7 |
| Content Quality & Relevance | ~25% | Phase 1.3, 5.1 |
| Review Signals | 16-20% | L3.4, L3.5 |
| On-Page SEO | ~19% | Phase 1.2 |
| Backlinks | ~11% | L3.8, 5.2 |
| Personalization (User-Behavior) | ~5-10% | Nicht direkt beeinflussbar |

Die Prozente summieren sich nicht exakt zu 100%, weil sie unterschiedliche Überlappungen haben. Zur Orientierung gut genug.

---

## Wann dieses Playbook updaten

- Nach jedem Whitespark Jahres-Report (November/Dezember)
- Nach Google Core Updates mit signifikanten Verschiebungen
- Wenn neue AI-Such-Systeme relevante Marktanteile erreichen
- Mindestens: Jährliches Review im Januar
