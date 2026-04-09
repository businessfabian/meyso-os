# UI Audit: Hirmax Scheibenbilder

Stand: 09.04.2026
Repo: D:\dev\clients\hirmax-scheibenbilder
Installed UI Stack: Tailwind CSS v3.4.1, Framer Motion v12.38, Lucide React v1.7, Recharts v3.8

---

## Gesamtbewertung: 2.7/5

Hirmax ist ein funktionales Live-Bestellportal fuer Schützenvereine. Das Design-System (Playfair + Outfit, Hirmax-Farben) hat Ansatz und Charakter. Die Umsetzung der Bestell-UX ist durchdacht (drei Input-Modi, Rabattstufen, LocalStorage-Persistenz). Die visuelle Polishing-Schicht ist aber der schwächste im Portfolio. Viele Komponenten sehen nach "erstem Draft" aus: Inline-Style-Fragmente, fehlende Loading-States, generische Cards. Da es ein Live-Portal ist: alle Aenderungen mit Bedacht, insbesondere am Auth-Flow und Order-Submit.

---

## Kategorien-Bewertung

### 1. Typography: 3/5

Playfair Display als Serif-Heading-Font ist eine gute Entscheidung fuer ein traditionsreiches Schützen-Brand. Die Umsetzung ist aber nicht konsequent.

**Positiv:**
- Playfair Display fuer alle `h1-h4`: verleiht der Site Wuerde und Tradition. Passend zur Marke
- `font-display: "swap"` korrekt konfiguriert
- Outfit als Body-Font: modern, gut lesbar bei kleinen Groessen

**Baustellen:**
- Kein fluid `clamp()` auf Hero-Title: bei verschiedenen Breakpoints kann es zu Overflow oder zu kleiner Darstellung kommen
- `h2: 28px` hardcoded in `tailwind.config.ts extend.fontSize`: zu klein fuer einen prominenten Section-Header auf Desktop. Wirkt eher wie ein Subsection-Title
- Body-Font-Size 15px ist grenzwertig klein fuer B2B-Portale (Schützenvereine haben tendenziell aeltere Nutzer). 16px waere besser
- Kein konsistentes Label-System wie `.label-editorial` oder `.section-label`. Labels werden inline definiert

---

### 2. Color System: 3/5

Hirmax-Farben sind klar definiert und in tailwind.config.ts eingetragen. Anwendung ist konsistent aber eng.

**Positiv:**
- `hirmax-black: #1A1918`, `hirmax-red: #B8342A`, `hirmax-bg: #F8F7F4`: semantisch benannte Custom Colors in Tailwind-Config
- CSS Custom Properties in globals.css (`--hirmax-red`, `--hirmax-bg`, etc.): doppeltes System aber vollständig
- Selection-Color auf Rot: kleines Detail, stimmig zur Brand

**Baustellen:**
- Palette ist sehr eng: nur 9 Farbtöne definiert. Keine Hover-States, keine Opacity-Stufen als Tokens. In der Praxis werden dann Inline-Styles mit `rgba(...)` verwendet
- Kein Dark Mode. B2B-Portal: akzeptabel, aber Abend-Bestellungen bei schlechtem Raumlicht sind unangenehm
- `hirmax-gray-600 / gray-400 / gray-200`: eine sinnvolle Gray-Scale, aber im Code wird trotzdem oft direkt `text-gray-500` (Tailwind-Default) gemischt. Inkonsistenz

---

### 3. Layout und Spacing: 3/5

Grundstruktur stimmt. Spacing ist nicht systematisch.

**Positiv:**
- Responsive Grid in ProduktSection (4-col Desktop, 1-col Mobile): sauber
- 2-Column AboutSection (Text + Visual): ordentliches Layout
- Login-Page: zentrierte Card mit max-width: einheitlich und korrekt

**Baustellen:**
- `BestellFormular.tsx` (948 Zeilen): Layout-Entscheidungen sind durch viele `flex`/`gap` Inline-Styles dokumentiert, nicht durch konsistente Klassen
- Spacing-Werte sind gemischt: manchmal `mb-4`, manchmal `style={{ marginBottom: 16 }}`, manchmal `space-y-3`. Drei parallele Systeme
- Admin-Dashboard: Card-Grid hat kein festes Spacing-Token. KPI-Cards sitzen unterschiedlich weit auseinander je nach Screen-Size

---

### 4. Motion und Interaction: 3/5

Framer Motion installiert und an strategischen Stellen eingesetzt. Nicht konsequent angewendet.

