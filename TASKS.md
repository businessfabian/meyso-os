# Backlog - Alle Meyso Projekte

Stand: 2026-04-10 (priorisiert)

> Legende: `🤖 Claude` = kann Claude Code abarbeiten · `👤 Manuell` = braucht menschliche Aktion

---

## 🔴 P0 - Sofort (Sicherheit + Rechtlich)

> Geleakte Keys und fehlende Vertraege = echtes Risiko

- [ ] 👤 API-Keys rotieren: Gemini, PageSpeed, CRON_SECRET (Vercel Dashboard + Google Cloud Console)
- [ ] 👤 AVVs pruefen + aktivieren: Vercel, Sanity, Resend (Online-DPAs, kein Unterschriftsprozess)
- [ ] 👤 AVV zwischen Meyso (Dave) und Max Hirt (Hirmax) erstellen
- [x] sq-schmidt Auth-Middleware: middleware.ts schuetzt /admin/dashboard + /api/admin (d6998a8) ✓
- [x] Session Secret (meyso-website): Fallback entfernt, SESSION_SECRET ist Pflicht (fb2e25d) ✓

---

## 🟠 P1 - Diese Woche (Kunden + SEO)

> Direkt sichtbar fuer Kunden oder bringt Traffic

- [x] 🤖 Claude | Alle Projekte: Next.js auf gepatchte Version updaten wegen CVE-2026-23869 (16.x: bereits 16.2.3 = clean, 0 Schwachstellen; 15.x: meyso-kmu-template auf 15.5.15 aktualisiert) ✓
- [x] 301-Redirects toolradar: permanentRedirect('/tools') statt 404 fuer geloeschte Tools (02dddeb) ✓
- [x] 👤 Hirmax als Kunde in Sanity anlegen (Sanity Studio)
- [ ] 👤 Sanity CORS im Dashboard pruefen (Hirmax, Sanity Studio → API → CORS Origins)
- [ ] 👤 Google Business Profile: Bilder hochladen + verifizieren
- [ ] 👤 Social Media API Keys konfigurieren (LinkedIn Developer Portal) - Social Poster ist fertig, wartet auf Keys
- [ ] 👤 Lexware Export end-to-end testen (Testbestellung → XML Export → Import in Lexware bei Max)
- [ ] 👤 Wartungsvertrag-Reaktionszeiten realistisch setzen (Achtung: Hauptjob)
- [x] 🤖 Claude | meyso-website: middleware.ts zu proxy migrieren (Next.js 16 deprecation) (527f627) ✓
- [x] 🤖 Claude | hirmax: Submit Button Loading State + Doppel-Submit-Schutz (ffa47d7, 09.04.2026) ✓
- [x] 🤖 Claude | UI Modernization Audit: 4 Projekte auditiert (09.04.2026) ✓
  <!-- Audits in docs/ui-audits/: hirmax, villa-nina, toolradar, meyso-website. Summary: docs/ui-audits/2026-04-09-summary.md -->
- [x] 🤖 Claude | villa-nina: Mobile Navigation (25 Min, Pre-Launch Blocker)
  <!-- Quelle: docs/ui-audits/2026-04-09-villa-nina-sardinia.md -->
- [x] 🤖 Claude | toolradar: ContactForm Labels (10 Min, WCAG Failure) ✓
  <!-- Quelle: docs/ui-audits/2026-04-09-toolradar.md. Alle 3 Felder haben sr-only Labels + aria-required + autoComplete. Verifiziert 2026-04-14. -->
- [x] 🤖 Claude | meyso-website: CSS Custom Properties Fundament fuer Dark Mode (aus UI Audit) (6448516) ✓
- [ ] 🤖 Claude | villa-nina: Weitere Quick Wins aus docs/ui-audits/2026-04-09-villa-nina-sardinia.md
- [x] 🤖 Claude | toolradar: Weitere Quick Wins aus docs/ui-audits/2026-04-09-toolradar.md ✓
  <!-- FAQ ARIA, ThemeToggle aria-pressed, EffizienzRechner Slider ARIA, Hero clamp(), --color-brand Token. Tool-Card Hover bewusst uebersprungen (hat bereits ampel-spezifischen Glow). Commit 453d542, 2026-04-14. -->
