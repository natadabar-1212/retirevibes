# RetireVibes — Launch Readiness Checklist

**Compiled by:** Project Manager agent
**Date:** 2026-05-21 | **Last updated:** 2026-07-22
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

21. ~~**Mérida scouting trip handoff**~~ ✅ **DONE — VERIFIED 2026-07-22** — resolved by item 53. `destination-detail.html` routes international destinations to `scouting-trip-detail.html?id=[id]`; `scouting-data.js` has fully researched Mérida content (best months, 3 neighborhood guides). Was already fixed on 2026-06-01, just never struck here.

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

47. **Browser test** — ⚠️ **PARTIALLY DONE (verified 2026-07-22)**: the 2026-06-04 session was an effective Chrome pass — 4 real bugs found and fixed (CSP/GA4, broken links, Mérida 404, arrow glyphs). **Remaining: Safari (highest priority), Firefox, Edge** — script at `qa-browser-test-script.md`, issue log still empty. Known gotchas documented (backdrop-filter, aspect-ratio, localStorage in Safari private mode). Owner: **Natalie**. Effort: ~30 min remaining.

---

## P2 — Strong nice-to-have. Launch without these if needed; add fast after.

48. ~~**Homepage destination cards clickable**~~ ✅ **ALREADY DONE** — cards wrapped in dest-card-link anchors. (wrap in `<a>`). **[VERIFY]** — may already be fixed since SESSION_HANDOFF was written. Owner: **product**. Effort: XS.

49. ~~**Add "Learn more" links to #2 and #3 reveal cards**~~ ✅ **ALREADY DONE** — learnLink wired in buildCard() for all ranks. on results page (the deep-dive pages now exist). Owner: **product**. Effort: XS.

50. ~~**Newsletter signup somewhere visible**~~ ⏸ **REMOVED FROM SCOPE** — no newsletter in v1. Email collection deferred to v2 with attorney review. Revisit when Inspiration Hub is built.

51. **Welcome email when an account is created** — first impression. Owner: **content-editorial + brand-copy-editor + cto** (email service). Effort: S to draft; M to wire.

52. ~~**Featured advisor program**~~ ⏸ **DEFERRED POST-LAUNCH** — `find-an-advisor.html` will be informational only in v1. No featured/recommended advisors in first phase. Named advisors in the current file are placeholders and will be removed. Page educates users on what to look for and routes to SmartAsset as catch-all. Featured advisor program (paid placements) is a post-launch revenue initiative once real traffic exists to offer partners. Owner: **affiliate-partnerships** — post-launch.

53. ~~**Mérida scouting trip page**~~ ✅ **DONE (2026-06-01)** — routes to scouting-trip-detail.html?id=merida; real content in scouting-data.js. (a real one, not just a Booking link). Owner: **content-editorial**. Effort: M.

54. ~~**Domestic scouting trip pages**~~ ⚠️ **WAS WRONGLY MARKED DONE — CORRECTED (2026-07-22).** The claim "all domestic destinations route correctly" was false: `scouting-trip-domestic.html` only ever had content for **Asheville + Sarasota**, but the scout-link logic (`isInternational ? detail : domestic?city=`) sent all **24 domestic destinations** there. 22 of them (Puerto Rico, Santa Fe, Boise, Charleston, Sedona, Tucson, Naples, Palm Springs, etc.) fell through to the page's Asheville default — so "How to scout [City]" showed Asheville content. Caught by Natalie (Puerto Rico). See item 93.

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

66. ~~**Audit and validate Canadian destination pages**~~ ✖️ **KILLED (2026-07-22) — MOOT.** All 5 static Canadian pages were archived to `archive/legacy-destination-pages/` (along with all 94 legacy static pages). Canadian destinations are served by `destination-detail.html?id=[slug]` from `destinations-data.js`, which has genuinely researched content (spot-checked Canmore: real housing figures, cost tiers, location-specific copy). No action needed.

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
- **What's the realistic launch date?** ⚠️ Still unconfirmed — open 58 days as of 2026-07-22.
- **What's the launch budget?** ⚠️ Still unconfirmed — open 58 days.
- **Soft launch or hard launch?** ⚠️ Still unconfirmed — open 58 days.
- **Pinterest / Facebook / paid social — comfortable running ads yourself, or want an outside marketer?** ⚠️ Still unconfirmed — open 58 days.

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

