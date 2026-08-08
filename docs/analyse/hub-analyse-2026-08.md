# Deep-Analyse Meyso Agency Hub

**Erhebungsdatum:** 08.08.2026
**Phase:** 0 (Bestandsaufnahme, read-only)
**Analysebasis:** origin/main `e6c04e3`, Live-Daten aus Sanity `vwmo63eu` und Supabase `zeqojkwflkkeahqwddyy`, Vercel-Team `businessfabians-projects`, GitHub `businessfabian`
**Status:** Es wurde nichts geaendert, nichts geloescht, keine Daten geschrieben. Einziger Schreibvorgang ist dieses Dokument.

---

## Gesamturteil in drei Saetzen

Der Betrieb hat kein Werkzeugproblem, sondern ein Fuehrungsproblem in den Daten: dieselbe Information liegt an bis zu vier Orten, und in keinem Fall ist verbindlich festgelegt, welcher davon gilt.
Die sichtbare Folge ist ein Admin mit 29 Routen, dessen zentrale Verknuepfung zwischen Kunde und Projektkonfiguration strukturell nicht greifen kann, dessen Kundenanlage in ein anderes System schreibt als die Kundenliste liest, und in dem sechs im Code referenzierte Datenbanktabellen ueberhaupt nicht existieren.
Die Automationen laufen technisch, liefern aber teilweise seit Monaten keine neue Erkenntnis mehr, weil ihre Eingangsdaten nicht gepflegt werden.

---

## Preflight: tatsaechliche Zugaenge

| Zugang | Status | Belegter Umfang | Luecke |
|---|---|---|---|
| Repos unter `/Users/fabianmeyer/dev` | Voll | 11 Git-Repos gelesen, siehe Landkarte | CLAUDE.md nennt Windows-Pfade `D:\dev\...`, tatsaechlich macOS `/Users/fabianmeyer/dev`. Pfadtabelle veraltet |
| GitHub CLI | Voll | Account `businessfabian`, Scopes `gist, read:org, repo, workflow`. Actions-Historie und Logs lesbar | Keine |
| Vercel CLI | Voll | Eingeloggt als `businessfabian`, Team `businessfabians-projects`, 10 Projekte, Env-Namen lesbar | Keine |
| Sanity `vwmo63eu` (meyso) | Voll lesend und schreibend | `SANITY_WRITE_TOKEN` aus `.env.local`, Dataset `production`, alle Dokumenttypen und Inhalte abgefragt | Token ist ein Write-Token, es wurde ausschliesslich lesend verwendet |
| Supabase `zeqojkwflkkeahqwddyy` (meyso) | Voll (Service-Role) | `SUPABASE_SERVICE_ROLE_KEY` aus `.env.local`, 24 Tabellen ueber PostgREST inventarisiert, Zeilenzahlen und Stichproben gelesen | Nur lesend verwendet |
| Supabase CLI | Teilweise | `supabase projects list` zeigt **nur** `halveo-production` (`owfxppwssyxohqlaoqve`, Org `pmnafuxfwlahprnuhamm`) | Das Meyso-Projekt `zeqojkwflkkeahqwddyy` erscheint **nicht** in der CLI-Liste. Es liegt unter einem anderen Account oder einer anderen Organisation. Wer welche Supabase-Organisation besitzt, ist aus dem System heraus nicht feststellbar |
| Sanity CLI | Nicht vorhanden | Global nicht installiert | Projektliste und Token-Rechte pro Projekt nicht auflistbar. Zugriff erfolgte ueber die HTTP-API |
| Sanity-Projekte der Kundenrepos | Luecke | Nur `cbnefaat` (sq-schmidt) aus lokaler `.env.local` belegbar | Hirmax und ToolRadar haben ein `/studio`, aber keine lokale `.env.local`. Deren Sanity-Projekt-IDs und Token-Rechte sind nicht belegbar |
| Supabase der Kundenrepos | Luecke | Hirmax und Villa Nina sprechen eigene Tabellenlandschaften an (aus dem Code belegt) | Keine lokalen `.env.local`, daher keine Projekt-Refs. Anzahl und Besitz der Supabase-Projekte insgesamt bleibt offen |
| Admin-Login meyso.de | Nicht getestet | Zugangsdaten liegen mir nicht vor, ein Login wurde nicht versucht | Alle Aussagen zum Admin stammen aus Code, Live-Datenbanken und anonymen HTTP-Abrufen, nicht aus einer eingeloggten Sitzung |
| Vercel MCP / Figma MCP | Nicht autorisiert | Beide Server melden fehlende Authentifizierung | Fuer diese Analyse nicht benoetigt, CLI reichte aus |

**Nicht umgangene Luecken:** Die Supabase-Organisationsstruktur und die Sanity-Projekt-IDs der Kundenrepos konnten nicht ermittelt werden. Beide Punkte sind unten in der Landkarte als offen gekennzeichnet und nicht durch Vermutungen ersetzt.

---

## 0. Systemlandkarte

### 0.1 Repos und ihr Deployment

| Repo (lokal) | Vercel-Projekt | Produktionsdomain | Oberflaechen | Datenbanken und Dienste | Letzter Commit |
|---|---|---|---|---|---|
| `meyso/meyso-website` | `meyso-website` | meyso.de | Oeffentliche Site, `/admin` (29 Routen), `/portal` (7 Routen), `/studio` | Sanity `vwmo63eu`, Supabase `zeqojkwflkkeahqwddyy`, Resend, Redis, GA4, GSC, Gemini, UptimeRobot, GitHub-API, Vercel-API | 08.08.2026 `11aab82` |
| `meyso/meyso-os` | **keines** | keine | keine (reines Doku- und Automationsrepo) | GitHub Actions, Gemini, PageSpeed, GSC, ntfy | 08.08.2026 `e6c04e3` |
| `meyso/meyso-kmu-template` | **keines** | keine | Template: Site, `/admin`, `/admin-login`, `/studio` | Sanity (pro Fork), Resend | 20.04.2026 `514d2ba` |
| `clients/hirmax-scheibenbilder` | `hirmax-scheibenbilder` | www.hirmax-scheiben.de | Site, `/admin`, `/konto`, `/bestellungen`, `/studio` | Eigenes Sanity (ID nicht belegbar), eigenes Supabase mit 12 Tabellen (`bestellungen`, `kunden`, `registrierungen`, ...) | 23.04.2026 `0d25957` |
| `clients/sq-schmidt-website` | `sq-schmidt-website` | www.sq-sv.de | Site, `/admin`, `/studio` | Sanity `cbnefaat`, kein Supabase | 19.04.2026 `f74c801` |
| `clients/problemlos-gmbh` | `problemlos-gmbh` | problemlos-gmbh.vercel.app | Site, `/admin`, `/admin-login`, `/studio` | **Sanity `vwmo63eu`, also das Meyso-eigene Projekt** (`MEYSO_SANITY_PROJECT_ID` + Read-Token) | 15.05.2026 `98678d5` |
| `clients/villa-nina-sardinia` | `villa-nina-sardinia` | villa-nina-sardinia.com | Site (i18n), Actions-API | Eigenes Supabase mit 18 Tabellen (`apartments`, `bookings`, ...), kein Sanity | 30.07.2026 `3274550` |
| `products/toolradar` | `toolradar` | toolradar.de | Site, Studio | Eigenes Sanity (Typen `tool`, `article`) | 17.04.2026 `e8ccfb5` |
| `products/halveo` | `halveo` | *.halveo.de | App | Supabase `halveo-production` | 06.08.2026 `180099ab` |
| `products/halveo-web` | `halveo-web` | halveo.de | Marketing-Site | Supabase `halveo-production` | 06.08.2026 `4fa92eb` |
| `products/solarcoach` | **keines** | keine | Monorepo web + agent | offen | 21.04.2026 `6711e69` |
| **nicht lokal vorhanden** | `meyso-demo-schreinerei` | meyso-demo-schreinerei.vercel.app | Demo | offen | vor 95 Tagen aktualisiert |
| **nicht lokal vorhanden** | `testfirma-gmbh` | keine Produktion | Testrest | offen | vor 95 Tagen aktualisiert |

### 0.2 Die Frage nach meyso.de/admin/login

**Eindeutig beantwortet: `/admin/login` wird vom Repo `meyso-website` ausgeliefert.**

Belege:

- `meyso-os` besitzt kein `app/`-Verzeichnis und kein Vercel-Projekt. Das gesamte Repo besteht aus 75 Dateien: TASKS.md, Doku, Skripte, GitHub-Workflows. Es liefert keine Oberflaeche aus.
- `meyso-website/app/admin/login/page.tsx` existiert, `vercel project ls` bindet `meyso-website` an `meyso.de`.

**Es gibt also keinen doppelten Admin-Code zwischen den beiden Repos.** Die Rollenverteilung ist sauber: meyso-os liefert Daten (TASKS.md, workflows.json) ueber die GitHub-Raw-URL, meyso-website liest sie und stellt sie dar.

**Altbestand gibt es dennoch, aber innerhalb von meyso-website:**

- `app/admin/AdminClient.tsx` (833 Zeilen) ist ein vollstaendiges aelteres Admin-Dashboard mit eigenen Tabs fuer Anfragen, Kunden, Leistungen, Portfolio, Bewertungen, Blog, Preise. Die Datei wird **nirgends importiert** (verifiziert per Grep ueber `app/`). Sie ist toter Code.
- Aktiv ist `app/admin/CockpitClient.tsx` (472 Zeilen), eingebunden in `app/admin/page.tsx:3`.

---

## 1. Datenarten-Inventar

Jede Zeile listet **alle** Orte, an denen die Datenart heute liegt. Fett markiert ist der Ort, der faktisch gelesen wird.

