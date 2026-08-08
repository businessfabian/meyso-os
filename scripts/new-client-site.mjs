#!/usr/bin/env node
/**
 * new-client-site.mjs
 *
 * Legt die technische Seite eines neuen Kundenprojekts an: GitHub-Repo aus
 * dem KMU-Template, Vercel-Projekt mit ENV-Variablen und Deploy-Hook, dazu
 * das clientConfig-Dokument in Sanity.
 *
 * Herkunft: bis Runde 1 lief diese Logik als Admin-Route
 * meyso-website/app/api/admin/provision-client/route.ts. Sie ist dort
 * ausgebaut worden, weil sie den Kunden nur in Sanity anlegte, waehrend die
 * Kundenliste aus Supabase liest. Der Kunde selbst wird jetzt im Admin unter
 * /admin/clients/new angelegt, die Website erzeugt dieses Skript.
 *
 * Die Schrittfolge ist unveraendert uebernommen. Neu ist nur, dass jeder
 * Schritt vorher prueft, ob sein Ergebnis schon existiert. Ein zweiter Aufruf
 * mit demselben Slug repariert also, was beim ersten Lauf fehlgeschlagen ist,
 * statt Dubletten zu erzeugen.
 *
 * Aufruf:
 *   node scripts/new-client-site.mjs --slug=ziegler-holzarbeiten \
 *     --firma="Ziegler Holzarbeiten" [--name="Max Ziegler"] [--email=...] \
 *     [--telefon=...] [--adresse=...] [--plz=...] [--ort=...] \
 *     [--land=Schweiz] [--preset=portal] [--layout=classic] [--dry-run]
 *
 * Presets: website | portal | bestellportal (Modul-Schalter, wie im alten Assistenten)
 *
 * Erforderliche Umgebungsvariablen:
 *   GITHUB_TOKEN, VERCEL_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_WRITE_TOKEN
 * Optional:
 *   VERCEL_TEAM_ID, NEXT_PUBLIC_SANITY_DATASET (Standard production),
 *   SANITY_READ_TOKEN (fallback auf SANITY_WRITE_TOKEN)
 */

import { generateKeyPairSync, randomBytes } from "node:crypto"

const OWNER = "businessfabian"
const TEMPLATE_REPO = "businessfabian/meyso-kmu-template"

const MODULE_PRESETS = {
  website: { auth: false, admin: false, mail: false, pwa: false, blog: true, analytics: true, upload: false },
  portal: { auth: true, admin: true, mail: true, pwa: true, blog: true, analytics: true, upload: true },
  bestellportal: { auth: true, admin: true, mail: true, pwa: true, blog: false, analytics: true, upload: true },
}

function parseArgs(argv) {
  const args = {}
  for (const raw of argv.slice(2)) {
    if (!raw.startsWith("--")) continue
    const [key, ...rest] = raw.slice(2).split("=")
    args[key] = rest.length > 0 ? rest.join("=") : true
  }
  return args
}

function generatePassword(length = 24) {
  const chars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%"
  const bytes = randomBytes(length)
  return Array.from(bytes).map(b => chars[b % chars.length]).join("")
}

/**
 * VAPID-Schluesselpaar. web-push macht nichts anderes als ein P-256-Paar zu
 * erzeugen und base64url zu kodieren, deshalb hier mit Bordmitteln, damit
 * meyso-os ohne zusaetzliche Abhaengigkeit auskommt.
 */
function generateVapidKeys() {
  const { publicKey, privateKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" })
  const pubDer = publicKey.export({ type: "spki", format: "der" })
  const privJwk = privateKey.export({ format: "jwk" })
  return {
    publicKey: pubDer.subarray(pubDer.length - 65).toString("base64url"),
    privateKey: Buffer.from(privJwk.d, "base64url").toString("base64url"),
  }
}

const log = {
  step: (s) => console.log(`\n${s}`),
  ok: (s) => console.log(`  ok       ${s}`),
  skip: (s) => console.log(`  schon da ${s}`),
  fail: (s) => console.log(`  FEHLER   ${s}`),
  info: (s) => console.log(`  ${s}`),
}

async function ghFetch(path, init = {}) {
  return fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      ...(init.headers || {}),
    },
  })
}

