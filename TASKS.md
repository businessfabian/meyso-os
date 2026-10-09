# Backlog - Alle Meyso Projekte

Stand: 2026-04-30 (priorisiert)

> Legende: `🤖 Claude` = kann Claude Code abarbeiten · `👤 Manuell` = braucht menschliche Aktion

---

## Prioritäten Stand 09.10.2026

### 1. Diese Woche, Kunden und Geld
- [ ] Ziegler: Angebot Holz-nach-Mass-Rechner als Entwurf im Hub (Richtpreis-Spanne mit Anfrage, Preisgrundlage in Sanity, Anfragenliste mit Status, monatliche Betriebsgebühr als Wartung), Preis vorher mit Claude durchgehen
- [ ] Ziegler: Termin für die Admin-Führung mit Lisa

### 2. Bis Ende Oktober, Pflichten
- [ ] Stripe (Halveo): Rechnungseinstellungen Allgemein speichern, § 19-Fußzeile, Standardvermerk, Steuernummer als Steuer-ID, Nummerierung fortlaufend auf Kontoebene mit Präfix HV, öffentlicher Name "Fabian Meyer, Halveo", Branding Halveo, Abrechnungsbeschreibung HALVEO; vor 24.10.
  <!-- Zusammengefuehrt am 09.10.2026, vorher offen unter P1, Halveo (diese Woche). Wortlaut unveraendert: -->
  <!-- 👤 Stripe Customer Portal Branding (Halveo-Logo hochladen) -->
- [ ] Gabi: § 13b UStG auf Auslandsleistungen (Anthropic, Vercel, Stripe, Supabase, Resend), Halveo-Umsatz in der EÜR, EÜR-Kategorien
- [ ] Gabi: Lauf-Rechnungen seit 07.09. ohne § 19-Satz, Neuausstellung nötig?
  <!-- Anlage, gelesen am 09.10.2026 an den gespeicherten PDFs, der Hash jedes PDF gegen die Rechnungszeile geprueft. Auswahl aus laeufe (art rechnungen, ergebnis.zeilen "erzeugt"), gegengeprueft ueber die Rechnungen mit Vertrag in den Zeitfenstern der Laeufe: beide Quellen gleich. 34 Laeufe seit 07.09.2026, zwei davon ohne Ergebnis abgebrochen (12.09. und 13.09.), in ihren Fenstern keine Rechnung. Kunden als Kundennummer, weil dieses Repo oeffentlich ist.
  | Nummer | Lauf | Kunde | Land | Land auf dem PDF | Betrag | Gesamtbetrag im PDF | Versand | Status | Seiten | Steuervermerk im PDF |
  |---|---|---|---|---|---|---|---|---|---|---|
  | 2026-019 | 01.10.2026 06:00 | K-1003 | DE | keins | 20,00 EUR | 20,00 € | 01.10.2026 06:00 per Mail | bezahlt | 2 | keiner, auch keine Spur davon |
  | 2026-020 | 01.10.2026 06:00 | K-1001 | DE | keins | 18,00 EUR | 18,00 € | 01.10.2026 06:00 per Mail | bezahlt | 2 | keiner, auch keine Spur davon |
  Gesucht wurde der volle Satz aus lib/steuervermerk.ts und aus app_settings (beide gleich: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.", ebenso der Drittlandsvermerk) und jede Spur davon (§ 19, UStG, Umsatzsteuer, Kleinunternehmer, § 3a, Leistungsort). Ursache: der Lauf gibt dem PDF keinen Steuervermerk mit (lib/generate-invoices.ts), der Fix wird PR 99. -->
- [ ] Wächter auf 0: 7 Belege Prüfung 26 (bestätigen Anthropic ONOUNKA5-0002 21,42, ONOUNKA5-0003 87,23, WIRmachenDRUCK 38961904-1 15,49; ablehnen 4 AGB/Widerruf), Claude- und Vercel-Rechnungen an belege@meyso.de (Prüfung 1), Rücklage (Prüfung 5)
  <!-- Zusammengefuehrt am 09.10.2026, vorher offen unter P1, meyso-website: Belegkette, zwei Zeilen. Wortlaut unveraendert: -->
  <!-- 👤 Dave | 7 Belege zu pruefen entscheiden (Register Ausgaben, Filter zu pruefen): die vier Nicht-Rechnungen ablehnen (AGB und Widerrufsbelehrung von mailbox.org, zwei AGB von WIRmachenDRUCK, je 0 Euro), die drei Rechnungen pruefen und bestaetigen (Anthropic ONOUNKA5-0002 21,42 Euro und ONOUNKA5-0003 87,23 Euro vom Maerz 2026, WIRmachenDRUCK 38961904-1 15,49 Euro vom April 2026). Die Betraege sind aus dem Text gelesen -->
  <!-- 👤 Dave | Die Rechnungen zu den sieben offenen Erwartungen (Claude April bis September 2026, Vercel September 2026) an belege@meyso.de weiterleiten oder in den Ordner Rechnungen_rein legen. Sie liegen dort nicht, deshalb hat der Lauf sie nicht getroffen. Danach den Workflow von Hand oder nach dem Takt -->

### 3. Danach, Hub mit Wirkung nach außen
- [ ] Portal-Aufträge: Entscheidung offen
- [ ] Max (Hirmax) als eigener Portal-Zugang, Rolle inhaber

### 4. Wenn Luft ist
- [ ] AVVs Resend, Sanity, Supabase, Vercel
  <!-- Zusammengefuehrt am 09.10.2026, vorher offen unter P2, Rechtliches Hirmax, vier Zeilen. Der AVV zwischen Meyso und Hirmax bleibt dort. Wortlaut unveraendert: -->
  <!-- 👤 Dave | AVV Vercel aktivieren (Self-Service vercel.com/legal/dpa) -->
  <!-- 👤 Dave | AVV Supabase aktivieren (Self-Service supabase.com/legal/dpa) -->
  <!-- 👤 Dave | AVV Resend aktivieren (Self-Service resend.com/legal/dpa) -->
  <!-- 👤 Dave | AVV Sanity aktivieren (Self-Service sanity.io/legal/dpa) -->
- [ ] Secrets in Bitwarden, meyso-os privat stellen
- [ ] V9 Beratung: Zeiteinträge, Stundensatz, Sammelrechnung, wartet auf ersten Beratungsauftrag
  <!-- Zusammengefuehrt am 09.10.2026, vorher offen unter P1, meyso-website: Belegkette. Wortlaut unveraendert: -->
  <!-- 🤖 Beratung (Stundensaetze aus firma.stundensatz_cents, Beratungsrechnung mit Menge und Einheit) -->
  <!-- Kundenakte und Beratung standen bis 07.09.2026 als V5 und V6 hier, aus der alten Nummerierung. Die Nummern sind mit V4 Kundenportal, V5 Aenderungen und V6 Zubuchen belegt, deshalb ohne Nummer. Inhalt unveraendert, Einsortierung entscheidet Dave. -->
- [ ] V10 Teil B, V11, lokaler Stack, Outreach-Versand: warten auf Auslöser
  <!-- Zusammengefuehrt am 09.10.2026, vorher offen unter P1, meyso-website: Belegkette, vier Zeilen mit ihren Kommentaren. Wortlaut unveraendert: -->
  <!-- 🤖 V10 Teil B, E-Rechnungen ausstellen. Gekoppelt an V11, am selben Tag. Je Rechnung ein XML nach EN 16931 als Anhang neben dem PDF, Steuerkategorie je Fall (Inland regelbesteuert, Kleinunternehmer, Drittland) nach der deutschen XRechnung-Anleitung mit Beleg im PR, Validierung gegen den amtlichen Pruefdienst als Test, Storno und Anzahlung eingeschlossen -->
  <!-- Einbettung ins PDF als ZUGFeRD nur, wenn der Renderer PDF/A-3 hergibt. Sonst bleibt es das getrennte XML, das ist gueltig. Zu pruefen ist das an @react-pdf/renderer, bevor jemand Zeit in die Einbettung steckt. -->
  <!-- Als Kleinunternehmer ist Dave vom Ausstellen befreit, deshalb erst mit dem Wechsel zur Regelbesteuerung. Die Kopplung ist keine Bequemlichkeit: die Steuerkategorie im XML haengt daran, welche Besteuerung gilt, und vor dem Wechsel gaebe es die Angaben gar nicht, die EN 16931 verlangt. Deshalb V10 Teil B und V11 zusammen. -->
  <!-- 🤖 V11 Regelbesteuerung, zusammen mit V10 E-Rechnung. Ausgeloest wird sie vom Waechter: sobald Pruefung 4 die 50 Prozent der Vorjahresgrenze meldet, ist es Zeit zu planen, nicht erst beim Ueberschreiten. Inhalt: Schalter mit Datum (ab wann Regelbesteuerung gilt, rueckwirkend nichts aendern), Steuerblock auf allen Belegen (Netto, Satz, Steuerbetrag, Brutto), Vorsteuer an den Ausgaben, EU mit Reverse Charge und damit auch das Ende der EU-Sperre aus V7 -->
  <!-- Der Ausloeser steht schon: lib/waechter.ts Pruefung 4 kennt die Stufen 50, 80 und 100 Prozent je Grenze, und seit V7 rechnet sie nur mit steuerbaren Umsaetzen. Die 50-Prozent-Stufe ist damit ein brauchbares Signal und kein Fehlalarm durch Auslandsumsaetze. -->
  <!-- 🤖 Lokaler Supabase-Stack mit Seed, vor der naechsten Portal-Etappe. Ziel: ein Rauchtest, der sich anmeldet und die Seiten hinter der Sitzung wirklich aufruft. Heute endet jeder Rauchtest bei /portal/anmelden, weil eine angemeldete Person nur zu einem echten Kunden gehoert und es keine Testzugaenge auf Kundendaten gibt. Genau deshalb ist die kaputte Dateiroute aus V5 durchgerutscht: 404 statt Datei, und niemand konnte es sehen. Umfang: supabase start mit config.toml, Seed mit zwei erfundenen Kunden, je einer Person je Rolle, Belegen, Vertraegen und Bausteinen, dazu ein Skript, das sich anmeldet und alle Portalrouten mit Sitzung abklappert. Damit werden auch die Bilder aus next start moeglich, die heute nur fuer Seiten ohne Sitzung gehen -->
  <!-- Muster: businessfabian/meyso-web, geklont nach D:\dev\clients\meyso-web und angesehen. Was dort steht und hier fehlt: supabase/config.toml mit eigenen Ports (API 54421, DB 54422), die Skripte db:start, db:stop, db:push, db:reset auf die Supabase-CLI, seed ueber scripts/seed-site.ts, scripts/umgebung.ts als einzige Stelle, die den Secret Key liest und zwischen lokal und Cloud umschaltet (MEYSO_ENV), scripts/pruefe-anon.ts als Gegenprobe auf die anon-Sicht, und fuer den Rauchtest e2e:vorbereiten (seed plus Zustand herstellen) sowie e2e:server (vorbereiten, build, start) mit playwright.config.ts. e2e-vorbereiten bricht ab, wenn es gegen die Cloud laeuft, weil es sonst die echte Website veraendern wuerde. Genau diese Sperre brauchen wir hier auch. meyso-website hat bisher nur supabase/migrations, keine config.toml und keinen Seed. -->
  <!-- Verschoben am 08.09.2026 auf Daves Wort, nicht gestrichen: vor der naechsten Portal-Etappe. V7 Ausland beruehrt das Portal nicht, deshalb geht es dazwischen.
       Vorbereitung ist gelaufen und muss nicht wiederholt werden. Klon liegt unter D:\dev\clients\meyso-web, voller Klon, Branch main, unveraendert, gleicher Pfad wie auf dem Mac. Docker fehlt auf diesem Rechner ganz (kein Binary, kein Dienst, kein Ordner), WSL hat keine Distribution. Das installiert Dave selbst, Docker Desktop mit WSL2. Die Supabase-CLI fehlt ebenfalls: Homebrew gibt es unter Windows nicht, Scoop und Chocolatey sind nicht installiert, winget kennt kein Supabase-Paket. Offen zur Entscheidung: npm i -D supabase (Version im Repo, kein neuer Paketmanager, auf dem Mac unveraendert nutzbar) oder Scoop nach der Supabase-Doku (Version haengt dann am Rechner).
       Portblock reserviert: 545xx, also 54520 shadow, 54521 api, 54522 db, 54523 studio, 54524 inbucket, 54527 analytics, 54529 pooler. halveo belegt faktisch 5432x (seine config.toml nennt nur db 54322 und shadow 54320, der Rest faellt auf die Vorgaben), meyso-web belegt 544xx ausgeschrieben. -->
  <!-- 🤖 Echter Versandweg fuer Outreach, eigene Runde: gespeicherte Vorlagen statt eines Prompts im Code, Ratenbegrenzung je Empfaenger und je Tag, Kill-Switch wie bei Rechnung und Angebot, eigene mail_log-Art mit Person, Grundlage und Vorlage (die zwei Spalten liegen seit dem 10.09.2026 bereit und sind leer), Abmeldelink in jeder Mail und Verarbeitung des Widerspruchs. Ohne das bleibt es beim mailto-Weg, und der ist gesperrt, solange keine Grundlage steht -->

**Fester Termin:** 02.11. morgens HEUTE prüfen, erster Rechnungslauf nach PR 95/97, Prüfung 27 und 28 müssen 0 zeigen.

---

## 🔴 P0 - Sofort (Sicherheit + Rechtlich)

> Geleakte Keys und fehlende Vertraege = echtes Risiko

### Halveo (heute/morgen)
- [x] 👤 Daniel-Mail rausschicken mit BETA-DANIEL Stripe-Coupon
- [ ] 👤 Smoke-Test H-6 + H-1 auf Production (Multi-Eigentuemer + Mischnutzung)
- [ ] 👤 Telefonnummer im Impressum eintragen (Sipgate Nummer)

### Meyso-Projekte
- [ ] 👤 API-Keys rotieren: Gemini, PageSpeed, CRON_SECRET (Vercel Dashboard + Google Cloud Console)
- [ ] 👤 GSC Service-Account-Key rotieren (meyso-490715-...json wurde im Chat geteilt, gilt als kompromittiert. Google Cloud Console, alten Key loeschen, neuen erzeugen, GOOGLE_SERVICE_ACCOUNT_JSON in .env.local und Vercel ersetzen)
- [ ] 👤 sq-schmidt: Credentials rotieren nach .env.local Leak (RESEND_API_KEY + ADMIN_PASSWORD noch offen) -- SANITY_WRITE_TOKEN bereits rotiert (16.04.2026)
- [x] sq-schmidt Auth-Middleware: middleware.ts schuetzt /admin/dashboard + /api/admin (d6998a8) ✓
- [x] Session Secret (meyso-website): Fallback entfernt, SESSION_SECRET ist Pflicht (fb2e25d) ✓
- [x] 🤖 halveo-web: OG-Image fuer halveo.de bestaetigt (1200x630, Halveo-Logo + Tagline + Private Beta Q3 2026 Pill) ✓

---

## 🟠 P1 - Diese Woche (Kunden + SEO)

> Direkt sichtbar fuer Kunden oder bringt Traffic

### Halveo (diese Woche)
- [ ] 👤 Anwalt-Termin buchen: Legal-Review AGB + AVV + Datenschutz
- [ ] 🤖 H-3 + H-4 Tests schreiben: AfA-Calculator + Anlage V Mapping Unit-Tests

### Meyso-Projekte
- [x] 🤖 Claude | Alle Projekte: Next.js auf gepatchte Version updaten wegen CVE-2026-23869 (16.x: bereits 16.2.3 = clean, 0 Schwachstellen; 15.x: meyso-kmu-template auf 15.5.15 aktualisiert) ✓
- [x] 301-Redirects toolradar: permanentRedirect('/tools') statt 404 fuer geloeschte Tools (02dddeb) ✓
- [x] 👤 Hirmax als Kunde in Sanity anlegen (Sanity Studio)
- [ ] 👤 Sanity CORS im Dashboard pruefen (Hirmax, Sanity Studio → API → CORS Origins)
- [ ] 👤 Google Business Profile: Bilder hochladen + verifizieren
- [ ] 👤 Social Media API Keys konfigurieren (LinkedIn Developer Portal) - Social Poster ist fertig, wartet auf Keys
- [ ] 👤 Lexware Export end-to-end testen (Testbestellung → XML Export → Import in Lexware bei Max)
- [ ] 👤 Wartungsvertrag-Reaktionszeiten realistisch setzen (Achtung: Hauptjob)
- [x] 🤖 Claude | meyso-website: Admin-Redesign Phase 5 und 6, alle 18 Seiten auf das Design-System und die Cockpit-Anatomie (Kopf, Metrikleiste, Flaeche) ✓
- [x] 🤖 Claude | meyso-website: CRM-Luecken, naechster Schritt und Verlauf in der Kundenakte, automatisches Protokoll bei Versand, Kontaktpersonen ✓
- [x] 🤖 Claude | meyso-website: Sicht-Harness, rendert die echten Admin-Bausteine und fotografiert sie (scripts/sicht) ✓
- [x] 🤖 Claude | meyso-website: Backup-Umfang korrigiert, 13 Tabellen des laufenden Betriebs waren nicht gesichert ✓
- [ ] 👤 Dave | meyso-website: Migration 20260814_kontaktpersonen.sql in Supabase einspielen (bis dahin zeigt der Kontaktblock in der Kundenakte nur einen Hinweis)
- [ ] 👤 Dave | meyso-website: Rauchtest nach dem Deploy laufen lassen (node scripts/rauchtest-admin.mjs https://meyso.de), die Testpflicht aus docs/redesign.md verlangt ihn je Phase
- [ ] 🤖 Claude | meyso-website: Kundenakte, Wartung und Outreach noch im Bild pruefen (die uebrigen sechs Seiten sind durch)
- [ ] 🤖 Claude | meyso-website: die zwanzig wichtigsten Wachen zu echten Funktionstests machen, heute lesen 40 von 61 Testdateien nur Quelltext
- [x] 🤖 Claude | meyso-website: middleware.ts zu proxy migrieren (Next.js 16 deprecation) (527f627) ✓
- [x] 🤖 Claude | meyso-website: Rechts-Audit, Impressum auf § 5 DDG, VSBG-Hinweis, Datenschutzerklaerung nach Art 13 DSGVO vollstaendig (7a09c17, 14.04.2026) ✓
- [x] 🤖 Claude | meyso-website: Next.js 16 Routing-Konflikt gefixt - report-API aus `clients/[slug]/` nach `client-reports/[slug]/` verschoben, Dev-Server startet wieder sauber (f33dbbd, 14.04.2026) ✓
- [x] 🤖 Claude | meyso-website: Legal-Overhaul Teil 2 - GA4+fake CookieBanner entfernt, Google Fonts lokal, CSP gehaertet, AGB-Seite (13 §§), Kleinunternehmer-Disclaimer bei Preisen, Tawk.to komplett raus (33c32ef..8faec53, 14.04.2026) ✓
- [x] 👤 Dave | meyso-website: Klaeren ob USt-ID vorhanden - Dave hat bestaetigt: keine USt-ID, agiert nur in DE als Einzelunternehmer/Kleinunternehmer, daher nicht relevant (14.04.2026) ✓
- [x] 🤖 Claude | meyso-website: Landing-Page Design-Refactor mit frontend-design Skill - Emojis raus (Lucide), Hero Code-Block durch editorial Showreel mit Kunden-Screenshot ersetzt, Process 4-col-Cards durch editorial Timeline mit roem Ziffern, warmer Sekundaer-Akzent (Terracotta) gegen Serif-Kaelte, Portfolio nach Leistungen vorgezogen + Filler raus, Atmosphaerische Effekte konsolidiert + Grain-Signature, Numbers-Section weg (8ec414f..167719a, 14.04.2026) ✓
- [x] 🤖 Claude | hirmax: Submit Button Loading State + Doppel-Submit-Schutz (ffa47d7, 09.04.2026) ✓
- [x] 🤖 Claude | UI Modernization Audit: 4 Projekte auditiert (09.04.2026) ✓
  <!-- Audits in docs/ui-audits/: hirmax, villa-nina, toolradar, meyso-website. Summary: docs/ui-audits/2026-04-09-summary.md -->
- [x] 🤖 Claude | villa-nina: Mobile Navigation (25 Min, Pre-Launch Blocker)
  <!-- Quelle: docs/ui-audits/2026-04-09-villa-nina-sardinia.md -->
- [x] 🤖 Claude | toolradar: ContactForm Labels (10 Min, WCAG Failure) ✓
  <!-- Quelle: docs/ui-audits/2026-04-09-toolradar.md. Alle 3 Felder haben sr-only Labels + aria-required + autoComplete. Verifiziert 2026-04-14. -->
- [x] 🤖 Claude | meyso-website: CSS Custom Properties Fundament fuer Dark Mode (aus UI Audit) (6448516) ✓
- [x] 🤖 Claude | villa-nina: Weitere Quick Wins aus docs/ui-audits/2026-04-09-villa-nina-sardinia.md
- [x] 🤖 Claude | toolradar: Weitere Quick Wins aus docs/ui-audits/2026-04-09-toolradar.md ✓
  <!-- FAQ ARIA, ThemeToggle aria-pressed, EffizienzRechner Slider ARIA, Hero clamp(), --color-brand Token. Tool-Card Hover bewusst uebersprungen (hat bereits ampel-spezifischen Glow). Commit 453d542, 2026-04-14. -->
- [x] 🤖 Claude | hirmax: Weitere Quick Wins aus docs/ui-audits/2026-04-09-hirmax-scheibenbilder.md (2026-04-14) ✓
  <!-- Alle 7 Quick Wins erledigt: NavClient aria-expanded+Focus-Trap, Submit Loading State (ffa47d7), Menge-Buttons aria-label, Progress-Bar role, Nav Backdrop-Blur, Card-Hover-Transition, Body-Font 15px→16px (94fc5b7).
  Context: npm run dev zeigt "The middleware file convention is deprecated. Please use proxy instead." Breaking change in kommenden Next.js Versionen. Migration path: https://nextjs.org/docs/messages/middleware-to-proxy -->

### meyso-website: Belegkette
<!-- Bauplan: Analysebericht docs/analyse/belege-vertraege-portal-2026-09.md (PR 16, Branch analyse/belege), Kapitel 10.4 und Steuerseite. Migrationen spielt Dave im SQL-Editor ein. -->
- [x] 🤖 Claude | H1 Loeschsperre fuer Rechnungen und Portal-Link (PR 17, 03.09.2026) ✓
- [x] 🤖 Claude | H2 Erster Wartungsmonat, Vorauszahlung ab Vertragsbeginn (PR 18, 03.09.2026) ✓
- [x] 🤖 Claude | V0a Belegintegritaet: Nummernkreis in der DB, Entwurf und Festschreiben, Storno als Gegenbeleg, PDF-Hash, mail_log, Kill-Switch (PR 19, Migration 20260903_nummernkreis.sql, 03.09.2026) ✓
- [x] 🤖 Claude | V0b Belegfundament: Positionen (invoice_items), fuenf Rechnungsarten, Firmenstammdaten firma.*, Kundennummer K-1001 ff., Land und Waehrung, Anschriftpflicht, Marke in lib/pdf/brand.ts (PR 20, Migration 20260903_v0b_belegfundament.sql, 03.09.2026) ✓
  <!-- Protokolle: docs/finanzen/nummernkreis-2026.md, docs/finanzen/belegfundament-v0b.md. Sechs verwaiste PDFs liegen unter archiv/geloescht/. -->
- [x] 👤 Dave | Anschriften nachgetragen: Villa Nina, Problemlos und Ziegler tragen jetzt Strasse, PLZ und Ort. Alle drei aktiven Vertraege sind damit vollstaendig, der Lauf am 01.10.2026 ueberspringt keinen mehr. Held bleibt ohne, ausgenommen (Lead) (09.09.2026) ✓
  <!-- Gelesen gegen Production am 09.09.2026: 9 Kunden, 3 ohne vollstaendige Anschrift, alle drei Leads (Held, MHK, PolicenDirect). Problemlos hat auch eine richtige E-Mail statt "t". -->
- [x] 👤 Dave | Die Anschrift von Villa Nina ist ein Platzhalter: "Musterstraße 1, 78086 Musterort". Der Ort gibt es nicht, die PLZ ist die von Brigachtal. Der Lauf am 01.10.2026 erzeugt damit eine Rechnung, deren Anschrift nicht stimmt, und Paragraf 14 UStG verlangt die richtige. Technisch laeuft es durch, das ist hier das Problem und nicht die Loesung (09.10.2026: Adresse korrigiert) ✓
  <!-- 09.10.2026, nur gelesen: Die Oktober-Rechnung 2026-019 aus dem Lauf am 01.10.2026 (Hosting Oktober, 20 EUR) traegt im festgeschriebenen PDF die Platzhalter-Anschrift "Musterstraße 1, 78086 Musterort". Der Hash des PDF stimmt mit der Rechnungszeile ueberein, die Rechnung ging am 01.10.2026 um 06:00 Berlin per Mail hinaus (mail_log mit Resend-Kennung), Status bezahlt, kein Storno. Nichts storniert, nichts gesendet, wie korrigiert wird, entscheidet Dave. -->
- [x] 🤖 Claude | V0c Bereinigung und Neumessung: Festschreiben und senden in einem Zug, Testkunde und Websire aus DB und Sanity, invoices.positionen und fuenf tote clients-Spalten weg, GitHub-Token-Fallback, E-Mail-Formpruefung, Klickstrecken neu gemessen (PR 21, Migration 20260903_v0c_bereinigung.sql, 04.09.2026) ✓
  <!-- Dazu (Dave, 03.09.2026): Kundendialog und Kunden-API pruefen das E-Mail-Format beim Speichern, Versand lehnt eine ungueltige Adresse mit klarer Meldung ab, Test dazu. Ausloeser: Problemlos hatte "t" als E-Mail. -->
- [x] 🤖 Claude | S1 Ausgaben je Zahlung mit Beleg: euer_kategorien, erwartete Buchungen aus Vertraegen (Cron am Monatsersten), Beleg-Bucket mit Hash, Ruecklagen, Einnahmen ohne Rechnung, EUeR ohne Hochrechnung. Nachhollauf 34 Zeilen ueber 271,27 EUR (PR 22, Migration 20260904_s1_ausgaben.sql, 04.09.2026) ✓
  <!-- Protokoll docs/finanzen/ausgaben-s1.md. Mailbox jaehrlich einmal voll statt gezwoelftelt, deshalb 34 statt 39 Zeilen. -->
- [x] 🤖 Claude | S2 Jahresmappe: Anlagenverzeichnis mit AfA, ZIP mit Summenblatt-PDF, fuenf CSV, allen Beleg-PDFs und Belegdateien mit Hashpruefung, Jahresuebersicht je Kunde (PR 24, Migration 20260904_s2_jahresmappe.sql, 04.09.2026) ✓
  <!-- Protokoll docs/finanzen/jahresmappe-s2.md. 2026-003 per Backfill nachgefertigt, Hashes der 12 Bestands-PDFs gesetzt. -->
- [x] 🤖 Claude | S3 Monatlicher Waechter: Tabelle laeufe mit Laufprotokoll, zehn Pruefungen, Kachel Buchhaltung auf HEUTE mit Jetzt pruefen, Cron am Monatsersten mit ntfy, Paragraf-19-Stufen mit Merker (PR 25, Migration 20260904_s3_waechter.sql, 04.09.2026) ✓
  <!-- Protokoll docs/finanzen/waechter-s3.md. Erster Lauf gegen meyso.de: 38 Treffer, 34 ohne Beleg, Villa Nina und Problemlos ohne Anschrift zum 01.10. -->
- [x] 🤖 Claude | V1 Angebote: Bausteine als Preisquelle, Nummernkreis AN, PDF mit Hash, Versand mit Annahme-Link, oeffentliche Annahme erzeugt Auftrag mit Zahlplan und vorgemerkter Wartung, Versionen, taeglicher Ablauf, Waechter-Pruefung 11 (PR 26, Migration 20260904_v1_angebote.sql, 04.09.2026) ✓
  <!-- Protokoll docs/finanzen/angebote-v1.md. Probe an kontakt@meyso.de angenommen und wieder entfernt, AN-2026-001 als Luecke vermerkt. Klickstrecke 11 auf 5 Handgriffe. -->
- [x] 🤖 Claude | V2 Vertraege: client_contracts erweitert statt zweiter Tabelle, Nummernkreis VT, Vertragsbogen mit Hash im privaten Bucket, Fristrechnung ohne Zeitzone, Kuendigen getrennt von Sofortbeendigung, Bestaetigungsmail automatisch, Waechter-Pruefungen 12 und 13 (PR 29 gemerged 05.09.2026, Migration 20260904_v2_vertraege.sql) ✓
  <!-- Live seit 05.09.2026. Nachher-Protokoll: 5 Vertraege VT-2026-001 bis 005, Typ aus leistungsart (3 Wartung, 2 Hosting), Preise und 13 Rechnungen ueber 412 EUR unveraendert, Nummernkreis VT auf 5. -->
  <!-- Protokoll docs/finanzen/vertraege-v2.md. Klickstrecke Vertrag beenden 5 Handgriffe mit 1 Medienbruch auf 3 ohne Bruch. Versand an Kunden gesperrt bis zur AGB-Pruefung, Schalter vertrag.versand_frei. -->
- [x] 🤖 Claude | AGB-Fassung 2026-09: sechzehn Paragrafen, Text als eine Quelle (docs/recht/agb-2026-09.md, lib/agb.ts erzeugt), Fassung und Stand frieren am Beleg ein, AGB als Anhang zur Angebotsmail und zum Download auf der Annahme-Seite, Paragrafenverweise angeglichen, Preise-Seite mit Kuendigungsfrist (PR 30 gemerged 05.09.2026, Migration 20260904_agb_2026_09.sql) ✓
  <!-- Live seit 05.09.2026. Die fuenf Bestandsvertraege tragen weiter Stand April 2026 und keine Fassung, wie vorgesehen: wer im April geschlossen hat, hat nicht die Septemberfassung angenommen. -->
  <!-- Protokoll docs/analyse/zusagen-website-2026-09.md. PR 30 setzt auf PR 29 auf. Offen aus dem Bericht: Redaktionssystem-Widerspruch Paket I, Backup-Zahlen, Meilenstein-Schwelle ohne AGB-Grundlage. -->
- [x] 🤖 Claude | Zusagen umgesetzt: Redaktionssystem gilt nur fuer Paket II und III, Wartungsumfang beziffert (taeglich sichern, 30 Tage aufbewahren, 30 Minuten je Monat, nicht uebertragbar, Vorbehalt fuer fremde Dienste), Meilenstein-Schwelle 5.000 Euro gestrichen (PR 31 gemerged 05.09.2026, Migration 20260904_wartungsumfang.sql) ✓
  <!-- PR 31 setzt auf PR 30 auf. Zwei Funde nebenbei: ausgeschriebener Verweis "Paragraf 5 Absatz 2" im Zahlplandialog, und ein Build-Fehler bei verketteten Vorlagenzeichenketten, der nur im Rauchtest sichtbar war. -->
- [x] 🤖 Claude | Restliste der Zusagen abgearbeitet: Relaunch-Satz ohne Ranking-Versprechen, Analyse-Karte auf Core Web Vitals, "in 60 Sekunden" mit zehn Laeufen gemessen (Median 6,6 s, Spanne 1,5 s, keiner ueber 60) und deshalb belassen, Ladezeit ohne Zahl und DSGVO-Karte unveraendert (PR 31, 04.09.2026) ✓
  <!-- Protokoll docs/analyse/zusagen-restliste-2026-09.md, Rohdaten messung-analyse-2026-09-04.json, Skript scripts/messe-analyse.mjs. Gemessen ohne E-Mail, also ohne Lead in der Datenbank. -->
- [ ] 🤖 V2-Nachlauf: AGB und Vertragstexte anwaltlich pruefen lassen, danach vertrag.versand_frei auf true (Unternehmen, Stammdaten, Vertraege)
- [x] 🤖 Claude | V3 Wiederkehrend: Ausblick 30 Tage unter /admin/rechnungslauf, Erinnerung Stufe 2 als Ankuendigung der Sperre nach § 14 Abs. 5, Laufprotokoll mit einer Zeile je Vertrag (Zeitraum, Ergebnis, Grund), Idempotenz ueber den Leistungszeitraum statt ueber das Erzeugungsdatum (PR 41, 07.09.2026) ✓
  <!-- Notiz (Dave, 03.09.2026): rechnungslauf.letzter speichert nur den letzten Lauf. Mit Stufe 2 und dem 30-Tage-Ausblick wird daraus eine Laufhistorie, sonst ist am 02.10. nicht mehr sichtbar, was am 01.10. uebersprungen wurde. -->
  <!-- Der Paragraf-19-Waechter aus der alten Zeile steht schon seit V7 in lib/waechter.ts. Den Idempotenz-Test deckt "derselbe Monat wird nicht zweimal berechnet" in __tests__/rechnungslauf-aufholen.test.ts ab. Keine Migration. 1896 Tests, Rauchtest gegen meyso.de mit 98 Routen ohne 5xx. Trockenlauf und Bilder bei 390, 1120, 1920 in docs/analyse/v3-rechnungslauf. -->
  <!-- Nebenbefund im Bild bei 390: admin-nur-desktop blendete im Tabellenkopf nur den Text aus, nicht die Huelle darum. Die leere Huelle verbrauchte mobil eine Spalte, der Kopf stand schief ueber seinen Werten. Lag in DataTable und traf jede Ansicht mit eigenem mobilen Raster, etwa die Auftraege. Behoben, Gegenprobe liegt bei. -->
- [x] 🤖 Claude | V3 Rest, jetzt mit Inhalt: Waechterpruefung "Faelligkeit ausserhalb der Laufzeit". Sie meldet einen Vertrag, dessen next_invoice_due nicht zu seiner Laufzeit passt, also vor dem Beginn liegt, nach dem Ende liegt, oder mehr als ein Intervall hinter dem heutigen Tag. Wartet auf die naechste Waechter-Runde, kein eigener Termin ✓ Pruefung 18 (PR 64, 20.09.2026)
  <!-- Drei Widersprueche statt eines: Faelligkeit hinter dem Ende eines beendeten Vertrags (nur melden), vor dem Beginn eines aktiven (nur melden), oder mehr als ein Intervall zurueck (kritisch, mit Link auf den Rechnungslauf). Das Intervall entscheidet mit, derselbe Tag ist monatlich ein Rueckstand und jaehrlich keiner, plus drei Tage Puffer. -->
  <!-- Erster Lauf gegen Production am 20.09.2026: findet VT-2026-005, beendet zum 07.09.2026 und faellig zum 01.10.2026. Die vier gesunden Vertraege bleiben still. -->
  <!-- Loest die alte Zeile "Widerspruch erste Faelligkeit" ab, deren Inhalt nie festgelegt war (entschieden am 09.09.2026). Beispiel im Bestand: VT-2026-005 steht auf beendet und traegt trotzdem next_invoice_due 01.10.2026. Folgenlos, weil der Lauf nur aktive Vertraege liest, aber genau der Fall, den die Pruefung meldet. -->
- [x] 🤖 Claude | V3 dazu: Leistungszeitraum bei Anzahlungsraten. Auf einer Anzahlung steht jetzt "Anzahlung, Abrechnung des Leistungszeitraums mit der Schlussrechnung" statt eines Kalendermonats. Die Vorbelegung mit dem Kalendermonat gilt nur noch fuer Wartung und Hosting, eine Schlussrechnung ohne echten Zeitraum bekommt gar kein Feld statt einer Vermutung (PR 41, 07.09.2026) ✓
  <!-- Aufgefallen am 09.09.2026 im Trockenlauf der ersten Ziegler-Rechnung: der Bogen wies fuer eine Anzahlung 01.09. bis 30.09. aus. Bei einem Projekt kehrt nichts wieder, der Monat ist dort keine Leistung, sondern ein Rest der Wartungsvorlage. Betrifft lib/beleg.ts (belegDaten faellt auf den Kalendermonat zurueck) und den Rechnungsdialog. -->
- [x] 🤖 Claude | V3 Rueckstand a) Der Backstop fragt nach dem Leistungszeitraum statt nach irgendeiner Rechnung der letzten 25 Tage. Ein Nachhollauf im selben Monat verbrennt den offenen Monat nicht mehr. Fuer Altbelege ohne Zeitraum greift eine Sperre von zwei Tagen ab created_at (PR 41, 07.09.2026) ✓
- [x] 🤖 Claude | V3 Rueckstand b) Ein Lauf holt alle faelligen Zeitraeume auf, gedeckelt bei zwoelf je Vertrag und Lauf, der Deckel wird gemeldet. Ein Vertrag mit Ende wird nur bis zu seinem Ende abgerechnet. Der Rueckstand baut sich damit ab statt auf (PR 41, 07.09.2026) ✓
  <!-- Befund vom 05.09.2026, nur geprueft. Der Ueberspringen-Zweig bei fehlender Anschrift (:295) laesst next_invoice_due korrekt stehen, es geht also kein Monat verloren. Beide Punkte gehoeren zusammen: (a) musste vor (b), sonst haette ein Nachhollauf es schlimmer gemacht. -->
