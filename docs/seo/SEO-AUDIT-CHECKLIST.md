# SEO Audit Checklist

**Zweck:** Referenz-Dokument, das definiert was ein gut-optimiertes Meyso-Projekt haben muss. Gilt für alle Projekte (meyso.de, toolradar.de, Kundenprojekte).

**Stand:** April 2026, basierend auf Whitespark Local Search Ranking Factors 2026 und aktuellen Google-Core-Update-Realitäten.

**Wie nutzen:**
1. Pro Projekt die Status-Datei in `project-status/` öffnen
2. Diese Checklist Punkt für Punkt durchgehen
3. Jeder Punkt: ✅ erfüllt, ⚠️ teilweise, ❌ offen
4. Offene Punkte als Tasks in TASKS.md übertragen

---

## Kategorie 1: Technical SEO Foundation

**T1.1: Lighthouse Performance Score ≥ 90**
- Warum: Core Web Vitals sind weiterhin Ranking-Faktor. LCP unter 2.5s, INP unter 200ms, CLS unter 0.1.
- Wie prüfen: Chrome DevTools → Lighthouse → Mobile + Desktop
- Risiko bei Missachtung: Sichtbarer Ranking-Verlust, besonders mobile

**T1.2: Next.js ISR oder SSG für statische Inhalte**
- Warum: Schnellere First Paint, bessere Core Web Vitals, günstigeres Hosting
- Wie prüfen: Code-Review auf `generateStaticParams` oder `revalidate`
- Meyso-Standard: Marketing-Seiten als SSG, dynamische Inhalte als ISR

**T1.3: Sitemap.xml vorhanden und gültig**
- Warum: Google und AI-Crawler nutzen Sitemaps für Discovery
- Wie prüfen: `curl https://domain.de/sitemap.xml` muss valides XML liefern
- Häufiger Bug: Nach Seiten-Löschung verweist Sitemap noch auf 404er

**T1.4: robots.txt korrekt konfiguriert**
- Warum: Falsch konfiguriertes robots.txt kann komplette Seiten blockieren
- Wie prüfen: `curl https://domain.de/robots.txt`, Dev-Pfade (admin, api) geblockt, sitemap verlinkt
- Typischer Fehler: `Disallow: /` bleibt aus Dev-Phase stehen

**T1.5: HTTPS mit gültigem Zertifikat**
- Warum: Ranking-Faktor seit 2014, Trust-Signal
- Wie prüfen: Browser zeigt Schloss-Symbol, SSL Labs Check bei Zweifel

**T1.6: Mobile-Friendly Viewport und Responsive Design**
- Warum: Mobile-first Indexing ist Standard
- Wie prüfen: Chrome DevTools Responsive Mode, alle Breakpoints

**T1.7: Strukturierte Daten (Schema.org) implementiert**
- Warum: Rich Snippets, AI-Systeme lesen strukturierte Daten bevorzugt
- Wie prüfen: Google Rich Results Test Tool
- Pro Seitentyp: Article (Blog), LocalBusiness (Meyso selbst), Service (Leistungsseiten), FAQPage (FAQ-Bereiche), Organization

**T1.8: Keine 404-Fehler auf bestehende interne Links**
- Warum: Zerstört User Experience und Crawl-Budget
- Wie prüfen: Screaming Frog Crawl oder Online-Tool wie brokenlinkcheck.com

**T1.9: Canonical Tags korrekt gesetzt**
- Warum: Verhindert Duplicate Content, besonders bei Parametern wie ?utm_source
- Wie prüfen: Quelltext-View, `<link rel="canonical">` vorhanden und korrekt

**T1.10: HTTP Security Headers**
- Warum: Trust-Signal für Google, außerdem tatsächlich sicherer
- Wie prüfen: securityheaders.com Score B oder besser
- Mindestens: Strict-Transport-Security, Content-Security-Policy (zumindest basic)

---

## Kategorie 2: On-Page SEO

**O2.1: Einzigartige Title-Tags pro Seite**
- Warum: Title ist immer noch primärer Ranking-Faktor
- Wie prüfen: Screaming Frog oder Browser-DevTools auf jeder wichtigen Seite
- Format: Primär-Keyword | Sekundär-Info | Brand, max 60 Zeichen

**O2.2: Einzigartige Meta-Descriptions**
- Warum: CTR-Faktor in Search-Ergebnissen
- Wie prüfen: Manuell pro Seitentyp
- Format: 140-160 Zeichen, aktive Ansprache, konkretes Angebot

**O2.3: H1 pro Seite, exakt einmal**
- Warum: Klare Seitenhierarchie für Google
- Wie prüfen: HTML-Quelltext nach `<h1>` suchen
- Regel: Jede Seite hat genau ein H1

