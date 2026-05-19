# RetireVibes — Chief Design Officer Audit
**Date:** 2026-05-19  
**Scope:** Full-site sweep — accessibility (WCAG 2.1 AA) + visual/UX polish, mobile-first  
**Reviewer:** Claude (acting CDO)

---

## TL;DR

The site looks great on desktop. The two highest-leverage fixes are both about **mobile**:

1. **Homepage hero text is hard to read on phones** — the cream-to-image gradient is angled (110deg), so on narrow viewports the headline and subhead extend into the transparent right side where the Porto photo bleeds through. Fix the gradient on mobile, not the image.
2. **Touch targets are below the 44×44 minimum** on the heart-save buttons, the modal close, and a few CTAs. This is the single biggest accessibility issue across the site.

After that, the next tier is real form labels (the email input only has a placeholder), focus-visible styles on buttons, and the quiz being on a completely different design system than the rest of the site.

---

## The Hero Readability Problem (Homepage)

Here's what's happening technically:

```css
.hero-bg::after {
  background: linear-gradient(110deg,
    rgba(251, 246, 238, 0.94) 0%,
    rgba(251, 246, 238, 0.78) 38%,
    rgba(251, 246, 238, 0.15) 65%,
    rgba(0, 0, 0, 0.08) 100%);
}
```

The gradient runs **left-to-right at 110°** — designed for desktop where the text column is 640px on the left and sits in the 94%-opaque cream zone. On mobile, the headline and subhead are full-width (minus 22px padding), so they extend past 65% of the width — into the section where the Porto image is only veiled by 15% cream. The dark teal text against a busy stone-and-tile photo is exactly where contrast drops below 4.5:1.

You have three good options. My recommendation is **Option B**, with Option A as a quick pre-launch fix:

### Option A — Quick fix (15 minutes)
Change the gradient direction on mobile so the cream sits behind the whole text block, not just the left side.

```css
@media (max-width: 980px) {
  .hero-bg::after {
    background: linear-gradient(180deg,
      rgba(251, 246, 238, 0.96) 0%,
      rgba(251, 246, 238, 0.88) 55%,
      rgba(251, 246, 238, 0.55) 80%,
      rgba(0, 0, 0, 0.1) 100%);
  }
}
```
This keeps the editorial-magazine feel, keeps the Porto photo peeking through at the bottom, and gets the text out of the busy zone.

### Option B — Better fix (recommended)
Same as A, *plus* make the desktop gradient slightly more opaque too:

```css
.hero-bg::after {
  background: linear-gradient(110deg,
    rgba(251, 246, 238, 0.97) 0%,
    rgba(251, 246, 238, 0.86) 42%,
    rgba(251, 246, 238, 0.30) 70%,
    rgba(0, 0, 0, 0.08) 100%);
}
```
Bumps the left-side cream from 0.94 → 0.97 and extends the 78% point to 86% at 42%. The right-side reveal of Porto goes from 15% → 30% (still atmospheric, more legible). Combined with mobile override above.

### Option C — Bigger swing
Consider whether the homepage hero needs to be a destination photo at all. The Porto image is gorgeous but it **predisposes the user** — they see Porto and start thinking "oh, this is a Portugal site." Your hero copy says "Where in the *world* should you retire?" — the visual could instead be:

- An abstract terracotta-gold gradient (your brand colors carry the warmth)
- A subtle illustrated map / collage
- A muted photo of a generic "vibe" — a sunlit linen curtain, a sunrise, hands holding coffee

This solves the readability problem permanently *and* doesn't bias the user toward a specific destination before the quiz. Worth A/B testing post-launch.

**My call:** Ship Option B this week. Add Option C to the v2 design backlog.

---

## WCAG 2.1 AA Findings

### 🔴 Critical (block usage or fail audits)

| # | Issue | WCAG | Where | Fix |
|---|-------|------|-------|-----|
| C1 | Hero text fails contrast on mobile (see above) | 1.4.3 | homepage hero | Gradient fix above |
| C2 | Email input has `placeholder` only, no `<label>` | 3.3.2, 1.3.1 | Save modal (homepage, destination pages, results), advisor contact modal | Add `<label for="email" class="sr-only">Email address</label>` |
| C3 | Touch targets below 44×44 minimum | 2.5.5 | `.card-save` (38×38), `.modal-close` (36×36), hamburger (~30×30) | Bump to 44×44, keep the visual size with padding/margin |
| C4 | Heart save buttons don't announce state changes | 4.1.2 | Destination cards everywhere | Add `aria-pressed="true/false"` and toggle on save; remove `♡`/`♥` glyphs from text content (use CSS pseudo or SVG) so screen readers don't say "white heart suit" |

