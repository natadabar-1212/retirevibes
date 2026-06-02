# QA Findings — 2026-06-01
**Status:** Open — to be discussed and fixed next session

---

## 🔴 Critical

1. **Porto special-case redirect in `scouting-trip-detail.html`** (line 498)
   - Redirects Porto to `scouting-trip.html` — violates no-special-cases rule
   - Fix: remove the redirect block, let Porto render in the standard template

2. **Booking.com links in `scouting-trip-domestic.html`** (lines 681, 948)
   - Still has Booking.com hrefs — should be Expedia affiliate link
   - Fix: replace with `https://expedia.com/affiliate/hDqrJfC`

3. **Untracked Expedia + Booking.com links in `scouting-trip.html`**
   - Porto-specific scouting page has old untracked links
   - Fix: replace with Expedia affiliate link

4. **Extra nav link in `scouting-trip-domestic.html`** (line 657)
   - Has "How it works" — nav should be 3 links only
   - Fix: remove the extra link

---

## 🟡 High

5. **Footer only shows "Destinations" on most pages — missing "My RetireVibes"**
   - Affects: advisor-domestic, advisor-international, browse-homes-domestic, browse-homes-international, destination-coming-soon, destination-detail, find-an-advisor, my-retirevibes, privacy-policy, scouting-trip-detail, scouting-trip-domestic, scouting-trip, scouting-trips, terms-of-service
   - `destinations.html` has 4 old links (Destinations · How it works · Find an advisor · Scouting trips) — needs trimming to 2
   - Fix: standardize all footers to Destinations · My RetireVibes

6. **`results-page-mockup.html` line 1314** — email share option uses `href="#"`
   - Functional via onclick but not clean
   - Fix: change to `javascript:void(0)`

7. **`browse-homes-international.html`** — scouting CTA links to `scouting-trip.html`
   - Should link to `scouting-trip-detail.html?id=porto`

---

## 🟠 Medium

8. **14 destinations missing from `scouting-data.js`** (118 of 132 have entries)
   - These will fall back to generic content on scouting pages
   - Discuss: is generic content acceptable or do we need to add entries?

9. **`generate-real-estate.js`** has Porto special-cases (lines 700, 945)
   - Generator script, not live site — lower risk
   - Discuss: fix or leave since pages are already generated?

---

## ✅ Passed automated checks
- No archived file references
- No SmartAsset references
- No false affiliate disclosures
- shared.js load order correct on all pages
- No missing images on key pages
- All 4 localStorage keys correctly wired
- 132 destinations in destinations-data.js (108 intl, 24 domestic)
- All 132 taglines present
