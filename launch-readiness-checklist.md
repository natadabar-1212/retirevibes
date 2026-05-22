# RetireVibes — Launch Readiness Checklist

**Compiled by:** Project Manager agent
**Date:** 2026-05-21
**Status of this doc:** Living document — review weekly, prune monthly.

---

## Context this is built on

I reviewed: `CLAUDE.md`, `RetireVibes_Product_Brief.md` (v1.2), `SESSION_HANDOFF.md`, `site-audit-report.md` (May 4, 2026), all project memories, and a partial scan of the current file structure.

**Important: some source docs are stale.** Several items the brief and SESSION_HANDOFF list as "not built" appear to exist in the current file list — `scouting-trip-domestic.html`, `destinations.html`, `destination-detail.html` (dynamic template for ~95 destinations), `magic-link.js` (EmailJS auth wired up), `results-matcher.js` + `destinations-data.js` (real matching algorithm), `security-audit-report.html`, `site-audit-report.md`. Before working any item below, verify against the current file rather than assuming the doc is right. Anything marked **[VERIFY]** below is something I'm not sure is built or not.

---

## P0 — Launch-blocking. Do not ship without these.

### Factual / legal accuracy (from May 4 site audit)

1. **Porto NHR tax section** — Current copy says NHR "largely closed in 2024." Wrong: NHR fully closed March 31, 2025; the IFICI replacement does not apply to retirees. A reader acting on the current copy could make a real financial mistake. Owner: **brand-copy-editor + legal-compliance**. Effort: S.

2. **Asheville Helene section** — Significantly understates the multi-year recovery situation. Reframe honestly. Owner: **brand-copy-editor + content-editorial**. Effort: S.

3. **Audit all destination pages for money-claim violations** — The no-money-claims rule was codified after some copy was written. Pass every page against it. Owner: **brand-copy-editor**. Effort: M (covers 4 static + the dynamic `destination-detail.html` template, which is the bigger lift since it serves all ~95 other destinations).

### Domain + hosting + deploy

4. **Confirm retirevibes.com is registered** to Natalie and pointed at the live host. Owner: **cto + devops-security**. Effort: S if already owned.

5. **Pick + provision a host** (Vercel, Netlify, or Cloudflare Pages). The static prototype is currently uncommitted to a real deploy pipeline as far as I can tell. Owner: **cto**. Decision needed before SSL / DNS / preview environments. Effort: S (the decision) + S (the provisioning).

6. **SSL + DNS hygiene** — Valid auto-renewing cert, CAA records, no orphan subdomains. Owner: **devops-security**. Effort: S.

7. **CI/CD with preview environments** so changes get reviewed before going live, plus a rollback procedure. Owner: **devops-security + cto**. Effort: M.

### Email + auth — verify the magic-link path is launch-ready

The prototype has `magic-link.js` using EmailJS with a client-side public key. This is a real auth path, but:

