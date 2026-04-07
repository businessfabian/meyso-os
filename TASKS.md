# Backlog – Alle Meyso Projekte

Stand: 2026-04-07 (Tasks geprueft gegen Codebase)

---

## 🔴 KRITISCH (sofort)

### Alle Projekte
- [ ] API-Keys rotieren: Gemini, PageSpeed, CRON_SECRET – alle geleakt

### meyso-website
- [x] `.env.local` pruefen: Steht in `.gitignore` (.env* Pattern) ✓
- [x] Webhook Signing: verifySanitySignature() in webhooks/config-changed ✓

### meyso-kmu-template
- [x] JWT Fallback entfernen: "template-fallback-secret" nicht mehr im Code ✓
- [ ] Cookie-Name Mismatch: `middleware.ts` prueft hardcoded `admin_auth` aber Auth setzt dynamischen Cookie mit Config-Prefix. Middleware muss beide pruefen

### hirmax-scheibenbilder
- [ ] Rate-Limiting von in-memory (Map) auf DB migrieren (blockiert Production-Betrieb)

### sq-schmidt-website
- [x] `typescript.ignoreBuildErrors` auf false gesetzt in next.config ✓

### toolradar
- [x] Admin-Auth einbauen: middleware.ts schuetzt /admin mit Login-Redirect ✓
- [x] Cron-Job Auth: CRON_SECRET Check in allen /api/cron/* Routes ✓

---

## ⚖️ RECHTLICH / GESCHAEFTLICH

- [ ] AVVs pruefen + aktivieren: Vercel, Sanity, Resend (Online-DPAs, kein Unterschriftsprozess)
- [ ] AVV zwischen Meyso (Dave) und Max Hirt (Hirmax) erstellen
- [ ] Wartungsvertrag-Reaktionszeiten realistisch setzen (Achtung: Hauptjob)
- [x] Hirmax AGB (app/agb/page.tsx, 11 Paragraphen, April 2026)
- [x] Wartungsvertraege an Felix (SQ Schmidt) + Max (Hirmax) verschickt
- [x] Nebentaetigkeit schriftlich genehmigt (April 2026)
- [x] ELSTER Fragebogen eingereicht, Steuernummer beantragt

---

## 🟡 WICHTIG (diese Woche)

### Alle Projekte
- [ ] Rate Limiting persistent machen: In-Memory geht bei Vercel Cold Start verloren. `@upstash/ratelimit` mit Redis einbauen (kostenloser Tier reicht)
- [ ] CSP Header: Content Security Policy in `next.config.ts` auf allen Projekten
- [ ] CORS: Explizite `Access-Control-Allow-Origin` Header auf API Routes

### meyso-website
- [ ] Hirmax als Kunde in Sanity anlegen
- [x] `robots.ts` erstellt (app/robots.ts) ✓
- [ ] Session Secret: Faellt auf ADMIN_PASSWORD zurueck wenn SESSION_SECRET nicht gesetzt. Dokumentieren oder Error werfen
- [ ] Sanity Read Token: Separaten Viewer-Token erstellen statt Write-Token an Kunden-Templates zu geben
- [ ] Google Business Profile: Bilder hochladen + verifizieren

### meyso-kmu-template
- [x] Magic Link Expiry: verifyToken prueft exp Feld korrekt ✓
- [ ] Newsletter Secret: Kein Generator-Hinweis im Code. In .env.example dokumentieren (erledigt) aber auch in README erwaehnen

### hirmax-scheibenbilder
- [ ] Sanity CORS im Dashboard pruefen
- [ ] Hardcoded Cookie-Names: `hirmax_admin`, `hirmax_session` in Middleware statt aus Config. Sollte konfigurierbar sein
- [x] Image Upload Validation: 5MB Limit + Typ-Check in api/upload/route.ts ✓
- [ ] Lexware Export: Format validieren bevor Kunden es nutzen (XML Schema Check)

### sq-schmidt-website
- [x] Rate Limiting eingebaut: lib/rate-limit.ts vorhanden ✓
- [ ] Auth-Middleware: Kein zentraler Schutz fuer `/admin` Routes. Middleware erstellen
- [ ] Services-Daten nach Sanity: 15KB hardcoded services-data.ts sollte im CMS sein

### toolradar
- [ ] 301-Redirects fuer ~72 geloeschte Tools (next.config.ts, aktuell nur 1 Domain-Redirect)
- [ ] Social Media API Keys konfigurieren: Social Poster ist gebaut aber Keys fehlen
- [ ] Quality Gate erzwingen: Scoring-System existiert aber unklar ob es aktiv prueft

---

## 🟢 VERBESSERUNGEN (naechste 2 Wochen)

### meyso-website
- [ ] Client-Uebersicht: Letzter Deploy-Zeitpunkt anzeigen (Vercel API)
- [ ] Wartungs-Dashboard: Template-Version pro Wartungskunde anzeigen
- [ ] Wartungs-Dashboard: Einzelnen Lighthouse manuell fuer einen Kunden triggern
- [ ] Provision Wizard: "Schritt wiederholen" Button fuer fehlgeschlagene Steps
- [ ] Cockpit: Letzte Aktivitaeten Feed (neue Clients, Anfragen, Deploys)

### meyso-kmu-template
- [ ] FAQ Admin-Seite (aktuell nur via Sanity Studio)
- [ ] Leistungen Admin-Seite (aktuell nur via Sanity Studio)
- [ ] Blog Modul testen (ist disabled by default, muss mit echten Daten validiert werden)
- [ ] Chat Widget: System-Prompt mit Leistungen aus Sanity anreichern (aktuell nur siteConfig)
- [ ] Galerie: Direkt-Upload im Admin statt Umweg ueber Sanity Studio
- [ ] Dark Mode fuer Admin Dashboard

### hirmax-scheibenbilder
- [ ] Payment Processing: Bestellungen sind aktuell nur Anfragen, kein Bezahlvorgang
- [ ] Kunden-Self-Service: Passwort aendern, Bestellhistorie einsehen
- [ ] Push Notifications: Benachrichtigung bei Bestellstatus-Aenderung

### sq-schmidt-website
- [ ] Blog-Bereich implementieren (Sanity Schema + Seiten)
- [ ] Preise-Seite erstellen
- [ ] FAQ-Bereich implementieren
- [ ] CSV-Export fuer Anfragen
- [ ] Live-Chat Widget (Tawk.to oder eigene Loesung)
- [ ] Dependency Audit: 66 Packages pruefen, ungenutzte entfernen
- [ ] Admin Dashboard: Filter/Suche erweitern

### toolradar
- [ ] Blog-Generator testen: Claude API Kosten im Auge behalten
- [ ] Price Monitor: Pricing-Aenderungen tracken und alertieren
- [ ] Dead Tool Detector: Inaktive Tools automatisch markieren
- [ ] DSGVO-Report als PDF Export
- [ ] Newsletter Integration vollstaendig testen

---

## 🅿️ GEPARKT (spaeter)

- [ ] DSGVO-Widget live (live Deep-Scan)
- [ ] Steckbrief-Widget mit Team-Size Preisrechner
- [ ] meyso Portal: Auth von JWT auf Supabase Auth migrieren
- [ ] Dokumente/Vertraege auf Supabase Storage (signed URLs)
- [ ] EN-to-DE Uebersetzung automatisieren (aktuell nur manuelle Scripts)

---

## 🔵 LANGFRISTIG

### Alle Projekte
- [ ] Automatisierte Tests (mindestens API-Route Tests mit Vitest)
- [ ] Performance Monitoring (Core Web Vitals, Vercel Speed Insights)
- [ ] Structured Logging (JSON Format, Vercel Log Drain kompatibel)
- [ ] Error Tracking (Sentry oder Vercel Error Tracking)
- [ ] Zod Validation auf ALLEN API-Routes (nicht nur Kontaktformular)

### meyso-website
- [ ] Multi-Tenant Architektur: Ab 10+ Kunden eine App statt viele Repos
- [ ] Automatische Rechnungserstellung fuer Wartungsvertraege
- [ ] Client Activity Log: Wer hat was wann im Admin gemacht
- [ ] E-Mail Templates visuell editierbar (Drag & Drop Builder)

### meyso-kmu-template
- [ ] Internationalisierung (i18n) fuer mehrsprachige Kunden
- [ ] A/B Testing fuer Landing Pages
- [ ] Booking-Modul mit Cal.com vollstaendig integrieren
- [ ] Pricing-Modul mit Stripe Payment Links

### toolradar
- [ ] User Accounts: Kunden koennen eigene Tool-Listen speichern
- [ ] API fuer Tool-Daten (Partner-Integration)
- [ ] Vergleichs-Feature: Tool A vs Tool B Seite
- [ ] Chrome Extension: DSGVO-Check direkt im Browser

---

## ✅ ERLEDIGT

### Rechtlich / Geschaeftlich
- [x] Hirmax AGB (app/agb/page.tsx, 11 Paragraphen, April 2026)
- [x] Wartungsvertraege an Felix (SQ Schmidt) + Max (Hirmax) verschickt
- [x] Nebentaetigkeit schriftlich genehmigt (April 2026)
- [x] ELSTER Fragebogen eingereicht, Steuernummer beantragt

### meyso-website
- [x] /admin/outreach abgesichert (isAdmin-Check in API-Route)
- [x] Datenschutzseite: Verarbeiter, Portal-Cookie, Cookie-Name vollstaendig
- [x] Meyso-CTAs auf ToolRadar als Werbung gekennzeichnet (MeysoBridge.tsx, EffizienzRechner.tsx)
- [x] Parallax Hero (HeroSection.tsx, useScroll + useTransform, 3 Layer)
- [x] Template-Module: alle App-Seiten vorhanden (inkl. jobs)
- [x] demo.meyso.de live (Schreinerei Holzmann, Commit 88b6935)
- [x] SQ Schmidt Domain-Umstellung abgeschlossen
- [x] Blog Artikel 3+4 veroeffentlicht
- [x] Client Onboarding Automatisierung (ADMIN_PASSWORD, VAPID, Deploy Hook)
- [x] Template Version UI (Badge + Update Button in Client-Liste)
- [x] Client-Uebersicht mit Status-Filter, Deploy-Button, Domain-Anzeige
- [x] Cockpit KPIs (Provisionierte Clients, Wartungskunden)
- [x] Wartungs-Dashboard (Uptime, SSL, Lighthouse Reports)
- [x] SSL-Warnung Farbcodes (rot/gelb/gruen)
- [x] Provision-Flow Timeouts + Graceful Degradation
- [x] Homepage Layout Selector im Dashboard Config
- [x] web-push + @types/web-push installiert

### meyso-kmu-template
- [x] White-Label Admin (Theme-Farben, Firmenname, dynamische Sidebar)
- [x] 3 Hero-Layouts (Classic, Split, Minimal)
- [x] 10 Admin-Seiten (Cockpit, Anfragen, Newsletter, Analytics, Blog, Galerie, Projekte, Testimonials, Einstellungen, Login)
- [x] Mail Kill-Switch mit Kategorien (auth/transactional/notification)
- [x] DSGVO-konformes Analytics (cookieless)
- [x] KI-Chat Widget (Claude API)
- [x] Activity Log + Sanity Backup Cron
- [x] Middleware fuer Route Protection
- [x] Error Boundaries + Loading States
- [x] SEO Structured Data Komponenten
- [x] PWA Offline-Seite verbessert
- [x] Einstellungen persistent in Sanity
- [x] Modul-aware Sidebar
- [x] GitHub Actions Sync Workflow
- [x] Command Palette erweitert
- [x] Ping-Route mit mehr Daten
- [x] README + .env.example komplett
- [x] Alle ESLint Errors gefixt
- [x] vercel.json mit Cron Schedules
- [x] Reusable Mail Template

### hirmax-scheibenbilder
- [x] Auth: Kundennummer + Passwort (bcrypt + JWT, Magic Link entfernt)
- [x] Supabase Migration komplett (kunden, bestellungen, artikel_cache)
- [x] Sanity Webhook Artikel-Cache-Sync (api/webhooks/sanity-artikel)
- [x] Resend Mail-Versand aktiv (Kill-Switch, Whitelist, Daily Limit 200)
- [x] AGB vorhanden

### toolradar
- [x] SSR auf /tools implementiert
- [x] LinkedIn Auto-Posting via Sanity Webhook + Cron-Fallback
- [x] Admin Social Posts Tab mit Copy-Buttons
- [x] Quality Gate + Audit-System (3-stufig, KI-Bewertung)
- [x] Haftungs-Disclaimer fuer Tool-Ratings (8 Stellen)
- [x] ToolRadar DSGVO-Audit abgeschlossen
- [x] Distribution-Strategie ohne persoenliches LinkedIn
- [x] 5 Outreach-Mails verschickt
- [x] Blog Artikel 3+4

---

## MANUELLE SCHRITTE (kein Code)

- [ ] Sanity Read Token erstellen: sanity.io → Projekt → API → Tokens → Viewer → auf Vercel als SANITY_READ_TOKEN
- [ ] CRON_SECRET auf Vercel setzen (meyso-website)
- [ ] GitHub Template Repo markieren: meyso-kmu-template → Settings → Template repository
- [ ] Ersten Test-Kunden provisionieren und End-to-End testen
- [ ] PAGESPEED_API_KEY (optional): Google Cloud Console
- [ ] Exposed Keys rotieren falls .env.local committed war
- [ ] AVVs pruefen + aktivieren: Vercel, Sanity, Resend (Online-DPAs)
- [ ] Google Business Profile: Bilder hochladen + verifizieren
