# UI Audit: Villa Nina Sardinia

Stand: 09.04.2026
Repo: D:\dev\clients\villa-nina-sardinia
Installed UI Stack: Tailwind CSS v4.0, motion v11.11.17, phosphor-react v1.4.1, next-intl v3.26

---

## Gesamtbewertung: 4.5/5

Das ist das am besten designte Projekt im Portfolio. Editorial-Luxury-Aesthetik mit konsequenter Umsetzung: Fraunces-Serif, mediterranes Farbsystem, Grain-Overlay, Sweep-Button-Animation, Floating-Label-Inputs, Ken-Burns-Hero. Die Kohärenz ist bemerkenswert fuer ein Projekt in Entwicklung. Was fehlt: Mobile-Nav, Scroll-Animations-System und ein paar Micro-Interactions.

---

## Kategorien-Bewertung

### 1. Typography: 5/5

Beste Typografie im Portfolio. Fraunces als Display-Font ist eine A-Wahl fuer ein Luxus-Feriendomizil.

**Positiv:**
- `clamp(3rem, 8vw, 9rem)` auf h1: sehr aggressive Scaling-Kurve, mutig und konsequent
- Fraunces Italic 300 Weight: erzeugt Eleganz die kein Open-Sans oder Inter erreicht
- `.label-editorial`: `0.75rem / font-weight: 500 / text-transform: uppercase / letter-spacing: 0.18em` ist ein konsistentes System das quer im Projekt verwendet wird
- Drop Cap auf Fliesstext (Apartment-Detail, Story-Sektion): editorialer Touch der bei Wettbewerbern fehlt
- JetBrains Mono fuer Copyright: subtiler Kontrast zum Display-Font

**Kleinigkeit:**
- `h2 { font-size: clamp(2rem, 5vw, 4.5rem) }` vs `h3 { clamp(1.5rem, 3vw, 2.5rem) }`: Ratio-Abstände stimmen, aber keine definierte Typescale (z.B. Major Third). Jetzt kein Problem, bei mehr Content-Types wird es inkonsistent.

---

### 2. Color System: 5/5

Mediterranes Farbsystem vollständig in `@theme` implementiert. Best Practice fuer Tailwind v4.