- [x] 👤 Dave | Rechnung 2026-015 storniert (Problemlos, 20 Euro): der Vertrag VT-2026-005 war als versehentlich angelegt beendet worden, die Rechnung deckte trotzdem den ganzen September. Geloescht werden konnte sie nicht (Paragraf 147 AO), der Weg war der Storno. Gegenbeleg 2026-016 (09.09.2026) ✓
  <!-- Aufgefallen am 07.09.2026 bei der Klaerung zu VT-2026-005. Nebenbefund am Beleg selbst: email_sent steht auf true, email_sent_at ist leer, im mail_log liegt keine Zeile. Jeder heutige Codeweg setzt beide Felder zusammen und schreibt das Protokoll dazu, die drei Werte passen also nicht zusammen. Nur gelesen, nichts angefasst. -->
- [x] 🤖 Claude | Hotfix: der Storno scheiterte an einem doppelten CHECK auf invoices.status. invoices_status_check (mit mahnung) stand neben invoices_status_bekannt (mit ausgeglichen), beide mussten erfuellt sein, und genau der Wert, den storniere_rechnung schreibt, fiel aus dem Schnitt (PR 46, Migration 20260909_status_check_bereinigen.sql, 09.09.2026) ✓
  <!-- Der alte CHECK stand in keiner Migration dieses Repos: das Suffix _check vergibt Postgres selbst bei einem CHECK ohne Namen an einer Spalte. Er stammte aus der urspruenglichen Tabelle, wie damals der doppelte Index. mahnung ist ein Wert, den der Code nie schreibt, er belegt die Herkunft. Der Storno einer bezahlten Rechnung haette funktioniert, dort steht offen: deshalb ist es nie aufgefallen. -->
  <!-- Storno danach gegen Production nachgelesen: Gegenbeleg 2026-016, typ storno, Betrag -20, Status ausgeglichen, Verweis auf 2026-015, Position negiert, eigenes PDF. 2026-015 auf storniert mit Zeitpunkt, Grund und Rueckverweis, dieselbe Transaktionszeit. mail_log null Zeilen zu beiden, email_sent am Gegenbeleg false. -->
  <!-- Zwei Kleinigkeiten am Rand, beide im Protokoll: der storno_grund ist abgeschnitten ("Vertrag irrtuemlich angeleg"), und der alte Widerspruch an 2026-015 (email_sent true, email_sent_at leer, kein mail_log) steht weiter. -->
- [x] 🤖 Claude | Katalog lesbar ohne SQL-Editor: check_bedingungen(text[]) gibt die CHECKs des Schemas public zurueck, nur Metadaten, nur service_role, kein SECURITY DEFINER. Dazu scripts/check-bedingungen.mjs, das die Markdown-Tabelle erzeugt und warnt, wenn auf einer Spalte mehr als eine Wertemenge steht (PR 46 und 47, Migration 20260909_check_bedingungen_lesen.sql, 09.09.2026) ✓
  <!-- Nachher-Protokoll in docs/finanzen/status-check-2026-09.md: 25 Bedingungen auf invoices, client_contracts, angebote und aenderungen, davon 12 Wertemengen, je Spalte hoechstens eine. Auf invoices neun statt zehn. Keine der drei anderen Tabellen hatte einen zweiten CHECK auf derselben Spalte, der Fall war ein Einzelfall. -->
  <!-- Neue Regel in docs/migrationen.md: jeder PR mit einer Migration, die Bedingungen anfasst, traegt die Vorher-Nachher-Liste. Bewacht von __tests__/migrations-protokoll.test.ts ab dem 09.09.2026, aeltere Migrationen bleiben aussen vor. -->
  <!-- Zweimal derselbe Fehler unterlaufen: eine Regel, die mit "spalte = ANY (ARRAY[...])" anfaengt und mit OR weitergeht, ist keine Wertemenge. Erst im Test zu den Migrationsdateien, dann im Skript als Fehlalarm auf invoices.art. Die Erkennung liegt jetzt an einer Stelle, scripts/lib/wertemenge.mjs, mit eigenen Tests an den echten Definitionen. -->
- [x] 🤖 Claude | Die zwei Fragen aus dem Storno beantwortet (PR 48, 09.09.2026) ✓ Der storno_grund ist keine Laengenbegrenzung, sondern ein Vertipper. email_sent ohne Zeitpunkt ist kein Einzelfall, sondern der ganze Bestand aus der Zeit vor V0a.
  <!-- storno_grund an allen vier Stellen geprueft: die Spalte ist text ohne Laenge, das Eingabefeld traegt kein maxLength (die Input-Komponente kennt es nicht), lib/storno.ts trimmt nur, die Funktion btrimmt nur. -->
  <!-- email_sent: 13 von 13 Rechnungen tragen die Fahne, genau eine traegt einen Zeitpunkt (2026-003 aus dem Nachversand), mail_log hat null Zeilen. Beide Spalten stehen in keiner Migration dieses Repos, also Vor-V0a-Herkunft wie der doppelte CHECK. mail_log entstand erst am 03.09.2026, der letzte Lauf davor war der 01.09. Ich hatte das am 07.09. zu eng als Widerspruch an 2026-015 beschrieben. -->
- [ ] 🤖 Probe am 01.10.2026: der erste Beleg aus dem neuen Weg muss email_sent, email_sent_at und die Zeile im mail_log zusammen tragen. Damit schliesst der Vermerk zur Vor-V0a-Herkunft
- [x] 🤖 Claude | Admin-Zugaenge mit Rollen: mehrere Personen melden sich mit eigenem Zugang an, jeder Verlaufseintrag und jede Mail traegt den Namen. Drei Rollen (inhaber, partner, assistenz) als ausgeschriebene Matrix, dazu eine zweite Tabelle Pfad auf Aktion. Alle 105 Admin-Routen und die Seiten dahinter haengen an der Wache (PR 49, Migration 20260909_admin_zugaenge.sql, 09.09.2026) ✓
  <!-- Wiederverwendet statt kopiert: das Anmeldeverfahren aus dem Portal steht jetzt in lib/magic-link.ts und wird von beiden gerufen, lib/portal-sitzung.ts reicht nur noch durch und behaelt jede Ausfuhr. Die 115 Portaltests blieben unveraendert gruen. Was Portal und Admin trennt, sind drei Tabellennamen und ein Geheimnis. -->
  <!-- Ein Pfad ohne Eintrag in PFAD_AKTION bekommt kein Recht und wird mit 500 abgewiesen, laut statt lautlos. __tests__/admin-rollen.test.ts laeuft den Dateibaum ab und zaehlt Luecken, nicht Faelle. Gegenprobe: eine Route ohne Eintrag angelegt, fuenf Tests rot, Route entfernt. -->
  <!-- Vier Luecken, alle vor dem PR geschlossen, alle waeren sonst live gegangen: /admin/finanzen antwortete der Assistenz mit 200 (bewacht waren nur die Routen, nicht die Seiten), der Proxy liess nur admin_auth durch und haette die Anmeldung per Link an der Vortuer abgewiesen, lesen und schreiben waren auf gemeinsamen Pfaden zusammengefasst, und HEUTE zeigte der Assistenz Zahlen und begruesste jeden mit Fabian. Die letzten beiden fielen erst im Bild auf. -->
  <!-- Nachweise vor dem Merge: 2058 Tests in 105 Dateien gruen (55 neu), next build gruen, Bilder bei 390, 1120 und 1920 in docs/analyse/admin-zugaenge (Anmeldung, Huelle als inhaber und als assistenz, Block Zugaenge, Block vor der Migration). -->
  <!-- Nach Migration und Deploy am 09.09.2026 gegen meyso.de, 101 Routen je Rolle, kein 5xx: inhaber 101 durch, partner 83 durch und 1 abgewiesen (/api/admin/zugaenge), assistenz 48 durch und 48 abgewiesen. Seiten weist die Wache mit 307 auf /admin zurueck, nicht auf /admin/login: die Sitzung war gueltig, es fehlte das Recht. Nachher-Protokoll der CHECKs in docs/admin-zugaenge.md, admin_personen mit einer Zeile (inhaber), admin_tokens und admin_sitzungen leer. -->
  <!-- Anmelderoute mit einer Adresse geprobt, die es in admin_personen nicht gibt: 200 statt 503 belegt ADMIN_SESSION_SECRET in Vercel, und ohne Person ging keine Mail hinaus. -->
