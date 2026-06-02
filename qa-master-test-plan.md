# RetireVibes — Master QA Test Plan
**Created:** 2026-06-01  
**Owner:** Natalie Barnes  
**Scope:** Full site pre-launch — all critical paths, all pages, desktop + mobile, cross-browser  
**Estimated time:** 3–4 hours total (can be split across sessions)

---

## How to use this plan

Work through each section in order. Check off each item as you go. Log any issues in the **Issue Log** at the bottom. Bring issues back to Claude with: browser, device, what you did, what happened.

**Open browser console before every session:**  
Mac: `⌘ + Option + I` → Console tab. Any red errors = flag immediately.

---

## Browsers to test

Run the full plan on **Safari first** (highest risk — your audience is Apple-heavy). Then spot-check critical paths on Chrome, Firefox, and Edge.

| Browser | Priority | Platform |
|---------|----------|----------|
| Safari | 🔴 Highest | Mac |
| Chrome | 🟡 High | Mac |
| Firefox | 🟡 High | Mac |
| Edge | 🟠 Medium | Mac or Windows |

**Mobile:** Test on real iPhone in Safari (not just a resized browser window).

---

## Quiz scenarios to run

Run the quiz **4 times** with different answer combinations to get varied results. Clear localStorage between runs:  
Open Console → type `localStorage.clear()` → press Enter → refresh.

| Run | Weather | Setting | Geography | Pace | Lifestyle | Housing | Priorities |
|-----|---------|---------|-----------|------|-----------|---------|------------|
| **A — International warm** | Warm & sunny | Beach | Europe | Slow & easy | Upscale | Rent | Culture & creativity |
| **B — Domestic active** | Four seasons | Mountains | United States | Full throttle | Comfortable+ | Own | Adventure |
| **C — Mexico/LatAm** | Warm & sunny | Small town | Mexico & LatAm | Mixed | Simple | Not sure | Community |
| **D — Asia** | Mild & temperate | City | Asia | Social first | Luxury | Non-traditional | Health & wellness |

---

## Section 1 — Homepage (`homepage-mockup.html`)

### Desktop
- [ ] Page loads without JS errors in console
- [ ] Hero headline renders in DM Serif Display (elegant serif font, not system font)
- [ ] Hero CTA "Find my RetireVibes →" button visible and clickable
- [ ] 6 destination cards visible with photos, destination names, and cost info
- [ ] Hovering a card lifts it slightly (transform effect)
- [ ] Clicking a card goes to `destination-detail.html?id=[slug]` — not a 404
- [ ] Heart icon on each card is clickable without navigating away
- [ ] Nav: 3 links only — Destinations · My RetireVibes · [Find my RetireVibes →]
- [ ] "Destinations" nav link scrolls to destination cards section
- [ ] Footer: 5 links — Destinations · How it works · Find an advisor · Scouting trips · My RetireVibes
- [ ] Footer wordmark "RetireVibes" links back to homepage (not `#`)
- [ ] Privacy Policy and Terms of Service links in footer work
- [ ] "How it works" section is visible and readable
- [ ] No visible `href="#"` links anywhere on the page

### Mobile (iPhone, Safari)
- [ ] Hero text is readable without zooming
- [ ] Hamburger menu appears in nav (not the full link row)
- [ ] Hamburger opens nav dropdown, all 3 links visible
- [ ] Hamburger closes on tap outside or Escape key
- [ ] Destination cards stack to single column
- [ ] Cards are full-width and tappable
- [ ] CTA buttons are large enough to tap (minimum 44px height)

---

## Section 2 — Quiz (`quiz.html`)

**Before each run:** `localStorage.clear()` in console, then navigate to `retirevibes.com/quiz.html`

