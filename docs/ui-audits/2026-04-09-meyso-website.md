# UI Audit: meyso-website

Stand: 09.04.2026
Repo: D:\dev\meyso\meyso-website
Installed UI Stack: Tailwind CSS v3.4.19, Framer Motion v12.38, GSAP v3.14.2, Lucide React v1.7

---

## Gesamtbewertung: 4.1/5

Das Aushängeschild funktioniert. Die Animationsschicht ist solide und durchdacht, die Custom-Cursor-Experience ist 2026-tauglich, und das Designsystem ist kohärent. Was fehlt: Dark Mode, Skeleton-Loaders, und die Implementierung stützt sich noch zu stark auf globals.css statt auf composable Tailwind-Utilities.

---

## Kategorien-Bewertung

### 1. Typography: 4/5

Gut gewählt. Instrument Serif als Display-Font schafft Charakter, Geist als Sans funktioniert sauber.

**Positiv:**
- `clamp(52px, 5.8vw, 86px)` fuer h1 in HeroSection, fluid responsive
- Letter-spacing -3px auf grossen Headings sieht modern aus
- MorphLine-Komponente cycelt mit Italic-Serif: visuell stark

**Baustellen:**
- Kein Variable Font genutzt: Instrument Serif wird als static font geladen, kein optisches Sizing
- Line-height-Skala fehlt: 1.03 auf h1, aber kein durchgaengiges Typografie-System in Tailwind-Config
- `footer colHeadStyle` als Inline-Objekt in Footer.tsx hardcoded statt in globals.css oder Tailwind-Config

---

### 2. Color System: 3.5/5

Solides Primär-Setup, aber kein Token-System und kein Dark Mode.