- [ ] 👤 Dave | Sich einmal ueber /admin/login mit kontakt@meyso.de anmelden und pruefen, dass der Link ankommt, genau einmal gilt und die Seitenleiste Namen und Rolle zeigt. Bis dahin ist der Notzugang der einzige belegte Weg hinein
- [ ] 🤖 Zweite Person anlegen, sobald Dave sagt wen: ueber /admin/unternehmen/zugaenge einladen, Rolle partner. Die Rolle assistenz bleibt vorerst unbesetzt, sie steht nur in der Matrix
- [x] 🤖 Claude | Zugaenge in die Navigation, und eine Wache dagegen: Register Zugaenge unter Unternehmen hinter Bausteine, nur fuer die Rolle inhaber. Der alte Punkt Zugang heisst jetzt Notzugang, weil er nur noch das gemeinsame Passwort hinter admin_auth ist. Neu __tests__/navigation-wege.test.ts, die fuer jede Seite unter app/admin einen eingehenden Link verlangt und fuers Portal gegen PORTAL_BEREICHE je Rolle prueft (PR 50, 09.09.2026) ✓
  <!-- Nicht als Weg zaehlen: die Befehlszentrale (sie kennt jeden Pfad, aber nur wenn man sucht), lib/admin-rechte.ts (dort steht jeder Pfad, die Wache waere sonst wertlos), ein redirect(), die eigene Datei und jede Datei einer Kindseite. Dynamische Seiten werden ueber die Form verglichen: /admin/kunden/[id] und /admin/kunden/${id} werden beide zu /admin/kunden/*. Ausnahme mit eigenem Test: /admin/login und /portal/anmelden sind die Tuer, kein Raum dahinter. -->
  <!-- Vier Seiten hatten keinen einzigen eingehenden Link und haben jetzt einen: /admin/unternehmen/zugaenge ueber das Register, /admin/content ueber den Punkt Inhalte in der Seitenleiste, /admin/leistungen ueber einen Knopf auf /admin/content, /admin/workflows/[id]/briefings ueber einen Knopf je Zeile der Automationsliste. Der letzte war ein geschlossener Kreis: die Briefings-Seite und die Seite darunter verlinkten sich gegenseitig, von aussen zeigte nichts hin, man kam nur durch Tippen der Adresse hin. -->
  <!-- Zwei Funde erst im Bild bei 1120: die Seitenleiste war unten abgeschnitten (das nav rollte allein, 478 Pixel Inhalt auf 384 Pixel Platz, der Studio-Link stand im Markup und war nicht zu sehen, ohne Hinweis, und das galt schon vorher). Jetzt rollt die ganze Leiste; bei 900 und 1080 passt ohnehin alles, bei 760 rollt dafuer der Fuss mit. Und: das Sanity Studio stand auch der Assistenz offen, waehrend der interne Weg zu denselben Inhalten fuer sie ausgeblendet war. Keine Luecke, Sanity hat eine eigene Anmeldung, aber irrefuehrend. Beide haengen jetzt an derselben Bedingung. -->
  <!-- Gegenprobe der Wache: Seite app/admin/probe-ohne-weg angelegt, rot mit Pfad; Briefings-Link aus lib/betrieb.ts entfernt, rot; Portalseite app/portal/(innen)/probe angelegt, rot. Alle drei zurueckgenommen. Zusammengefuehrt wurde Notzugang nicht, obwohl der Auftrag es freistellte: dann waere das Passwort nur ueber das Register erreichbar, das allein der Inhaber sieht, und ein Notausgang gehoert an eine Stelle, die man ohne Nachdenken findet. Bilder und Zahlen in docs/analyse/navigation/ansicht.md. Keine Migration. -->
  <!-- Korrektur zum Auftrag: ein Register Steuer gibt es unter Unternehmen nicht. Die Leiste hiess Firmenstammdaten, Dokumente, Vertraege und Abos, EUeR-Kategorien, Anlagen, Bausteine. -->
  <!-- Nach Merge und Deploy am 09.09.2026 gegen meyso.de: 2078 Tests in 106 Dateien gruen (20 neu), Rauchtest je Rolle unveraendert und ohne 5xx (inhaber 101 durch, partner 83 durch und 1 abgewiesen, assistenz 48 durch und 48 abgewiesen). Nachgelesen: als inhaber steht Zugaenge in der Registerleiste, als partner nicht; als assistenz fehlen Inhalte, Studio und Notzugang; Content und Leistungen verlinken einander; /admin/workflows traegt den Knopf Briefings. -->
- [x] 🤖 Claude | Rolle vertrieb: Rechtematrix, Zuordnung an Leads, Deals, Wiedervorlagen, Kunden und Angebotsentwuerfen, Absender je Person, Grundlage je Outreach-Kandidat mit Abgleich gegen Kunden und Leads (PR 55, Migration 20260910_rolle_vertrieb.sql, 10.09.2026) ✓
  <!-- Bestandsaufnahme vorweg in docs/rolle-vertrieb.md: das Outreach-Modul hatte 82 Kandidaten aus einer Google-Suche, keine Vorlagen, keinen Versandweg, kein Protokoll, keinen Abgleich gegen Bestandskunden und keine Grundlage. Die Person stand nur in kunden_notizen und mail_log, seit PR 49. -->
  <!-- Outreach hing an betrieb.sehen und hat jetzt outreach.sehen und outreach.senden, Partner bekommt beide, damit sich fuer Mike nichts aendert. Angebote haben drei Stufen statt zwei: entwerfen, festschreiben, senden. vertrieb darf nur entwerfen. -->
  <!-- Der Code laeuft gegen eine Datenbank ohne die Migration weiter, das war noetig und ist nachgewiesen: ohne den Rueckfall in personAusSitzung waere aus der fehlenden Spalte absender_email eine Aussperrung geworden, und die Outreach-Liste haette "Noch kein Betrieb erfasst" gemeldet, obwohl 82 dastehen. Routenlauf ohne Migration: nur die vier bekannten GitHub-Routen mit 5xx. -->
  <!-- Routenlauf mit vier Rollen gegen den lokalen Build, 101 Routen: inhaber 101 durch, partner 78 durch und 1 abgewiesen, assistenz 47 durch und 50 abgewiesen, vertrieb 49 durch und 45 abgewiesen. Bilder von HEUTE als vertrieb und als inhaber bei 390, 1120 und 1920. Von der Outreach-Liste bewusst kein Bild: sie zeigt 47 Firmennamen mit Adressen, und die gehoeren nicht in die Historie eines Repos, schon gar nicht in derselben Runde, in der die Grundlage dieser Liste zur Pruefung ansteht. -->
  <!-- Nach Merge und Deploy am 10.09.2026 gegen meyso.de: Migration bestaetigt (4 Bedingungen, 2 Wertemengen, je Spalte hoechstens eine; alle neuen Spalten da, drei Personen mit absender_email kontakt@meyso.de). Rauchtest je Rolle ohne 5xx: inhaber 103 durch, partner 84 durch und 1 abgewiesen, assistenz 48 durch und 50 abgewiesen, vertrieb 50 durch und 45 abgewiesen. Nachgelesen: als vertrieb ist /admin/outreach offen (82 Betriebe, 47 ansprechbar), Finanzen, Betrieb und Unternehmen leiten auf /admin, die Abgleichroute antwortet als vertrieb mit 200 und als assistenz mit 403. -->
  <!-- Dabei ein Leck gefunden, aelter als diese Etappe: HEUTE blendete die zwei Geldkennzahlen aus, schickte sie aber im Antwortstrom mit, ebenso Geld im Monat und die stillen Kunden. Der Filter stand seit jeher im Browser; PR 49 hatte nur die Buchhaltungskachel auf die Serverseite gezogen. Es traf also auch assistenz. Behoben in PR 56, dort filtert die Seite, bevor etwas hinausgeht. -->
- [ ] 🤖 Ratenbegrenzung nach Upstash, vor dem Outreach-Versand. Heute haelt createRateLimiter eine Map im Modulscope, also im Arbeitsspeicher der jeweiligen Lambda-Instanz: nichts wird geschrieben, ein Kaltstart setzt sie zurueck, und die Grenze gilt je Instanz statt global. Bei mehreren warmen Lambdas hat ein Anrufer effektiv mehr als die 3 je Adresse und 10 je IP der Portal-Anmeldung. Fuer eine Anmeldung ist das laestig, fuer einen Massenversand ist es die falsche Grundlage: ohne verlaessliche Zaehlung laesst sich weder eine Obergrenze je Tag halten noch nachweisen, dass sie gehalten wurde. Aufgefallen am 10.09.2026 beim Nachlesen der Portal-Anmeldung, dort war sie nicht die Ursache, nur nicht nachlesbar
  <!-- Umfang: ein gemeinsamer Zaehler ausserhalb des Prozesses (Upstash Redis oder dieselbe Rolle in einer Tabelle), dieselbe Schnittstelle wie createRateLimiter, damit die bestehenden Aufrufstellen unveraendert bleiben, und ein Rueckfall auf die Speicherfassung, wenn der Dienst nicht antwortet: eine gescheiterte Zaehlung darf keine Anmeldung verhindern. Dazu ein Protokolleintrag, wenn eine Grenze greift, sonst ist auch die neue Zaehlung nicht nachlesbar. -->
- [ ] 👤 Dave | Die Kandidatenliste des Crawlers auf ihre Grundlage nach DSGVO pruefen, bevor jemand sie systematisch abarbeitet: Informationspflicht nach Artikel 14 (die 82 wissen nicht, dass ihre Daten hier liegen), Eintrag im Verzeichnis der Verarbeitungstaetigkeiten, Aufbewahrungsdauer und Loeschung der Verworfenen. Die Technik steht jetzt, die Entscheidung nicht
- [x] 🤖 Claude | Wartung oder Hosting steht in einem Angebot genau einmal (PR 63, 20.09.2026) ✓ Erst geprueft und belegt, dann die Regel.
  <!-- Zwei Wege fuehrten eine laufende Leistung ins Angebot und taten bei der Annahme Verschiedenes: die Vormerkung (angebote.wartung_monatlich_cents) wandert in den Auftrag und wird bei dessen Abnahme zum Vertrag, die Position (angebot_items.art monatlich) geht sofort an den Vertrag. -->
  <!-- Frage 1 beantwortet: ohne Projektposition war beides moeglich, je nach Weg. Als Position entstand ein Vertragsentwurf und kein Auftrag, aber ohne Beginn. Als Vormerkung mit einer Position ueber null Euro entsteht ein Auftrag mit leerem Zahlplan, weil Wert und Plan beide an summe_cents groesser null haengen; der Vertrag kommt bei der Abnahme. Das bleibt so, es ist der vorgesehene Weg. -->
  <!-- Frage 2 beantwortet: keine zwei Vertraege. Der monatliche Weg kehrt mit return zurueck, bevor der Auftragsweg beginnt, und nur der liest wartung_monatlich_cents. Es entstand ein Vertrag ueber die Position, kein Auftrag, und der vorgemerkte Betrag verfiel stumm: Annahme meldet Erfolg, Kunde bekommt seine Bestaetigung, die Zahl vom Bogen wird nie berechnet. Die bestehende Pruefung gegen gemischte Posten greift dort nicht, sie vergleicht Positionsarten, und die Vormerkung ist keine Position. -->
  <!-- Im Bestand waren beide Faelle leer, geprueft gegen Production vor der Aenderung: ein Angebot, und das ist der Normalfall aus Projekt plus vorgemerktem Hosting. Vorsorge, kein Brand. -->
  <!-- Die Regel an vier Stellen: Eingabepruefung weist ab, Annahme weist mit 409 ab (die vorher entstandenen tragen weiter einen gueltigen Link), der Vertragsentwurf bekommt den Ersten des Folgemonats als Beginn, der Dialog sperrt das Wartungsfeld mit dem Grund daneben. Der Beginn ist gefahrlos, weil der Rechnungslauf nur Vertraege mit aktiv true nimmt. -->
  <!-- Acht Tests, zuerst gegen den alten Stand geschrieben und danach auf die Regel gedreht, das alte Verhalten im Kommentar. Gegenprobe an allen vier Stellen: entschaerft werden fuenf davon rot. 2196 Tests gruen. -->
- [x] 🤖 Claude | DELETE auf /api/admin/angebots-bausteine soll 404 liefern, wenn es die Kennung nicht gibt. Heute antwortet die Route mit 200 und {ok:true}, ohne die getroffenen Zeilen zu zaehlen: supabase.delete().eq() meldet keinen Fehler, wenn nichts passt. Der Aufrufer kann damit nicht unterscheiden, ob er geloescht hat oder ins Leere griff, und die Oberflaeche nimmt die Zeile trotzdem aus der Liste. Aufgefallen am 11.09.2026 beim Methodenlauf zu den neuen Rechten: dort steht bei inhaber und partner DELETE 200 auf eine erfundene Kennung, und genau diese 200 heisst nur "durchgelassen", nicht "etwas passiert" ✓ Erledigt in PR 64 (20.09.2026), und nicht nur dort.
  <!-- Betroffen waren dreizehn Routen, nicht eine: lib/loeschen.ts haengt ein select() an das delete und zaehlt. Angewandt, wo die Route einen einzelnen Datensatz meint; die neun Ausnahmen stehen mit Grund im Test (Aufraeumen als Nebenwirkung, Ruecknahme im Fehlerfall, Abmeldung, die zweimal gehen darf). -->
  <!-- Eine Baumprobe haelt fest, dass keine Loeschstelle im Admin in keiner der beiden Listen fehlt. Sie hat zwei Routen gefunden, die der erste Durchgang uebersehen hatte, weil ein head -20 die Liste abgeschnitten hatte. Die Oberflaeche laedt bei 404 neu, statt eine Zeile zu entfernen, die es nie gab. -->
  <!-- Umfang: select("id") an das delete haengen und bei leerer Antwort mit 404 und demselben Satz antworten wie PATCH ("Diesen Baustein gibt es nicht."). Dazu die Stelle in UnternehmenClient, die nach dem Loeschen die Zeile entfernt: bei 404 gehoert die Liste neu geladen, nicht die Zeile weggenommen. Und ein Blick, wo dieselbe Bauart sonst steht, das Muster delete().eq() ohne Zaehlung ist im Admin nicht auf diese eine Route beschraenkt. -->
- [x] 🤖 Beenden und Kuendigen sollen next_invoice_due auf null setzen, sobald das Ende erreicht ist. Sonst meldet Pruefung 18 denselben Vertrag dauerhaft: VT-2026-005 ist seit dem 07.09.2026 beendet und traegt weiter den 01.10.2026 als naechste Faelligkeit. Der Rechnungslauf nimmt nur aktive Vertraege, es passiert also nichts, aber das Datum behauptet etwas Falsches, und wer den Vertrag wieder aktiviert, bekommt eine Rechnung fuer eine Zeit ohne Leistung. Aufgefallen am 20.09.2026 beim ersten Lauf der neuen Pruefung (05.10.2026: der Bestand ist aufgeraeumt, VT-2026-005 traegt keine Faelligkeit mehr, Pruefung 18 live ohne Treffer; offen bleibt der Code) (05.10.2026 spaet: Beenden leert die Faelligkeit, PR 92 gemergt (5375c13), VT-2026-005 live weiter leer. Offen bleibt der Rechnungslauf, der einen gekuendigten Vertrag beim Erreichen des Endes auf beendet setzt und das Datum stehen laesst, lib/generate-invoices.ts. Dazu meldet Pruefung 18 einen gekuendigten Vertrag schon im letzten Monat, weil sie gekuendigt wie beendet behandelt und der Lauf die Faelligkeit nach der letzten Rechnung hinter das Ende schiebt; Befund aus dem Review zu PR 92, im Code gelesen, nicht live nachgestellt) (05.10.2026 abends: der Rechnungslauf leert die Faelligkeit beim automatischen Ende jetzt ebenfalls, PR 93 offen; die Regel von Pruefung 18 fuer gekuendigte Vertraege steht als eigene Zeile zur Entscheidung) (05.10.2026 spaetabends: PR 93 gemergt (6e09e98) und live; die Regel von Pruefung 18 steckt in PR 94, nach dessen Merge ist diese Zeile erledigt) (05.10.2026 nachts: PR 94 gemergt (b03e778) und live, die Regel von Pruefung 18 laeuft; erledigt) ✓
  <!-- Umfang: die zwei Stellen, die den Status auf beendet oder gekuendigt setzen, raeumen next_invoice_due mit ab, sobald ende erreicht oder ueberschritten ist. Beim Kuendigen mit Ende in der Zukunft bleibt es stehen, dort laeuft die Abrechnung bis zum Ende weiter; erst der Lauf, der das Ende passiert, setzt es auf null. Dazu ein einmaliges Aufraeumen des Bestands, sonst bleibt VT-2026-005 stehen. Pruefung 18 meldet danach nichts mehr, und genau das ist die Probe. -->
- [ ] 🤖 Der Angebotsdialog muss fuer vertrieb ausserhalb von /admin/finanzen erreichbar sein. Die Rolle hat angebote.entwerfen und seit dem 11.09.2026 auch bausteine.lesen, kommt aber an keinen Weg dorthin: AngebotDialog wird nur aus FinanzenClient geoeffnet, und finanzen.sehen ist fuer vertrieb aus. Das Recht steht damit richtig da und greift nicht, und genau so steht es auch in docs/rolle-vertrieb.md
  <!-- Umfang: der Dialog haengt heute an einem Deal aus der Finanzen-Liste. Er braucht einen zweiten Einstieg, der ohne finanzen.sehen auskommt, naheliegend aus der Kundenakte oder aus dem Deal in /admin/leads. Zu klaeren ist dabei, was vertrieb im Dialog sehen darf: er zeigt Preise aus den Bausteinen, das ist durch bausteine.lesen gedeckt, aber die Deal-Liste daneben nicht. Der Nachweis ist wieder ein Routenlauf als vertrieb, diesmal mit der Seite, die den Dialog traegt. -->
- [x] 🤖 Claude | Admin-Geschwindigkeit: erst gemessen, dann nur das ohne Nebenwirkung geaendert. Vier Messwerkzeuge in scripts, je Aenderung ein eigener Commit, Protokoll in docs/analyse/tempo/admin-tempo-2026-09.md (PR 51, 09.09.2026) ✓ Summe warm ueber 32 Seiten 10676 auf 8725 ms, also 1951 ms weniger.
  <!-- Nachher-Tabelle gegen meyso.de, gleiches Skript, gleiche Seiten, gleiche Sitzung, fuenf warme Laeufe reihum: /admin/finanzen 898 auf 335 ms (-63 %), /admin/kunden/[id] 560 auf 310 ms (-45 %), /admin/rechnungslauf 386 auf 209 ms (-46 %), /admin/aenderungen 319 auf 190 ms (-40 %), der Rest zwischen -15 und -28 %. Die zwei Spitzenreiter sind die, bei denen beides zusammenkam: Abfragen nebeneinander und 6,7 MB weniger im Buendel. -->
  <!-- Drei Zahlen, die nichts belegen: /admin schwankt zwischen 420 und 770 ms warm und zwischen 1,2 und 3,8 s kalt, weil es als einzige Seite weiter 8,7 MB traegt. /admin/leistungen hat eine falsche Kaltzahl, ich hatte die Seite zwei Minuten vorher mit einer Filterprobe aufgewaermt. Drei Seiten stehen mit rund +30 ms da, bei Werten um 250 ms ist das Rauschen. -->
  <!-- Gefunden: die Sitzung wurde zweimal je Aufruf aufgeloest (Huelle und Seite), behoben mit personDerAnfrage() in cache() aus React. Auf /admin/finanzen standen sechs unabhaengige Abfragen untereinander, jetzt nebeneinander. Drei Admin-Seiten trugen @react-pdf mit 6,7 MB, ohne je ein PDF zu rendern: drei reine Verschiebungen (lib/beleg-pdf.ts, lib/rechnungslauf-grenzen.ts, lib/angebot-ablauf.ts). Ein dynamisches import() allein reichte nicht, Next verfolgt auch die dynamischen Wege. Vierzehn Knoepfe waren blanke Anker und damit ein voller Seitenaufbau, jetzt Link. -->
  <!-- Aus der Vercel-API: Funktionen laufen in fra1, die Projekteinstellung steht aber auf iad1 (Washington), nur vercel.json ueberschreibt sie. Fluid Compute aktiv. Die Runde fra1 nach Supabase eu-west-1 kostet warm 50 bis 60 ms, gemessen mit der neuen Route /api/admin/betrieb/latenz. Von aussen war sie nicht messbar, sie liegt unter dem Rauschen der Leitung. Die Zahl enthaelt Weg und PostgREST-Arbeit, ein Umzug nach dub1 kuerzte nur den Weg: sie ist die obere Schranke, nicht der erwartete Gewinn. -->
- [x] 🤖 Claude | Fehler aus PR 51 behoben, gefunden in der eigenen Nachher-Messung: der Waechter lief nach der ersten Runde statt neben ihr. Ein Baustein hinter einem Suspense wird erst gerendert, wenn die Seite fertig ist, und weil er die Abfrage selbst startete, wurde aus max(Rest, Waechter) ein Rest plus Waechter (PR 53, 09.09.2026) ✓ Jetzt wird ladeWaechter oben angestossen und im Baustein nur abgewartet.
- [x] 🤖 Claude | letzte_nutzung ohne Warten: gedrosselt auf fuenf Minuten, und wo geschrieben wird, hinter der Antwort ueber after() aus next/server. Gilt fuer Admin und Portal, beide laufen ueber lib/magic-link.ts. Neun Testfaelle in __tests__/letzte-nutzung.test.ts (PR 53, 09.09.2026) ✓
  <!-- Dass fuenf Minuten reichen, ist keine Annahme: letzte_nutzung wird von keiner Ansicht gelesen, die Spalte wird geschrieben und sonst nirgends im Repo angefasst. Ausserhalb einer Anfrage wirft after(), nachgemessen und nicht vermutet ("after was called outside a request scope"). Im Test, im Skript und im Cron wird deshalb gewartet: ein verlorener Schreibvorgang waere schlechter als eine gewartete Runde. -->
  <!-- NICHT GEMESSEN: der Gewinn aus dieser Aenderung. Das Messskript meldet sich ueber den Notzugang an, und der prueft nur eine Signatur, er liest weder Sitzung noch Person aus der Datenbank. Genau der Weg, den die Aenderung beschleunigt, wird also nicht gegangen. Eine echte Sitzung war nicht zu beschaffen: in admin_sitzungen steht nur der Hash des Cookies, und ADMIN_SESSION_SECRET liegt nur in Vercel, nicht in .env.local. Der Gewinn steht deshalb als Rechnung aus zwei gemessenen Groessen: eine Runde kostet warm 50 bis 60 ms, und die Sitzung braucht statt drei nur noch zwei. Entschieden am 09.09.2026 von Dave, ohne b2. -->
  <!-- Nach Merge und Deploy am 09.09.2026 gegen meyso.de: Rauchtest je Rolle ohne 5xx (inhaber 102 durch, partner 84 durch und 1 abgewiesen, assistenz 48 durch und 49 abgewiesen). Zwei Seiten uebersprungen statt geprueft: die Briefings-Seiten brauchen eine Workflow-Kennung, und die kommt aus einer Route, die assistenz nicht sehen darf. -->
- [ ] 🤖 Offen aus der Tempo-Runde: der Gewinn aus letzte_nutzung ist ungemessen. Zwei Wege, wenn es jemanden interessiert: MEYSO_ADMIN_COOKIE aus dem Browser in die Umgebung und scripts/admin-zeiten.mjs laufen lassen, oder ADMIN_SESSION_SECRET nach .env.local, dann kann eine Sitzung angelegt, gemessen und sofort widerrufen werden
- [x] 🤖 Tempo 2: der PDF-Renderer ist aus Portal und /admin heraus (20.09.2026, PR 66) ✓
  <!-- Vorher trugen ihn 46 Routen unter /portal und /admin, jetzt keine mehr. Im ganzen Build 16 statt 55, und jede der 16 zeichnet wirklich. /admin 8,77 auf 2,21 MB, die acht Portalseiten 8,53 bis 8,67 auf 1,99 bis 2,11 MB, /report 7,83 auf 1,76 MB. 33 Routen, zusammen 215,9 MB weniger. -->
  <!-- Vier Kanten, nicht eine: lib/pdf/brand.ts hing an 17 Routen (Portal-Layout und Mailvorlage), lib/angebot-pdf ueber lib/angebote.ts an 11, lib/vertrag-pdf ueber lib/vertraege.ts an 8, lib/invoice-pdf ueber lib/beleg-pdf.ts an 7. brand.ts ist in Tokens und Renderer geteilt, die drei anderen verlangen den Zeichner jetzt als Parameter. -->
  <!-- Der Kaltstart hat sich NICHT messbar verbessert: 0,365 s gegen 0,325 s auf /portal/anmelden, 1,607 s gegen 1,566 s auf /admin, jeweils ueber dem Latenzboden und ohne die Deploy-Runde. Das ist Rauschen. Grund: die 6,5 MB sind ueberwiegend Schriftdateien, die erst beim Zeichnen gelesen werden. Belegt bleibt die Groesse. Protokoll in docs/analyse/tempo/renderer-kante-2026-09.md und kaltstart-2026-09.md. -->
  <!-- Wache: __tests__/nach-build/renderer-kante.test.ts liest die Spurdateien des Builds, kennt die Liste der 16 Routen, prueft auch die Gegenrichtung und faellt ohne Build statt zu ueberspringen. Dazu eine Schriftprobe an den Boegen: Geist und Instrument Serif stecken in den PDF-Bytes, kein Helvetica. -->
- [x] 🤖 Tempo 3: die Abfragen von /admin gemessen, Ketten und doppelte Abfragen entfernt (21.09.2026, PR 68) ✓ Das Ziel, kalt unter einer Sekunde bis zum ersten Byte, ist NICHT erreicht, und am Code liegt es nicht, siehe die Kaltstart-Zeile darunter
  <!-- Geaendert: Sitzung und Person in einer Runde statt zwei, die offenen Leads parallel statt nacheinander, 41 auf 38 Abfragen je Aufruf. Keine Zwischenspeicher, keine Regionsfrage, Abfrageergebnisse und Kennzahlen gleich, Pruefung 21 und Sichtbarkeitslauf gruen (100 Ziele, 0 Verstoesse gegen Production). Dazu die Innenmessung: mit dem Kopf x-meyso-messung liefert /admin je Abfrage Start und Dauer. Protokoll in docs/analyse/tempo/admin-abfragen-2026-09.md. -->
- [x] 🤖 Tempo 4 und 5: HEUTE in einem Aufruf (heute_dashboard) und der Waechterstand aus laeufe statt im Aufruf gerechnet (22.09.2026, PR 70 und PR 71) ✓ /admin schickt 4 Abfragen statt 38. Production, drei Runden mit sieben Minuten Ruhe: kalt 1,19 bis 1,83 s bis zum ersten Byte statt 3,5 bis 5,6 s (Median 1,6 statt 3,7 s), warm 0,35 bis 0,71 s statt 0,27 bis 0,45 s. Das Ziel, kalt unter einer Sekunde, ist NICHT erreicht
  <!-- Nach dem Deploy (11:12): Cron /api/cron/waechter-stand stuendlich um :07 registriert, erster Lauf 12:07:12 mit Stand und ohne Fehler. Rauchtest als vier Rollen ohne 5xx. Sichtbarkeitslauf 106 Ziele mal vier Rollen ohne Verstoss, alle 15 Muster, nach der Skriptkorrektur in PR 72: der Probekunde Meyso GmbH hatte keine Rechnung, jetzt laufen so viele Probekunden, bis jede Art abgedeckt ist. Reihe mit Innenmessung in Production, zwoelf Aufrufe hintereinander: erstes Byte 262 bis 415 ms, im Server 52 bis 145 ms, heute_dashboard 46 bis 112 ms, keine Spanne ueber 1 s. Die drei lokalen Ausreisser vom 22.09. vormittags (1497, 2816, 1628 ms) lassen sich nicht mehr zuordnen, die Reihe hatte nur das erste Byte behalten. Lokal mit allen Spannen wiederholt kamen sie nicht wieder, der neue Weg lag hoechstens bei 351 ms. Luecke der Innenmessung: sie wartet nicht auf die Huelle, deren Zaehlungen fehlen, wenn sie langsamer ist als die Seite (7 von 12 Aufrufen der Reihe). Protokoll docs/analyse/tempo/admin-abfragen-2026-09.md, Abschnitt "Tempo 4 und 5 in Production", Zahlen auch im Kommentar an PR 71. -->
- [ ] 🤖 heute_dashboard als eine SQL-Anweisung statt plpgsql pruefen, nur wenn der Erstaufruf in Production ueber 250 ms bleibt. Ohne Termin, nicht bauen (Dave, 22.09.2026). Stand der Messung: lokal kostet der erste Aufruf auf einer frischen Verbindung 250 bis 850 ms statt 80 bis 110 ms. In Production kalt 1086 bis 1693 ms, aber die drei anderen Abfragen im selben Ruf brauchen 911 bis 1585 ms; warm gleich danach 228 bis 641 ms und nicht laenger als die anderen; eingeschwungen 46 bis 112 ms. Den eigenen Anteil des ersten Aufrufs trennt die Messung in Production nicht vom Stau
- [x] 🤖 Dialoge: eine Hoehenregel fuer alle Modale (22.09.2026, PR 73, gemergt als 4cf4d45) ✓ Eine Huelle fuer Admin und Portal (components/ui/dialog-huelle.tsx): Portal an body, hoechstens Fensterhoehe minus 2rem, Kopf und Fuss fest, nur der Inhalt rollt, bis 900 Pixel Fensterhoehe oben mit Rand, Seite dahinter gesperrt, Escape schliesst nur den obersten, Fokus bleibt drin. Alle 42 Admin-Dialoge, die Befehlszentrale und die vier Portaldialoge laufen darueber, keine eigene Huelle mehr, Wache im Quelltext. Pruefgroessen jetzt vier: 390x844, 1366x768, 1120x760, 1920x1080
  <!-- Messung im Browser: 28 von 28 Messungen gehalten, sieben Dialoge mal vier Groessen, der Angebotsdialog mit acht Zeilen bei jeder Groesse genau Fensterhoehe minus 32 px und innen rollend. Bilder aller Dialoge bei vier Groessen unter docs/analyse/dialoge in meyso-website. Stammdaten sind kein Dialog: die Akte bearbeitet sie an Ort und Stelle. Mobil blenden die Tabellen in Finanzen Storno, Beleg und Kuendigung aus, das war schon vorher so. Sichtbar anders: Schnellerfassung und Portaldialoge kommen mobil nicht mehr als Blatt von unten. -->
  <!-- Nach Merge und Deploy am 22.09.2026 (meyso-website-f0f0j2co7, vier Sekunden nach dem Merge, meyso.de zeigt darauf): Rauchtest gegen meyso.de je Rolle ohne 5xx (inhaber 103 geprueft und 85 durch, partner 84 durch und 1 abgewiesen, assistenz 48 durch und 50 abgewiesen, vertrieb 50 durch und 45 abgewiesen). Sichtbarkeitslauf gegen meyso.de: 106 Ziele mal vier Rollen, nichts durchgekommen, jedes Muster hat gegriffen. Ein Abruf scheiterte an der Leitung (/admin/outreach/crawler als assistenz, fetch failed), der volle Lauf nach PR 74 prueft ihn mit. -->
- [x] 👤 Dave | PR 73 (Dialoge) entscheiden (22.09.2026: gemergt) ✓
- [x] 👤 Dave | Verhaltenstest der Dialog-Huelle mit jsdom und Testing Library (22.09.2026: nein, Browserprobe reicht) ✓ Das Verhalten prueft scripts/dialog-bilder.mjs --probe im echten Browser, keine neue Abhaengigkeit
- [x] 🤖 Die zwei E-Rechnungstests, die ein ZUGFeRD-PDF auspacken, haben jetzt ihre eigene Zeitgrenze von 30 s am Fall, nicht global (22.09.2026, Commit c2b2622 auf main) ✓ Unter Last brauchten sie 9 bis 23 s statt 1,4 s und fielen dreimal, ohne dass etwas kaputt war. Nachgewiesen mit --testTimeout=1: dabei fallen 16 Faelle der Datei, diese zwei nicht
- [x] 🤖 Auftraege-Runde: vier Zustaende und pausiert als Kennzeichen, Menue der Zustaende mit Wirkung, Wartungsvertrag-Dialog auf V2, Waechterpruefung 22, Auftragsliste ohne Umbruch (22.09.2026, PR 74, gemergt als 1cb1efe) ✓ Zustaende in_arbeit, abgenommen, live, abgeschlossen, Reihenfolge nach AGB § 5, live nur nach der Abnahme, abgeschlossen nur ohne offene Rechnung. Der Wartungsvertrag entsteht als Entwurf mit Typ aus der Vormerkung, Betrag je Intervall, Frist 30 Tage zum Monatsende, Minuten je Typ und AGB-Fassung, Festschreiben ist der zweite Klick und macht ihn aktiv. Pruefung 22 meldet einen Entwurf mehr als 7 Tage nach der Abnahme
  <!-- Suite 133 Dateien und 2523 Tests gruen, Gegenprobe mit 25 eingebauten Fehlern, jeder wird rot. Code-Review mit Nachpruefung: Migration nimmt auch abgenommen ohne Datum mit, zwei gleichzeitige Anlagen lassen keinen verwaisten Entwurf liegen, die Rechnungsvorschau kennt die Art. Rauchtest gegen den lokalen Build als vier Rollen ohne 5xx ausser den vier Routen, die GitHub fragen (lokal fehlt GITHUB_TOKEN). Messung der Liste bei vier Groessen: Titel einzeilig mit title, bei 1366 kein Umbruch im Wert (306 px), Bilder und messung.json unter docs/analyse/auftraege in meyso-website. Nebenbefund: ohne Paket haette der Rechnungsbogen im Lauf an charAt auf null abgebrochen und der Text "Paket null" geschrieben, beides behoben, mit Paket bleibt jeder Bogen gleich. -->
  <!-- Nach Merge und Deploy am 22.09.2026 (meyso-website-cs3z30d2j, drei Sekunden nach dem Merge, der neue Zustandsknopf stand nach 112 s auf meyso.de): Rauchtest gegen meyso.de je Rolle ohne 5xx (inhaber 103 geprueft und 85 durch, partner 84 durch und 1 abgewiesen, assistenz 48 durch und 50 abgewiesen, vertrieb 50 durch und 45 abgewiesen). Sichtbarkeitslauf 106 Ziele mal vier Rollen, nichts durchgekommen, jedes Muster hat gegriffen, ohne Leitungsfehler. Waechter "Jetzt pruefen" einmal ausgeloest: 22 Pruefungen, 39 Treffer, keine neue Stufe nach Paragraf 19. Im gespeicherten Stand (laeufe, Lauf c80e9569, 17:17 UTC) steht Pruefung 22 wartung_entwurf "Wartungsvertraege nach Abnahme noch Entwurf", Signal ok, 0 Treffer. Vor dem Merge war der Branch mit main zusammengefuehrt, der Squash-Commit von PR 73 hat denselben Baum wie dessen letzter Commit. -->
- [x] 👤 Dave | Migration 20260922_auftraege_zustaende.sql im SQL-Editor einspielen (22.09.2026: eingespielt, Katalog nachher wie erwartet: acht Bedingungen, zwei ersetzt, sechs unveraendert, Webseite in_arbeit, AN-2026-003 abgenommen, status mit Vorgabe in_arbeit, pausiert boolean mit Vorgabe false, heute_dashboard nennt live. Liste in docs/auftraege-zustaende.md und als Kommentar an PR 74) ✓ Nach dem Merge von PR 73 und vor dem Merge von PR 74, danach die Katalog-Nachher-Liste aus dem Kopf der Datei. Neue Spalte auftraege.pausiert, zwei Bedingungen ersetzt, heute_dashboard neu mit live bei der Schlussrechnung. Bestand: Webseite (planung) wird in_arbeit, AN-2026-003 bleibt abgenommen
- [x] 👤 Dave | PR 74 (Auftraege-Runde) entscheiden (22.09.2026: gemergt nach der Migration) ✓ Zu wissen: Festschreiben macht jetzt einen Entwurf aus einem Auftrag aktiv, jeden anderen Entwurf nicht (bisher galt ausnahmslos: festgeschrieben heisst nicht geschlossen). Jaehrlich abgerechnet laeuft der Vertrag zwoelf Monate mit Frist zum Laufzeitende (AGB § 14 Abs. 2), monatlich 30 Tage zum Monatsende
- [x] 🤖 Wartungsvertraege aus Finanzen (Neuer Vertrag) und beim neuen Kunden bekommen ihre 30 Aenderungsminuten (22.09.2026, PR 75, gemergt als 1c76c12) ✓ Eine Regel fuer alle Anlagewege: minutenFuerTyp in lib/wartungsumfang.ts, Wartung 30, jede andere Art 0. Der Vertrag beim neuen Kunden traegt seine Art jetzt ausdruecklich
  <!-- Bestand lesend geprueft: fuenf Vertraege, alle drei Wartungsvertraege mit 30 Minuten, die zwei Hosting-Vertraege mit 0, nichts nachzuziehen. Suite 134 Dateien und 2530 Tests gruen, Gegenprobe mit fuenf eingebauten Fehlern, jeder wird rot, Code-Review ohne Befund. Rauchtest gegen den lokalen Build als vier Rollen ohne 5xx ausser den GitHub-Routen (lokal ohne GITHUB_TOKEN). Offen und bewusst nicht gebaut: aendert jemand unter Finanzen die Art eines bestehenden Vertrags, bleiben seine Minuten stehen. Sie beim Bearbeiten neu abzuleiten, wuerde zugebuchte Minuten ueberschreiben, deshalb als Nachtrag mit eigener Regel. -->
  <!-- Nach Merge und Deploy am 22.09.2026 (meyso-website-9p2veqge6, drei Sekunden nach dem Merge): Rauchtest gegen meyso.de je Rolle ohne 5xx (inhaber 103 geprueft und 85 durch, partner 84 durch und 1 abgewiesen, assistenz 48 durch und 50 abgewiesen, vertrieb 50 durch und 45 abgewiesen). -->
- [x] 👤 Dave | PR 75 (Minuten fuer Wartungsvertraege aus Finanzen und beim neuen Kunden) entscheiden (22.09.2026: gemergt) ✓
- [x] 🤖 Nachtrag zu PR 75: beim Artwechsel eines bestehenden Vertrags unter Finanzen folgen die Aenderungsminuten der neuen Art, aber nur, solange sie auf der Vorgabe der alten stehen (22.09.2026, PR 76, gemergt als 1d244cd) ✓ Zugebuchte oder von Hand gesetzte Minuten bleiben stehen, der Dialog nennt beide Faelle vor dem Speichern. Regel: minutenBeimArtwechsel in lib/wartungsumfang.ts
  <!-- Suite 134 Dateien und 2539 Tests gruen, Gegenprobe mit sechs eingebauten Fehlern, jeder wird rot, Rauchtest gegen den lokalen Build als vier Rollen ohne 5xx ausser den GitHub-Routen. Aus dem Review uebernommen: laesst sich der Stand vor der Aenderung nicht lesen, antwortet die Route mit 500, statt die Art still zu wechseln. -->
  <!-- Nach Merge und Deploy am 22.09.2026 (meyso-website-3qtp223qn, drei Sekunden nach dem Merge, meyso.de zeigt darauf): Kurzprobe der beruehrten Seiten als inhaber, /admin/finanzen?tab=vertraege, /admin/clients, /admin/auftraege und /admin je 200. Ein voller Rauchtest lief zuletzt nach PR 75 ohne 5xx. -->
- [x] 👤 Dave | PR 76 (Minuten beim Artwechsel) entscheiden (22.09.2026: gemergt) ✓
- [x] 🤖 Kaltstart von /admin: nach einer Pause 3,5 bis 6,1 Sekunden bis zum ersten Byte, warm 0,3. Die Ursache sitzt bei Supabase /rest/v1, nicht im Code, nicht im Buendel und nicht bei Vercel (gemessen am 21.09.2026): kalt enden alle 38 Abfragen gemeinsam nach 3 bis 5,6 s, und 38 gleichzeitige Abfragen direkt von einem anderen Rechner an Supabase haengen genauso, waehrend neue Verbindungen an Cloudflare, GitHub und Supabase-Auth schnell sind. Der Stau kommt schon nach knapp einer Minute Pause und waechst mit der Zahl gleichzeitiger Anfragen: eine rund 0,25 s mehr, acht 1,7 bis 2,4 s, 38 3,1 bis 4,6 s. Stand 21.09.2026 abends: Tempo 3b (Verbindungsgrenze, PR 69) ist ohne Merge geschlossen, lokal verschob sie die Wartezeit nur. Tempo 4 (heute_dashboard, PR 70) ist eingespielt und geprueft, aber allein ein Rueckschritt: lokal kalt 5,2 bis 7,1 s gegen 4,0 bis 5,1 s, weil die Funktion nach der Pause neben den 21 Abfragen des Waechters haengt. Tempo 5 (Waechterstand aus laeufe, PR 71) nimmt den Waechter aus dem Aufruf; die vier Anfragen, die danach bleiben, waren kalt direkt gemessen nach 0,8 bis 1,3 s fertig. Das gemeinsame A/B am 22.09.2026 (lokal, drei Runden): kalt in jeder Runde darunter, 0,5 bis 1,9 s gegen 2,5 bis 3,6 s, warm in jeder Runde darueber, 0,28 bis 0,44 s gegen 0,20 bis 0,23 s. Nach der Regel (kalt darunter und warm gleichauf) nicht gemergt. Das warme Mehr kommt vom ersten Aufruf von heute_dashboard auf einer frischen Datenbankverbindung, 250 bis 850 ms statt 80 bis 110 ms. Zahlen in PR 71. Abgeschlossen am 22.09.2026 mit Tempo 4 und 5, Tempo ist beendet (Dave) ✓ In Production kalt 1,19 bis 1,83 s bis zum ersten Byte statt 3,5 bis 5,6 s, warm 0,35 bis 0,71 s. Unter einer Sekunde ist /admin kalt NICHT, der Stau bei Supabase /rest/v1 ist kuerzer, nicht weg
  <!-- Stand vor Tempo 3, 20.09.2026: 1,6 Sekunden ueber dem Latenzboden, vorher 1,566 s und nachher 1,607 s (drei Runden mit sieben Minuten Ruhe, /sitemap.xml als statische Latenzroute: 0,128 s vorher, 0,213 s nachher). Der Schnitt des Buendels von 8,77 auf 2,21 MB hat daran nichts geaendert. Die Zahlen sind mit scripts/kaltstart.sh gemessen, die vom 21.09. mit scripts/admin-messung.mjs, und kalt streute /admin schon vor PR 68 zwischen 1,0 und 8,4 s. Besser oder schlechter laesst sich daraus nicht ablesen. -->
  <!-- Zum Vergleich: /portal/anmelden braucht 0,325 s vorher und 0,365 s nachher ueber dem Boden, und diese Seite fragt beim Aufbau nichts ab. Der Unterschied zu /admin ist also nicht der Renderer und nicht das Buendel, sondern das, was die Seite waehrend des Aufbaus tut. -->
  <!-- Rohdaten: docs/analyse/tempo/kaltstart-prod-vorher.csv und -nachher.csv, Protokoll in docs/analyse/tempo/kaltstart-2026-09.md. Skripte: scripts/kaltstart.sh und scripts/kaltstart-lokal.sh. -->
  <!-- Tempo 3, 21.09.2026: Tabellen je Abfrage und alle Gegenproben in den Kommentaren von PR 68, Protokoll in docs/analyse/tempo/admin-abfragen-2026-09.md, Abschnitte "Der Lauf danach" und "Das Ergebnis nach dem Lauf". Skripte: scripts/admin-kalt-spannen.sh, scripts/admin-gegenprobe.sh, scripts/supabase-ansturm-runden.sh. Dass eine einzelne Anfrage nach der Pause nur rund 0,25 s mehr kostet, ist eine Einzelmessung. Eine Erklaerung, nicht gemessen: PostgREST schliesst Datenbankverbindungen nach 30 s ohne Nutzung (Vorgabe db-pool-max-idletime laut PostgREST-Doku), wie Supabase das einstellt, dazu keine Quelle gefunden. -->
- [x] 👤 Dave | Migration 20260921_heute_dashboard.sql im SQL-Editor einspielen (Tempo 4, PR 70), danach die Katalog-Nachher-Liste aus dem Kopf der Datei. Additiv, neu ist nur eine Funktion, ausfuehren darf sie nur service_role. Danach laufen REST-Probe, Netztest gegen Production und das A/B lokal, erst dann der Merge
- [x] 👤 Dave | PR 69 (Tempo 3b) entscheiden (21.09.2026: ohne Merge geschlossen, Branch bleibt, Begruendung im PR) ✓. Lokal gemessen verschiebt die Verbindungsgrenze die Wartezeit, sie nimmt sie nicht weg. Empfehlung: nicht mergen
- [x] 👤 Dave | Migration 20260921_laeufe_stand.sql im SQL-Editor einspielen (Tempo 5, PR 71), danach die Katalog-Nachher-Liste aus dem Kopf der Datei. Additiv: eine Spalte laeufe.stand und ein Teilindex. Danach misst das gemeinsame A/B Tempo 4 und 5 gegen den alten Weg, und auf dein Wort gehen PR 70 und PR 71 nacheinander live
- [x] 👤 Dave | Tempo 4 und 5 (PR 70, PR 71) entscheiden (22.09.2026: gemergt, PR 70 und direkt danach PR 71) ✓ kalt deutlich schneller, warm 0,1 bis 0,2 s langsamer, nach der vereinbarten Regel kein Merge. Moeglich: trotzdem mergen, oder erst den ersten Aufruf von heute_dashboard auf frischen Verbindungen billiger machen und neu messen
- [x] 🤖 Fristen auf HEUTE: dringende Fristen aus Dokumenten und Lieferantenvertraegen stehen als Punkte da, nur fuer Rollen mit unternehmen.sehen (23.09.2026, PR 77, gemergt als 3c54588) ✓ Ueberfaellig ist kritisch, ab 14 Tagen vor der Frist handeln, davor bleibt es ein Termin. Der Punkt fuehrt in das Register, in dem die Frist gepflegt wird. Aufgefallen am 21.09.2026 in Tempo 4, dort bewusst nicht geaendert
  <!-- Die Grenze gilt auf beiden Wegen: der alte laesst die zwei Abfragen ohne das Recht weg, heute_dashboard liefert die zwei Schluessel nur noch mit dem Recht (Migration 20260923_heute_fristen.sql, additiv per CREATE OR REPLACE), und heuteAusDashboard wirft sie zusaetzlich weg. Deshalb ist die Reihenfolge von Migration und Merge frei. Suite 134 Dateien und 2551 Tests gruen, Gegenprobe mit sechs eingebauten Fehlern, jeder wird rot, Rauchtest und Sichtbarkeitslauf gegen den lokalen Build ohne Befund. Aus dem Review: die ungenutzte Huelle ladeHeute ist weg, sie kannte keine Rolle. -->
  <!-- Nach Migration, Merge und Deploy am 23.09.2026 (meyso-website-3ju1cx9tr, drei Sekunden nach dem Merge, meyso.de zeigt darauf): Rauchtest als vier Rollen ohne 5xx (inhaber 85 durchgelassen, partner 84 und 1 abgewiesen, assistenz 48 und 50, vertrieb 50 und 45), Sichtbarkeitslauf 106 Ziele mal vier Rollen sauber, Netz-Test gruen (2 Dateien, 25 Faelle). Katalog nachher wie erwartet: inhaber und partner bekommen dokumente und lieferantenvertraege, assistenz, vertrieb und ohne Rolle nicht, anon wird mit 401 abgewiesen. Die Liste steht als Kommentar an PR 77. -->
- [x] 👤 Dave | PR 77 (Fristen auf HEUTE) entscheiden (23.09.2026: Migration eingespielt, gemergt) ✓
- [ ] 🤖 Sobald ein Dokument oder ein Lieferantenvertrag mit Frist in Production steht: die zwei Muster "quelle":"company_documents" und "quelle":"supplier_contracts" in scripts/admin-sichtbarkeit.mjs aufnehmen. Heute waeren sie blind (null Dokumente, sieben Vertraege ohne Datum) und der Lauf wuerde deshalb rot
  <!-- Stand 24.09.2026: ein Lieferantenvertrag mit Frist steht jetzt da (softwareentwicklung-meyer.de, kuendbar bis 21.11.2026). Auf HEUTE erscheint er bis zum 06.11.2026 nur als Termin, und Termine tragen kein "quelle", gegen Production gezaehlt: das Muster "quelle":"supplier_contracts" kommt heute null Mal vor. Erst ab dem 07.11.2026, 14 Tage vor der Frist, wird daraus ein Punkt mit dem Muster. Vorher waere der Lauf mit dem Muster weiter rot. -->
- [x] 🤖 __tests__/portal-mandanten.test.ts hat jetzt eine eigene Zeitgrenze von 30 s am Aufbau, nicht global (23.09.2026, Commit 52b0d32 auf main) ✓ Der Aufbau laedt die fuenf Portal-Routen samt Schriften fuer die PDFs, allein rund 1,5 s. Unter Last lief er in die alte Dateigrenze von 20 s, und die acht Faelle dahinter wurden uebersprungen. Die Dateigrenze (vi.setConfig) ist weg. Nachgewiesen mit --hookTimeout=1: der Aufbau haelt, 60 Faelle gruen. Gegenprobe ohne die eigene Grenze: Hook timed out in 1ms. Mit PGlite hatte es nichts zu tun, wie hier vorher stand
- [x] 🤖 Demo-Kennzeichen am Kunden: Meyso GmbH (K-1012) zaehlt in keiner Kennzahl, keiner Prognose und keinem Lauf mehr, bleibt aber ueberall sichtbar, mit der Marke "Demo" in Kundenliste und Akte (23.09.2026, PR 78, gemergt als de76761) ✓ Eine Regel in lib/kunde-zaehlt.ts, die alle rufen: HEUTE auf beiden Wegen, Waechter mit allen 22 Pruefungen und Paragraf-19-Prognose, Finanzen, EUeR, Jahresmappe, 30-Tage-Ausblick, Erinnerungen, Rechnungslauf, Zahlungsabgleich. Neue Pruefung 23 nennt vergessene Testvertraege, nur als Hinweis. Haken in den Stammdaten der Akte, nur inhaber (Recht kunden.demo)
  <!-- Vorher und nachher gegen Production (23.09.2026, dieselben Zeilen, einmal zaehlt Meyso GmbH mit): Prognose Paragraf 19 1.144 zu 554 Euro, offene Rechnungen 0 zu 0, laufend je Monat 54 zu 54 Euro, aktive Kunden 6 zu 5, Waechter-Treffer 39 zu 38, der HEUTE-Punkt Schlussrechnung zu AN-2026-003 faellt weg. Suite 140 Dateien und 2642 Tests gruen, Gegenprobe mit 29 eingebauten Fehlern, jeder wird rot. Lokal vor der Migration: kein 5xx ausser den vier GitHub-Routen und den drei, die die Spalte lesen (EUeR, Prognose, Jahresmappe), Sichtbarkeitslauf ohne Befund. Aus dem Review: nur aktive Admin-Zugaenge zaehlen als eigene Adresse. -->
  <!-- Nach der Migration am 23.09.2026: Katalog nachher wie erwartet (nur K-1012 Demo, heute_dashboard ohne Meyso GmbH, anon mit 401 abgewiesen, dienst darf). Gegen den lokalen Build danach: Rauchtest als vier Rollen ohne 5xx ausser den vier GitHub-Routen, EUeR, Prognose und Jahresmappe laufen jetzt durch, Sichtbarkeitslauf ohne Befund, Netz-Test gruen. Mit echten Daten: Marke in Akte und Liste, den Haken sieht nur inhaber. Liste als Kommentar an PR 78. -->
  <!-- Nach Merge und Deploy am 23.09.2026 (meyso-website-hhs10901d, drei Sekunden nach dem Merge, meyso.de zeigt darauf): Rauchtest als vier Rollen ohne 5xx (inhaber 85 durchgelassen, partner 84 und 1 abgewiesen, assistenz 48 und 50, vertrieb 50 und 45), Sichtbarkeitslauf 106 Ziele mal vier Rollen ohne Befund. Waechter Jetzt pruefen: Lauf e42e1024, 23 Pruefungen, 38 Treffer statt 39, Meyso GmbH in keiner Pruefung, in der Antwort wie im gespeicherten Stand. Mehr Treffer als angezeigt nur bei Pruefung 1, die an keinem Kunden haengt. Pruefung 23 ohne Treffer. Meyso GmbH hat dabei weiter eine offene Aenderung, einen Auftrag und eine Portalperson, das Fehlen ist also die Regel und kein leerer Bestand. -->
- [x] 👤 Dave | PR 78 (Demo-Kennzeichen) entscheiden (23.09.2026: Migration eingespielt, gemergt) ✓
- [x] 👤 Dave | Demo-Kennzeichen: die Auslegung von "ausser an sich selbst" entscheiden (24.09.2026: bestaetigt, Firmenadresse oder Adresse eines aktiven Admin-Zugangs, geprueft gegen die heutige Adresse) ✓ So umgesetzt in anSichSelbst (lib/kunde-zaehlt.ts). Die Folge aus dem Review ist damit bewusst in Kauf genommen: wird die E-Mail eines Kunden auf eine eigene geaendert, sind auch aeltere Rechnungen freigegeben, setzen darf das Kennzeichen trotzdem nur inhaber
- [ ] 👤 Dave | Portalzugang mit Daves Privatadresse an K-1001 Hirmax Scheibenbilder (Rolle inhaber, aktiv seit 07.09.2026): ein Testzugang an einem echten Kunden. Entfernen oder als gewollt vermerken. Aufgefallen am 23.09.2026 bei PR 78, nicht angefasst
- [ ] 🤖 Jahresmappe: das README nennt jeden Demokunden mit der Anzahl seiner festgeschriebenen Belege und ihrer Summe, damit die Ausnahme in der Mappe selbst steht und nicht nur im Kennzeichen. Ohne Termin, mit der naechsten Aenderung an der Mappe mitnehmen. Heute nennt der Hinweis nur die Nummern der Demo-Belege des Jahres (PR 78)
- [x] 🤖 Aufraeumaktion Lieferantenvertraege und Ausgaben 2026 aus den elf Rechnungen in belege-2026 (24.09.2026, Protokoll docs/finanzen/aufraeumen-ausgaben-2026-09.md in meyso-website, Commit 82527ae auf main) ✓ 9 Vertraege statt 7: die Domains jaehrlich zum Verlaengerungstag mit dem regulaeren Preis, halveo.de neu, softwareentwicklung-meyer.de neu als gekuendigt zum 21.11.2026, Mailbox.org einmalig 30 Euro mit Beginn 18.09.2028, Vercel zum 5. 23 erwartete Buchungen geloescht (47,82 Euro), fuenf belegt (33,36 Euro, Mailbox.org als E-Rechnung mit XML, hirmax-scheiben.de mit Vermerk "lautet auf Max Hirt, gezahlt ueber meyso"). Vercel Mai bis August bleibt erwartet mit dem Dollarbetrag im Vermerk, weil keine Finom-Ausgaenge importiert sind. Waechter Pruefung 1: 11 statt 34 Treffer, 223,45 statt 271,27 Euro. HEUTE zeigt die Frist von softwareentwicklung-meyer.de als Termin
  <!-- Vorher-Export in docs/finanzen/archiv/2026-09-24-vorher/ (7 Vertraege, 34 Buchungen, 271,27 Euro). Ausgabenlauf vorher trocken auf den echten Zeilen gerechnet, der echte Lauf ergab dasselbe (neu 5, vorhanden 11), die Restmonate 2026 trocken ohne Doppelung, Mailbox.org erst wieder am 18.09.2028. Jeder Beleg aus dem Bucket zurueckgelesen, alle Hashes stimmen. Netztests 25 von 25 gruen. Im Bericht zu Teil 1 waren die Zahlen falsch gezaehlt (25 loeschen, 9 bleiben). Umgesetzt wurde nach Inhalt: 23 geloescht, 4 Vercel mit Vermerk, 7 unberuehrt. -->
- [x] 🤖 Einmalige Lieferantenvertraege in den Monatsrechnungen. /admin/infrastruktur (InfrastrukturClient.tsx, monatskosten und kostenImMonat) rechnet alles, was nicht jaehrlich ist, als monatlich. Seit der Aufraeumaktion zeigt die Seite deshalb Mailbox.org mit 30 Euro im Monat und Fixkosten von 78,44 statt 48,44 Euro. lib/kosten.ts (monatsbetrag) hat dieselbe Luecke, wirksam in Analytics und Forecast ab dem Beginn 09/2028. Dazu steht im Katalog lib/infrastructure.ts noch "Light (30€/Jahr)". Umgesetzt in PR 79 (24.09.2026, gemergt als 25ef3f4): einmalig zaehlt in lib/kosten.ts und auf Infrastruktur als einmalige Ausgabe im Beginnmonat, Katalogtext "Light, 1 Euro im Monat über Guthaben" ✓ Production nach dem Deploy: Infrastruktur und Betrieb zeigen 48,44 Euro, die Mailbox.org-Zeile 0 Euro mit "einmalig 30 €, 09/2028" darunter
  <!-- Auch /admin/betrieb zeigte 78,44 Euro: die Seite rechnete mit monatsbetrag und muss laut eigener Regel dieselbe Zahl zeigen wie Infrastruktur. Sie rechnet jetzt mit derselben Funktion (fixkostenImMonat), den Monat in Berliner Zeit liefert der Server. Lokaler Build mit den echten Vertraegen: beide Seiten 48,44 Euro, Production vorher 78,44. Neue Tests fuer alle drei Intervalle in beiden Rechnungen (21 Faelle), Gegenprobe mit 14 eingebauten Fehlern, jeder rot. Suite 141 Dateien und 2663 Tests gruen, im ersten Lauf einmal content-konsistenz (48-Stunden-Suche) rot, danach zweimal gruen, nicht nachstellbar. Netztests 25 von 25, Build gruen, Rauchtest vier Rollen ohne 5xx ausser den GitHub-Routen, Sichtbarkeitslauf ohne Befund. Review: bereit. -->
  <!-- Nach Merge und Deploy am 24.09.2026 (meyso-website-9i9tw1kbo statt ia164j9e4, rund 90 Sekunden nach dem Merge, gewartet auf die sichtbare Zahl statt auf die Deploy-Kennung): Infrastruktur und Betrieb gegen Production 48,44 Euro. Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, partner 84 durchgelassen und 1 abgewiesen, assistenz 48 und 50, vertrieb 50 und 45). -->
- [x] 👤 Dave | PR 79 (einmalige Lieferantenvertraege, Fixkosten 48,44 statt 78,44 Euro) entscheiden (24.09.2026: gemergt) ✓
- [x] 👤 Dave | Register Vertraege (/admin/unternehmen): die Kennzahl "Fixkosten pro Monat" dort zaehlt einmalige Betraege nie, auch nicht im Beginnmonat (Kommentar: einmalige Betraege sind keine Fixkosten). Betrieb und Infrastruktur zaehlen sie nach PR 79 im Beginnmonat. Heute zeigen alle drei 48,44 Euro, abweichen wuerden sie nur im Beginnmonat eines einmaligen Vertrags, zuerst 09/2028. Entscheiden: dieselbe Rechnung dort oder ein anderes Label (24.09.2026: dieselbe Rechnung) ✓
- [x] 🤖 Register Vertraege rechnet "Fixkosten pro Monat" mit fixkostenImMonat aus lib/kosten.ts wie Betrieb und Infrastruktur, ueber die aktiven Vertraege, den Monat in Berliner Zeit liefert ladeUnternehmen (24.09.2026, PR 80, gemergt als 36c6372) ✓ Production nach dem Deploy: Register, Infrastruktur und Betrieb zeigen je 48,44 Euro
  <!-- Tests: das Register gerendert mit den neun echten Vertraegen (48,44 Euro im September 2026, 78,44 im September 2028, ein inaktiver Vertrag zaehlt nicht), Register und Infrastruktur in fuenf Monaten mit derselben Zahl, Wache ueber die drei Quelldateien, dass sie fixkostenImMonat aus lib/kosten.ts importieren und rufen. Gegenprobe mit 18 eingebauten Fehlern, jeder rot. Suite 141 Dateien und 2670 Tests gruen, Build gruen, lokaler Build mit den echten Vertraegen: alle drei Seiten 48,44 Euro. Rauchtest vier Rollen ohne 5xx ausser den GitHub-Routen, Sichtbarkeitslauf ohne Befund. Review: keine Befunde. -->
  <!-- Nach Merge und Deploy am 24.09.2026 (meyso-website-2xweixsux statt 9i9tw1kbo, rund zwei Minuten nach dem Merge). Gewartet auf den Monat vom Server in den Props des Registers, nicht auf die Zahl: die ist im September 2026 vorher wie nachher 48,44 Euro. Gegen Production zeigen Register, Infrastruktur und Betrieb je 48,44 Euro. Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, partner 84 durchgelassen und 1 abgewiesen, assistenz 48 und 50, vertrieb 50 und 45). -->
- [x] 👤 Dave | PR 80 (Register Vertraege, Fixkosten mit derselben Funktion wie Betrieb und Infrastruktur) entscheiden (24.09.2026: gemergt) ✓
- [x] 🤖 Listen unter Unternehmen einzeilig gekuerzt: im Register Vertraege Anbieter und Notiz einzeilig mit Auslassung, voller Text beim Ueberfahren und im Bearbeiten-Dialog (Notiz waechst mit), Anbieterspalte hoechstens 340 px, bei 1366 rollt keine Tabelle mehr. Dieselbe Pruefung wie bei PR 74 auf Dokumente, Anlagen, Bausteine und Zugaenge, Bilder bei den vier Pruefgroessen, Wache ueber jede Listenzeile mit langem Text (24.09.2026, PR 81, gemergt als cc2d796, dazu die Spalte Intervall mit "jährlich" statt des Rohwerts) ✓ Gegen Production bei 1366: das Register rollt nicht, keine Zelle laeuft ueber, Anbieter 340 px, jede gekuerzte Notiz mit vollem title
  <!-- Ursache: die Notiz trug nowrap und ellipsis an einem Inline-Span, dort greift die Kuerzung nicht, der Text lief ueber alle Spalten. Gemessen in der laufenden Anwendung (scripts/unternehmen-bilder.mjs, docs/analyse/unternehmen): vorher gegen Production bei 1366 Tabelle 563 px zu breit, 8 Zellen ueberlaufen, Anbieter 424 px; nachher keine Zelle laeuft ueber, bei keiner Groesse, bei 1366 rollt nichts, Anbieter 340 px. Wache mit Selbsttest, Gegenprobe mit 9 eingebauten Fehlern, jeder rot. Suite 142 Dateien und 2678 Tests gruen, Build gruen, Rauchtest vier Rollen ohne 5xx ausser den GitHub-Routen. Aus dem Review: die Liste Zugaenge zeigt echte Personen, deshalb ohne Bilder aus der laufenden Anwendung und ohne ihre Texte in der Messung; auch das Vorher-Bild der Vertraege mit ungekuerzten Notizen steht nicht im Repo. -->
  <!-- Nach Merge und Deploy am 24.09.2026 (meyso-website-kih76j0j1 statt 2xweixsux, knapp zwei Minuten nach dem Merge, gewartet auf "jährlich" statt des Rohwerts in der Liste): scripts/unternehmen-bilder.mjs gegen Production, jede Zusage gehalten, bei keiner Groesse ein Ueberlauf. Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, partner 84 und 1, assistenz 48 und 50, vertrieb 50 und 45). Sichtbarkeitslauf: nichts durchgekommen, nur die zwei blinden Muster, weil keine Auftraege mehr da sind. -->
- [x] 👤 Dave | PR 81 (Listen unter Unternehmen) entscheiden, dabei die Bausteintitel: sie stehen jetzt einzeilig gekuerzt statt umgebrochen, bei 1366 kuerzt sich keiner der 24, bei 390 kuerzen sich 12. Alternative waere eine Kuerzung nach zwei Zeilen (24.09.2026: gemergt, Bausteintitel bleiben einzeilig, die Spalte Intervall vorher korrigiert) ✓
- [ ] 🤖 Nachlese PR 81, ohne Termin: Bausteine (70 px) und Zugaenge (122 px) rollen bei 1120 waagerecht, vorher wie nachher, die Zusage galt fuer 1366. Die Spalte Intervall ist mit PR 81 erledigt
- [x] 👤 Dave | Klaeren: in Production stehen keine Auftraege und keine Deals mehr (24.09.2026 gegen 15 Uhr gelesen: 0 und 0, beim Sichtbarkeitslauf gegen 14 Uhr gab es die Auftraege noch). Gewollt? Nicht aus dieser Session, alle Laeufe am Nachmittag waren nur lesend. Der Sichtbarkeitslauf hat dadurch zwei blinde Muster, auftragswert_cents und abnahme_am (24.09.2026: Dave hat sie selbst geloescht) ✓ Daraus Waechterpruefung 24, siehe unten
- [x] 🤖 Waechterpruefung 24: angenommenes Angebot ohne Auftrag, ausser bei Demokunden, damit der Zustand bei einem echten Kunden auffaellt. Dafuer kennt der Auftrag sein Angebot (neue Spalte auftraege.angebot_id, gesetzt bei der Annahme auf allen drei Wegen), bisher stand die Verbindung nur ueber den Deal fest (24.09.2026, PR 82, Migration eingespielt, gemergt als 327f80e) ✓ Im gespeicherten Stand nach "Jetzt pruefen": 24 Pruefungen, Pruefung 24 "Angenommene Angebote ohne Auftrag" ohne Treffer
  <!-- Protokoll docs/waechter-24.md. Heute meldet die Pruefung nach dem Einspielen nichts: die zwei angenommenen Angebote AN-2026-002 und -003 gehoeren Meyso GmbH (Demo). Vor dem Einspielen, gegen Production nur lesend: 24 Pruefungen, Pruefung 24 meldet "Verweis vom Auftrag auf sein Angebot nicht lesbar" mit dem Namen der Migration, die uebrigen unveraendert. Tests fuer den echten Kunden gegen den Demokunden, einen umbenannten Auftrag, monatliche Posten, die fehlende Spalte und die drei Annahmewege; Gegenprobe mit 8 eingebauten Fehlern, jeder rot. Suite 143 Dateien und 2691 Tests gruen, Build gruen, Rauchtest vier Rollen ohne 5xx ausser den GitHub-Routen. Review: keine Befunde. -->
  <!-- Nach der Migration am 24.09.2026: Auftraege mit Verweis 0 (Daves Katalog), Spalte und Fremdschluessel ueber PostgREST bestaetigt, CHECK-Liste Zeile fuer Zeile gleich wie vorher (14). Waechter gegen Production mit dem Code aus PR 82, nur lesend: 24 Pruefungen, keine Quelle ohne Antwort, Pruefung 24 ohne Treffer. Protokoll und Kommentar an PR 82. -->
- [x] 👤 Dave | Migration 20260924_auftraege_angebot.sql im SQL-Editor einspielen (PR 82), danach die Katalog-Nachher-Liste aus dem Kopf der Datei. Additiv: eine Spalte, ein Fremdschluessel, ein Index. Erst die Migration, dann der Merge, denn der neue Code schreibt angebot_id bei jeder Annahme (24.09.2026: eingespielt, Katalog nachher wie erwartet) ✓
  <!-- Nach Merge und Deploy am 24.09.2026 (meyso-website-a68inmzh3 statt kih76j0j1, rund zwei Minuten nach dem Merge). Gewartet auf den Waechter live per GET, der rechnet ohne zu speichern: erst als er 24 Pruefungen lieferte, einmal "Jetzt pruefen". Lauf 8e30ae25 um 13:59 UTC, ohne Fehler, gespeicherter Stand mit 24 Pruefungen und 10 Treffern, keine Quelle ohne Antwort, Pruefung 24 mit 0 Treffern und Signal ok. Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, partner 84 und 1, assistenz 48 und 50, vertrieb 50 und 45). -->
- [x] 👤 Dave | PR 82 (Waechterpruefung 24) entscheiden (24.09.2026: gemergt) ✓
- [x] 🤖 Prognose nach Faelligkeiten in Analytics und Forecast: die kuenftigen Monate aus den echten Faelligkeiten je Vertrag (ausblick() aus lib/rechnungs-ausblick.ts mit Intervall und next_invoice_due, fuer die Prognose ohne den Nachhol-Deckel), dazu die offenen Zahlplan-Raten mit Abnahme, Kosten aus den Lieferantenvertraegen nach ihrem Intervall. "Wiederkehrend" bleibt der Durchschnitt, Tooltip "Grundlast, auf den Monat verteilt" (24.09.2026, PR 83, gemergt am 25.09.2026 als bc61dc3) ✓
  <!-- Gegen Production, lokaler Build auf denselben Daten: Oktober 2026 38 statt 54 Euro, Juni 2027 230 statt 54, Kosten November 57,37 statt 48,44 (darin meyso.de 16,68), erwartet 2026 Umsatz 506 statt 570 und Kosten 392,40 statt 403,94, Folgejahr unveraendert 648 und 581,28, Wiederkehrend 54. Gleichheitstest gegen lib/rechnungs-ausblick.ts: fuer 30 Tage Zeile fuer Zeile dieselben Rechnungen, Oktober 2026 und Juni 2027 mit denselben Summen. Nebenbei: der Forecast zaehlte den Gegenbeleg eines Stornos als Umsatz mit (minus 20 Euro, Stornopaar 2026-015 und -016) und Entwuerfe ebenso, jetzt dieselbe Regel wie Analytics (zaehltAlsUmsatz). 2709 Tests, Gegenprobe 13 von 13 rot, next build, Rauchtest als vier Rollen gegen den lokalen Build (5xx nur die vier GitHub-Routen ohne lokalen Schluessel), Sichtbarkeitslauf ohne Durchlass (zwei blinde Muster wie bisher), Code-Review in zwei Runden, am Ende READY. Im Diagramm unter Auswertung steht der laufende Monat weiter aus Analytics (Kosten 47,05 mit der Grundlast), die Prognose fuellt die Monate danach. -->
  <!-- Nach Merge und Deploy am 25.09.2026 (meyso-website-9ehuqijum statt a68inmzh3, rund 90 Sekunden nach dem Merge, gewartet auf Oktober 2026 mit 38 statt 54 Euro in der Forecast-Route): gegen Production Oktober 2026 38, Juni 2027 230, Wiederkehrend 54, dazu Kosten November 57,37, erwartet 2026 Umsatz 506 und Kosten 392,40, Folgejahr 648 und 581,28, der Tooltip "Grundlast, auf den Monat verteilt" auf HEUTE. Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, 85 durchgelassen; partner 84 und 1; assistenz 48 und 50; vertrieb 50 und 45). -->
- [x] 👤 Dave | PR 83 (Prognose nach Faelligkeiten) entscheiden. Dabei: Entwuerfe zaehlen im Forecast nicht mehr als Umsatz, wie in Analytics. Offene Frage aus dem PR, eigener Schritt: sollen die vergangenen Monate die Lieferantenkosten aus den Buchungen rechnen statt anteilig mit der Grundlast? Heute stehen dort die Domains mit 1,39 Euro je Monat seit ihrem Beginn, gebucht waren im ersten Jahr je 0,84 Euro (25.09.2026: gemergt; die Frage entschieden: ja, nach Abfluss wie beim Umsatz, als eigener kleiner PR) ✓
- [x] 🤖 Kosten der gebuchten Monate nach Abfluss in Analytics und Forecast: jeder gebuchte Monat zeigt die Summe der EUeR fuer diesen Monat (ausgabenJeMonat aus lib/euer.ts, belegt und erwartet, netto nach Privatanteil), ab dem laufenden Monat dazu die Vertragsperioden ohne Buchung (Schluessel vertrag_id|periode wie im Ausgabenlauf). Kosten bisher und das Soll der Steuerruecklage rechnen damit mit dem Gebuchten (25.09.2026, PR 84, gemergt als 7788e20) ✓
  <!-- Gegen Production, lokaler Build auf denselben Daten: alle 12 Monate im Diagramm gleich der EUeR aus Production. Maerz 31,68 statt 2,78 Euro (toolradar.de und hirmax-scheiben.de je 0,84, dazu Mailbox.org mit 30, das bisher ganz fehlte, weil die Buchung am Vertrag haengt und der Vertrag auf 2028 zeigt), April 20,84 statt 24,17, Mai 40,69 statt 44,86, Juni 41,53 statt 47,05, Juli bis September je 40,69 statt 47,05. Kosten bisher 256,81 statt 260,01, gleich der EUeR 2026. Soll der Steuerruecklage 40,56 statt 39,60, Kosten erwartet 2026 395,56 statt 392,40, Oktober bis Dezember und Folgejahr unveraendert. Test mit den Domains 0,84 im ersten Jahr und Gleichheitstest gegen die EUeR-Route je Monat in __tests__/kosten-abfluss.test.ts, 2719 Tests, Gegenprobe 17 von 17 rot, test:netz 25, next build, Rauchtest als vier Rollen gegen den lokalen Build (5xx nur die vier GitHub-Routen ohne lokalen Schluessel), Sichtbarkeitslauf ohne Durchlass, Code-Review READY. -->
  <!-- Nach Merge und Deploy am 25.09.2026 (meyso-website-b07op8r5g statt 9ehuqijum, knapp zwei Minuten nach dem Merge, gewartet auf Maerz 2026 mit 31,68 statt 2,78 Euro in Analytics): gegen Production im Diagramm Maerz 31,68, Juli bis September je 40,69, alle 12 Monate gleich der EUeR aus Production, im Forecast alle 8 abgeschlossenen Monate ebenso. Kosten bisher 256,81 in beiden Routen, gleich der EUeR 2026, Kosten erwartet 2026 395,56, Soll der Steuerruecklage 40,56, Oktober 38 und Wiederkehrend 54 unveraendert. Bild des Diagramms aus Production wie der lokale Nachher-Stand. Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, 85 durchgelassen; partner 84 und 1; assistenz 48 und 50; vertrieb 50 und 45). -->
- [x] 👤 Dave | PR 84 (Kosten nach Abfluss) entscheiden. Dabei: Kosten bisher und damit das Soll der Steuerruecklage rechnen mit dem Gebuchten, eine Ausgabe ohne Zahlungsdatum zaehlt erst mit dem Abfluss (25.09.2026: gemergt) ✓
- [x] 🤖 Nachlese PR 84, ohne Termin: expenses erlaubt vertrag_id ohne periode. Eine solche Buchung markiert ihre Periode nicht als gebucht, Ausgabenlauf und Prognose zaehlten die Periode noch einmal. Heute gibt es keine solche Zeile (alle 16 Buchungen mit Periode, gelesen am 25.09.2026). Vorschlag: Migration CHECK (vertrag_id IS NULL OR periode IS NOT NULL) auf expenses, nach Daves Wort (25.09.2026: Migration als Datei, PR 85) ✓
- [x] 🤖 Migration 20260925_expenses_vertrag_periode.sql: Regel expenses_vertrag_mit_periode, CHECK (vertrag_id IS NULL OR periode IS NOT NULL), additiv, Vorher-Pruefung im DO-Block bricht bei einer verletzenden Zeile alles ab, Katalog vorher und nachher im Kopf. Protokoll docs/finanzen/vertragsbuchung-periode.md (25.09.2026, PR 85, eingespielt von Dave, gemergt als 1c18108) ✓
  <!-- Vorher gegen Production, nur lesend: 16 Buchungen, alle mit Vertrag und Periode, keine verletzt die Regel. CHECK-Liste mit node scripts/check-bedingungen.mjs expenses: 7 Bedingungen, nachher erwartet 8. Kein Schreibpfad in app/ und lib/ setzt vertrag_id ohne periode (Ausgabenlauf immer beides, Buchung von Hand ohne Vertrag, PATCH aendert beides nicht, ON DELETE SET NULL leert nur vertrag_id). Getestet in PGlite (__tests__/expenses-vertrag-periode-migration.test.ts, 5 Faelle), Gegenprobe 6 von 6 rot, 2724 Tests, Code-Review READY. -->
- [x] 👤 Dave | Migration 20260925_expenses_vertrag_periode.sql im SQL-Editor einspielen (PR 85), vorher und nachher die Katalog-Abfragen aus dem Kopf der Datei. Additiv: eine CHECK-Regel an expenses, keine Spalte, keine Zeile. Danach PR 85 entscheiden (25.09.2026: eingespielt, PR 85 gemergt) ✓
- [x] 🤖 Nach dem Einspielen von 20260925_expenses_vertrag_periode.sql: node scripts/check-bedingungen.mjs expenses, die Nachher-Liste (erwartet 8 Bedingungen) ins Protokoll docs/finanzen/vertragsbuchung-periode.md (25.09.2026: 8 Bedingungen, im Protokoll, vor dem Merge auf dem PR-Branch) ✓
  <!-- Nach dem Einspielen am 25.09.2026, nur lesend gegen Production: node scripts/check-bedingungen.mjs expenses liefert 8 Bedingungen, davon 2 Wertemengen, je Spalte hoechstens eine. Mit diff gegen die Vorher-Liste: die 7 von vorher Zeile fuer Zeile gleich, neu nur expenses_vertrag_mit_periode mit CHECK (((vertrag_id IS NULL) OR (periode IS NOT NULL))), genau die erwartete Definition. Ueber PostgREST 16 Buchungen wie vorher, keine mit Vertrag ohne Periode. Nach Merge und Deploy (meyso-website-bz5v1l7uc statt b07op8r5g, rund drei Minuten nach dem Merge, kein Anwendungscode im PR): Diagramm, EUeR-Gleichheit 12 von 12, Kosten bisher 256,81, Kosten erwartet 395,56, Oktober 38 und Wiederkehrend 54 unveraendert. -->
- [x] 🤖 Auftraege: Rechnungsweg sichtbar. Jeder Auftrag hat einen Zahlplan, von Hand vorbelegt mit 50 Prozent bei Beginn und 50 nach Abnahme und im Auftrag waehlbar, dieselbe Komponente wie im Angebot. Je Rate ihr Zustand in der Auftragszeile und im Register Auftraege der Akte: offen mit Knopf "Rechnung stellen", gestellt und bezahlt mit Rechnungsnummer. Der Knopf fuehrt ueber eine Rueckfrage in den bestehenden Weg Rate stellen, Festschreiben, Senden. Waechterpruefung 25: Auftrag ohne Zahlplan, und abgenommener Auftrag mit einer Rate, die mehr als 7 Tage nach der Abnahme nicht gestellt ist (30.09.2026, PR 87, gemergt als ec11114) ✓ Der Demo-Haken sperrt das Festschreiben von Hand nicht, er betrifft nur Lauf und Kennzahlen. Im gespeicherten Stand nach "Jetzt pruefen": 25 Pruefungen, Pruefung 25 ohne Treffer
  <!-- Protokoll docs/auftrag-rechnungsweg.md in meyso-website, Bilder bei 1366 und messung.json unter docs/analyse/auftrag-rechnungsweg. Bestandsaufnahme vorweg: ein Auftrag von Hand hatte keinen Plan, "Rechnung stellen" gab es nur im Zahlplan-Dialog, ohne Rueckfrage und ohne Senden, Zeile und Akte zeigten keinen Zustand je Rate. Dazu der Auftragswert im Zahlplan-Dialog, vorher nach dem Anlegen nirgends nachzutragen. Ausgenommen vom Plan bleiben Eigenprodukte und die Huelle einer reinen Wartungs-Vormerkung (wartung-einmal.test.ts, Frage 1). Tests je Fall, der Klick durch alle vier Routen gegen die Attrappe, auch am Demokunden; Gegenprobe 39 Fehler zur Umsetzung und 17 zu den Nachbesserungen, jeder rot; Suite 2812 Tests, 2810 gruen, rot nur die zwei ausland-belege-Faelle wie auf main; next build gruen. Code-Review: sieben Befunde, sechs behoben (zwei Fenster stellten dieselbe Rate doppelt, Rueckfrage nicht an den Beleg gebunden, Schlussrate bei drei Raten, kein Weg zum Auftragswert, fremde rechnung_id bei der Anlage, Entwurf nach gescheitertem Festschreiben), offen die Rate an einer stornierten Rechnung. Vor dem Merge gegen Production, nur lesend: Rauchtest gegen den lokalen Build als vier Rollen ohne 5xx, erstmals auch die GitHub-Routen (inhaber 103 Routen, 85 durchgelassen; partner 84 und 1; assistenz 48 und 50; vertrieb 50 und 45), Sichtbarkeitslauf 106 Ziele mal vier Rollen, nichts durchgekommen, alle 15 Muster gesehen, Waechter mit dem neuen Code 25 Pruefungen, Pruefung 25 ohne Befund, 10 Treffer in 1, 5, 18 und 19. Ergebnis als Kommentar an PR 87. Keine Migration. -->
  <!-- Nach Merge und Deploy am 30.09.2026 (meyso-website-94uu4pq4u statt bz5v1l7uc, rund 95 Sekunden nach dem Merge, gewartet auf den Waechter live per GET mit 25 Pruefungen): Rauchtest als vier Rollen gegen Production ohne 5xx (inhaber 103 Routen, 85 durchgelassen; partner 84 und 1; assistenz 48 und 50; vertrieb 50 und 45), /admin/auftraege fuer vertrieb 307, die Route 403. "Jetzt pruefen" einmal: Lauf 391974a9 um 15:12 UTC, ohne Fehler, 25 Pruefungen, 10 Treffer, keine Quelle ohne Antwort, Pruefung 25 rechnungsweg mit 0 Treffern und Signal ok, keine neue Stufe nach Paragraf 19. Mit dem Merge so uebernommen: Huelle und Eigenprodukte ohne Plan, assistenz sieht den Zustand je Rate mit Nummer, Bestand ohne Plan ohne Migration. -->
- [x] 👤 Dave | PR 87 (Rechnungsweg, Waechterpruefung 25) entscheiden, dazu den lesenden Zugriff auf Production fuer Rauchtest, Sichtbarkeitslauf und Waechter freigeben (30.09.2026: freigegeben, gemergt) ✓
- [x] 👤 Dave | Demo-Haken und Erinnerung. Entschieden 30.09.: bleibt gesperrt, Demokunde bekommt keine Mail ✓
- [ ] 🤖 Nachlese PR 87, ohne Termin: eine Rate, die an einer stornierten Rechnung haengen bleibt (nur wenn das Loesen nach dem Storno scheitert, lib/rechnung-loeschen.ts schluckt den Fehler), zeigt "Storniert" und laesst sich weder neu stellen noch loesen. Vorschlag: Knopf "Rate freigeben" im Zahlplan-Dialog
- [x] 🤖 Tests in __tests__/ausland-belege.test.ts: die zwei Faelle "angebot-ch" und "die Anschrift traegt das Land, ausgeschrieben" haengen an der lokalen pdftotext-Ausgabe und sind auf dem Mac rot, auf Windows gruen. Den Test auf die gelesenen Werte statt auf die rohe Textausgabe umstellen, damit er auf beiden Rechnern gleich ist (30.09.2026: umgestellt in PR 86, Commits 3ad478a und 69c01f1, der zweite nach dem Review. Steuervermerk, Land und Betrag aus der Lage der Woerter, pdftotext -bbox, Zeilen und Spalten bildet der Test selbst. Auf dem Mac 19 von 19 gruen, der Lauf unter Windows steht beim PR 86 als eigener Punkt) ✓
- [x] 🤖 Vertragsbogen: bei einem Kunden ausserhalb Deutschlands fehlt das Land in der Anschrift des Auftraggebers. lib/vertraege.ts liefert clientLand, lib/vertrag-pdf.tsx druckt es nicht, Rechnung und Angebot schon (seit V7, PR 40). Aufgefallen beim Umbau des ausland-belege-Tests am 30.09.2026, nicht angefasst. Nach Daves Wort: die Landzeile drucken und vertrag-ch in den Fall "die Anschrift traegt das Land" aufnehmen (09.10.2026: gebaut in PR 98, Landzeile im Block Auftraggeber, vertrag-ch und vertrag-de im Fall "die Anschrift traegt das Land"; offen, Merge nach Daves Wort) ✓

- [x] 👤 Dave | softwareentwicklung-meyer.de bei Checkdomain kuendigen, Frist 21.11.2026 (HEUTE zeigt sie als Termin, ab 07.11.2026 als Punkt). Danach den Vertrag in /admin/unternehmen/vertraege auf inaktiv setzen, sonst steht die Frist ab dem 22.11.2026 rot auf HEUTE (25.09.2026: Kuendigung bei Checkdomain durch, der Vertrag steht in Production auf inaktiv) ✓
- [ ] 👤 Dave | Rechnungen nachreichen: Vercel September 2026 und Claude April bis September 2026 fehlen im Ordner belege-2026. Vercel Mai bis August ist am 24.09.2026 gegen 14:45 Uhr belegt worden, je 20,69 Euro. Offen laut Waechter Pruefung 1: 7 Buchungen (Claude April bis September, Vercel September)
- [x] 👤 Dave | Entscheidung Region: es bleibt bei fra1 (09.09.2026) ✓ Der Umzug nach dub1 kuerzte nur den Netzanteil der Runde, und fra1 sitzt naeher an Dave: den Weg Browser zu Funktion geht jeder Aufruf einmal, den Weg Funktion zu Datenbank fuenf bis acht Mal.
  <!-- Was dazu gemessen ist: eine Runde fra1 nach Supabase eu-west-1 kostet warm 50 bis 60 ms, kalt bis 119 ms (drei Aufrufe der Route /api/admin/betrieb/latenz zu je zehn Runden). Was NICHT gemessen ist: wie sich diese Zeit auf Weg und PostgREST-Arbeit verteilt. Dafuer braeuchte es dieselbe Messung aus einer Funktion in eu-west-1. Die 50 ms sind damit die obere Schranke des moeglichen Gewinns, nicht der erwartete. Daves Begruendung, dass der groessere Teil auf PostgREST entfaellt, ist plausibel, aber von dieser Messung nicht belegt. -->
- [x] 👤 Dave | Entscheidung Zwischenspeicher: nein, kein Cache fuer Stammdaten, Bausteine und Einstellungen (09.09.2026) ✓ Die Messung zeigt keinen Anteil.
  <!-- Belegt: die Seiten, die sie lesen, liegen warm bei 196 bis 233 ms und damit im unteren Drittel der Tabelle, und ihre Abfragen laufen seit PR 51 ohnehin nebeneinander. Ein Zwischenspeicher mit Entwertung beim Schreiben waere neue Mechanik mit einer neuen Fehlerart, fuer einen Gewinn, den die Messung nicht zeigt. Wieder aufmachen, wenn eine Zahl dafuer spricht. -->
- [x] 🤖 Claude | Wache darueber, dass vercel.json regions fra1 traegt (PR 52, 09.09.2026) ✓ Die Projekteinstellung bei Vercel steht auf iad1, nur diese Zeile ueberschreibt sie. Faellt sie beim Aufraeumen weg, wandert jede Funktion still nach Washington, ohne Fehlermeldung und ohne roten Test.
  <!-- Zwei Faelle: die Zeile selbst, und dass der Grund in docs/analyse/tempo/admin-tempo-2026-09.md steht und dort bleibt. JSON kennt keine Kommentare, und eine Zeile ohne Begruendung wird beim naechsten Aufraeumen entfernt. Einen eigenen Schluessel in vercel.json habe ich probiert und verworfen: die Datei wird gegen ein Schema geprueft, ein fremder Schluessel waere ein Deploy-Risiko. vercel.json selbst ist unveraendert. -->
- [x] 🤖 Claude | Stammdaten in der Kundenakte bearbeiten: Knopf an der Karte, elf Felder im Platz editierbar, Speichern erst nach einer Aenderung, ueber die bestehende PATCH-Route mit E-Mail- und PLZ-Pruefung. Verlaufseintrag mit den Feldnamen, nicht den Werten (PR 44, 09.09.2026) ✓
  <!-- Bestandsaufnahme vorweg: im Admin liess sich bis dahin nichts aendern, schreibbar waren nur notizen und ga4_property_id. Die einzigen Wege waren das Portal (der Kunde selbst, sechs Felder) und der Supabase-Editor. Die Route konnte es laengst, sie wurde nur nie mit diesen Feldern gerufen. -->
  <!-- Fest bleiben Kundennummer, Status, Herkunft und der Projekt-Slug. Der Slug stand auf keiner der beiden Listen des Auftrags; er haengt an /report/[slug] und am Repo-Namen und liegt deshalb bei den festen. Zum Aendern waere eine eigene Zeile in der Route noetig. -->
  <!-- Die PLZ-Regel steht jetzt in lib/stammdaten-form.ts und wird von Akte und Portal gerufen. 1982 Tests, Rauchtest gegen meyso.de mit 98 Routen ohne 5xx, Probe gegen die Route: 401 ohne Sitzung, 422 bei E-Mail und PLZ, 400 bei {kundennummer, slug}. Bilder in beiden Zustaenden unter docs/analyse/stammdaten. -->
- [x] 🤖 Claude | Tests mit Draht nach draussen getrennt: kosten-konsistenz nach __tests__/netz, eigener Befehl npm run test:netz, Wache ueber die Grenze im Standardlauf (PR 45, 09.09.2026) ✓ Rot in der Netzgruppe heisst zuerst Netz, rot im Standardlauf immer Code.
  <!-- Dabei stellte sich die Markierung vom 07.09.2026 als falsch heraus: die vier Portaltests haengen nicht am Netz, sie ersetzen @/lib/supabase/client durch die Attrappe aus __tests__/helfer/fake-db.ts, und genau diesen Weg nehmen die Routen. portalDb benutzen nur die Portalseiten. Der eine rote Lauf bleibt damit unerklaert, die Vermutung ist ein Zeitueberlauf beim Import unter Last (20 Sekunden Grenze in der Datei selbst). -->
  <!-- Nebenbefund beim Verschieben und Zurueckholen: auftraege-konsistenz und content-konsistenz zaehlen den Testordner auf und werden rot, wenn dort Dateien wandern. -->
  <!-- Nach dem Merge am 09.09.2026: Standardlauf 1970 Tests in 101 Dateien gruen, Netzgruppe 20 Tests gruen, Rauchtest gegen meyso.de mit 98 Routen ohne 5xx. Gegenprobe der Wache: eine Zeile mit .env.local in password.test.ts eingefuegt, Wache rot, Zeile entfernt. -->
- [x] 🤖 Claude | Zahlungserinnerungen nur auf Klick: Vorschlag je Kunde auf HEUTE und im Finanzbereich, erster Klick zeigt die fertige Mail, zweiter verschickt. Sperre, solange ein Zahlungseingang nicht zugeordnet ist. Eine Stufe je Rechnung genau einmal (PR 42, Migration 20260907_erinnerung_stufen.sql, 07.09.2026) ✓
  <!-- Bestandsaufnahme vorweg (docs/finanzen/erinnerungen-bestandsaufnahme.md): es gab keinen automatischen Weg, an Punkt 1 des Auftrags war nichts zu entfernen. Neu ist die Wache: __tests__/erinnerung-nur-klick.test.ts folgt den Importen jeder Cron-Route und verlangt, dass keine davon eine Erinnerungsmail bauen kann. Gegenprobe am 07.09.2026 mit einem eingebauten Aufruf in cron/uptime, zwei Tests wurden rot. Regel und Begruendung in docs/finanzen/erinnerungen.md, Verweis in docs/crons.md. -->
  <!-- Die Sperre ist der Kern: eine Rechnung steht auf offen, weil niemand den Eingang zugeordnet hat, nicht weil der Kunde nicht gezahlt hat. Betragsgleiche Eingaenge werden an der Rechnung genannt. -->
- [x] 🤖 Claude | Stufe 2 als allgemeine zweite Erinnerung: Verweis auf § 7 Abs. 4 statt § 14 Abs. 5, der Sperrabsatz nur bei zwei aufeinanderfolgenden Vertragsrechnungen, Betreffzeilen "Zahlungserinnerung" und "Zweite Zahlungserinnerung" mit Rechnungsnummern, und die zweite erst 14 Tage nach der ersten (PR 43, 09.09.2026) ✓
  <!-- Korrektur an PR 42. Dort war Stufe 2 die Sperrankuendigung selbst, damit bekam ein Kunde mit einer offenen Projektrechnung nie eine zweite Erinnerung: Paragraf 14 Absatz 5 spricht nur von Dauerleistungen. stufeFuerKunden heisst jetzt sperreZulaessig, die Frage ist nicht mehr "welche Stufe", sondern "gehoert der Absatz hinein". Beide Paragrafen gegen lib/agb.ts geprueft, je eine eigene Wache. Kein Betrag fuer Zinsen oder Pauschale in der Mail: genannt wird die Grundlage, nicht das Ergebnis. -->
  <!-- Die 14 Tage stehen in keinem Vertrag, sie sind eine Hausregel, Zahl aus Paragraf 7 Absatz 3. Vorher verschwindet die Zeile nicht: sie steht mit dem Tag da, ab dem es geht, und ohne Knopf. Die Route weist vorher mit 409 ab, nicht nur der Bildschirm. 1954 Tests, Rauchtest gegen meyso.de mit 98 Routen ohne 5xx, Sperrprobe viermal wie erwartet. -->
  <!-- Ein einmaliger Fehlschlag in portal-mandanten.test.ts waehrend eines Zwischenlaufs, in drei folgenden Laeufen und einzeln gruen (60 Tests). Die Datei fragt Production ueber PostgREST ab, ein Netzhaenger ist die naheliegende Ursache. Nicht reproduziert, deshalb nur vermerkt. Nachtrag 23.09.2026: die Datei fragt Production nicht ab, sie arbeitet mit Attrappen. Die Ursache war der Aufbau, der unter Last in die Hook-Grenze lief, siehe die portal-mandanten-Zeile vom 23.09.2026. -->
- [x] 🤖 Claude | V4 Kundenportal live: Magic Link ohne Passwort, mehrere Personen je Kunde mit Rollen, altes Portal vollstaendig entfernt (PR 32, 07.09.2026) ✓
  <!-- Mandantentrennung dreilagig: Wache, gehoertZumKunden, RLS ueber portal_client_id. Das Portal liest mit anon und einem Token je Anfrage, nicht mit service_role, sonst waere RLS Zierde. Nachweis gegen Production am 07.09.2026: Kunde A sah 1 clients, 3 invoices, 2 client_contracts, 3 invoice_items, Kunde B seine eigenen, ohne den Anspruch keine einzige Zeile. angebote und portal_personen haben in Production null Zeilen und belegen nichts. 1530 Tests, Rauchtest oeffentlich und Admin gruen, 94 Admin-Routen ohne 5xx. Doku docs/portal.md. -->
  <!-- Zwei Funde nebenbei: proxy.ts trug noch die Weiche des alten Portals und machte /portal/anmelden unerreichbar (gefunden hat es der Rauchtest, nicht der Build), und die drei Portaltabellen fehlten in der Wochensicherung. Beim Aufraeumen der Altlasten kamen elf Policies aus dem alten Portal zutage, die an portal_users hingen; sie stehen in der Migration einzeln beim Namen statt hinter einem CASCADE. -->
- [x] 👤 PORTAL_SESSION_SECRET in Vercel gesetzt, alle drei Ziele (07.09.2026) ✓ Ohne die Variable haette das Portal keinen Anmeldelink ausgestellt und der Kunde trotzdem die uebliche Bestaetigung gesehen.
  <!-- Befund 07.09.2026 beim Ziehen der Vercel-Umgebung: die Variable steht dort nicht. Genau daran ist das alte Portal gestorben (PORTAL_JWT_SECRET fehlte). Die Anmelderoute schickt jetzt eine Push mit Prioritaet urgent, wenn sie fehlt, aendert die Antwort an den Kunden aber nicht. -->
- [x] 🤖 Claude | V4-Gestaltung: Kundenportal nach der ChatGPT-Vorlage, Huelle und sechs Seiten (PR 34, 07.09.2026) ✓
  <!-- Seitenleiste ab 1024 Pixel, darunter Kopfzeile mit Menue. Fuenf Zustaende je Seite, Berechtigungshinweis statt stiller Weiterleitung. Datenschicht unberuehrt, Diff auf lib/portal-daten.ts und lib/portal-wache.ts leer. Alle zehn Anpassungen mit Wache: kein Ersatzwert im Kuendigungsdialog, kein Hex im Portalbaum, keine Rohwerte als Beschriftung, Frist im Klartext. 27 Ansichten unter docs/analyse/portal-gestaltung. Der ersetzt-Filter in ladeAngebote bleibt, entschieden am 07.09.2026. -->
- [x] 🤖 Claude | Hotfix: Tailwind 4 uebersetzte ein Stylesheet von Tailwind 3, Portal und Annahme-Seite standen ohne Layout da (PR 35, 07.09.2026) ✓
  <!-- postcss.config.mjs fuhr @tailwindcss/postcss, in node_modules lag tailwindcss 3.4.19, eine Konfiguration gab es nicht. Erzeugt wurden nur Utilities ohne Theme-Wert: flex und hidden ja, p-5, gap-4, text-sm und jede Breakpoint-Klasse nein. Kein Buildfehler, keine Warnung. Betroffen waren genau zwei Stellen, app/portal und app/angebot, beide aus einer Tailwind-Vorlage; die Annahme-Seite seit April. Fix: tailwind.config.js mit content-Liste, postcss auf tailwindcss und autoprefixer, Preflight aus, die zwei noetigen Vorgaben daraus unter .tw-utilities. Wache: __tests__/nach-build/tailwind-klassen.test.ts prueft gegen das gebaute CSS. Belegt gegen meyso.de am 07.09.2026: .p-5, sm:grid-cols-2 und lg:hidden im ausgelieferten CSS, Medienabfragen 640 und 768 wieder da. -->
- [x] 🤖 Claude | Hotfix: Portal-Huelle schwebte auf breiten Bildschirmen, Lesebreite an den Inhalt statt an die Huelle (PR 36, 07.09.2026) ✓
  <!-- Der Rahmen trug max-w-[1120px] mx-auto um Seitenleiste und Inhalt zusammen. Jetzt volle Breite, Seitenleiste am linken Rand, main und Fusszeile mit 960 Pixeln linksbuendig. Gemessen bei 1920: Seitenleiste links 0 Breite 248 sticky, Inhalt und Fusszeile links 288 Breite 960. Die Annahme-Seite hat keine Seitenleiste, ihre Lesespalte bleibt zentriert (760 breit, Mitte 960 bei Viewport 1920), gegen Production geprueft. -->
- [x] 🤖 Claude | V5 Aenderungsanfragen und Minutenbudget live: der Kunde stellt Aenderungswuensche im Portal statt per WhatsApp, sieht sein Restbudget und den Stand jeder Aenderung, Dave bearbeitet sie im Admin (PR 37, 07.09.2026, Migration 20260907_v5_aenderungen.sql) ✓
  <!-- Alles heisst Aenderung, nicht Anfrage: Tabelle aenderungen, /portal/aenderungen, mail_log Art aenderung, Bucket aenderungen, Kill-Switch AENDERUNG_MAIL_KILL, Waechter 15 aenderungen_offen und 16 budget_aufgebraucht. Umbenannt vor der Migration, deshalb kein ALTER. Das Register im Admin heisst /admin/aenderungen: /admin/anfragen gibt es schon, das sind die Leads aus dem Kontaktformular, und ich hatte die Route beim ersten Anlauf ueberschrieben. -->
  <!-- Minutenbudget in lib/minutenbudget.ts, rechnet nur. Der Monat ist der in Europe/Berlin, nicht der des Servers: Vercel laeuft in UTC, und eine Aenderung, die am 1. um 00:30 Berliner Zeit erledigt wird, fiele sonst in den Vormonat und zaehlte gegen ein Budget, das schon verfallen ist. Minuten verfallen zum Monatsende, kein Uebertrag. Erledigen verlangt die Minutenzahl, auch die Null, sonst faellt die Aenderung stillschweigend aus der Rechnung. erledigt_am wird einmal gesetzt und wandert nicht mehr. -->
  <!-- Migration am 07.09.2026 eingespielt, danach gegen Production belegt: PostgREST liefert public.aenderungen mit HTTP 200 und leerer Liste, eine erfundene Tabelle dagegen 404 PGRST205, also existiert sie wirklich und der Schema-Cache ist neu. client_contracts.minuten_monat antwortet 200, eine erfundene Spalte 42703. Mit dem anon-Schluessel und ohne portal_client_id keine einzige Zeile, POST auf aenderungen 401. Wartung 30 nachgetragen (Hirmax, SQ Schmidt), Villa Nina und Problemlos bleiben bei 0. -->
  <!-- Rauchtest gegen meyso.de am 07.09.2026, Deployment dpl_9Fj5nN5gGfEPELKoEYJx1guHPTAE: sieben oeffentliche Seiten 200, alle sechs Portalrouten ohne Sitzung 307 auf /portal/anmelden, keine mit 200, /portal/anfragen 404, /admin/anfragen unversehrt, POST /api/portal/aenderungen und die Dateiroute 401. Tailwind-Wache mitgelaufen: .p-5, .gap-4, sm:grid-cols-2, lg:hidden und .tw-utilities im ausgelieferten CSS. -->
  <!-- Beim Umbenennen hat eine Pauschalersetzung sieben unbeteiligte Dateien angefasst, aus "Anfragen" das Wort "Aenderungn" gemacht und vier Bezeichner mit Umlaut erzeugt. Alles zurueckgenommen und geprueft. Merke: keine Pauschalersetzung ueber ein ganzes Repo, wenn das gesuchte Wort auch in Prosa und in fremden Bereichen vorkommt. -->
- [ ] 🤖 Tailwind-Preflight einschalten, als eigenes Vorhaben mit Vorher-Nachher je Seite. Heute ist es aus, weil es Ueberschriften, Listen, Raender und Rahmen der 4800 Zeilen in app/globals.css umwerfen wuerde. Solange es aus ist, brauchen Utility-Bereiche die Klasse .tw-utilities, siehe docs/portal.md
- [x] 🤖 Claude | Playwright als devDependency, dazu scripts/portal-bilder.mjs mit Bildern bei 390, 1120 und 1920 (PR 38, 08.09.2026) ✓
  <!-- Zwei Quellen, und der Unterschied steht im Skript, in docs/portal.md und in der Ablage: ohne Angabe die Ansichten aus __tests__/output, die aus den echten Server-Komponenten entstehen und das CSS aus dem letzten next build verlinken. Mit --url eine laufende Anwendung, das aber nur fuer Seiten ohne Sitzung. Alles unter app/portal/(innen) braucht eine angemeldete Person, und die gibt es nur zu einem echten Kunden. Genau deshalb steht die Zeile zum lokalen Stack weiter unten. Der volle Satz sind 24 Bilder und 7,6 MB, die liegen in einem ignorierten Ordner, committet ist die Auswahl unter docs/analyse/v6-zubuchen. -->
  <!-- Die dritte Breite kam am 07.09.2026 dazu: die Portal-Huelle trug max-w-[1120px] mx-auto um Seitenleiste und Inhalt zusammen und schwamm ab etwa 1300 Pixeln in der Mitte. Bei 1120 war das unsichtbar, weil der Rahmen genau die Bildschirmbreite hatte. Begruendung und Tabelle stehen in docs/portal.md. -->
- [ ] 🤖 V4 Nachlauf: erster echter Portalzugang. Noch hat kein Kunde eine Person, angebote und portal_personen sind in Production leer. Beim ersten Zugang pruefen, dass die Einladung ankommt und der Kunde genau seine Belege sieht
- [ ] 👤 Portal-Signatur auf ES256 umstellen, in dieser Reihenfolge: (1) App auf die neuen API-Schluessel migrieren (sb_publishable_ und sb_secret_), (2) eigenen ES256-Signing-Key in Supabase hinterlegen und PORTAL_DB_ALG=ES256 setzen, (3) erst danach das Legacy-Geheimnis widerrufen. Vorher nicht widerrufen: das Legacy-Geheimnis signiert auch anon und service_role, ein Widerruf legt die App still, bis die neuen Schluessel in Vercel sind
  <!-- Befund 07.09.2026: JWKS liefert bereits einen ES256-Schluessel (kid 51e896b8), das Legacy-Geheimnis gilt weiter. V4 laeuft bis dahin auf HS256, siehe docs/portal.md. -->
- [x] 🤖 Claude | V6 Zubuchen live: der Kunde sieht im Portal, was er dazubuchen kann, fragt es mit einem Klick an, und daraus wird ein Angebot im bestehenden Weg (PR 38, 08.09.2026, Migration 20260908_v6_zubuchen.sql) ✓
  <!-- Kein zweiter Bezahlweg und keine zweite Annahme. Die Position entscheidet, nicht das Angebot: angebot_items.art einmalig legt einen Auftrag an wie in V1, monatlich erhoeht preis und minuten_monat des laufenden Vertrags und schreibt den Verlauf mit der Angebotsnummer. Das angenommene Angebot ist das Dokument der Vertragsaenderung, kein neuer Bogen. Ohne laufenden Vertrag entsteht ein Vertragsentwurf. Ein Angebot, das beides mischt, wird abgewiesen, bevor die Annahme geschrieben ist. -->
  <!-- Die acht Vorschlaege stehen seit dem 08.09.2026 mit Preis und Kurztext in Production, alle mit zubuchbar false: Zusatzseite 290, Formular oder Buchungsstrecke 390, Blog- oder Referenzmodul 490, Fotos einpflegen 95 (einmalig), Aenderungsminuten auf 90 fuer 49 mit 60 Minuten, Redaktionszugang 19, Monatsbericht 19, Local-SEO-Betreuung 89 (monatlich). Freischalten macht Dave einzeln im Register Bausteine. -->
  <!-- Ein Posten mit Minuten erscheint nur, wo es Minuten zu erhoehen gibt: gefragt wird an zielVertrag, also genau am Vertrag, den die Annahme anfassen wuerde. Ein Kunde mit reinem Hosting sieht ihn nicht, ein gekuendigter Vertrag zaehlt nicht. Die Grenze steht auf der Seite, an der Zaehlung der Uebersicht und in der Route, denn eine Regel nur in der Anzeige ist keine. -->
  <!-- Drei Fallen, die beim Bauen sichtbar wurden und alle denselben Kern haben, naemlich eine Zahl, die stimmt, solange niemand etwas aendert: client_contracts.preis ist der Betrag je Intervall, ein monatlicher Zusatz an einem jaehrlichen Vertrag muss also mal zwoelf. Der Angebotsdialog haette art beim ersten Speichern verloren, weil aktualisiereAngebot die Positionen loescht und neu anlegt. Und minuten_monat fehlte in zwei Abfragen (ladeWaechter und VERTRAG_SELECT), beide rechneten deshalb mit der Vorgabe 30 statt mit dem Wert am Vertrag. -->
  <!-- Rauchtest gegen meyso.de am 08.09.2026, Deployment dpl_2bb2Ac5untqufq9M4RhuGPCHe98F: sieben oeffentliche Seiten 200, alle sieben Portalrouten ohne Sitzung 307 auf /portal/anmelden, POST /api/portal/zubuchen und /api/admin/zubuchen/vorbereiten je 401, /portal/anfragen 404, /admin/anfragen unversehrt, Tailwind-Klassen im ausgelieferten CSS. Suite 1774 gruen. -->
- [x] 🤖 V8 Kundenakte: eine Akte, zwoelf Register, jedes mit seinem Recht (21.09.2026, PR 67) ✓
  <!-- Die zweite Detailseite /admin/clients/[slug] war schon am 14.08.2026 geloescht (Commit 696bb7f), Kapitel 7.1 des Berichts beschrieb einen aelteren Stand. Der eigentliche Fund: die Akte lud alles und schickte alles. Gegen Production vorher 12 Verstoesse im Antwortstrom, Rechnungs-, Vertrags- und Portalzugangsfelder bei assistenz und vertrieb. Nachher 0 bei 100 Zielen mal vier Rollen, jedes der 15 Muster als inhaber gegengeprueft. -->
  <!-- Inhalt: zwoelf Register in lib/kundenakte.ts mit Recht je Register, die Seite laedt nur, was die Rolle sehen darf. Fuenf Kennzahlen im Kopf (offen, bezahlt im Jahr, laufend je Monat, offene Angebote, offene Aenderungen), je eine Funktion, gegen Zaehlung von Hand getestet. Waechter-Pruefung 21 rechnet sie je Kunde gegen den Bestand. Register Dokumente sammelt alle PDFs des Kunden, Verlauf als Register mit Filter nach Art, die Spalte bleibt. -->
  <!-- Der Sichtbarkeitslauf (scripts/admin-sichtbarkeit.mjs) kennt jetzt echte Kennungen und die lesenden API-Routen. Rauchtest gegen Production nach dem Deploy: keine 5xx in vier Rollen. -->
- [ ] 🤖 V6 Nachlauf: einen monatlichen Zusatz einzeln wieder abbestellen. Heute geht nur der ganze Vertrag, und der Verlauf sagt, was dazugekommen ist
- [x] 🤖 Claude | V7 Ausland live: Rechnungen, Angebote und Vertraege an Kunden in Drittlaendern tragen den richtigen Steuervermerk, die Sperre faellt fuer sie, und der Paragraf-19-Waechter zaehlt nur steuerbare Umsaetze (PR 40, 09.09.2026, Migration 20260909_v7_ausland.sql) ✓
  <!-- Drei Faelle in lib/steuervermerk.ts: DE traegt den Paragrafen 19, Drittland den Leistungsort nach Paragraf 3a Absatz 2 mit ausgeschriebenem Land, EU wirft. Der Paragraf-19-Satz erscheint auf einem Drittlandsbeleg nirgends, er handelt von deutscher Umsatzsteuer und die faellt dort nicht an. EU wirft mit Absicht: dafuer braucht es USt-IdNr, Reverse Charge und die Zusammenfassende Meldung, und nichts davon ist hinterlegt. -->
  <!-- Die Texte stehen in app_settings (steuer.vermerk_de, steuer.vermerk_drittland mit {land}), Gabi kann sie ohne Deploy aendern. Der Landesname kommt aus Intl, nicht aus einer Liste im Code. In der Rechnungsmail steht der Vermerk nur im Drittland, im Inland bleibt die Mail wie vor V7. -->
  <!-- Paragraf 19 rechnet jetzt nur mit steuerbaren Umsaetzen, und zwar in allen vier Bestandteilen der Prognose: Zufluss, offene Forderungen, Grundlast aus Vertraegen und offene Zahlplan-Raten. Der Auslandsbetrag verschwindet nirgends: eigene Zeile im Hinweis von Pruefung 4, Spalte "steuerbar DE" in EUeR-CSV und Jahresmappe, eigene Zeile im Summenblatt. Die Einkommensteuer betrifft beides, die Trennung gilt nur fuer Paragraf 19. -->
  <!-- Zwei Aenderungen am Bestand: auf der Rechnung steht jetzt "§ 19" statt "§19", es gab zwei Fassungen nebeneinander. Und Ziegler stand auf CHF und steht seit dem 09.09.2026 auf EUR, weil der Auftrag in Euro vereinbart ist. Alle sieben Kunden tragen jetzt EUR. -->
  <!-- Sieben Bogen per pdftotext belegt, Protokoll in docs/analyse/v7-ausland. Trockenlauf der ersten Ziegler-Rechnung liegt dort als PDF, erzeugt mit scripts/trockenlauf-beleg.mjs, nur lesend. Dabei aufgefallen: Ziegler hat weder Strasse noch PLZ noch Ort, das Festschreiben wuerde den Beleg deshalb ablehnen. Siehe die offene Zeile unten. -->
- [x] 👤 Anschrift von Ziegler Holzarbeiten nachgetragen: Brueggeweidlistrasse 1, 3718 Kandersteg, CH. Das Festschreiben nimmt den Beleg damit an (09.09.2026) ✓
- [ ] 🤖 Fremdwaehrung, erst wenn ein Kunde in Franken vereinbart ist. Heute rechnen alle sieben Kunden in Euro, Ziegler seit dem 09.09.2026 auch (der Auftrag ist in Euro vereinbart). Umfang, wenn es soweit ist: CHF mit EZB-Kurs am Zuflusstag, Umrechnung im Zahlungseingang, EUR-Betrag in der Jahresmappe. Der Bogen kann CHF schon (lib/waehrung.ts), was fehlt ist die Umrechnung fuer Buchhaltung und Paragraf 19
  <!-- Nicht gebaut, mit Absicht: ein Kurs, den niemand braucht, ist ein Kurs, den niemand prueft. Der EPC-Zahlungscode und der Dauerauftrag-Hinweis gibt es ohnehin nur bei Euro, das steht seit V0b so in lib/waehrung.ts. -->
- [x] 🤖 V10 Teil A, E-Rechnungen empfangen. Ohne Ausloeser, kann jederzeit. E-Rechnungen kommen als XML (XRechnung) oder als PDF mit eingebettetem XML (ZUGFeRD). Der Ausgaben-Dialog aus S1 nimmt beide an, liest Aussteller, Datum, Betrag, Positionen und Steuer aus dem XML und belegt die Buchung damit vor
  <!-- Haengt nicht an der Kleinunternehmerregelung: empfangen koennen muss Dave laut seiner Ansage vom 09.09.2026 seit 2025, unabhaengig davon, ob er selbst welche ausstellt. Deshalb ohne Ausloeser und vor Teil B machbar. -->
  <!-- Erledigt am 20.09.2026 mit PR 65. Drin: Leser fuer XRechnung UBL, XRechnung CII und ZUGFeRD gegen die oeffentlichen Testsuiten, Vorbelegung im Belegdialog, Bestaetigung einer wartenden Buchung statt zweiter Buchung, Stapel per Ziehen mit Ergebnis je Datei. Migration eingespielt, sieben Bedingungen und neun Spalten nachgemessen, Protokoll in docs/finanzen/erechnung-v10a.md. Rauchtest als vier Rollen gegen Production ohne 5xx, Methodenlauf an der neuen Route: inhaber und partner hinein, assistenz und vertrieb 403. -->
- [x] 🤖 Belege per Mail an ein eigenes Postfach annehmen, als Folgeschritt zu V10 Teil A. Ueber den bestehenden IMAP-Weg der Zahlungseingaenge: ein eigenes Postfach, jeder Anhang durch denselben Leser wie der Dialog, Ergebnis je Mail wie beim Stapel (bestaetigt, neu, abgewiesen mit Grund). Damit muss niemand mehr eine Rechnung aus dem Postfach herausziehen und wieder hochladen (25.09.2026: gebaut, PR 86) ✓
- [x] 🤖 Belege per Mail, PR 86 (feat/belege-per-mail), am 01.10.2026 als Squash d894132 gemergt ✓ Leser liest INBOX/04_Finanzen/Rechnungen_rein nur lesend, jeder PDF- und XML-Anhang bis 25 MB geht per signiertem Upload direkt in den Bucket belege (an der 4,5-MB-Grenze von Vercel vorbei), Zuordnung wie die Beleg-Route, neuer Status zu_pruefen, HEUTE-Zeile, Filter und Pruefdialog im Register, Waechter-Pruefung 26. Merge, Migration und Cron-Eintrag nach Daves Wort
  <!-- Bausteine vom Finom-Weg: imapflow, mailparser, dieselben IMAP-Secrets, GitHub Action. Neu: /api/inbound/beleg (Bearer BELEGE_INBOUND_TOKEN, Kill-Switch BELEGE_MAIL_KILL), /api/admin/expenses/pruefen (nur inhaber und partner), Tabelle beleg_mails, Ablauf in docs/finanzen/belege-per-mail.md. PDFs ohne E-Rechnung: Betrag, Datum und Rechnungsnummer per pdftotext, im Vermerk als "aus Text gelesen", nie direkt belegt. 2796 Tests, 72 neu, Gegenprobe 46 von 46 rot, Rauchtest vier Rollen lokal ohne neue 5xx, Methodenlauf inhaber und partner hinein, assistenz und vertrieb 403. Code-Review: erster Durchgang ein hoher und drei mittlere Funde (Atomaritaet beim Bestaetigen, doppelte Buchung bei ueberlappenden Laeufen, React-Key, GRANT), alle behoben; zweiter Durchgang READY. -->
- [x] 👤 Dave | (ueberholt am 01.10.2026: statt des Trockenlaufs lief nach dem Merge auf Daves Wort der erste echte Lauf, Workflow von Hand) IMAP_HOST, IMAP_USER und IMAP_PASSWORD in .env.local von meyso-website eintragen und die Installation von imapflow und mailparser fuer den Trockenlauf freigeben (46 Pakete von npm, etwa 9 MB, in einem Ordner ausserhalb des Repos, danach geloescht). Dann folgt der Trockenlauf gegen das Postfach, nur lesend, als Tabelle in PR 86
- [x] 👤 Dave | Migration 20260925_belege_per_mail.sql im SQL-Editor einspielen (PR 86), vorher und nachher die Katalog-Abfragen aus dem Kopf. Additiv: Status zu_pruefen, Betrag 0 nur dort, Tabelle beleg_mails nur fuer service_role, Art belege_mail. Erst die Migration, dann der Merge (am 01.10.2026 eingespielt vorgefunden: 15 Bedingungen wie erwartet, anon bekommt auf beleg_mails 401) ✓
- [x] 👤 Dave | BELEGE_INBOUND_TOKEN erzeugen (mindestens 16 Zeichen), in Vercel und als GitHub-Secret im Repo meyso-website setzen, dann PR 86 entscheiden. Stand 01.10.2026: fehlt an beiden Stellen (Vercel Production und GitHub-Secrets), der Merge ist deshalb gestoppt. Derselbe Wert an beiden Stellen (01.10.2026 abends: an beiden Stellen gesetzt, nur die Namen geprueft, der Lauf von Hand kam damit durch) ✓
- [x] 🤖 Runde 01.10.2026 zu PR 86, vor dem Merge gestoppt: Befund 9 umgesetzt, Pruefung 26 zaehlt Kalendertage wie 22 und 25 (Helfer kalendertage, ein unlesbares Datum faellt heraus statt den Waechterlauf zu werfen, Test mit dem Beispiel 17.09. 23 Uhr, Gegenprobe rot, Commit 0d10bec). Nachher-Liste der Migration im Protokoll (9d6dcf7). Gestoppt, weil BELEGE_INBOUND_TOKEN in Vercel Production und in den GitHub-Secrets fehlt. Windows-Ergebnis fuer ausland-belege: 1 gruen, 18 uebersprungen, kein Fehler (pdftotext 4.00 ohne -bbox) ✓
  <!-- Umgebung am 01.10.2026, nur Namen gelesen (vercel env ls production, gh secret list, gh variable list). Der Leser laeuft als GitHub Action, nicht bei Vercel: IMAP_HOST, IMAP_USER und IMAP_PASSWORD sind GitHub-Secrets und vorhanden, dieselben wie im Finom-Weg; BELEGE_INBOUND_TOKEN fehlt dort. Der Ordnerpfad ist keine Variable, er steht im Code (INBOX/04_Finanzen/Rechnungen_rein), ebenso Port 993 und das Ziel https://meyso.de. In Vercel Production braucht der Endpunkt BELEGE_INBOUND_TOKEN (fehlt) und die vorhandenen Supabase-Werte. BELEGE_MAIL_KILL ist weder in Vercel noch als Repo-Variable gesetzt, also aktiv. ntfy faellt ohne NTFY_TOPIC auf meyso-dave zurueck, wie alle Meldungen. Migration eingespielt: 15 Bedingungen wie erwartet, anon bekommt auf beleg_mails 401 (42501). Suite unter Windows: 2874 gruen, 18 uebersprungen (ausland-belege ohne Poppler). Ein erster Lauf hatte sechs Zeitueberschreitungen unter Last; dieselben Dateien mit hoeherer Grenze und der zweite volle Lauf gruen. Code-Review der Aenderung: NEEDS WORK mit zwei mittleren Funden (Wurf bei unlesbarem Datum, Zaehlung der Wertemengen im Protokoll), beide behoben. -->
- [x] 🤖 Runde 01.10.2026 abends, PR 86 live: Token an beiden Stellen geprueft (nur Namen), Squash-Merge d894132, Deploy 2ge4ysiog, ab 18:27 UTC liefert der Waechter per GET 26 Pruefungen. Rauchtest vier Rollen gegen meyso.de ohne 5xx, Methodenlauf in Production wie lokal. Jetzt pruefen: Lauf 41eeda44-959b-4474-84f3-3def59141ef0, 26 Pruefungen, 13 Treffer, Pruefung 26 ohne Treffer. Workflow von Hand mit 365 Tagen (Run 36908536963, erfolgreich): Ordner erreicht, 8 Mails gelesen, 14 Zeilen in beleg_mails, 9 Dateien hochgeladen, 0 automatisch belegt, 7 zu pruefen ✓
  <!-- 365 statt 14 Tage, weil die offenen Erwartungen bis April zurueckreichen; mit 14 Tagen haette der Lauf nur die zwei Mails vom 24.09. gesehen. Lauf in laeufe: 3e692b30-2603-4567-889b-dac4d3e354d7, Zaehlung 8 Mails, 0 belegt, 7 zu pruefen, 3 schon da, 2 ohne Anhang, 2 abgewiesen, 0 Fehler. Die 14 Zeilen: 7 zu pruefen (Anthropic Rechnung ONOUNKA5-0002 vom 23.03.2026 21,42 Euro, ONOUNKA5-0003 vom 25.03.2026 87,23 Euro, WIRmachenDRUCK Rechnung 38961904-1 vom 08.04.2026 15,49 Euro, dazu vier Nicht-Rechnungen mit 0 Euro: AGB und Widerrufsbelehrung von mailbox.org, zwei AGB von WIRmachenDRUCK). 3 bereits vorhanden (die Mailbox.org-Rechnung MBO-1149137-26 liegt mit demselben SHA-256 schon an der belegten Buchung; die zwei Anthropic-Quittungen tragen dieselbe Rechnungsnummer wie die Rechnung in derselben Mail). 2 ohne Anhang (eine Testmail vom 24.09., eine Einladung von Resend). 2 abgewiesen (signature.asc, PGP-Signatur, nicht geoeffnet). Keine der sieben offenen Erwartungen (Claude April bis September, Vercel September) wurde getroffen: ihre Rechnungen liegen nicht im Ordner. Die Anthropic-Rechnungen vom Maerz sind nicht schon gebucht, unter den belegten Buchungen ist keine von Anthropic. ausland-belege laeuft in keiner CI, kein Workflow fuehrt vitest aus. -->
- [x] 🤖 Nachlese PR 86, Entscheidung Dave: AGB und Widerrufsbelehrungen werden zu Buchungen zu pruefen mit 0 Euro (vier von sieben im ersten Lauf). Vorschlag: Anhaenge, deren Name AGB, Widerruf, Withdrawal oder Terms traegt, als abgewiesen protokollieren, mit Grund und ohne Buchung. Nicht nach dem Text entscheiden: ein gescanntes PDF ohne Text waere sonst auch kein Beleg (05.10.2026: entschieden und gebaut, Dateiname mit AGB, Widerruf, Withdrawal, Terms oder Conditions und im Text weder Betrag noch Rechnungsnummer, ohne lesbaren Text mit dem Grund "Dateiname, kein Text"; PR 88 gemergt als 282c2c5) ✓
- [x] 🤖 Nachlese PR 86, ohne Termin: ist ein Anhang erst nach dem Hochladen bereits vorhanden (gleiche Rechnungsnummer), bleibt seine Datei unverbunden im Eingang des Buckets, im ersten Lauf zwei Anthropic-Quittungen. Wie bei abgewiesen entfernen, wenn keine Zeile in beleg_mails auf sie zeigt (05.10.2026: am Ende jedes Laufs, nur Dateien aelter als 30 Minuten, hoechstens 25 auf einmal; PR 88 gemergt, der erste Lauf danach hat die zwei Quittungen entfernt) ✓
- [x] 🤖 Nachlese PR 86, nach Daves Wort: ein GitHub-Workflow, der vitest auf Pull Requests laufen laesst, mit poppler-utils, damit ausland-belege seine 18 inhaltlichen Proben ausserhalb des Macs ueberhaupt laeuft. Heute laeuft kein Test in einer CI (05.10.2026: tests.yml mit tsc, eslint und vitest; PR 89 gemergt als a282e89, CI auf main gruen in 4:07) ✓
- [ ] 🤖 Nachlese PR 86, ohne Termin: der erste ZUGFeRD-Beleg nach einem Kaltstart laedt pdf-lib (lib/erechnung.ts, dynamischer Import). Im Test kostete das unter Windows bis zu sechs Sekunden. Beim Endpunkt /api/inbound/beleg (maxDuration 60) unkritisch, aber nach dem ersten echten Lauf die Dauer in laeufe ansehen
- [x] 🤖 Nach dem Einspielen von 20260925_belege_per_mail.sql: node scripts/check-bedingungen.mjs expenses laeufe beleg_mails, Nachher-Liste (erwartet expenses 9, laeufe 1, beleg_mails 5) ins Protokoll docs/finanzen/belege-per-mail-migration.md (01.10.2026: expenses 9, laeufe 1, beleg_mails 5, genau die erwartete Liste, im Protokoll auf dem Branch von PR 86) ✓
- [x] 🤖 Nach dem Merge von PR 86: Workflow Belege per Mail einmal von Hand, melden, ob er den Ordner erreicht und was er findet (01.10.2026: Run 36908536963 erfolgreich, Ordner erreicht, 8 Mails, siehe Rundeneintrag) ✓
- [x] 🤖 Takt */30 fuer den Workflow Belege per Mail (belege-mails.yml), als eigener Commit nach Daves Wort. Bis dahin nur von Hand (05.10.2026: um 6:07, 12:07, 18:07 und 23:07 Uhr Berlin, ein Eintrag mit timezone Europe/Berlin, Fenster 14 Tage; PR 88 gemergt) ✓
- [ ] 🤖 Nachlese PR 86, ohne Termin: das Register Ausgaben zeigt die Knoepfe je Zeile nur am Desktop (admin-nur-desktop), wie bei den erwarteten Buchungen schon vorher. Der Link von HEUTE auf "Belege zu pruefen" fuehrt am Telefon also in eine Liste ohne Bestaetigen und Ablehnen. Vorschlag: die Aktionen fuer zu pruefen auch mobil zeigen
- [x] 🤖 PR 86 vor dem Merge auf main nachziehen: Pruefung 25 ist seit PR 87 (30.09.2026) der Rechnungsweg, "Belege zu pruefen" wird Pruefung 26 (lib/waechter.ts, dazu die Tests, die 25 Pruefungen zaehlen, und das Protokoll) (30.09.2026: main mit ec11114 in den Branch gemergt, als Merge-Commit ed76ecf statt Rebase, weil ein Rebase einen Force-Push braeuchte. Belege zu pruefen ist Pruefung 26 in lib/waechter.ts, vier Tests, docs/finanzen/belege-per-mail.md und der PR-Beschreibung) ✓
  <!-- Nachgezogen am 30.09.2026, ohne Merge und ohne Lauf gegen Production: feat/belege-per-mail von 895b067 auf 69c01f1, normal gepusht. ed76ecf ist der Merge von main mit der Aufloesung (Rechnungsweg 25, Belege 26), 3ad478a und 69c01f1 der ausland-belege-Test. Der eigene Patch des PRs ist in 31 von 38 Dateien unveraendert, anders nur die Nummer (lib/waechter.ts, vier Tests, docs/finanzen/belege-per-mail.md) und ausland-belege.test.ts. Eine eigene Waechter-Uebersicht als Datei gibt es nicht: Kachel auf HEUTE, ntfy-Zusammenfassung und waechter-lauf.mjs nehmen Nummer und Titel aus dem Code. Suite 2891 Tests in 153 Dateien gruen (Mac, vorher 2 rot), tsc sauber, next build gruen, Vercel-Vorschau gruen. Gegenprobe zum Test: neun Fehler, acht rot, einer uebersprungen wie gewollt. Code-Review READY mit elf Befunden: sieben im neuen Test, in 69c01f1 behoben; offen die Punkte hier darunter und der Vertragsbogen ohne Land. Alles in der PR-Beschreibung, Abschnitt 6. -->
