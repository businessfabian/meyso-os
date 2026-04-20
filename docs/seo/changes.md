# SEO Changes Log

Dokumentiert manuelle und agent-gesteuerte SEO-Optimierungen mit Messergebnissen.

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
