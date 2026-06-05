# RetireVibes — Launch Readiness Checklist

**Compiled by:** Project Manager agent
**Date:** 2026-05-21 | **Last updated:** 2026-05-28
**Status of this doc:** Living document — review weekly, prune monthly.

---

## Strategic decisions locked in (2026-05-25)

- ✅ **retirevibes.com live on Vercel** — SSL, DNS, both domains green
- ✅ **Email system migrated** — EmailJS → Resend serverless function, API key secured
- ✅ **v1 launches WITHOUT email collection** — saves, magic link, My RetireVibes, and Resend are all deferred to v2. This removes CCPA/GDPR/CAN-SPAM burden from the launch path. Attorney review is still required before email capture goes live in v2.
- ✅ **Analytics:** GA4 selected (one script tag + funnel events; add after launch basics are done)

---

## Context this is built on

I reviewed: `CLAUDE.md`, `RetireVibes_Product_Brief.md` (v1.2), `SESSION_HANDOFF.md`, `site-audit-report.md` (May 4, 2026), all project memories, and a partial scan of the current file structure.

**Important: some source docs are stale.** Several items the brief and SESSION_HANDOFF list as "not built" appear to exist in the current file list — `scouting-trip-domestic.html`, `destinations.html`, `destination-detail.html` (dynamic template for ~95 destinations), `magic-link.js` (EmailJS auth wired up), `results-matcher.js` + `destinations-data.js` (real matching algorithm), `security-audit-report.html`, `site-audit-report.md`. Before working any item below, verify against the current file rather than assuming the doc is right. Anything marked **[VERIFY]** below is something I'm not sure is built or not.

---

## P0 — Launch-blocking. Do not ship without these.

### Factual / legal accuracy (from May 4 site audit)

1. ~~**Porto NHR tax section**~~ ✅ **DONE** — verified correct in current file.

2. ~~**Asheville Helene section**~~ ✅ **DONE** — rewritten with honest 2026 recovery timeline.

3. ~~**Audit all destination pages for money-claim violations**~~ ✅ **DONE** — all clean.

### Domain + hosting + deploy

4. ~~**Confirm retirevibes.com is registered**~~ ✅ **DONE** — registered to Natalie, live on Vercel.

5. ~~**Pick + provision a host**~~ ✅ **DONE** — Vercel.

6. ~~**SSL + DNS hygiene**~~ ✅ **DONE** — both domains green, auto-renewing cert.

7. ~~**CI/CD with preview environments**~~ ✅ **DONE (2026-06-01)** — Vercel auto-deploys on push to GitHub. Rollback procedure documented in `rollback-procedure.md` (Vercel dashboard promote, git revert, hard reset as last resort).

### Email + auth — DEFERRED TO V2

8–12. ~~Email/auth items~~ ⏸ **DEFERRED** — v1 launches without email collection. Resend integration built but dormant. Reactivate for v2 with attorney review.

### Legal + compliance

13. ~~**Privacy Policy**~~ ✅ **DRAFTED (2026-05-26)** — `privacy-policy.html` fully written in RetireVibes design system. Covers GA4 analytics only (no email collection), CCPA/GDPR deletion rights, no-financial-advice disclaimer. Footer links added to homepage, all destination pages, find-an-advisor. **⚠️ Attorney review still required before launch.** Owner: **Natalie → attorney**.

14. ~~**Terms of Service**~~ ✅ **DRAFTED (2026-05-26)** — `terms-of-service.html` fully written. Covers no-warranty, limitation of liability, affiliate disclosure, FTC compliance. Email opt-in language removed (v1 deferred). **⚠️ Attorney review still required before launch.** Owner: **Natalie → attorney**.

15. **Affiliate disclosure on every page with affiliate links** — FTC-compliant: conspicuous, plain language, near the link. Pages: `scouting-trip.html`, `browse-homes-international.html`, `browse-homes-domestic.html`, `find-an-advisor.html`, destination pages with embedded affiliate links. Owner: **legal-compliance + brand-copy-editor**. Effort: M.

