# SEO-Baseline-System für neue Meyso-Projekte

**Version:** 1.0
**Erstellt:** 2026-04-20
**Zweck:** Sicherstellen dass alle neuen Projekte (eigene und Kunden) SEO-technisch von Anfang an korrekt aufgesetzt sind.

**Basiert auf:** Erkenntnissen aus SEO-Arbeit an meyso.de (V2/V3 Content, /projekte Performance-Fix, Footer WCAG, og-image) und toolradar.de, sowie dem SEO-Agent-Monitoring.

---

# Teil 1: Pre-Launch-Checkliste

Diese Checkliste wird VOR dem ersten Live-Deploy eines neuen Projekts durchgegangen. Jeder Punkt muss erledigt oder bewusst übersprungen sein.

## 1. Technische Basis

### 1.1 Next.js Setup
- [ ] Next.js 16+ in package.json
- [ ] App Router (nicht Pages Router) verwendet
- [ ] TypeScript aktiviert
- [ ] ESLint konfiguriert

### 1.2 Performance-Basics
- [ ] Alle Bilder nutzen `next/image`, keine raw `<img>` Tags
- [ ] Hero-Images haben `priority={true}` Prop
- [ ] Hero-Images haben `fetchPriority="high"`
- [ ] Non-Hero-Images haben `loading="lazy"`
- [ ] `sizes` Prop bei responsiven Bildern gesetzt
- [ ] Fonts werden preloaded in layout.tsx

### 1.3 Metadata (app/layout.tsx)
- [ ] `metadataBase` gesetzt (wichtig für absolute URLs)
- [ ] `title` mit Template (z.B. `%s | Meyso`)
- [ ] `description` prägnant unter 160 Zeichen
- [ ] `openGraph.images` verweist auf `/api/og` oder statisches Bild
- [ ] `twitter.card = "summary_large_image"`
- [ ] `robots` korrekt konfiguriert (index/follow oder noindex je nach Bedarf)

### 1.4 og-image
- [ ] `/api/og/route.tsx` existiert ODER statisches og-image in /public
- [ ] 1200x630px Abmessungen
- [ ] Branding des Projekts erkennbar
- [ ] Getestet mit https://www.opengraph.xyz/

## 2. On-Page SEO

### 2.1 Meta-Tags pro Seite
- [ ] Jede Seite hat eigenen `<title>` unter 60 Zeichen
- [ ] Jede Seite hat eigene `<meta description>` zwischen 100-160 Zeichen
- [ ] Canonical-Tag gesetzt
- [ ] Keine doppelten Title-Tags zwischen Seiten

### 2.2 Heading-Struktur
- [ ] Genau ein `<h1>` pro Seite
- [ ] Logische Hx-Hierarchie (keine Sprünge h1 → h3)
- [ ] Keywords natürlich integriert, kein Stuffing

### 2.3 Interne Links
- [ ] Hauptnavigation zu allen wichtigen Seiten
- [ ] Footer-Links zu rechtlichen Seiten (Impressum, Datenschutz, AGB)
- [ ] Breadcrumbs bei mehrstufigen Seiten
- [ ] Keine toten Links

## 3. Technische SEO

### 3.1 Sitemap und Robots
- [ ] `sitemap.xml` wird generiert (app/sitemap.ts)
- [ ] `robots.txt` konfiguriert
- [ ] Alle wichtigen Seiten in Sitemap
- [ ] Unwichtige Seiten (z.B. /admin) in robots.txt blockiert

### 3.2 Schema.org / Structured Data
- [ ] Organization oder LocalBusiness Schema auf Startseite
- [ ] Service Schema bei Dienstleistungs-Seiten
- [ ] FAQPage Schema bei FAQ-Abschnitten
- [ ] Article Schema bei Blog-Posts
- [ ] Getestet mit https://validator.schema.org/

### 3.3 Performance-Ziele
- [ ] Mobile Lighthouse Performance 90+
- [ ] LCP unter 2.5s (messbar, nicht NO_LCP)
- [ ] TBT unter 200ms
- [ ] CLS unter 0.1