**O2.4: Strukturierte Hx-Hierarchie**
- Warum: Inhaltliche Struktur für Google und Screenreader
- Wie prüfen: Quelltext, H2 unter H1, H3 unter H2, keine Sprünge

**O2.5: Alt-Text für alle inhaltlichen Bilder**
- Warum: Accessibility plus Image-Search-Ranking
- Wie prüfen: DevTools oder Lighthouse Accessibility Audit
- Ausnahme: Dekorative Bilder bekommen `alt=""`

**O2.6: Interne Verlinkung zwischen verwandten Seiten**
- Warum: Google versteht Themen-Cluster über interne Links
- Wie prüfen: Manuell pro Haupt-Seitentyp, mindestens 3 interne Links
- Bei Meyso: Leistungsseiten → Projekte → Kontakt, Blog-Artikel → Leistungsseiten

**O2.7: Content-Länge angemessen zur Intent**
- Warum: Informational Queries brauchen Tiefe, kommerzielle Queries Klarheit
- Wie prüfen: Pro Seite: erfüllt sie die User-Intent besser als Top-3-Konkurrenten?
- Regel: Kein Minimum, aber wenn Konkurrenten 2000 Wörter haben und du 300, hat das Gründe

**O2.8: Keywords natürlich eingebunden**
- Warum: Keyword-Stuffing ist seit Jahren Abstrafungs-Grund
- Wie prüfen: Lautes Vorlesen eines Absatzes, klingt er natürlich?
- Regel: Keywords im Title, H1, ersten 100 Wörtern, natürlich im Fließtext

**O2.9: Keine Thin Content Pages**
- Warum: Helpful Content System markiert dünne Seiten
- Wie prüfen: Seiten unter 300 Wörtern, ohne eigenen Wert identifizieren
- Regel: Lieber 5 starke Seiten als 20 dünne

**O2.10: FAQ-Schema wo passend**
- Warum: Rich Results in Google und Citation-Quelle in AI-Systemen
- Wie prüfen: Rich Results Test
- Wichtig: Echte FAQs, keine Keyword-stuffed Fake-Fragen

---

## Kategorie 3: Local SEO

**L3.1: Google Business Profile vollständig ausgefüllt**
- Warum: 32% der Local-Pack-Ranking-Gewicht laut Whitespark 2026
- Wie prüfen: business.google.com, Vollständigkeits-Score 100%
- Checkliste: Primary Category, Services mit Beschreibung, Öffnungszeiten, Fotos, Service-Area bei SAB

**L3.2: NAP-Konsistenz**
- Warum: Name/Address/Phone müssen exakt identisch auf Website, GBP, IHK-Profil, anderen Directories sein
- Wie prüfen: Alle wichtigen Einträge manuell abgleichen
- Typischer Bug: "GmbH" vs "GmbH & Co. KG", oder "Str." vs "Straße"

**L3.3: LocalBusiness Schema.org auf Website**
- Warum: Google verbindet Website und GBP über strukturierte Daten
- Wie prüfen: Rich Results Test
- Inhalt: address, geo (lat/lng), openingHours, areaServed, sameAs (GBP-URL)

**L3.4: Reviews aktiv werden eingeholt**
- Warum: 16-20% Ranking-Gewicht laut Whitespark 2026, Recency wichtiger als Quantity
- Wie prüfen: Frequenz neuer Reviews im GBP-Dashboard
- Ziel: Mindestens eine neue Review alle 4-6 Wochen

**L3.5: Reviews werden beantwortet**
- Warum: Aktivitäts-Signal für Google, außerdem gute Außenwirkung
- Wie prüfen: GBP, alle Reviews haben Owner-Response
- Regel: Positive Reviews knapp und dankend, negative sachlich und lösungsorientiert

**L3.6: Regions-Landingpages mit echtem lokalen Mehrwert**
- Warum: Google straft Doorway-Pages ab, belohnt echten lokalen Kontext
- Wie prüfen: Unique-Content-Anteil mindestens 60% pro Stadt
- Test: Wenn ein Konkurrent den Text kopieren würde, müsste er mindestens 10 lokale Fakten umschreiben

**L3.7: Service-Area in GBP korrekt definiert**
- Warum: GBP mit definierter Service-Area rankt für alle Städte in der Area
- Wie prüfen: GBP Einstellungen, Service-Area mit allen relevanten Städten
- Für Meyso: Brigachtal, VS, Donaueschingen, Rottweil, Tuttlingen, St. Georgen

**L3.8: Lokale Backlinks (Citations)**
- Warum: Drittseite erwähnt dich plus Link = Authority-Signal
- Wie prüfen: Ahrefs, Google Search Console oder manuell
- Mindestens: IHK-Profil, Branchenverzeichnis der Region, ein lokaler News-Link

---

## Kategorie 4: Content & Authority