- [x] 🤖 PR 86 vor dem Merge: npx vitest run __tests__/ausland-belege.test.ts einmal auf dem Windows-Rechner, erwartet 19 gruen. Auf dem Mac gruen, unter Windows noch nicht gelaufen. Der Fall mit gemischter Wortreihenfolge ist eine Wache, kein Beweis fuer den zweiten Rechner (Review vom 30.09.2026). Windows-Ergebnis 01.10.2026: 1 gruen, 18 uebersprungen, kein Fehler. Gelaufen ist nur die Schriftprobe; die 18 inhaltlichen Proben brauchen pdftotext -bbox aus Poppler, auf dem Windows-Rechner liegt nur pdftotext 4.00 von Glyph & Cog (xpdf, aus Git fuer Windows) ohne -bbox. 19 gruen gibt es hier erst mit Poppler fuer Windows, ein Download nach Daves Freigabe. In der CI laeuft der Test gar nicht: kein Workflow im Repo fuehrt vitest aus (belege-mails, mail-sequences, zahlungs-mails), und Vercel baut nur mit next build (05.10.2026: in der CI von PR 89 mit Poppler 24.02.0 alle 20 Tests gruen, die 18 inhaltlichen Proben zum ersten Mal ausserhalb des Macs) ✓
- [x] 🤖 Runde 05.10.2026: zwei Lesefragen beantwortet, PR 88 und PR 89 offen, kein Merge ✓
  <!-- (a) Lauf 41eeda44 vom 01.10.: 13 Treffer, Pruefung 1 Ausgaben ohne Beleg 9, Pruefung 5 Steuerruecklage 1, Pruefung 18 Faelligkeit passt nicht zur Laufzeit 1, Pruefung 19 Platzhalter 1, Pruefung 20 Versendet ohne Protokoll 1. Gegen Lauf 391974a9 vom 30.09. (10 Treffer) neu: Claude Oktober und Vercel Oktober (Ausgabenlauf am 01.10. um 03:00 UTC) und Rechnung 2026-021 ohne mail_log-Zeile. Der volle Stand beider Laeufe ist nach 48 Stunden geleert, die Treffer sind aus ergebnis.zahlen und den Daten rekonstruiert. (b) Das Portal zeigt keinen Auftrag: keine RLS-Richtlinie fuer auftraege, kein Lader in lib/portal-daten.ts, mit dem Anon-Schluessel liefert auftraege eine leere Liste. Sichtbar sind nur Folgen: das Angebot mit seinem Zahlplan-Vorschlag, jede Rate als Rechnung ab festgeschrieben, der Wartungsvertrag ab aktiv. PR 88: AGB-Regel, Aufraeumen des Eingangs, Takt; Review READY, beide mittleren Funde eingebaut, 21 von 21 Gegenproben rot. PR 89: tests.yml mit Bestandsgrenze fuer eslint, drei Zeitbomben entschaerft (angebote seit 05.10. rot, zubuchen und belegintegritaet ab 01.01.2027), Review NEEDS WORK klein, alles eingebaut. -->