**Positiv:**
- HeroSection: `fadeUp` Animations mit `useReducedMotion()` korrekt implementiert. Respektiert Accessibility
- ProduktSection: staggered Card-Animations (0.1s Delay pro Card): funktioniert
- CTABanner: `whileInView` mit FadeIn: sauber
- CountUp in HeroSection: Ease-Out-Cubic, 1500ms, schoen

**Baustellen:**
- BestellFormular hat null Motion: Warenkorb-Eintrag wird ohne Animation hinzugefuegt, Schritt-Wechsel ist instant, Success-State fadet nicht ein
- NavClient: kein Smooth-Open auf Mobile-Drawer. `opacity + translateX` Transition fehlt
- Admin-Dashboard: keine Animations. KPI-Cards laden instant ohne Fade-in
- Login Multi-Step: Step-Wechsel ist instant ohne Transition zwischen den States

---

### 5. Component Polish: 2.5/5

Das Ziel-Scheiben-SVG im Hero ist ein origineller Brand-Touch. Der Rest des visuellen Polishings ist thin.

**Positiv:**
- HeroSection SVG: 6 konzentrische Ringe, Fadenkreuz, rotes Zentrum (`#B8342A`): direkte Brand-Verbindung zu Scheibenbilder. Clever
- CTABanner: dekorative Hintergrund-Ringe wiederholen das Kreismotiv: Konsistenz
- Button-Komponente: polymorphic (`<a>` oder `<button>` je nach Props), Variants korrekt implementiert

**Baustellen:**
- ProduktSection Cards haben einen "hover ghost ring" als Effekt (absolut positionierte semi-transparente Border): gute Idee, aber wirkt unfertig (Border springt in Position ohne Transition)
- Kein Glass-Effect auf Nav, kein Blur. Nav wirkt schwer und undifferenziert beim Scrollen
- Admin-Dashboard: KPI-Cards sind reine Zahlen-Boxen ohne visuellen Charakter. Recharts-Charts vorhanden aber ohne Brand-Farben konfiguriert
- Keine Skeleton-Loaders im gesamten Bestellfluss

---

### 6. Accessibility: 2/5

Groesste strukturelle Luecke im Projekt. Besonders kritisch da es ein Bestell-Portal ist.

**Positiv:**
- `useReducedMotion()` in HeroSection: korrekt
- `font-display: "swap"`: verhindert FOUT
- Login: Labels auf allen Form-Feldern vorhanden
- Registrierung: Honeypot korrekt mit `aria-hidden`

**Fehlend:**
- NavClient Mobile-Menu: kein Focus-Trap. Beim Öffnen bleibt der Fokus nicht im Drawer
- Hamburger-Button: kein `aria-expanded` State
- BestellFormular Menge-Controls (- / Input / +): kein `aria-label` auf den +/- Buttons. Screen-Reader liest nur "-" und "+"
- Discount-Progress-Bar: kein `role="progressbar"`, kein `aria-valuenow`/`aria-valuemax`/`aria-valuetext`
- File-Upload: kein zugaengliches Styling der Input-Elemente, kein `aria-describedby` fuer Einschraenkungen (max 3 Files, 5MB)
- Admin-Sidebar: Navigation ohne `role="navigation"` und ohne `aria-label`

---

### 7. Performance Feel: 2/5

Das schwächste Kategorie. Kein Loading-State-System im wichtigsten Flow (Bestellen).

**Positiv:**
- LocalStorage fuer Warenkorb-Persistenz: Cart bleibt erhalten wenn Browser geschlossen
- ISR auf Produkt-Pages (revalidate: 60): schnelle Content-Delivery
- Sanity als CMS fuer Artikel: Änderungen live ohne Re-Deploy

**Fehlend:**
- BestellFormular: kein Loading-State wenn Bestellung abgeschickt wird. User klickt Submit und nichts passiert visuell bis Response kommt
- Letzte-Bestellung laden: kein Skeleton/Spinner während `/api/bestellungen` abgefragt wird
- Auth-Check auf Mount in BestellFormular: User sieht das ganze Formular-Layout kurz bevor ggf. Redirect kommt
- Admin-Dashboard: KPI-Cards laden ohne Skeleton. Zahlen "poppen" in die Anzeige

---

### 8. Innovation Factor: 2.5/5

Das Scheibenbilder-SVG ist originell. Sonst ist das Design ein solides B2B-Portal ohne besonderen Charakter.

**Was es einzigartig macht:**
- Ziel-Scheibe als Hero-Visual: direkt brand-relevant, kein anderes Portal hat das
- Drei-Modi-Bestellformular (Schnell / Katalog / Letzte Bestellung): durchdachte UX fuer Stammkunden
- Rabattstufen-Visualisierung mit Progress-zu-naechster-Stufe: motivierend fuer groessere Bestellungen