| Datenart | Sanity `vwmo63eu` | Supabase `zeqojkwflkkeahqwddyy` | Datei / Code | Sonstiges |
|---|---|---|---|---|
| **Kunden (Stammdaten)** | `kunde` (3 Dok.), `client` (3 Dok.) | **`clients` (6 Zeilen)** | Schemata `sanity/schemaTypes/kunde.ts`, `client.ts` | - |
| **Kunden (Projektkonfig)** | **`clientConfig` (1 Dok.)** | `client_domains` (2 Zeilen) | `sanity/schemaTypes/clientConfig.ts` | Vercel-Env pro Kundenprojekt |
| **Projekte (intern)** | **`projekt` (5 Dok.)** | `deals` (4 Zeilen) | - | - |
| **Projekte (oeffentlich)** | **`portfolioItem` (7 Dok.)** | - | **`app/projekte/page.tsx:28` `STATIC_PROJEKTE`**, `app/projekte/hirmax/page.tsx`, `app/projekte/sq-schmidt/page.tsx`, `lib/projekte.ts` | - |
| **Aufgaben / Backlog** | `backlogTask` (14 Dok., **nicht im Schema registriert**) | - | **`meyso-os/TASKS.md` (655 Zeilen, 165 offen, 116 erledigt)** | GitHub Contents-API als Schreibpfad |
| **Leads** | `anfrage` (0 Dok.) | `leads` (**0 Zeilen**), **`clients` mit `status='lead'` (3 Zeilen)**, `crawl_history` (71 Zeilen), `leads_sequences` (3), `leads_sequences_logs` (5) | - | - |
| **Angebote und Rechnungen** | `rechnung` (0 Dok.), `preispaket` (0 Dok.), Sub-Array `kunde.dokumente` | **`invoices` (10 Zeilen)**, **`client_contracts` (5 Zeilen)**, `documents` (0 Zeilen) | `lib/generate-invoices.ts`, `lib/pdf/richtpreis.ts`, `lib/invoice-settings.ts` | PDF-Ablage ueber `invoices.pdf_pfad` |
| **Ausgaben** | - | **`expenses` (7 Zeilen)** | - | - |
| **Zugaenge und Secrets** | `clientConfig.infra` (Repo, Vercel-ID, Deploy-Hook) | **`clients.portal_password` im Klartext** | `.env.local` je Repo | **Vercel-Env je Projekt (Fuehrung)**, GitHub Secrets |
| **Reports (SEO)** | - | - | **`meyso-os/docs/seo/project-status/*.md` (5 Dateien), `docs/seo/reports/*.md`** | GSC, PageSpeed |
| **Reports (Wartung / Health)** | `lighthouseReport` (0 Dok.), `healthCheckResult` (1 Dok., **nicht im Schema registriert**) | `lighthouse_reports` (0 Zeilen), `uptime_monitors` (4), `uptime_events` (0), `backup_logs` (24) | Code referenziert `health_check_results`, **Tabelle existiert nicht** | UptimeRobot-API |
| **Briefings** | - | - | **`meyso-os/docs/autonomous-workflows/briefings/` (rund 130 Dateien)**, `workflows.json` | - |
| **Termine** | - | `reminders` (**0 Zeilen**), `client_contracts.next_invoice_due` | - | Kein Kalendersystem angebunden |
| **Website-Inhalte** | **`blogPost` (2), `leistung` (2), `bewertung` (2), `settings` (1)** | `images` referenziert, **Tabelle existiert nicht** | `data/local-seo/*.ts` (7 Regionsseiten als Code) | Supabase Storage fuer `portfolioItem.imageUrl` |
| **Logs und Verbrauch** | `systemLog` (0), `aiUsage` (4) | `system_logs` (2), `ai_usage` (1), `activity_log` (0), `client_activities` (0) | - | - |
| **Portal-Zugaenge** | `portalAnfrage` (0), `pushSubscription` (0), `adminPushSubscription` (0) | `portal_users` (**0 Zeilen**), `portal_anfragen` (0), `admin_push_subscriptions` (0) | - | - |

### 1.1 Sechs im Code referenzierte Tabellen existieren nicht

Ueber PostgREST verifiziert, jeweils HTTP 404 mit `PGRST205`:

| Referenzierte Tabelle | Aufrufstelle | Folge |
|---|---|---|
| `health_check_results` | `app/admin/page.tsx` | Health-Kachel im Cockpit bleibt leer |
| `app_settings` | `app/admin/rechnung-vorschau/page.tsx` | Rechnungsvorschau ohne Absenderdaten |
| `referrals` | `app/admin/analytics/page.tsx` via `/api/admin/referrals` | Empfehlungsbereich ohne Daten |
| `push_subscriptions` | `lib/push.ts` und Portal | Kunden-Push nicht funktionsfaehig |
| `images` | `/api/admin/upload` | Upload-Register ohne Eintraege |
| `backups` | `/api/admin/backup` | Nur `backup_logs` wird real geschrieben |

Es existieren Migrationsdateien fuer `app_settings` (`supabase/migrations/20260412_app_settings.sql`) und `referrals` (`20260407_referrals.sql`). Die Migrationen sind also geschrieben, aber offensichtlich nie ausgefuehrt worden. Das Migrationsverzeichnis ist nicht der Stand der Datenbank.

### 1.2 Zehn von 24 Supabase-Tabellen sind leer

`leads`, `portal_users`, `portal_anfragen`, `client_activities`, `activity_log`, `lighthouse_reports`, `uptime_events`, `reminders`, `documents`, `admin_push_subscriptions`.

Besonders folgenreich: **`leads` ist leer**, obwohl `/admin/anfragen` ausschliesslich daraus liest und `app/admin/layout.tsx:26` die Badge-Zahl der Sidebar daraus zieht. Die Badge steht damit dauerhaft auf null. Die realen Leads liegen stattdessen als `clients` mit `status='lead'` (Problemlos, Held, Ziegler Holzarbeiten).

---

## 2. Doppelpflege-Matrix

Kernstueck der Analyse. Jede Zeile ist eine Information, die an mehr als einem Ort existiert.