- [x] 🤖 Runde 05.10.2026 nachmittags: PR 89 und PR 88 gemergt und live, die zwei Quittungen sind weg, 2026-021 geklaert (Mail zugestellt, Protokoll am Fremdschluessel gescheitert), Fix und Nachtrag in PR 90, VT-2026-005 abgeschlossen ✓
  <!-- PR 89: Squash a282e89, CI auf main 37302065341 gruen in 4:07 (npm ci 36 s, tsc 30 s, eslint 44 s, vitest 1:37). PR 88: die drei Aenderungen als c865ee2 (timezone Europe/Berlin mit einem Eintrag '7 6,12,18,23 * * *', Minute 7, AGB ohne lesbaren Text mit "Dateiname, kein Text"), Review READY mit drei kleinen Hinweisen, alle eingebaut. CI des PRs 37303914928 gruen in 3:33 mit Cache, Squash 282c2c5 um 11:40:11Z, CI auf main 37304418637 gruen in 3:34. Deploy meyso-website-31rd9r0f9 (vorher 34yaunxtc), ab 11:41:49Z nennt Pruefung 10 "erwartet um 6:07, 12:07, 18:07 und 23:07 Uhr". Rauchtest vier Rollen gegen meyso.de ohne 5xx: inhaber 104 geprueft, 85 durch, 0 abgewiesen; partner 104, 84 und 1 (/api/admin/zugaenge); assistenz 102, 48 und 51; vertrieb 102, 50 und 46. Workflow von Hand mit 14 Tagen: Run 37306009639 erfolgreich, Lauf 2e44520f-0f66-4a16-b936-4d4d759a24b8, 2 Mails im Fenster, beide schon bekannt, 0 neu, 2 aufgeraeumt: Receipt-2459-8192-2695.pdf und Receipt-2525-3272-2337.pdf (bereits_vorhanden, ihre Zeilen in beleg_mails bleiben). Eingang im Bucket 9 auf 7 Dateien, alle 7 mit Zeile in beleg_mails und Buchung. VT-2026-005: next_invoice_due 01.10.2026 auf null um 11:57:08Z, nur mit festen Bedingungen (beendet, inaktiv, Ende 07.09., faellig 01.10.), wie PATCH /api/admin/contracts es taete; keine Rechnung am 01.10. fuer diesen Vertrag. Waechter live danach: 26 Pruefungen, 12 Treffer, Pruefung 10 und 18 ohne Treffer, Pruefung 20 nur noch 2026-021 bis zum Nachtrag. -->