- [x] 🤖 Claude | hirmax: Weitere Quick Wins aus docs/ui-audits/2026-04-09-hirmax-scheibenbilder.md (2026-04-14) ✓
  <!-- Alle 7 Quick Wins erledigt: NavClient aria-expanded+Focus-Trap, Submit Loading State (ffa47d7), Menge-Buttons aria-label, Progress-Bar role, Nav Backdrop-Blur, Card-Hover-Transition, Body-Font 15px→16px (94fc5b7).
  Context: npm run dev zeigt "The middleware file convention is deprecated. Please use proxy instead." Breaking change in kommenden Next.js Versionen. Migration path: https://nextjs.org/docs/messages/middleware-to-proxy -->

---

## 🟡 P2 - Naechste 2 Wochen (Tech Debt + Hardening)

> Kein externer Impact, aber raeumen auf

- [x] 🤖 CSP Header: Content Security Policy in `next.config.ts` auf allen Projekten (08b35f3, 7f80cdb, bec4fa1, d1278ce, ff103d2) ✓
- [x] 🤖 CORS: Explizite `Access-Control-Allow-Origin` Header auf API Routes (d6e7c19, 4c228b7, 3bd16e4, 6ec17d7, 195443c) ✓
- [x] 🤖 Hardcoded Cookie-Names hirmax: `hirmax_session` in Middleware statt aus Config (3bd16e4) ✓
- [ ] 👤 Dave | Admin Finanzen: Finom Banking API Integration via GoCardless Bank Account Data (ehemals Nordigen). Kostenlos bis 10 Accounts, 90 Tage Transaction History. OAuth Flow + taeglicher Sync Cron + Auto-Kategorisierung. Alternative Kurzform: CSV Import Button fuer Finom Exports (1h Aufwand). Siehe Chat vom 11.04.2026 Entscheidung CSV vs API.
- [ ] 🤖 Claude | Claude Code: /powerup ausprobieren und nuetzliche Features in CLAUDE.md dokumentieren (Quelle: News Scout 10.04.2026)
- [ ] 🤖 Claude | Claude Code: Monitor-Tool aus v2.1.98 in autonomen Loops nutzen, `npm update -g @anthropic-ai/claude-code` (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | Gemini API: Projekt-Level Spend Cap im AI Studio setzen (Tier 1 = $250/Monat, sonst Pause aller Requests) (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | Gemini API: gemini-3-flash-preview als Ersatz fuer gemini-2.5-flash in autonomen Loops testen (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | Gemini API: Flex Inference Tier fuer nicht-zeitkritische Loops evaluieren (Kostenoptimierung) (Quelle: News Scout 10.04.2026)
- [ ] 🤖 Claude | Alle Projekte: Next.js 16.1.6 auf 16.2 evaluieren und updaten (stable Adapter API, Agent DevTools, 200+ Turbopack Fixes) (Quelle: News Scout 10.04.2026)
- [ ] 👤 Manuell | hirmax: Supabase Stripe Sync Engine evaluieren fuer kuenftiges Payment Processing (Quelle: News Scout 10.04.2026)
- [ ] 🤖 Newsletter Secret: In README erwaehnen (kmu-template)
- [ ] 🤖 Services-Daten nach Sanity (sq-schmidt): 15KB hardcoded services-data.ts
- [ ] 🤖 Quality Gate erzwingen (toolradar): Scoring-System existiert aber unklar ob aktiv
- [ ] 👤 Sanity Read Token: Separaten Viewer-Token erstellen statt Write-Token an Templates
- [ ] 👤 CRON_SECRET auf Vercel setzen (meyso-website)
- [x] 👤 GitHub Template Repo markieren: meyso-kmu-template → Settings → Template repository ✓
- [x] 🤖 Claude | meyso-website: npm audit fix (9 von 10 Vulnerabilities gefixt, 17b428f) ✓
  <!-- 1 verbleibende moderate Next.js Vuln benoetigt --force (version bump ausserhalb range), separat evaluieren -->
- [ ] 🤖 Claude | hirmax: npm audit fix (19 vulnerabilities: 9 moderate, 10 high)
  <!-- Achtung: erst pruefen was sich aendert, nicht blind --force laufen lassen -->
- [x] 🤖 Claude | hirmax: package.json name fixen (aktuell: "meyso-kmu-template@1.0.0" → soll: "hirmax-scheibenbilder@1.0.0")
- [ ] 👤 Manuell | sq-schmidt-website: .env.local aus Git-History entfernen + .gitignore
  <!-- Context: aktuell als tracked committed. Inhalt ist nur NEXT_PUBLIC_SITE_URL (public Vercel URL), keine echten Secrets. Kein akutes Security-Risiko, aber best practice. Tool: git filter-repo oder BFG Repo Cleaner. -->
- [ ] 🤖 Claude | meyso-website: 214 Lint Errors aufraeumen (hauptsaechlich @typescript-eslint/no-explicit-any)
  <!-- Hauptsaechlich @typescript-eslint/no-explicit-any in AdminClient.tsx, lib/ai/index.ts, rss.xml/route.ts und vielen weiteren Dateien. Ansatz: echte Typen setzen wo moeglich, oder erklaerende Kommentare bei unavoidable any (laut meyso Konvention "kein any ohne erklaerenden Kommentar"). Entdeckt via /meyso-preflight am 09.04.2026. Schaetzung: 2-4h. -->
- [ ] 👤 Manuell | Stack: pnpm statt npm evaluieren (shared store fuer 8 Repos spart ca 3 GB auf D:, schnellere installs)
- [ ] 👤 Manuell | Stack: Turborepo oder pnpm workspace fuer shared dependencies evaluieren
- [ ] 👤 Manuell | sq-schmidt: Git LFS fuer Bilder in der History (Repo ist 800 MB, sollte unter 100 MB)
- [ ] 👤 Manuell | Vercel: env var groups fuer shared keys wie RESEND_API_KEY, SUPABASE Credentials
- [ ] 👤 Dave | Admin Dashboard: Client-Systeme Section bauen (Bitwarden-Integration, keine Credentials in DB). Details: Neue Tabelle client_systems fuer Metadaten (email, hosting, database, domain, analytics, crm, other) mit Dashboard-URLs und Bitwarden-Links. Voraussetzung: Bitwarden Account und Organization "meyso-clients" anlegen. Siehe Chat vom 11.04.2026.

---

## 🟢 P3 - Feature Backlog (Kundenprojekte)

> Wertschoepfung fuer Kunden, nach Prio sortiert

### hirmax-scheibenbilder (zahlender Kunde)
- [ ] 🤖 Kunden-Self-Service: Passwort aendern, Bestellhistorie einsehen
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
- [ ] 🤖 Claude | /admin/workflows: Manual Trigger Buttons (via GitHub Actions repository_dispatch)
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

### meyso-kmu-template (Template)
- [ ] 🤖 FAQ Admin-Seite (aktuell nur via Sanity Studio)
- [ ] 🤖 Leistungen Admin-Seite (aktuell nur via Sanity Studio)
- [ ] 🤖 Blog Modul testen (ist disabled, muss mit echten Daten validiert werden)
- [ ] 🤖 Chat Widget: System-Prompt mit Leistungen aus Sanity anreichern
- [ ] 🤖 Galerie: Direkt-Upload im Admin statt Umweg ueber Sanity Studio

---

## 🅿️ GEPARKT (spaeter)

- [ ] 🤖 DSGVO-Widget live (live Deep-Scan)
- [ ] 🤖 Steckbrief-Widget mit Team-Size Preisrechner
- [ ] 🤖 meyso Portal: Auth von JWT auf Supabase Auth migrieren
- [ ] 🤖 Dokumente/Vertraege auf Supabase Storage (signed URLs)
- [ ] 🤖 EN-to-DE Uebersetzung automatisieren (aktuell nur manuelle Scripts)
- [ ] 🤖 Rate Limiting persistent machen (Upstash Redis): Reicht bei aktuellem Traffic

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
- [ ] 👤 AVVs aktivieren: Vercel, Sanity, Resend (P0)
- [ ] 👤 AVV Hirmax erstellen (P0)
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
- [ ] 👤 sq-schmidt-website: .env.local aus Git-History entfernen (P2)
- [ ] 👤 C: Space Cleanup Phase 2 (P3)
- [ ] 👤 pnpm store + Caches von C: auf D: (P3)

---

## ✅ ERLEDIGT

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