### Run A (International warm — Europe/Beach/Upscale)
- [ ] Welcome screen loads with illustration
- [ ] "Start" or equivalent CTA is visible and works
- [ ] **Q1 (Weather):** Select "Warm and sunny year round" — auto-advances after ~0.6s
- [ ] **Q2 (Setting):** Select "On or near the beach" — multi-select, Next button enables
- [ ] **Q3 (Geography):** Select "Europe" — verify checkmark/highlight appears
- [ ] **Q4 (Pace):** Select "Slow and easy" — auto-advances
- [ ] **Q5 (Lifestyle):** Select "Upscale and enjoyable" — auto-advances
- [ ] **Q6 (Housing):** Select "Open to renting" — auto-advances
- [ ] **Q7 (Priorities):** Select "Culture & creativity" — Next enables after first selection
- [ ] Progress dots update as you move through questions
- [ ] Processing/calculating screen appears after Q7
- [ ] Vibe label appears (should reflect upscale/culture/beach profile)
- [ ] "Reveal my matches" button appears and works
- [ ] Redirects to results page

### Run B (Domestic active — US/Mountains/Adventure)
- [ ] Clear localStorage, restart quiz
- [ ] **Q1:** "Four seasons"
- [ ] **Q2:** "Mountains and nature"
- [ ] **Q3:** "United States"
- [ ] **Q4:** "Full throttle"
- [ ] **Q5:** "Comfortable with extras"
- [ ] **Q6:** "Own my home"
- [ ] **Q7:** "Adventure"
- [ ] Results show US domestic destinations (Asheville, Sarasota or similar)
- [ ] Scouting handoff card links to `scouting-trip-domestic.html` (not international)
- [ ] Advisor handoff links to `advisor-domestic.html`

### Run C (Mexico/LatAm — Community/Simple)
- [ ] Clear localStorage, restart quiz
- [ ] **Q1:** "Warm and sunny year round"
- [ ] **Q2:** "Charming small town"
- [ ] **Q3:** "Mexico & Latin America"
- [ ] **Q4:** "A mix"
- [ ] **Q5:** "Simple and comfortable"
- [ ] **Q6:** "Not sure yet"
- [ ] **Q7:** "Community"
- [ ] Results show Mexico/LatAm destinations (Mérida, Oaxaca, San Miguel or similar)
- [ ] Scouting link routes to `scouting-trip-detail.html?id=[slug]`

### Run D (Asia — Luxury/City)
- [ ] Clear localStorage, restart quiz
- [ ] **Q1:** "Mild and temperate"
- [ ] **Q2:** "Vibrant city"
- [ ] **Q3:** "Asia"
- [ ] **Q4:** "Social first"
- [ ] **Q5:** "Luxury — the best of everything"
- [ ] **Q6:** "Non-traditional"
- [ ] **Q7:** "Health & wellness"
- [ ] Results show Asian destinations (Chiang Mai, Penang, Kuala Lumpur or similar)
- [ ] Geography index correct — Asia destinations surface (not Australia/NZ)

### Quiz mobile checks (Run A again on iPhone)
- [ ] Questions are full-width and readable
- [ ] Option cards are tappable (not too small)
- [ ] Auto-advance works on tap (not just click)
- [ ] Multi-select Next button is visible above keyboard
- [ ] Progress dots visible and updating
- [ ] No horizontal scroll on any question screen

---

## Section 3 — Results Page (`results-page-mockup.html`)

Run after each quiz scenario above. Check after Run A and Run B at minimum.