| # | Information | Ort A | Ort B | Ort C | Faktisch fuehrend | Laufen sie auseinander? Beleg |
|---|---|---|---|---|---|---|
| **D1** | Kundenstammdaten | Sanity `kunde` (3) | Sanity `client` (3) | Supabase `clients` (6) | **Supabase `clients`** | **Ja, dreifach.** `kunde` und `client` sind feldgleiche Zwillinge (beide `title: "Clients"`, beide mit `firma`, `status`, `vertragsWert`, `umsatzGesamt`, `ersterKontakt`, `letzterKontakt`). Keiner der beiden Typen wird per `_type ==` im Code gelesen, verifiziert per Grep. Sanity `kunde` enthaelt eine **Dublette mit Tippfehler**: `SQ Schmidt Qualitätssicherung` (`01vFdk7yQ57snxOwRvkCfi`) und `SQ Qulitätssicherung ` (`5d99b070-0976-4590-b59b-a328915d1ef9`) |
| **D2** | Kundenstatus | Sanity `kunde.status` = `"Wartung"` (alle 3) | Sanity `client.status` = `abgeschlossen` / `aktiv` / `aktiv` | Supabase `clients.status` = `live` / `live` / `aktiv` / `lead` / `lead` / `lead` | **Supabase** | **Ja.** Hirmax steht in Sanity `client` auf `abgeschlossen`, in Supabase auf `live` mit **aktivem Vertrag** (`client_contracts`, 18 EUR monatlich, naechste Rechnung 01.09.2026) und bezahlter Rechnung `2026-011` vom 15.08.2026. Zusaetzlich nutzt `kunde.status` den Wert `"Wartung"`, der in der Optionsliste des Schemas (`lead`, `aktiv`, `pausiert`, `abgeschlossen`) gar nicht vorkommt |
| **D3** | Kundenname | Sanity `client`: `Hirmax-Scheiben`, `SQ SV`, `Problemlos GmbH ` | Supabase: `Hirmax Scheibenbilder`, `SQ Schmidt Qualitätssicherung`, `Problemlos` | Sanity `kunde`: `SQ Schmidt Qualitätssicherung`, `Meyso` | **Supabase** | **Ja, jeder Kunde traegt drei Schreibweisen.** Zwei Namen enden auf ein Leerzeichen (`Problemlos GmbH `, `SQ Qulitätssicherung `). Ein Abgleich ueber den Namen ist damit unmoeglich |
| **D4** | **Kunde zu Projektkonfiguration** | Sanity `clientConfig.client._ref` = `Rq0BBCv7E5b6rI6Wk72VRr` (Sanity-ID) | Supabase `clients.id` = `b2b0797d-7fa4-4cfb-8bf8-a6f8494f3c0a` (UUID) | - | **Keiner, die Verknuepfung ist gebrochen** | **Ja, strukturell.** `app/admin/clients/ClientsClient.tsx:131` baut `configMap` mit dem **Sanity**-Schluessel `c.client?._id`, `Zeile 264` sucht darin mit der **Supabase**-UUID `c._id`. Zwei verschiedene ID-Raeume. Der Treffer kann bei keinem Kunden zustandekommen. Konkret: die einzige existierende `clientConfig` (`problemlos-gmbh`) ist in der Kundenliste unsichtbar, Deploy-Status und Repo-Link bleiben leer |
| **D5** | Interne Projektakte | Sanity `projekt` (5) | Supabase `deals` (4) | Supabase `client_contracts` (5) | **Uneinheitlich** | **Ja.** `projekt.budget` traegt 10, 1, 100 und 1 EUR, das sind offensichtlich Platzhalter. Drei von fuenf `projekt`-Dokumenten haben `client = null`, obwohl das Feld als `validation: R.required()` deklariert ist (Villa Nina Sardinia, Halveo, Problemlos GmbH). Die Pflicht greift nur im Studio-Formular, nicht bei API-Schreibvorgaengen |
| **D6** | **Oeffentliche Projekte** | Sanity `portfolioItem` (7) | `app/projekte/page.tsx:28` `STATIC_PROJEKTE` | `app/projekte/hirmax/page.tsx`, `app/projekte/sq-schmidt/page.tsx` (handgeschriebene Seiten) | **Sanity, mit Code-Fallback** | **Ja.** `page.tsx:155` nutzt Sanity nur wenn nicht leer, sonst `STATIC_PROJEKTE`, `Zeile 161` faellt im Fehlerfall ebenfalls darauf zurueck. Damit existiert eine zweite, nie sichtbare Projektliste im Code. Zusaetzlich divergiert `portfolioItem` "Villa Nina Sardinien" mit `liveUrl = https://villa-nina-sardinia.vercel.app/` gegen die reale Produktionsdomain `villa-nina-sardinia.com` laut Vercel |
| **D7** | Projekt-Slugs | Sanity `portfolioItem.slug` (`hirmax-scheibenbilder`, `sq-schmidt-qualit-tssicherung`) | `lib/projekte.ts` `KANONISCHE_SLUGS` | `next.config.ts` Redirects | **`lib/projekte.ts`** | **Ja, bewusst und dokumentiert.** Die Datei erklaert die Umsetzung als offenen Punkt aus Runbook E5. Ein kaputt transliterierter Slug (`qualit-tssicherung`) wird per Mapping und 308-Redirect ueberdeckt statt korrigiert |
| **D8** | **Aufgaben** | `meyso-os/TASKS.md` (165 offen) | Sanity `backlogTask` (14 Dok.) | Admin `/admin/tasks` (Anzeige und Toggle) | **TASKS.md** | **Ja.** `backlogTask` ist in `sanity/schemaTypes/index.ts` **nicht registriert**, die 14 Dokumente sind im Studio unsichtbar und werden von keiner Query gelesen. Alle 14 stehen auf `status: erledigt`, es ist ein eingefrorener Altbestand aus dem 29./30.03.2026 |
| **D9** | Aufgaben-Darstellung | TASKS.md-Sektionen `🔴 P0`, `🟠 P1`, `🟡 P2`, `🟢 P3` | `app/admin/tasks/page.tsx:28` `SECTION_COLORS` erwartet `KRITISCH`, `RECHTLICH`, `WICHTIG`, `VERBESSERUNGEN` | - | TASKS.md | **Ja.** Die Farbzuordnung matcht per `title.toUpperCase().includes(key)`. Von neun Sektionen treffen nur noch `GEPARKT`, `LANGFRISTIG`, `ERLEDIGT` und `MANUELLE`. Die vier Prioritaetssektionen, also der taegliche Arbeitsbereich, fallen auf den Grau-Default |
| **D10** | Stand-Datum des Backlogs | TASKS.md Zeile 3: `Stand: 2026-04-30` | Realer letzter inhaltlicher Task-Commit: 31.07.2026 (`54ea07f`) | Admin liest `Stand:` und zeigt es an | TASKS.md | **Ja.** Das Dashboard weist seit ueber drei Monaten ein falsches Standdatum aus |
| **D11** | Leads | Supabase `leads` (**0 Zeilen**) | Supabase `clients` mit `status='lead'` (3) | Supabase `crawl_history` (71), `leads_sequences` (3) | **`clients`** | **Ja.** `/admin/anfragen` und die Sidebar-Badge lesen `leads` und zeigen daher immer null, obwohl mit Held, Problemlos und Ziegler drei offene Leads existieren |
| **D12** | Vertragswert | Sanity `client.vertragsWert` = 15 (Hirmax und SQ SV) | Supabase `client_contracts.preis` = 18 (Hirmax), 192 jaehrlich (SQ) | Sanity `kunde.vertragsWert` = null | **`client_contracts`** | **Ja, mit Zahlenbeleg.** Sanity sagt 15 EUR fuer Hirmax, der aktive Vertrag sagt 18 EUR monatlich. Fuer SQ Schmidt sagt Sanity 15 EUR monatlich, real laeuft ein Jahresvertrag ueber 192 EUR (16 EUR im Monatsaequivalent) |
| **D13** | Kundenportal-Passwort | Supabase `clients.portal_password` **im Klartext** | `lib/password.ts` mit `verifyPassword` und `hashPassword` | - | Klartextfeld | **Ja.** Die Spalte enthaelt fuer SQ Schmidt ein lesbares Passwort, und `app/admin/clients/page.tsx` selektiert `portal_password` in die Client-Komponente hinein. Es existiert parallel eine Hash-Infrastruktur, die dafuer nicht genutzt wird |
| **D14** | Infrastrukturdaten | Sanity `clientConfig.infra` (Repo, Vercel-ID, Deploy-Hook, Domain) | Supabase `client_domains` (2 Zeilen, dieselben Felder) | Vercel selbst | **Vercel** | **Ja.** Zwei Register fuer dieselbe Information, beide unvollstaendig: `clientConfig` existiert fuer genau einen von sechs Kunden, `client_domains` fuer zwei |
| **D15** | Content-Quelle Problemlos | `clients/problemlos-gmbh/.env.local`: `MEYSO_SANITY_PROJECT_ID` = `vwmo63eu` | Meyso-eigenes Sanity-Projekt | - | Meyso-Projekt | **Grenzueberschreitung.** Ein Kundenprojekt liest aus dem Sanity-Projekt der Agentur. Agenturdaten (Kundenakten, Umsaetze, Portfolio) und Kundencontent liegen im selben Dataset |

---

## 3. Admin-Dashboard: alle Routen

29 `page.tsx` unter `app/admin/`. Die Sidebar (`app/admin/components/Sidebar.tsx`) verlinkt davon 22.

| # | Route | Zweck | Datenquelle | Schreibpfad | Zustand | Braucht der Betrieb sie? |
|---|---|---|---|---|---|---|
| 1 | `/admin` | Cockpit | Supabase `leads`, `clients`, `client_contracts`, `invoices`, `reminders`, `health_check_results`; Sanity `projekt`, `clientConfig`; GitHub TASKS.md | keiner | **Teilweise defekt**: `health_check_results` existiert nicht, `reminders` wird per `.is("dismissed_at", null)` gefiltert, diese Spalte gibt es nicht, `leads` ist leer | **Ja**, als einziger Startpunkt |
| 2 | `/admin/login` | Anmeldung | `ADMIN_PASSWORD` | Cookie | aktiv | Ja |
| 3 | `/admin/clients` | Kundenliste | Supabase `clients` + `client_contracts`, Sanity `clientConfig` | keiner | **Aktiv, aber Config-Spalte tot** (D4) | **Ja**, Kernansicht |
| 4 | `/admin/clients/new` | Provisionierung | Formular | Sanity `client` + `clientConfig`, GitHub-Repo, Vercel-Projekt | **Aktiv, aber schreibt am fuehrenden Speicher vorbei** (Kap. 5) | Ja, muss aber korrigiert werden |
| 5 | `/admin/clients/[slug]` | Konfig-Detail nach Slug | Sanity `clientConfig`, Supabase `clients`, `invoices`, `client_contracts` | Sanity | aktiv | **Zusammenlegen** mit 7 |
| 6 | `/admin/clients/[slug]/config` | Konfig bearbeiten | Sanity `clientConfig` | Sanity | aktiv | Zusammenlegen |
| 7 | `/admin/kunden/[id]` | Kundendetail nach UUID | Supabase `clients`, `invoices`, `deals`, `client_contracts` | `/api/admin/clients/[id]` | aktiv, Ziel der Klicks aus 3 | **Zusammenlegen** mit 5. Zwei Detailseiten fuer denselben Kunden unter zwei ID-Raeumen |
| 8 | `/admin/projekte` | Projektliste | Sanity `projekt`, Supabase `clients` | Sanity | aktiv, Daten unvollstaendig (D5) | Ja, nach Bereinigung |
| 9 | `/admin/anfragen` | Leads | Supabase `leads` | Supabase | **faktisch tot**, Tabelle leer (D11) | Ja, muss auf `clients` umgehaengt werden |
| 10 | `/admin/finanzen` | Rechnungen | Supabase `invoices`, `clients`, `deals`, `client_contracts` | ja | **aktiv und belastbar**, 10 Rechnungen, 5 Vertraege | **Ja**, staerkster Bereich |
| 11 | `/admin/finanzen/analytics` | Auswertung | `/api/admin/finanzen/analytics`, `forecast`, `expenses` | keiner | aktiv | Ja |
| 12 | `/admin/finanzen/expenses` | Ausgaben | Supabase `expenses` (7) | ja | aktiv | Ja |
| 13 | `/admin/finanzen/forecast-v2` | Prognose v2 | `/api/admin/finanzen/forecast` | keiner | **verwaist**, kein einziger Link im Code | **Weg** oder 11 ersetzen |
| 14 | `/admin/rechnung-vorschau` | Rechnungsvorschau | Supabase `app_settings` | keiner | **defekt**, Tabelle existiert nicht | Zusammenlegen mit 10 |
| 15 | `/admin/wartung` | Wartung | `/api/admin/wartung`, `health-check`, `lighthouse-run`, `template-version` | ja | aktiv, `lighthouse_reports` ist leer | Ja |
| 16 | `/admin/infrastruktur` | Infrastruktur | `/api/admin/infrastruktur` | keiner | aktiv | Zusammenlegen mit 15 |
| 17 | `/admin/api-usage` | KI-Kosten | Supabase `ai_usage` (1 Zeile) | keiner | aktiv, nahezu ohne Daten | Zusammenlegen mit 15 |
| 18 | `/admin/analytics` | Website-Analytics | GA4, `/api/admin/referrals` | keiner | **teilweise defekt**, `referrals` existiert nicht | Behalten, Referral-Teil entfernen |
| 19 | `/admin/content` | Portfolio und Blog | Sanity `portfolioItem`, `blogPost` | Sanity | aktiv | **Doppelt zum Studio.** Zusammenlegen |
| 20 | `/admin/leistungen` | Leistungen | Sanity `leistung` (2) | Sanity | aktiv | **Doppelt zum Studio.** Weg |
| 21 | `/admin/outreach` | Akquise | `/api/admin/outreach` | ja | aktiv | Ja |
| 22 | `/admin/outreach/crawler` | Crawler | Supabase `crawl_history` (71) | ja | **aktiv und mit echten Daten** | Ja |
| 23 | `/admin/toolradar` | ToolRadar-Kennzahlen | Fremdes Sanity ueber `TOOLRADAR_SANITY_PROJECT_ID` und `TOOLRADAR_SANITY_TOKEN` | keiner | **defekt**: beide Variablen sind auf Vercel **nicht gesetzt**, `getToolradarStats()` gibt `null` zurueck | Entscheiden: Env setzen oder weg |
| 24 | `/admin/tasks` | Backlog | GitHub Raw TASKS.md | GitHub Contents-API | aktiv, Farbschema veraltet (D9) | **Ja**, meistgenutzte Ansicht |
| 25 | `/admin/seo` | SEO-Monitor | `/api/admin/seo/github` (liest meyso-os) | keiner | aktiv, Datenqualitaet leidet (Kap. 4) | Ja |
| 26 | `/admin/workflows` | Workflow-Uebersicht | `workflows.json` aus meyso-os | Trigger via GitHub | aktiv | Ja |
| 27 | `/admin/workflows/[id]/briefings` | Briefing-Liste | meyso-os | keiner | aktiv | Ja |
| 28 | `/admin/workflows/[id]/briefings/[date]` | Einzelbriefing | meyso-os | keiner | aktiv | Ja |
| 29 | `/admin/einstellungen` | Passwort, Rechnungsdaten | `/api/admin/settings/invoice`, `change-password` | ja | aktiv | Ja |