8. **Lock down EmailJS origin** to `https://retirevibes.com` only (instruction is in the file's comment header). Without this, anyone can use your EmailJS quota to send spam in your name. Owner: **devops-security**. Effort: S — but launch-blocking.

9. **Rate limiting + bot honeypots on every email-capture surface** — first-save modal, "email me my matches," any contact form. EmailJS does not provide this on its own. Owner: **devops-security**. Effort: M.

10. **CAPTCHA on first-save and advisor contact** — these will get bot-spammed within 24 hours of launch. Owner: **devops-security**. Effort: S.

11. **Decide if EmailJS is the production answer or interim** — coordinate with [[cto]]. EmailJS is fine for low-volume launch; if you expect Pinterest to drive serious traffic, a real provider (Loops, Resend, ConvertKit) is more durable. Owner: **cto + devops-security**. Effort: decision only; switching later is a real project.

12. **[VERIFY]** Does the magic link actually restore saved state on `my-retirevibes.html` correctly? Confirm by sending one to your own email and clicking through.

### Legal + compliance

13. **Privacy Policy live and linked** — required for CCPA, GDPR, and most state privacy laws. Must cover what's collected, how used, deletion rights. Owner: **legal-compliance**. Effort: M (use a generated draft, then have a real lawyer review).

14. **Terms of Service live and linked** — must include: not financial/legal/tax/immigration/medical advice; no warranty on destination info; limitation of liability; account deletion. Owner: **legal-compliance**. Effort: M.

15. **Affiliate disclosure on every page with affiliate links** — FTC-compliant: conspicuous, plain language, near the link. Pages: `scouting-trip.html`, `browse-homes-international.html`, `browse-homes-domestic.html`, `find-an-advisor.html`, and any destination page with embedded affiliate links. A footer-only disclosure is not enough. Owner: **legal-compliance + brand-copy-editor**. Effort: M.

16. **Advisor directory disclosure** — Clear "Featured" labeling on paid placements, page-level disclosure that placement is paid, language confirming RetireVibes does not provide financial advice. Owner: **legal-compliance**. Effort: S.

17. **Cookie consent banner** if any analytics or affiliate tracking sets cookies — required for GDPR/EU traffic (likely given international destinations). Owner: **legal-compliance + devops-security**. Effort: M.

18. **Email opt-in compliance** — every email-capture flow needs explicit, un-pre-checked consent. Outbound emails need CAN-SPAM-compliant footer (physical address, unsubscribe). Owner: **legal-compliance + brand-copy-editor**. Effort: S.

### Real lawyer review

19. **Get a real attorney to review** Privacy Policy, Terms, and the advisor disclosure language before launch. Not optional. Owner: **legal-compliance** flags it; **Natalie** retains counsel. Effort: external dependency.

---

## P1 — Required for launch (functional + content gaps)

### Broken / placeholder links

20. **Wire Porto scouting trip handoff** — currently `href="#"`, should be `scouting-trip.html`. Owner: **product**. Effort: XS.

21. **Mérida scouting trip handoff** — page doesn't exist. Either build a Mérida scouting page or temp-route to a Booking.com Mérida search. Owner: **product + content-editorial**. Effort: S (temp link) or M (real page).

22. **Asheville + Sarasota scouting handoffs** — point to `scouting-trip-domestic.html` with city param. **[VERIFY]** that page handles both `?city=asheville` and `?city=sarasota`. Owner: **product**. Effort: S.

23. **"Share my match" button on results page** — needs a working share modal (copy link / native share / mailto). Owner: **product + design-lead**. Effort: S.

24. **In-content resource links** (Medigap guide, D7 walkthrough, tax comparison, insurance risk guide) — currently `href="#"`. Either build the content, link to vetted external resources, or remove the links pre-launch. Owner: **content-editorial**. Effort: M-L depending on choice.

### Missing pages

25. **About page** — placeholder. Need a warm, mission-driven About that establishes credibility (especially important for a 40–55 audience that's skeptical of new sites). Owner: **content-editorial + brand-copy-editor**. Effort: M.

26. **FAQ page** — placeholder. Must cover: how matching works, estimate accuracy, account management, retake the quiz, what RetireVibes is/isn't. Owner: **content-editorial**. Effort: M.

27. **Resources page** — placeholder. Curated directory of external tools with transparent affiliate relationships. Owner: **content-editorial + affiliate-partnerships**. Effort: M.

### Known data / matching issues

28. **Geography index bug in quiz** (per `retirevibes_code_files.md`) — `questions.js` shows 6 geography options but `results-matcher.js` expects Asia at index 6. Currently Asia is being stored as index 5 (Australia/NZ). Fix: add `value: 6` to Asia option in `questions.js` and update click handler to use `o.value ?? i`. **[VERIFY]** this bug still exists. Owner: **product + cto**. Effort: XS to fix; matters for quiz accuracy.

29. **Australia/NZ destinations orphaned** — 10 AusNZ destinations in `destinations-data.js` but no quiz UI to select that region. Decision: restore the option or remove the destinations. Owner: **product**. Effort: XS.

### Audit fixes from the May 4 report (P1/P2 items still likely open)

30. **Mérida stat strip / numbers table mismatch** ($2,000–2,800 vs. $2,920). Owner: **brand-copy-editor**. Effort: XS.

31. **Sarasota insurance estimate** likely understated by ~2x; revise or add a strong caveat. Owner: **content-editorial**. Effort: S.

32. **Sarasota HOA row missing** from numbers table — material cost gap. Owner: **content-editorial**. Effort: S.

33. **Sarasota stat strip rent** — update "$3,200/mo" to "$2,200–$3,200/mo." Owner: **brand-copy-editor**. Effort: XS.

34. **Sarasota family vibe card** — remove grandkids assumption. Owner: **brand-copy-editor**. Effort: XS.

35. **Sarasota similar-card distance** — "two hours from Miami" → "about 2.5 hours from Miami." Owner: **brand-copy-editor**. Effort: XS.

### SEO + technical SEO basics

36. **Title + meta description on every page** — quick win, table stakes for SEO. Owner: **seo-aeo-specialist**. Effort: S.

37. **Sitemap.xml + robots.txt** with the canonical URL set. Owner: **seo-aeo-specialist + devops-security**. Effort: XS.

38. **Schema markup** on destination pages (`Place`, `FAQPage` where applicable, `Article` for content). Owner: **seo-aeo-specialist**. Effort: S.

39. **Fix the quiz URL** — currently at `/mockups/vibe-quiz.html`. Should be `/quiz` or `/take-the-quiz` before launch. The quiz is the most-shared and most-marketed URL; a `/mockups/` prefix is bad. Owner: **cto + seo-aeo-specialist**. Effort: S; coordinate redirects.

40. **OG image / Twitter card metadata** on at least homepage, results page, and destination pages — these get shared on social. Owner: **seo-aeo-specialist + design-lead**. Effort: S.

### Analytics + measurement

41. **Pick analytics tool** (Plausible recommended; PostHog if you want funnels and replay; avoid GA4 unless required). Owner: **analytics-lead + cto**. Effort: S.

42. **Instrument the core funnel** before launch: page views, quiz start, per-question completion, quiz complete, save, email submit, affiliate clicks (per partner), share. Owner: **analytics-lead**. Effort: M.

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

---

## P3 — Defer to post-launch unless something forces it forward

57. **RetireVibes Pro** — explicitly post-MVP per the brief. Build only when users start asking for more destinations or advanced features.

58. **Australia/NZ region option** — restore only if research suggests demand; otherwise let the 10 destinations sit unused.

59. **Tourism board sponsorships** — pursue once you have 30-day traffic numbers to share with sponsors.

60. **AEO optimization** — Q&A formatting for AI assistant citations. Real upside but no urgency at launch.

61. **Quarterly check-in email automation** — retention feature from the brief; build once accounts are accumulating.

62. **Magic-link as full session restore** vs. ephemeral access — current implementation passes state in the URL. Fine for launch; consider proper session tokens later.

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
