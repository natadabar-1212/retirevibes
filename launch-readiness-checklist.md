# RetireVibes — Launch Readiness Checklist

**Compiled by:** Project Manager agent
**Date:** 2026-05-21 | **Last updated:** 2026-05-25
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

7. **CI/CD with preview environments** — Vercel auto-deploys on push to GitHub. Rollback procedure: not formally documented. Owner: **devops-security + cto**. Effort: S.

### Email + auth — DEFERRED TO V2

8–12. ~~Email/auth items~~ ⏸ **DEFERRED** — v1 launches without email collection. Resend integration built but dormant. Reactivate for v2 with attorney review.

### Legal + compliance

13. **Privacy Policy** — Draft exists (`privacy-policy.html`). Simplify to cover analytics only (no email collection). Then get attorney review before launch. Effort: S to simplify, then external dependency.

14. **Terms of Service** — Draft exists (`terms-of-service.html`). Strip email opt-in language (no longer relevant for v1). Attorney review required. Effort: S to simplify, then external dependency.

15. **Affiliate disclosure on every page with affiliate links** — FTC-compliant: conspicuous, plain language, near the link. Pages: `scouting-trip.html`, `browse-homes-international.html`, `browse-homes-domestic.html`, `find-an-advisor.html`, destination pages with embedded affiliate links. Owner: **legal-compliance + brand-copy-editor**. Effort: M.

16. ~~**Advisor directory disclosure**~~ ✅ **DONE** — fake advisors removed, directory cleaned up.

17. **Cookie consent banner** — Using Plausible (cookie-free) eliminates most of this. If GA4 is added, a lightweight banner is needed for EU visitors. Decision: lock in Plausible first, then decide. Effort: S.

18. ~~**Email opt-in compliance**~~ ⏸ **DEFERRED** — no email capture in v1.

### Real lawyer review

19. ~~**Get a real attorney to review before launch**~~ ⏸ **MOVED TO P2** — with Plausible (cookie-free, no personal data) and no email collection, legal exposure at soft launch is minimal. Attorney review becomes required before: (a) email collection goes live, (b) paid advisor placements are real, (c) marketing drives significant traffic.

---

## P1 — Required for launch (functional + content gaps)

### Broken / placeholder links

20. **Wire Porto scouting trip handoff** — currently `href="#"`, should be `scouting-trip.html`. Owner: **product**. Effort: XS.

21. **Mérida scouting trip handoff** — page doesn't exist. Either build a Mérida scouting page or temp-route to a Booking.com Mérida search. Owner: **product + content-editorial**. Effort: S (temp link) or M (real page).

22. **Asheville + Sarasota scouting handoffs** — point to `scouting-trip-domestic.html` with city param. **[VERIFY]** that page handles both `?city=asheville` and `?city=sarasota`. Owner: **product**. Effort: S.

23. **"Share my match" button on results page** — needs a working share modal (copy link / native share / mailto). Owner: **product + design-lead**. Effort: S.

24. **In-content resource links** (Medigap guide, D7 walkthrough, tax comparison, insurance risk guide) — currently `href="#"`. Either build the content, link to vetted external resources, or remove the links pre-launch. Owner: **content-editorial**. Effort: M-L depending on choice.

### Missing pages

25. ~~**About page**~~ ⏸ **DEFERRED to v1.1** — pages don't exist and aren't linked. Add after launch once real user questions inform the content.

26. ~~**FAQ page**~~ ⏸ **DEFERRED to v1.1** — same as above. Account-management questions go away with email deferral; revisit once traffic reveals what users actually ask.

27. **Resources page** — placeholder. Curated directory of external tools with transparent affiliate relationships. Owner: **content-editorial + affiliate-partnerships**. Effort: M.

### Known data / matching issues

28. **Geography index bug in quiz** (per `retirevibes_code_files.md`) — `questions.js` shows 6 geography options but `results-matcher.js` expects Asia at index 6. Currently Asia is being stored as index 5 (Australia/NZ). Fix: add `value: 6` to Asia option in `questions.js` and update click handler to use `o.value ?? i`. **[VERIFY]** this bug still exists. Owner: **product + cto**. Effort: XS to fix; matters for quiz accuracy.

29. **Australia/NZ destinations orphaned** — 10 AusNZ destinations in `destinations-data.js` but no quiz UI to select that region. Decision: restore the option or remove the destinations. Owner: **product**. Effort: XS.

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

38. **Schema markup** on destination pages (`Place`, `FAQPage` where applicable, `Article` for content). Owner: **seo-aeo-specialist**. Effort: S.

39. ~~**Fix the quiz URL**~~ ✅ **DONE** — canonical URL is now `/quiz.html`; old `/mockups/vibe-quiz.html` redirects to it.

40. ~~**OG image / Twitter card metadata**~~ ✅ **DONE** — added to homepage, quiz, results, all 4 destination pages, and destination-detail.html (dynamic). Results page copy written for shareability ("My RetireVibes Matches…"). Destination images used per page.

### Analytics + measurement

41. ~~**Pick analytics tool**~~ ✅ **DONE** — GA4 selected (free, existing Google account). Measurement ID `G-W19300JTXV` wired in shared.js. ✅

