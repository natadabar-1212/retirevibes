# RetireVibes — Browser Compatibility Test Script (#47)

**Browsers to test:** Safari 14+ · Chrome · Firefox · Edge  
**Time estimate:** 30–45 minutes total (test one page flow across all 4 browsers)  
**Why Safari matters most:** Your 40–55 audience skews Apple-heavy — expect 40–50% Safari share.

You only need a Mac and a Windows machine (or a Mac running Windows via Parallels/VM).  
- Mac: Safari + Chrome + Firefox  
- Windows: Edge + Chrome (if you don't have Windows, Edge and Firefox on Mac are sufficient)

---

## Before you start

Open `https://retirevibes.com` in each browser. Run the same checklist in each.  
Test in normal window size first (desktop), then narrow the window to ~400px to check mobile layout.

---

## Checklist (run for each browser)

### Homepage

- [ ] Fonts load correctly — DM Serif Display (serif headings) and Inter (body)
- [ ] Hero background and gradient render without artifacts
- [ ] Destination cards load images and hover state works (lift effect)
- [ ] Nav links visible and styled correctly — no missing colors or broken layout
- [ ] Hamburger appears when window is narrowed to ~400px

### Quiz

- [ ] Welcome screen illustration (SVG) renders correctly — no blank box
- [ ] Question options are full-width, readable, and clickable
- [ ] Single-select: clicking an option highlights it and auto-advances after ~0.6s
- [ ] Multi-select: multiple options can be selected; "Next" enables after first selection
- [ ] Slider (Q5): thumb is draggable, value updates in real time
- [ ] Progress dots update as you move through questions
- [ ] Processing screen animation plays (or is gracefully reduced if prefers-reduced-motion is on)
- [ ] Vibe label reveals and "Reveal my matches" button appears

### Results page

- [ ] Match cards load with images and styled correctly
- [ ] Sequential reveal (#3 → #2 → #1) works with correct timing
- [ ] Confetti animation fires on #1 reveal
- [ ] Save modal opens, email input is focusable, submit button works (it's UI-only but should not throw a JS error)
- [ ] Share modal: "Copy link" button works (clipboard write); native share button only appears if supported

### A destination page (Porto)

- [ ] Hero image loads
- [ ] Cost table renders — columns not collapsed or overflowing
- [ ] Neighborhood cards lay out in a grid (not stacked vertically on desktop)
- [ ] Practical action cards link correctly — no broken `href="#"` items on Porto

---

## Known browser gotchas to watch for

| Issue | What to check |
|-------|--------------|
| **Safari: `backdrop-filter: blur()`** | Nav blur effect — should work Safari 9+; if broken, nav background may be transparent |
| **Safari: `aspect-ratio`** | Image grid cards in quiz — if aspect-ratio fails, cards may have no height |
| **Safari: CSS `gap` in flex** | Nav-links, option grids — items may collapse with no spacing |
| **Firefox: `input[type=range]` styling** | Slider may look unstyled (browser-default) — functional but ugly |
| **Edge: Web Share API** | `navigator.share` not supported in older Edge — "Share" button should fall back to copy-link gracefully |
| **All: localStorage** | Quiz answers must persist from quiz.html to results page — check this works (no cross-origin block) |
| **Safari private mode** | localStorage may be blocked; quiz should still work but save/share features may silently fail |

---

## Safari-specific extra tests

Safari gets its own section because it's your highest-risk browser.

- [ ] Play the quiz start-to-finish in Safari — no JS errors in the console (⌘+Option+I → Console tab)
- [ ] localStorage works: complete quiz, go to results — vibe label and match data appear
- [ ] Sticky nav (`position: sticky`) stays fixed while scrolling destination pages
- [ ] `backdrop-filter: blur()` renders on nav (frosted glass effect)
- [ ] Form autofill works in save modal (Safari is particularly good at email autofill — make sure it doesn't break the layout)

---

## How to check for JS errors

In any browser:
1. Open Developer Tools (usually F12 or ⌘+Option+I)
2. Click the **Console** tab
3. Run through the quiz flow
4. Look for red error lines — yellow warnings are usually fine

Common safe-to-ignore warnings: Google Analytics 3rd-party cookie notices, font preload warnings.  
Flag anything red that appears during the quiz flow or on results page load.

---

## Issue Log

| Browser | Version | Screen | Issue | Severity (🔴🟡🟢) |
|---------|---------|--------|-------|-----------------|
|         |         |        |       |                 |
|         |         |        |       |                 |

**Severity guide:**  
🔴 Blocking — broken layout, JS error, quiz can't complete  
🟡 Cosmetic — works but looks wrong in this browser  
🟢 Minor — acceptable degradation

---

## What to do with issues

Screenshot + browser name + version → bring to Claude. For most CSS issues in older Safari, the fix is adding a vendor prefix or a fallback property. JS errors will need a stack trace from the console.
