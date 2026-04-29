# RetireVibes — Claude Code Project Context

**Domain:** retirevibes.com  
**Tagline:** "Good RetireVibes Only."  
**Owner:** Natalie Barnes (natadabar@gmail.com)  
**Brief version:** v1.2 (2026-04-26) — see `RetireVibes_Product_Brief.md` for full detail  
**Prototype status:** Static HTML/CSS/JS prototype complete. Ready for real build.

---

## What RetireVibes Is

A vibe-driven retirement discovery web app for Americans aged 40–55. Users take an 8-question quiz about lifestyle preferences → get matched with their top 3 retirement destinations (US and international) → explore destination deep-dives → get handed off to affiliate partners (advisor, real estate, travel) when ready to act.

**It is NOT a financial planning tool.** It is the spark that gets people excited. No nest-egg math, no "you need $X saved," no income questions. That work is explicitly handed off to advisor affiliates.

---

## Critical Brand Rule — Never Make Money Claims

RetireVibes never tells the user whether something is affordable, whether their money will stretch, or whether they can afford a place. Present three things only: the vibe, the destination, and the per-month cost of living. The user decides.

- ❌ "Your money goes further in Porto"
- ❌ "More affordable for you"
- ❌ "You can afford to retire here"
- ✅ "Porto costs roughly half what coastal California does"
- ✅ "Upscale lifestyle in Porto: est. $3,200/month"
- ✅ "Mérida costs roughly half what Sarasota costs"

Cost comparisons between destinations are fine. Cost claims about the *user's* finances are not. RetireVibes doesn't ask about income, savings, or current spending — so any such claim is overreach.

---

## Design System

All pages use inline `<style>` blocks with these CSS variables:

```css
:root {
  --cream: #FBF6EE;
  --cream-soft: #F4ECDD;
  --terracotta: #C97B5A;
  --terracotta-dark: #A8593A;
  --teal: #1B3A4B;
  --teal-soft: #2E5468;
  --gold: #C8A064;
  --gold-soft: #E4C998;
  --sage: #93A89A;
  --warm-gray: #7A6E5F;
  --white: #FFFFFF;
  --serif: 'DM Serif Display', Georgia, serif;
  --sans: 'Inter', -apple-system, system-ui, sans-serif;
}
```

**Fonts:** Google Fonts — DM Serif Display (headings, display text, italic accents) + Inter (body, UI)  
**Breakpoint:** 980px (mobile nav kicks in)  
**Visual style:** Rich destination photography, editorial layout, warm palette. Think high-end travel magazine meets personalized Spotify Wrapped.

### Typography scale (approximate)
- Hero h1: 64–72px, line-height 1.02–1.05, letter-spacing -0.02em
- Section headlines: 40–52px, letter-spacing -0.015em
- Section sub: 18px, line-height 1.6
- Body: 15–16px, line-height 1.6–1.7
- Small/labels: 12–13px, letter-spacing 0.1–0.22em, uppercase for labels

### Component patterns
- **Pills/badges:** `border-radius: 999px`
- **Cards:** `border-radius: 14–18px`, subtle border `rgba(27,58,75,0.07)`, white or cream bg
- **Hover on cards:** `transform: translateY(-2px to -4px)`, transition 0.25–0.3s
- **Section label:** 12px, uppercase, letter-spacing 0.22em, `var(--warm-gray)`
- **Primary CTA button:** terracotta bg, white text, 999px radius, 16–18px padding
- **Ghost button:** transparent + border, 999px radius
- **Italic serif accents:** `<em>` in headlines styled as `color: var(--terracotta)` or `--gold-soft` on dark backgrounds

---

## Shared Files

Two shared files handle nav behavior across all pages. **Every page links to both.**

### `shared.css`
- Active nav link state (`.nav-active` → terracotta color)
- Hamburger button styles
- Mobile nav (breakpoint: 980px) — hamburger replaces inline links, `.nav-links.open` reveals the dropdown
- Overrides existing partial mobile CSS in older destination pages

### `shared.js`
- Injects hamburger `<button>` into `.nav` dynamically (no HTML changes needed)
- Handles open/close, Escape key, outside-click to dismiss
- Auto-detects current page filename, adds `.nav-active` to matching nav link
- Runs as IIFE, no dependencies

**Load pattern — in every `<head>`:**
```html
<link href="https://fonts.googleapis.com/..." rel="stylesheet" />
<link rel="stylesheet" href="shared.css" />
<style>
  /* page-specific styles */
</style>
```

**And before every `</body>`:**
```html
<script src="shared.js"></script>
</body>
```

---

## Navigation Structure

**Same nav on every page except the results page (which has its own minimal header):**