async function createRepo(slug, firmenname, state) {
  if (!process.env.GITHUB_TOKEN) {
    state.errors.push("GITHUB_TOKEN nicht gesetzt")
    state.steps.github = "error"
    return
  }
  const existing = await ghFetch(`/repos/${OWNER}/${slug}`)
  if (existing.ok) {
    const data = await existing.json()
    state.repoUrl = data.html_url
    state.steps.github = "ok"
    log.skip(`Repo ${data.html_url}`)
    return
  }
  const res = await ghFetch(`/repos/${TEMPLATE_REPO}/generate`, {
    method: "POST",
    body: JSON.stringify({
      owner: OWNER,
      name: slug,
      private: true,
      description: `${firmenname} - Meyso Kundenprojekt`,
    }),
    signal: AbortSignal.timeout(15000),
  })
  if (res.ok) {
    const data = await res.json()
    state.repoUrl = data.html_url
    state.steps.github = "ok"
    log.ok(`Repo ${data.html_url}`)
  } else {
    const err = await res.json().catch(() => ({}))
    state.errors.push(`GitHub: ${err.message || res.status}`)
    state.steps.github = "error"
    log.fail(`GitHub: ${err.message || res.status}`)
  }
}

async function setVercelEnv(projectId, key, value, headers, teamQuery) {
  const res = await fetch(`https://api.vercel.com/v10/projects/${projectId}/env${teamQuery}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ key, value, type: "encrypted", target: ["production", "preview", "development"] }),
  })
  if (res.ok) return { ok: true }
  // Ein bereits gesetzter Key ist kein Fehler, sondern der Normalfall beim
  // zweiten Lauf.
  const body = await res.json().catch(() => ({}))
  const code = body?.error?.code || ""
  if (res.status === 400 && /already.?exists/i.test(code)) return { ok: true, existed: true }
  return { ok: false, error: body?.error?.message || res.status }
}

async function createVercel(slug, theme, state) {
  if (!process.env.VERCEL_TOKEN) {
    state.errors.push("VERCEL_TOKEN nicht gesetzt")
    state.steps.vercel = "error"
    state.steps.envVars = "skipped"
    state.steps.deployHook = "skipped"
    return
  }
  const headers = {
    Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    "Content-Type": "application/json",
  }
  const teamQuery = process.env.VERCEL_TEAM_ID ? `?teamId=${process.env.VERCEL_TEAM_ID}` : ""

  const existing = await fetch(`https://api.vercel.com/v9/projects/${slug}${teamQuery}`, { headers })
  if (existing.ok) {
    state.vercel = await existing.json()
    state.steps.vercel = "ok"
    log.skip(`Vercel-Projekt ${slug}`)
  } else {
    const body = { name: slug, framework: "nextjs" }
    if (state.repoUrl) body.gitRepository = { repo: `${OWNER}/${slug}`, type: "github" }
    if (process.env.VERCEL_TEAM_ID) body.teamId = process.env.VERCEL_TEAM_ID

    const res = await fetch("https://api.vercel.com/v10/projects", {
      method: "POST", headers, body: JSON.stringify(body), signal: AbortSignal.timeout(15000),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      state.errors.push(`Vercel: ${err.error?.message || res.status}`)
      state.steps.vercel = "error"
      state.steps.envVars = "skipped"
      state.steps.deployHook = "skipped"
      log.fail(`Vercel: ${err.error?.message || res.status}`)
      return
    }
    state.vercel = await res.json()
    state.steps.vercel = "ok"
    log.ok(`Vercel-Projekt ${slug}`)
  }

  state.adminPassword = generatePassword()
  const vapid = generateVapidKeys()
  state.vapidPublicKey = vapid.publicKey

  const envVars = [
    { key: "MEYSO_CONFIG_SLUG", value: slug },
    { key: "MEYSO_SANITY_PROJECT_ID", value: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "" },
    { key: "MEYSO_SANITY_DATASET", value: process.env.NEXT_PUBLIC_SANITY_DATASET || "production" },
    { key: "MEYSO_SANITY_READ_TOKEN", value: process.env.SANITY_READ_TOKEN || process.env.SANITY_WRITE_TOKEN || "" },
    { key: "MAIL_ENABLED", value: "false" },
    { key: "HOMEPAGE_LAYOUT", value: theme.homepageLayout || "classic" },
    { key: "ADMIN_PASSWORD", value: state.adminPassword },
    { key: "VAPID_PUBLIC_KEY", value: vapid.publicKey },
    { key: "VAPID_PRIVATE_KEY", value: vapid.privateKey },
    { key: "NEXT_PUBLIC_VAPID_PUBLIC_KEY", value: vapid.publicKey },
  ]
  const results = await Promise.all(envVars.map(e => setVercelEnv(state.vercel.id, e.key, e.value, headers, teamQuery)))
  const failed = envVars.filter((_, i) => !results[i].ok).map(e => e.key)
  if (failed.length > 0) {
    state.errors.push(`ENV fehlgeschlagen: ${failed.join(", ")}`)
    state.steps.envVars = "error"
    log.fail(`ENV: ${failed.join(", ")}`)
  } else {
    state.steps.envVars = "ok"
    const existed = results.filter(r => r.existed).length
    log.ok(`${envVars.length} ENV-Variablen${existed ? `, davon ${existed} schon vorhanden` : ""}`)
  }

  const hooks = await fetch(`https://api.vercel.com/v1/projects/${state.vercel.id}/deploy-hooks${teamQuery}`, { headers })
  if (hooks.ok) {
    const list = await hooks.json()
    const found = (list.hooks || list || []).find?.(h => h.name === "config-update")
    if (found?.url) {
      state.deployHookUrl = found.url
      state.steps.deployHook = "ok"
      log.skip("Deploy-Hook config-update")
      return
    }
  }
  const hookRes = await fetch(`https://api.vercel.com/v1/projects/${state.vercel.id}/deploy-hooks${teamQuery}`, {
    method: "POST", headers,
    body: JSON.stringify({ name: "config-update", ref: "main" }),
    signal: AbortSignal.timeout(10000),
  })
  if (hookRes.ok) {
    const data = await hookRes.json()
    state.deployHookUrl = data.url || ""
    state.steps.deployHook = "ok"
    log.ok("Deploy-Hook config-update")
  } else {
    state.errors.push("Deploy Hook konnte nicht erstellt werden")
    state.steps.deployHook = "error"
    log.fail("Deploy-Hook")
  }
}

async function sanityQuery(query) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  const url = new URL(`https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}`)
  url.searchParams.set("query", query)
  const res = await fetch(url, { headers: { Authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN}` } })
  if (!res.ok) throw new Error(`Sanity-Query fehlgeschlagen: ${res.status}`)
  return (await res.json()).result
}

async function sanityCreate(doc) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  const res = await fetch(`https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}?returnIds=true`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mutations: [{ create: doc }] }),
  })
  if (!res.ok) throw new Error(`Sanity-Mutation fehlgeschlagen: ${res.status} ${await res.text()}`)
  const data = await res.json()
  return data.results?.[0]?.id
}

async function createClientConfig(slug, firma, theme, modules, state) {
  if (!process.env.SANITY_WRITE_TOKEN || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    state.errors.push("SANITY_WRITE_TOKEN oder NEXT_PUBLIC_SANITY_PROJECT_ID nicht gesetzt")
    state.steps.sanityConfig = "error"
    return
  }
  try {
    const existing = await sanityQuery(`*[_type == "clientConfig" && slug.current == "${slug}"][0]._id`)
    if (existing) {
      state.clientConfigId = existing
      state.steps.sanityConfig = "ok"
      log.skip(`clientConfig ${slug}`)
      return
    }
    const id = await sanityCreate({
      _type: "clientConfig",
      slug: { _type: "slug", current: slug },
      status: "setup",
      firma,
      theme,
      modules: Object.fromEntries(Object.entries(modules).map(([k, v]) => [k, { enabled: v }])),
      infra: {
        githubRepo: state.repoUrl || `https://github.com/${OWNER}/${slug}`,
        vercelProjectId: state.vercel?.id || "",
        vercelUrl: `https://${slug}.vercel.app`,
        vercelDeployHook: state.deployHookUrl || "",
        templateVersion: "1.0.0",
      },
      auftragsverarbeiter: [
        { name: "Vercel Inc.", zweck: "Hosting", url: "https://vercel.com/legal/privacy-policy" },
        { name: "Sanity AS", zweck: "CMS", url: "https://www.sanity.io/legal/privacy" },
      ],
    })
    state.clientConfigId = id
    state.steps.sanityConfig = "ok"
    log.ok(`clientConfig ${id}`)
  } catch (e) {
    state.errors.push(`Sanity: ${e.message}`)
    state.steps.sanityConfig = "error"
    log.fail(`Sanity: ${e.message}`)
  }
}