**Zusatzbefund Zugriffsschutz:** Es existiert **keine `middleware.ts`**. Von 29 Admin-Seiten enthalten nur zwei einen eigenen Guard (`login`, `clients/[slug]/config`). `app/admin/layout.tsx:41` prueft zwar das Cookie `admin_auth`, aber nur um die Shell wegzulassen, nicht um den Zugriff zu verweigern. Ein anonymer Abruf von `https://meyso.de/admin` und `https://meyso.de/admin/finanzen` liefert HTTP 200 mit **byte-identischem** Inhalt (22886 Bytes, MD5 `441221ba52cef5c464066ac878881732`), der **keine Kundendaten** enthaelt. Es ist also aktuell kein Datenabfluss nachweisbar, aber der Schutz ist nicht als Serverweiche gebaut, sondern haengt an einer einzelnen Layout-Verzweigung. Das ist einen eigenen, gezielten Sicherheits-Check wert.

---

## 4. Automationen

Alle fuenf GitHub-Workflows in `businessfabian/meyso-os` sind `active`. Cron-Jobs auf Vercel gibt es **keine**: `meyso-website/vercel.json` ist die leere Datei `{}`.

| Workflow | Zeitplan | Formaler Status | **Nachgewiesener Effekt** | Meldung |
|---|---|---|---|---|
| **Morning Brief** | taeglich 07:30 UTC | gruen, zuletzt 08.08.2026 `31247609370` | **Datei entsteht, Erkenntnis nicht.** Commit `e6c04e3` schreibt `briefings/2026-08-08-morning.md`. Inhaltlich sind die Top-3-Tasks vom 08.08. **identisch** mit denen vom 02.06.2026: dieselbe Daniel-Mail, derselbe Smoke-Test H-6/H-1, dieselbe Impressum-Telefonnummer. Ueber zwei Monate taeglich derselbe Brief, weil die P0-Sektion der TASKS.md nicht bewegt wird | ntfy `meyso-dave`, Prioritaet low |
| **News Scout** | montags 08:00 UTC | gruen, zuletzt 03.08.2026 | Effekt vorhanden: `briefings/2026-08-03-news.md` mit 38 Zeilen neu | ntfy `meyso-dave` |
| **Weekly Codebase Health** | montags 08:30 UTC | gruen, zuletzt 03.08.2026 | Effekt vorhanden: `briefings/2026-08-03-health.md`. Einschraenkung: der Checkout von meyso-website laeuft mit `continue-on-error`, Lint und Audit koennen also lautlos fehlen | ntfy `meyso-dave` |
| **Dependency Updates** | sonntags 20:00 UTC | **rot**, zuletzt 02.08.2026 `30766458129`, davor 26.07.2026 ebenfalls rot | **Kein Effekt.** Der Schritt `Checkout` scheitert fuer `toolradar` und `villa-nina-sardinia`, alle Folgeschritte werden uebersprungen. Ursache liegt beim `GH_PAT` (Reichweite oder Gueltigkeit). Seit mindestens zwei Wochen entstehen keine Update-PRs | ntfy `meyso-dave`, Prioritaet high. Die Meldung geht raus, wurde aber offenbar nicht aufgegriffen |
| **SEO Monthly Monitor** | 1. des Monats 09:00 UTC | **rot**, zuletzt 01.08.2026 `30696261341`. Mai bis Juli waren gruen | **Halber Effekt, und das ist die gefaehrlichere Variante.** Der Schritt `Run SEO Check` endet mit Exit-Code 1, Ursache im Log: `OAuth token refresh failed: 400 invalid_grant`, viermal in Folge. Das `GSC_REFRESH_TOKEN` ist ungueltig. Der Commit-Schritt laeuft dennoch (`if: always()`) und hat `f6e9f08` erzeugt. Ergebnis: `docs/seo/reports/2026-08.md` existiert und sieht vollstaendig aus, enthaelt aber in der Spalte "GSC Klicks (28d)" fuer **alle fuenf Projekte** nur einen Gedankenstrich, AI-Visibility steht durchgehend auf `skipped`. Ein Report, der so aussieht wie ein Report, aber die Haelfte der Aussage verloren hat | Nur ueber `NTFY_TOPIC`-Secret, im Workflow selbst ist keine Fehler-Benachrichtigung definiert |

**Mail-Sequenzen-Cron:** Die Route `app/api/sequences/process/route.ts` existiert und `SEQUENCE_CRON_SECRET` ist auf Vercel gesetzt, aber **es gibt keinen Cron-Eintrag**, der sie aufruft (`vercel.json` ist leer). Dasselbe gilt fuer `/api/cron/backup`, `/api/cron/invoices`, `/api/cron/lighthouse` und `/api/cron/uptime`. Die Backup-Historie bestaetigt das: `backup_logs` zeigt Laeufe am 02.05., 13.05. und 15.07.2026, also unregelmaessig und offensichtlich manuell ausgeloest, nicht taeglich. **Vier Cron-Routen und die Sequenz-Verarbeitung sind gebaut, aber nicht terminiert.**

---

## 5. Onboarding-Pfad, Praxistest

### 5.1 Was `/admin/clients/new` heute tatsaechlich tut

Aus `app/api/admin/provision-client/route.ts` (267 Zeilen), Schritt fuer Schritt:

| Schritt | Aktion | Zielort |
|---|---|---|
| 1 | `writeClient.create({_type: "client", ...})` | **Sanity** `client` |
| 2 | GitHub-Repo aus `meyso-kmu-template` generieren | GitHub |
| 3 | Vercel-Projekt anlegen, Env setzen, Deploy-Hook erzeugen | Vercel |
| 4 | `writeClient.create({_type: "clientConfig", ...})` mit Referenz auf Schritt 1 | **Sanity** `clientConfig` |

**Der Bruch:** Es gibt keinen Schritt, der nach **Supabase `clients`** schreibt. Die Kundenliste `/admin/clients` liest aber genau daraus. Ein ueber den Assistenten angelegter Kunde erscheint danach **nicht** in der Kundenliste, hat keinen Vertrag, keine Rechnung und keinen Portal-Zugang. Er existiert nur in Sanity, wo er von keiner Query gelesen wird.

Der Beleg dafuer steht in den Daten: Problemlos ist der einzige Kunde, der je durch die Provisionierung lief. Ergebnis ist ein Sanity-`client` (`Rq0BBCv7E5b6rI6Wk72VRr`), eine Sanity-`clientConfig` (`problemlos-gmbh`) **und** ein separat von Hand angelegter Supabase-Eintrag (`b2b0797d-...`, angelegt 25.04.2026 um 14:42 Uhr, drei Minuten nach der Sanity-Config um 14:39 Uhr). Die Handarbeit direkt nach der Automatik ist im Zeitstempel sichtbar.

### 5.2 Vollstaendige Anlage eines Kunden heute

