# RetireVibes — Real-Device QA Test Script (#46)

**Devices to test:** iPhone (recent), iPhone (older — ideally 6S/7/SE era), Android, iPad  
**Time estimate:** 30–45 min per device if you run every scenario  
**Priority order:** iPhone recent → iPhone older → iPad → Android

Run the full flow on each device. Tick each box as you go. Note any issues at the bottom.

---

## Setup (do this on each device)

- [ ] Clear browser history/cache so localStorage is empty (no saved quiz state)
- [ ] Open `https://retirevibes.com` (not a local file — must be the live site)
- [ ] Use the browser your audience would use:
  - iPhone/iPad → Safari (default), then repeat key screens in Chrome
  - Android → Chrome

---

## 1. Navigation

- [ ] On mobile, the nav shows only the logo and a ☰ hamburger (no inline links)
- [ ] Tap hamburger → menu drops down with 3 links + "Take the quiz →" CTA
- [ ] Tap a nav link → menu closes, page scrolls or navigates correctly
- [ ] Tap outside the menu → menu closes
- [ ] Logo tap → returns to homepage
- [ ] Nav stays sticky at top while scrolling the page
- [ ] CTA pill ("Take the quiz →") is easy to tap — doesn't feel cramped

---

## 2. Homepage

- [ ] Hero section loads — text is readable over the background
- [ ] "Find where retirement feels right" headline is not cut off or overlapping
- [ ] Destination cards are full-width or 2-column (not 4 tiny boxes)
- [ ] Heart icon on each destination card is tappable without triggering card navigation
- [ ] "Take the quiz" CTAs (hero + bottom) are thumb-reachable
- [ ] Footer links are all tappable without zooming in

---

## 3. Quiz — full flow (most critical)

Start from homepage, tap "Take the quiz →".

**Welcome screen**
- [ ] Illustration fills the screen without weird crops
- [ ] "Find my RetireVibes" button is comfortably tappable (aim 44px height minimum)
- [ ] No text is cut off at the sides

**Questions 1–7 (test each)**
- [ ] Question title is fully visible — not cut off at bottom before you scroll
- [ ] Option buttons are clearly tappable — no accidental selection of wrong option
- [ ] Tapping an option visually highlights it immediately (no lag)
- [ ] Multi-select questions (geography, priorities, housing): can select multiple without issues
- [ ] Single-select questions auto-advance after ~650ms — does it feel natural or rushed?
- [ ] "Back" button works on each question
- [ ] Progress dots update as you advance
- [ ] On Q5 (the slider): slider thumb is easy to drag with one thumb — does it stay responsive?
- [ ] Slider labels update correctly as you drag
- [ ] "Next →" button is in a sticky bottom bar on mobile — does it stay above the home bar/gesture area? (iOS Safari bottom bar is the biggest risk here)
- [ ] Bottom sticky bar doesn't cover any question content when scrolled to bottom

**Processing screen**
- [ ] "Reading your vibe…" text appears in sequence
- [ ] Vibe label reveals cleanly ("Coastal Wanderer" etc.)
- [ ] "Reveal my matches" button is tappable

---

## 4. Results page

- [ ] Page loads after quiz without a blank/broken state
- [ ] Match #3 card shows correctly — image, destination name, key stats
- [ ] "Not feeling it? See match #2" → reveals match #2 smoothly
- [ ] "Ready for your #1?" → hero reveal of match #1 is dramatic and clean
- [ ] Heart icon on each match card taps correctly
- [ ] **Save modal (critical):**
  - [ ] Heart tap on first save → modal opens over the page (not cropped by screen)
  - [ ] Email input is focusable — keyboard opens without modal being pushed offscreen
  - [ ] Email field is auto-typed / autocomplete works
  - [ ] "Send my matches" button is above the keyboard (test with keyboard open)
  - [ ] Close (×) button is tappable
  - [ ] Modal backdrop tap closes the modal
- [ ] "Share my match" button → share sheet opens (native share on iOS/Android) OR copy link works
- [ ] Handoff cards ("Talk to an advisor", "Browse homes", "Scouting trip") are all tappable and navigate correctly
- [ ] Confetti (match #1 reveal) — does it look good? Does it cause scroll lag?

---

## 5. Destination pages (Porto, Mérida, Asheville, Sarasota)

Test at least Porto and one domestic page.

- [ ] Hero image loads and fills the screen correctly
- [ ] Cost tables are readable without horizontal scrolling
- [ ] Neighborhood section cards stack properly on mobile (not side by side in a tiny grid)
- [ ] "Practical next steps" action cards (Visa/advisor/real estate links) are tappable
- [ ] In-page nav (if any section anchor links exist) work correctly

---

## 6. Older device — specific checks

On the oldest phone you have (or simulate by testing on an SE/older model):

- [ ] Fonts load — site doesn't fall back to system serif awkwardly
- [ ] Quiz welcome SVG illustration doesn't freeze or lag
- [ ] Processing screen animation (slow pan) doesn't cause jank
- [ ] Images load within a reasonable time (3–5 seconds on WiFi)
- [ ] No memory-related crashes during the quiz flow

---

## 7. iPad-specific checks

- [ ] Homepage layout is a proper 2 or 3-column layout — not a stretched single column
- [ ] Quiz uses the desktop layout (full panel with the fact card on the right) — **or** the mobile layout. Whichever it is, confirm it's intentional and looks good
- [ ] Nav shows inline links (hamburger should NOT appear at iPad width)
- [ ] Destination pages use the full-width layout properly

---

## Issue Log

| Device | Screen | Issue | Severity (🔴🟡🟢) |
|--------|--------|-------|-----------------|
|        |        |       |                 |
|        |        |       |                 |
|        |        |       |                 |

**Severity guide:**  
🔴 Blocking — quiz or modal broken, content invisible, unresponsive CTA  
🟡 Significant — layout broken but usable, unexpected behavior  
🟢 Minor — cosmetic, doesn't affect core flow

---

## What to do with issues

- 🔴 Fix before launch. Bring back to Claude with a screenshot + device + OS version.
- 🟡 Fix before launch if < 2 hours work; defer to v1.1 if larger.
- 🟢 Note for v1.1 backlog.
