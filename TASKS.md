# Backlog - Alle Meyso Projekte

Stand: 2026-04-30 (priorisiert)

> Legende: `🤖 Claude` = kann Claude Code abarbeiten · `👤 Manuell` = braucht menschliche Aktion

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
- [ ] 👤 Stripe Customer Portal Branding (Halveo-Logo hochladen)
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
- [ ] 👤 Dave | Die Anschrift von Villa Nina ist ein Platzhalter: "Musterstraße 1, 78086 Musterort". Der Ort gibt es nicht, die PLZ ist die von Brigachtal. Der Lauf am 01.10.2026 erzeugt damit eine Rechnung, deren Anschrift nicht stimmt, und Paragraf 14 UStG verlangt die richtige. Technisch laeuft es durch, das ist hier das Problem und nicht die Loesung
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
- [ ] 🤖 V3 Rest, jetzt mit Inhalt: Waechterpruefung "Faelligkeit ausserhalb der Laufzeit". Sie meldet einen Vertrag, dessen next_invoice_due nicht zu seiner Laufzeit passt, also vor dem Beginn liegt, nach dem Ende liegt, oder mehr als ein Intervall hinter dem heutigen Tag. Wartet auf die naechste Waechter-Runde, kein eigener Termin
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
- [ ] 🤖 Echter Versandweg fuer Outreach, eigene Runde: gespeicherte Vorlagen statt eines Prompts im Code, Ratenbegrenzung je Empfaenger und je Tag, Kill-Switch wie bei Rechnung und Angebot, eigene mail_log-Art mit Person, Grundlage und Vorlage (die zwei Spalten liegen seit dem 10.09.2026 bereit und sind leer), Abmeldelink in jeder Mail und Verarbeitung des Widerspruchs. Ohne das bleibt es beim mailto-Weg, und der ist gesperrt, solange keine Grundlage steht
- [ ] 👤 Dave | Die Kandidatenliste des Crawlers auf ihre Grundlage nach DSGVO pruefen, bevor jemand sie systematisch abarbeitet: Informationspflicht nach Artikel 14 (die 82 wissen nicht, dass ihre Daten hier liegen), Eintrag im Verzeichnis der Verarbeitungstaetigkeiten, Aufbewahrungsdauer und Loeschung der Verworfenen. Die Technik steht jetzt, die Entscheidung nicht
- [ ] 🤖 DELETE auf /api/admin/angebots-bausteine soll 404 liefern, wenn es die Kennung nicht gibt. Heute antwortet die Route mit 200 und {ok:true}, ohne die getroffenen Zeilen zu zaehlen: supabase.delete().eq() meldet keinen Fehler, wenn nichts passt. Der Aufrufer kann damit nicht unterscheiden, ob er geloescht hat oder ins Leere griff, und die Oberflaeche nimmt die Zeile trotzdem aus der Liste. Aufgefallen am 11.09.2026 beim Methodenlauf zu den neuen Rechten: dort steht bei inhaber und partner DELETE 200 auf eine erfundene Kennung, und genau diese 200 heisst nur "durchgelassen", nicht "etwas passiert"
  <!-- Umfang: select("id") an das delete haengen und bei leerer Antwort mit 404 und demselben Satz antworten wie PATCH ("Diesen Baustein gibt es nicht."). Dazu die Stelle in UnternehmenClient, die nach dem Loeschen die Zeile entfernt: bei 404 gehoert die Liste neu geladen, nicht die Zeile weggenommen. Und ein Blick, wo dieselbe Bauart sonst steht, das Muster delete().eq() ohne Zaehlung ist im Admin nicht auf diese eine Route beschraenkt. -->
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
- [ ] 🤖 Alle sieben Portalseiten tragen den PDF-Renderer mit je 8,66 MB, ueber lib/angebote.ts. Derselbe Umbau wie im Admin, drei Funktionen in eine eigene Datei. Eigene Runde, weil das Portal vor Kunden steht. Der Zustand ist in __tests__/buendel-grenze.test.ts festgehalten
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
  <!-- Ein einmaliger Fehlschlag in portal-mandanten.test.ts waehrend eines Zwischenlaufs, in drei folgenden Laeufen und einzeln gruen (60 Tests). Die Datei fragt Production ueber PostgREST ab, ein Netzhaenger ist die naheliegende Ursache. Nicht reproduziert, deshalb nur vermerkt. -->
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
- [ ] 🤖 Kundenakte (Umsatz je Kunde, Jahresuebersicht, eine offen-Definition, SQL-Gegenprobe als Dauertest)
- [ ] 🤖 Beratung (Stundensaetze aus firma.stundensatz_cents, Beratungsrechnung mit Menge und Einheit)
  <!-- Kundenakte und Beratung standen bis 07.09.2026 als V5 und V6 hier, aus der alten Nummerierung. Die Nummern sind mit V4 Kundenportal, V5 Aenderungen und V6 Zubuchen belegt, deshalb ohne Nummer. Inhalt unveraendert, Einsortierung entscheidet Dave. -->