| # | Schritt | Ort | Automatisch? | Vergessbar? | Dauer |
|---|---|---|---|---|---|
| 1 | Assistent ausfuellen, Paket und Module waehlen | `/admin/clients/new` | - | - | 5 min |
| 2 | Sanity `client` anlegen | Sanity | ja | - | - |
| 3 | GitHub-Repo aus Template | GitHub | ja | - | 1 min |
| 4 | Vercel-Projekt, Env, Deploy-Hook | Vercel | ja | - | 2 min |
| 5 | Sanity `clientConfig` | Sanity | ja | - | - |
| 6 | **Supabase `clients` von Hand anlegen** | Supabase-Konsole oder SQL | **nein** | **hoch, sonst unsichtbar im Admin** | 5 min |
| 7 | **`client_contracts` anlegen** (Paket, Preis, Intervall, `next_invoice_due`) | Supabase | **nein** | **hoch, sonst keine Rechnung** | 5 min |
| 8 | **`client_domains` pflegen** | Supabase | **nein** | mittel | 3 min |
| 9 | **Portal-Passwort setzen** in `clients.portal_password` | Supabase | **nein** | mittel | 2 min |
| 10 | **`portal_users` verknuepfen** | Supabase | **nein** | hoch | 5 min |
| 11 | **Sanity `projekt` anlegen** und mit `client` verknuepfen | Studio | **nein** | **hoch, drei von fuenf haben heute keine Verknuepfung** | 5 min |
| 12 | **Custom Domain in Vercel** setzen, DNS beim Kunden | Vercel + Registrar | **nein** | mittel | 15 min plus Wartezeit |
| 13 | **Resend-Domain verifizieren** | Resend | **nein** | mittel | 10 min |
| 14 | **Tasks in TASKS.md** anlegen, Projekt-Sektion ergaenzen | meyso-os, Editor | **nein** | mittel | 5 min |
| 15 | **UptimeRobot-Monitor** anlegen | UptimeRobot | **nein** | mittel | 5 min |
| 16 | **`portfolioItem` anlegen** (falls Referenz) | Studio | **nein** | niedrig | 20 min |
| 17 | **SEO-Projektstatus** anlegen, `scripts/config/projects.json` in meyso-os ergaenzen | meyso-os | **nein** | mittel | 10 min |
| 18 | **Dependency-Updates-Matrix** um das neue Repo erweitern | `.github/workflows/dependency-updates.yml` | **nein** | hoch, faellt nie auf | 3 min |

**Ergebnis: 4 automatische Schritte, 13 manuelle. Rund 90 Minuten reine Arbeitszeit an sechs verschiedenen Oberflaechen** (Admin, Sanity Studio, Supabase-Konsole, Vercel, Resend, GitHub-Editor), **plus DNS-Wartezeit.** Das README des Templates verspricht "Neues Projekt in unter 30 Minuten lauffähig". Diese Zahl gilt fuer den Code, nicht fuer die Datenpflege.

### 5.3 Ziegler Holzarbeiten (Shop-Kontext, Bestandsseite)

**Stand im System heute:** Ein einziger Eintrag, angelegt am 08.08.2026 um 20:25 Uhr als Supabase `clients` mit `id 9ed98a4c-22cb-467d-9c82-a38552dde8ca`, `firma: "Ziegler Holzarbeiten"`, `status: "lead"`, `website: ""` (leer). Kein Eintrag in `crawl_history`, kein Sanity-Dokument, kein Repo, kein Vercel-Projekt, kein Vertrag.

**Was dem System fuer diesen Fall fehlt:**

1. **Kein Migrationspfad fuer Bestandsseiten.** Der Assistent kann nur "neues Repo aus Template". Fuer `ziegler-holzarbeiten.ch` mit vorhandener Seite gibt es weder ein Feld fuer die Bestands-URL noch einen Schritt fuer Inhaltsuebernahme oder Redirect-Planung. Das `clientConfig`-Schema hat kein Feld fuer eine abzuloesende Domain.
2. **Kein Shop-Paket.** `app/admin/clients/new/page.tsx:7-10` kennt vier Pakete: `website`, `portal`, `bestellportal`, `custom`. `bestellportal` ist als "wie Hirmax" beschrieben, also Bestellformular mit Admin-Uebersicht, kein Shop mit Warenkorb, Preisen, Versand oder Zahlung. Das KMU-Template enthaelt keinen Shop. Fuer einen echten Shop-Kontext existiert im Modulkatalog nichts, `custom` schaltet nur dieselben sieben Flags einzeln.
3. **Schweiz nicht vorgesehen.** `clientConfig.firma.land` hat `initialValue: "Deutschland"`, und es gibt die Felder `steuernummer`, `finanzamt` und `kleinunternehmer (§19 UStG)`. Fuer einen Schweizer Kunden fehlen MWST-Nummer, CHF als Waehrung und die Rechnungslogik. `MEYSO_STEUERNUMMER` ist ein einzelner deutscher Wert.
4. **Lead-Ansicht zeigt ihn nicht.** Ziegler steht in `clients`, `/admin/anfragen` liest `leads`. Der Lead ist im Admin nur ueber die Kundenliste sichtbar, nicht im dafuer gedachten Bereich.

### 5.4 Liza-Marie (kompletter Website-Neubau)

**Stand im System heute:** Kein Eintrag. Nicht in Supabase `clients`, nicht in `crawl_history`, nicht in Sanity, nicht in TASKS.md.

**Was dem System fuer diesen Fall fehlt:**

1. **Der Neubau ist der Standardfall, und genau dafuer ist der Assistent gebaut.** Technisch trifft er hier zu. Es bleiben aber die 13 manuellen Schritte aus 5.2, allen voran der Supabase-Eintrag, ohne den der Kunde im Admin unsichtbar bleibt.
2. **Template haengt eine Major-Version zurueck.** `meyso-kmu-template` ist Next.js 15, letzter Commit 20.04.2026. `meyso-website` laeuft auf Next.js 16.2.3. Ein heute provisioniertes Projekt startet auf veralteter Basis.
3. **TEMPLATE_VERSION existiert nicht.** Meyso-OS-Regel 5 verlangt Versions-Tracking bei jedem Template-Edit. Das README des Templates dokumentiert selbst: es gibt nur `"version": "1.0.0"` in der `package.json`, keine Konstante. `/api/admin/template-version` liest genau dieses Feld, `clientConfig.infra.templateVersion` steht folglich bei Problemlos auf `1.0.0`. Der Wartungsbereich kann Template-Drift damit nicht erkennen.
4. **Kein Feld fuer Projektart.** Ob "Neubau" oder "Migration" ist im Datenmodell nicht abgebildet, weder in `clientConfig` noch in `projekt`. Beide Kunden landen im selben undifferenzierten Prozess.

---

## 6. Architektur-Regel-Check

Geprueft wird gegen: **Sanity = Content, den Kunden im Studio bearbeiten. Supabase = App-Logik (Auth, Kunden, Leads, Reports, Logs, Bookings, Storage).**

### 6.1 Verstoesse

| Fund | Liegt in | Regel sagt | Empfehlung |
|---|---|---|---|
| `kunde` (3 Dok.) | Sanity | Supabase (Kundenstammdaten) | **Nach Sicherung entfernen.** Kein Code liest den Typ. Die Dublette `SQ Qulitätssicherung ` ist reiner Datenmuell |
| `client` (3 Dok.) | Sanity | Supabase | **Auf `clients` migrieren.** Nur die Referenz aus `clientConfig` und `projekt` haelt den Typ am Leben |
| `projekt` (5 Dok., mit `budget`, `status`, `fortschritt`, `meilensteine`) | Sanity | Supabase (interne Auftragsakte, kein Kundencontent) | **Nach Supabase**, sinnvollerweise als Erweiterung von `deals` oder als eigene Tabelle `projects` mit `client_id` |
| `rechnung` (Schema, 0 Dok.) | Sanity | Supabase (`invoices` fuehrt bereits) | **Schema entfernen** |
| `anfrage` (Schema, 0 Dok.) | Sanity | Supabase (`leads`) | **Schema entfernen** |
| `portalAnfrage` (Schema, 0 Dok.) | Sanity | Supabase (`portal_anfragen`) | **Schema entfernen** |
| `systemLog` (0), `lighthouseReport` (0), `healthCheckResult` (1, unregistriert) | Sanity | Supabase (Logs und Reports) | **Schemata entfernen**, das eine Dokument sichern |
| `aiUsage` (4 Dok.) | Sanity | Supabase (`ai_usage` existiert) | **Nach `ai_usage` migrieren**, Schema entfernen |
| `pushSubscription` (0), `adminPushSubscription` (0) | Sanity | Supabase (Auth-nah) | **Schemata entfernen** |
| `backlogTask` (14 Dok., unregistriert) | Sanity | weder noch, TASKS.md fuehrt | **Sichern und entfernen** |
| `clientConfig.infra` (Repo, Vercel-ID, Deploy-Hook) | Sanity | Supabase oder Vercel als Quelle | **Nach Supabase `client_domains`**, das die Felder bereits hat |
| `clientConfig.firma` (Adresse, Steuernummer, Finanzamt) | Sanity | Supabase (`clients` hat `adresse`, `plz`, `ort`) | **Nach `clients`** |
| `STATIC_PROJEKTE` (`app/projekte/page.tsx:28`) | Code | Sanity (oeffentlicher Content) | **Entfernen**, der Fallback verdeckt Ausfaelle statt sie zu melden |
| `data/local-seo/*.ts` (7 Regionsseiten) | Code | Sanity, sofern jemals redaktionell gepflegt | **Bewusst entscheiden.** Als Code vertretbar, wenn nur Sie sie aendern. Dann aber so dokumentieren |
| `clients.portal_password` im Klartext | Supabase | Hash statt Klartext (`lib/password.ts` existiert) | **Auf Hash umstellen**, Spalte danach leeren |

### 6.2 Regelkonform

`clients`, `leads`, `invoices`, `client_contracts`, `expenses`, `deals`, `crawl_history`, `leads_sequences`, `uptime_*`, `backup_logs`, `portal_*` in Supabase. `blogPost`, `leistung`, `bewertung`, `portfolioItem`, `settings` in Sanity. Das ist die Haelfte, die stimmt.

### 6.3 Regel-Luecke

Die Regel beantwortet nicht, wohin **Aufgaben** gehoeren. Faktisch fuehrt TASKS.md, eine Datei in Git, mit Schreibzugriff aus dem Admin ueber die GitHub-Contents-API. Das ist ein dritter Speicherort neben Sanity und Supabase, den die Architekturregel gar nicht kennt. Er funktioniert, sollte aber ausdruecklich als solcher benannt werden.

---

## 7. UI- und Strukturanalyse des Admin

### 7.1 Navigationsaufbau

Sieben Gruppen in `Sidebar.tsx`, 22 verlinkte Ziele:

