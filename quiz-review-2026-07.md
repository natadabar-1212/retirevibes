# Quiz Review — Copy, Artwork & Accessibility

**Reviewers:** Brand & Copy Editor · Design Lead · Product/UX (Claude)
**Date:** 2026-07-22
**Scope:** The 7-question Vibe Quiz — question copy, option labels, illustrated answer artwork, and accessibility
**Companion files:** `favicon-picker.html` (favicon concepts), `quiz-artwork-review.html` (all artwork on one page)

---

## Overall: **Strong quiz. Polish, not overhaul.**

The quiz is the best part of the product — the flow, pacing, and personality-quiz feel are all working. The copy is mostly on-voice and the artwork is genuinely custom (hand-built SVG vignettes in the brand palette, not clip-art), which already puts it ahead of most quizzes. The opportunities are targeted: one copy label that's off, a handful of illustrations that lean either literal/juvenile or flat/sterile with some cross-question repetition, and one real accessibility gap in focus handling.

---

## 1. Copy (Brand & Copy hat)

**Verdict: Ship, with one fix and two small tightenings.**

Money-claim check: **Pass.** Nothing claims what the *user* can afford. The lifestyle question ("Simple → Pure luxury") is about what they're *imagining*, not a judgment about their finances — that's within bounds.

Voice is on-brand throughout — "stay open, the right place might surprise you" and "Dream a little" are exactly the warm, unhurried tone the brand wants.

| Item | Finding | Severity | Recommendation |
|---|---|---|---|
| **Q4 pace — "Socialite"** | The other three options describe a *pace* ("On the go," "Mix it up," "Take it slow"); "Socialite" describes a *person type*, and it carries a wealthy/party connotation that's off-brand and slightly frivolous. It breaks the parallel and the warmth. | 🟡 | Rename to **"Social first"** or **"People first"** (matches the original intent — "my pace follows my people"). Keeps the set parallel and warm. |
| **Q5 lifestyle — "Pure luxury" 💎** | Fine and within the money-claim rule, but the 💎 + "Pure luxury" tips slightly toward materialism vs. the editorial voice. | 🟢 | Optional: consider "The best of everything" (softer, more experiential). Low priority — it's not wrong. |
| **Captions** | Each question carries an editorial caption (e.g. "Algarve coast, Portugal — 300 days of sunshine"). Lovely touch — but confirm they're actually displayed; if hidden, either surface them (they add specificity) or remove the dead data. | 🟢 | Verify render; surface or cut. |

Everything else — question headlines, hints, the other option labels — ships as-is.

---

## 2. Artwork (Design Lead hat)

**Verdict: Solid and on-brand — leans *slightly sterile/minimal* more than juvenile. Targeted upgrades, not a redraw.** (See `quiz-artwork-review.html` for all of it at once.)

What's working: consistent flat editorial style, warm palette, custom (not stock), and the illustrated cards make the quiz feel like a personality quiz rather than a form. Keep the overall direction.

The issues, in priority order:

1. **Cross-question repetition (🟡 — the biggest one).** The same vignettes recur across questions: the **hammock** appears for both Q4 "Take it slow" *and* Q7 "Peace & simplicity"; the **dinner table** for Q4 "Socialite" *and* Q7 "Community"; the **mountain/hiker** motif for both "On the go" and "Adventure." Repetition makes the quiz feel smaller and less crafted than it is. Give each question its own distinct art.

2. **A few too-literal / juvenile moments (🟡).** The **"Not sure yet" signpost with a "?"** (Q6) is the most clip-art-ish — a question-mark signpost is a cliché. The small **figures** (hiker, the yoga "Y-pose" for Health, dinner-table people) can read as simplistic silhouettes; they're acceptable but are the elements most likely to feel juvenile. Where a figure is used, make it an elegant, specific silhouette rather than a generic stick-figure.

