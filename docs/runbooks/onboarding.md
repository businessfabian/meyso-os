# Runbook: neuen Kunden anlegen

Stand: 08.08.2026 (Reparatur-Runde 1)
Gilt fuer: alle Meyso-Kundenprojekte
Grundlage: [Hub-Analyse](../analyse/hub-analyse-2026-08.md), Kapitel 9

Dieses Runbook beschreibt den Weg, der mit dem heutigen System funktioniert.
Es ersetzt den frueheren Drei-Schritte-Assistenten unter `/admin/clients/new`,
der Repo, Vercel-Projekt und Sanity-Konfiguration anlegte, den Kunden aber
nirgends dort eintrug, wo die Kundenliste ihn sucht.

**Die Aufteilung seit Runde 1:**

| Was | Wo | Womit |
|---|---|---|
| Der Kunde als Geschaeftsbeziehung | Supabase `clients` | Admin, `/admin/clients/new` |
| Der Wartungsvertrag | Supabase `client_contracts` | derselbe Anlagedialog |
| Die Website (Repo, Vercel, Sanity-Konfig) | GitHub, Vercel, Sanity | CLI, `scripts/new-client-site.mjs` |
| Alles Weitere | Domain, Mail, Monitoring, Backlog | von Hand, Abschnitt 3 |

---

## 1. Kunde anlegen (Admin)

`https://meyso.de/admin/clients/new`

| Feld | Hinweis |
|---|---|
| Firmenname | Pflicht. Ohne Leerzeichen am Ende, der Name ist die Anzeige in allen Listen |
| Projekt-Slug | Wird aus dem Firmennamen vorgeschlagen. **Er verbindet den Kunden mit Repo, Vercel-Projekt und Sanity-Konfiguration.** Genau diesen Slug spaeter an das CLI-Skript uebergeben. Leer lassen, wenn keine Website geplant ist |
| Ansprechpartner, E-Mail, Telefon | |
| Strasse, PLZ, Ort | Fuer die Rechnungsanschrift |
| Branche, bestehende Website | |
| Status | `Lead` fuer Interessenten, `Aktiv` ab Auftrag |
| Wartungsvertrag | Optional. **Ohne Vertrag erzeugt der Rechnungslauf nichts.** Paket, Preis, Intervall und Beginn eintragen, `next_invoice_due` wird berechnet |

Nach dem Anlegen zeigt die Seite zwei Listen: was erledigt ist, und was von
Hand folgt. Die zweite Liste entspricht Abschnitt 3 dieses Runbooks.

**Voraussetzung:** Die Migration `supabase/migrations/20260808_clients_slug.sql`
aus meyso-website muss eingespielt sein, sonst fehlt die Spalte `clients.slug`
und der Kunde wird ohne Slug angelegt. Der Anlagedialog weist dann ausdruecklich
darauf hin. Nachtragen laesst sich der Slug jederzeit ueber die Kundendetailseite.

---

## 2. Website erzeugen (CLI)

Im Repo meyso-os, mit den noetigen Variablen in der Umgebung:

```bash
node scripts/new-client-site.mjs --slug=ziegler-holzarbeiten --firma="Ziegler Holzarbeiten" --dry-run
```

Der Trockenlauf zeigt, was angelegt wuerde, und prueft, ob alle Zugaenge
gesetzt sind. Ohne `--dry-run` laeuft die Provisionierung:

```bash
node scripts/new-client-site.mjs \
  --slug=ziegler-holzarbeiten \
  --firma="Ziegler Holzarbeiten" \
  --name="Max Ziegler" \
  --email=info@ziegler-holzarbeiten.ch \
  --ort=Zuerich --land=Schweiz \
  --preset=portal
```

Das Skript legt an:

1. GitHub-Repo `businessfabian/<slug>` aus `meyso-kmu-template`
2. Vercel-Projekt `<slug>` mit zehn ENV-Variablen und Deploy-Hook
3. Sanity `clientConfig` mit demselben Slug

**Der Slug muss mit dem aus Schritt 1 uebereinstimmen.** Sonst bleibt die
Konfiguration in der Kundenliste unsichtbar, weil die Zuordnung ueber ihn laeuft.

Erforderliche Umgebungsvariablen: `GITHUB_TOKEN`, `VERCEL_TOKEN`,
`NEXT_PUBLIC_SANITY_PROJECT_ID`, `SANITY_WRITE_TOKEN`.
Optional: `VERCEL_TEAM_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_READ_TOKEN`.

Das `ADMIN_PASSWORD` des neuen Projekts erscheint einmalig in der Ausgabe.
Sofort in den Passwortspeicher, es ist danach nur noch in den Vercel-Envs.

**Bei Fehlern einfach erneut aufrufen.** Jeder Schritt prueft vorher, ob sein
Ergebnis schon da ist, und wiederholt nur, was fehlt.

Presets: `website` (Blog, SEO, Legal), `portal` (zusaetzlich Auth, Admin, Mail,
PWA, Upload), `bestellportal` (wie Hirmax).

---

## 3. Von Hand, in dieser Reihenfolge