**Was generisch wirkt:**
- Restliche Sections sehen aus wie ein Standard-Unternehmens-Website-Template
- Admin-Dashboard ist ein generisches Bootstrap-Style-Dashboard ohne Brand-Integration
- Login-Page: funktional aber ohne visuellen Charakter

---

## Low-Hanging Fruits

### 1. NavClient: aria-expanded und Focus-Trap
**Was:** `aria-expanded={menuOpen}` auf Hamburger-Button. `useEffect` der bei `menuOpen = true` den ersten Link im Drawer fokussiert. Tab-Trap: letzte Link + Shift+Tab geht zu Hamburger.
**Dateien:** `components/islands/NavClient.tsx`
**Impact:** Mobile Navigation zugaenglich fuer Keyboard und Screen-Reader
**Zeit:** 20 Min
**Risiko:** Low (rein additiv, kein existing Behavior geaendert)

### 2. Bestellformular Submit-Button Loading-State verbessern
**Was:** Aktuell unklar ob Submit-Button einen visuellen Loading-State hat. Wenn nicht: `disabled` Klasse + Spinner-Icon (Lucide `Loader2` mit `animate-spin`) waehrend `isSubmitting`.
**Dateien:** `modules/produkte/BestellFormular.tsx`
**Impact:** User weiss dass die Bestellung verarbeitet wird. Verhindert Doppel-Submits
**Zeit:** 15 Min
**Risiko:** Low

### 3. +/- Mengen-Buttons mit aria-label
**Was:** Jeder `-` Button bekommt `aria-label={Menge von \${artikel.name} verringern}`. Jeder `+` Button entsprechend.
**Dateien:** `modules/produkte/BestellFormular.tsx`
**Impact:** Screen-Reader-User koennen Mengen anpassen
**Zeit:** 15 Min
**Risiko:** Low

### 4. Discount-Progress-Bar als echte Progressbar
**Was:** `<div>` mit `role="progressbar" aria-valuenow={gesamtMenge} aria-valuemax={500} aria-valuetext={gesamtMenge + " von 500 Stueck fuer 10% Rabatt"}`.
**Dateien:** `modules/produkte/BestellFormular.tsx`
**Impact:** Accessible, Screen-Reader liest Fortschritt korrekt vor
**Zeit:** 10 Min
**Risiko:** Low

### 5. Nav Backdrop-Blur beim Scrollen
**Was:** `NavClient.tsx` hat `scrolled` State bereits. Ergänzen: bei `scrolled`: `backdrop-filter: blur(12px)` + `background: rgba(248,247,244,0.9)` statt solid weiss.
**Dateien:** `components/islands/NavClient.tsx`
**Impact:** Nav wirkt moderner, Content scheint durch
**Zeit:** 10 Min
**Risiko:** Low

### 6. ProduktSection Card-Hover-Transition reparieren
**Was:** "Ghost Ring" Hover-Effekt springt in Position. Eine CSS `transition: all 0.2s ease` auf den absolut-positionierten Ring-Div ergänzen.
**Dateien:** `components/sections/ProduktSection.tsx`
**Impact:** Hover-State sieht polished aus statt abrupt
**Zeit:** 5 Min
**Risiko:** Low

### 7. Body-Font-Size auf 16px anpassen
**Was:** `body { font-size: 15px }` in globals.css auf 16px anpassen. Tailwind-Config `body: ['16px', ...]` anpassen.
**Dateien:** `app/globals.css`, `tailwind.config.ts`
**Impact:** Bessere Lesbarkeit fuer alle Altersgruppen. WCAG 1.4.4 Lesbarkeit
**Zeit:** 5 Min
**Risiko:** Low bis Medium (kann Layout-Verschiebungen in kleinen Komponenten auslösen, testen)

---

## Bigger Moves

### 1. BestellFormular Step-Transitions und Feedback-Loop (2h)
**Was transformiert wird:** Beim Hinzufügen eines Artikels zur Warenkorb: kurze Bounce-Animation auf dem Warenkorb-Counter. Step-Wechsel (Schnell/Katalog/Letzte Bestellung) mit Framer Motion `AnimatePresence` + Slide-Transition. Success-State mit Konfetti oder Check-Animation.
**Warum der Unterschied:** Bestellung aufgeben ist der wichtigste Moment im Portal. Wenn sich das Bestellen gut anfühlt, bestellen Kunden mehr und häufiger. Aktuell ist der Flow klinisch und ohne Feedback.
**Zeitaufwand:** 2h
**Risiko:** Medium (BestellFormular ist gross und komplex, testen)
**Dependencies:** Framer Motion bereits installiert