- [ ] 🤖 V6 Nachlauf: einen monatlichen Zusatz einzeln wieder abbestellen. Heute geht nur der ganze Vertrag, und der Verlauf sagt, was dazugekommen ist
- [ ] 🤖 Lokaler Supabase-Stack mit Seed, vor der naechsten Portal-Etappe. Ziel: ein Rauchtest, der sich anmeldet und die Seiten hinter der Sitzung wirklich aufruft. Heute endet jeder Rauchtest bei /portal/anmelden, weil eine angemeldete Person nur zu einem echten Kunden gehoert und es keine Testzugaenge auf Kundendaten gibt. Genau deshalb ist die kaputte Dateiroute aus V5 durchgerutscht: 404 statt Datei, und niemand konnte es sehen. Umfang: supabase start mit config.toml, Seed mit zwei erfundenen Kunden, je einer Person je Rolle, Belegen, Vertraegen und Bausteinen, dazu ein Skript, das sich anmeldet und alle Portalrouten mit Sitzung abklappert. Damit werden auch die Bilder aus next start moeglich, die heute nur fuer Seiten ohne Sitzung gehen
  <!-- Muster: businessfabian/meyso-web, geklont nach D:\dev\clients\meyso-web und angesehen. Was dort steht und hier fehlt: supabase/config.toml mit eigenen Ports (API 54421, DB 54422), die Skripte db:start, db:stop, db:push, db:reset auf die Supabase-CLI, seed ueber scripts/seed-site.ts, scripts/umgebung.ts als einzige Stelle, die den Secret Key liest und zwischen lokal und Cloud umschaltet (MEYSO_ENV), scripts/pruefe-anon.ts als Gegenprobe auf die anon-Sicht, und fuer den Rauchtest e2e:vorbereiten (seed plus Zustand herstellen) sowie e2e:server (vorbereiten, build, start) mit playwright.config.ts. e2e-vorbereiten bricht ab, wenn es gegen die Cloud laeuft, weil es sonst die echte Website veraendern wuerde. Genau diese Sperre brauchen wir hier auch. meyso-website hat bisher nur supabase/migrations, keine config.toml und keinen Seed. -->
  <!-- Verschoben am 08.09.2026 auf Daves Wort, nicht gestrichen: vor der naechsten Portal-Etappe. V7 Ausland beruehrt das Portal nicht, deshalb geht es dazwischen.
       Vorbereitung ist gelaufen und muss nicht wiederholt werden. Klon liegt unter D:\dev\clients\meyso-web, voller Klon, Branch main, unveraendert, gleicher Pfad wie auf dem Mac. Docker fehlt auf diesem Rechner ganz (kein Binary, kein Dienst, kein Ordner), WSL hat keine Distribution. Das installiert Dave selbst, Docker Desktop mit WSL2. Die Supabase-CLI fehlt ebenfalls: Homebrew gibt es unter Windows nicht, Scoop und Chocolatey sind nicht installiert, winget kennt kein Supabase-Paket. Offen zur Entscheidung: npm i -D supabase (Version im Repo, kein neuer Paketmanager, auf dem Mac unveraendert nutzbar) oder Scoop nach der Supabase-Doku (Version haengt dann am Rechner).
       Portblock reserviert: 545xx, also 54520 shadow, 54521 api, 54522 db, 54523 studio, 54524 inbucket, 54527 analytics, 54529 pooler. halveo belegt faktisch 5432x (seine config.toml nennt nur db 54322 und shadow 54320, der Rest faellt auf die Vorgaben), meyso-web belegt 544xx ausgeschrieben. -->
