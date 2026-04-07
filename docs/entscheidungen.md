# Meyso – Architektur-Entscheidungen (ADRs)

## ADR-001: Sanity als CMS fuer alle Projekte
- **Entscheidung:** Sanity Free Tier als zentrales CMS
- **Grund:** Kostenlos, flexibles Schema, gute DX, Webhook-Support
- **Risiko:** 100K Req/Mo Limit – ab ~10 Kunden wird es eng

## ADR-002: Vercel Hobby statt Pro
- **Entscheidung:** Alle Projekte auf Vercel Hobby
- **Grund:** Kostenoptimierung in der Aufbauphase
- **Einschraenkung:** Kein nativer Cron, 10s Serverless Timeout, kein Team-Access
- **Migration:** Bei erstem zahlenden Wartungskunden auf Pro upgraden

## ADR-003: Supabase nur fuer Hirmax
- **Entscheidung:** Supabase als DB nur bei Hirmax (kunden, bestellungen, artikel_cache)
- **Grund:** Hirmax braucht relationale Daten (Bestellungen, Kunden). Andere Projekte kommen mit Sanity als Datastore aus
- **Spaeter:** Portal-Auth von JWT auf Supabase Auth migrieren (geparkt)

## ADR-004: meyso-os als Meta-Repo
- **Entscheidung:** Separates privates Repo fuer Tasks, Reports, Docs
- **Grund:** Client-Repos sauber halten, Single Source of Truth fuer Projektmanagement
- **Datum:** 2026-04-07