### 2. Admin-Dashboard visuelles Upgrade (2-3h)
**Was transformiert wird:** KPI-Cards mit Trend-Indikatoren (Pfeil oben/unten, Vergleich zur Vorwoche). Recharts-Charts mit `hirmax-red` als Primärfarbe konfiguriert. Timeline mit besserer Typo und Icon-Set. Sidebar mit aktivem State (aktive Route hervorgehoben).
**Warum der Unterschied:** Das Admin-Dashboard ist Max Hirts täglich genutztes Tool. Ein gut aussehender Admin hat direkten Einfluss auf die Arbeitsfreude und die wahrgenommene Qualität des Portals.
**Zeitaufwand:** 2-3h
**Risiko:** Low (nur Admin-Routes, keine Kundenwirkung)
**Dependencies:** Lucide React bereits installiert, Recharts vorhanden

### 3. Login-Flow Animation und Error-States (1.5h)
**Was transformiert wird:** Multi-Step State-Machine bekommt AnimatePresence zwischen den Steps (Fade + Slide). Error-States mit `motion.div` Shake-Animation auf dem Formular-Block (horizontal hin und her). Success-State mit sanftem Gruen-Pulse.
**Warum der Unterschied:** Der Login-Flow ist der erste Eindruck jedes B2B-Kunden. "Kundennummer eingeben" auf einer generischen weissen Page ist kein guter erster Eindruck.
**Zeitaufwand:** 1.5h
**Risiko:** Low (Login-Flow läuft separat, keine Order-Logik berührt)
**Dependencies:** Framer Motion bereits installiert

---

## Empfohlene Reihenfolge

**Quick Wins sofort (ca. 80 Min):**
1. ProduktSection Card-Hover-Transition (5 Min, sofort sichtbar)
2. Submit-Button Loading-State (15 Min, kritisch für UX)
3. Nav Backdrop-Blur (10 Min, moderner Eindruck)
4. aria-expanded + Focus-Trap auf Nav (20 Min, Accessibility)
5. Menge-Buttons aria-label + Progress-Bar role (25 Min, Accessibility)

**Big Moves nach Prioritaet:**
1. Login-Flow Animation: erster Eindruck fuer jeden Kunden. Niedrigstes Risiko unter den Bigger Moves
2. BestellFormular Step-Transitions: hoechster Einfluss auf Conversion/Nutzungshäufigkeit
3. Admin-Dashboard: Max Hirt direkt betroffen, hohe Nutzungsfrequenz

---

## Projekt-spezifische Anmerkungen

### RISIKO-FLAGS fuer Live-Bestellportal

**MEDIUM - Rate Limiting Fail-Open:**
`lib/rateLimit.ts` ist fail-open by design: wenn Supabase nicht erreichbar, werden Requests durchgelassen. Das ist eine bewusste Entscheidung (graceful degradation), aber bei UI-Aenderungen die neue API-Calls einfuehren: sicherstellen dass neue Endpoints ebenfalls rate-limitiert sind.

**MEDIUM - BestellFormular ohne CSRF-Nachweis:**
In der Code-Review ist kein CSRF-Token im BestellFormular sichtbar. Vor UI-Aenderungen am Form-Submit: `middleware.ts` pruefen ob CSRF-Schutz vorhanden ist. Wenn nicht: vor Bigger Moves ergaenzen.

**MEDIUM - Admin kein 2FA:**
Admin-Dashboard ist nur per Password geschuetzt. Bei UI-Aenderungen am Login: keine Aenderungen am Auth-Flow ohne Abstimmung mit Max Hirt.

**LOW - Session-Ablauf ohne UI-Warning:**
7-Tage-Session. User der nach 7 Tagen bestellen will, wird beim Submit auf Login umgeleitet und verliert den aktuellen Cart-State (nicht aber localStorage). Das ist kein UI-Bug sondern ein UX-Gap. Koennte mit einem "Session laeuft bald ab" Toast behoben werden - aber das ist ein Feature, kein UI-Fix.

**LOW - File-Upload ohne Progress:**
`/api/upload` nimmt Dateien bis 5MB entgegen. Bei langsamem Upload sieht der User nichts. Ein `<progress>` Element waere einfach zu ergaenzen und ist UI-Polish.

**SAFE - Alle Quick Wins oben aufgelistet:**
aria-labels, Hover-Transitions, Backdrop-Blur, Font-Size: alle rein visuell, kein Einfluss auf Auth-Flow, Rate-Limiting oder Bestell-Logik. Sicher umzusetzen.