**Positiv:**
- `@theme { --color-bg: #f5f1ea; --color-accent: #c2410c; --color-sea: #2c5f5d }` im globals.css: alles an einem Ort, keine Magic Strings
- Semantische Benennung: `--color-ink` (nicht #1f1b16), `--color-ink-soft`, `--color-line` (Hairlines). Sehr lesbar
- Zwei Akzentfarben mit System: Terracotta (#c2410c) fuer Apartment 1 CTA, Petrol (#2c5f5d) fuer Apartment 2. Konsequente Farbcodierung
- `--color-bg-alt: #ede6d9` fuer subtile Sections-Differenzierung ohne hartes Kontrast-Brechen

**Einzige Luecke:**
- Kein Dark Mode. Fuer ein Feriendomizil ist das akzeptabel (Buchung passiert meist am Desktop tagsüber). Dennoch notiert.

---

### 3. Layout und Spacing: 5/5

`--spacing-editorial: 7.5rem` zwischen Sektionen: generöse Luft die Luxus kommuniziert.

**Positiv:**
- `7.5rem (120px)` Section-Spacing gibt dem Content Raum zu atmen: direkte Übersetzung von "editorial luxury" in Abstände
- 4-Column Footer Grid, 3-Column Apartment-Detail-Grid, 2-Column Story-Layout: konsistente Grid-Philosophie
- Asymmetrische Layouts (Story: Bild + Text in verschiedenen Proportionen) zeigen Designreife
- Card-Komponente: `hover:-translate-y-1` statt grelles Highlight: Zurückhaltung als Statement

**Kleinigkeit:**
- `max-w-7xl` quer im Projekt als Wrapper: konsistent, aber nicht als Custom Token definiert. Bei Redesign muss man suchen.

---

### 4. Motion und Interaction: 4/5

FadeUp-System solide, Sweep-Button-Animation elegant. Scroll-Animation-System fehlt.

**Positiv:**
- `Button.tsx`: `translate-x-full -> translate-x-0` Sweep-Fill in 500ms ease-out-quart: eines der elegantesten Button-Hover-Patterns die ich kenne
- `FadeUp.tsx`: 0.7s, ease-out-quart, 24px Lift, delay-faehig: sauberes Stagger-System
- `CardImage`: `scale-[1.04] saturate-[1.1]` auf hover, 700ms: subtil aber wahrnehmbar
- Ken Burns auf Hero: 18s infinite alternate, sehr langsam und deshalb nicht störend
- `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)` als Named Easing in CSS: professionell

**Fehlend:**
- Kein Scroll-Triggered-Animation-System ausser FadeUp. Parallax auf Hero-Image, section-staggered Reveals fuer Apartment-Cards fehlen
- Header hat keine Motion-Transitions beim Scrollen (kein Blur, kein Shrink)
- Mobile Nav: kein Hamburger-Menu vorhanden in Header.tsx. Desktop-Links sind auf Mobile hidden ohne Alternative

---

### 5. Component Polish: 5/5

Das Grain-Overlay allein hebt dieses Projekt aus dem Tailwind-Template-Masse heraus.

**Positiv:**
- `Grain.tsx`: 4% Opacity SVG-Fractal-Noise mit `mix-blend-multiply`: eliminiert "digital flatness" von Cream-Backgrounds. Selten gesehen, sehr wirkungsvoll
- `Input.tsx`: Bottom-Hairline-Only (kein Box), floating Label mit smooth Transform, Terracotta Underline on Focus: State-of-the-art Form Design
- `Logo.tsx`: Inline SVG mit React, erbt Fonts aus CSS-Variablen, Terracotta-Divider-Linie mit Dot: custom Brand-Identity als Code
- Kein Glass-Effect-Overuse: alles ist zurückhaltend polished statt aufdringlich modern
- Card mit `group-hover:scale-[1.04] sepia-filter`: warme Fotografik-Aesthetik

**Kleinigkeit:**
- `CardImage` hat `filter: sepia(0.06) saturate(1.05)` hardcoded. Bei anderen Bild-Typen (z.B. Icons, Illustrationen) wuerde das stören.

---

### 6. Accessibility: 4/5

Beste Accessibility-Implementierung im Portfolio. Kleine Luecken im Mobile-Navigation-Bereich.

**Positiv:**
- `Input.tsx`: Floating Label korrekt mit `htmlFor` und `useId()` verbunden: Screen-Reader-kompatibel
- `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px }` global definiert: saubere Focus-States
- `Logo.tsx` mit `<title>` im SVG: Accessible Branding
- Semantic HTML quer im Projekt: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`

**Fehlend:**
- Keine mobile Navigation. Header zeigt auf Mobile keine Nav. `md:flex` ist hidden darunter ohne Alternative
- Calendar-Komponente (247 Zeilen): Datumsauswahl ohne ARIA-Attributes auf Cells (role="gridcell", aria-label fuer Datum)
- Kein `prefers-reduced-motion` in FadeUp.tsx oder Button-Sweep: fehlt bei einem Projekt das motionreich ist

---

### 7. Performance Feel: 3/5

Gute Grundlage, aber fehlendes Loading-State-System.

**Positiv:**
- Supabase-Daten werden Server-seitig gefetcht: keine Client-side Waterfall
- Font-Variables auf `<html>` gesetzt: verhindert FOUT
- `next/font` mit `display: swap`: Standardkorrekt

**Fehlend:**
- Keine Skeleton-Loaders auf Booking-Form und Apartment-Detail-Seiten
- Kein `loading.tsx`: bei Supabase-Ladezeit sieht User leere Seite
- Availability-Calendar hat keinen Loading-State waehrend Verfügbarkeits-Daten geladen werden

---

### 8. Innovation Factor: 5/5

Villa Nina ist das kreativste Projekt im Portfolio. Wuerde auf Awwwards "Site of the Day" als Nominee durchgehen.

**Was es einzigartig macht:**
- Grain-Overlay: selten, mutig, sofort erkennbar
- Inline-SVG-Logo als React-Komponente mit CSS-Font-Inheritance: Profis machen das so
- Sweep-Fill-Button mit `translate-x` Mechanik: besser als 99% der Tailwind-UI-Libraries
- Floating-Label-Inputs ohne Box: sieht aus wie Luxury Travel-Booking (Booking.com-Kaliber)
- Ken Burns 18s: subliminal pleasure, nicht bewusst wahrnehmbar aber fuehlbar
- `--color-sea` fuer Apartment 2: zwei Apartments, zwei Farbcodierungen, eine Coherence

---

## Low-Hanging Fruits

### 1. Mobile Navigation (Hamburger-Menu) hinzufügen
**Was:** Header.tsx hat keine mobile Nav. Auf `< md` ist Navigation unsichtbar. Ein einfaches Hamburger-Button + Drawer in `HeaderClient.tsx` Island.
**Dateien:** `components/layout/Header.tsx`, neuer `components/layout/HeaderClient.tsx`
**Impact:** Navigation auf Mobile funktioniert. Kritisch fuer Buchungsflow.
**Zeit:** 25 Min
**Risiko:** Medium (neue Client-Komponente, Hydration testen)

### 2. `prefers-reduced-motion` in FadeUp.tsx
**Was:** `const shouldReduce = useReducedMotion()` importieren und `initial`/`animate` auf `opacity: 1, y: 0` setzen wenn true.
**Dateien:** `components/ui/FadeUp.tsx`
**Impact:** Accessibility fuer Motion-sensitive User
**Zeit:** 5 Min
**Risiko:** Low

### 3. Header Scroll-State mit Blur
**Was:** Sticky Header bekommt beim Scrollen `backdrop-filter: blur(12px); background: rgba(245,241,234,0.85)`. Header.tsx als Server-Komponente bleibt, nur `style` Klasse per `scroll-triggered` CSS oder kleines Client-Island ergänzen.
**Dateien:** `components/layout/Header.tsx`, `app/globals.css`
**Impact:** Header schwimmt elegant über Bilder, wirkt luxurioser
**Zeit:** 15 Min
**Risiko:** Low

### 4. Calendar ARIA-Labels ergänzen
**Was:** In `Calendar.tsx` jede Datums-Zelle mit `aria-label="Tag Monat Jahr"` ausstatten. Booking-Status als `aria-disabled` statt nur visuelle Klasse.
**Dateien:** `components/ui/Calendar.tsx`
**Impact:** Screen-Reader-User koennen Buchung durchfuehren
**Zeit:** 20 Min
**Risiko:** Low

### 5. Availability-Loading-State im Calendar
**Was:** Waehrend `availability marks` von Supabase geladen werden (RPC Call) einen Skeleton-State im Calendar zeigen. Einfacher `isLoading` State mit greyed-out Cells.
**Dateien:** `components/ui/Calendar.tsx`, Apartment-Detail-Page
**Impact:** UX bei langsamem Netz deutlich besser
**Zeit:** 20 Min
**Risiko:** Low

### 6. Footer-Links Hover-Underline ergänzen
**Was:** Footer-Links haben aktuell nur Farb-Transition auf Hover. Eine `underline` mit `underline-offset-4` ergänzen.
**Dateien:** `components/layout/Footer.tsx`
**Impact:** Klareres interaktives Signal, Konsistenz mit Button-Link-Variant
**Zeit:** 5 Min
**Risiko:** Low

---

## Bigger Moves

### 1. Parallax-Scroll-System fuer Hero und Sections (2h)
**Was transformiert wird:** Hero-Bild bekommt `useScroll + useTransform` mit Faktor 0.3: scrollt langsamer als Viewport. Section-Transitions auf Apartment-Cards mit Stagger-FadeUp beim ersten Viewport-Eintritt.
**Warum der Unterschied:** Die statische Version des Heros "zeigt" das Bild. Mit Parallax "erlebt" man es. Für ein Feriendomizil ist das der Unterschied zwischen Katalog und Sehnsucht.
**Zeitaufwand:** 2h (motion.useScroll auf Hero, Stagger auf Cards)
**Risiko:** Low (additiv, kein bestehender Code berührt)
**Dependencies:** `motion` bereits installiert

### 2. Mobile Navigation + Drawer mit Framer Motion (2h)
**Was transformiert wird:** `HeaderClient.tsx` mit Hamburger-Button und Menu-Drawer. Slide-in von rechts (x: "100%" -> x: 0), dimmed backdrop, focus-trapped. Locale-Switcher integriert.
**Warum der Unterschied:** Ohne mobile Nav ist die gesamte Buchungsreise auf Mobile gebrochen. Das ist ein Conversion-Killer.
**Zeitaufwand:** 2h (Komponente + Motion + A11y)
**Risiko:** Medium (testet Hydration, Server/Client Boundary)
**Dependencies:** `motion` bereits installiert

### 3. Booking-Flow micro-Animations (1.5h)
**Was transformiert wird:** Calendar-Selektion hat einen `spring`-Bounce bei Range-Auswahl. Preis-Breakdown fadet in wenn Range ausgewaehlt. Submit-Button zeigt Konfetti-Animation bei Success (einfach, 5-6 particles).
**Warum der Unterschied:** Buchung ist der emotionale Hoehepunkt des User-Flows. Wenn sich das Klicken auf "Buchen" gut anfuehlt, werden mehr Anfragen abgeschickt.
**Zeitaufwand:** 1.5h (drei Micro-Animations)
**Risiko:** Low (additiv)
**Dependencies:** `motion` bereits installiert

### 4. Bild-Gallery mit Lightbox fuer Apartment-Seiten (3h)
**Was transformiert wird:** Apartment-Seiten zeigen aktuell ein einzelnes Hero-Bild. Eine Horizontal-Scroll-Gallery (5-8 Bilder, overflow-x scroll-snap) mit Click-to-Lightbox. Lightbox als `motion.div` Portal mit Blur-Backdrop.
**Warum der Unterschied:** Ferienwohnung-Buchungen werden durch visuelle Qualitaet entschieden. Ein Bild ist zu wenig.
**Zeitaufwand:** 3h (Gallery-Component + Lightbox + Supabase-Storage fuer Bilder)
**Risiko:** Low bis Medium (Supabase Storage muss fuer Bilder konfiguriert werden)
**Dependencies:** Keine neuen

---

## Empfohlene Reihenfolge

**Quick Wins sofort (ca. 90 Min):**
1. Mobile Navigation ist das kritischste Problem (kein Feature, Grundfunktion fehlt). Zuerst angehen.
2. `prefers-reduced-motion` in FadeUp (5 Min, Zero-Risk)
3. Header Scroll-Blur (15 Min, sofort sichtbarer Impact)
4. Calendar ARIA-Labels (20 Min, Accessibility)

**Big Moves nach Prioritaet:**
1. Parallax auf Hero: hoechster visueller Impact pro Stunde Arbeit
2. Booking-Flow micro-Animations: direkt konversionsrelevant
3. Bild-Gallery: Abschluss-Arbeit vor Go-Live

---

## Projekt-spezifische Anmerkungen

Villa Nina ist noch in Entwicklung und hat das groesste UI-Upgrade-Potenzial im Portfolio. Kein Live-Traffic bedeutet: aggressive Aenderungen sind sicher.

Die mobile Navigation ist kein Quick Win sondern ein Pre-Launch-Blocker. Ohne sie ist das Projekt nicht live-faehig.

Das Design-System ist auf einem Level das als Basis fuer ein meyso-kmu-template verwendet werden koennte. Die `@theme` Struktur in globals.css, die Component-Library (Button, Input, Card) und das FadeUp-System sind wiederverwendbar.