42. ~~**Instrument the core funnel**~~ ✅ **DONE** — GA4 + CSPs wired across all pages. Events: `quiz_start`, `quiz_question_complete` (with question_number prop), `quiz_complete`, `vibe_label_generated` (with vibe_label prop). Outbound affiliate clicks tracked automatically via GA4. Page views tracked automatically.

43. **Search Console set up** for organic traffic visibility. Owner: **seo-aeo-specialist**. Effort: XS.

44. **Define what "launch worked" looks like** — pick 2-3 metrics with a 14-day target. Owner: **analytics-lead + product**. Effort: S.

### Accessibility + cross-device

45. **WCAG 2.1 AA pass** on the four destination pages + quiz + results page. Particularly: contrast (warm-gray on cream is borderline), touch targets ≥44×44, focus states, form labels. Owner: **design-lead**. Effort: M.

46. **Real-device QA** on iPhone, Android, iPad, and at least one older-model phone (audience skews older — they keep phones longer). Test: quiz with one thumb, save modal, email flow, share. Owner: **design-lead + product**. Effort: M.

47. **Browser test** on Safari 14+, Chrome, Firefox, Edge. Older audience = higher Safari share than tech-product baselines. Owner: **product**. Effort: S.

---

## P2 — Strong nice-to-have. Launch without these if needed; add fast after.

48. **Homepage destination cards clickable** (wrap in `<a>`). **[VERIFY]** — may already be fixed since SESSION_HANDOFF was written. Owner: **product**. Effort: XS.

49. **Add "Learn more" links to #2 and #3 reveal cards** on results page (the deep-dive pages now exist). Owner: **product**. Effort: XS.

50. **Newsletter signup somewhere visible** (homepage footer + Inspiration page when it exists). This is the retention engine — every day without an opt-in surface is leads lost. Owner: **marketing-lead + product**. Effort: S.

51. **Welcome email when an account is created** — first impression. Owner: **content-editorial + brand-copy-editor + cto** (email service). Effort: S to draft; M to wire.

52. **Featured advisor program live** — Rebecca Holt, James Nakamura, Carol Simmons, Michael Torres are listed; **[VERIFY]** whether these are real advisors who have agreed to be featured, or placeholder names. If placeholders, replace before launch or remove the featured tier and lead with SmartAsset only. Owner: **affiliate-partnerships + legal-compliance**. Effort: dependency on real partners.

53. **Mérida scouting trip page** (a real one, not just a Booking link). Owner: **content-editorial**. Effort: M.

54. **Domestic scouting trip pages** (Asheville, Sarasota) — `scouting-trip-domestic.html` exists; verify content is real and city-aware. Owner: **content-editorial + product**. Effort: S-M depending on current state.

55. **Inspiration Hub MVP** — even a 3-piece launch (one destination spotlight, one expat interview, one comparison piece) is enough to start the retention loop. Owner: **content-editorial + design-lead + product**. Effort: L.

56. **Backup strategy** for email-captured leads (export from EmailJS or wherever; weekly cadence). Lead loss is unrecoverable. Owner: **devops-security**. Effort: S.

57. **Expand hand-crafted destination pages** — currently only Porto, Mérida, Asheville, and Sarasota have rich, researched content (neighborhoods, visa details, cost tables, healthcare picture). All other destinations use the thin dynamic template. Natalie's goal: meaningful researched content on all pages before launch. Approach: identify the top 10–15 destinations that surface most frequently as quiz matches, hand-author those first (same structure as the 4 existing pages). Remaining destinations can be a phased rollout post-launch. Owner: **content-editorial**. Effort: L (each page is ~6–8 hours of research + writing). Priority: start early — this is the longest-lead content item on the list.

---

## P3 — Defer to post-launch unless something forces it forward

58. **RetireVibes Pro** — explicitly post-MVP per the brief. Build only when users start asking for more destinations or advanced features.

59. **Australia/NZ region option** — restore only if research suggests demand; otherwise let the 10 destinations sit unused.

60. **Tourism board sponsorships** — pursue once you have 30-day traffic numbers to share with sponsors.

61. **AEO optimization** — Q&A formatting for AI assistant citations. Real upside but no urgency at launch.

62. **Quarterly check-in email automation** — retention feature from the brief; build once accounts are accumulating.

63. **Magic-link as full session restore** vs. ephemeral access — current implementation passes state in the URL. Fine for launch; consider proper session tokens later.

---

## Open questions only Natalie can answer

These block sequencing. Answer first.

- **Is retirevibes.com registered?** If yes, when does it expire?
- **Are the four featured advisors real, signed partners?** Or placeholder names?
- **What's the realistic launch date?** "When it's ready" is fine, but is there an external trigger (a marketing window, a partner commitment, a personal deadline)?
- **What's the launch budget?** Affects choices: paid SEO content vs. organic-only, paid host tier vs. free, lawyer for terms vs. template-based.
- **Soft launch or hard launch?** Soft (just the URL, no announcement, watch for breakage for 2 weeks) vs. hard (Pinterest, PR, email blast on day one). The list above changes weight depending.
- **Pinterest / Facebook / paid social — comfortable running ads yourself, or want an outside marketer?**

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