| # | Schritt | Ort | Warum es sonst auffaellt |
|---|---|---|---|
| 1 | Custom Domain setzen, DNS beim Registrar | Vercel, Registrar | Das Projekt laeuft sonst nur unter `<slug>.vercel.app` |
| 2 | Resend-Domain verifizieren, falls Mailmodul aktiv | Resend | Das Kontaktformular versendet sonst still nichts |
| 3 | UptimeRobot-Monitor anlegen | UptimeRobot | Ein Ausfall faellt sonst nicht auf |
| 4 | Projekt-Sektion in `TASKS.md` unter `P3` anlegen | meyso-os | Der Morning Brief zieht seine Aufgaben daraus |
| 5 | Projekt in `scripts/config/projects.json` ergaenzen | meyso-os | Sonst fehlt es im monatlichen SEO-Monitor |
| 6 | Repo in `.github/workflows/dependency-updates.yml` in die Matrix aufnehmen | meyso-os | Das Projekt bekommt sonst nie Dependency-Updates |
| 7 | `client_domains` in Supabase fuellen (Domain, Vercel-Projekt-ID, Repo) | Supabase | Optional, aber die Infrastruktur-Ansicht bleibt sonst leer |
| 8 | Nach dem Livegang `portfolioItem` in Sanity anlegen, falls Referenz gewuenscht | `/studio` | Slug sauber setzen, keine kaputte Transliteration |

**Kein Portal versprechen.** `PORTAL_JWT_SECRET` ist nirgends gesetzt, der
Portal-Login schlaegt fehl. Die Klartext-Passwoerter in `clients.portal_password`
wurden am 08.08.2026 geleert. Das Portal gilt bis auf Weiteres als stillgelegt.

---

## 4. Bekannte Grenzen

| Grenze | Auswirkung |
|---|---|
| Template auf Next.js 15 | meyso-website laeuft auf 16.2.3. Neue Projekte starten eine Major-Version zurueck |
| Kein TEMPLATE_VERSION | `clientConfig.infra.templateVersion` steht immer auf `1.0.0`, Template-Drift ist nicht erkennbar |
| Kein Shop | Das Preset `bestellportal` ist ein Bestellformular nach Hirmax-Vorbild. Kein Warenkorb, keine Preisberechnung, kein Versand, keine Zahlung |
| Kein Migrationspfad | Fuer Bestandsseiten gibt es kein Feld und keinen Prozess. Sicherung und Redirect-Liste von Hand |
| Deutschland vorbelegt | `clientConfig.firma` kennt Steuernummer, Finanzamt und Kleinunternehmerregelung nach deutschem Recht |

---

## 5. Ziegler Holzarbeiten

Shop-Kontext, Bestandsseite `ziegler-holzarbeiten.ch`.

| # | Schritt | Hinweis |
|---|---|---|
| 1 | **Vorhandenen Eintrag weiterverwenden**, keinen zweiten anlegen | Liegt seit 08.08.2026 als Lead in Supabase, `id 9ed98a4c-22cb-467d-9c82-a38552dde8ca`. In der Anfragen-Ansicht sichtbar. Beim Auftrag ueber "Als Kunde uebernehmen" auf `aktiv` setzen, das legt keinen zweiten Datensatz an |
| 2 | Fehlende Felder nachtragen | `website` ist leer, Adresse und Ansprechpartner fehlen |
| 3 | **Shop-Umfang schriftlich klaeren** | Das System kennt keinen Shop. Entweder auf Hirmax-Niveau begrenzen (Bestellformular mit Admin-Uebersicht) oder als Einzelentwicklung kalkulieren. Nicht stillschweigend als "Bestellportal" verkaufen |
| 4 | **Bestandsseite sichern, bevor umgeschaltet wird** | Seitenstruktur, Texte, Bilder, alle bestehenden URLs. Ablage vorerst im Projektrepo unter `docs/bestand/` |
| 5 | **Redirect-Liste alt zu neu** anlegen | Sonst gehen Rankings verloren. Vorbild: `next.config.ts` in meyso-website |
| 6 | **Schweiz** | MWST-Nummer statt Steuernummer, CHF statt EUR, Land auf Schweiz. Passt heute in kein Feld, deshalb in `notizen` festhalten und die erste Rechnung von Hand pruefen |
| 7 | `.ch`-Domain | Anderer Registrar-Ablauf, mehr Vorlauf einplanen |
| 8 | Slug | `ziegler-holzarbeiten` |

---

## 6. Liza-Marie

Kompletter Website-Neubau, der Standardfall.

| # | Schritt | Hinweis |
|---|---|---|
| 1 | **Kunde zuerst anlegen** | Liza-Marie existiert im System noch nirgends. Abschnitt 1, Status `Lead` oder direkt `Aktiv` |
| 2 | Slug festlegen und notieren | Wird in Schritt 2 gebraucht |
| 3 | Preset `website` genuegt fuer einen reinen Neubau | `portal` schaltet Auth, Admin, Mail, PWA und Upload frei. Ohne Portal-Secret ist das derzeit nicht nutzbar |
| 4 | **Template-Stand bewusst annehmen** | Das Projekt startet auf Next.js 15. Entweder hinnehmen und als Nachzug in `TASKS.md` vermerken, oder das Template vorher heben |
| 5 | `clientConfig.infra.templateVersion` von Hand auf den echten Stand setzen | Der Wert kommt aus der `package.json` des Templates und steht auf `1.0.0` |
| 6 | Nach dem Livegang `portfolioItem` anlegen, falls Referenz gewuenscht | Slug sauber setzen, nicht wie `sq-schmidt-qualit-tssicherung` |

---

## 7. Kurzfassung

```
1. Admin      /admin/clients/new           Kunde + Vertrag, Slug notieren
2. CLI        node scripts/new-client-site.mjs --slug=<slug> --firma="..."
3. Von Hand   Domain, Resend, UptimeRobot, TASKS.md, projects.json,
              dependency-updates.yml
```

Dauer bei glattem Lauf: rund 20 Minuten Arbeitszeit, dazu die DNS-Wartezeit.