**Positiv:**
- Konsistentes Primär-Blau (#1847F0) quer durch alle Komponenten
- Gradient-Einsatz im Aurora-System subtil und stimmig
- `rgba(24,71,240,0.12)` Analyse-Banner zeigt gutes Verständnis für Alpha-Layering

**Baustellen:**
- Keine CSS Custom Properties: alle Colors sind Hex-Werte direkt in globals.css und Inline-Styles. Kein `--color-primary`, kein `--color-surface`. Token-Refactor wäre 1-2h Arbeit
- Kein Dark Mode: 2026 ist Dark Mode kein Feature, es ist Erwartung
- `#6E6E80`, `#EBEBF0`, `#FAFAFA` erscheinen an verschiedenen Stellen hardcoded ohne semantischen Namen

---

### 3. Layout und Spacing: 4/5

Hero-Grid ist stark. Visueller Rhythmus stimmt. Whitespace wird als Designelement eingesetzt.

**Positiv:**
- `.hero` nutzt `grid-template-columns: 55% 45%` mit `gap: 60px`: präzises asymmetrisches Layout
- `max-width: 1320px` Wrapper auf Hero: groesszuegig ohne zu breit zu werden
- Section-Padding `140px 48px 80px` auf Hero: Luft nach oben bewusst eingesetzt

**Baustellen:**
- Kein Spacing-Scale in Tailwind-Config: spacing wird quer im Projekt als px-Werte in Inline-Styles verstreut (z.B. `style={{ marginTop: 24 }}` in HeroSection)
- Mobile Breakpoints (768px, 480px) nur in globals.css, nicht als Tailwind-Screens konfiguriert
- `padding: "14px 16px"` Analyse-Banner Inline-Style: inkonsistent mit Tailwind-Utility-Ansatz

---

### 4. Motion und Interaction: 5/5

Hier lebt die Seite. Die Animationsschicht ist die stärkste Stärke dieser Seite.

**Positiv:**
- **Aurora-System:** Drei unabhaengige Blobs mit eigenen Keyframe-Timings (12s/18s/24s), sehr organisch
- **Parallax auf Scroll:** useScroll + useTransform fuer Code-Block (Faktor 0.12) und Badges (Faktor 0.05) differenziert
- **TiltCard:** Mouse-Tracking mit `perspective(800px) rotateX/Y`, saubere Rueckfall-Transition (0.6s)
- **CursorTracker:** Separater Dot (direkt) und Ring (gelaggt 0.12 Lerp) mit Mix-Blend-Mode: sehr raffiniert
- **Reduced Motion:** `useReducedMotion()` korrekt eingesetzt in HeroSection, alle Animations deaktivierbar
- **IntersectionObserver** in Reveal.tsx mit rootMargin -40px: verhindert zu fruehes Triggern

**Kleinigkeit:**
- `ScrollSection.tsx` nutzt kein `useReducedMotion()`, nur `Reveal.tsx`. Inkonsistenz im eigenen System

---

### 5. Component Polish: 4/5

Code-Window im Hero ist ein echter Eyecatcher. Cards und Buttons sind sauber.

**Positiv:**
- Code-Window mit Mac-Dots, Syntax-Highlighting, Cursor-Blink: authentisch und liebevoll
- Metric-Badges mit subtil unterschiedlichem Parallax vom Code-Block: Tiefengefühl
- `.btn-dark:hover` mit Transform -2px + Box-Shadow: klassisch, funktioniert

**Baustellen:**
- `analyse-banner` in HeroSection.tsx komplett als Inline-Style geschrieben (12+ Properties): schwer wartbar
- Footer: colHeadStyle als lokales Objekt definiert statt ausgelagert
- Kein Glass-Effect auf Nav: andere 2026-Sites nutzen `backdrop-filter: blur + rgba` auf Nav systematischer

---

### 6. Accessibility: 3/5

Grundlagen vorhanden. Lücken bei Focus Management und ARIA.

**Positiv:**
- `useReducedMotion()` korrekt implementiert
- Hamburger-Button hat `aria-label="Menu öffnen"`
- Honeypot-Feld im ContactForm korrekt mit `aria-hidden="true"` und `tabIndex={-1}`
- Labels auf allen Form-Feldern vorhanden

**Baustellen:**
- Mobile-Menu: kein Focus-Trap wenn offen. Tab navigiert durch Menu und dahinter liegende Links
- CursorTracker: kein Cleanup bei Element-Entfernung (addEventListener auf `document.querySelectorAll`)
- Nav-Dropdown: öffnet nur per Hover (`:hover` in CSS). Tastatur-Nutzer können Dropdown nicht triggern
- Kein `aria-expanded` auf Hamburger-Button bei Zustandswechsel

---

### 7. Performance Feel: 2.5/5

Animationen beim Load vorhanden, aber kein Loading-State-System.

**Positiv:**
- ISR mit `revalidate: 60` in page.tsx: schnelle Auslieferung von Sanity-Daten
- Framer Motion scroll-Events sind `passive: true` in NavClient
- IntersectionObserver in Reveal.tsx lazy-triggered

**Baustellen:**
- Keine Skeleton-Loaders: wenn Sanity-Daten laden, gibt es keinen visuellen Platzhalter
- Kein `loading.tsx` in App Router vorhanden
- ContactForm: kein Optimistic UI. Nutzer sieht "Sende..." ohne visuelles Feedback am Formular-Body

---

### 8. Innovation Factor: 4/5

Meyso.de hat ein Gesicht. CursorTracker, Aurora, TiltCard, MorphLine: das ist kein Tailwind-Template.

**Was es einzigartig macht:**
- Custom Cursor mit Lerp-Animation und Mix-Blend-Mode ist selten auf deutschen Business-Sites
- Code-Window als Hero-Visual ist thematisch passend und authentisch (zeigt was du baust)
- Aurora-System mit 3 Blobs kombiniert mit Dot-Grid: subtil, nicht kitschig
- MorphLine mit Serif-Italic: emotional stärker als Standard-Typewriter-Effects

**Was generisch wirkt:**
- Service-Cards mit Hover-Left-Border: 2023er Pattern, viele Tailwind-Templates nutzen das
- FAQ Accordion: vollständig generisch
- CTA-Buttons Pill-Shape mit `hover: translateY(-2px)`: Standard

---

## Low-Hanging Fruits

### 1. CSS Custom Properties einführen fuer Colors
**Was:** `--color-primary: #1847F0`, `--color-ink: #0C0C0E`, `--color-surface: #FAFAFA` als :root-Variablen in globals.css, alle Hardcoded-Hex-Werte ersetzen.
**Dateien:** `app/globals.css`
**Impact:** Fundament fuer Dark Mode, wartbarer Code, eine Wahrheitsquelle
**Zeit:** 20-30 Min
**Risiko:** Low

### 2. Analyse-Banner aus Inline-Style in CSS-Klasse auslagern
**Was:** `analyse-banner` in HeroSection.tsx hat 12+ Inline-Style-Properties. Als `.analyse-banner` in globals.css auslagern.
**Dateien:** `app/components/HeroSection.tsx`, `app/globals.css`
**Impact:** Sauberer Code, einfacher zu editieren
**Zeit:** 10 Min
**Risiko:** Low

### 3. `aria-expanded` auf Hamburger-Button
**Was:** Beim Toggle `menuOpen` auch `aria-expanded={menuOpen}` auf Button setzen.
**Dateien:** `app/components/NavClient.tsx`
**Impact:** Screen-Reader-User verstehen Menu-Zustand
**Zeit:** 5 Min
**Risiko:** Low

### 4. Nav-Dropdown per Keyboard erreichbar machen
**Was:** Statt CSS-only `:hover` ein `onFocus`/`onBlur` oder `onClick` auf `.nav-dropdown-trigger` ergänzen.
**Dateien:** `app/globals.css`, `app/components/NavClient.tsx`
**Impact:** Tastatur-Navigation funktioniert, WCAG 2.1 AA Level
**Zeit:** 20 Min
**Risiko:** Low

### 5. Backdrop-Blur auf Nav ausbauen
**Was:** Nav hat aktuell kein `backdrop-filter`. Bei scrolled-State ein `backdrop-filter: blur(16px); background: rgba(255,255,255,0.85)` ergänzen.
**Dateien:** `app/globals.css` (.nav-scrolled Klasse), `app/components/NavClient.tsx`
**Impact:** Moderner Glass-Effect, sieht 2026 aus
**Zeit:** 10 Min
**Risiko:** Low

### 6. `useReducedMotion()` in ScrollSection.tsx ergänzen
**Was:** `Reveal.tsx` nutzt es, `ScrollSection.tsx` nicht. Inkonsistenz beheben.
**Dateien:** `app/components/ScrollSection.tsx`
**Impact:** Consistency, Accessibility für Motion-sensitive User
**Zeit:** 5 Min
**Risiko:** Low

### 7. loading.tsx fuer App Router anlegen
**Was:** Einfache Skeleton-Version des Layouts als `app/loading.tsx`. Mindestens eine Animation (`animate-pulse` auf Platzhalter-Bloecke).
**Dateien:** `app/loading.tsx` (neu)
**Impact:** Wahrgenommene Performance besser, kein leerer Screen beim ISR-Miss
**Zeit:** 20 Min
**Risiko:** Low

---

## Bigger Moves

### 1. Dark Mode mit CSS Custom Properties (2-3h)
**Was transformiert wird:** Komplettes Color-System auf CSS Custom Properties migrieren, dann `[data-theme="dark"]` Variante einführen. ThemeToggle-Komponente (wie bei ToolRadar bereits vorhanden) hinzufügen.
**Warum der Unterschied:** 2026 erwarten Developer und Tech-affine Nutzer Dark Mode. Meyso.de richtet sich an genau diese Zielgruppe. Fehlendes Dark Mode ist ein subtiler Trust-Signal-Verlust.
**Zeitaufwand:** 2-3h (1h Migration Colors, 1h Dark-Mode-Varianten, 0.5h ThemeToggle)
**Risiko:** Medium (viele Dateien berührt)
**Dependencies:** Keine neuen

### 2. Radix UI Primitives fuer Nav-Dropdown und FAQ (2h)
**Was transformiert wird:** Nav-Dropdown auf `@radix-ui/react-navigation-menu` migrieren (ARIA, Keyboard, Fokus-Management automatisch). FAQ Accordion auf `@radix-ui/react-accordion`.
**Warum der Unterschied:** Eliminiert alle Accessibility-Lücken mit einer Abhängigkeit. Keyboard-Navigation, ARIA, Focus-Trap: alles gratis.
**Zeitaufwand:** 2h (Installation + Migration beider Komponenten)
**Risiko:** Medium (Styling muss angepasst werden)
**Dependencies:** `@radix-ui/react-navigation-menu`, `@radix-ui/react-accordion` (~50kB gzipped)

### 3. Sanity-gesteuerte Testimonials-Sektion mit Animation (3h)
**Was transformiert wird:** Neue Sektion "Kundenstimmen" mit horizontalem Auto-Scroll (Marquee-Prinzip, aber mit Cards) oder Testimonial-Carousel. Content aus Sanity CMS. Framer Motion `AnimatePresence` fuer smooth transitions.
**Warum der Unterschied:** Trust-Building an genau der richtigen Position (zwischen Portfolio und Kontakt). Bewertungs-Daten (bewertungen) werden bereits aus Sanity gefetcht aber nicht sichtbar gezeigt.
**Zeitaufwand:** 3h (Sanity Schema checken, Komponente bauen, Animation)
**Risiko:** Low (rein additiv, keine bestehenden Komponenten berührt)
**Dependencies:** Keine neuen

### 4. Skeleton Loader System (1.5h)
**Was transformiert wird:** `loading.tsx` fuer alle Data-heavy Routes. `SkeletonCard` Primitiv mit `animate-pulse`. In HomeServer.tsx als Suspense-Boundary einsetzen.
**Warum der Unterschied:** Wahrgenommene Performance ist Marketing. Vercel Edge + ISR ist schnell, aber bei Cache-Miss sieht der User ein leeres Interface. Skeleton-Loaders sind der Standard bei modernen Sites 2026.
**Zeitaufwand:** 1.5h
**Risiko:** Low
**Dependencies:** Keine neuen

---

## Empfohlene Reihenfolge

**Quick Wins zuerst (ca. 90 Min gesamt):**
1. Backdrop-Blur auf Nav (10 Min, sofort sichtbar)
2. `aria-expanded` + Keyboard Nav-Dropdown (25 Min, kritisch fuer Accessibility)
3. `useReducedMotion()` in ScrollSection (5 Min, Konsistenz)
4. Analyse-Banner auslagern (10 Min, Hygiene)
5. CSS Custom Properties beginnen (30 Min, Fundament fuer Bigger Moves)

**Big Moves strategisch:**
1. CSS Custom Properties + Dark Mode: tun wenn naechste groessere Session Zeit ist. Waere #1-Prioritaet fuer Profil-Schärfung
2. Skeleton Loader System: tun vor naechstem Marketing-Push, senkt Bounce Rate
3. Testimonials-Sektion: tun wenn genuegend Kundenfeedback vorhanden

---

## Projekt-spezifische Anmerkungen

meyso.de ist das Aushängeschild fuer alle Projekte. Jeder Quick Win hier hat direkte Auswirkung auf die wahrgenommene Qualität von Meyso als Developer. Quick Wins an diesem Repo haben den hoechsten ROI im Portfolio.

Der hoechste Hebel: Dark Mode + CSS Custom Properties. Wenn jemand die Site auf dem Smartphone abends aufruft und sie blendet, ist das erste Eindruck negativ. Das behebt die Kernluecke des sonst starken UI-Systems.