- [x] 🤖 Runde 05.10.2026 abends: Nachtrag eingespielt, PR 90 gemergt und live, Pruefung 20 meldet 0 (Lauf 61a88ccb), Lesefrage zu Zeilen ohne Person beantwortet ✓
  <!-- PR 90: CI des PRs gruen (pruefen 3:51, Run 37309312242), Squash 50c5a47 um 13:52:20Z, CI auf main 37320165261 gruen in 3:00. Deploy meyso-website-rakva042m (vorher 31rd9r0f9), GitHub-Deployment zum Merge-Commit success um 13:54:05Z, meyso.de zeigte nach 99 s darauf. Rauchtest vier Rollen gegen meyso.de ohne 5xx: inhaber 104 geprueft, 85 durch, 0 abgewiesen; partner 104, 84 und 1; assistenz 102, 48 und 51; vertrieb 102, 50 und 46. Jetzt pruefen (POST /api/admin/waechter): HTTP 200, Lauf 61a88ccb-76ce-47a7-9f51-05d9c92d2f56, 26 Pruefungen, 11 Treffer (Pruefung 1 Ausgaben ohne Beleg 9, Pruefung 5 Steuerruecklage 1, Pruefung 19 Platzhalter 1), versand_ohne_protokoll 0, keine neue Stufe nach Paragraf 19. -->
  <!-- Lesefrage, seit 22.09.2026 00:00 Berlin, in den acht Tabellen mit admin_person_id. Feste Kennung von Notzugang oder Rauchtest: ueberall 0, der Fremdschluessel liess sie nie zu. Leere Kennung: mail_log 9 von 10 (6 ohne Menschen im Admin: 3 portal_login, 1 zubuchung aus dem Portal, 2 Rechnungen aus dem Lauf am 01.10. um 04:00; 3 aus dem Nachtrag mit dem Namen "Notzugang, nachgetragen am 05.10.2026"; die eine mit Person ist das Angebot AN-2026-003 von Fabian Meyer am 22.09.), kunden_notizen 5 von 5 (alle Autor System: die Annahme von AN-2026-003 ist richtig ohne Person, sie kam vom Kunden; vier sind Handgriffe im Admin, die als System stehen: AN-2026-003 als Entwurf angelegt, festgeschrieben und versendet am 22.09., Rechnung 2026-021 festgeschrieben am 01.10.), angebote 1 von 2 (der Entwurf aus der Zubuchung im Portal am 24.09., richtig ohne Person). clients, deals, reminders, leads und crawl_history: seit dem 22.09. keine einzige Zeile. -->
- [x] 🤖 Runde 05.10.2026 spaet: PR 91 (Person im Verlauf, protokoll_fehler, Waechterpruefung 27) und PR 92 (Notzugang-Band, Beenden leert die Faelligkeit) gebaut, kein Merge ✓
  <!-- PR 91 (feat/protokoll-ausfaelle, 53308c2 und 09d8cd2): neun Verlaufsstellen in lib/angebote.ts, lib/festschreiben.ts und lib/vertraege.ts nehmen die Person, acht Admin-Routen geben wachbefund.person mit, Annahme, Ablehnung und Portal-Kuendigung bleiben System. protokolliereMail und schreibeVerlaufEintrag schreiben jeden Ausfall nach protokoll_fehler (stelle, tabelle, fehler mit Code, kontext mit der geplanten Zeile), nichts wirft. Migration 20261005_protokoll_fehler.sql ohne CHECK, RLS, nur service_role, in der Sicherung. Pruefung 27 meldet die letzten 7 Kalendertage (UTC), Treffer mit Berliner Zeit, fehlende Tabelle als eigener Treffer, ueber den Lader getestet; der Kopf von lib/waechter.ts nennt nicht mehr zehn Pruefungen. Doku docs/protokoll-ausfaelle.md mit Nachtrag-SQL samt Versandzeit und DELETE, der Test fuehrt es gegen PGlite aus. Suite 162 Dateien gruen (einmal portal-mandanten mit Hook-Zeitlimit unter Last, allein 60 von 60), tsc, ESLint-Grenze 20, next build, Rauchtest vier Rollen und Sichtbarkeitslauf lokal ohne Befund, Gegenproben 25 von 25 rot, Review READY mit drei mittleren Punkten, alle eingebaut. CI des PRs gruen. -->
  <!-- PR 92 (feat/notzugang-banner, 4dbb032 und bc2f67b): Band ueber Seitenleiste und Inhalt, solange die Sitzung ueber den Notzugang laeuft (istNotzugang im Layout), Knopf meldet ab und oeffnet die Anmeldeseite, meldet ein gescheitertes Abmelden. Mit Band wird die Huelle zum Raster, die Leiste nimmt die Hoehe der Zeile statt 100vh. Lokal gegen den Build: Band mit Notzugang-Cookie, keins mit Rauchtest-Marken. Bilder docs/analyse/notzugang/notzugang-band-1366.png und -390.png aus der statisch gerenderten Huelle, ohne echte Daten. beende setzt next_invoice_due null in Update und Rueckgabe, Test mit dem Fall VT-2026-005 vorher und nachher gegen Pruefung 18. Suite 161 Dateien gruen, tsc, ESLint-Grenze, next build, Rauchtest und Sichtbarkeitslauf lokal ohne Befund, Gegenproben 10 von 10 rot, Review READY, Fehlermeldung beim Abmelden, Rasterregel, role note und Wortwahl eingebaut. Konflikt mit PR 91 in beende: eine Stelle, zwei Zeilen, mit git merge-file nachgestellt. -->
- [x] 🤖 Runde 05.10.2026 ab 18 Uhr: PR 91 und PR 92 gemergt und live, Pruefung 27 und 18 melden 0, der :07-Lauf speichert seinen Stand ✓
  <!-- PR 91: CI gruen (pruefen 3:38), Squash 9498e0b um 16:05:41Z, CI auf main 37338124455 gruen in 3:27. Deploy meyso-website-771fdtfo5 (vorher rakva042m), ab 16:07:49Z liefert der Waechter per GET 27 Pruefungen. Rauchtest vier Rollen gegen meyso.de ohne 5xx: inhaber 104 geprueft, 85 durch, 0 abgewiesen; partner 104, 84 und 1; assistenz 102, 48 und 51; vertrieb 102, 50 und 46. Jetzt pruefen: Lauf 0dc4ac10-a1d4-4462-87b4-36f4f9620c5f, 27 Pruefungen, 11 Treffer (Pruefung 1 mit 9, 5 und 19 mit je 1), keine Quellenfehler, Pruefung 27 meldet 0, Stand gespeichert. Der stuendliche Lauf um 16:07:12Z kam noch vom alten Deploy (26 Pruefungen, Stand gespeichert). Der Lauf um 17:07:12Z (9f911e9b-cee7-44f6-8648-d900529a58b5): 27 Pruefungen, 11 Treffer, keine Quellenfehler, Pruefung 27 meldet 0, Stand gespeichert; HEUTE (/admin) ohne "ausgeblieben". -->
  <!-- PR 92: main mit PR 91 in den Branch gemergt (93e473a), ein Konflikt in beende, beide Zeilen behalten: Verlauf mit o.person, Rueckgabe mit next_invoice_due null. Suite lokal 164 Dateien gruen, tsc, ESLint-Grenze 20. CI gruen (pruefen 2:39), Squash 5375c13 um 17:08:23Z, CI auf main 37346182561 gruen in 4:09. Deploy meyso-website-51yl5uh9u (vorher 771fdtfo5), Production-Status success um 17:10:15Z. Lesend gegen meyso.de: das Band erscheint mit Notzugang-Cookie, nicht mit den Rauchtest-Marken. Rauchtest vier Rollen ohne 5xx, dieselben Zahlen. Jetzt pruefen: Lauf 0e4abf0c-4ba4-4829-a0c5-45f8a3c5326d, 27 Pruefungen, 11 Treffer, Pruefung 18 meldet 0, Pruefung 27 meldet 0, Stand gespeichert. VT-2026-005 live: beendet, inaktiv, Ende 07.09.2026, next_invoice_due weiter leer. -->
- [x] 🤖 Runde 05.10.2026 abends: PR 93 gebaut (Person bei Storno, Aenderungen und Deal gewinnen; Lauf leert die Faelligkeit; Pruefungszahlen auf 27), kein Merge ✓
  <!-- PR 93 (feat/verlauf-person-rest: 6fc9b78, cb64fcf, faadf34). (1) storniere, bearbeiteAenderung und gewinneDeal nehmen die Person, drei Admin-Routen geben wachbefund.person mit; Anlegen einer Aenderung gibt es nur im Portal durch den Kunden, bleibt System; die Annahme eines Angebots ruft gewinneDeal ohne Person. Tests je Stelle mit Notzugang, Routen-Wache mit zwoelf Admin-Routen. (2) generate-invoices: Zweig Ende erreicht setzt next_invoice_due null, auch im Rueckfall ohne Spalte status; Test mit zwei Laeufen (01.10. stellt Oktober, 01.11. beendet), danach Pruefung 18 ohne Treffer, dazu ein Rueckfall-Test. (3) zehn Stellen auf 27 oder ohne Zahl (Liste im PR), Doku waechter-s3.md mit Tabelle 11 bis 27 aus dem Lader; neue Wache waechter-zahl-texte mit Zahlwoertern bis dreissig, Zeilenumbruechen, Selbsttest und vier historischen Ausnahmen. Suite 165 Dateien gruen, tsc, ESLint-Grenze, next build, Rauchtest und Sichtbarkeitslauf lokal ohne Befund, Gegenproben 13 von 13 rot, Review READY, alle Punkte bis auf die Regel von Pruefung 18 eingebaut. -->