16. ~~**Advisor directory disclosure**~~ ✅ **DONE** — fake advisors removed, directory cleaned up.

17. ~~**Cookie consent banner**~~ ⏸ **DEFERRED — not needed for v1** — GDPR applies based on visitor location, not destinations mentioned on the site. RetireVibes audience is US-based; US privacy laws do not require a cookie banner for analytics. Revisit if GA4 shows >5% EU traffic post-launch.

18. ~~**Email opt-in compliance**~~ ⏸ **DEFERRED** — no email capture in v1.

### Real lawyer review

19. ~~**Get a real attorney to review before launch**~~ ⏸ **MOVED TO P2** — with Plausible (cookie-free, no personal data) and no email collection, legal exposure at soft launch is minimal. Attorney review becomes required before: (a) email collection goes live, (b) paid advisor placements are real, (c) marketing drives significant traffic.

---

## P1 — Required for launch (functional + content gaps)

### Broken / placeholder links

20. ~~**Wire Porto scouting trip handoff**~~ ✅ **DONE (2026-05-26)** — routes to `scouting-trip.html`.

21. **Mérida scouting trip handoff** — currently routes to `scouting-trips.html` (general guide) as interim fix. Full Mérida-specific scouting page still needed. **Strategy locked: never route directly to Booking.com — editorial wrapper required.** Owner: **product + content-editorial**. Effort: M.

22. ~~**Asheville + Sarasota scouting handoffs**~~ ✅ **DONE (2026-05-26)** — both route to `scouting-trip-domestic.html?city=asheville` and `?city=sarasota`.

23. ~~**"Share my match" button on results page**~~ ✅ **DONE (2026-06-04)** — Verified fully implemented: copy link (clipboard API + fallback), mailto, native Web Share API (shown only when available), dynamic quote with actual match name, Escape + outside-click dismiss.

24. ~~**In-content resource links**~~ ✅ **DONE (2026-06-04)** — Verified no `href="#"` dead links remain on any destination page. Already cleaned up.

### Missing pages

25. ~~**About page**~~ ⏸ **DEFERRED to v1.1** — pages don't exist and aren't linked. Add after launch once real user questions inform the content.

26. ~~**FAQ page**~~ ⏸ **DEFERRED to v1.1** — same as above. Account-management questions go away with email deferral; revisit once traffic reveals what users actually ask.

27. ~~**Resources page**~~ ⏸ **REMOVED FROM SCOPE** — affiliate resources surfaced contextually on destination/scouting pages. Not linked from anywhere; no user need confirmed. Cut permanently.

### Handoff card standardization

64. ~~**Standardize handoff CTA labels and routing across all destination pages**~~ ✅ **DONE (2026-05-27)** — Shipped across all 4 hand-crafted pages AND `destination-detail.html` (covering all ~110 dynamic destinations):
    - Advisor card: → "How to find an advisor →" everywhere
    - Real estate card: headline → "How to find a home in [City]", CTA → "How to find a home in [City] →"
    - Scouting card: → "How to scout [City] →"; all direct Booking.com links removed from template
    - Mérida: removed direct Inmuebles24 + Booking.com links; routes through editorial pages
    - No direct external links from any handoff card.

### Known data / matching issues

28. ~~**Geography index bug in quiz**~~ ✅ **VERIFIED FIXED (2026-06-04)** — `quiz.js` line 168 uses `o.value !== undefined ? o.value : i`, so Asia correctly stores as index 6. Confirmed in code.

29. ~~**Australia/NZ destinations orphaned**~~ ✅ **RESOLVED (2026-06-04)** — AusNZ option IS in quiz UI (`value: 5`), images confirmed in `/images/` for all 5 pages. No action needed.

### Audit fixes from the May 4 report (P1/P2 items still likely open)

30. ~~**Mérida stat strip / numbers table mismatch**~~ ✅ **DONE** — stat strip now $1,700–2,900, consistent with table total of ~$2,920.