- [x] 🤖 Claude | V7 Ausland live: Rechnungen, Angebote und Vertraege an Kunden in Drittlaendern tragen den richtigen Steuervermerk, die Sperre faellt fuer sie, und der Paragraf-19-Waechter zaehlt nur steuerbare Umsaetze (PR 40, 09.09.2026, Migration 20260909_v7_ausland.sql) ✓
  <!-- Drei Faelle in lib/steuervermerk.ts: DE traegt den Paragrafen 19, Drittland den Leistungsort nach Paragraf 3a Absatz 2 mit ausgeschriebenem Land, EU wirft. Der Paragraf-19-Satz erscheint auf einem Drittlandsbeleg nirgends, er handelt von deutscher Umsatzsteuer und die faellt dort nicht an. EU wirft mit Absicht: dafuer braucht es USt-IdNr, Reverse Charge und die Zusammenfassende Meldung, und nichts davon ist hinterlegt. -->
  <!-- Die Texte stehen in app_settings (steuer.vermerk_de, steuer.vermerk_drittland mit {land}), Gabi kann sie ohne Deploy aendern. Der Landesname kommt aus Intl, nicht aus einer Liste im Code. In der Rechnungsmail steht der Vermerk nur im Drittland, im Inland bleibt die Mail wie vor V7. -->
  <!-- Paragraf 19 rechnet jetzt nur mit steuerbaren Umsaetzen, und zwar in allen vier Bestandteilen der Prognose: Zufluss, offene Forderungen, Grundlast aus Vertraegen und offene Zahlplan-Raten. Der Auslandsbetrag verschwindet nirgends: eigene Zeile im Hinweis von Pruefung 4, Spalte "steuerbar DE" in EUeR-CSV und Jahresmappe, eigene Zeile im Summenblatt. Die Einkommensteuer betrifft beides, die Trennung gilt nur fuer Paragraf 19. -->
  <!-- Zwei Aenderungen am Bestand: auf der Rechnung steht jetzt "§ 19" statt "§19", es gab zwei Fassungen nebeneinander. Und Ziegler stand auf CHF und steht seit dem 09.09.2026 auf EUR, weil der Auftrag in Euro vereinbart ist. Alle sieben Kunden tragen jetzt EUR. -->
  <!-- Sieben Bogen per pdftotext belegt, Protokoll in docs/analyse/v7-ausland. Trockenlauf der ersten Ziegler-Rechnung liegt dort als PDF, erzeugt mit scripts/trockenlauf-beleg.mjs, nur lesend. Dabei aufgefallen: Ziegler hat weder Strasse noch PLZ noch Ort, das Festschreiben wuerde den Beleg deshalb ablehnen. Siehe die offene Zeile unten. -->
- [x] 👤 Anschrift von Ziegler Holzarbeiten nachgetragen: Brueggeweidlistrasse 1, 3718 Kandersteg, CH. Das Festschreiben nimmt den Beleg damit an (09.09.2026) ✓
- [ ] 🤖 Fremdwaehrung, erst wenn ein Kunde in Franken vereinbart ist. Heute rechnen alle sieben Kunden in Euro, Ziegler seit dem 09.09.2026 auch (der Auftrag ist in Euro vereinbart). Umfang, wenn es soweit ist: CHF mit EZB-Kurs am Zuflusstag, Umrechnung im Zahlungseingang, EUR-Betrag in der Jahresmappe. Der Bogen kann CHF schon (lib/waehrung.ts), was fehlt ist die Umrechnung fuer Buchhaltung und Paragraf 19
  <!-- Nicht gebaut, mit Absicht: ein Kurs, den niemand braucht, ist ein Kurs, den niemand prueft. Der EPC-Zahlungscode und der Dauerauftrag-Hinweis gibt es ohnehin nur bei Euro, das steht seit V0b so in lib/waehrung.ts. -->