### 🟡 Major (real impact, not blocking)

| # | Issue | WCAG | Where | Fix |
|---|-------|------|-------|-----|
| M1 | No visible focus state on most interactive elements | 2.4.7 | Site-wide — `.btn-primary`, `.nav-cta`, `.dest-card-link`, `.hamburger`, `.card-save` | Add a single global `:focus-visible` rule with a 2-3px gold or terracotta ring |
| M2 | Modal doesn't trap focus, doesn't move focus to itself on open, doesn't return focus to trigger on close | 2.4.3 | Save modal, share modal, results page modals | On open: `modalCard.focus()` + trap tab inside. On close: restore focus to the element that opened it. |
| M3 | Hamburger button missing `aria-controls` | 4.1.2 | shared.js | Add `id="primary-nav"` to `.nav-links`, set `aria-controls="primary-nav"` on the button |
| M4 | `prefers-reduced-motion` not respected | 2.3.3 (AAA, but commonly tested) | Site-wide, especially results page hero badge shimmer + screen-in animations | Wrap animations in `@media (prefers-reduced-motion: no-preference)` |
| M5 | `.hero-meta` (warm-gray on cream) and other 12-13px warm-gray labels are borderline 4.5:1 | 1.4.3 | Section labels, dest-region, dest-cost-label, footer-meta | Darken `--warm-gray` from `#7A6E5F` to `#6A5E4F` — that lifts contrast on cream from ~4.7:1 to ~5.8:1 |
| M6 | No "Skip to main content" link | 2.4.1 | Every page | Add one visually-hidden skip link as the first focusable element |
| M7 | Decorative heart glyph announced as "white heart suit" | 1.1.1 / 4.1.2 | `.card-save` button text | Wrap glyph in `<span aria-hidden="true">`; rely on `aria-label` for the announcement |

### 🟢 Minor (polish)

| # | Issue | WCAG | Where | Fix |
|---|-------|------|-------|-----|
| m1 | Footer links not wrapped in `<nav aria-label="Footer">` | 1.3.1 | All pages | Wrap in `<nav>` for landmark navigation |
| m2 | Hero image is informational but loaded as `background-image` so it has no alt text | 1.1.1 | Homepage + destination pages | Acceptable since the image is decorative *if* the hero copy carries the meaning — and it does. No fix needed; documenting as deliberate. |
| m3 | Save success state doesn't announce to screen readers | 4.1.3 | Save modal | Add `role="status" aria-live="polite"` to `#saveSuccess` |
| m4 | Hover-only color changes on nav links | 1.4.1 | All pages | Already underline-on-hover via color; consider also `text-decoration: underline` on hover for users who don't perceive the terracotta shift |

---

## Cross-cutting Design Issues (the CDO hat)

### 1. The quiz is on a different design system

`mockups/vibe-quiz.html` uses **Fraunces** instead of DM Serif Display, and a different palette (`--ocean`, `--ink`, `--terracotta: #E07A5F` vs the brand `#C97B5A`). A user going homepage → quiz crosses what feels like a brand boundary. Two paths:

- **Cheap:** swap Fraunces for DM Serif Display, rename the variables to match the brand tokens, recolor where palette diverges. Probably a half-day.
- **Right:** consolidate to a single `tokens.css` that both systems import, so this can never drift again.

Either way: the quiz needs to feel like the same product as the homepage. Right now it doesn't.

### 2. The whole site has no `:focus-visible` styling

This is one rule, applied globally, that lifts the whole accessibility floor:

```css
:where(a, button, input, [tabindex]):focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: inherit;
}
```

Gold (`#C8A064`) on cream gives ~3.4:1 against the background, passes 1.4.11 for non-text contrast, and matches your palette.

### 3. Heart toggle uses unicode characters

`♡` and `♥` work but they're brittle: they look different across OSes, they don't animate well, and screen readers say "white heart suit." Use an inline SVG or a CSS mask. Same applies to the `✓` in the modal success state and the `→` arrows scattered around — SVG arrows would be sharper and more controllable.