```
Dashboard      -> /admin
Kunden         -> Clients | Neuer Client | Projekte
Finanzen       -> Anfragen | Rechnungen | Analytics | Ausgaben | Vorschau
Operations     -> Wartung | Infrastruktur | API-Kosten | Analytics
Content        -> Content | Leistungen | Outreach | Crawler | ToolRadar
Automation     -> Workflows | Backlog | SEO Monitor
Einstellungen  -> Einstellungen
```

Sieben der 29 Routen sind ueber die Navigation **nicht** erreichbar: `clients/[slug]`, `clients/[slug]/config`, `kunden/[id]`, `finanzen/forecast-v2`, `login` und die beiden Briefing-Unterseiten. Bei `forecast-v2` fuehrt auch kein Link aus dem Code dorthin.

**Zwei Schwaechen der Gliederung:**

- **"Anfragen" steht unter Finanzen.** Leads sind Vertrieb, nicht Buchhaltung. Wer einen Lead sucht, sucht ihn unter Kunden.
- **"Analytics" existiert zweimal**, einmal unter Finanzen (Umsatz) und einmal unter Operations (Website). Gleicher Name, zwei verschiedene Dinge.

### 7.2 Die haeufigsten Arbeitspfade, durchgespielt

**A) Neuen Kunden anlegen**

| Schritt | Ort | Bruch |
|---|---|---|
| 1. Kunden > Neuer Client, 3 Formularschritte, absenden | Admin | |
| 2. Kunde erscheint **nicht** in der Liste | Admin | Ursache: Provisionierung schreibt nach Sanity, Liste liest Supabase |
| 3. Supabase-Konsole oeffnen, Zeile in `clients` anlegen | **Supabase** | **Medienbruch 1** |
| 4. `client_contracts` anlegen | **Supabase** | **Medienbruch 2** |
| 5. Portal-Passwort und `portal_users` setzen | **Supabase** | **Medienbruch 3** |
| 6. Studio oeffnen, `projekt` anlegen und verknuepfen | **Sanity Studio** | **Medienbruch 4** |
| 7. Custom Domain setzen | **Vercel** | **Medienbruch 5** |
| 8. Tasks in TASKS.md eintragen | **GitHub oder Editor** | **Medienbruch 6** |
| 9. `projects.json` und Dependency-Matrix erweitern | **meyso-os** | **Medienbruch 7** |

**Rund 25 Klicks, sieben Medienbrueche, vier fremde Oberflaechen.**

**B) Projektstatus pflegen**

Admin > Projekte zeigt die Liste, das Bearbeiten laeuft ueber `/api/admin/projekte` gegen Sanity. Wer Budget oder Meilensteine pflegen will, geht ins Studio. **Zwei Oberflaechen, ein Bruch.** Erschwerend: der Projektstatus (`anfrage`, `planung`, `entwicklung`, `live`, `pausiert`) und der `clientConfig`-Status (`setup`, `development`, `staging`, `live`, `paused`) und der Kundenstatus (`lead`, `aktiv`, `live`, `pausiert`, `abgeschlossen`) sind **drei verschiedene Statusleitern** fuer denselben Sachverhalt. `ClientsClient.tsx:101-102` enthaelt eine eigene Uebersetzungsfunktion, um sie auf vier Filter-Buckets zurechtzubiegen, mit Kommentar.

**C) Lead nachverfolgen**

Der eigentliche Pfad Finanzen > Anfragen ist **leer** (`leads` hat 0 Zeilen). Real muss man ueber Kunden > Clients gehen und nach `status = lead` filtern. **Der dafuer gebaute Bereich fuehrt ins Leere, die Arbeit passiert an einer anderen Stelle.**

**D) Report ansehen**

SEO: Admin > SEO Monitor liest ueber `/api/admin/seo/github` das Repo meyso-os. Die Datei entsteht aus dem GitHub-Workflow. **Kein Bruch fuer den Lesenden**, gut geloest. Kundenreports laufen ueber `/api/admin/client-reports/[slug]`. Wartungsreports liegen unter Operations > Wartung, Lighthouse-Ergebnisse in `lighthouse_reports`, das leer ist.

**E) Aufgabe anlegen**

Im Admin kann man Aufgaben **nur abhaken**, nicht anlegen. `/api/admin/tasks/toggle` schreibt exakt eine Checkbox um. Zum Anlegen: TASKS.md im Editor oeffnen, richtige Prioritaets- und Projektsektion finden (bei 655 Zeilen und neun Sektionen nicht trivial), Zeile einfuegen, committen, pushen, danach das Dashboard neu laden. **Ein Medienbruch bei der mit Abstand haeufigsten Taetigkeit.**

### 7.3 Konsistenz der Oberflaeche

**Flickenteppich, in drei Schichten gewachsen:**

1. **Schicht 1 (tot):** `AdminClient.tsx`, 833 Zeilen, Tab-Navigation, eigene Farbkonstanten, eigene Statusfarben (`Anfrage`, `In Arbeit`, `Live`, `Wartung`, `Abgeschlossen`, also eine **vierte** Statusleiter). Nicht importiert.
2. **Schicht 2 (aktiv):** `CockpitClient.tsx` mit `AdminShell`, `Sidebar`, `KPICard`, `StatusBadge`, `CommandPalette`. Das ist der bewusst gebaute Teil.
3. **Schicht 3 (Einzelseiten):** Viele Routen bringen ihre eigenen Inline-Styles mit, Farben wie `#1847F0`, `#10B981`, `#6B7280` stehen an Dutzenden Stellen wortwoertlich im Code statt in einem Token.

**Tote Ansichten:** `forecast-v2` (kein Link), `rechnung-vorschau` (Tabelle fehlt), `anfragen` (Tabelle leer), `toolradar` (Env fehlt), Referral-Block in `analytics` (Tabelle fehlt), Health-Kachel im Cockpit (Tabelle fehlt), Reminder-Zaehler im Cockpit (Spalte fehlt).

**Doppelte Ansichten fuer dieselben Daten:**

- `/admin/kunden/[id]` und `/admin/clients/[slug]`: zwei Kundendetailseiten unter zwei ID-Raeumen
- `/admin/content` und `/admin/leistungen` gegen das Sanity Studio unter `/studio`
- `/admin/finanzen/analytics` und `/admin/finanzen/forecast-v2` gegen dieselbe Forecast-API
- `/admin/infrastruktur` und `/admin/wartung` mit ueberlappendem Inhalt

### 7.4 Zustandsanzeige: sieht man, was Aufmerksamkeit braucht?

**Nein.** Das Cockpit ist als Uebersicht gebaut, aber drei seiner sechs Signalquellen sind tot: `health_check_results` (Tabelle fehlt), `reminders` (Filterspalte fehlt), `leads` (leer). Die Sidebar-Badge zeigt dauerhaft null.

Was **nicht** im Cockpit auftaucht, obwohl es Aufmerksamkeit braucht:

- Dependency Updates faellt seit mindestens zwei Wochen aus
- Das GSC-Token ist seit dem 01.08.2026 ungueltig, alle SEO-Reports sind seither halb blind
- Vier Cron-Routen und die Sequenz-Verarbeitung sind nicht terminiert
- Die letzte Sicherung liegt vom 15.07.2026, also ueber drei Wochen zurueck
- Drei Leads liegen unbearbeitet
- Die einzige `clientConfig` ist im Admin unsichtbar

**Alle sechs Punkte musste diese Analyse einzeln aufsuchen. Keiner davon ist im Admin sichtbar.** Genau das ist die Luecke zwischen "es laeuft" und "es wirkt".

### 7.5 Kurzurteil je Route

| Behalten (11) | Zusammenlegen (12) | Weg (6) |
|---|---|---|
| `/admin` (reparieren) | `clients` + `clients/[slug]` + `kunden/[id]` -> **ein** Kundenbereich | `AdminClient.tsx` (toter Code) |
| `/admin/login` | `clients/[slug]/config` in den Kundenbereich | `finanzen/forecast-v2` |
| `/admin/finanzen` | `rechnung-vorschau` in `finanzen` | `leistungen` (gehoert ins Studio) |
| `/admin/finanzen/expenses` | `finanzen/analytics` + `forecast-v2` | `content` (gehoert ins Studio) |
| `/admin/outreach` | `wartung` + `infrastruktur` + `api-usage` -> **ein** Betriebsbereich | `toolradar` (oder Env setzen) |
| `/admin/outreach/crawler` | `anfragen` in den Kundenbereich als Lead-Filter | Referral-Block in `analytics` |
| `/admin/tasks` | `projekte` in den Kundenbereich | |
| `/admin/seo` | `workflows` + Briefings zusammenfassen | |
| `/admin/workflows` | | |
| `/admin/einstellungen` | | |
| `/admin/analytics` | | |

**29 Routen werden zu 11 bis 13.**

---

## 8. Befundbericht

### 8.1 Top-Probleme, nach Schmerz sortiert