- [ ] 🤖 V10 Teil A, E-Rechnungen empfangen. Ohne Ausloeser, kann jederzeit. E-Rechnungen kommen als XML (XRechnung) oder als PDF mit eingebettetem XML (ZUGFeRD). Der Ausgaben-Dialog aus S1 nimmt beide an, liest Aussteller, Datum, Betrag, Positionen und Steuer aus dem XML und belegt die Buchung damit vor
  <!-- Haengt nicht an der Kleinunternehmerregelung: empfangen koennen muss Dave laut seiner Ansage vom 09.09.2026 seit 2025, unabhaengig davon, ob er selbst welche ausstellt. Deshalb ohne Ausloeser und vor Teil B machbar. -->
- [ ] 🤖 V10 Teil B, E-Rechnungen ausstellen. Gekoppelt an V11, am selben Tag. Je Rechnung ein XML nach EN 16931 als Anhang neben dem PDF, Steuerkategorie je Fall (Inland regelbesteuert, Kleinunternehmer, Drittland) nach der deutschen XRechnung-Anleitung mit Beleg im PR, Validierung gegen den amtlichen Pruefdienst als Test, Storno und Anzahlung eingeschlossen
  <!-- Einbettung ins PDF als ZUGFeRD nur, wenn der Renderer PDF/A-3 hergibt. Sonst bleibt es das getrennte XML, das ist gueltig. Zu pruefen ist das an @react-pdf/renderer, bevor jemand Zeit in die Einbettung steckt. -->
  <!-- Als Kleinunternehmer ist Dave vom Ausstellen befreit, deshalb erst mit dem Wechsel zur Regelbesteuerung. Die Kopplung ist keine Bequemlichkeit: die Steuerkategorie im XML haengt daran, welche Besteuerung gilt, und vor dem Wechsel gaebe es die Angaben gar nicht, die EN 16931 verlangt. Deshalb V10 Teil B und V11 zusammen. -->
- [ ] 🤖 V11 Regelbesteuerung, zusammen mit V10 E-Rechnung. Ausgeloest wird sie vom Waechter: sobald Pruefung 4 die 50 Prozent der Vorjahresgrenze meldet, ist es Zeit zu planen, nicht erst beim Ueberschreiten. Inhalt: Schalter mit Datum (ab wann Regelbesteuerung gilt, rueckwirkend nichts aendern), Steuerblock auf allen Belegen (Netto, Satz, Steuerbetrag, Brutto), Vorsteuer an den Ausgaben, EU mit Reverse Charge und damit auch das Ende der EU-Sperre aus V7
  <!-- Der Ausloeser steht schon: lib/waechter.ts Pruefung 4 kennt die Stufen 50, 80 und 100 Prozent je Grenze, und seit V7 rechnet sie nur mit steuerbaren Umsaetzen. Die 50-Prozent-Stufe ist damit ein brauchbares Signal und kein Fehlalarm durch Auslandsumsaetze. -->

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

Meyso-Seite (Reihenfolge der vier Self-Service-AVVs egal, Meyso-Hirmax zuletzt weil er auf die Subunternehmer-Liste der anderen verweist):
- [ ] 👤 Dave | AVV Vercel aktivieren (Self-Service vercel.com/legal/dpa)
- [ ] 👤 Dave | AVV Supabase aktivieren (Self-Service supabase.com/legal/dpa)
- [ ] 👤 Dave | AVV Resend aktivieren (Self-Service resend.com/legal/dpa)
- [ ] 👤 Dave | AVV Sanity aktivieren (Self-Service sanity.io/legal/dpa)
- [ ] 👤 Dave | AVV zwischen Meyso und Hirmax erstellen (DOCX, verweist auf Subunternehmer-Liste der vier oberen AVVs)

---

### meyso-website

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
- [ ] 👤 Rechtliches Hirmax: DSGVO (Max) + 5x AVV (Dave) (P2, siehe Rechtliches-Hirmax Block)
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