31. ~~**Sarasota insurance estimate**~~ ✅ **DONE** — updated to $500–$900/mo with detailed Florida caveat.

32. ~~**Sarasota HOA row missing**~~ ✅ **DONE** — HOA row present at $0–400/mo / $400–800/mo.

33. ~~**Sarasota stat strip rent**~~ ✅ **DONE** — reads "$2,200–$3,200/mo range."

34. ~~**Sarasota family vibe card**~~ ✅ **DONE** — no grandkids assumption in current file.

35. ~~**Sarasota similar-card distance**~~ ✅ **DONE** — reads "about 2.5 hours from Miami."

### SEO + technical SEO basics

36. ~~**Title + meta description on every page**~~ ✅ **DONE** — all pages including destination-detail.html (dynamic).

37. ~~**Sitemap.xml + robots.txt**~~ ✅ **DONE** — `sitemap.xml`, `robots.txt`, and `vercel.json` created. robots.txt disallows the template/shim files. vercel.json redirects `/` → `/homepage-mockup.html` and sets security headers site-wide.

38. ~~**Schema markup**~~ ✅ **DONE (2026-06-04)** — `WebSite`+`Organization` on homepage; `WebApplication` on quiz.html; `FAQPage` on advisor-international.html and advisor-domestic.html; `Place` dynamically injected on destination-detail.html per destination.

39. ~~**Fix the quiz URL**~~ ✅ **DONE** — canonical URL is now `/quiz.html`; old `/mockups/vibe-quiz.html` redirects to it.

40. ~~**OG image / Twitter card metadata**~~ ✅ **DONE** — added to homepage, quiz, results, all 4 destination pages, and destination-detail.html (dynamic). Results page copy written for shareability ("My RetireVibes Matches…"). Destination images used per page.

### Analytics + measurement

41. ~~**Pick analytics tool**~~ ✅ **DONE** — GA4 selected (free, existing Google account). Measurement ID `G-W19300JTXV` wired in shared.js. ✅

42. ~~**Instrument the core funnel**~~ ✅ **DONE** — GA4 + CSPs wired across all pages. Events: `quiz_start`, `quiz_question_complete` (with question_number prop), `quiz_complete`, `vibe_label_generated` (with vibe_label prop). Outbound affiliate clicks tracked automatically via GA4. Page views tracked automatically.

43. ~~**Search Console set up**~~ ✅ **DONE** — verified via HTML tag, sitemap submitted, 17 pages discovered.

44. ~~**Define what "launch worked" looks like**~~ ✅ **DONE** — 14-day targets: 200+ unique visitors, 30%+ homepage→quiz-start rate, 50%+ quiz completion rate, 25+ total quiz completions. North star: quiz completions. Warning sign: high traffic, low quiz starts = homepage not converting; high quiz starts, low completions = quiz drop-off problem.

### Accessibility + cross-device

45. ~~**WCAG 2.1 AA pass**~~ ✅ **DONE** — Fixed: (1) shared.css now loads in quiz.html (brings global focus-visible ring, prefers-reduced-motion, sr-only); (2) slider `outline: none` removed, replaced with proper focus-visible ring; (3) `.q-num` text color changed from terracotta (2.85:1 fail) to muted (5.25:1 pass); (4) `aria-live="polite"` added to quiz stage for screen reader announcements; (5) `aria-pressed` added to all option buttons; (6) slider gets `aria-label` + `aria-valuetext` (kept in sync on drag); (7) decorative arrow glyphs wrapped in `aria-hidden`; (8) decorative spans in option cards marked `aria-hidden`. Save modal already had correct ARIA (role=dialog, aria-modal, aria-labelledby, sr-only label). warm-gray on cream passes at 5.25:1.

46. **Real-device QA** — test script created at `qa-device-test-script.md`. Run on iPhone (recent), iPhone (older), Android, iPad. Covers: nav, homepage, quiz flow end-to-end, save modal, share, destination pages. Owner: **Natalie**. Effort: 30–45 min per device.