| Rang | Problem | Warum es weh tut | Beleg |
|---|---|---|---|
| **1** | **Die Kundenanlage schreibt nicht dorthin, wo die Kundenliste liest** | Der eine Prozess, den zwei neue Kunden gleich brauchen, funktioniert nicht zu Ende. Jeder Kunde erfordert 13 manuelle Nacharbeiten | Kap. 5.1, `provision-client/route.ts` |
| **2** | **Die Verknuepfung Kunde zu Konfiguration kann strukturell nie greifen** | Deploy-Status, Repo, Domain und Template-Version bleiben im Admin dauerhaft leer, ohne erkennbaren Fehler | D4, `ClientsClient.tsx:131` gegen `:264` |
| **3** | **Kundenstammdaten liegen dreifach mit widerspruechlichen Werten** | Man weiss bei keiner Zahl, ob sie stimmt. Hirmax steht auf `abgeschlossen` und zahlt gleichzeitig | D1, D2, D3, D12 |
| **4** | **Sechs Tabellen existieren im Code, aber nicht in der Datenbank** | Sieben Ansichten zeigen still nichts an. Nichts davon meldet sich | Kap. 1.1 |
| **5** | **Der Lead-Bereich ist leer, waehrend drei Leads offen liegen** | Der dafuer gebaute Ort fuehrt ins Nichts, genau jetzt, wo zwei Kunden anstehen | D11 |
| **6** | **Grune Automationen ohne Wirkung** | Der Morning Brief nennt seit ueber zwei Monaten dieselben drei Aufgaben. Der SEO-Report sieht vollstaendig aus, hat aber keine GSC-Zahlen mehr | Kap. 4 |
| **7** | **Fuenf Cron-Routen sind gebaut, aber nicht terminiert** | Sicherungen laufen unregelmaessig, zuletzt am 15.07.2026. Rechnungslauf und Mail-Sequenzen laufen nur, wenn jemand daran denkt | `vercel.json` ist `{}`, `backup_logs` |
| **8** | **Aufgaben anlegen erzwingt einen Medienbruch** | Die haeufigste Taetigkeit ist die einzige, die das Admin nicht kann | Kap. 7.2 E |
| **9** | **Portal-Passwoerter im Klartext, Portal faktisch tot** | `PORTAL_JWT_SECRET` und `JWT_SECRET` sind weder lokal noch auf Vercel gesetzt, `getPortalSecret()` wirft. `portal_users` ist leer | D13, `portal/login/route.ts:21-24`, `vercel env ls` |
| **10** | **Vier konkurrierende Statusleitern** | Jede Ansicht erzaehlt eine andere Geschichte ueber denselben Kunden | Kap. 7.2 B |
| **11** | **Kein zentraler Zugriffsschutz** | 27 von 29 Seiten ohne eigenen Guard, keine `middleware.ts`. Aktuell kein Datenabfluss nachweisbar, aber der Schutz haengt an einer Layout-Verzweigung | Kap. 3 |
| **12** | **Template haengt eine Major-Version zurueck, TEMPLATE_VERSION fehlt** | Neue Projekte starten auf Next.js 15, obwohl 16 laeuft. Regel 5 ist unerfuellt | Kap. 5.4 |

### 8.2 Vorschlag: Ziel-Datenmodell mit genau einem fuehrenden Ort

| Datenart | **Fuehrender Ort kuenftig** | Was wegfaellt | Was migriert wird |
|---|---|---|---|
| Kunden (inkl. Leads) | **Supabase `clients`** | Sanity `kunde`, `client`, `anfrage`; Supabase `leads` als eigene Tabelle | Sanity-Felder nach `clients`, `leads`-Logik als `status`-Wert |
| Kundenkonfiguration | **Supabase, neue Tabelle `client_configs`** mit `client_id` als echtem Fremdschluessel | Sanity `clientConfig`, Supabase `client_domains` | Ein `clientConfig`-Dokument, zwei `client_domains`-Zeilen |
| Projekte (intern) | **Supabase, neue Tabelle `projects`** mit `client_id` | Sanity `projekt`, Supabase `deals` als Parallelstruktur | 5 Dokumente, 4 Deals |
| Projekte (oeffentlich) | **Sanity `portfolioItem`** | `STATIC_PROJEKTE`, die zwei handgeschriebenen Projektseiten | Slugs bereinigen, `liveUrl` korrigieren |
| Aufgaben | **`meyso-os/TASKS.md`**, ausdruecklich als dritter legitimer Speicher | Sanity `backlogTask` | 14 Dokumente sichern, dann entfernen |
| Rechnungen und Vertraege | **Supabase `invoices` + `client_contracts`** | Sanity `rechnung`, `preispaket`, `kunde.dokumente` | nichts, Sanity-Typen sind leer |
| Zugaenge und Secrets | **Vercel-Env** als Quelle, `client_configs` nur als Verweis | `clientConfig.infra` als Ablage | Repo-URL und Vercel-ID |
| Reports SEO | **`meyso-os/docs/seo/`** | keine Doppelung | GSC-Token erneuern |
| Reports Betrieb | **Supabase `lighthouse_reports`, `uptime_*`, `backup_logs`** | Sanity `lighthouseReport`, `healthCheckResult`, `systemLog` | 1 Dokument |
| Termine und Erinnerungen | **Supabase `reminders`** (Schema an den Code angleichen) | - | Spalte `dismissed_at` ergaenzen oder Query korrigieren |
| Website-Inhalte | **Sanity** | `data/local-seo/*.ts` bewusst entscheiden | - |
| Portal | **Supabase `portal_users`** mit Hash | `clients.portal_password` im Klartext | Passwoerter neu setzen |
| KI-Verbrauch | **Supabase `ai_usage`** | Sanity `aiUsage` | 4 Dokumente |

**Sanity behaelt danach genau fuenf Typen:** `portfolioItem`, `blogPost`, `leistung`, `bewertung`, `settings`. Das sind genau die, die Content sind. **13 von 18 Typen entfallen.**

### 8.3 Vorschlag: konsolidierte Admin-Struktur

```
/admin                    HEUTE
                          Was heute Aufmerksamkeit braucht, in einer Spalte:
                          offene Leads, faellige Rechnungen, rote Automationen,
                          abgelaufene Token, Sicherungsalter, aktive P0-Aufgaben.
                          Jede Zeile ist ein Link auf die Stelle, wo man es loest.

/admin/kunden             KUNDEN            (eine Datenart, ein Bereich)
                          Liste mit Filter Lead | Aktiv | Pausiert | Beendet
                          Detail je Kunde in Registern:
                            Stammdaten . Vertrag und Rechnungen . Projekt
                            . Konfiguration und Infrastruktur . Portal . Verlauf
                          Ersetzt: clients, clients/[slug], clients/[slug]/config,
                                   kunden/[id], anfragen, projekte

/admin/kunden/neu         ANLAGE
                          Ein Assistent, der ALLE Orte bedient und am Ende
                          eine Checkliste zeigt: was ist erledigt, was fehlt noch.
                          Kein stiller Teilerfolg mehr.

/admin/finanzen           FINANZEN
                          Rechnungen . Vertraege . Ausgaben . Auswertung . Prognose
                          Ersetzt: finanzen, finanzen/analytics, finanzen/expenses,
                                   finanzen/forecast-v2, rechnung-vorschau

/admin/betrieb            BETRIEB
                          Wartung . Infrastruktur . Uptime . Sicherungen . KI-Kosten
                          Ersetzt: wartung, infrastruktur, api-usage

/admin/wachstum           WACHSTUM
                          Outreach . Crawler . Website-Analytics . SEO-Monitor
                          Ersetzt: outreach, outreach/crawler, analytics, seo

/admin/aufgaben           AUFGABEN
                          TASKS.md lesen, abhaken UND anlegen.
                          Projekt- und Prioritaetsauswahl im Formular.
                          Ersetzt: tasks

/admin/automation         AUTOMATION
                          Workflows mit letztem Lauf UND letztem echten Effekt.
                          Briefings. Cron-Uebersicht.
                          Ersetzt: workflows, workflows/[id]/briefings/*

/admin/einstellungen      EINSTELLUNGEN

/studio                   INHALTE  (unveraendert, Sanity fuer Content)
```

**Von 29 Routen auf 9 Bereiche.** Die Kopplung ans Datenmodell ist streng: genau ein Bereich je Datenart, und der Bereich liest aus dem fuehrenden Ort.

### 8.4 Pakete, Aufwand und Reihenfolge

**Zuerst reparieren, dann konsolidieren.** Die Pakete R1 bis R4 machen das heutige System ehrlich, ohne etwas umzubauen.

| # | Paket | Inhalt | Aufwand |
|---|---|---|---|
| **R1** | **Kundenanlage schliessen** | `provision-client` schreibt zusaetzlich nach Supabase `clients` und `client_contracts`, Ergebnisseite zeigt eine Restliste | **M** |
| **R2** | **Config-Verknuepfung reparieren** | `clientConfig` bekommt ein Feld `clientSupabaseId`, `configMap` schluesselt darauf. Alternativ ueber den Slug matchen | **S** |
| **R3** | **Tote Anzeigen ehrlich machen** | Sechs fehlende Tabellen: entweder Migration ausfuehren oder Ansicht entfernen. `reminders`-Query korrigieren | **M** |
| **R4** | **Lead-Ansicht auf `clients` umhaengen** | `/admin/anfragen` und die Sidebar-Badge lesen `clients` mit `status='lead'` | **S** |
| **R5** | **GSC-Token erneuern** | `scripts/setup/gsc-oauth.mjs` laufen lassen, `GSC_REFRESH_TOKEN` als Secret erneuern | **S** |
| **R6** | **`GH_PAT` erneuern** | Dependency Updates laeuft wieder, Reichweite auf alle fuenf Repos pruefen | **S** |
| **R7** | **Crons terminieren** | `vercel.json` mit `crons` fuer Backup, Rechnungen, Lighthouse, Uptime, Sequenzen | **S** |
| **R8** | **Portal entscheiden** | Entweder `PORTAL_JWT_SECRET` setzen, Passwoerter hashen, Klartextspalte leeren. Oder das Portal bewusst stilllegen | **M** |
| **K1** | **Datenbereinigung** | Sanity-Dubletten sichern, Namen vereinheitlichen, Trailing Spaces entfernen, `projekt.client` nachtragen, Platzhalter-Budgets korrigieren | **M** |
| **K2** | **Sanity auf Content reduzieren** | 13 Typen migrieren und entfernen, `sanity/structure.ts` aufraeumen | **L** |
| **K3** | **Statusleitern vereinheitlichen** | Eine Leiter, ein Enum, Uebersetzungsfunktion in `ClientsClient.tsx` entfaellt | **M** |
| **K4** | **Kundenbereich zusammenlegen** | Drei Detailseiten werden eine mit Registern | **L** |
| **K5** | **Cockpit als Tagesansicht** | Alle Signale aus 7.4, jede Zeile mit Sprungziel | **M** |
| **K6** | **Routen zusammenlegen** | Betrieb, Wachstum, Finanzen nach 8.3 | **L** |
| **K7** | **Aufgaben anlegen im Admin** | Formular schreibt in die richtige TASKS.md-Sektion, `SECTION_COLORS` an P0 bis P3 angleichen, `Stand:` automatisch setzen | **M** |
| **K8** | **Toten Code entfernen** | `AdminClient.tsx`, `STATIC_PROJEKTE`, `forecast-v2` | **S** |
| **T1** | **Template auf Next.js 16 heben** | Angleich an meyso-website | **M** |
| **T2** | **TEMPLATE_VERSION einfuehren** | Konstante, Bump-Regel, Anzeige im Betriebsbereich | **S** |
| **T3** | **Onboarding-Runbook** | Die Schritte aus 5.2 als Checkliste im Repo, bis R1 sie ersetzt | **S** |
| **T4** | **Zugriffsschutz pruefen** | `middleware.ts` mit Matcher auf `/admin` und `/portal`, eigener Sicherheits-Check | **M** |
| **T5** | **Schweiz-Faehigkeit** | MWST statt Steuernummer, CHF, Land nicht mehr vorbelegt | **M** |