### 4. The hero text-shadow trick is missing

If you want to keep the current hero photo on mobile without a heavier gradient, a subtle text-shadow on the headline gives ~1 step of contrast for free:

```css
.hero-headline {
  text-shadow: 0 1px 2px rgba(251, 246, 238, 0.6);
}
```

Pairs the text with the cream rather than darkening it. Use this *with* a gradient adjustment, not instead of one.

### 5. The hero image biases the user

Already noted in Option C above, but worth restating: showing Porto as the headline image is a strong nudge. If the goal is "open them up to places they haven't considered" — which is exactly what Karen's testimonial says ("I was sure my answer was going to be Florida") — then the hero shouldn't make Portugal feel like the answer before they start.

### 6. Card-save modal opens on first heart click — surprising

The pattern works but it's a hidden tax: a user clicks a heart to remember Mérida and gets a "give us your email" wall. This is the right *moment* (they've shown intent) but consider:

- A tiny inline confirmation animation first ("Saved ♥ Mérida — give us your email to keep it →") rather than a full modal
- Or: let them save up to 3 destinations locally before the email gate

This is more conversion design than accessibility, but it's the one place on the site that feels like a friction-free experience suddenly isn't.

---

## Quick wins (under an hour each)

These I'd just ship now:

1. **Darken `--warm-gray`** from `#7A6E5F` → `#6A5E4F` (one CSS variable, lifts contrast across the entire site)
2. **Add global `:focus-visible`** rule (one snippet, covers every button and link)
3. **Wrap heart glyphs in `<span aria-hidden="true">`** (one find-and-replace)
4. **Add `<label class="sr-only">` to the email input** in the save modal (one block, copy across modals)
5. **Mobile gradient override** on `.hero-bg::after` (Option A above — ship today)
6. **Touch target padding** — bump `.card-save` from 38×38 to 44×44, `.modal-close` from 36×36 to 44×44
7. **Hamburger `aria-controls`** — add `id` to nav-links, set attribute in shared.js

## Bigger calls (need decisions)

These I'd put in front of you before doing them:

- **Hero image direction** (Option C — abstract / non-destination hero)
- **Quiz design system consolidation** (cheap-merge vs full token system)
- **Heart save UX flow** (modal-on-first-click vs inline-then-batch)
- **SVG icon system** (replace unicode glyphs across the site)

---

## Page-by-page status

| Page | Hero issue | Touch targets | Focus states | Modal a11y | Notes |
|------|-----------|---------------|--------------|------------|-------|
| homepage-mockup.html | 🔴 | 🔴 hearts | 🟡 | 🟡 save modal | The flagship issue |
| results-page-mockup.html | — | 🔴 modal close | 🟡 | 🟡 share + save | Hero badge shimmer needs `prefers-reduced-motion` guard |
| destination-porto.html | ✅ dark gradient is fine | 🔴 hearts, save-btn | 🟡 | inherit | Hero title 96px → check it doesn't truncate at 320px viewport |
| destination-merida/asheville/sarasota | as Porto | as Porto | as Porto | inherit | |
| mockups/vibe-quiz.html | n/a | check radio cards | 🟡 | n/a | **Different design system — needs consolidation** |
| my-retirevibes.html | n/a | check delete-X | 🟡 | as homepage | |
| find-an-advisor.html | n/a | check filter pills | 🟡 | 🟡 contact modal | Contact modal needs same form-label fix |
| browse-homes-international/domestic | n/a | check CTAs | 🟡 | inherit | |
| scouting-trip.html | check | check | 🟡 | n/a | |
| advisor-international/domestic | n/a | check CTAs | 🟡 | n/a | |

---

## Recommended order of operations

**This week (ship before launch):**
- All Quick Wins above
- Option B hero gradient
- Real `<label>` on every form input
- Touch target bumps to 44×44

**Next sprint:**
- Focus trap + restoration in modals
- `prefers-reduced-motion` audit
- Hamburger `aria-controls` + focus styles
- Quiz design system consolidation (cheap path)

**Backlog:**
- SVG icon system
- Hero image direction (test Option C)
- Heart save UX flow rethink
- Full `tokens.css` consolidation

Let me know which fixes you want me to implement and I'll start at the top of the list.