## Updates 2026-06-04

**Batch 1 verifications (all found already done):**
- ~~Item 23~~ ✅ **VERIFIED DONE** — Share modal fully implemented: copy link, mailto, native Web Share API, dynamic quote, Escape/outside-click dismiss.
- ~~Item 24~~ ✅ **VERIFIED DONE** — No href="#" dead links remain on any destination page.
- ~~Item 28~~ ✅ **VERIFIED DONE** — Geography bug confirmed fixed in quiz.js line 168 (`o.value !== undefined ? o.value : i`).
- ~~Item 29~~ ✅ **VERIFIED DONE** — AusNZ in quiz UI (value:5); all 5 hero images confirmed in /images/.
- ~~Item 67~~ ✅ **VERIFIED DONE** — All 5 Australia images confirmed: gold-coast.jpg, byron-bay.jpg, adelaide.jpg, hobart.jpg, cairns.jpg.

**Batch 2 — new work shipped:**
- ~~Item 38~~ ✅ **DONE (2026-06-04)** — Schema markup added: WebSite+Organization (homepage), WebApplication (quiz), FAQPage (advisor-international, advisor-domestic), Place dynamic injection (destination-detail.html).

**Browser testing bugs found and fixed:**
70. ~~**CSP blocking GA4/GTM image beacons**~~ ✅ **FIXED (2026-06-04)** — Added `https://www.googletagmanager.com` to `img-src` directive on 10 pages. GA4 events now fire correctly everywhere.
71. ~~**"Browse all destinations" linking to homepage**~~ ✅ **FIXED (2026-06-04)** — Fixed on results-page-mockup.html, my-retirevibes.html, scouting-trip-detail.html. All now point to `/destinations/` (the directory).
72. ~~**Mérida real estate 404 on "Buy in Mérida"**~~ ✅ **FIXED (2026-06-04)** — Slug function in generate-real-estate.js was stripping accented chars (Mérida → mrida). Fixed to use dest.id. Regenerated all 132 real estate pages.
73. ~~**Arrows in button CTAs**~~ ✅ **FIXED (2026-06-04)** — Removed → from all button CTAs (btn-primary, btn-ghost, btn-teal, nav-cta) site-wide. Text links retain arrows. 151 files updated + real estate pages regenerated.