**C4.1: Author-Info mit echtem Namen und Bio**
- Warum: E-E-A-T Signal, besonders wichtig seit 2024
- Wie prüfen: Blog-Artikel zeigen Autor, Autorenseite existiert
- Bei Meyso: Fabian Meyer als Autor, kurze Bio mit LinkedIn-Link

**C4.2: Impressum mit vollständigen Angaben**
- Warum: Trust-Signal und gesetzliche Pflicht in DE
- Wie prüfen: Impressum-Seite mit § 5 TMG konformen Angaben

**C4.3: Datenschutzerklärung aktuell**
- Warum: Trust-Signal, DSGVO-Pflicht, Cookies korrekt erklärt
- Wie prüfen: Letzte Aktualisierung nicht älter als 12 Monate, alle Dienste aufgeführt

**C4.4: Kontaktseite mit mindestens 2 Kontaktwegen**
- Warum: Trust-Signal, besseres User-Experience
- Wie prüfen: Kontaktseite zeigt E-Mail und mindestens eine Alternative (Formular, Telefon, Adresse)

**C4.5: Über-uns-Seite mit Substanz**
- Warum: E-E-A-T, Google bewertet wer hinter der Website steht
- Wie prüfen: Über-uns-Seite mit Team/Person, Foto, Geschichte, Werten
- Bei Solo-Betrieben: ruhig persönlich, "Dein Entwickler" Narrativ

**C4.6: Blog mit regelmäßigen neuen Artikeln**
- Warum: Fresh Content Signal, neue Indexierungs-Möglichkeiten
- Wie prüfen: Blog-Seite, letzter Artikel nicht älter als 2 Monate
- Minimum: 1 Artikel pro Monat, besser 2

**C4.7: Case Studies / Projekte mit echten Daten**
- Warum: E-E-A-T Experience, AI-Systeme zitieren gerne Case-Study-Inhalte
- Wie prüfen: Pro Projekt: Vorher/Nachher/Ergebnis mit konkreten Zahlen?

**C4.8: Testimonials / Referenzen**
- Warum: Trust-Signal, beeinflusst CTR und Conversion
- Wie prüfen: Mindestens 2-3 echte Referenzen auf Startseite sichtbar

---

## Kategorie 5: AI-Visibility (neu 2026)

**A5.1: Content-Struktur AI-citable**
- Warum: AI-Systeme zitieren bevorzugt klar strukturierte, listen-basierte Inhalte
- Wie prüfen: Inhalte haben klare H2/H3, Aufzählungen, definierte Antworten
- Format: Listicles (21.9% AI-Citations), Artikel (16.7%), Product Pages (13.7%)

**A5.2: Originalität des Content (Information Gain)**
- Warum: AI zitiert Seiten die etwas Neues sagen, nicht Kopien
- Wie prüfen: Pro wichtiger Seite: welche Info bietet sie, die Top-3-Konkurrenten nicht haben?
- Bei Meyso: echte Case-Zahlen, spezifische Tech-Stack-Details, konkrete Preise

**A5.3: Brand-Mentions über die Website hinaus**
- Warum: AI-Systeme nutzen Brand-Mention-Frequenz als Autoritäts-Signal
- Wie prüfen: Google-Suche "Meyso Brigachtal" zeigt Erwähnungen außerhalb meyso.de
- Aufbauen durch: Gastbeiträge, Interview-Teilnahmen, Podcast-Erwähnungen

**A5.4: Strukturierte Daten für AI**
- Warum: LLMs parsen strukturierte Daten deutlich zuverlässiger als freien Text
- Wie prüfen: Schema.org Coverage auf allen Haupttypen
- Wichtig: Article, Service, FAQPage, Organization, LocalBusiness

**A5.5: Citations in externen Verzeichnissen**
- Warum: AI-Systeme ziehen Daten aus strukturierten Quellen (IHK, Wikipedia, Branchenbücher)
- Wie prüfen: Einträge in relevanten Verzeichnissen (IHK, lokale Branchenbücher)
- Für Meyso: Mindestens IHK Schwarzwald-Baar-Heuberg, Das Telefonbuch, Gelbe Seiten

**A5.6: ChatGPT/Perplexity-Check für Brand-Queries**
- Warum: Sichtbarkeit in AI-Suche direkt messbar
- Wie prüfen: Manuelle Anfrage "Webentwickler Schwarzwald-Baar-Kreis" in ChatGPT, Perplexity
- Ziel: Erwähnung bei Long-Tail-Queries, auch wenn nicht bei generischen

---

## Kategorie 6: Tracking & Monitoring

**M6.1: Google Search Console eingerichtet**
- Warum: Einzige direkte Daten-Quelle von Google, Impressions/Klicks/Position
- Wie prüfen: search.google.com/search-console, Domain oder URL-Prefix verifiziert
- Regelmäßiger Check: Monatlich