### 3.4 Security-Headers (in next.config.ts)
- [ ] `X-Frame-Options: DENY` oder SAMEORIGIN
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `Strict-Transport-Security` mit max-age 31536000
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy` minimal

## 4. Accessibility

### 4.1 Kontrast
- [ ] Alle Text-Farben erreichen WCAG AA (4.5:1)
- [ ] Getestet mit https://webaim.org/resources/contrastchecker/
- [ ] Links durch mehr als Farbe erkennbar (Unterstrich oder Border)

### 4.2 Semantik
- [ ] `<html lang="de">` (oder passende Sprache)
- [ ] Alle Bilder haben sinnvollen `alt`-Text
- [ ] Formulare haben Labels
- [ ] Buttons haben klaren Text oder aria-label

### 4.3 Keyboard-Navigation
- [ ] Alle interaktiven Elemente per Tab erreichbar
- [ ] Focus-Indicator sichtbar
- [ ] Logische Tab-Reihenfolge

## 5. Local SEO (wenn lokales Business)

### 5.1 NAP-Daten
- [ ] Name, Adresse, Telefon konsistent
- [ ] Auf allen Seiten gleiche Schreibweise
- [ ] Schema.org PostalAddress

### 5.2 Google Business Profile
- [ ] Profil existiert für das Projekt
- [ ] Adresse/Service-Area korrekt
- [ ] Verifizierung durchlaufen (wenn möglich)

### 5.3 Lokale Landing Pages
- [ ] Nur wenn Unique Content vorhanden ist
- [ ] Keine Doorway-Pages (10 identische Pages mit Stadt-Tausch)
- [ ] Jede Landing Page mit echtem lokalem Mehrwert

## 6. DSGVO und Rechtliches

### 6.1 Pflichtseiten
- [ ] Impressum vollständig (§5 TMG)
- [ ] Datenschutzerklärung aktuell
- [ ] Cookie-Banner wenn Tracking vorhanden
- [ ] AGB wenn Waren/Dienstleistungen verkauft

### 6.2 Tracking
- [ ] Analytics DSGVO-konform (Vercel Analytics, Plausible, nicht unkonfiguriertes GA4)
- [ ] Cookie-Consent-Banner vor Tracking-Scripts
- [ ] IP-Anonymisierung wenn GA genutzt

## 7. Content-Qualität

### 7.1 Uniqueness
- [ ] Kein Duplicate Content mit anderen Meyso-Projekten
- [ ] Keine automatisch generierten Inhalte ohne Review
- [ ] Keine KI-Texte ohne menschliche Überarbeitung

### 7.2 Relevanz
- [ ] Hauptkeyword in Title, H1, erstem Absatz
- [ ] Content beantwortet User-Intent
- [ ] Aktualisiert/dated content vermieden

## 8. Monitoring-Setup

### 8.1 Google Search Console
- [ ] Property verifiziert (Domain-Property bevorzugt)
- [ ] kontakt@meyso.de als Owner eingetragen
- [ ] Sitemap eingereicht
- [ ] Erste Indexierung angefordert

### 8.2 SEO-Agent Integration
- [ ] Projekt in `meyso-os/scripts/config/projects.json` eingetragen
- [ ] `important_pages` konfiguriert (alle wichtigen URLs)
- [ ] AI-Queries definiert (was soll der Agent bei KI prüfen?)
- [ ] Erster Monthly-Run geprüft dass Daten kommen

### 8.3 Change-Log
- [ ] `docs/seo/changes.md` Eintrag im meyso-os erstellt
- [ ] Launch-Datum und initiale Metriken festgehalten

---

# Teil 2: KMU-Template Update-Plan

Das bestehende `meyso-kmu-template` Repo muss aktualisiert werden um alle SEO-Erkenntnisse zu enthalten. Wenn ein neues Projekt aus diesem Template gestartet wird, sind die wichtigsten SEO-Features automatisch dabei.

## Was ins Template muss

### Dateien die vorhanden sein müssen

```
meyso-kmu-template/
├── app/
│   ├── layout.tsx              # Metadata-Template, Font-Preload
│   ├── api/
│   │   └── og/
│   │       └── route.tsx       # og-image-Generator (anpassbar)
│   ├── sitemap.ts              # Automatische Sitemap
│   ├── robots.ts               # robots.txt Generator
│   └── globals.css             # Design-Tokens (Farben, Fonts)
├── components/
│   ├── Footer.tsx              # WCAG AA kompatibel
│   ├── Header.tsx              # Semantic nav
│   └── schema/
│       ├── OrganizationSchema.tsx
│       ├── LocalBusinessSchema.tsx
│       ├── ServiceSchema.tsx
│       └── FAQSchema.tsx
├── lib/
│   └── seo/
│       ├── metadata.ts         # Helper für page.tsx Metadata
│       └── og-defaults.ts      # og-image Default-Werte
├── next.config.ts              # Security-Headers, Images-Config
└── README.md                   # Setup-Anleitung für neues Projekt
```

### Konkrete Komponenten

#### app/layout.tsx Template

```tsx
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Eigene Font (z.B. Instrument Serif)
const instrumentSerif = localFont({
  src: [
    { path: '../public/fonts/InstrumentSerif-Regular.ttf', weight: '400' },
    { path: '../public/fonts/InstrumentSerif-Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://{DOMAIN}'),
  title: {
    default: '{PROJEKT_NAME}',
    template: '%s | {PROJEKT_NAME}',
  },
  description: '{BESCHREIBUNG}',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://{DOMAIN}',
    siteName: '{PROJEKT_NAME}',
    title: '{PROJEKT_NAME}',
    description: '{BESCHREIBUNG}',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: '{PROJEKT_NAME} - {TAGLINE}',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{PROJEKT_NAME}',
    description: '{BESCHREIBUNG}',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

#### next.config.ts Template

```ts
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  images: {
    remotePatterns: [
      // Pro Projekt anpassen
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}

export default nextConfig
```

#### lib/seo/metadata.ts Helper

```ts
import { Metadata } from 'next'

export function createPageMetadata(params: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  return {
    title: params.title,
    description: params.description,
    alternates: { canonical: params.path },
    openGraph: {
      title: params.title,
      description: params.description,
      url: params.path,
      images: params.image ? [{ url: params.image, width: 1200, height: 630 }] : undefined,
    },
  }
}
```

#### components/schema/LocalBusinessSchema.tsx

```tsx
export function LocalBusinessSchema(props: {
  name: string
  description: string
  address: { street: string; city: string; postalCode: string; country: string }
  telephone: string
  url: string
  email: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.name,
    description: props.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.address.street,
      addressLocality: props.address.city,
      postalCode: props.address.postalCode,
      addressCountry: props.address.country,
    },
    telephone: props.telephone,
    url: props.url,
    email: props.email,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Template README

Eine README.md die bei jedem neuen Projekt-Fork abgearbeitet wird:

```markdown
# Setup neues Projekt aus Meyso KMU Template

## 1. Projekt klonen
git clone meyso-kmu-template neues-projekt-name
cd neues-projekt-name
rm -rf .git && git init

## 2. Platzhalter ersetzen
Suche nach {DOMAIN}, {PROJEKT_NAME}, {BESCHREIBUNG}, {TAGLINE}

## 3. Fonts austauschen
Eigene Fonts nach /public/fonts/ kopieren
app/layout.tsx anpassen

## 4. Design-Tokens
app/globals.css Farben anpassen (Primary, Background, Text)

## 5. og-image anpassen
app/api/og/route.tsx Branding-Elemente einfügen

## 6. Schema-Komponenten befüllen
components/schema/ mit Projekt-Daten füllen

## 7. SEO-Checkliste durchgehen
Siehe docs/seo/launch-checklist.md in meyso-os

## 8. In SEO-Agent eintragen
meyso-os/scripts/config/projects.json erweitern
```

## Update-Strategie

### Phase 1: Aktuellen Template-Stand dokumentieren
Was ist schon im Template? Was fehlt? 

### Phase 2: Erkenntnisse backporten
Alle heute gewonnenen Fixes ins Template einbauen:
- og-image-Route
- Font-Preload
- next/image priority-Prop Pattern
- Footer WCAG AA
- Security-Headers

### Phase 3: Template testen
Neues Dummy-Projekt aus aktualisiertem Template erstellen. Alle Pre-Launch-Checklisten-Punkte durchgehen. Lighthouse-Test. Falls >90 auf Performance und 100 Accessibility: Template ist production-ready.

### Phase 4: Nutzung bei nächstem echten Projekt
Beim nächsten Kunden/Projekt strict aus diesem Template starten. Probleme dokumentieren und Template iterativ verbessern.

---

# Teil 3: Claude Code Skill Plan

Ein Custom Skill für Claude Code der automatisch bei jedem neuen Projekt SEO-Best-Practices einhält.

## Location und Setup

Im meyso-os Repo:

```
.claude/skills/seo-baseline/
├── SKILL.md              # Haupt-Skill-Beschreibung
├── examples/
│   ├── og-route.tsx      # og-image Vorlage
│   ├── layout-metadata.tsx
│   ├── schema-components.tsx
│   └── security-headers.ts
└── checklist.md          # Launch-Checklist als Agent-readable
```

## SKILL.md Inhalt

```markdown
---
name: SEO-Baseline
description: Use this skill when starting a new Meyso or client project, or when adding SEO-relevant features to existing projects. Triggers on requests like "new project", "neue landing page", "SEO setup", "og image", "metadata", "schema.org", or when creating app/layout.tsx, app/api/og/, or similar SEO-critical files. The skill enforces Meyso's SEO-baseline standards: performance (LCP, priority props), accessibility (WCAG AA), metadata (OpenGraph, Twitter), structured data (Schema.org), and monitoring integration.
---

# SEO-Baseline Skill

Du bist verantwortlich dafür dass bei neuen Projekten oder SEO-relevanten Änderungen die Meyso-Standards eingehalten werden.

## Wann dieser Skill greift

- Neues Projekt aus Template gestartet
- `app/layout.tsx` wird erstellt oder geändert  
- `app/api/og/` wird erstellt
- Metadata-Export wird geschrieben
- `<Image>` Komponente wird eingesetzt
- `next.config.ts` wird geändert
- Landing Page wird erstellt

## Pflicht-Checks vor jedem SEO-relevanten Commit

### 1. Performance: priority-Prop Pattern

Wenn du eine Karten-Liste oder Grid mit Bildern siehst:
- Das erste Bild (index === 0) MUSS `priority={true}` haben
- Das erste Bild MUSS `fetchPriority="high"` haben
- Das erste Bild MUSS KEIN `loading="lazy"` haben
- Alle anderen Bilder: `loading="lazy"` oder ohne Prop

Beispiel-Pattern:
```tsx
{items.map((item, index) => (
  <Card key={item.id} item={item} isHero={index === 0} />
))}
```

Innerhalb von Card:
```tsx
<Image
  src={item.image}
  alt={item.name}
  priority={isHero}
  fetchPriority={isHero ? "high" : "auto"}
  loading={isHero ? undefined : "lazy"}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 2. Metadata: Pflicht-Felder

Jedes `layout.tsx` oder `page.tsx` mit Metadata braucht MINDESTENS:
- title (oder title.template)
- description
- openGraph.images (verweist auf /api/og oder Static)
- twitter.card = "summary_large_image"

Prüfe bei Metadata-Generierung: fehlt `metadataBase` in layout.tsx? Dann hinzufügen.

### 3. og-image

Wenn im Projekt noch kein og-image existiert:
- Frage den User ob dynamisch (`/api/og`) oder statisch
- Bei dynamisch: nutze Template aus `/mnt/skills/user/seo-baseline/examples/og-route.tsx`
- Design: dunkler Hintergrund, Akzentfarbe aus globals.css, Projekt-Branding

### 4. Schema.org

Bei einer LocalBusiness-Seite MUSS vorhanden sein:
- `@type: "LocalBusiness"` Schema auf Startseite
- Name, Adresse (PostalAddress), Telefon, URL, Email
- Verwende Template aus `examples/schema-components.tsx`

### 5. Security-Headers

In `next.config.ts` MÜSSEN folgende Headers konfiguriert sein:
- X-Frame-Options
- X-Content-Type-Options  
- Referrer-Policy
- Strict-Transport-Security

Template: `examples/security-headers.ts`

### 6. Footer-Kontrast

Wenn Footer erstellt wird:
- Keine Opacity unter 0.55 auf dunklem Hintergrund
- Keine Opacity unter 0.70 für Body-Text
- Links müssen text-decoration oder border-bottom haben (nicht nur Farbe)
- Nach Bau: Lighthouse Accessibility Score lokal prüfen

## Post-Launch

Nach erstem Deploy, erinnere den User an:
1. Google Search Console Property anlegen
2. Sitemap einreichen
3. Projekt in meyso-os/scripts/config/projects.json eintragen
4. docs/seo/changes.md Eintrag

## Files in diesem Skill

- `checklist.md` - Vollständige Launch-Checkliste
- `examples/og-route.tsx` - og-image Generator Template
- `examples/layout-metadata.tsx` - Metadata Template
- `examples/schema-components.tsx` - Schema.org Komponenten
- `examples/security-headers.ts` - next.config.ts Headers

## Conflict Resolution

Wenn User explizit gegen eine Best Practice entscheidet (z.B. "og-image brauche ich nicht"):
- OK, dokumentiere im projekt-spezifischen Change-Log warum
- Halte dich an Users Wunsch, aber weise auf Risiko hin
- Biete an es später nachzuholen
```

## Wie der Skill genutzt wird

### Szenario 1: Neues Projekt

```
User: "Ich baue eine neue Landing Page für einen Klempner in Villingen"
Claude Code: [Skill triggert]
→ Prüft: ist das ein neues Projekt? Ja
→ Fragt: Template verwendet? Welcher Stand?
→ Schlägt vor: SEO-Checkliste durchgehen
→ Erstellt layout.tsx mit vollen Metadata
→ Erstellt app/api/og/route.tsx
→ Baut LocalBusiness-Schema
→ Erinnert am Ende: "Nicht vergessen in projects.json einzutragen"
```

### Szenario 2: Feature-Addition

```
User: "Füge mir eine Galerie-Komponente hinzu"
Claude Code: [Skill triggert wegen Image-Pattern]
→ Baut Galerie
→ Achtet automatisch auf: erstes Bild priority, andere lazy
→ Commit-Message: "feat(gallery): with LCP-optimized image priority"
```

## Aufbau-Reihenfolge

Wenn du das umsetzen willst, in dieser Reihenfolge:

### Woche 1: Checklist und Template-Spec
- Pre-Launch-Checkliste in meyso-os/docs/seo/launch-checklist.md committen
- Diese Datei (SEO-Baseline-System.md) committen als Referenz

### Woche 2: Template-Update
- meyso-kmu-template auschecken
- Aktuellen Stand vs Checkliste abgleichen
- Fehlende Komponenten einbauen
- README schreiben

### Woche 3: Skill erstellen
- .claude/skills/seo-baseline/ anlegen
- SKILL.md schreiben
- Example-Files aus meyso-kmu-template kopieren
- Lokal testen: neues Dummy-Projekt starten, Skill greift korrekt

### Woche 4: Template + Skill im echten Projekt nutzen
- Beim nächsten Kunden-Projekt: Template klonen, Skill automatisch aktiv
- Dokumentieren was gut funktioniert, was fehlt
- Iterativ verbessern

---

# Zusammenfassung

**Was du gebaut hast heute:**
- SEO-Monitoring (Agent)
- SEO-Fixes (konkret meyso.de)
- SEO-Research (Bad Dürrheim)

**Was dieses Dokument hinzufügt:**
- SEO-Standards für die Zukunft (Checkliste)
- SEO-Skalierung (Template)
- SEO-Automatisierung (Skill)

**Zeitaufwand um vollständig umzusetzen:**
- Checkliste committen: 5 Min
- Template updaten: 4-6h (verteilt über Woche)
- Skill bauen: 2-3h
- Gesamt: ca. 10h über 2-3 Wochen

**Danach:**
Jedes neue Meyso-Projekt startet mit SEO-Baseline. Der Agent monitored. Du iterierst nur noch.

---

# Nächste konkrete Schritte für heute

Wenn du diesem System folgen willst:

1. **Diese Datei in meyso-os/docs/seo/baseline-system.md committen**
2. **Launch-Checklist als separate Datei extrahieren** (für leichteres Durchgehen)
3. **TASKS.md-Eintrag:** "SEO-Template-Update in Woche XX"
4. **Mit nächstem Projekt:** Checkliste testen, Template-Lücken identifizieren