3. **A few too-flat / sterile moments (🟢).** The most minimal scenes — a single house on a flat color field (lifestyle tiers as escalating house sizes; some housing options) — read as generic. A touch of texture, a horizon, foliage, or a warm light source gives them specificity without clutter. The brand principle applies: *specificity beats prettiness* — a real, slightly imperfect scene beats a clean generic one.

**Net design-lead read:** you're closer to "tasteful but a little sterile/repetitive" than "juvenile." The fix is adding warmth, specificity, and variety — not simplifying. I'd prioritize (1) de-duplication, then (2) replace the "?" signpost, then (3) enrich the flattest 3–4 scenes.

---

## 3. Accessibility (Product/UX hat)

**Verdict: Strong foundation, one real gap.**

Already good (from the earlier WCAG pass): real `<button>` elements with `aria-pressed`, an `aria-live="polite"` stage that announces question changes, `lang="en"`, `shared.css` focus rings, decorative emoji/overlays/arrows marked `aria-hidden`, and the (currently unused) slider has synced `aria-valuetext`.

| Finding | Severity | Recommendation |
|---|---|---|
| **Focus is not moved when a question advances.** Single-select auto-advances after 650ms and multi-select advances via "Next," but focus is never moved to the new question — it drops to `<body>`. Keyboard and screen-reader users lose their place and must tab from the top each question. | 🟡 (real WCAG issue) | After each render, move focus to the question `<h2>` (give it `tabindex="-1"` and `.focus()`), or to the first option. This pairs with the existing `aria-live` so the new question is both announced and focusable. Most important fix here. |
| **Decorative option artwork isn't hidden from screen readers.** The `.img-svg` wrapper around each illustration has no `aria-hidden`. The label conveys the meaning, so the art should be hidden. | 🟢 | Add `aria-hidden="true"` (or `role="presentation"`) to `.img-svg`. |
| **Auto-advance timing (650ms).** Fine for mouse; without the focus fix it's disorienting for screen-reader users. | 🟢 | Acceptable once focus is managed; no change needed beyond the fix above. |
| **Image-card label contrast.** Labels are white over a `.img-overlay` scrim, but scene brightness varies. | 🟢 | Spot-check the brightest scenes (e.g. the sunny/beach cards) clear 4.5:1; deepen the scrim if any fail. |

---

## 4. Coherence & housekeeping (Product hat)

- **Do the icons + copy make sense together?** Mostly yes. The one mismatch is Q4 "Socialite" (copy) — the label and its dinner-table art both pull toward "wealthy entertainer" rather than the intended "my pace follows my people." Fixing the label (§1) realigns it.
- **Dead code / data (not user-facing, worth a cleanup):** `option-scenes.js` still contains unused artwork — a full **geography scene set (`q4`)**, a **partner/solo set (`q7`: solo/partner/notSure)** from the removed question, and an extra **`q3.mix`** — none are referenced. The quiz also carries a **slider question type** in `quiz.js` that no question uses. And the `sceneKey` fields in `questions.js` are vestigial (Q5→'q7', Q6→'q8', Q7→'q10') — the real art comes from each option's `svg`. Cleaning these reduces confusion for whoever edits the quiz next.

---

## Recommended sequence

1. **Copy:** rename "Socialite" → "Social first" (5-min fix).
2. **Accessibility:** move focus to the question heading on advance + `aria-hidden` the decorative art (the one genuine WCAG gap).
3. **Artwork:** de-duplicate the repeated scenes across Q4/Q7, replace the "?" signpost, enrich the 3–4 flattest scenes. (Bigger effort — design work.)
4. **Housekeeping:** prune the unused scenes, slider type, and vestigial `sceneKey`s.
5. **Favicon:** pick a direction from `favicon-picker.html`; I'll produce the files and wire them site-wide.

None of this blocks a soft launch. Items 1–2 are quick and worth doing before hard launch; item 3 is a design pass you can schedule.