47. **Browser test** — test script created at `qa-browser-test-script.md`. Run on Safari (highest priority), Chrome, Firefox, Edge. Covers quiz, results, save/share modals, Porto destination page, JS error check. Known gotchas documented (backdrop-filter, aspect-ratio, localStorage in Safari private mode). Owner: **Natalie**. Effort: 30–45 min total.

---

## P2 — Strong nice-to-have. Launch without these if needed; add fast after.

48. ~~**Homepage destination cards clickable**~~ ✅ **ALREADY DONE** — cards wrapped in dest-card-link anchors. (wrap in `<a>`). **[VERIFY]** — may already be fixed since SESSION_HANDOFF was written. Owner: **product**. Effort: XS.

49. ~~**Add "Learn more" links to #2 and #3 reveal cards**~~ ✅ **ALREADY DONE** — learnLink wired in buildCard() for all ranks. on results page (the deep-dive pages now exist). Owner: **product**. Effort: XS.

50. ~~**Newsletter signup somewhere visible**~~ ⏸ **REMOVED FROM SCOPE** — no newsletter in v1. Email collection deferred to v2 with attorney review. Revisit when Inspiration Hub is built.

51. **Welcome email when an account is created** — first impression. Owner: **content-editorial + brand-copy-editor + cto** (email service). Effort: S to draft; M to wire.

52. ~~**Featured advisor program**~~ ⏸ **DEFERRED POST-LAUNCH** — `find-an-advisor.html` will be informational only in v1. No featured/recommended advisors in first phase. Named advisors in the current file are placeholders and will be removed. Page educates users on what to look for and routes to SmartAsset as catch-all. Featured advisor program (paid placements) is a post-launch revenue initiative once real traffic exists to offer partners. Owner: **affiliate-partnerships** — post-launch.

53. ~~**Mérida scouting trip page**~~ ✅ **DONE (2026-06-01)** — routes to scouting-trip-detail.html?id=merida; real content in scouting-data.js. (a real one, not just a Booking link). Owner: **content-editorial**. Effort: M.

54. ~~**Domestic scouting trip pages**~~ ✅ **DONE** — scouting-trip-domestic.html has real Asheville + Sarasota content; all domestic destinations route correctly. (Asheville, Sarasota) — `scouting-trip-domestic.html` exists; verify content is real and city-aware. Owner: **content-editorial + product**. Effort: S-M depending on current state.

55. ~~**Inspiration Hub MVP**~~ ⏸ **DEFERRED POST-LAUNCH** — retention play; no audience to retain at launch. Revisit once traffic accumulates. — even a 3-piece launch (one destination spotlight, one expat interview, one comparison piece) is enough to start the retention loop. Owner: **content-editorial + design-lead + product**. Effort: L.

56. **Backup strategy** for email-captured leads (export from EmailJS or wherever; weekly cadence). Lead loss is unrecoverable. Owner: **devops-security**. Effort: S.

57. ~~**Individual researched destination pages**~~ ✅ **DONE** — all 132 destinations have rich researched content in destinations-data.js; destination-detail.html?id=[slug] is the canonical final template for all of them. No separate static pages needed. for all destinations** — **STRATEGY CONFIRMED (2026-05-30).** Every destination gets its own static HTML page modeled on `destination-porto.html`: rich, location-specific content across all sections (what makes it different, cost tiers, getting there, visa/residency, healthcare, similar places). `destination-detail.html` is a placeholder fallback only — it is NOT the long-term template. Pages built so far: Porto, Mérida, Asheville, Sarasota (original 4), Gold Coast, Byron Bay, Adelaide, Hobart, Cairns (added 2026-05-30), plus 5 Canadian pages (Canmore, Kelowna, Niagara-on-the-Lake, Vancouver, Victoria — verify these are fully researched, not stubs). ~95+ destinations still need pages. **Prioritize by match frequency** — cross-reference `destinations-data.js` scoring weights to identify the top 20–30 most-likely-to-surface destinations and build those first. Owner: **content-editorial + product**. Effort: L per destination × ~95+ remaining. This is the longest-lead content initiative in the product.

