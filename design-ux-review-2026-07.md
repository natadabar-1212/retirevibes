# RetireVibes — Design & UX Review

**Reviewers:** Design Lead + UX Lead (Claude)
**Date:** 2026-07-22
**Scope:** Full site — homepage, quiz, results, destination detail, real-estate, advisor, scouting templates
**Method:** Live walkthrough of the deployed site (retirevibes.com) in Chrome + best-practice research and competitive comps
**Stage:** Pre-soft-launch refinement (not early exploration — feedback is calibrated to polish, not direction)

---

## Overall verdict: **Ship — with a short polish pass**

RetireVibes already looks and feels like a real, credible product — closer to a boutique travel magazine than a typical "best places to retire" listicle site, which is exactly the positioning. The design system is coherent, the editorial voice is strong, the quiz-to-results flow is genuinely delightful, and the photography meets the brand's own high bar (real locations, daily-life energy, no gray-couple-on-beach clichés). Nothing here is broken or embarrassing.

The opportunities are refinements, concentrated in three places: **(1) legibility of text set over hero photos**, **(2) a few consistency gaps**, and **(3) older-audience readability tuning** (your 40–55 audience skews toward the older half, and they judge credibility partly on how effortless the site is to read). None of these block launch; all of them are worth doing in a focused half-day before you turn on marketing.

**Verdict by page:** Homepage — Ship. Quiz — Ship (best-in-class). Results — Ship. Destination pages — Ship. Real-estate — Ship. Advisor — Ship. Scouting — Ship. Cross-cutting polish — Revise before hard launch.

---

## What's working well (don't touch these)