**M6.2: Sitemap in GSC eingereicht**
- Warum: Beschleunigt Indexierung neuer Seiten
- Wie prüfen: GSC → Sitemaps → sitemap.xml erfolgreich

**M6.3: Core Web Vitals Tracking**
- Warum: Early-Warning bei Performance-Regression
- Wie prüfen: GSC Core Web Vitals Report, oder Vercel Analytics

**M6.4: Analytics DSGVO-konform**
- Warum: Google Analytics ohne Consent ist DSGVO-Verstoß
- Alternative: Vercel Analytics, Plausible, oder GA4 mit korrektem Consent
- Wie prüfen: Analytics feuert nur nach Consent

**M6.5: Backlink-Monitoring**
- Warum: Toxische Backlinks erkennen, neue Chancen identifizieren
- Wie prüfen: Ahrefs, Semrush, oder Gratis: GSC Links-Report
- Regelmäßiger Check: Quartalsweise

---

## Kategorie 7: Risiko-Signale (Abstrafungs-Indikatoren)

Diese Punkte sind "darf NICHT vorhanden sein":

**R7.1: Keine Doorway-Pages**
- Definition: Mehrere Seiten mit fast-identischem Content, nur Keyword/Ort getauscht
- Wie prüfen: Regions-Seiten miteinander diffen, mindestens 60% Unterschied
- Risiko: Core Update Downgrade, manuelle Manual Action

**R7.2: Kein Keyword-Stuffing**
- Definition: Unnatürlich häufige Keyword-Wiederholung
- Wie prüfen: Laut vorlesen, klingt es wie Deutsch oder wie SEO?

**R7.3: Keine versteckten Texte**
- Definition: Text in der Farbe des Hintergrunds, display:none, winziger Font
- Wie prüfen: CSS-Inspektion auf Leistungs- und Content-Seiten

**R7.4: Keine gekauften Backlinks ohne nofollow**
- Definition: Bezahlte Links die nicht als Werbung/Sponsored markiert sind
- Wie prüfen: Nachverfolgbar bei eigenen Entscheidungen, extern per Ahrefs

**R7.5: Kein massenhaft KI-generierter Content ohne Review**
- Definition: Artikel-Farmen, schnell AI-generierte Seiten ohne menschliche Überarbeitung
- Wie prüfen: Jeden Blog-Artikel persönlich lesen bevor publiziert
- Regel: Nie einen Text live stellen den du nicht zu 100% bestätigen kannst

**R7.6: Keine Cloaking**
- Definition: Unterschiedlicher Content für Google-Bot vs User
- Wie prüfen: "Fetch as Google" in GSC zeigt selben Content wie Browser

**R7.7: Keine Spam-Backlinks von fragwürdigen Domains**
- Definition: Links von PBNs, Spam-Foren, irrelevanten Verzeichnissen
- Wie prüfen: Ahrefs Disavow-Check, GSC Links-Report
- Wenn gefunden: Disavow-File erstellen

---

## Kategorie 8: Meyso-Spezifisch (Standards)

Das sind Meyso-eigene Qualitäts-Standards die ich (Dave) für jedes Projekt einhalten will:

**M8.1: Lighthouse 100 als Ziel (nicht nur 90)**
- Meyso-Standard, Differenziator zum WordPress-Markt

**M8.2: Next.js 16+ und aktueller Stack**
- Kein Legacy, kein WordPress bei neuen Projekten

**M8.3: Sanity CMS für Content-Pflege (wenn Content-intensiv)**
- Architektur-Regel: Sanity = Content, Supabase = App-Logic

**M8.4: DSGVO-konform by default**
- Keine Consent-pflichtigen Scripts vor Consent
- Server in Europa (Vercel Frankfurt oder Dublin)

**M8.5: Dokumentiert in CLAUDE.md des Projekt-Repos**
- Jedes Projekt-Repo hat CLAUDE.md mit Tech-Stack, Deployment, SEO-Status-Link

---

## Nutzungs-Cadence

- **Monatlich:** Per Projekt durch alle Punkte durchgehen, Status in `project-status/[projekt].md` updaten
- **Bei neuem Projekt:** Vor Go-Live alle Punkte erfüllt?
- **Bei Core Update (Google):** Nach 7-14 Tagen prüfen ob Rankings sich verändert haben
- **Bei größerem Deploy:** Mindestens T1.1, T1.3, T1.8, M6.3 durchchecken

---

## Update-Policy dieses Dokuments

- Bei neuen Whitespark-Reports (jährlich): Prozente und Gewichtungen updaten
- Bei Google Core Updates: Risiko-Signale Abschnitt prüfen
- Bei strategischem Meyso-Change: Meyso-Spezifisch-Kategorie anpassen
- Mindestens: Quartalsweise Review dieses Dokuments selbst