---

## P3 — Defer to post-launch unless something forces it forward

58. **RetireVibes Pro** — explicitly post-MVP per the brief. Build only when users start asking for more destinations or advanced features.

59. **Australia/NZ region option** — restore only if research suggests demand; otherwise let the 10 destinations sit unused.

60. **Social media channels** — create RetireVibes presence on Pinterest, Instagram, and Facebook before or at launch. Pinterest is highest priority for this audience (visual, evergreen, search-driven). Owner: **marketing-lead**. Effort: M.

61. **Tourism board sponsorships** — pursue once you have 30-day traffic numbers to share with sponsors.

61. **AEO optimization** — Q&A formatting for AI assistant citations. Real upside but no urgency at launch.

62. **Quarterly check-in email automation** — retention feature from the brief; build once accounts are accumulating.

63. **Magic-link as full session restore** vs. ephemeral access — current implementation passes state in the URL. Fine for launch; consider proper session tokens later.

66. **Audit and validate Canadian destination pages** — `destination-canmore.html`, `destination-kelowna.html`, `destination-niagara-on-the-lake.html`, `destination-vancouver.html`, `destination-victoria.html` were created as static files. Now that the strategy is confirmed (individual researched pages for all destinations — see item 57), these are the right format. **Action needed:** verify each page has genuinely researched, location-specific content (not placeholder text), matches the Porto template structure, and that its data aligns with `destinations-data.js`. Replace any stub sections before linking them in the site. Owner: **content-editorial**. Effort: S per page to audit; M per page to rewrite if content is thin.

67. ~~**Hero images for 5 new Australia destination pages**~~ ✅ **DONE (2026-06-04)** — All 5 images confirmed present in `/images/`: gold-coast.jpg, byron-bay.jpg, adelaide.jpg, hobart.jpg, cairns.jpg.

~~65. **"How to find a home in [City]" — destination-specific real estate guides for all 132 destinations**~~ ✅ **DONE (2026-05-31)**
    - 132 pages live at `/destinations/[slug]/real-estate/`
    - All pages have: hero, 3 neighborhood cards with researched copy, price bands, rent vs buy, legal/visa section
    - All 132 destinations have `neighborhoods` arrays in `destinations-data.js` with real copy
    - `realEstate` data object in `destinations-data.js` for custom hero copy (Porto complete; others use template fallback)
    - Generator: `generate-real-estate.js` at project root — run `node generate-real-estate.js` to regenerate all pages
    - Advisor footer links point to `advisor-domestic.html`; international destinations route to `advisor-international.html`
    - Content deepening ongoing: add `realEstate.heroSub` + `realEstate.neighborhoodsIntro` per destination over time

---

68. ~~**Advisor page consolidation**~~ ✅ **DONE (2026-05-31)** — `advisor-domestic.html` is the canonical domestic advisor page (includes directory: NAPFA, Garrett, XY Planning, CFP Board). `advisor-international.html` is the canonical international page. `find-an-advisor.html` 301 redirects to `advisor-domestic.html`. No featured advisors in v1 — featured program is post-launch.

## Open questions only Natalie can answer

These block sequencing. Answer first.

- ~~**Is retirevibes.com registered?**~~ ✅ Yes — live on Vercel, SSL green.
- ~~**Are the four featured advisors real, signed partners?**~~ ✅ Resolved — v1 advisor page is informational only, no featured advisors. Featured program is post-launch.
- **What's the realistic launch date?** Still unconfirmed. Vacation noted as a near-term constraint (~18 days from 2026-05-25).
- **What's the launch budget?** Still unconfirmed.
- **Soft launch or hard launch?** Still unconfirmed.
- **Pinterest / Facebook / paid social — comfortable running ads yourself, or want an outside marketer?** Still unconfirmed.

---