- **The quiz is the strongest part of the product.** Illustrated scene cards, single-select auto-advance, "up to 2" guidance on multi-select, visible progress dots, a clear "Next" that appears after selection. This matches personality-quiz best practice almost exactly and feels like a personality quiz, not a form. Keep it.
- **The results reveal earns its moment.** The reverse countdown (#3 → #2 → #1) with the vibe label and the confetti on #1 is a real payoff. Anticipation is built correctly and the #1 match gets the drama it deserves.
- **Photography.** Ribeira in Porto, Le Morne in Mauritius, Stone Town in Zanzibar — these are real, recognizable, human-eye-level shots with life in them. This is half the product and it's being done right.
- **Editorial voice in the deeper pages.** "Porto's neighborhoods, honestly described," "You need an advisor who *speaks expat*," "When to go — and when *not* to." The copy has a point of view and treats the reader like an adult. This is a genuine differentiator versus the comps.
- **Cost framing discipline.** "About half what the same lifestyle costs in coastal California" — destination-to-destination comparison, never a claim about the user's finances. The brand rule is being held.
- **White-space rhythm and the warm palette.** The cream background and editorial pacing feel calm, not cluttered — which matters for an anxious audience.

---

## Findings by area

Severity: 🔴 Critical (fix before launch) · 🟡 Moderate (fix soon) · 🟢 Minor (nice-to-have)

### Cross-cutting — Hero text legibility over photos

| Finding | Severity | Recommendation |
|---|---|---|
| On the Porto and Mauritius (and likely all) destination/scouting heroes, the **small kicker/breadcrumb text** ("← Back to Mauritius", "INDIAN OCEAN ISLAND · SCOUTING TRIP GUIDE", "All destinations · Northern Portugal") sits over bright areas of the photo and is hard to read. | 🟡 | Add or strengthen a consistent bottom-left **gradient scrim** (e.g. `linear-gradient(180deg, rgba(27,58,75,0) 0%, rgba(27,58,75,0.7) 100%)`) behind hero text. Ensure the small label text specifically clears 4.5:1. The big serif titles are mostly fine; the small text is the problem. |
| The scrim strength appears to vary by image brightness, so some heroes read fine and others don't. | 🟢 | Standardize one scrim treatment in the shared hero component so legibility doesn't depend on which photo loaded. |

*Why it matters:* older readers and anyone on a bright phone screen outdoors lose this text entirely. It's the single most repeated issue across templates.

### Cross-cutting — Older-audience readability

| Finding | Severity | Recommendation |
|---|---|---|
| Body copy is 15–16px; secondary text uses `--warm-gray` on `--cream`, which the design system itself flags as borderline (~4.5:1 at best). Small uppercase kickers in warm-gray are decorative-but-important. | 🟡 | Bump base body to 16–17px site-wide. Audit warm-gray-on-cream everywhere it carries real information (labels, captions, fineprint) and darken to `--teal-soft` or `--warm-gray` only where it clears 4.5:1. Research on 50+ users is consistent: larger type + stronger contrast is a usability requirement, not a preference. |
| Touch targets: the heart/save buttons and some text links are on the smaller side. | 🟢 | Verify all interactive targets hit 44×44px on mobile. A 55-year-old thumb is less precise. |

### Homepage

| Finding | Severity | Recommendation |
|---|---|---|
| The hero is text-on-cream (no image) while every inner page is image-rich and immersive. It's clean and on-brand, but it under-sells the "travel magazine" promise at the exact moment you're trying to create intrigue. | 🟢 (opportunity) | Consider a signature hero image or a slow-rotating set of 3–4 destination shots behind the headline. The 2025 travel-design trend is immersive visual storytelling from the first screen; your inner pages already deliver it — the front door could too. Test it; don't assume. |
| First impression is strong: eye goes to "Where in the *world* should you retire?" → the terracotta "Find my RetireVibes" CTA. Correct hierarchy. | ✅ | Keep. |

### Quiz

| Finding | Severity | Recommendation |
|---|---|---|
| Q1 headline renders in a lighter/greyed serif while later question headlines are full teal — the first question looks slightly less finished than the rest. | 🟢 | Confirm this is intentional (it may be an animation in-state). If not, match Q1's headline weight/color to Q2–Q7. |
| No back-out affordance to the homepage mid-quiz beyond the browser back button (multi-select screens have "Back" between questions, which is good). | 🟢 | Minor; the wordmark isn't shown during the quiz. Fine for launch. |
| Overall: this is best-in-class. | ✅ | Ship as-is. |

### Results

| Finding | Severity | Recommendation |
|---|---|---|
| Two vibe-label systems exist. Taking the quiz produced "Village Wanderer"; loading the results page directly produced "The Simplicity Seeker." Both are valid but they can disagree for the same user. | 🟡 | Unify on one vibe-label generator (the quiz's `rv_vibe_label` is the richer one) so a user never sees two different labels for themselves. |
| The path to the first match has an extra beat: loading animation → vibe-label screen → "Reveal my matches" → #3. It builds anticipation (good) but adds a click before any payoff. | 🟢 | Keep the drama, but watch drop-off here in analytics. Best practice says the payoff shouldn't be buried; your reveal is intentional theater, so measure whether the extra step costs completions. |
| City-state matches render "Mauritius, Mauritius" (name = country) in the share quote and subhead. Affects Mauritius, Barbados, Malta, Singapore, etc. | 🟢 | Suppress the country when it equals the city name. |
| Save/share now session-only, no email — modals are clean, dismiss on Escape/outside-click, share quote is dynamic. | ✅ | Ship. |

### Destination pages

| Finding | Severity | Recommendation |
|---|---|---|
| Strong template: editorial hero, tag pills, "How it compares" callout, four-tier cost section, handoff cards. Hierarchy and pacing are right. | ✅ | Ship. |
| Same hero-scrim legibility issue as above (breadcrumb over photo). | 🟡 | See cross-cutting fix. |
| As the library scales from a handful of hand-built pages to 130+, visual consistency is the risk. | 🟢 | Lock the hero/section structure into one template (largely done via `destination-detail.html`) and hold new photos to the same crop/aspect and daily-life standard. |

### Real-estate pages

| Finding | Severity | Recommendation |
|---|---|---|
| "Neighborhoods, honestly described" with real tradeoffs, rent/buy bands, and lifestyle-tier pills is genuinely useful and distinctive. Dark footer now carries Privacy/Terms. | ✅ | Ship. |
| Partner label is now generic ("via local listing partners") after today's fix — good, since Idealista doesn't cover most non-European destinations. | ✅ | Keep. |

### Advisor pages

| Finding | Severity | Recommendation |
|---|---|---|
| "You need an advisor who *speaks expat*" hero is excellent — trust-building, specific, on-brand. | ✅ | Ship. |
| The right ~half of the dark hero is empty space at desktop width. | 🟢 | Optional: a supporting image, a subtle map motif, or a "6 questions to ask" preview could fill it. The minimalism is also defensible — low priority. |
| Primary CTA "Where to find one ↓" carries a down-arrow; site convention removed arrows from buttons (kept on text links). | 🟢 | The ↓ signals scroll, so it's arguably intentional — but confirm it's a deliberate exception, not a miss. |

### Scouting pages

| Finding | Severity | Recommendation |
|---|---|---|
| Beautiful hero, strong "When to go — and when *not* to" editorial framing, neighborhood-walk structure. | ✅ | Ship. |
| **Nav CTA label inconsistency:** this page's nav button reads "Take the quiz" while homepage/destination pages read "Find my RetireVibes." | 🟡 | Pick one label and use it in the nav on every page. The design system spec says the nav CTA is locked — this is drift. (Brand/Copy should choose; UX flags the inconsistency.) |

---

## Consistency audit (system-level)

| Element | Issue | Recommendation |
|---|---|---|
| Nav CTA label | "Take the quiz" (scouting) vs "Find my RetireVibes" (home/destination) | Standardize one label across all pages. |
| Hero scrim | Varies by page/photo brightness | One shared scrim treatment. |
| Vibe label | Two generators can disagree | Unify on `rv_vibe_label`. |
| Button arrows | Mostly removed, a few remain (advisor ↓) | Confirm intentional exceptions; otherwise remove. |
| Warm-gray text | Used decoratively for real info in places | Contrast-audit; darken where it carries meaning. |

---

## Priority recommendations (ranked by impact ÷ effort)

1. **Standardize the hero text scrim** (🟡, ~2 hrs) — one gradient treatment behind all hero overlay text, tuned so the small kicker/breadcrumb text clears 4.5:1 regardless of photo. Fixes the most-repeated legibility issue in one shared-component change. Highest impact per hour.

2. **Older-audience readability pass** (🟡, ~half day) — base body to 16–17px; contrast-audit every warm-gray-on-cream instance that carries information; confirm 44px touch targets. This is the difference between "looks nice" and "effortless to read" for the half of your audience that's 50+.

3. **Fix the two consistency drifts** (🟡, ~1 hr) — one nav CTA label everywhere; one vibe-label generator so a user never sees two labels for themselves.

4. **Consider an immersive homepage hero** (🟢, test first) — a signature image or slow-rotating destination set behind the headline, to deliver the "travel magazine" promise from the first screen. This is a hypothesis to A/B test, not a mandate — your minimal hero may already convert well.

5. **Micro-fixes** (🟢, ~30 min) — suppress "City, City" for city-states; confirm the advisor ↓ arrow and Q1 headline color are intentional.

---

## How RetireVibes compares to the field (competitive context)

I looked at how the main players in retirement discovery present themselves, to calibrate where RetireVibes sits.

- **International Living** — the category's biggest name. Authority-and-index driven: annual rankings, dense articles, a magazine-subscription model. Credible but text-heavy and editorially conventional. **RetireVibes' advantage:** it's an *experience*, not an index. The quiz-to-vibe personalization is something International Living doesn't offer.
- **Nomad List / nomads.com** — powerful filtering (climate, cost, real estate) across 1,500+ cities, with a data-dense, developer-flavored UI. Great for power users; cold and overwhelming for an anxious 50-year-old. **RetireVibes' advantage:** warmth and guided discovery instead of a filter wall. Don't drift toward Nomad List's density.
- **55places** — polished but US-only and community/listing-oriented (it's ultimately a real-estate lead engine). **RetireVibes' advantage:** international scope and a lifestyle-first, not listing-first, framing.

**Where the field is heading (2025–26 travel/discovery design):** immersive visual storytelling from the first screen, localized/authentic content over stock, and a clear path from inspiration → next step. RetireVibes is already aligned on authentic content and the inspiration→handoff path; the one trend it under-uses is *immersive visual storytelling on the homepage* (see recommendation #4).

**Net:** RetireVibes' moat is emotional and editorial — personalization, voice, and photography — in a category that's otherwise indexes and filters. Protect that. The refinements above sharpen it; none of them should push the product toward the colder, denser conventions of the comps.

---

## Sources

Best practices and comps referenced:

- [Quiz Result Page Best Practices — Woobox](https://woobox.com/articles/quiz-result-page-best-practices)
- [Product Personalization Quiz: UX Design Best Practices — Everyday Industries](https://everydayindustries.com/product-recommendation-quiz-tips/)
- [UX Quiz: 2025 Year in Review — Nielsen Norman Group](https://www.nngroup.com/articles/ux-quiz/)
- [A Guide to Interface Design for Older Adults — Toptal](https://www.toptal.com/designers/ui/ui-design-for-older-adults)
- [Website Accessibility for Older Adults — Skynet Technologies](https://www.skynettechnologies.com/blog/inclusive-website-experience-for-older-adults)
- [Designing Your Website for Seniors — Coming of Age](https://comingofage.com/blog/design-your-website-for-seniors-and-boomers/)
- [Travel Website Design Trends — Seahawk](https://seahawkmedia.com/design/travel-website-design-trends/)
- [15 Travel Website Design Examples That Set New UX Standards — DesignMonks](https://www.designmonks.co/blog/travel-website-design-examples)
- [International Living](https://internationalliving.com/)
- [Nomads.com (formerly Nomad List)](https://nomads.com/)
- [55places — How to Relocate for Retirement](https://www.55places.com/blog/how-to-relocate-for-retirement)