- [ ] Page loads with correct match data (not blank or showing wrong destination)
- [ ] #3 match card appears first with destination name, photo, cost, vibe label
- [ ] "Learn more about [City]" link on #3 card opens destination page (new tab preferred)
- [ ] "Not feeling it? See match #2 →" advance CTA visible and works
- [ ] #2 card reveals correctly after clicking advance CTA
- [ ] "Learn more about [City]" link on #2 card works
- [ ] "Ready for your #1 match? →" CTA visible and works
- [ ] #1 card reveals as hero (larger, more dramatic)
- [ ] Confetti animation fires on #1 reveal
- [ ] Vibe label in profile panel matches what was shown at end of quiz
- [ ] Profile tags reflect quiz answers
- [ ] 3 handoff cards visible below #1: advisor, real estate, scouting
- [ ] Advisor card links to correct page (international vs domestic based on #1 match)
- [ ] Real estate card links to correct browse-homes page
- [ ] Scouting card links to `scouting-trip-detail.html?id=[slug]` (international) or `scouting-trip-domestic.html?city=[slug]` (domestic)
- [ ] "Share my match" button opens share modal
- [ ] Share modal: Copy link button works (check clipboard)
- [ ] Share modal: Email it opens mailto link
- [ ] Share modal: closes on X button, Escape key, and click outside
- [ ] Heart/save button on each card opens save modal on first click
- [ ] Save modal: email field accepts input, submit button works
- [ ] Save modal: closes correctly after submission
- [ ] "Browse all destinations →" bottom link goes to homepage destinations section
- [ ] "Retake the quiz →" link goes to quiz.html

### Mobile
- [ ] Cards stack properly on small screen
- [ ] Handoff cards stack to single column
- [ ] Modals are usable on small screen (not cut off)
- [ ] All CTAs have adequate tap target size

---

## Section 4 — Destination Pages (`destination-detail.html?id=[slug]`)

Test with **4 destinations** — 2 international, 2 domestic. Suggested: Porto, Mérida, Asheville, Sarasota.

For each destination (`destination-detail.html?id=porto`, `?id=merida`, `?id=asheville`, `?id=sarasota`):

- [ ] Page loads with correct destination name and hero image
- [ ] Hero image fills properly (no broken image icon)
- [ ] Cost table renders with correct figures — no overflowing columns
- [ ] Lifestyle tier cards visible (Simple / Comfortable / Upscale / Luxury)
- [ ] Neighborhood section has real content (not placeholder text)
- [ ] "Similar places" section shows 3 destinations with working links
- [ ] Handoff cards at bottom: advisor, real estate, scouting — all 3 present
- [ ] Advisor card links correctly (international vs domestic)
- [ ] Real estate card links to `/destinations/[slug]/real-estate/`
- [ ] Scouting card links correctly (international vs domestic template)
- [ ] Nav is correct 3-link structure
- [ ] Footer is correct 5-link structure
- [ ] No console errors

**Also test 2 random destinations from the full list:**  
Try `destination-detail.html?id=chiang-mai` and `destination-detail.html?id=boise`
- [ ] Both pages load with real content (not blank/error)
- [ ] Both have correct handoff card routing

---

## Section 5 — Scouting Pages

### International (`scouting-trip-detail.html?id=porto` and `?id=merida`)
- [ ] Page loads with correct destination name
- [ ] Best months and avoid months show real content
- [ ] 3 neighborhood walk sections with real researched copy
- [ ] "Search stays on Expedia →" CTA links to `expedia.com/affiliate/hDqrJfC`
- [ ] "Search flights on Expedia →" CTA links to `expedia.com/affiliate/hDqrJfC`
- [ ] Affiliate disclosure present near CTAs ("we may earn a referral fee")
- [ ] No Booking.com references anywhere visible
- [ ] Page renders correctly on mobile

### Domestic (`scouting-trip-domestic.html?city=asheville` and `?city=sarasota`)
- [ ] City tab switches between Asheville and Sarasota correctly
- [ ] Content updates to correct city on tab switch
- [ ] Expedia CTA present and correct
- [ ] Mobile layout works

---

## Section 6 — Real Estate Pages

### Test 4 real estate pages:
- `destinations/porto/real-estate/`
- `destinations/merida/real-estate/`
- `destinations/asheville/real-estate/`
- `destinations/boise/real-estate/` (random spot check)

For each:
- [ ] Page loads with correct destination name in hero
- [ ] 3 neighborhood cards with real researched copy (not generic filler)
- [ ] Price bands section shows real figures
- [ ] Rent vs buy section present
- [ ] Legal/visa section present and relevant (international vs domestic language)
- [ ] "No financial relationship" note present (not a false affiliate claim)
- [ ] Advisor footer CTA links correctly (international vs domestic)
- [ ] Nav and footer correct
- [ ] No broken images
- [ ] Mobile: neighborhood cards stack cleanly

---

## Section 7 — Advisor Pages

### `advisor-international.html`
- [ ] Page loads correctly
- [ ] No SmartAsset references anywhere on page
- [ ] No false "we earn a referral fee" language
- [ ] NAPFA / Garrett / XY Planning / CFP Board directory links work
- [ ] Nav and footer correct

### `advisor-domestic.html`
- [ ] Page loads correctly
- [ ] No SmartAsset references anywhere
- [ ] Directory links work
- [ ] Nav and footer correct

### `find-an-advisor.html`
- [ ] Redirects to `advisor-domestic.html` (301 redirect — check you don't land on find-an-advisor)

---

## Section 8 — Browse Homes Pages

### `browse-homes-international.html`
- [ ] Page loads correctly
- [ ] Idealista links present and go to `idealista.pt`
- [ ] "We have no financial relationship with them" note present (not affiliate claim)
- [ ] Expedia link (if present) uses affiliate link
- [ ] No false commission disclosures

### `browse-homes-domestic.html`
- [ ] Page loads correctly
- [ ] Zillow / Realtor.com / Redfin links work
- [ ] "We have no financial relationship with them" note present
- [ ] City toggle (Asheville / Sarasota) switches content correctly

---

## Section 9 — Supporting Pages

### `privacy-policy.html`
- [ ] Page loads
- [ ] No SmartAsset references
- [ ] Contact email shows retirevibes@gmail.com
- [ ] GA4 mentioned correctly (not Plausible or Booking.com)

### `terms-of-service.html`
- [ ] Page loads
- [ ] No-financial-advice disclaimer present
- [ ] Contact email correct

### `destinations.html`
- [ ] Page loads and shows destination grid
- [ ] Destination cards link to `destination-detail.html?id=[slug]`

### `my-retirevibes.html`
- [ ] Page loads without errors
- [ ] Shows appropriate empty state if no saved destinations

---

## Section 10 — Cross-browser Spot Check

After completing the full plan in Safari, run these critical paths in Chrome, Firefox, and Edge:

| Check | Chrome | Firefox | Edge |
|-------|--------|---------|------|
| Homepage loads, fonts correct | | | |
| Quiz completes end-to-end (Run A) | | | |
| Results page reveal works | | | |
| Share modal copy link works | | | |
| Porto destination page loads | | | |
| Nav hamburger works at 400px | | | |
| No console errors on any page | | | |

---

## Section 11 — localStorage Verification

Run this after completing Quiz Run A and landing on results:

1. Open Console (`⌘ + Option + I`)
2. Type: `JSON.parse(localStorage.getItem('rv_quiz_answers'))`
3. Should return an array of 7 answers — not null, not undefined
4. Type: `JSON.parse(localStorage.getItem('rv_quiz_matches'))`
5. Should return array of 3 destination objects with names and scores
6. Type: `localStorage.getItem('rv_vibe_label')`
7. Should return a vibe label string (e.g. "Coastal Wanderer")

- [ ] All 3 localStorage keys present and populated after quiz
- [ ] Refreshing results page still shows correct data (not blank)

---

## Issue Log

| # | Browser | Device | Page | What I did | What happened | Severity |
|---|---------|--------|------|-----------|---------------|----------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

**Severity:** 🔴 Critical · 🟡 High · 🟠 Medium · 🟢 Low

---

## Definition of done

The site passes QA when:
- All 🔴 Critical items pass in Safari and Chrome
- No 🟡 High items remain unresolved or unaccepted
- localStorage verification passes
- Quiz produces varied results across all 4 scenarios
- No console errors on homepage, quiz, results, or Porto destination page