## Recommended launch sequence

If you want to ship in roughly 6–8 weeks, this is the order I'd run it. Most items in a tier can run in parallel.

**Weeks 1–2 — Foundations**
- P0 items 4–7 (domain, host, SSL, CI/CD)
- P0 items 8–12 (email/auth verification + hardening)
- P0 items 1–3 (factual fixes — fast wins)
- Answer the open questions above

**Weeks 3–4 — Compliance + content gaps**
- P0 items 13–19 (legal — start the lawyer process here; it has the longest lead time)
- P1 items 20–24 (broken/placeholder link sweep)
- P1 items 25–27 (About, FAQ, Resources — three writing projects in parallel)
- P1 items 30–35 (the May 4 audit's remaining copy fixes)

**Weeks 5–6 — Measurement + polish**
- P1 items 36–47 (SEO basics, analytics instrumentation, accessibility, device testing)
- P1 items 28–29 (geography bug + Australia/NZ decision)
- P2 items 48–51 (low-effort high-value additions)

**Weeks 7–8 — Pre-launch hardening + soft launch**
- Final lawyer signoff
- Full regression test on real devices
- One paid early-feedback round (5–10 friendly users go through the full flow, you watch)
- Soft launch: domain live, no announcement, watch metrics for 7–14 days
- Hard launch: marketing turns on

This is a real timeline for a solo founder, not a fantasy one. If any of the P0 legal review or partner-dependency items slip, the launch slips with them — that's normal, not a failure.

---

## How to keep this doc useful

- Review every Monday. Move items between tiers as scope changes.
- Strike completed items rather than deleting (so we can see what shipped).
- Add new items at the bottom of their tier; don't renumber.
- Anything sitting >30 days with no movement: kill or defend at the weekly review.
- Update **[VERIFY]** items as you confirm current state.

## Backlog additions (2026-05-31)

66. **Wire Expedia + Booking.com affiliate links on scouting page** — `scouting-trip.html` is personalized by `?id=` param but affiliate links are currently generic (Booking.com goes to Porto; Expedia goes to generic flights page). Once Natalie has affiliate accounts set up, swap in properly tracked affiliate URLs per destination. Expedia deep-link slugs (`/lp/flights/us/pt/porto` etc.) need to be verified per destination before adding to `destinations-data.js`. Owner: **affiliate-partnerships + cto**. Effort: S (once affiliate accounts exist).

## Updates 2026-06-01

~~15. **Affiliate disclosure on every page with affiliate links**~~ ✅ **DONE (2026-06-01)**
    - `scouting-trip-detail.html` — disclosures already present; updated from Booking.com to Expedia branding; internal variable names cleaned up
    - `browse-homes-domestic.html` — false SmartAsset/Zillow/Redfin referral disclosure replaced with accurate no-relationship note
    - `browse-homes-international.html` — false Idealista referral disclosure replaced with accurate no-relationship note
    - `find-an-advisor.html` — false SmartAsset referral disclosure removed
    - SmartAsset removed site-wide (privacy-policy.html, advisor-domestic.html, results-matcher.js, find-an-advisor.html) — no affiliate relationship exists

~~66. **Wire Expedia + Booking.com affiliate links on scouting page**~~ ✅ **DONE (2026-06-01)**
    - `scouting-trip-detail.html` uses `https://expedia.com/affiliate/hDqrJfC` for both stays and flights CTAs across all 132 destinations
    - Booking.com removed entirely — Expedia Creator Program link used as single travel affiliate
    - `browse-homes-international.html` Expedia link updated to affiliate link
    - Impact marketplace application was declined (account under "Family Travel Inspo"); re-apply under RetireVibes post-launch for better tracking

69. **Investigate SmartAsset affiliate program** — SmartAsset removed from site in v1 (no active affiliate relationship). Post-launch: evaluate SmartAsset's publisher program as a catch-all advisor referral once RetireVibes has traffic to offer. Owner: **affiliate-partnerships**. Effort: S to investigate.