**Empfohlene Reihenfolge**

1. **Sofort, vor beiden Kunden:** R1, R2, R4, T3. Damit ist die Anlage benutzbar und die Leads sind sichtbar. Zusammen etwa ein Arbeitstag.
2. **Diese Woche:** R5, R6, R7, R3. Die Automationen sagen wieder die Wahrheit.
3. **Danach, ruhig:** K1, K8, K3, K7, R8.
4. **Der eigentliche Umbau:** K2, K4, K5, K6, T1, T2, T4, T5.

**Wichtig: Punkt 1 und 2 loesen den Alltagsschmerz. Der grosse Umbau darf warten, und er sollte warten, bis Ziegler und Liza-Marie stehen.**

---

## 9. Minimale Onboarding-Checkliste auf Basis des heutigen Systems

Damit die zwei Kunden nicht auf die Konsolidierung warten muessen. Diese Liste gilt **ohne jede Aenderung am System**.

### 9.1 Fuer beide Kunden, in dieser Reihenfolge

| # | Schritt | Ort | Nicht vergessen |
|---|---|---|---|
| 1 | Assistent ausfuellen: Firmenname, Slug, Inhaber, E-Mail, Telefon, Adresse, PLZ, Ort, Paket, Design | `/admin/clients/new` | Der Slug wird zu Repo- und Vercel-Name, er ist danach nur muehsam aenderbar |
| 2 | Ergebnisseite pruefen: `sanityClient`, `github`, `vercel`, `envVars`, `deployHook`, `sanityConfig` | Admin | Bei `error` den Retry je Schritt nutzen, **nicht** den ganzen Assistenten erneut laufen lassen, sonst entstehen Dubletten |
| 3 | **Supabase `clients` von Hand anlegen** | Supabase-Konsole | **Der wichtigste Schritt.** `firma` **exakt** wie im Assistenten schreiben, kein Leerzeichen am Ende. Ohne diese Zeile ist der Kunde im Admin unsichtbar |
| 4 | **`client_contracts` anlegen**: `client_id`, `paket`, `preis`, `aktiv=true`, `billing_interval`, `next_invoice_due` | Supabase | Ohne `next_invoice_due` gibt es keine Rechnung |
| 5 | Sanity `projekt` anlegen, **`client`-Referenz setzen** | `/studio` | Drei von fuenf bestehenden Projekten haben diese Referenz nicht. Sie erscheinen dann ohne Kundennamen |
| 6 | `client_domains` fuellen: Domain, Vercel-Projekt-ID, GitHub-Repo | Supabase | Ersetzt die gebrochene `clientConfig`-Verknuepfung |
| 7 | Custom Domain in Vercel, DNS beim Registrar | Vercel | Bei Ziegler `.ch`, anderer Registrar-Ablauf |
| 8 | Resend-Domain verifizieren, falls Mailmodul aktiv | Resend | Sonst versendet das Kontaktformular still nichts |
| 9 | UptimeRobot-Monitor anlegen | UptimeRobot | Sonst faellt ein Ausfall nicht auf |
| 10 | Projekt-Sektion in TASKS.md anlegen, `## 🟢 P3` | meyso-os | Der Morning Brief zieht daraus |
| 11 | `scripts/config/projects.json` in meyso-os ergaenzen | meyso-os | Sonst fehlt das Projekt im SEO-Monitor |
| 12 | Repo in `dependency-updates.yml` in die Matrix aufnehmen | meyso-os | Der Workflow laeuft aktuell ohnehin rot, siehe R6 |
| 13 | Kein Portal versprechen | - | `PORTAL_JWT_SECRET` fehlt, der Portal-Login funktioniert derzeit nicht |

### 9.2 Zusaetzlich fuer Ziegler Holzarbeiten

| # | Schritt | Hinweis |
|---|---|---|
| 14 | Vorhandenen Lead-Eintrag **weiterverwenden**, keinen zweiten anlegen | Er existiert bereits: `9ed98a4c-22cb-467d-9c82-a38552dde8ca`, angelegt 08.08.2026. `status` von `lead` auf `aktiv` setzen, `website` nachtragen, sie ist heute leer |
| 15 | **Shop-Umfang vorab klaeren** | Das System kennt keinen Shop. `bestellportal` ist ein Bestellformular nach Hirmax-Vorbild, ohne Warenkorb, Preisberechnung, Versand und Zahlung. Entweder Umfang auf Hirmax-Niveau begrenzen oder als Einzelentwicklung ansetzen |
| 16 | **Bestandsseite vor dem Umschalten sichern** | Seitenstruktur, Texte, Bilder, bestehende URLs. Es gibt kein Feld und keinen Prozess dafuer. Ablage vorerst im Projektrepo |
| 17 | **Redirect-Liste alt zu neu** anlegen | Sonst gehen Rankings verloren. Vorbild ist `next.config.ts` in meyso-website |
| 18 | **Schweiz**: MWST-Nummer statt Steuernummer, CHF, Land auf Schweiz | `clientConfig.firma` hat `steuernummer`, `finanzamt`, `kleinunternehmer §19 UStG` und `land` mit Vorbelegung Deutschland. Alles drei passt nicht. Vorerst in `notizen` festhalten und die Rechnung manuell pruefen |
| 19 | `.ch`-Domain: DNS-Ablauf und Registrar abweichend | Mehr Vorlauf einplanen |

### 9.3 Zusaetzlich fuer Liza-Marie

| # | Schritt | Hinweis |
|---|---|---|
| 14 | **Lead zuerst anlegen** | Liza-Marie existiert im System heute nirgends. Zuerst als `clients` mit `status='lead'`, dann der Assistent |
| 15 | **Template-Stand bewusst akzeptieren** | Das Projekt startet auf Next.js 15, meyso-website laeuft auf 16.2.3. Entweder so hinnehmen und in TASKS.md als Nachzug vermerken, oder T1 vorziehen |
| 16 | **Paket waehlen**: `website` reicht fuer einen reinen Neubau | `portal` schaltet Auth, Admin, Mail, PWA und Upload frei, das ist ohne Portal-Secret derzeit nicht nutzbar |
| 17 | `clientConfig.infra.templateVersion` von Hand auf den echten Stand setzen | Es gibt keine TEMPLATE_VERSION-Konstante, der Wert kommt aus `package.json` und steht auf `1.0.0` |
| 18 | Nach dem Livegang `portfolioItem` anlegen, falls Referenz gewuenscht | Slug sauber setzen, nicht wie `sq-schmidt-qualit-tssicherung` |

---

## Anhang: Nachweise

**Branch:** `analyse/hub`
**Basis:** `origin/main` `e6c04e3` vom 08.08.2026
**Erhebungsmethoden:** Live-Abfragen gegen die Sanity-HTTP-API (`vwmo63eu`, Dataset `production`) und die Supabase-PostgREST-API (`zeqojkwflkkeahqwddyy`), `gh run list` und `gh run view --log`, `vercel project ls` und `vercel env ls production`, Grep und Lektuere ueber elf lokale Repos, anonyme HTTP-Abrufe gegen meyso.de.

**Hinweis zur lokalen Arbeitskopie:** Das lokale `meyso-os` stand zu Beginn der Analyse auf `662b28a` vom 01.05.2026 und war damit **129 Commits hinter `origin/main`**. Alle Aussagen dieses Berichts beziehen sich auf `origin/main`, nicht auf den lokalen Stand. Die abweichende Arbeitskopie ist selbst ein Befund: Die Briefing- und SEO-Commits der Automationen laufen an der lokalen Kopie vorbei.

**Nicht verifiziert, bewusst offen gelassen:**

- Der Portal-Login wurde **nicht** durch einen Anmeldeversuch getestet. Die Aussage stuetzt sich auf `portal/login/route.ts:21-24` (wirft ohne Secret) und `vercel env ls production` (weder `PORTAL_JWT_SECRET` noch `JWT_SECRET` vorhanden).
- Die Sanity-Projekt-IDs von Hirmax und ToolRadar sowie die Supabase-Projekt-Refs der Kundenrepos konnten mangels lokaler `.env.local` nicht ermittelt werden.
- Ob das Supabase-Projekt `zeqojkwflkkeahqwddyy` in einer eigenen Organisation liegt, ist ueber die CLI nicht feststellbar, es erscheint nicht in `supabase projects list`.