**Repo hygiene:**
74. ~~**Personal files in /images/**~~ ✅ **FIXED (2026-06-04)** — PDFs, skill files, personal HTML files removed from repo. .gitignore updated to block *.pdf, *.skill, *.zip. Global gitignore set on Natalie's Mac covering *.pdf, *.skill, *.zip, *.xlsx, *.docx, *.pages, *.numbers, *.key. Firefox download location fixed.
75. ~~**CSP connect-src blocking GTM on real estate pages**~~ ✅ **FIXED (2026-06-04)** — generate-real-estate.js CSP was missing `https://www.googletagmanager.com` in both img-src and connect-src. Fixed in generator; all 132 real estate pages regenerated.

## Updates 2026-07-22 — PM verification pass

**Verified and struck:** item 21 (Mérida scouting — was done 06-01, never struck), item 66 Canadian-pages audit (moot — static pages archived; dynamic pages have researched content).

**Item 47 rescoped:** Chrome effectively passed 06-04; Safari/Firefox/Edge still owed. Item 46 (real-device QA) unchanged — no runs logged, still open, owner Natalie.

**Cross-checked `qa-findings-2026-06-01.md`** ("to be fixed next session") against current files. Fixed since then: Porto redirect in scouting-trip-detail ✅, extra nav link ✅, untracked links in scouting-trip.html ✅ (now Expedia affiliate), browse-homes-international scouting CTA ✅, footers standardized on 17 pages ✅. Three items slipped through — added below as new backlog items:

76. ~~🔴 **Booking.com links still live on `scouting-trip-domestic.html`**~~ ✅ **FIXED (2026-07-22)** — all 4 data URLs (`bookingUrl` + `stayBookingUrl` × Asheville/Sarasota) swapped to `https://expedia.com/affiliate/hDqrJfC`; hardcoded default button text ("Search Asheville on Booking.com →") and the footer affiliate disclosure ("Accommodation links go to Booking.com") updated to Expedia. Verified zero Booking.com URLs/text remain site-wide (only the `.booking-btn` CSS class name persists, harmless). Domestic scouting clicks are now tracked. **Shipped + deployed 2026-07-22** (commit 2625c45, pushed to main → Vercel auto-deploy).

77. ~~**`destinations.html` footer is the old 5-link format**~~ ✅ **FIXED (2026-07-22)** — trimmed to the standard slim footer (Destinations · My RetireVibes) + Privacy/Terms legal links. Removed the stale `find-an-advisor.html` link (was 301-ing).

78. **13 destinations missing from `scouting-data.js`** (119 of 132) — P2. They fall back to generic scouting content, which works but is thin. Decision needed: acceptable for launch, or add entries? Owner: **content-editorial**. Effort: S–M.

79. **`href="#"` on results-page email share option** (line 1314) — P3. Functional via onclick; cosmetic cleanup to `javascript:void(0)`. Effort: XS.

## Updates 2026-07-22 (batch 2) — automated QA audit + fixes

Ran full automated audit (broken links, href=#, missing images, nav/footer consistency, affiliate integrity, archived-file refs, data completeness) across 24 root pages + 133 generated pages. Clean except three real issues, all fixed same session:

80. ~~🟡 **Mobile nav broken on both Browse-homes pages**~~ ✅ **FIXED (2026-07-22)** — `browse-homes-domestic.html` and `browse-homes-international.html` loaded `shared.js` (injects hamburger) but not `shared.css` (styles it + mobile dropdown). Added the `shared.css` `<link>` to both. Mobile nav now functional.

81. ~~🟡 **`destination-coming-soon.html` had no mobile nav**~~ ✅ **FIXED (2026-07-22)** — page was missing both shared files; inline nav links are hidden on mobile with no hamburger to reveal them. Added `shared.css` to head + `shared.js` before `</body>`.

82. ~~🟠 **Privacy Policy + Terms links missing from most footers**~~ ✅ **FIXED (2026-07-22)** — legal links were only on homepage + legal pages. Added a `.footer-legal-links` rule to `shared.css` (once) and injected the Privacy/Terms block into all 12 remaining page footers. Every page now links Privacy + Terms. **Doc drift noted:** CLAUDE.md still describes the old 5-link footer; the live standard is the slim "Destinations · My RetireVibes" + legal links. CLAUDE.md footer spec (conventions #7) should be updated to match.

**Remaining before soft launch:** manual browser pass (Safari-first, items 46/47) + real-device pass on iPhone, then the four open questions. Automated layer is now clean.

## Updates 2026-07-22 (batch 3) — scenario-based matcher testing

Headless-browser testing (Playwright) was attempted but the sandbox lacks browser system libraries (no root to install), so full-DOM automation isn't possible here — that layer is deferred to the Claude-in-Chrome pass on the live site. Instead, ran the real matching engine (`results-matcher.js` scoring + ranking + vibe-label logic against live `destinations-data.js`) in Node across 10 user personas including edge cases.

**Matcher test result: 10/10 pass.** Every persona returned 3 matches, zero errors. Geography hard-gate held in every case (no destination surfaced outside the user's selected regions). Multi-region users correctly got one-per-region variety. Minimalist (weather+geo only) and everything-maxed personas both handled gracefully. Vibe labels sensible throughout. Personas covered: intl warm/Europe, domestic mountains/US, Mexico/LatAm, Asia, multi-region variety, conflicting weather-vs-geography, "anywhere"/no-filter, Caribbean, minimalist, everything-maxed.

**Data completeness: 132/132 pass.** Every destination has all required scoring fields (geographyOptions, weatherMatch, settingMatch, paceMatch, priorityMatch), all 4 cost tiers, unique IDs. Region coverage: Europe 36, US 24, Mex/LatAm 18, AusNZ 14, Asia 13, Caribbean 12, Canada 10, Africa 7.

83. ~~**7 African destinations orphaned**~~ ✅ **FIXED (2026-07-22)** — added "Africa" option (🌍, value 7) to the quiz geography question in `mockups/quiz/questions.js`. Scoring code already supported value 7, so no matcher change needed. Verified: an Africa-selecting persona now returns Mauritius / Zanzibar / Marrakech, correctly gated to region 7. All 7 African destinations (Marrakech, Cape Town, Accra, Stellenbosch, Nairobi, Zanzibar, Mauritius) can now surface. Quiz geography now offers all 7 regions (0–6 + Africa=7). **Note:** update CLAUDE.md quiz spec — it still says Africa was removed.

**Behavior note (not a bug):** when a user's weather and geography answers conflict (e.g. "warm & sunny" + "Canada"), geography wins — it's a hard gate. Persona F asked for warm + Canada and got Canadian mountain towns. Correct by design, but worth knowing the results won't honor the impossible half of the request.

## Updates 2026-07-22 (batch 4) — live Chrome QA pass (Claude in Chrome)

Drove the live deployed site (retirevibes.com) end to end in a real Chrome browser as the Africa persona (warm / small-town / Africa / slow / comfortable+ / rent / community+peace+health).

**Passing (verified live):**
- Homepage: redirect `retirevibes.com` → homepage works, DM Serif Display renders, 3-link nav, no console errors.
- Quiz: all 7 questions render with illustrated cards; single-select auto-advances; multi-select shows Next + selection state; progress dots correct.
- **Africa path (item 83) works end to end LIVE** — Africa appears as the 7th geography option; selecting it returned Mauritius (#1, with confetti), Zanzibar (#2), Marrakech (#3) — all three previously-orphaned destinations, all correctly gated. Order exactly matched the Node prediction.
- Reveal mechanic: reverse countdown #3→#2→#1 with confetti finale; vibe label "Village Wanderer" generated; "Match X of 3" indicator.
- Profile text accurately reflects all answers.
- Save modal: opens, email field, Escape dismisses cleanly.
- Share modal: Copy link / Email / native Share, dynamic top-match quote.
- **Mobile-nav fix (items 80/81) verified live** — `shared.css` + `shared.js` now load on browse-homes (both) and coming-soon; hamburger element injects (display:none on desktop, reveals ≤980px). Note: could not capture a true mobile-width screenshot (the browser tool captures at fixed desktop resolution), so visual mobile rendering still belongs on Natalie's real-device pass (item 46).

**New findings from the live pass:**

84. 🔴 **Email capture is LIVE on the results page — contradicts the v1 "no email collection" decision (P0 to resolve).** The save modal (heart → "Save [City]" email form) AND the "Email me my matches" button both collect email on the live results page. Strategic decision on line 13 says v1 ships WITHOUT email collection (saves/magic-link/Resend all deferred to v2) specifically to avoid CCPA/GDPR/CAN-SPAM burden. Either (a) these must be disabled/hidden for v1, or (b) if email capture stays, **attorney review (item 19) becomes launch-blocking again.** Owner: **Natalie + legal-compliance + product**. This is the single most launch-relevant finding.

85. 🟠 **"via Booking.com" still on the results-page scouting handoff** — `results-matcher.js` line 309 hardcodes `<span class="partner">via Booking.com</span>`. Survived the "Booking.com removed entirely" sweep (items 76/276). The link itself routes to the editorial scouting page correctly; only the caption is wrong. Fix: change to "via Expedia" or remove. Owner: **cto**. Effort: XS.

86. 🟠 **132 generated real-estate pages lack the Privacy/Terms footer links** — batch-2 (item 82) added them to the 12 root pages only. The generated `/destinations/[slug]/real-estate/` pages have `shared.css` but not `footer-legal-links`. Fix: add the block to `generate-real-estate.js` and regenerate. Owner: **cto**. Effort: S.

87. 🟠 **International real-estate handoff points everyone to Porto** — for all non-Porto international matches (including the newly-unlocked Africa destinations), the "Explore [City] homes" card routes to `browse-homes-international.html`, which 301-redirects to `/destinations/porto/real-estate/`. A Mauritius user lands on the Porto real-estate guide; the "via Idealista" partner label is Europe-only and irrelevant for Africa/Asia/Caribbean. Partly a consequence of unlocking Africa (item 83). Decision: route international handoffs to the destination's own generated real-estate page, or make the copy generic. Owner: **product + cto**. Effort: M.

**Cosmetic:** city-state matches render "Mauritius, Mauritius" (name==country) in the share quote and card subhead — affects Mauritius, Barbados, Malta, Singapore, etc. Low priority.

## Updates 2026-07-22 (batch 5) — email capture removed + handoff/footer fixes

**Decision (Natalie, 2026-07-22): v1 collects NO email. Saves are session/device (localStorage) only.** Implemented site-wide:

84. ~~🔴 **Email capture on results page**~~ ✅ **FIXED (2026-07-22)** — removed the email save-modal HTML from `results-page-mockup.html`, `destination-detail.html` (covers all ~110 dynamic destination pages), and `destination-coming-soon.html`. Neutered `toggleSave`/`handleSave` on all three so the heart saves silently to `localStorage` with no email gate (homepage + my-retirevibes were already session-only). Replaced the "Want these in your inbox? / Email me my matches" card on the results page with a "Keep your favorites" card (heart-to-save, links to My RetireVibes). Removed the EmailJS + magic-link script includes from destination-detail. **Verified: zero `<input type="email">` and zero reachable save-modal triggers site-wide.** The share modal (copy link / email-to-friend via mailto / native share) is retained — it sends nothing to RetireVibes. **This clears the CCPA/GDPR/CAN-SPAM exposure that would have made attorney review (item 19) launch-blocking.**

85. ~~🟠 **"via Booking.com" on results handoff**~~ ✅ **FIXED (2026-07-22)** — `results-matcher.js` line 309 now reads "via Expedia". Also cleaned two other user-facing Booking.com mentions: privacy-policy.html partner list (removed Booking.com, kept Expedia) and a scouting-trip.html search tip (Booking.com → Expedia). Booking.com now appears in zero user-facing pages.

86. ~~🟠 **Generated real-estate pages missing Privacy/Terms footer links**~~ ✅ **FIXED (2026-07-22)** — added a `footer-legal-links` block (Privacy Policy + Terms, contrast-tuned for the dark footer) to `generate-real-estate.js` and regenerated all 132 pages. Verified 132/132 now link Privacy + Terms.

87. ~~**International real-estate handoff pointed to Porto**~~ ✅ **FIXED (2026-07-22)** — results-page handoff now routes international matches to their own generated real-estate page (`destinations/{id}/real-estate/`); partner label changed from Europe-specific "via Idealista / local partner" to generic "via local listing partners."
    - **Root cause was deeper than the default fallback:** every destination in `destinations-data.js` carries a legacy `browseHomesPage` override that won over the fallback. Those overrides were inconsistent — 50 international → `browse-homes-international.html` (Porto redirect), ~53 → `destination-detail.html?...` (the destination page, not real estate), and **5 NZ entries (Nelson, Queenstown, Sunshine Coast, Tauranga, Wānaka) → archived `destination-[city].html` pages that no longer exist (broken links).**
    - **Fix:** `results-matcher.js` now ignores `browseHomesPage` for international matches and always uses `destinations/{id}/real-estate/`. Verified all 108 international destinations have a real-estate page (0 missing), so the 5 previously-broken NZ links are now repaired too. Domestic unchanged (keeps `browse-homes-domestic.html`). `destination-detail.html` already routed correctly and uses no override.
    - **Follow-up (optional cleanup):** the `browseHomesPage` field in `destinations-data.js` is now dead for international and partly stale — could be pruned later, but it's inert with the matcher fix in place.

**Note:** dead `openSaveModal`/`submitSave` function definitions remain in results/detail JS but are fully unreachable (no DOM, no callers). Inert; can be pruned in a later cleanup.

**Doc hygiene note:** numbering has collisions (two item 61s, two item 66s). Per doc rules, not renumbering — new items start at 76.

**Stale-item review (>30 days):** items 46/47 defended (launch-blocking QA, owner Natalie). Item 19 (attorney) stays P2, gated on email capture / paid placements / marketing spend. The four open questions above are now the oldest blockers in the project (58 days).

## Updates 2026-07-22 (batch 6) — design/UX review items

Full-site design + UX review completed (Design Lead + UX Lead hats). Verdict: **Ship, with a short polish pass** — nothing launch-blocking; the polish pass is a "before hard launch / before marketing spend" set, not a soft-launch gate. Full detail in `design-ux-review-2026-07.md`. Items below map the review's priority recommendations to the backlog.

88. ~~**Standardize hero text scrim for legibility**~~ ✅ **FIXED (2026-07-22)** — replaced the weak mid-ramp hero gradient with one standardized 4-stop scrim (`0 → .10@30% → .48@62% → .88@100%`) that darkens the mid-lower band where the kicker/breadcrumb text sits, while keeping the top of the photo clear. Applied to `destination-detail.html`, `scouting-trip-detail.html`, `scouting-trip-domestic.html`, `scouting-trip.html`, and `generate-real-estate.js` (132 pages regenerated). Also bumped back-link text from 82%→92% white. Owner: **design-lead**. Live-verify recommended after push.

89. ~~**Older-audience readability pass**~~ ✅ **FIXED (2026-07-22)** —
    - **Contrast (the main issue):** measured `--warm-gray` #7A6E5F at **4.24 on cream-soft (fails 4.5)** and a marginal 4.62 on cream. It's used only as text color (138 instances, never borders/backgrounds), so darkening is safe. Standardized the token to **#6A5E4F** across all 19 pages + `generate-real-estate.js` + `shared.css` fallback (132 real-estate pages regenerated). New ratios: cream 5.87, cream-soft 5.38, white 6.31 — clears AA everywhere. Also resolved a pre-existing inconsistency (4 flagship pages already used #6A5E4F, 15 still used the old value).
    - **Base body type:** already 16px on all main pages — the "16–17px" recommendation is essentially met; left as 16px (solid AA baseline) rather than force a global bump that risks layout.
    - **Touch targets:** results-page `.card-save` was 40×40px → bumped to **44×44px**. All others already pass (homepage 44, destination hero-heart 52, mobile nav ~44).
    - **Deliberately not changed:** the smallest 11–13px uppercase micro-labels (kickers, pill tags) — WCAG sets no min px and bumping them risks layout; now that their contrast passes they're acceptable. Revisit only if real-device testing flags them.
    - **Doc note:** CLAUDE.md + design-lead.md still list `--warm-gray: #7A6E5F`; update the token reference to #6A5E4F. Owner: **design-lead**.

90. ~~**Fix two consistency drifts**~~ ✅ **FIXED (2026-07-22)** — (a) Nav CTA standardized to "Find my RetireVibes" (the majority label, 13 pages) on the 3 outlier scouting pages (`scouting-trip-detail`, `scouting-trip-domestic`, `scouting-trips`) — 0 "Take the quiz" nav labels remain. **Note:** CLAUDE.md nav spec still says "Take the quiz →" — spec should be updated to match, or brand-copy-editor can reverse the choice. (b) Vibe label: `results-matcher.js` now reads the existing `rv_vibe_label` (quiz's) and only falls back to `getVibeLabel` when there's no quiz label — a user who took the quiz sees the same label everywhere, even on reload. **Deeper follow-up (not done):** the two generators still use different vocabularies ("Village Wanderer" family vs "The Sun-Chaser" family); picking one canonical vocabulary is a separate content decision. Owner: **brand-copy-editor + cto**.

91. ~~**Immersive homepage hero**~~ ✅ **SHIPPED (2026-07-22, straight swap)** — replaced the text-on-cream gradient hero with a slow-crossfading rotation of 6 destinations, one per region (Porto → San Miguel de Allende → Sarasota → Bali → Barbados → Stellenbosch) so it shows range with no single-destination bias. White headline + gold-soft italic accent over a directional scrim (mirrors the destination-page hero pattern), terracotta CTA scoped to the hero only, magazine-style rotating location caption + progress dots. Photos curated with Natalie. **Performance:** first image (Porto) loads eagerly; the other 5 lazy-hydrate on `requestIdleCallback`. **Accessibility:** reduced-motion users see a single static image (no rotation). Relative image paths, mobile min-height + caption/dots repositioned <980px. **Note:** shipped as the new default (not A/B) per Natalie; worth watching homepage→quiz-start rate post-launch to confirm it converts at least as well as the text hero.

92. **Design micro-fixes** — P3. Suppress "City, City" for city-states where destination name == country (Mauritius, Barbados, Malta, Singapore, etc.) in share quote + subhead; confirm the advisor "Where to find one ↓" button arrow is an intentional scroll affordance (not a stray arrow); confirm Q1's lighter headline color/weight is intentional vs Q2–Q7. Owner: **design-lead + cto**. Effort: S.

**Design review — what's already strong (no action):** quiz UX (best-in-class), results reveal + confetti, photography standard, editorial voice, cost-framing discipline, white-space rhythm. Competitive position (vs International Living / Nomad List / 55places) is emotional + editorial — the moat to protect.

## Updates 2026-07-22 (batch 7) — domestic scouting routing bug

93. ~~🔴 **All 24 domestic destinations routed to a 2-city scouting page**~~ ✅ **FIXED (2026-07-22)** — root cause of the item-54 regression. `scouting-trip-domestic.html` only had Asheville + Sarasota; the other 22 domestic destinations showed Asheville content under a mismatched URL (found on Puerto Rico). Fix: unified all destinations — domestic and international — onto the data-driven `scouting-trip-detail.html?id=X`, which already adapts framing (Medicare vs expat healthcare, domestic vs international flights) and already has `scouting-data.js` entries for 22/24 domestic (Flagstaff + Ashland use a generic-but-correct-city fallback). Changed 3 routing points: `destination-detail.html`, `results-matcher.js` (results-page handoff had the same bug for domestic #1 matches), and `generate-real-estate.js` (real-estate "Plan a scouting trip" link → each destination's own page; 132 pages regenerated). Verified zero `scouting-trip-domestic` references remain site-wide. **`scouting-trip-domestic.html` is now orphaned** — safe to delete in a later cleanup. Also noted: the stale `scoutingPage` override field in `destinations-data.js` (all domestic → 'scouting-trip.html') is now moot/ignored — prune later.

**QA process note:** my 2026-07-22 live Chrome pass only tested the international (Mauritius) scouting path, which used the good page — so the domestic breakage slipped through. Added to the manual test plan: test at least one domestic non-Asheville/Sarasota scouting handoff.

## Updates 2026-07-22 (batch 8) — favicon + quiz review

94. ~~**No favicon**~~ ✅ **SHIPPED (2026-07-22)** — site had no favicon at all. Created a set from the chosen concept (cream serif "R" on terracotta, matching the wordmark): `favicon.svg` (scalable), `favicon.ico` (16/32/48), `favicon-16/32.png`, `apple-touch-icon.png` (180). Wired root-absolute (`/favicon.svg` etc.) into all 28 root pages + `generate-real-estate.js` (132 pages regenerated) — 100% coverage. Rendered with a bold serif; matches DM Serif Display closely at favicon scale.

**Quiz review (full detail in `quiz-review-2026-07.md`)** — quiz is strong; polish items below, none block soft launch:

95. ~~**Rename Q4 "Socialite" → "Social first"**~~ ✅ **FIXED (2026-07-22)** — `mockups/quiz/questions.js`: label "Socialite" → "Social first" (and emoji 🥂 → 👥) so it describes a pace, not a wealthy-party person-type. (The dinner-table art still repeats with Q7 Community — that's covered by the item 97 artwork refresh.)

96. ~~**Quiz focus management on question advance**~~ ✅ **FIXED (2026-07-22)** — `mockups/quiz/quiz.js`: question `<h2 class="q-title">` now has `tabindex="-1"` and receives `.focus({preventScroll:true})` after each render, so keyboard + screen-reader users keep their place on advance (auto-advance or Next) and the new question is announced. Also added `aria-hidden="true"` to the decorative `.img-svg` artwork. Both files pass syntax check.

97. **Quiz artwork refresh** — P3 (design). Leans slightly sterile/repetitive, not juvenile. Priorities: de-duplicate scenes reused across Q4/Q7 (hammock, dinner table, mountain/hiker), replace the "?" signpost ("Not sure yet"), enrich the 3–4 flattest scenes. Owner: **design-lead**. Effort: M.

98. **Quiz housekeeping** — P3 (cleanup). Prune unused artwork in `option-scenes.js` (geography `q4` set, partner/solo `q7` set, `q3.mix`), the unused `slider` question type in `quiz.js`, and vestigial `sceneKey` fields. Owner: **cto**. Effort: S.
