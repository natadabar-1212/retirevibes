# RetireVibes — Design Audit Brief

## What this is

Please audit the RetireVibes site for UI and usability issues. The goal is to catch things that are **clearly outside best practices** for a content-rich consumer web app in this category — and to recommend specific, actionable improvements to visual execution and usability. This is not a brand refresh or redesign request.

**Live site:** https://natadabar-1212.github.io/retirevibes/

---

## Product context

RetireVibes is a vibe-driven retirement destination discovery app for Americans aged 40–55. Users take an 8-question lifestyle quiz → get matched with their top 3 retirement destinations (US and international) → explore destination deep-dives → get handed off to affiliate partners when ready to act.

**Audience emotional state:** Anxiety, not curiosity. Many feel behind on retirement. The site's job is to make retirement feel possible and exciting — not to add financial pressure. Copy and design should feel warm, editorial, and hopeful.

**Business model:** Affiliate revenue — advisor referrals, real estate, scouting trips. The CTA hierarchy matters a lot.

---

## What is locked — do not recommend changing these

- **Brand identity:** Name, tagline ("Good RetireVibes Only."), wordmark styling
- **Color palette:** The 9 CSS tokens below are the full palette — no new colors
- **Typography:** DM Serif Display (headings/display) + Inter (body/UI) — these are fixed
- **Layout philosophy:** Editorial, magazine-style. Rich photography, warm cream backgrounds, generous white space. This is intentional and should be preserved.
- **Content strategy:** The site never makes affordability claims about the user — it presents destination costs as facts, not judgments. Any copy recommendations must respect this.
- **Navigation structure:** 3 links only (Destinations · My RetireVibes · Take the quiz →). This is locked.
- **Page count and flow:** Quiz → Results → Destination deep-dives → Handoff pages. The flow is intentional.

---

## Design system

### Color tokens
```
--cream:           #FBF6EE   (page background)
--cream-soft:      #F4ECDD   (alt sections, footer)
--terracotta:      #C97B5A   (primary accent, CTA hover, italic em text)
--terracotta-dark: #A8593A   (cost values, strong text)
--teal:            #1B3A4B   (primary text, primary button bg)
--teal-soft:       #2E5468   (body copy, sub-headings)
--gold:            #C8A064   (secondary accent)
--gold-soft:       #E4C998   (accent on dark backgrounds)
--sage:            #93A89A   (image placeholders)
--warm-gray:       #7A6E5F   (labels, metadata, footer links)
```

### Typography
- **Headings/display:** DM Serif Display — hero h1 at 64–76px; section h2 at 44–52px
- **Body/UI:** Inter 400/500/600
- **Italic serif accents:** `<em>` in headlines styled in `--terracotta` (on light bg) or `--gold-soft` (on dark bg)

### Key component patterns
- **Pills/badges:** `border-radius: 999px`
- **Cards:** `border-radius: 14–18px`, white or cream bg, subtle border `rgba(27,58,75,0.07)`
- **Card hover:** `translateY(-2px to -4px)`, 0.25–0.3s transition
- **Primary CTA:** terracotta or teal bg, white text, 999px radius, 16–18px font
- **Mobile breakpoint:** 980px (hamburger nav)

---

## Pages to audit

Please review each of these pages. The site is a static HTML prototype — all pages are accessible at the links below.

| Page | URL | Notes |
|------|-----|-------|
| Homepage | `/homepage-mockup.html` | Hero, "how it works", 6 destination cards, quiz CTA |
| Quiz | `/mockups/vibe-quiz.html` | 8-question single-screen-per-question quiz |
| Results | `/results-page-mockup.html` | Reverse countdown reveal (#3→#2→#1), share/save modals |
| Destination deep-dive (dynamic) | `/destination-detail.html?id=porto-portugal` | Template used for all ~131 destinations |
| Destination deep-dive (static) | `/destination-porto.html` | Static Porto page — may differ slightly from template |
| Destination deep-dive (static) | `/destination-merida.html` | Static Mérida page |
| Find an advisor | `/find-an-advisor.html` | Advisor directory with filter + contact modal |
| My RetireVibes | `/my-retirevibes.html` | Saved destinations / account page |

---

## Audit scope — what IS in scope

Focus on these areas only:

**Visual execution**
- Spacing inconsistencies — padding/margin that feels off relative to the surrounding rhythm
- Typography hierarchy issues — cases where heading size, weight, or color doesn't clearly signal importance
- Color contrast — any text/background combinations that fall below WCAG AA (4.5:1 for body, 3:1 for large text)
- Component polish — borders, shadows, border-radii that are inconsistent across similar components
- Image treatment — photo overlay gradients, aspect ratios, placeholder handling

**Usability**
- CTA clarity — are the primary actions on each page unambiguous? Is the hierarchy clear?
- Mobile experience — anything that breaks, overflows, or becomes hard to tap at 375px and 768px
- Form and modal UX — the quiz, save modal, contact modal, share modal
- Empty states — what happens when a user has no saved destinations
- Scroll and flow — does the page order guide the user toward the right next action?
- Touch targets — anything below 44px tap target on mobile

**Do not audit:**
- SEO, analytics, or tracking
- Backend/server architecture (this is a static prototype)
- Content strategy or copywriting (copy is locked except for microcopy in UI elements)
- Accessibility beyond WCAG AA contrast (screen reader, ARIA, keyboard nav are out of scope for this round)
- Performance / load time

---

## How to deliver findings

Please structure your output as:

**1. Critical (fix before launch)** — things that would meaningfully hurt conversion or feel broken  
**2. High (strong recommendation)** — clear best-practice violations or friction points  
**3. Polish (nice to have)** — refinements that would elevate the design without being urgent  

For each finding, please provide:
- **Page/component** it appears on
- **What the issue is** (specific, not general — e.g., "the stat strip on mobile has no separator between cells" not "mobile needs work")
- **What to do instead** — a concrete recommendation using the existing design system tokens and patterns

Please do not recommend new colors, new fonts, or layout changes that alter the editorial character of the site. Work within what's there.