- [x] 👤 Dave | PR 93 entscheiden (Person bei Storno, Aenderungen und Deal gewinnen; Lauf leert die Faelligkeit; Pruefungszahlen auf 27 mit Wache). Abweichung vom Auftrag: eine Aenderung anlegen kann nur der Kunde im Portal, dieser Eintrag bleibt beim System (05.10.2026: freigegeben, gemergt als 6e09e98 und live) ✓
- [x] 👤 Dave | Regel von Pruefung 18 fuer gekuendigte Vertraege entscheiden. Im letzten Monat vor dem Auslaufen meldet sie sie faelschlich: nach der letzten Rechnung liegt die Faelligkeit hinter dem Ende (Probe 05.10.2026: gekuendigt zum 31.10., faellig 01.11., am 15.10. ein Treffer). Vorschlag: nach dem Ende nur melden, wenn der Vertrag beendet oder inaktiv ist, oder wenn der Faelligkeitstag vorbei ist, ohne dass der Lauf ihn geschlossen hat (05.10.2026: entschieden wie vorgeschlagen, gebaut in PR 94; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Runde 05.10.2026 spaetabends: PR 93 gemergt und live, Rauchtest vier Rollen ohne 5xx, Jetzt pruefen mit Lauf 45b5a827 (Pruefung 18 und 27 bei 0); PR 94 gebaut (Pruefung 18 nach dem Faelligkeitstag, Notiz von Hand mit Person), kein Merge ✓
  <!-- PR 93 als Squash 6e09e98 um 18:26 UTC, Deploy 3ypc6kudw (vorher 51yl5uh9u), ueber die GitHub-Deployments dem Merge-Commit zugeordnet, meyso.de zeigt darauf. Rauchtest gegen meyso.de: inhaber 104 Routen, 85 durchgelassen, 0 mit 403; partner 84 und 1; assistenz 102 Routen, 48 und 51; vertrieb 50 und 46; kein 5xx, Zahlen gleich wie nach PR 92. Jetzt pruefen: HTTP 200, 27 Pruefungen, 11 Treffer (P1 9, P5 1, P19 1) wie in den Laeufen seit 16:09, Stand gespeichert. PR 94 (fix/pruefung-18-notiz-autor): pruefeFaelligkeit meldet gekuendigt und aktiv erst ab dem Tag nach der Faelligkeit (Grenze Mitternacht UTC wie Pruefung 23; der Rechnungslauf kommt 05:30 UTC, der Waechter am Ersten schon 04:00), beendet und inaktiv sofort; neuer Treffertext und ein Hinweis, warum der Lauf nicht geschlossen haben kann (Anschrift fehlt, EU-Ausland). kunde-demo-waechter bekam einen beendeten Vertrag fuer Pruefung 18, der gekuendigte vor seinem Faelligkeitstag loest sie absichtlich nicht mehr aus. Notiz-Route: autor und admin_person_name aus der Person, admin_person_id ueber personKennung; Wache notiz-autor gegen feste Namen. Suite gruen, tsc, ESLint-Grenze, next build, Rauchtest und Sichtbarkeitslauf lokal ohne Befund, Gegenproben 22 von 22 rot, Review READY mit neun kleinen Punkten, sechs eingebaut, drei als Folgeaufgaben. -->
- [x] 👤 Dave | PR 94 entscheiden (Pruefung 18 meldet gekuendigte Vertraege erst nach dem Faelligkeitstag, mit Hinweis bei nicht geschlossenen; Notiz von Hand mit angemeldeter Person und Wache gegen feste Namen) (05.10.2026: freigegeben, gemergt als b03e778 und live) ✓
- [x] 👤 Dave | Pruefung 18 fuer gekuendigte Vertraege erweitern? (a) Rueckstand: bleibt die Rechnung eines gekuendigten Vertrags vor seinem Ende aus, meldet sie nichts, weil der Rueckstandszweig nur nicht gekuendigte prueft (so schon vor PR 94). (b) Tippfehler: eine Faelligkeit weit hinter dem Ende meldet sie seit PR 94 erst nach diesem Datum, vorher sofort. Vorschlag aus dem Review zu (b): sofort melden, wenn die Faelligkeit mehr als ein Intervall hinter dem Ende liegt (05.10.2026: entschieden, (b) sofort ab mehr als einem Intervall hinter dem Ende, (a) als Pruefung 28; beides in PR 95, offen, Merge nach Daves Wort) ✓
- [x] 🤖 Runde 05.10.2026 nachts: PR 94 gemergt und live, Rauchtest vier Rollen ohne 5xx, Jetzt pruefen mit Lauf 42084760 (Pruefung 18 und 27 bei 0); Lesefrage zum Rueckstand beantwortet; PR 95 (Rechnungslauf, Pruefung 18 und 28, Notiz-Route) und PR 96 (Migration Vorgabewert autor) gebaut, kein Merge ✓
  <!-- PR 94 als Squash b03e778 um 19:33 UTC, nachdem die CI von 19:23 bis 19:31 in der Warteschlange stand; Deploy 75li82yif (vorher 3ypc6kudw), ueber die GitHub-Deployments dem Merge-Commit zugeordnet. Rauchtest gegen meyso.de: Zahlen gleich wie nach PR 92 und 93, kein 5xx. Jetzt pruefen: 27 Pruefungen, 11 Treffer (P1 9, P5 1, P19 1), Lauf 42084760-1e40-4dec-8b56-7fff8c4c68cd, Stand gespeichert. Lesefrage: keine Pruefung meldete eine ausgebliebene Rechnung rechtzeitig; 8 warnt nur bis zum Faelligkeitstag (lib/waechter.ts:613), 10 sieht nur den Lauf (:646, :675), 18 meldet Rueckstand erst nach Intervall plus 3 Tagen und nie bei gekuendigten (:1523, :1554-1557), 23 nur Demokunden (:767-770). PR 95 (fix/lauf-ende-rechnung-ausgeblieben: 54d8aba, 07dd094, 991759e): Ende vor Anschrift und Land im Lauf und in der Vorschau, Pruefung 18 sofort ab mehr als einem Intervall hinter dem Ende, Pruefung 28 ab dem Tag nach der Faelligkeit ohne Doppelung mit 18, Pruefung 8 ohne Vertraege hinter dem Ende, Notiz-Route mit Datums- und Body-Pruefung und Person an der Wiedervorlage. Suite 168 Dateien gruen, tsc, ESLint-Grenze, next build, Rauchtest und Sichtbarkeitslauf lokal ohne Befund, Gegenproben 34 von 34 rot, Review zuerst NOT READY (Vorschau), eingebaut. PR 96 (chore/notizen-autor-ohne-vorgabe: be34be3): Migration mit Vorab-, Vorher- und Nachher-Abfrage und Rueckweg, PGlite-Test auf der Tabelle aus 20260809, zwei Vorlagen ohne Vorgabewert; Suite gruen, Gegenproben 9 von 9 rot, Review READY. -->
- [x] 👤 Dave | PR 95 entscheiden (Rechnungslauf schliesst ausgelaufene Vertraege vor Anschrift und Land, Pruefung 18 sofort bei Faelligkeit weit hinter dem Ende, neue Pruefung 28, Notiz-Route fester). Abweichung vom Wortlaut: mit offenem Zeitraum vor dem Ende bleibt es beim Ueberspringen, sonst ginge die Rechnung verloren (09.10.2026: zweites Review READY, gemergt als b944ff5 und live) ✓
- [x] 👤 Dave | PR 96 entscheiden und Migration 20261005_notizen_autor_ohne_vorgabe.sql einspielen (Vorgabewert an kunden_notizen.autor faellt weg, Reihenfolge zum Merge egal, SQL und Vorher/Nachher-Abfragen in der Datei und im Rundenbericht) (09.10.2026: Migration von Dave eingespielt, Nachher-Abfrage NULL und NO; PR 96 nach PR 95 auf main nachgezogen, gemergt als 03e878f und live) ✓
- [x] 🤖 Runde 09.10.2026: zweites Review zu PR 95 READY, PR 95 und PR 96 gemergt und live, Rauchtest vier Rollen ohne 5xx, Jetzt pruefen mit Lauf 090b8c55 (28 Pruefungen, Pruefung 28 meldet 0) ✓
  <!-- Zweites Review nur auf die Aenderungen nach dem ersten (Diff aus dem nachgebauten Stand des ersten Reviews gegen 991759e, 13 Dateien): M1 und K1 bis K8 behoben, nichts Neues kaputt, sieben kleine Punkte als Folgeaufgaben. PR 95 als Squash b944ff5 um 07:10 UTC, Deploy dtihnucmv (vorher 75li82yif), GET lieferte schon 28 Pruefungen. Die CI von PR 96 war am 05.10. abgebrochen, ohne einen Schritt zu laufen (Job 15 Minuten ohne Runner); PR 96 per Merge-Commit b8500b8 auf main nachgezogen, ohne Konflikt, CI gruen, Squash 03e878f um 07:19 UTC, Deploy r8bxnls7i (vorher dtihnucmv), beide Deploys ueber die GitHub-Deployments dem Merge-Commit zugeordnet, GET liefert 28 Pruefungen. Lokale volle Suite auf dem nachgezogenen Stand: vier Dateien mit Zeitueberschreitungen unter Last, einzeln gruen. Rauchtest gegen meyso.de: 85/0, 84/1, 48/51, 50/46, kein 5xx. Jetzt pruefen um 07:23 UTC: 28 Pruefungen, 18 Treffer (P1 9, P5 1, P19 1, P26 7), P18, P27 und P28 je 0, Lauf 090b8c55-a9ea-4f7e-8e02-80df9df67994, Stand gespeichert. P26 steht seit dem Lauf am 09.10. um 00:07 UTC auf 7 statt 0: sieben Belege per Mail warten laenger als 7 Tage, nicht aus diesen PRs. -->
- [x] 🤖 Runde 09.10.2026 spaeter: PR 97 gebaut (gescheitertes Schliessen im Rechnungslauf in protokoll_fehler und Pruefung 27; Folgeaufgaben aus dem zweiten Review zu PR 95), kein Merge ✓
  <!-- PR 97 (fix/lauf-schliessen-protokoll): schliesseAmEnde gibt sein Ergebnis zurueck, auch bei Ausnahmen; schliesseOderMelde schreibt den Fehlschlag nach protokoll_fehler (stelle schliesseAmEnde, tabelle client_contracts, kontext mit vertrag_id, nummer, client_id, ende, faellig, grund, update, erster_versuch), der Lauf zaehlt ihn als Fehler (damit auch Pruefung 10) und geht weiter; CONTRACT_SELECT liest nummer. Pruefung 27: Vertrag nicht geschlossen mit Nummer, Link zu den Vertraegen, eigener Hinweissatz, je Vertrag ein Treffer mit Zahl der Versuche und fester Kennung, faellt heraus, sobald der Vertrag nicht mehr offen ist (Lader gibt die offenen mit). Pruefung 18 nennt 27. Teil 2: vier schaerfere Grenztests, quartalsweise gestrichen, rueckstandAb und intervallTage, Doku in waechter-s3.md, protokoll-ausfaelle.md, vertraege-v2.md, Kommentar zeitpunktAus, Kopf rechnungs-ausblick. Review READY mit zwei mittleren Funden (Treffer nach dem Schliessen, Wiederholungen), beide eingebaut, dazu Tests fuer zwei verschiedene Fehler, heilen im naechsten Lauf, fehlende Tabelle und die Spaltenauswahl. Gegenproben 30 von 30 rot, darunter ohne Fix. Volle Suite lokal zweimal mit Zeitueberschreitungen unter fremder Last (paralleler npm run build einer anderen Sitzung), alle betroffenen Dateien einzeln gruen; next build gruen. -->
- [x] 👤 Dave | PR 97 entscheiden (gescheitertes Schliessen im Rechnungslauf landet in protokoll_fehler und Pruefung 27, der Lauf laeuft weiter; Folgeaufgaben aus dem zweiten Review zu PR 95) (09.10.2026: CI gruen, gemergt als a987952 und live) ✓
- [x] 🤖 Runde 09.10.2026 vormittags: PR 97 nach gruener CI gemergt und live, Rauchtest vier Rollen ohne 5xx, Jetzt pruefen mit Lauf 24fe0bc3 (Pruefung 27 und 28 je 0) ✓
  <!-- CI von PR 97 gruen (pruefen 08:40 bis 08:43 UTC: 169 Testdateien, 3069 Tests gruen, 1 uebersprungen, ESLint 20, keine ueber dem Bestand), main unveraendert 03e878f. Squash a987952 um 08:44 UTC, Deploy dw4ql0v37 (vorher r8bxnls7i), ueber die GitHub-Deployments dem Merge-Commit zugeordnet, meyso.de zeigt darauf, GET liefert 28 Pruefungen. Rauchtest gegen meyso.de: 85/0, 84/1, 48/51, 50/46, kein 5xx. Jetzt pruefen um 08:48 UTC: 28 Pruefungen, 18 Treffer (P1 9, P5 1, P19 1, P26 7), P18, P27 und P28 je 0, neue Stufen 0, Lauf 24fe0bc3-5d90-4341-84df-305ea22f738b, Stand gespeichert. -->
- [x] 🤖 Runde 09.10.2026 nachmittags: PR 98 gebaut (Vertragsbogen mit Land, Rechnung und Storno auf einer Seite), kein Merge ✓
  <!-- PR 98 (fix/vertrag-land-eine-seite): b0843b7 nur Tests als Gegenprobe, 5a19b0a der Fix, 8c2b8fa die Befunde aus dem Review. lib/vertrag-pdf.tsx druckt clientLand unter PLZ und Ort. lib/invoice-pdf.tsx: Dank und WERTE als feste Fusszeile im unteren Rand (bottom 18, Polster unten 48 statt 30), Namenszeile entfaellt, Bankverbindung ohne Rand unten und wrap false. Den Dank nur auf der letzten Seite ginge ueber render, das zeichnet react-pdf nicht, solange der Page-Style eine lineHeight traegt, deshalb Fuss auf jeder Seite. Platz auf Seite 1 nachher bis zur Grenze des Flusses: DE 51 pt, CH 24, Storno DE 51, Storno CH 24, mit Bewertungslink DE 27 und CH 0 (Link in Production leer). Tests in __tests__/ausland-belege.test.ts: Seitenzahl mit pdf-lib ueberall, Leser mit pdftotext -bbox nur in der CI (kein Wort auf Seite 2, Abstand Fluss zu Fuss mindestens 10 pt, Land auf dem Vertrag CH), langer Projektbeleg mit 16 Positionen. Gegenprobe: lokal vier Seitenzahlen rot, CI-Lauf 37930105526 rot mit 11 Fehlern (Seitenzahlen, Leser, Vertrag CH ohne Land, langer Beleg und der Waechter in portal-gestaltung.test.ts, der in jedem *-bilder.mjs die Pruefgroessen verlangt; das Skript heisst deshalb scripts/beleg-seiten.mjs). CI-Lauf 37934106944 auf 5a19b0a gruen (3079 Tests). Lokal: 3039 gruen und 9 Zeitueberschreitungen unter Last, die acht Dateien einzeln gruen (216), tsc gruen, ESLint ohne Fehler, next build gruen. Rauchtest vier Rollen gegen den lokalen Build wie bei PR 97 (nur GitHub-Routen und template-version mit 502 und 500, kein Token hier), Sichtbarkeitslauf ohne Treffer. Review READY, Befunde in 8c2b8fa uebernommen; CI auf 8c2b8fa: Lauf 37937434520 lief beim Eintrag noch. Echte Wartungsrechnung, nachgebaut wie der Lauf sie fuellt: vorher zwei Seiten, nachher eine. Bilder vorher und nachher in docs/analyse/beleg-seiten. -->
- [x] 🤖 Runde 09.10.2026 abends: PR 98 nicht gemergt (CI auf 8c2b8fa rot im Abstandswaechter, korrigiert), Lauf-Rechnungen seit 07.09. am PDF geprueft, PR 99 gebaut, kein Merge ✓
  <!-- PR 98: CI-Lauf 37937434520 auf 8c2b8fa rot, fuenfmal "der Fluss reicht an den Fuss: -9,1 pt", auf jedem Bogen derselbe Wert, also die Unterkante des Slogans (7 pt neben dem Dank in 9 pt, Poppler 24.02 setzt sie mehr als 1,5 pt anders) und nicht der Fluss. Korrektur 2e083a2: zum Fuss gehoert, was unten ueber die Oberkante des Danks hinausreicht; CI-Lauf 37943701628 gruen. Kein Merge, Daves Freigabe galt 8c2b8fa. Pruefung nur lesend: 34 Rechnungslaeufe seit 07.09.2026, zwei ohne Ergebnis (12.09., 13.09.), erzeugt nur 2026-019 und 2026-020 am 01.10., gegengeprueft ueber die Rechnungen mit Vertrag in den Laufzeitfenstern; beide PDFs mit stimmigem Hash, ohne Steuervermerk und ohne Spur davon, Tabelle bei der Gabi-Frage. PR 99 (fix/lauf-steuervermerk, gestapelt auf PR 98, weil es dessen Bildskript und Leser braucht): c74c4d1 nur Tests als Gegenprobe, CI-Lauf 37946190432 rot mit 11 (Lauf und Vorschau ohne Vermerk und Land, gedruckt und in den Daten, Vorschau EU 200 statt 409, Select ohne land, Vertrag DE mit Laufzeit 4,1 pt Luft statt 12); 6aa34d8 der Fix, 1783c8d die Befunde aus dem Review (Rueckfall-Abfragen lesen land, mit Wache; Test fuer das Muster der Vorschau; steuervermerk und clientLand Pflichtfelder in InvoiceData; Gegenprobe der neuen Wachen rot). Der Wortlage-Leser steht jetzt in __tests__/helfer/wortlage.ts. Lokal mit Fix: betroffene Dateien gruen, volle Suite 3056 gruen plus 8 Zeitueberschreitungen unter Last, die Dateien einzeln gruen (190), tsc gruen, ESLint ohne Fehler. next build gruen, Rauchtest vier Rollen gegen den lokalen Build wie bei PR 98 (nur GitHub-Routen und template-version mit 502 und 500, kein Token hier), Sichtbarkeitslauf ohne Treffer. Review: READY, M1 bis M3 und Kleinigkeiten in 1783c8d uebernommen, M4 (Gestaltung Vertrag DE mit Laufzeit) offen fuer Dave. CI auf dem Fix: 6aa34d8 gruen (Lauf 37947393098, 3094 Tests, Leser-Proben mit), auf 1783c8d lief Lauf 37952813952 beim Eintrag noch. Bilder in docs/analyse/beleg-seiten, Abschnitt PR 99. -->
- [x] 🤖 Runde 09.10.2026 spaetabends: PR 98 und PR 99 gemergt und live, Vorschau des Rechnungslaufs fuer den 01.11.2026 gegen echte Daten, eine Abweichung gemeldet ✓
  <!-- PR 98: Kopf 2e083a2 geprueft, CI gruen, ALT dw4ql0v37, Squash bbc41f0 um 18:11:36 UTC, Deploy mqkaxeqmf um 18:13 Ready, ueber die GitHub-Deployments dem Merge-Commit zugeordnet, meyso.de zeigt darauf. Rauchtest gegen meyso.de: inhaber 85/0, partner 84/1, assistenz 48/51, vertrieb 50/46, kein 5xx. PR 99: Basis auf main, main mit der Strategie ours hereingefuehrt (der Squash traegt genau den Baum von 2e083a2, Diff gegen main gleich dem eigenen Diff). Vertrag DE mit fester Laufzeit einseitig: Abstand ueber den Unterschriften 12 statt 26 pt (0574ff8); Gegenprobe 1b46a3f in der CI rot mit genau zwei (pdf-lib zwei statt einer Seite, Leser Unterschriften und Annahme-Satz auf Seite 2, Lauf 37973296948). CI auf 0574ff8 gruen (Lauf 37973926550, 3103 Tests). ALT mqkaxeqmf, Squash eb41018 um 18:35:36 UTC, Deploy ogjjm48mj um 18:37 Ready, ueber die GitHub-Deployments dem Merge-Commit zugeordnet, meyso.de zeigt darauf. Rauchtest gegen meyso.de: inhaber 85/0, partner 84/1, assistenz 48/51, vertrieb 50/46, kein 5xx, wie nach PR 98. Vorschau 01.11.2026, nur lesend und ohne Versand: Ausblick mit den Regeln des Laufs zeigt zwei Rechnungen (VT-2026-002 K-1001 18 EUR, VT-2026-004 K-1003 20 EUR), der Abgleich an client_contracts findet genau diese zwei faelligen Vertraege, keiner fehlt. Je Vertrag GET /api/admin/vorschau-pdf auf meyso.de mit leistung_von 2026-11-01 (Rauchtest-Sitzung inhaber, die Route liest nur), das PDF nur kurz im Scratchpad. Gelesen mit xpdf 4.00 (pdftotext in Lesereihenfolge und mit -layout), nicht mit dem Wortlage-Leser: der braucht Poppler mit -bbox, lokal ist keins, ein Download nur nach Daves Wort (Aufgabe darunter). Beide Boegen 1 Seite (pdf-lib); Gesamtbetrag gleich dem Vertragspreis, 18,00 und 20,00 EUR, jeder Betrag auf dem Bogen derselbe; Anschrift Zeile fuer Zeile gleich den Kundendaten (Ansprechpartner, Firma, Strasse, PLZ und Ort, Mail); kein Land gedruckt, beide Kunden DE, wie vorgesehen; Steuervermerk der Satz zu Paragraf 19, wortgleich mit app_settings steuer.vermerk_de (gesetzt, gleich der Vorgabe im Code). Abweichung: die Vorschau druckt weder Kundennummer noch Positionstabelle, die Lauf-Rechnungen vom 01.10. derselben Vertraege (2026-019, 2026-020) tragen beides, Aufgabe darunter. Am Rand: in der Leistungszeile von VT-2026-002 steht "Paket starter" klein neben PAKET "Starter & Hosting", so schon auf 2026-020 -->
- [ ] 🤖 Vorschau eines geplanten Laufs (app/api/admin/vorschau-pdf, Modus 2) druckt weder Kundennummer noch Positionstabelle, der Lauf druckt beides: lib/generate-invoices.ts gibt kundennummer und eine Position (Menge, Einheit, Einzelpreis) an den Bogen, die Route keins von beiden. Gesehen am 09.10.2026 an den Vorschau-Boegen fuer den 01.11.2026 (VT-2026-002, VT-2026-004) gegen die gespeicherten Lauf-Rechnungen vom 01.10. derselben Vertraege (2026-019, 2026-020: Kundennummer und Kopf POS LEISTUNG, MENGE EINHEIT, EINZELPREIS, BETRAG). Nach Daves Wort gemeldet, nicht gefixt
- [ ] 👤 Dave | Poppler fuer Windows freigeben, damit der Wortlage-Leser auch lokal liest und nicht nur in der CI: v26.09.0-0 vom 15.09.2026, Datei Release-26.09.0-0.zip, 43.709.956 Bytes, Quelle https://github.com/oschwartz10612/poppler-windows/releases/tag/v26.09.0-0. Danach liest der Wortlage-Leser die Vorschau fuer den 01.11.2026 nach, bis dahin ist sie mit xpdf ohne Wortlage gelesen
- [x] 👤 Dave | PR 98 entscheiden (Vertragsbogen mit Land; Rechnung und Storno auf einer Seite, Dank und Slogan als Fusszeile, Namenszeile entfaellt) (09.10.2026: nicht gemergt. Die CI auf 8c2b8fa war rot, fuenfmal -9,1 pt im neuen Abstandswaechter: er zaehlte die Unterkante des Slogans zum Fluss, am Bogen lag es nicht. Korrigiert in 2e083a2, CI gruen. Daves Freigabe galt 8c2b8fa, deshalb kein Merge ohne neues Wort) (09.10.2026 abends: auf 2e083a2 als Squash bbc41f0 gemergt, Deploy mqkaxeqmf, Rauchtest vier Rollen gegen meyso.de ohne 5xx) ✓
- [x] 👤 Dave | PR 99 entscheiden, nach PR 98 (Steuervermerk und Land im Rechnungslauf und in seiner Vorschau aus belegSteuer, Vorschau bei EU 409; Vertragsbogen mit Polster 50, Unterschriften und Annahme-Satz als ein Block, der Vertrag DE mit fester Laufzeit dadurch zweiseitig) (09.10.2026 spaetabends: auf main umgestellt, Vertrag DE mit fester Laufzeit einseitig nachgezogen, CI gruen, als Squash eb41018 gemergt, Deploy ogjjm48mj, Rauchtest vier Rollen ohne 5xx) ✓
- [x] 👤 Dave | Vertragsbogen DE mit fester Laufzeit nach PR 99: zwei Seiten lassen (Seite 2 traegt nur Unterschriften und Annahme-Satz) oder unterschrift.marginTop in lib/vertrag-pdf.tsx von 26 auf 12, dann einseitig. Im Review zu PR 99 gerendert: alle anderen 30 Faelle behalten ihre Seitenzahl, CH bleibt zweiseitig, die Flaeche zum Unterschreiben bleibt. Alternativ AGB und Schlussbestimmungen mit in den Block (09.10.2026: nach Daves Wort 12 statt 26 pt, in PR 99 gebaut, Gegenprobe in der CI rot, mit dem Fix gruen, gemergt; der Vertrag DE mit fester Laufzeit hat wieder eine Seite) ✓
- [x] 🤖 Rechnungslauf und Vorschau eines geplanten Laufs geben dem PDF weder Steuervermerk noch Land mit: lib/generate-invoices.ts baut invoiceData ohne steuervermerk und clientLand (importiert ist steuervermerk seit V7, PR 40, 07.09.2026, benutzt nur fuer die Mail), app/api/admin/vorschau-pdf ebenso. Nach dem Code fehlt damit auf jeder Rechnung aus dem Lauf seit V7 der Satz zu Paragraf 19, bei Kunden in der Schweiz auch Drittlandsvermerk und Land. Festschreiben, Storno und die Entwurfsvorschau gehen ueber belegDaten und tragen ihn. Aufgefallen beim Bau von PR 98, nachgebaut mit dem Datenformat des Laufs und einem erfundenen Kunden: der Satz fehlt. An einem echten Beleg nicht nachgesehen. Vor dem Lauf am 01.11. beheben, wie lib/beleg.ts:301-304, mit Test ueber deps.rendern; danach bleiben einer CH-Rechnung aus dem Lauf noch rund 11 pt auf Seite 1. Wie mit den schon versendeten Lauf-Rechnungen umzugehen ist, entscheidet Dave (09.10.2026: am PDF bestaetigt, 2026-019 und 2026-020 ohne Vermerk, siehe die Gabi-Frage oben; gebaut in PR 99, belegSteuer in lib/steuervermerk.ts fuer belegDaten, Lauf und Vorschau, Vorschau bei EU 409; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Vertragsbogen mit dem echten Vorlagentext: vertrag.leistung_wartung (580 Zeichen, in Production wie in der Migration 20260904_wartungsumfang.sql) ist laenger als das "Wartung" der Tests. Beim Vertrag DE mit fester Laufzeit laeuft damit die Fusslinie durch den Satz "Die Annahme in Textform genuegt" (rund 9 pt Ueberlappung, gerendert und gesehen); in Production hat ein Vertrag eine feste Laufzeit. Der Vertrag CH hat zwei Seiten, seit PR 98 mit Unterschriften und Annahme-Satz auf Seite 2, vorher nur mit dem Satz. Aelter als PR 98, aufgefallen im Review dazu. Vorschlag: Polster unten in lib/vertrag-pdf.tsx auf 50, Unterschriften und Annahme-Satz in einen wrap-false-Block, dazu ein Bogen mit echtem Vorlagentext in __tests__/ausland-belege.test.ts (09.10.2026: gebaut in PR 99, Polster unten 50 statt 37, Unterschriften und Annahme-Satz als ein Block; der Vertrag DE mit fester Laufzeit hat dadurch zwei Seiten, fuer eine fehlen rund 13 pt; offen, Merge nach Daves Wort) ✓
- [x] 👤 Dave | Migration 20261005_protokoll_fehler.sql einspielen, danach PR 91 entscheiden (05.10.2026: eingespielt, die Nachher-Abfragen stimmen; PR 91 als Squash 9498e0b gemergt) ✓
- [x] 👤 Dave | PR 92 entscheiden (05.10.2026: nach PR 91 main nachgezogen, der Konflikt in beende aufgeloest, beide Aenderungen behalten; als Squash 5375c13 gemergt) ✓
- [x] 🤖 Nach dem Einspielen von 20261005_protokoll_fehler.sql: Waechter "Jetzt pruefen" nach Merge und Deploy, erwartet 27 Pruefungen und Pruefung 27 ohne Treffer (05.10.2026: Lauf 0dc4ac10-a1d4-4462-87b4-36f4f9620c5f, 27 Pruefungen, Pruefung 27 meldet 0; der stuendliche Lauf um 17:07 UTC speichert seinen Stand) ✓
- [x] 👤 Dave | PR 88 entschieden (05.10.2026): ein Cron-Eintrag mit timezone Europe/Berlin, Minute 7 (6:07, 12:07, 18:07, 23:07), AGB ohne lesbaren Text mit dem Grund "Dateiname, kein Text". Squash-Merge 282c2c5 ✓
- [x] 👤 Dave | PR 89 entschieden (05.10.2026): Squash-Merge a282e89, CI auf main gruen, der Cache ist geschrieben ✓
- [x] 🤖 Pruefung 20 meldet seit dem 01.10.2026 die Rechnung 2026-021 (Ziegler Holzarbeiten) ohne Zeile im mail_log. Geklaert am 05.10.2026: die Mail ist raus, Resend meldet sie als zugestellt. Der Versand lief ueber den Notzugang, dessen feste Kennung am Fremdschluessel von mail_log.admin_person_id scheitert. Fix und Nachtrag in PR 90 ✓
  <!-- Resend (GET /emails, nur gelesen): Kennung 01a0f8c1-44f4-75cd-a439-7a9b6b23434e, 01.10.2026 18:36:51 UTC, Betreff "Rechnung 2026-021 · Fabian Meyer · Meyso", an die Kundenadresse, last_event delivered. Nichts erneut gesendet. Weg: "Festschreiben und senden" an der Rate, also zahlplan/rechnung und danach /api/admin/finanzen/resend; die Route setzt email_sent und ruft dann protokolliereMail und schreibeVerlaufEintrag, beide Eintraege fehlen. Keine Sitzung in admin_sitzungen ist nach dem 22.09. benutzt worden, die Anfrage kam ueber den Notzugang (feste Kennung ...0001, in keiner Tabelle). Acht Spalten admin_person_id verweisen in Production auf admin_personen (PostgREST-Schema), der Insert scheitert mit 23503, beide Helfer schlucken den Fehler. Dieselbe Luecke: Portal-Einladung an denselben Kunden um 18:39:25 und Rechnung 2026-017 an den Demokunden am 30.09. um 12:28, beide zugestellt. Fix: lib/feste-personen.ts, personKennung() fuer alle neun Schreiber, der Name "Notzugang" bleibt. Nachtrag als Migration 20261005_mail_log_nachtrag.sql, nur INSERT, idempotent ueber resend_id. -->
- [x] 👤 Dave | Migration 20261005_mail_log_nachtrag.sql einspielen (nur INSERT, drei Zeilen: 2026-021, 2026-017, Portal-Einladung) und PR 90 entscheiden (05.10.2026: Nachtrag eingespielt, Nachher drei Zeilen; PR 90 als Squash 50c5a47 gemergt) ✓
- [x] 🤖 Nach dem Einspielen von 20261005_mail_log_nachtrag.sql: Nachher-Abfrage und Waechter "Jetzt pruefen", erwartet Pruefung 20 ohne Treffer (05.10.2026: drei Zeilen wie erwartet, 2026-017 um 12:28:01, 2026-021 um 18:36:51, Portal-Einladung um 18:39:25, alle mit admin_person_id leer und "Notzugang, nachgetragen am 05.10.2026"; Jetzt pruefen Lauf 61a88ccb-76ce-47a7-9f51-05d9c92d2f56, Pruefung 20 meldet 0) ✓
- [ ] 🤖 Nachlese PR 86, ohne Termin: Pruefung 26 durch ladeWaechter testen, wie PR 87 die 25 (eine 8 Tage alte Zeile in beleg_mails mit einer Buchung zu_pruefen, erwartet nr 26 und anzahl 1, ohne_beleg ohne diese Buchung, bei einem Fehler der Tabelle der Quellen-Treffer). Dazu der Kopf von lib/waechter.ts, der noch von zehn Pruefungen spricht
- [x] 👤 Dave | Pruefung 26 zaehlt volle 24 Stunden seit dem Ablegen, wie 2, 3 und 10; 22 und 25 zaehlen Kalendertage. Beispiel: abgelegt am 17.09. um 23 Uhr, Lauf am 25.09. um 10 Uhr, heute keine Meldung, nach Kalendertagen eine. So lassen und nur den Kommentar ("ab dem Tag") angleichen, oder nach Kalendertagen zaehlen? (01.10.2026, Befund 9 entschieden: Kalendertage wie 22 und 25, umgestellt samt Test in PR 86; 2, 3 und 10 bleiben, eigene P3-Zeile) ✓
- [x] 🤖 Testrechnungen mit zwei Seiten: im ausland-belege-Test haben Rechnung und Storno eine zweite Seite, auf der nur "Vielen Dank fuer die Zusammenarbeit!", der Werteslogan und "Fabian Meyer · Meyso" stehen (lib/invoice-pdf.tsx). Pruefen, ob eine echte Wartungsrechnung genauso umbricht. Aufgefallen im Review zu PR 86, nicht angefasst (09.10.2026: gebaut in PR 98: Dank und Slogan als feste Fusszeile, Namenszeile entfaellt, Bankverbindung ungeteilt; Rechnung DE, Rechnung CH, Storno DE und CH je eine Seite. Die echte Wartungsrechnung, nachgebaut wie der Lauf sie fuellt, brach ebenso um und hat jetzt eine Seite; offen, Merge nach Daves Wort) ✓

## 🟡 P2 - Naechste 2 Wochen (Tech Debt + Hardening)

> Kein externer Impact, aber raeumen auf

### Halveo (naechste 2-4 Wochen)
- [ ] 🤖 C-5 Folge-Schema: objects.gebaeude_anteil_pct Spalte hinzufuegen (AfA-Basis konfigurierbar)
- [ ] 👤 UI-Verifikation H-6 + H-1 manuell mit echten Brigachtal-Daten
- [ ] 🤖 DATEV-Export aufsetzen (Voraussetzung fuer Steuerberater-Affiliate Tier 1)
- [ ] 👤 Externes Sicherheits-Audit anfragen (Cure53 oder Securai) -- Preisanfrage senden

### Meyso-Projekte
- [x] 🤖 CSP Header: Content Security Policy in `next.config.ts` auf allen Projekten (08b35f3, 7f80cdb, bec4fa1, d1278ce, ff103d2) ✓
- [x] 🤖 CORS: Explizite `Access-Control-Allow-Origin` Header auf API Routes (d6e7c19, 4c228b7, 3bd16e4, 6ec17d7, 195443c) ✓
- [x] 🤖 Hardcoded Cookie-Names hirmax: `hirmax_session` in Middleware statt aus Config (3bd16e4) ✓
- [ ] 👤 Dave | Admin Finanzen: Finom Banking API Integration via GoCardless Bank Account Data (ehemals Nordigen). Kostenlos bis 10 Accounts, 90 Tage Transaction History. OAuth Flow + taeglicher Sync Cron + Auto-Kategorisierung. Alternative Kurzform: CSV Import Button fuer Finom Exports (1h Aufwand). Siehe Chat vom 11.04.2026 Entscheidung CSV vs API.
- [ ] 🤖 Claude | Claude Code: /powerup ausprobieren und nuetzliche Features in CLAUDE.md dokumentieren (Quelle: News Scout 10.04.2026)
- [ ] 🤖 Claude | Claude Code: Monitor-Tool aus v2.1.98 in autonomen Loops nutzen, `npm update -g @anthropic-ai/claude-code` (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | Gemini API: Projekt-Level Spend Cap im AI Studio setzen (Tier 1 = $250/Monat, sonst Pause aller Requests) (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | Gemini API: gemini-3-flash-preview als Ersatz fuer gemini-2.5-flash in autonomen Loops testen (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | Gemini API: Flex Inference Tier fuer nicht-zeitkritische Loops evaluieren (Kostenoptimierung) (Quelle: News Scout 10.04.2026)
- [x] 🤖 Claude | Alle Projekte: Next.js 16.1.6 auf 16.2 evaluieren und updaten (bereits 16.2.3 auf meyso-website, aktuell) ✓
- [ ] 👤 Manuell | hirmax: Supabase Stripe Sync Engine evaluieren fuer kuenftiges Payment Processing (Quelle: News Scout 10.04.2026)
- [ ] 🤖 Newsletter Secret: In README erwaehnen (kmu-template)
- [x] 🤖 Services-Daten nach Sanity (sq-schmidt): Leistungen-Teil komplett. Sanity Schema um bild/leistungsumfang/prozess erweitert, Admin-Dashboard mit StringArrayField + ProzessArrayField (stabile _keys), /leistungen und /leistungen/[slug] rein Sanity-gesteuert, Migration-Script `scripts/migrate-services-features-prozess.ts` (DRY default, APPLY=1 zum Schreiben). Commits fe9f0f7, 629c1ec
  <!-- Follow-ups: (1) Migration tatsaechlich ausfuehren (APPLY=1), (2) partnersData + certificatesData aus lib/services-data.ts auf Sanity umstellen (Schemas existieren, aber components/partners.tsx, components/certificates.tsx, app/partner/page.tsx lesen noch aus services-data.ts), (3) Leistungen-Admin-Feature ins kmu-template zurueckportieren (siehe Task unten) -->
- [ ] 🤖 Quality Gate erzwingen (toolradar): Scoring-System existiert aber unklar ob aktiv
- [ ] 👤 Sanity Read Token: Separaten Viewer-Token erstellen statt Write-Token an Templates
- [ ] 👤 CRON_SECRET auf Vercel setzen (meyso-website)
- [x] 👤 GitHub Template Repo markieren: meyso-kmu-template → Settings → Template repository ✓
- [x] 🤖 Claude | meyso-website: npm audit fix (9 von 10 Vulnerabilities gefixt, 17b428f) ✓
  <!-- 1 verbleibende moderate Next.js Vuln benoetigt --force (version bump ausserhalb range), separat evaluieren -->
- [ ] 🤖 Claude | SEO-Agent liefert seit Mai unvollstaendige Daten (entdeckt 31.07.2026 beim Dashboard-Bau)
  <!-- Die Monthly-Runs laufen erfolgreich (Mai, Juni, Juli je "success"), aber:
  (1) GSC-Daten fehlen in allen Reports seit Mai, im April waren sie noch da.
      Verdacht: GSC_REFRESH_TOKEN abgelaufen. Secrets im GitHub Repo pruefen.
  (2) AI-Visibility steht bei allen 5 Projekten auf "skipped".
  (3) Desktop-Lighthouse-Werte unplausibel (meyso Juli: Mobile 86, Desktop 33),
      sieht nach fehlgeschlagener Messung aus, nicht nach echten Werten.
  Sichtbar im neuen Dashboard unter meyso.de/admin/seo. -->
- [ ] 🤖 Claude | hirmax: npm audit fix (19 vulnerabilities: 9 moderate, 10 high)
  <!-- Achtung: erst pruefen was sich aendert, nicht blind --force laufen lassen -->
- [x] 🤖 Claude | hirmax: package.json name fixen (aktuell: "meyso-kmu-template@1.0.0" → soll: "hirmax-scheibenbilder@1.0.0")
- [x] 🤖 Claude | sq-schmidt-website: .env.local aus Git-History entfernt (git filter-repo, force push, 16.04.2026) ✓
  <!-- Enthielt RESEND_API_KEY, SANITY_WRITE_TOKEN, ADMIN_PASSWORD=SQ123. Alle drei Credentials muessen noch rotiert werden (Resend Dashboard, Sanity API Tokens, Vercel Env Vars). -->
- [x] 🤖 Claude | meyso-website: 214 Lint Errors aufraeumen (hauptsaechlich @typescript-eslint/no-explicit-any)
  <!-- Hauptsaechlich @typescript-eslint/no-explicit-any in AdminClient.tsx, lib/ai/index.ts, rss.xml/route.ts und vielen weiteren Dateien. Ansatz: echte Typen setzen wo moeglich, oder erklaerende Kommentare bei unavoidable any (laut meyso Konvention "kein any ohne erklaerenden Kommentar"). Entdeckt via /meyso-preflight am 09.04.2026. Schaetzung: 2-4h. -->
- [ ] 👤 Manuell | Stack: pnpm statt npm evaluieren (shared store fuer 8 Repos spart ca 3 GB auf D:, schnellere installs)
- [ ] 👤 Manuell | Stack: Turborepo oder pnpm workspace fuer shared dependencies evaluieren
- [x] 🤖 Claude | sq-schmidt: .next/ Build-Cache aus Git-History entfernt (war kein Bild-Problem, sondern Turbopack .sst Cache). 800 MB → 4 MB. git filter-repo + force push. (16.04.2026) ✓
- [ ] 👤 Manuell | Vercel: env var groups fuer shared keys wie RESEND_API_KEY, SUPABASE Credentials
- [ ] 👤 Dave | Admin Dashboard: Client-Systeme Section bauen (Bitwarden-Integration, keine Credentials in DB). Details: Neue Tabelle client_systems fuer Metadaten (email, hosting, database, domain, analytics, crm, other) mit Dashboard-URLs und Bitwarden-Links. Voraussetzung: Bitwarden Account und Organization "meyso-clients" anlegen. Siehe Chat vom 11.04.2026.

### Rechtliches Hirmax (DSGVO + AVVs)

> LUCID, Duales System, USt-IdNr und Kleinunternehmer § 19 UStG nicht relevant und daher nicht im Backlog.

Max' Seite:
- [ ] 👤 Max | Verarbeitungsverzeichnis Hirmax anlegen (Art. 30 DSGVO, Vorlage LfDI BW)
- [ ] 👤 Max | Hirmax TOMs dokumentieren (Art. 32 DSGVO)

Meyso-Seite (die vier Self-Service-AVVs stehen seit 09.10.2026 oben in den Prioritaeten, Reihenfolge egal; Meyso-Hirmax zuletzt, weil er auf die Subunternehmer-Liste der anderen verweist):
- [ ] 👤 Dave | AVV zwischen Meyso und Hirmax erstellen (DOCX, verweist auf Subunternehmer-Liste der vier oberen AVVs)

---

### meyso-website

- [ ] 🤖 content-konsistenz ist jetzt zweimal einmalig rot geworden mit "48-Stunden-Zusage", am 08.09.2026 und am 24.09.2026, beide Male nicht reproduzierbar. Beim dritten Mal wird gegraben, welcher Test dort eine Datei hinterlaesst
  <!-- Stand 24.09.2026: der Test durchsucht alle .ts und .tsx ausser node_modules, .next, .git, __tests__, dist, build, docs und scripts nach \b48\s*(Stunden|h)\b. Eine erste Durchsicht nur nach writeFileSync, mkdtempSync und tmpdir fand keinen Test, der eine .ts-Datei in diesen Baum schreibt: die Ansichten-Tests schreiben HTML nach __tests__/output, die PDF-Tests in das temporaere Verzeichnis. Andere Schreibwege (fs.promises, copyFileSync, Streams, Kindprozesse) sind noch nicht durchgesehen. Am 24.09. stand der Fehlschlag im ersten Lauf direkt nach next build, die zwei Laeufe danach waren gruen. Beim dritten Mal sofort die Trefferliste aus der Fehlermeldung sichern, sie nennt Datei und Zeile. -->
- [ ] 🤖 Die 20 alten ESLint-Fehler aus .github/eslint-bestand.json abbauen, eigener PR, danach die Liste leeren (node scripts/eslint-bestand.mjs --schreiben): zwoelfmal <a href="/"> statt Link (error, global-error, not-found, AGB, Datenschutz, Impressum, Kalkulator, AnalyseWidget), dreimal set-state-in-effect (Outreach, Zugaenge, faro), dreimal static-components in scripts/sicht, je einmal no-children-prop und no-require-imports in Tests. Kommt mit PR 89
- [ ] 🤖 Actions in allen vier Workflows auf neuere Hauptversionen heben (checkout, setup-node, cache), eigener PR, Release Notes pruefen. Laut Review zu PR 89 laufen die @v4 erzwungen auf Node 24
- [x] 🤖 Im Repo-Stamm von meyso-website ist eine Datei namens o.de mit einem unsichtbaren Zeichen dahinter (git ls-files zeigt "o.de\357\200\242") verfolgt, Git-Warnungen aus einer verunglueckten Umleitung (05.10.2026: angesehen, nur mitgeschnittene git-Ausgabe vom 18.03.2026, Commit 2c98e9b, keine Daten; geloescht mit PR 90, auf main seit 50c5a47) ✓

## 🟢 P3 - Feature Backlog (Kundenprojekte)

> Wertschoepfung fuer Kunden, nach Prio sortiert

### halveo (eigenes Produkt)

#### P3 (Quartal 2-3, nach 5+ Pilotkunden)
- [ ] 🤖 tax_rules Infrastruktur (dynamische Steuersaetze statt Hardcoding)
- [ ] 🤖 NKA-Modul (Nebenkostenabrechnung)
- [ ] 🤖 Anlage V PDF/Excel Export
- [ ] 🤖 H-2 §7b Sonder-AfA
- [ ] 🤖 H-5 Anschaffungsnah aus invoices (automatisch aus Belegdaten)
- [ ] 🤖 Mietvertrag-Generator
- [ ] 🤖 Uebergabeprotokoll digital
- [ ] 🤖 Mieter-Portal Chat + Schwarzes Brett
- [ ] 🤖 Audit-Trail Mieter-Aktionen
- [ ] 🤖 Position-OCR Phase 2
- [ ] 👤 Bank-Anbindung evaluieren (GoCardless/FinAPI/Tink)

#### P4 (spaeter)
- [ ] 🤖 Schema-Cleanup Legacy-Spalten (profiles.organization_id deprecation)
- [ ] 👤 Stripe Tax aktivieren (ab ca. 50 Kunden)
- [ ] 🤖 Onboarding-Wizard "Erste Wohnung in 5 Min"
- [ ] 🤖 Sentry Error-Tracking
- [ ] 👤 meyso.de: Halveo als Portfolio-Item

### hirmax-scheibenbilder (zahlender Kunde)
- [x] 🤖 Kunden-Self-Service: Passwort aendern, Bestellhistorie einsehen ✓
- [x] 🤖 Push Notifications: Benachrichtigung bei Bestellstatus-Aenderung ✓
- [ ] 🤖 Payment Processing: Bestellungen sind aktuell nur Anfragen

### sq-schmidt-website (zahlender Kunde)

### toolradar (eigenes Produkt)
- [ ] 🤖 Blog-Generator testen: Claude API Kosten im Auge behalten
- [ ] 🤖 Newsletter Integration vollstaendig testen
- [ ] 🤖 Dead Tool Detector: Inaktive Tools automatisch markieren
- [ ] 🤖 Price Monitor: Pricing-Aenderungen tracken und alertieren
- [ ] 🤖 DSGVO-Report als PDF Export

### meyso-website (eigene Plattform)
- [ ] 🤖 Zaehlweise 2/3/10 auf Kalendertage angleichen. Die Waechterpruefungen 2, 3 und 10 zaehlen volle 24 Stunden (tageZwischen in lib/waechter.ts), 22, 25 und seit dem 01.10.2026 auch 26 zaehlen Kalendertage (Helfer kalendertage). Entschieden von Dave am 01.10.2026 mit Befund 9 zu PR 86: 2, 3 und 10 bleiben vorerst, Angleichen als eigene Runde
- [x] 🤖 Notiz von Hand in der Kundenakte (app/api/admin/kunden/[id]/notizen/route.ts) traegt fest den Autor "Fabian" und keine Person: die Person aus wache() mit personKennung in admin_person_id und admin_person_name schreiben, in __tests__/verlauf-person-routen.test.ts aufnehmen. Aufgefallen im Review zu PR 93 am 05.10.2026 (05.10.2026: gebaut in PR 94, Autor ist die angemeldete Person, beim Notzugang Notzugang, Bezug ueber personKennung, dazu eine Wache gegen feste Namen im Kundenverlauf; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Spaltenvorgabe in kunden_notizen.autor entfernen: supabase/migrations/20260809_admin_neubau.sql:29 legt autor mit DEFAULT 'Fabian' an, das ist der letzte feste Name im Kundenverlauf. Migration: ALTER TABLE public.kunden_notizen ALTER COLUMN autor DROP DEFAULT; danach scheitert ein Insert ohne Autor laut, statt still einen Namen einzutragen. Beide Schreiber setzen den Autor heute selbst. Einspielen durch Dave. Aufgefallen im Review zu PR 94 am 05.10.2026 (05.10.2026: gebaut in PR 96, Migration 20261005_notizen_autor_ohne_vorgabe.sql mit Vorher/Nachher-Abfragen; offen, Merge und Einspielen nach Daves Wort) ✓
- [x] 🤖 Wiedervorlage aus der Notiz-Route (app/api/admin/kunden/[id]/notizen/route.ts) ohne Person: admin_person_id ueber personKennung und admin_person_name setzen wie /api/admin/reminders, mit Test. Wird heute nirgends angezeigt. Aufgefallen im Review zu PR 94 am 05.10.2026 (05.10.2026: gebaut in PR 95; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Notiz-Route robuster machen: ein ungueltiges datum wirft in new Date(...).toISOString() einen RangeError, ein Body null einen TypeError, beides endet als 500 ohne Meldung. Mit 400 und Meldung beantworten, mit Test. Aufgefallen im Review zu PR 94 am 05.10.2026 (05.10.2026: gebaut in PR 95, Datum nur JJJJ-MM-TT mit wahlweise Uhrzeit und nur echte Tage, Body ohne Objekt 400 bei Anlegen und Loeschen; offen, Merge nach Daves Wort) ✓
- [ ] 🤖 app/api/admin/reminders/route.ts haerten wie die Notiz-Route in PR 95: POST mit Body null wirft einen TypeError (500), PATCH ruft req.json() ungeschuetzt. Mit 400 und Meldung antworten, mit Test. Aufgefallen im Review zu PR 95 am 05.10.2026
- [x] 🤖 lib/generate-invoices.ts schliesseAmEnde verwirft den Fehler des Rueckfall-Updates, der Lauf meldet dann trotzdem "Vertrag beendet": Ergebnis zurueckgeben und als Fehler zaehlen, mit Test. War schon vor PR 95 so, aufgefallen im Review zu PR 95 am 05.10.2026 (09.10.2026, zweites Review zu PR 95: durch die neue Reihenfolge wirkt das jetzt auch ohne Anschrift und beim EU-Kunden; Pruefung 18 faengt es ab dem Folgetag) (09.10.2026: gebaut in PR 97: Fehlschlag in protokoll_fehler mit Nummer und Grund, der Lauf laeuft weiter und zaehlt ihn als Fehler, Pruefung 27 meldet ihn je Vertrag einmal und laesst ihn fallen, sobald ein spaeterer Lauf schliesst; offen, Merge nach Daves Wort) ✓
- [ ] 🤖 Wache in __tests__/notiz-autor.test.ts ergaenzen: jede Stelle, die in kunden_notizen schreibt, nennt autor ueberhaupt. Nach der Migration 20261005_notizen_autor_ohne_vorgabe.sql scheitert ein Insert ohne Autor sonst erst in Production (Pruefung 27 meldet ihn dann). Aufgefallen im Review zu PR 96 am 05.10.2026
- [x] 🤖 Tests schaerfen nach dem zweiten Review zu PR 95: jaehrliche Grenze in __tests__/pruefung-18-gekuendigt.test.ts mit 2027-11-01 (366 Tage, kein Treffer) statt 2027-10-31; Demokunde in __tests__/vertraege.test.ts auch ueber pruefeDemoVertraege pruefen oder den Titel kuerzen; Einzeltest in __tests__/rechnungs-ausblick.test.ts, dass Demo vor dem Ende kommt; Pruefung 8 bei Faelligkeit gleich Ende in __tests__/waechter.test.ts (muss warnen). Aufgefallen im zweiten Review zu PR 95 am 09.10.2026 (09.10.2026: gebaut in PR 97; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Kommentare und Doku nach dem zweiten Review zu PR 95: docs/finanzen/waechter-s3.md, Zeile zu Pruefung 8 um die Ausnahme hinter dem Ende ergaenzen; zeitpunktAus in app/api/admin/kunden/[id]/notizen/route.ts ehrlich kommentieren (Zone optional, 1900 bis 2999 ist ein Plausibilitaetsfenster, Mikrosekunden werden abgelehnt); Kopf von lib/rechnungs-ausblick.ts mit dem Zusatz bis auf Regel 1; quartalsweise aus INTERVALL_TAGE in lib/waechter.ts streichen (kein Wert der Datenbank); die Schwelle spanne plus FAELLIG_PUFFER_TAGE fuer Pruefung 18 und 28 in eine Funktion. Aufgefallen im zweiten Review zu PR 95 am 09.10.2026 (09.10.2026: gebaut in PR 97, quartalsweise gestrichen, Schwelle in rueckstandAb; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Verlauf ohne Person auch bei Storno (lib/storno.ts), Aenderungen (lib/aenderungen.ts ueber app/api/admin/aenderungen/[id]) und Deal gewinnen (lib/deal-gewinnen.ts): die ausloesende Person durchreichen wie in PR 91. Aufgefallen im Review zu PR 91 am 05.10.2026 (05.10.2026: gebaut in PR 93, je Stelle ein Test; eine Aenderung anlegen kann nur der Kunde im Portal, dieser Eintrag bleibt beim System; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Veraltete Pruefungszahlen in Texten und Kommentaren angleichen: "zehn" oder "zwanzig Pruefungen" in app/admin/HeuteClient.tsx, app/admin/components/BuchhaltungKachel.tsx und app/api/admin/waechter/route.ts, "21 Abfragen" in scripts/heute-dashboard-zeiten.mjs. Besser ohne feste Zahl. Aufgefallen im Review zu PR 91 am 05.10.2026 (05.10.2026: auf 27 gebracht in PR 93, wie Dave es wollte, mit der Wache __tests__/waechter-zahl-texte.test.ts, die jede Zahlangabe gegen den Lader prueft; offen, Merge nach Daves Wort) ✓
- [x] 🤖 Verlaufseintraege aus Handgriffen im Admin tragen die Person nicht mit: lib/angebote.ts (Entwurf angelegt, festgeschrieben, versendet, neue Version), lib/festschreiben.ts (Rechnung festgeschrieben) und lib/vertraege.ts (Vertrag festgeschrieben) rufen schreibeVerlaufEintrag ohne Ausloeser. Seit dem 22.09.2026 stehen so vier Eintraege als System, die ein Mensch ausgeloest hat (AN-2026-003 dreimal, Rechnung 2026-021). Ausloeser durchreichen wie resend und storno es schon tun. Aufgefallen am 05.10.2026 bei der Lesefrage nach Zeilen ohne Person (05.10.2026: gebaut in PR 91 fuer alle neun Stellen in angebote, festschreiben und vertraege, acht Admin-Routen geben die Person mit; PR 91 gemergt (9498e0b)) ✓
- [ ] 🤖 Client-Uebersicht: Letzter Deploy-Zeitpunkt anzeigen (Vercel API)
- [ ] 🤖 Wartungs-Dashboard: Template-Version pro Wartungskunde anzeigen
- [ ] 🤖 Wartungs-Dashboard: Einzelnen Lighthouse manuell fuer einen Kunden triggern
- [ ] 🤖 Provision Wizard: "Schritt wiederholen" Button fuer fehlgeschlagene Steps
- [ ] 🤖 Cockpit: Letzte Aktivitaeten Feed (neue Clients, Anfragen, Deploys)

### Infrastructure / DevEx

- [x] 🤖 Claude | Autonomous: Morning Brief Loop (09.04.2026) ✓
- [x] 🤖 Claude | Autonomous: News Scout Loop (09.04.2026, erledigt Wave 3 Roadmap) ✓
- [x] 🤖 Claude | Autonomous: Weekly Codebase Health Report Loop (09.04.2026) ✓
  <!-- CronJob IDs (Session): 07b25f68 / b6f169db / 31f67186. Aktivierung: docs/autonomous-workflows/activate-loops.md. Hinweis: durable=true ist session-only auf Windows. -->
- [x] 🤖 Claude | meyso-website: /admin/workflows Dashboard (09.04.2026) ✓
  <!-- Zeigt Workflow-Uebersicht + Briefings-Viewer. Fetcht workflows.json + Briefings von GitHub raw URL. Sidebar-Nav hinzugefuegt. -->
- [x] 🤖 Claude | /admin/workflows: Manual Trigger Buttons (via GitHub Actions repository_dispatch) ✓
  <!-- Jetzt starten je Automation, danach 90 Sekunden automatisches Nachladen. -->
- [x] 🤖 Claude | Autonomous: Loops Gemini Migration (09.04.2026 abends) ✓
  <!-- Autonomous Loops von OpenAI auf Gemini Flash migriert fuer bessere Kosten/Performance -->
- [x] 🤖 Claude | Autonomous: npm audit auto-PR Loop als GitHub Actions Workflow gebaut (woechentlich, 5 Repos, .github/workflows/dependency-updates.yml) ✓
- [ ] 🤖 Claude | /meyso-paths-update Slash Command bauen (fuer zukuenftige Migrationen)
- [ ] 🤖 Claude | Autonomous: Hirmax Order Monitoring Loop (alle 6h, braucht MCP Supabase)
- [ ] 🤖 Claude | Autonomous: toolradar Content Generation Loop (taeglich, braucht Gemini + Quality Gate)
- [ ] 👤 Manuell | C: Space Cleanup Phase 2
  <!-- Heute nur Dev Repos migriert (+16 GB). Noch offen: .android (17 GB), .nuget (4 GB), OneDrive "Files on Demand" aktivieren, Downloads aufraeumen. Potenzial: +25 bis 30 GB zusaetzlich. Separate Session, 30 bis 60 Minuten. -->
- [ ] 👤 Manuell | pnpm store + Caches von C: auf D: verlegen
  <!-- Heute nicht gemacht. Potenzial 1 bis 3 GB auf C:, plus saubere Trennung Tools vs OS. -->

### halveo (eigenes Produkt)

**Erledigt 26.04.2026:**
- [x] 🤖 Auth-Migration: Magic Link → Email + Passwort (jose JWT, Edge-Runtime)
- [x] 🤖 Multi-Tenant Schema: organizations, organization_members, RLS-Policies
- [x] 🤖 OrgSwitcher: Server/Client RSC-Pattern, view_mode=tenant Cookie
- [x] 🤖 Platform-Admin UI: /platform/* mit Org-Verwaltung + Audit-Log
- [x] 🤖 Team-Verwaltung: /admin/team, Invite-Flow via Resend + Token
- [x] 🤖 Design-System Phase 5: CountUp, useReveal, Skeleton/Reveal CSS
- [x] 🤖 DB-Reset: Familie Meyer Org clean (1 User Dave, 0 Daten, solo tier)

**Erledigt 27.04.2026:**
- [x] 🤖 Email-KI: IMAP-Polling + Gemini Klassifizierung + Inbox-View
      Pipeline live: mailbox.org halveo/Halveo-Inbox → Gemini Vision PDF-OCR →
      invoices-Tabelle. naturenergie-Rechnung 149,74 EUR, confidence 1.0.
      ALLOWED_FOLDERS Whitelist: fail-closed bei Fehlkonfiguration (DSGVO Art. 5).
- [x] 🤖 PDF-Vorschau in Beleg-Detail: Bucket-Auswahl nach invoice.source
      email_import → invoices-Bucket, scan/manual → belege-Bucket.
- [x] 🔒 IMAP-Datenleck behoben (eigene Daten, kein externer User betroffen)
      63 Mails aus INBOX fälschlich gepullt vor ALLOWED_FOLDERS-Fix.
      Mitigation: Whitelist + IMAP_FOLDER ENV required, fail-closed.
- [x] 👤 Bruder-Test eingeleitet (Brigachtal OG, Einladung raus)

**Backlog:**
- [ ] 🤖 Objekte-Feature: CRUD fuer Immobilien-Ordner (Haeuser, Wohnungen, Einheiten)
- [ ] 🤖 Beleg-Scan: Foto-Upload + Gemini OCR + Kategorisierung
- [ ] 🤖 Finanz-Cockpit: Einnahmen/Ausgaben Dashboard pro Objekt
- [ ] 🤖 Mieter-PWA: Heute-View, Muell-Kalender, Dokumente, Melden
- [ ] 🤖 Kehrwoche: Automatischer Wochenplan mit Push-Notifications
- [ ] 🤖 Netatmo-Integration: Temperatur/Feuchte Readings pro Einheit
- [ ] 👤 Echter Mieter onboarden: Invite-Flow end-to-end testen
- [ ] 👤 Vercel Deploy + halveo.com Domain konfigurieren
- [ ] 🤖 Architektur-Refactor: Client-Direct-DB-Inserts zu API-Routes (P3, ~2-3h)
- [ ] 🤖 UTF-8 Encoding in Email-Body fixen
      Aktuell: "RÃ¼ckfragen" statt "Rückfragen". MIME-Parser charset-Handling.
      Aufwand: 30-60 Min
- [ ] 🤖 Email-Kategorie zu Invoice-Kategorie syncen
      Inkonsistenz: Email ai_category "sonstiges" obwohl Invoice "Energie".
      Aufwand: 1-2 Stunden
- [ ] 🤖 Beleg-Storage-Buckets konsolidieren
      belege + invoices Bucket vereinen, source als Unterscheidungsmerkmal.
      Aufwand: 2-3 Stunden
      Stellen: haeuser/neu (buildings), haeuser/[hausId]/einheiten/neu (units), einheiten/neu (units)
      Ziel: zentrale Validierung + Audit-Logging statt direktem Client-Supabase-Insert

**Phase 2+ Ideen (Sammlung 26.04.2026):**
- [ ] 🤖 halveo-web: OG-Image Pill aktualisieren bei Beta → Public-Launch
      Aktuell zeigt "PRIVATE BETA · Q3 2026"
      Bei Public-Launch: anderes Pill oder weglassen
- [ ] P0: Marketing-Seiten Vermieter und Mieter getrennt auf halveo.de
      Eigene Stories pro Zielgruppe, Hub-Page verlinkt zu beiden. Aufwand: 1-2 Wochenenden
- [ ] P1: Schluessel- und Wohnungs-Historie
      Tabelle unit_history, type/date/description/file. Timeline-View pro Wohnung.
      Versicherungs-relevant, rechtssicher. Aufwand: 1 Wochenende
- [ ] P1: Stripe Subscriptions Integration
      Customer Portal, Webhooks, Sync mit organizations.subscription_tier.
      Voraussetzung: erster zahlender Kunde. Aufwand: 1-2 Wochenenden
- [ ] P1: Mietvertrag-Generator
      Template-basiert, Variablen aus Halveo-Daten, optional digitale Unterschrift.
      Aufwand: 2 Wochenenden
- [ ] P1: Uebergabeprotokoll digital
      Foto-basiert, Mieter-Unterschrift, Auszugs-Dokumentation. Aufwand: 1-2 Wochenenden
- [x] P1: Customizable Sidebar pro User (erledigt 27.04.2026)
      Vermieter waehlt welche Kategorien er sieht.
      Schema schon da: organization_members.permissions JSONB
      Komponenten: /admin/einstellungen/ansicht Page mit Toggle pro Sidebar-Item,
      Tier-basierte Defaults (Solo: Cockpit+Objekte+Mieten+Schaeden,
      Aktiv: +Belege+Email-KI+Dokumente, Profi: +Sensoren+Team+Renovierungen),
      Sidebar liest permissions und filtert Items, Cockpit-KPIs toggleable.
      Beispiel-JSON: { "sidebar_items": { "cockpit": true, "email_ki": false },
      "cockpit_kpis": { "rent": true, "loan": true, "renovation": false } }
- [x] P1: Mobile Floating Action Button fuer Beleg-Scan (erledigt 27.04.2026)
      Im Cockpit unten-rechts schwebendes Kamera-Icon, direkter Zugang zur
      Beleg-Erfassung ohne Klick-Tiefe.
      components/admin/floating-scan-button.tsx, nur Mobile (lg:hidden),
      Indigo-Gradient 56x56, ScanLine Icon, input capture=environment,
      Upload zu Storage Bucket "belege", invoice mit status='ocr_pending'.
- [ ] P1: Beleg-OCR mit Position-Level-Extraktion
      Mobile FAB ist Foundation (Upload + status-Tracking). Naechster Schritt: echte OCR.
      Anforderungen:
         Header: Lieferant, Rechnung-Nr, Datum
         Betraege: Netto, MwSt, Brutto
         Einzelpositionen: Bezeichnung, Menge, Einheit, Einzelpreis, MwSt-Satz, Gesamt
         Optional pro Position: Material vs Arbeitsleistung,
            Erhaltungsaufwand vs Herstellungsaufwand,
            Umlagefaehig ja/nein, Wohnungs-Zuordnung
      Schema: invoices um lieferant/rechnung_nr/datum/netto/mwst/brutto erweitern,
         NEW invoice_items Tabelle (FK invoice_id, organization_id,
         optional unit_id + renovation_project_id)
      Phasen: A Schema-Migration, B Gemini Vision Prompt-Engineering (5-10 Test-Belege),
         C Webhook-Pipeline nach Upload, D UI fuer OCR-Review + editierbare Positionen,
         E Klassifizierungs-Logik (KI-Vorschlag, User bestaetigt),
         F Zuordnung-UI (Position zu Wohnung, Renovierung, Kategorie)
      Strategischer Wert: Konkurrenz macht Header-OCR, Position-Level erlaubt
         Anlage V, Erhaltungs- vs Herstellungsaufwand, NK-Abrechnung, Stb-Export.
      Aufwand: 1-2 Wochenenden. Voraussetzungen: FAB funktional, GEMINI_API_KEY,
         Test-Belege (Bauhaus, Naturenergie, Baumarkt).
- [ ] P1: Halveo Doku komplett (Single Source of Truth)
      Ziel: alles dokumentieren was Halveo kann, fuer Founder-Reference und
      spaeteres Onboarding (Bruder, Co-Founder, Praktikant).
      Speicherort: D:/dev/products/halveo/docs/ (Markdown, Sektionen getrennt)
      Sektionen: 1. Architektur (Stack, Repos, Schema, RLS, Multi-Tenant),
      2. Rollen und Rechte (Platform-Admin, Owner, Admin, Member, Mieter, Stb, Tabelle),
      3. Seiten und Routen (pro Page: URL, Rolle, Inhalt, Aktionen, API-Endpoints),
      4. Features und Workflows (Onboarding, Mieter-Einladung, Beleg-OCR, Email-KI,
         Schaden-Flow, Muell-ICS, Renovierung, Darlehen, Mietzahlung),
      5. API-Endpunkte (Path, Methode, Auth, Body, Response, Error-Codes),
      6. Entwicklung (Setup, npm scripts, Migrations-Workflow, Test, Deploy),
      7. Environment (nur Variablen-Namen, keine Werte),
      8. Bekannte Begrenzungen, 9. Roadmap-Link auf TASKS.md.
      Aufwand: 4-6 Stunden. Wann: vor erstem zweiten Halveo-User (Bruder/Eltern).
- [ ] P2: Foerder-Radar (mit Affiliate-Partner)
      Nur grobe Hinweise + Disclaimer, Verlinkung zu spezialisierten Datenbanken.
      Aufwand: 1 Wochenende
- [ ] P2: Multi-Sensor pro Mieter
      Generisches sensors-Schema, Mieter-Dashboard mit Raumwerten.
      Voraussetzung: Shelly oder anderer Hersteller integriert. Aufwand: 1-2 Wochenenden
- [ ] P2: Nebenkostenabrechnung-Generator
      Aus Belegen + rent_payments + Mieter-Daten. Hoher Pain-Punkt jaehrlich.
      Ergaenzt Steuerberater-Feature. Aufwand: 2-3 Wochenenden
- [ ] GEPARKT: Halveo Sensor (Hardware)
      ESP32-basiert. PARKIERT: Hardware = eigenes Business, Aufwand Recherche 4-6 Wochen.
      Stattdessen Phase 2: Shelly Flood + Netatmo. Wiederbewertung bei 100+ Kunden.
- [ ] GEPARKT mit Risiko: OCR-Vertragsanalyse
      Risiko: falsche Klausel-Erkennung = Haftung.
      Bessere Alternative: strukturiertes Eingabeformular. Statt bauen: Vermieter traegt manuell ein.

### meyso-kmu-template (Template)
- [x] 🤖 Claude | KI-Transparenzhinweis im Chat-Widget (Art. 50 Abs. 1 KI-VO, anwendbar seit 02.08.2026): Kopfzeile, erste Zeile im Verlauf, aria-label des Ausloesers, aus einer Quelle, ueberschreibbar aber nicht abschaltbar. System-Prompt verbietet, sich als Mensch auszugeben. TEMPLATE_VERSION eingefuehrt (1.1.0) (PR 1 gemerged 05.09.2026) ✓
  <!-- Widget lief nirgends aktiv, Update war Vorsorge. Offen daraus: hirmax totes Flag, sq-schmidt Tawk.to im Konto pruefen, meyso.de Analyse-Widget ohne Kennzeichnung, Template-Build rot aus zwei alten Gruenden. -->
- [ ] 🤖 Template-Build ist rot, unabhaengig vom KI-Hinweis: PricingTable ohne tiers in app/preise/page.tsx, lib/config.ts importiert @/meyso.config.local. Preistabelle braucht eine Inhaltsentscheidung (welche Platzhalter-Pakete)
- [ ] 🤖 FAQ Admin-Seite (aktuell nur via Sanity Studio)
- [ ] 🤖 Leistungen Admin-Seite (aktuell nur via Sanity Studio)
- [ ] 🤖 Blog Modul testen (ist disabled, muss mit echten Daten validiert werden)
- [ ] 🤖 Chat Widget: System-Prompt mit Leistungen aus Sanity anreichern
- [ ] 👤 hirmax: totes Flag chatWidget in config/modules.ts. Es gibt kein modules/chat/ und keine Einbindung, das Flag auf true zu stellen bewirkt nichts. Entweder Widget nachziehen oder Flag entfernen
- [ ] 👤 sq-schmidt: laeuft mit Tawk.to, nicht mit KI-Chat. Im Tawk-Konto pruefen, ob KI-Antworten zugeschaltet sind. Wenn ja, greift Art. 50 Abs. 1 und der Hinweis muss dort gesetzt werden
- [ ] 🤖 meyso.de: das Analyse-Widget zeigt einen von Gemini erzeugten Text ohne Kennzeichnung (app/components/AnalyseWidget.tsx:99, app/api/analyse/route.ts:107). Direkte Interaktion mit einem KI-System, also kennzeichnen
- [ ] 🤖 Galerie: Direkt-Upload im Admin statt Umweg ueber Sanity Studio

---

---

### meyso-website

## 📣 Affiliate-Roadmap (Halveo)

> Ziel: Wachstum ueber Steuerberater- + Hausverwalter-Netzwerke und Bestandskunden-Empfehlungen.
> Affiliate-Targets priorisiert: Tier 1 Steuerberater (DATEV-Export Voraussetzung), Tier 2 Hausverwalter, Tier 3 Vermieter-Communities, Tier 4 Bestandskunden.

### Phase 1 (Monat 0-3, aktuell): Manueller Coupon-Modus
- [ ] 👤 Bei Empfehlungs-Anfragen: Custom-Stripe-Coupon manuell anlegen
- [ ] 👤 Excel-Tabelle fuer Affiliate-Tracking initial anlegen
- [ ] 👤 Standard-Provision festlegen: 30% Lifetime Recurring (manuelle Auszahlung)
<!-- Kein Tool, kein Setup, alles reaktiv bis Trigger -->

### Phase 2 (Monat 3-6, Trigger: 5+ zahlende Kunden)
- [ ] 👤 Rewardful Account aufsetzen ($49/mo)
- [ ] 👤 Stripe-Integration via OAuth verbinden
- [ ] 👤 Default-Provision konfigurieren: 30% Lifetime Recurring
- [ ] 👤 Affiliate-Sektion auf halveo.de mit Anmeldeformular
- [ ] 👤 White-Label-Portal aktivieren

### Phase 3 (Monat 6-12, Trigger: aktives Affiliate-Recruiting)
- [ ] 🤖 Affiliate-Kit erstellen (Banner, E-Mail-Templates, Demo-Videos)
- [ ] 👤 Steuerberater-Outreach: 10 personalisierte Pitches
- [ ] 👤 1 Webinar fuer Steuerberater organisieren
- [ ] 👤 Hausverwalter-Verbaende kontaktieren
- [ ] 🤖 Bestandskunden-Empfehlungs-Programm: 1 Monat free beidseitig (Halveo-Admin Feature)
- [ ] 🤖 Affiliate-Tier-System: Bronze/Silver/Gold in Rewardful

### Phase 4 (Monat 12-24)
- [ ] 👤 PartnerStack evaluieren wenn 50+ Affiliates
- [ ] 👤 Self-built System pruefen wenn ARR > 1M EUR und Affiliate-Anteil > 25%
- [ ] 🤖 Affiliate-Performance-Dashboard im Halveo-Cockpit

---

## 🅿️ GEPARKT (spaeter)

### halveo: Steuerberater-Feature (GEPARKT - erst mit echtem Stb)

- [ ] 👤 Steuerberater-Kontakt herstellen als Voraussetzung
- [ ] 👤 Anforderungen klaeren: DATEV-CSV vs. Excel vs. PDF, Felder pro Beleg,
      Uebergabe-Modus (Magic Link, Email, Portal), Anlage-V-Format,
      aktuelle Kommunikation Stb<>Vermieter
- [ ] 🤖 Danach: Steuerberater-Export bauen (Jahresuebersicht, Beleg-Export)

> Auf halveo-web bleibt StbScene als Vision-Showcase.
> Implementation erst nach echtem Steuerberater-Input, nicht blind bauen.

- [ ] 🤖 DSGVO-Widget live (live Deep-Scan)
- [ ] 🤖 Steckbrief-Widget mit Team-Size Preisrechner
- [x] 🤖 meyso Portal: Auth von JWT auf Supabase Auth migrieren ~~hinfaellig mit V4~~ ✓
  <!-- Entschieden am 07.09.2026: nicht Supabase Auth, sondern Magic Link mit eigener Sitzung (lib/portal-sitzung.ts). Grund: eine Sitzung muss serverseitig widerrufbar sein, und die Supabase-Auth-Reste (callback, confirm, ensure-access) waren genau die Altlast, die V4 entfernt hat. Der alte JWT ist weg. -->
- [ ] 🤖 Dokumente/Vertraege auf Supabase Storage (signed URLs)
- [ ] 🤖 EN-to-DE Uebersetzung automatisieren (aktuell nur manuelle Scripts)
- [ ] 🤖 Rate Limiting persistent machen (Upstash Redis) ~~Reicht bei aktuellem Traffic~~ jetzt beziffert und weiter oben eingeordnet, siehe die Zeile vor dem Outreach-Versand (10.09.2026)

### Admin-Feature: Automatische Vertragsgenerierung

**Status:** Konzeptioniert, nicht umgesetzt

**Business Case:**
Manuelle Vertragserstellung skaliert nicht ueber 3-5 Kunden hinaus.
Jeder neue Kunde soll automatisch Vertrag + AVV generiert bekommen,
basierend auf Template und seinen Kundendaten.

**Features:**

Phase 1: MVP (8-10h)
- Supabase-Tabellen: contract_templates, contracts
- Admin-Route /admin/contracts mit Template-Verwaltung
- Generate-Button auf Kunden-Detail-Seite
- Platzhalter-Ersetzung aus Kundendaten
- PDF-Generation via react-pdf oder puppeteer
- Speicherung in Supabase Storage

Phase 2: Portal-Integration (2-3h)
- Im /portal pro Kunde: Vertrags-Downloads
- Status-Anzeige: unterschrieben / nicht unterschrieben
- PDF-Viewer-Integration

Phase 3: Signatur-Workflow (5-8h)
- Integration DocuSign oder HelloSign API
- Automatische Erinnerungen bei nicht-unterschriebenen Vertraegen
- Signatur-Tracking in Datenbank

**Templates:**
- Dienstleistungsvertrag (Basis existiert in docs/legal/)
- AVV DSGVO (Basis existiert in docs/legal/)
- Spaeter: NDA, Projekt-Werkvertrag, Angebots-Template

**Offene Fragen:**
- PDF-Library Entscheidung (react-pdf vs puppeteer vs LaTeX)?
- Template-Pflege in Sanity oder direkt in Markdown-Files?
- Signatur-Service: DocuSign vs HelloSign vs SignWell?

**Abhaengigkeiten:**
- Vertraege muessen einmal anwaltlich geprueft sein bevor automatisch
  generiert werden (Haftungsrisiko bei Rechtsfehlern)
- Bestehende Kundendaten in Supabase muessen vollstaendig sein

**Vorgeschlagener Zeitpunkt:**
Q2/Q3 2026 wenn:
- Mehr als 3 Kunden ansteht
- Anwalt-Review der Templates durchgelaufen ist
- Dashboard-Basis steht

**Aufwand total:** 15-20h verteilt ueber mehrere Sessions

---

### SEO-Dashboard-Integration /admin/seo

**Status:** ✅ ERLEDIGT 31.07.2026 (meyso-website c083e27)

Umgesetzt, aber bewusst anders als unten geplant: statt Supabase-Layer plus
Agent-Umbau liest /admin/seo die MD-Reports direkt von GitHub raw und parst
sie (gleiches Muster wie /admin/tasks und /admin/workflows). Damit ca. 3h
statt 10 bis 15h, kein Eingriff in den laufenden Agent, MD-Files bleiben
Source of Truth. Phase 1 (Supabase) entfaellt damit, Phase 3 (Alerts, PDF,
Forecasting) bleibt offen falls je gebraucht.

Enthalten: Projekt-Karten mit Score und Trend, Lighthouse-Kacheln,
Verlaufs-Chart ueber alle Laeufe, Technical SEO, Empfehlungen, Prioritaeten.
Offen: visuelle Verifikation im eingeloggten Admin steht noch aus.

**Urspruengliche Planung (historisch):** Geparkt bis August 2026 (brauche 3+ Monate echte Agent-Daten)

**Ziel:**
SEO-Monitoring-Daten aus dem Agent ins Admin-Dashboard bringen, grafisch und pro Projekt.

**Voraussetzung:**
- Mindestens 3 Monthly-Runs mit echten Daten (erste ab 1. Mai 2026)
- Klarheit welche Daten wirklich wichtig sind zu visualisieren

**Umfang:**

Phase 1: Backend
- Supabase-Schema designen (tabellen fuer metrics, queries, issues, changes)
- SEO-Agent erweitern um parallel nach Supabase zu schreiben
- Bestehende MD-Files als Fallback beibehalten

Phase 2: Frontend /admin/seo
- Uebersichtsseite: alle 5 Projekte mit KPI-Kacheln
- Pro-Projekt-Detail-Seite:
  - Lighthouse-Trends ueber Zeit (Line Chart)
  - Top-Queries-Tabelle mit Position-Sparklines
  - Technical Issues Liste
  - AI-Visibility-Status
  - Change-Timeline

Phase 3: Optional
- Alert-System bei kritischen Findings
- Export als PDF fuer Kunden-Reports

**Aufwand:**
- Phase 1: 4-5h
- Phase 2: 5-7h
- Phase 3: 3-4h

**Erste Review:** nach 1. Mai 2026 entscheiden ob Phase 1 startet oder weiter warten.

**Referenz-Dokument:** docs/seo/baseline-system.md

---

## 🔵 LANGFRISTIG (ab 10+ Kunden)

### Alle Projekte
- [ ] 🤖 Automatisierte Tests (mindestens API-Route Tests mit Vitest)
- [ ] 🤖 Performance Monitoring (Core Web Vitals, Vercel Speed Insights)
- [ ] 🤖 Structured Logging (JSON Format, Vercel Log Drain kompatibel)
- [ ] 🤖 Error Tracking (Sentry oder Vercel Error Tracking)
- [ ] 🤖 Zod Validation auf ALLEN API-Routes (nicht nur Kontaktformular)

### meyso-website
- [ ] 🤖 Multi-Tenant Architektur: Ab 10+ Kunden eine App statt viele Repos
- [ ] 🤖 Automatische Rechnungserstellung fuer Wartungsvertraege
- [ ] 🤖 Client Activity Log: Wer hat was wann im Admin gemacht
- [ ] 🤖 E-Mail Templates visuell editierbar (Drag & Drop Builder)

### meyso-kmu-template
- [ ] 🤖 Internationalisierung (i18n) fuer mehrsprachige Kunden
- [ ] 🤖 A/B Testing fuer Landing Pages
- [ ] 🤖 Booking-Modul mit Cal.com vollstaendig integrieren
- [ ] 🤖 Pricing-Modul mit Stripe Payment Links

### toolradar
- [ ] 🤖 User Accounts: Kunden koennen eigene Tool-Listen speichern
- [ ] 🤖 API fuer Tool-Daten (Partner-Integration)
- [ ] 🤖 Vergleichs-Feature: Tool A vs Tool B Seite
- [ ] 🤖 Chrome Extension: DSGVO-Check direkt im Browser

---

## 👤 MANUELLE SCHRITTE (kein Code)

> Bereits oben einsortiert nach Prioritaet. Hier nochmal gesammelt:

- [ ] 👤 API-Keys rotieren (P0)
- [ ] 👤 Rechtliches Hirmax: DSGVO (Max) + AVV Meyso-Hirmax (Dave) (P2, siehe Rechtliches-Hirmax Block; die vier Self-Service-AVVs stehen oben in den Prioritaeten)
- [ ] 👤 Hirmax in Sanity anlegen (P1)
- [ ] 👤 Sanity CORS Hirmax pruefen (P1)
- [ ] 👤 Google Business Profile (P1)
- [ ] 👤 Social Media API Keys (P1)
- [ ] 👤 Wartungsvertrag-Zeiten (P1)
- [ ] 👤 Sanity Read Token erstellen (P2)
- [ ] 👤 CRON_SECRET auf Vercel (P2)
- [x] 👤 GitHub Template Repo markieren (P2) ✓
- [ ] 👤 Ersten Test-Kunden provisionieren (P2)
- [ ] 👤 PAGESPEED_API_KEY optional (P2)
- [x] 👤 sq-schmidt-website: .env.local aus Git-History entfernen (P2)
- [ ] 👤 C: Space Cleanup Phase 2 (P3)
- [ ] 👤 pnpm store + Caches von C: auf D: (P3)

---

## ✅ ERLEDIGT

### Halveo (30.04.2026)
- [x] 🤖 C1-C5 Critical Steuer-Bugs gefixt (Zinsberechnung Phase A, Tilgungsfreie Phase, AfA-Monatsregel, Restschuld-Drift, rentalShare Kapselung)
- [x] 🤖 H-6 Multi-Eigentuemer komplett (Phase 1 Schema, Phase 2 Berechnung anteilig, Phase 3 UI)
  <!-- object_owners + loan_owners Tabellen, OwnersSection, LoanOwnersPanel, Cockpit View-Toggle ?view=mine, Anlage V User-Filter ?user=profileId -->
- [x] 🤖 H-1 Mischnutzung komplett (Phase 1 Schema, Phase 2 Berechnung, Phase 3 UI)
  <!-- units.nutzungs_typ ENUM, calculateRentalShare helper, rentalShare in ueberschuss.ts + mapping.ts, NutzungsTypSelect, RentalShareBanner, UnitsStatusList, MischnutzungHinweis Cockpit-Banner -->
- [x] 🤖 Container-Test gegen Brigachtal-Realdaten erstellt (scripts/verify-against-brigachtal.ts, 26 Tests, 25/26 PASS -- Test 7 Tageszins-Diff bekannt)
- [x] 🤖 5-Sprint-Audit (ueberschuss.ts, Anlage V mapping.ts, AfA-Berechnungen, Owner-Share-Logik, rentalShare-Logik)

### meyso-website Juli 2026 (Audits + SEO, Sessions 14. bis 31.07.)

Website-Audit (Wording, SEO, Umlaute) und Deep-Audit (A11y, Security, Mobile)
auf den oeffentlichen Seiten, danach umgesetzt. Berichte liegen in
meyso-website/docs/seo/analyses/.

- [x] 🤖 SEO-Basis: Canonical-Bug (jede Seite zeigte auf die Startseite), Sitemap
      dynamisch aus Sanity, kaputte Projekt-Slugs, OG-Image neu, /analyse indexierbar
- [x] 🤖 Security-Header: CSP von wirkungslosem Report-Only auf enforced, HSTS,
      Permissions-Policy, frame-ancestors, object-src, base-uri, form-action (e867f6c)
- [x] 🤖 SSRF-Guard fuer /api/analyse, /api/report/generate und /api/contact (e00abb9)
- [x] 🤖 Kalkulator-Route gehaertet: Rate-Limit, Honeypot, Validierung. Dabei stiller
      Lead-Verlust gefunden und behoben (Formular meldete Erfolg trotz Fehler) (59652ae)
- [x] 🤖 API-Key wurde bei jedem Call im Klartext geloggt (0dee6f7)
- [x] 🤖 Portal-Passwoerter auf scrypt-Hashing mit Lazy-Migration, Rate-Limit,
      Fallback-Secret entfernt (ad9f766). Review fand danach eine dritte Kopie des
      Fallback-Secrets in invoices/download plus kaputten Logout (452674a)
- [x] 🤖 A11y: Formular-Labels, Kalkulator aria-pressed/aria-live, Nav-Dropdown
      tastaturbedienbar, Kontraste auf WCAG-Niveau, Touch-Targets
- [x] 🤖 Recht: konkrete Fremdfirmen-Namen von allen 7 Stadt-Seiten entfernt (a633c09).
      SK Fensterbau stand trotz frueherem Fix noch im Fliesstext.
- [x] 🤖 SEO-Content: /analyse auf "website analyse" und "seo analyse" ausgerichtet,
      VS, Bad Duerrheim und Donaueschingen mit verifizierten Fakten gestaerkt
- [x] 👤 Sitemap in GSC eingereicht, 7 Kernseiten manuell zur Indexierung angestossen
      <!-- Wirkung nach 2 Wochen messbar: Impressionen 3.661 auf 7.160, indexierte
      Seiten 14 auf 19. /analyse war vorher "Google unbekannt", jetzt 3.984
      Impressionen. Klicks noch flach, weil die neuen Rankings zu tief liegen. -->

**Offen aus diesen Sessions:**
- [x] 🤖 Admin-Ende der Portal-Passwoerter ~~hinfaellig mit V4~~ ✓
      <!-- 07.09.2026: Es gibt keine Portal-Passwoerter mehr. clients.portal_password
      faellt in 20260905_v4_portal.sql, portal_users ebenfalls, und die PATCH-Allowlist
      kennt das Feld nicht mehr. Der Admin lädt Personen per Magic Link ein. -->
- [ ] 🤖 Webhooks fail-closed (config-changed akzeptiert ohne Secret, deploy-webhook
      hat gar keine Signaturpruefung). Bewusst uebersprungen, Nutzung unklar.
- [ ] 🤖 Eigener Deep-Audit fuer Portal und Admin (im Juli-Audit ausgeklammert)
- [ ] 👤 Google Business Profile vervollstaendigen: fehlender Baustein fuer die
      lokalen Rankings (Local Pack ueber den organischen Treffern), siehe P1

### Rechtlich / Geschaeftlich
- [x] Hirmax AGB (app/agb/page.tsx, 11 Paragraphen, April 2026)
- [x] Wartungsvertraege an Felix (SQ Schmidt) + Max (Hirmax) verschickt
- [x] Nebentaetigkeit schriftlich genehmigt (April 2026)
- [x] ELSTER Fragebogen eingereicht, Steuernummer beantragt
- [x] Ziegler: Website-Rechnung bezahlt und Auftrag abgeschlossen (09.10.2026)
- [x] Ziegler: Shop-Rechnung 400 EUR gestellt (09.10.2026)

### Sicherheit
- [x] .env.local in .gitignore (meyso-website)
- [x] Webhook Signing (meyso-website)
- [x] JWT Fallback entfernt (kmu-template)
- [x] Cookie-Name Mismatch gefixt (kmu-template, a3dd6f2)
- [x] Rate-Limiting auf Supabase (hirmax, 2ed7aa1)
- [x] typescript.ignoreBuildErrors auf false (sq-schmidt)
- [x] Admin-Auth eingebaut (toolradar)
- [x] Cron-Job Auth eingebaut (toolradar)
- [x] Image Upload Validation (hirmax)

### Features
- [x] Rechnung & Zahlungen Einstellungen: app_settings Tabelle, IBAN/BIC/Bank/Google Review URL konfigurierbar, PDF dynamisch (3db494c, April 2026)
- [x] §14 UStG Fixes: Empfaenger-Adresse im PDF, Einzelrechnung-Versand Button mit Rate Limit + ntfy (785ed98, April 2026)
- [x] Rechnungssystem 5 Fixes: Email-HTML modernisiert, Leistungsbeschreibung bereinigt, Firma-Name vereinheitlicht, Client-Kontaktdaten editierbar, Vorschau-PDF als echtes PDF via iframe, Jaehrliche Ausgaben Doppelzaehlung behoben (Cashflow-Sicht) (1c66697, April 2026)
- [x] /admin/outreach abgesichert (meyso-website)
- [x] Datenschutzseite vollstaendig (meyso-website)
- [x] Meyso-CTAs als Werbung gekennzeichnet (toolradar)
- [x] Parallax Hero (meyso-website)
- [x] Template-Module alle vorhanden (meyso-website)
- [x] demo.meyso.de live (Schreinerei Holzmann)
- [x] SQ Schmidt Domain-Umstellung
- [x] Blog Artikel 3+4 (meyso + toolradar)
- [x] robots.ts erstellt (meyso-website)
- [x] Magic Link Expiry validiert (kmu-template)
- [x] Rate Limiting eingebaut (sq-schmidt)
- [x] Client Onboarding Automatisierung (meyso-website)
- [x] Template Version UI (meyso-website)
- [x] Client-Uebersicht (meyso-website)
- [x] Cockpit KPIs (meyso-website)
- [x] Wartungs-Dashboard (meyso-website)
- [x] SSL-Warnung Farbcodes (meyso-website)
- [x] Provision-Flow Timeouts (meyso-website)
- [x] Homepage Layout Selector (meyso-website)
- [x] White-Label Admin komplett (kmu-template)
- [x] Mail Kill-Switch (kmu-template)
- [x] DSGVO Analytics (kmu-template)
- [x] KI-Chat Widget (kmu-template)
- [x] Auth Kundennummer + Passwort (hirmax)
- [x] Supabase Migration komplett (hirmax)
- [x] Sanity Webhook Sync (hirmax)
- [x] Resend Mail-Versand aktiv (hirmax)
- [x] SSR auf /tools (toolradar)
- [x] LinkedIn Auto-Posting (toolradar)
- [x] Quality Gate + Audit-System (toolradar)
- [x] DSGVO-Audit abgeschlossen (toolradar)