async function main() {
  const args = parseArgs(process.argv)

  if (args.help || !args.slug) {
    console.log(`
new-client-site.mjs - technische Provisionierung eines Kundenprojekts

  --slug=<slug>          Pflicht. Benennt Repo, Vercel-Projekt und clientConfig.
                         Muss identisch zum Slug des Kunden in Supabase sein.
  --firma="<name>"       Firmenname fuer Repo-Beschreibung und clientConfig
  --name=, --email=, --telefon=, --adresse=, --plz=, --ort=, --land=
  --preset=<website|portal|bestellportal>   Standard: portal
  --layout=<classic|split|minimal>          Standard: classic
  --dry-run              Zeigt nur, was passieren wuerde

Der Kunde selbst wird vorher im Admin unter /admin/clients/new angelegt.
Ablauf und Restschritte: docs/runbooks/onboarding.md
`)
    process.exit(args.slug ? 0 : 1)
  }

  const slug = String(args.slug).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  if (slug !== args.slug) log.info(`Slug normalisiert auf "${slug}"`)

  const firma = {
    firmenname: args.firma || slug,
    name: args.name || "",
    email: args.email || "",
    telefon: args.telefon || "",
    adresse: args.adresse || "",
    plz: args.plz || "",
    ort: args.ort || "",
    land: args.land || "Deutschland",
  }
  const modules = MODULE_PRESETS[args.preset] || MODULE_PRESETS.portal
  const theme = {
    primary: args.primary || "#1A1918",
    accent: args.accent || "#2563EB",
    background: args.background || "#F8F7F4",
    fontHeading: args.fontHeading || "Playfair Display",
    fontBody: args.fontBody || "Outfit",
    homepageLayout: args.layout || "classic",
  }

  if (args["dry-run"]) {
    console.log("\nTrockenlauf, es wird nichts angelegt.\n")
    console.log(JSON.stringify({ slug, firma, preset: args.preset || "portal", modules, theme }, null, 2))
    console.log("\nWuerde anlegen:")
    console.log(`  GitHub  ${OWNER}/${slug} aus ${TEMPLATE_REPO}`)
    console.log(`  Vercel  Projekt ${slug} mit 10 ENV-Variablen und Deploy-Hook`)
    console.log(`  Sanity  clientConfig mit slug ${slug}`)
    console.log("\nUmgebung:")
    for (const key of ["GITHUB_TOKEN", "VERCEL_TOKEN", "VERCEL_TEAM_ID", "NEXT_PUBLIC_SANITY_PROJECT_ID", "SANITY_WRITE_TOKEN"]) {
      console.log(`  ${process.env[key] ? "gesetzt " : "FEHLT   "} ${key}`)
    }
    return
  }

  const state = { steps: {}, errors: [] }

  log.step(`1/3 GitHub-Repo ${OWNER}/${slug}`)
  await createRepo(slug, firma.firmenname, state)

  log.step(`2/3 Vercel-Projekt ${slug}`)
  await createVercel(slug, theme, state)

  log.step(`3/3 Sanity clientConfig`)
  await createClientConfig(slug, firma, theme, modules, state)

  console.log("\n" + "=".repeat(56))
  console.log(`Ergebnis fuer ${slug}`)
  console.log("=".repeat(56))
  for (const [key, value] of Object.entries(state.steps)) {
    console.log(`  ${value === "ok" ? "ok     " : value === "error" ? "FEHLER " : "-      "} ${key}`)
  }
  if (state.adminPassword) {
    console.log(`\n  ADMIN_PASSWORD (nur jetzt sichtbar): ${state.adminPassword}`)
  }
  if (state.errors.length > 0) {
    console.log("\n  Hinweise:")
    for (const e of state.errors) console.log(`    ${e}`)
    console.log("\n  Erneut aufrufen wiederholt nur die fehlgeschlagenen Schritte.")
  }
  console.log(`
  Naechste Schritte: docs/runbooks/onboarding.md ab Schritt "Domain"
`)

  if (Object.values(state.steps).includes("error")) process.exit(1)
}

main().catch(e => {
  console.error(`\nAbbruch: ${e.message}`)
  process.exit(1)
})
