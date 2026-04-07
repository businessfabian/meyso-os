# Meyso – Architektur-Uebersicht

## Projekte

| Projekt | Repo | Stack | Hosting |
|---------|------|-------|---------|
| meyso-website | meyso-website | Next.js, Sanity, Resend | Vercel Hobby |
| meyso-kmu-template | meyso-kmu-template | Next.js, Sanity, White-Label | Vercel (pro Kunde) |
| hirmax-scheibenbilder | hirmax-scheibenbilder | Next.js, Supabase, Sanity, Resend | Vercel |
| sq-schmidt-website | sq-schmidt-website | Next.js, Sanity | Vercel |
| toolradar | toolradar | Next.js, Sanity | Vercel |
| demo-schreinerei | meyso-demo-schreinerei | meyso-kmu-template Fork | Vercel |

## Shared Services

- **CMS:** Sanity (Free Tier, 100K Req/Mo, 500K Docs)
- **Mail:** Resend (Free Tier, 100 Mails/Tag)
- **DB:** Supabase (Hirmax), sonst Sanity als Datastore
- **Rate Limiting:** Upstash Redis (Free Tier, 10K Commands/Tag)
- **Hosting:** Vercel Hobby (kein Cron, 10s Serverless, 100GB BW)
- **Domain:** Checkdomain (3 Domains)

## Kunden

| Kunde | Projekt | Kontakt |
|-------|---------|---------|
| SQ Schmidt | sq-schmidt-website | Felix |
| Hirmax | hirmax-scheibenbilder | Max Hirt |
| Demo | meyso-demo-schreinerei | (intern) |
