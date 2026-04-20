# SEO Changes Log

Dokumentiert manuelle und agent-gesteuerte SEO-Optimierungen mit Messergebnissen.

---

## 2026-04-20: Mega SEO-Day

### SEO-Agent
- Agent gebaut, 4 kritische Bugs gefixt
- Produktiver Monthly-Run funktioniert
- Naechster automatischer Run: 1. Mai

### Performance-Fixes (meyso-website)
- /projekte Mobile: 74 -> 100
  - priority={isHero} auf erstem Projekt-Bild
  - Supabase-Bilder mit next/image statt raw img
  - Screenshot-API-Fallback durch Placeholder ersetzt
- Homepage: Font-Preload fuer InstrumentSerif
- Footer-Kontrast: WCAG AA compliant
- Brigachtal-Link jetzt mit Unterstrich

### Config-Fixes
- hirmax-scheiben URL auf www kanonisch
- quick-pagespeed Default-URLs korrigiert (404er raus)

### Open Items fuer spaeter
- og-image.png hinzufuegen
- sq-sv GSC-Permission (naechste Woche)
- Bad Duerrheim Landing Page (Potenzial: 45 Impressions von Position 14-17)
- Google Reviews einholen (Max Hirt, Jonathan Romer)
- IHK Schwarzwald-Baar-Heuberg Profil anlegen

---

## 2026-04-20: /projekte Mobile Performance fix (74 -> 100)

SEO-Agent identifizierte /projekte als worst-page mit Mobile Score 74
und NO_LCP. Root Cause: kein priority-Prop auf erstem Projekt-Bild.

Fixes in meyso-website:
- isHero-Prop mit priority + fetchPriority="high" auf index=0
- Supabase-Bilder auf next/image mit fill+sizes
- transition: all durch spezifische Props ersetzt
- Screenshot-API-Fallback durch Placeholder ersetzt

PageSpeed-Messung nach Deploy:
- Mobile Performance: 100
- LCP: 1,7s (messbar)
- TBT: 10ms
- Speed Index: 1,8s (von 4,7s)

Commit: [hash nach merge einfuegen]