```html
<nav class="nav">
  <a class="wordmark" href="homepage-mockup.html">Retire<em>Vibes</em></a>
  <div class="nav-links">
    <a href="homepage-mockup.html#destinations">Destinations</a>
    <a href="homepage-mockup.html#how">How it works</a>
    <a href="find-an-advisor.html">Find an advisor</a>
    <a href="my-retirevibes.html">My RetireVibes</a>
    <a href="results-page-mockup.html" class="nav-cta">Take the quiz →</a>
  </div>
</nav>
```

*On the homepage itself, use anchor-only hrefs (`#destinations`, `#how`) instead of the full path.*

**Footer links (same on every page):**
```
Destinations · How it works · Find an advisor · Scouting trips · My RetireVibes
```

---

## Page Inventory

All files are at the project root unless noted.

### Core flow pages

| File | Purpose | Status |
|------|---------|--------|
| `homepage-mockup.html` | Homepage — hero, "how it works" explainer, 6 destination cards, quiz CTA | ✅ Built |
| `mockups/vibe-quiz.html` | The 8-question quiz (one question per screen) | ✅ Built (in `mockups/` subfolder) |
| `results-page-mockup.html` | Results page — reverse countdown reveal (#3→#2→#1), profile panel, handoff cards, save/share modal | ✅ Built |
| `my-retirevibes.html` | Saved matches / account page | ✅ Built |

### Destination pages

| File | Destination | Type |
|------|------------|------|
| `destination-porto.html` | Porto, Portugal 🇵🇹 | International |
| `destination-merida.html` | Mérida, Mexico 🇲🇽 | International |
| `destination-asheville.html` | Asheville, NC 🇺🇸 | Domestic |
| `destination-sarasota.html` | Sarasota, FL 🇺🇸 | Domestic |
| `destination-coming-soon.html` | Used for Chiang Mai & Medellín (URL param: `?name=Chiang%20Mai`) | Placeholder |

### Handoff pages (affiliate revenue)

| File | Purpose | Affiliate |
|------|---------|-----------|
| `advisor-international.html` | Why expats need a specialist advisor; what to look for; 6 questions to ask | Routes to `find-an-advisor.html?type=international` |
| `advisor-domestic.html` | Why US retirees need a fiduciary; SS timing, Medicare, RMDs | Routes to `find-an-advisor.html?type=domestic` |
| `find-an-advisor.html` | Hybrid advisor directory — 4 featured advisors + SmartAsset catch-all | Featured placement fees + SmartAsset referral |
| `scouting-trip.html` | Porto 7-day scouting trip guide | Booking.com + Expedia affiliate links |
| `browse-homes-international.html` | Porto real estate guide — neighborhoods, price bands, rent vs. buy, legal notes | Idealista |
| `browse-homes-domestic.html` | US retirement real estate guide — Asheville vs. Sarasota compare, what to look for | Zillow / Realtor.com / Redfin |

---

## Data Model

Client-side only (localStorage). Key: `rv_saved`

```js
// Shape
{
  email: "user@example.com",           // set on first save
  account_created_at: "ISO string",    // set once on first email capture
  saved_at: "ISO string",              // updated on each save action
  destinations: [                       // array of saved destination names
    "Porto, Portugal",
    "Asheville, NC"
  ],
  matches_saved: true                   // true if user saved all 3 matches
}
```

**Key: `rv_vibe_label`** — stores the user's vibe label string from quiz results (e.g. "The Sun-Chaser") for display on results page.

### Save flow
1. First heart click on any destination → opens save modal (email required)
2. Email submitted → written to localStorage, destinations array updated
3. Subsequent heart clicks → silent toggle (no modal), localStorage updated
4. "Email me my matches" button → same modal, `type: 'email-results'` context

### Account model
No passwords in prototype. Email-only. Future real build needs:
- Server-side account creation
- Email delivery (matches + magic link to return)
- Session management

---

## The Quiz (8 Questions)

No age, no income, no savings. Vibe-only.

| # | Question | Type |
|---|---------|------|
| Q1 | What's your ideal retirement weather? | Single choice |
| Q2 | Where do you see yourself waking up every morning? | Multi-select, pick up to 2 |
| Q3 | How do you want your days to feel in retirement? | Single choice |
| Q4 | Where in the world are you open to retiring? | Select all that apply |
| Q5 | When you retire, what kind of lifestyle are you imagining? | Single choice |
| Q6 | Where do you see yourself living in retirement? | Select all that apply |
| Q7 | Will you be retiring solo or with a partner? | Single choice |
| Q8 | What does your ideal retirement really come down to? | Multi-select, pick top 3 |

**Q1 options:** Warm and sunny year round · Four seasons · Mild and temperate · Cool and crisp  
**Q2 options:** On or near the beach · By a lake or river · Mountains and nature · Vibrant city · Charming small town · Wide open countryside  
**Q3 options:** Active and adventurous · Creative and cultural · Relaxed and unhurried · Social and connected · A mix of everything  
**Q4 options:** United States · Canada · Mexico & Latin America · The Caribbean · Europe · Australia or New Zealand · Asia  
**Q5 options:** Simple and comfortable · Comfortable with extras · Upscale and enjoyable · Luxury — the best of everything  
**Q6 options:** Own my home · Open to renting · Resort or retirement community · Non-traditional (RV, boat, slow travel) · Not sure yet  
**Q7 options:** Flying solo · With my partner or spouse · Not sure yet  
**Q8 options:** Adventure and new experiences · Community and belonging · Peace and simplicity · Purpose and passion projects · Health and wellness · Culture, arts and creativity

---

## Results Page — Key Details

### Reveal mechanic
Reverse countdown: #3 first → "Not feeling it? See match #2" → #2 → "Ready for your #1?" → #1 (hero reveal, largest card, most dramatic)

### Handoff cards (on results page — all now wired)
- **Talk to a retirement advisor** → `advisor-international.html` (Porto is hardcoded #1)
- **Browse homes in Porto** → `browse-homes-international.html`
- **Plan a scouting trip** → `scouting-trip.html`

### Share modal
Triggered by "Share my match" button and "Share your retirement profile →" sidebar link. Three options: copy link, email (mailto), native share (Web Share API, hidden unless available).

### Save modal
Triggered by: heart icon (first click), "Email me my matches" button, "Save your matches" sidebar link. Email required. One explicit opt-in only — no additional prompts after.

---

## Monetization / Affiliate Model

### Advisor directory (`find-an-advisor.html`)
- **Featured advisors** (4 listed): Rebecca Holt CFP® (international), James Nakamura CFP® (international), Carol Simmons CFP® (domestic), Michael Torres CFP® (domestic)
- **Revenue model:** Featured placement fees paid by advisors to be listed
- **Catch-all:** SmartAsset (`smartasset.com/retirement/retirement-calculator`) — referral fee when users click through
- **Filter:** URL param `?type=international` or `?type=domestic` pre-selects the right filter; used by advisor handoff pages to route contextually
- **Contact modal:** Name + email + destination — advisor gets the lead

### Real estate
- International: Idealista (`idealista.pt`) — referral if user connects with listing agent
- Domestic: Zillow, Realtor.com, Redfin — referral on agent connection

### Scouting trips
- Booking.com accommodation search link
- Expedia flights link (`expedia.com/lp/flights/us/pt/porto`)

### Future revenue (not yet built)
- Freemium Pro: $7.99/mo or $59/yr — additional destination matches, full Vibe Board, priority resources
- Sponsored destination spotlights (tourism boards)
- Retirement relocation concierge (high-ticket, Phase 3)

---

## Target Audience Context

Americans 40–55. Key emotional state: **anxiety, not curiosity.** 53% of 55–64 year olds fear not having enough money. Median savings for that group is shockingly low (~$30K). Many feel behind and wonder if retirement is even possible for them.

**What works in copy:**
- Hope and new possibility — not shame or "you should have started sooner"
- Specificity (a real neighborhood, a real cost, a real vibe)
- Freedom and purpose, not just escape or leisure
- Destination-driven cost framing (facts about places, not judgments about users)

**What doesn't work:**
- Reinforcing the "I'm behind" feeling
- Financial math that assumes income/savings data we don't have
- Generic retirement imagery (golf courses, gray-haired couples on beaches)

---

## What's Built vs. What Remains

### Fully built in prototype ✅
- Homepage with 6 wired destination cards
- Quiz (8 questions, in `mockups/` subfolder)
- Results page with share modal, save modal, handoff cards
- 4 destination deep-dive pages (Porto, Mérida, Asheville, Sarasota)
- Coming-soon page for future destinations (Chiang Mai, Medellín)
- Scouting trip guide (Porto-specific)
- Advisor handoff pages (international + domestic)
- Advisor directory with filter, featured listings, contact modal, SmartAsset catch-all
- Browse homes pages (international/Porto + domestic/Asheville+Sarasota)
- My RetireVibes account/saved page
- Shared nav CSS + JS (hamburger, active state, mobile responsive)

### Not yet built ❌
- **Account backend** — email capture is UI only; no server, no actual email delivery
- **Quiz matching logic** — results page is hardcoded to Porto #1, Sarasota #2, Asheville #3; real matching algorithm needed
- **Inspiration Hub** — editorial content section for retention (planned, not built)
- **Scouting trip for domestic destinations** — Asheville and Sarasota pages have "Plan my weekend →" linking to `#`; no domestic scouting page exists yet
- **Mérida scouting trip** — links directly to Inmuebles24 for now
- **About page** — placeholder; not built
- **FAQ page** — placeholder; not built
- **Resources page** — placeholder; not built
- **RetireVibes Pro** — freemium tier planned but not built
- **Search / more destinations** — 6 destinations total in prototype; real build needs more
- **Email system** — Mailchimp, ConvertKit, or custom; decision pending

### Placeholder links still in prototype
- "Plan my weekend →" on Asheville and Sarasota destination pages → `href="#"` (needs domestic scouting page or route to generic scouting content)
- "Learn more about Sarasota" on results page → should go to `destination-sarasota.html` (easy fix)
- In-content deep-links on destination pages (Medigap guide, D7 walkthrough, tax comparison, insurance risk guide) → `href="#"` — future content expansion

---

## Conventions Claude Code Should Follow

1. **No framework.** Static HTML/CSS/JS. No React, no Vue, no build step at the prototype stage. If moving to a real stack, discuss first.

2. **Inline styles per page.** Each page has its own `<style>` block in `<head>`. Shared behavior lives in `shared.css` and `shared.js` only — not in per-page inline styles.

3. **Design tokens always via CSS variables** — never hardcode `#1B3A4B` or `#C97B5A` directly. Use `var(--teal)` and `var(--terracotta)`.

4. **Google Fonts load order:** preconnect links → fonts link → `shared.css` link → `<style>` block. Don't change this order.

5. **`shared.js` always last before `</body>`.** Never in `<head>`. It queries the DOM, so it must run after the page is parsed.

6. **Nav is consistent across all pages.** If you change the nav on one page, change it on all. The 5-link structure (Destinations · How it works · Find an advisor · My RetireVibes · [Take the quiz →]) is locked.

7. **Footer links match nav.** Footer always has: Destinations · How it works · Find an advisor · Scouting trips · My RetireVibes.

8. **No money claims about the user** — see "Critical Brand Rule" above. Audit every piece of new copy against this before shipping.

9. **All files at project root** — no subdirectories except `mockups/` (where the quiz lives). Don't create new subdirectories without a good reason.

10. **File naming convention:** `kebab-case.html` — e.g. `browse-homes-international.html`, `find-an-advisor.html`.

11. **`event.stopPropagation()` on heart/save buttons** that are inside anchor wrappers (destination cards on homepage). Without this, clicking the heart navigates instead of toggling the save.

12. **URL params for pre-filtering:** `find-an-advisor.html?type=international` and `?type=domestic` pre-select the filter tab and scroll to it. Don't break this pattern when updating the advisor directory.

---

## File Structure (Current)

```
/Retire Vibes app/
├── CLAUDE.md                          ← you are here
├── RetireVibes_Product_Brief.md       ← full product brief v1.2
├── shared.css                         ← nav styles: active state + mobile hamburger
├── shared.js                          ← nav behaviour: hamburger + active detection
├── homepage-mockup.html
├── results-page-mockup.html
├── my-retirevibes.html
├── destination-porto.html
├── destination-merida.html
├── destination-asheville.html
├── destination-sarasota.html
├── destination-coming-soon.html
├── scouting-trip.html                 ← Porto-specific
├── advisor-international.html
├── advisor-domestic.html
├── find-an-advisor.html               ← advisor directory with filter + contact modal
├── browse-homes-international.html    ← Porto / Idealista
├── browse-homes-domestic.html        ← Asheville + Sarasota / Zillow
└── mockups/
    └── vibe-quiz.html                 ← the 8-question quiz
```

---

## Key External Links (Affiliate / Partner)

| Partner | URL | Used on |
|---------|-----|---------|
| Idealista (Porto rentals) | `idealista.pt/en/arrendar-casas/porto-distrito/` | browse-homes-international.html, destination-porto.html |
| Idealista (Porto buy) | `idealista.pt/en/comprar-casas/porto-distrito/` | browse-homes-international.html |
| Inmuebles24 (Mérida) | `inmuebles24.com/propiedades-en-renta-en-merida,yucatan.html` | destination-merida.html |
| Zillow (Asheville) | `zillow.com/homes/for_rent/?searchQueryState=...Asheville` | browse-homes-domestic.html |
| Realtor.com (Asheville) | `realtor.com/realestateandhomes-search/Asheville_NC` | browse-homes-domestic.html |
| Redfin (Sarasota) | `redfin.com/city/55078/FL/Sarasota` | browse-homes-domestic.html |
| SmartAsset | `smartasset.com/retirement/retirement-calculator` | find-an-advisor.html |
| Booking.com (Porto) | `booking.com/searchresults.html?ss=Porto%2C+Portugal` | scouting-trip.html |
| Expedia (Porto flights) | `expedia.com/lp/flights/us/pt/porto` | scouting-trip.html, browse-homes-international.html |
