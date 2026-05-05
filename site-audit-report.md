# RetireVibes Site Audit Report
**Date:** May 4, 2026  
**Scope:** Destination pages (Porto, Mérida, Asheville, Sarasota), quiz, results page, nav/footer, and shared infrastructure  
**Passes:** Research Analyst → Retirement Strategist → QA / End-to-End User Testing

---

## PART 1 — RESEARCH ANALYST PASS
*Verifying cost of living accuracy and factual claims for all four destination pages.*

---

### Porto, Portugal

**Cost accuracy:** The page shows ~$2,000/mo modest and ~$3,500/mo upscale for a couple. Independent sources (Numbeo, expat community surveys, INE Portugal data) put a comfortable couple's spend at $2,500–$3,500/mo. **Accurate.**

**🚨 CRITICAL — NHR Tax Program:** The practical card says the NHR program "largely closed in 2024." This is wrong on two counts:

- NHR closed fully on **March 31, 2025**, not 2024.
- The replacement program, IFICI (the "IFICI Incentive Scheme for Scientific Research and Innovation"), **does not apply to retirees**. It is designed for researchers, technology professionals, and qualified workers — not for retired passive income recipients.
- Any American retiree reading this page and thinking they can access NHR-style tax benefits is being misled.

**Fix required:** Update the card to say NHR closed March 31, 2025, that no equivalent tax regime exists for retirees, and to consult a Portuguese tax advisor for current options.

**Everything else:** D8 Passive Income Visa details, healthcare framing, and cost structure are accurate.

---

### Mérida, Mexico

**Cost accuracy:** The page shows ~$1,660/mo modest and ~$2,920/mo upscale for a couple. Independent sources (Numbeo, expat forums, INEGI) show $1,500–$2,500/mo comfortable — the modest figure is a bit optimistic but defensible given the disclaimer. **Broadly accurate.**

**⚠️ Stat strip inconsistency:** The quick stats strip says "$2,000–2,800 upscale lifestyle" but the numbers table totals to **$2,920/mo upscale.** These don't match. The table math is more detailed and credible — the stat strip should read "$2,000–2,900" or match the table.

**Visa income thresholds ($4,300/mo individual, $5,400 couple):** These are close to Mexico's 2025 Temporary Resident thresholds (based on ~300× daily minimum wage). Acceptable, though Mexico raises this threshold annually — worth a note to verify current requirements directly with the consulate.

**Rising cost context missing:** Mérida has been one of the fastest-appreciating expat destinations in Latin America — ~15%/year cost increases over the past 3 years due to remote worker and expat influx. The page presents costs as static facts. A strategist note like "costs in Mérida have been rising faster than most destinations — verify current listings" would serve readers well.

**Everything else:** IMSS pricing (~$50/mo), hospital names, time zone, safety claim ("consistently ranked safest large city in Mexico") — all accurate.

---

### Asheville, NC

**Cost accuracy:** The page shows ~$3,800 upscale for a couple. Research confirms $3,800–$4,200/mo comfortable. **Accurate.**

**⚠️ Hurricane Helene section understated:** The page has a risk practical card that mentions "September 2024 flooding" and that "parts of western NC are still recovering." This is accurate but significantly understates the situation as of May 2025:

- The Swannanoa River valley (a major residential and commercial corridor) experienced catastrophic flooding. Many businesses in the River Arts District and Swannanoa Valley have not reopened.
- The city's water infrastructure required major repairs; residents were without water for over a month after the storm.
- Homelessness in Asheville increased by approximately 50% post-Helene, creating visible social strain.
- Recovery timeline estimates from the city range from 2–5 years for full infrastructure restoration.

A prospective retiree deserves to know this is a multi-year recovery situation, not a past event. The tone of the current card ("the outdoor and cultural soul remains intact") may be overly optimistic given ongoing disruption.

**Everything else:** Arts/cultural scene claims, climate stats, practical logistics — accurate.

---

### Sarasota, FL

**Cost accuracy:** The page shows ~$3,400/mo modest and ~$4,800/mo upscale for a couple. Research supports $3,800–$5,500/mo for a comfortable couple. The $4,800 upscale estimate is reasonable but lean given current insurance costs. **Acceptable, with caveats below.**

**⚠️ Insurance estimate likely understated:** The numbers table shows $240–$340/mo for homeowners + flood + auto insurance. In reality, Florida insurance is among the most expensive in the country, and Sarasota's Gulf coast position makes it higher-risk. Realistic estimates from Florida Office of Insurance Regulation data and broker reports:
- Homeowners (post-2002 construction): $2,000–$4,500/year
- Flood (NFIP or private, required in many zones): $1,000–$3,000/year
- Auto: $1,800–$2,400/year  
- All-in: **$400–$800/mo** for a couple — potentially double the listed estimate.

The "Florida-rate, which is real" copy acknowledges this but the numbers don't reflect it.

**⚠️ HOA fees missing:** Sarasota's most attractive retirement housing stock (condos on or near the beach, gated communities, resort-style communities) almost universally has HOA fees. For a 2BR condo in a desirable area, $400–$800/mo HOA is common and can include amenities, exterior maintenance, and building insurance. This is a significant monthly cost not reflected anywhere on the page and could materially change a user's math.

**"Direct landfalls are uncommon" copy — review:** Hurricane Ian made landfall at Fort Myers in 2022, approximately 80 miles south of Sarasota. The Tampa Bay / Sarasota corridor has been on the "cone of concern" for multiple recent major storms. "Uncommon" is technically defensible but may give false comfort. Consider softening to "historically infrequent but real, and storm surge risk depends heavily on elevation and flood zone."

**Stat strip — 2BR rent $3,200/mo:** Zillow and BLS data for Sarasota show 2BR rentals averaging $2,200–$2,800 in most neighborhoods. $3,200 is high-end beach-adjacent. Consider revising to "$2,200–$3,200/mo" to reflect the range.

---

## PART 2 — RETIREMENT STRATEGIST PASS
*Evaluating usefulness, relevance, and duplication of content on each destination page.*

---

### General Observations (all pages)

**What works well across the board:**
- "A Day Here" sections are exceptional — vivid, specific, on-brand. Don't change them.
- The numbers tables are exactly the right level of detail: enough to frame the decision, not pretending to be a financial plan.
- The vibe match cards (4 per page) are distinct and well-differentiated — no filler.
- The handoff section structure (advisor + home search + scouting trip) is clean and purposeful.
- The disclaimer copy ("whether this fits your plan is your call — these are facts on the ground, not a recommendation") is excellent and exactly right for the brand.

**Duplication flag — similar places sections:** Each destination's "Similar Places" section cross-links the other three destinations. This is intentional navigation, not duplication. No issue.

---

### Porto — Strategist Notes

The content is excellent and hits the right notes for this audience. One addition worth considering: the practical card for the D8 visa links to `href="#"` — this is one of the more complex and consequential pieces of information on the page. Readers who want to understand the visa pathway have nowhere to go. Even a link to the Portuguese immigration authority (AIMA) or a vetted expat resource would serve them.

The NHR fix (noted in Research) is the only substantial content problem.

---

### Mérida — Strategist Notes

The content is strong. Three flags:

1. **Safety framing nuance:** The card says Mérida is "consistently ranked the safest large city in Mexico." This is true and meaningful — but in a US context, readers may wonder what that means in absolute terms. One sentence of context would help: something like "violent crime rates are well below Mexican averages and comparable to many US mid-size cities."

2. **Language barrier reality:** The practical cards mention "English in expat zones" in the stat strip, which is accurate. But the vibe card "Yucatán culture, not tourist Mexico" rightly celebrates local immersion. There's a slight tension here: readers should understand that outside of the expat bubble, basic Spanish is genuinely needed for daily life. The current copy handles this reasonably but a small acknowledgment would be honest.

3. **Scouting trip handoff:** This links to `href="#"` — there is no Mérida scouting trip page. The Porto scouting-trip.html exists; a Mérida equivalent hasn't been built. This should either link to a booking.com search for Mérida or be deprioritized with different copy.

---

### Asheville — Strategist Notes

The Helene risk card is the main issue (covered in Research). From a strategist lens, the current framing ("the outdoor and cultural soul remains intact") is aspirationally true but prospectively misleading for someone considering a move in 2025–2026. The audience — people 40–55 making major life decisions — deserves specificity: what's open, what's not, what the recovery timeline looks like, and why Asheville is still worth watching despite the disruption.

Suggested reframe: Acknowledge the severity honestly, then make the case for why Asheville remains a compelling long-term prospect (the underlying affordability, culture, climate, and community are unchanged). "Worth watching in 2026, worth scouting in 2027" is a honest and still optimistic framing.

The rest of the content is solid and well-differentiated from Sarasota and Porto.

---

### Sarasota — Strategist Notes

The content is strong. Three additions worth considering:

1. **Add HOA note to numbers table:** A brief "HOA fees: $0–$800/mo depending on property type" row, or at minimum a note in the housing row description, would prevent sticker shock. Many users will gravitate toward condos and communities, and HOA is a real recurring cost.

2. **The insurance line needs an upward revision** (per Research). The current $240–$340 estimate could leave users significantly underprepared for actual Florida insurance costs.

3. **"Grandkids three hours away on the East Coast" in vibe card:** This is vivid and real, but it's the only demographic assumption on the site (it implies the user has grandkids). The rest of the copy is admirably vibe-forward and doesn't assume family status. Could tighten to "family on the East Coast" or similar.

---

## PART 3 — QA PASS
*End-to-end tests: new user flow and returning user flow. Usability, UI, grammar, performance, broken links.*

---

### New User Flow

**Path tested:** Homepage → Take the Quiz → Results → Destination page → Handoff

**Homepage → Quiz:** The CTA "Take the quiz →" links to `results-page-mockup.html` in the nav, which is the results page, not the quiz. For a new user, this should go to the quiz. The nav CTA is correct in destination-specific pages — verify that the homepage nav CTA goes to the quiz, not results.

**Quiz:** Quiz flow is 8 questions, one per screen. Question swap (Geography to Q2, Pace to Q3, now single-select) has been implemented. Flow is clean.

**Results page:** Reverse-reveal mechanic (#3 → #2 → #1) works. Hardcoded to Porto #1, Sarasota #2, Asheville #3 for the prototype. Acceptable for now.

**Destination pages from results:** "← Back to your results" back link is present on all 4 pages. ✓

**Save flow (new user):** First heart click → modal → email required → saves to localStorage. Clean. ✓

**Share button:** Present on all destination pages. No JS handler visible in the files reviewed — clicking the button may do nothing. Needs verification.

---

### Returning User Flow

**Path tested:** Return visit → My RetireVibes → saved destinations → destination page → handoff

**localStorage persistence:** Save data written to `rv_saved` key. Email, destinations array, and timestamps are stored correctly. Heart icons update on page load to reflect saved state. ✓

**My RetireVibes page:** Reads `rv_saved` from localStorage and displays saved destinations. Not directly reviewed in this audit but task #15 (Overhaul My RetireVibes page) is marked completed.

**Cross-page save state:** Heart buttons on Similar Places cards use `data-name` and `toggleSave()` correctly. Saved state persists across navigation. ✓

---

### 🔴 Broken Links — Complete List

| Page | Link text | Current href | Issue |
|------|-----------|--------------|-------|
| Porto | "Plan a scouting trip" (handoff card) | `href="#"` | Should link to `scouting-trip.html` |
| Mérida | "Plan my trip →" (handoff card) | `href="#"` | No Mérida scouting page exists |
| Asheville | "Plan my weekend →" (handoff card) | `scouting-trip-domestic.html?city=asheville` | Page does not exist |
| Sarasota | "Plan my weekend →" (handoff card) | `scouting-trip-domestic.html?city=sarasota` | Page does not exist |
| Porto | "Read the D7 visa walkthrough →" | `href="#"` | Placeholder |
| Porto | "Medigap vs. private insurance →" | `href="#"` | Placeholder |
| Porto | "D7 vs. D8 comparison →" | `href="#"` | Placeholder |
| Mérida | "Read the residency walkthrough →" | `href="#"` | Placeholder |
| Mérida | "Compare insurance options →" | `href="#"` | Placeholder |
| Mérida | "Find a cross-border CPA →" | `href="#"` | Placeholder |
| Asheville | "Plan my weekend →" | `href="#"` (prior) or broken path | Placeholder |
| Sarasota | "Compare Medigap vs. Advantage →" | `href="#"` | Placeholder |
| Sarasota | "Run a tax comparison →" | `href="#"` | Placeholder |
| Sarasota | "Insurance + risk guide →" | `href="#"` | Placeholder |

**Note:** Placeholder `href="#"` links for in-content resources (visa walkthroughs, tax comparisons) are acceptable at this prototype stage — they represent planned content. The scouting trip links are more urgent because they represent live handoff revenue paths.

---

### 🔴 Nav Inconsistency — All 4 Destination Pages

**Spec (per CLAUDE.md):** 5 links — Destinations · How it works · Find an advisor · My RetireVibes · [Take the quiz →]

**Actual nav on all 4 destination pages:** 3 links only — Destinations · My RetireVibes · [Take the quiz →]

"How it works" and "Find an advisor" are missing from the nav on all static destination pages (porto, merida, asheville, sarasota). This is a systematic issue likely predating the nav cleanup task. Needs to be fixed across all 4 files.

---

### ⚠️ Footer Inconsistency — All 4 Destination Pages

**Spec (per CLAUDE.md):** Destinations · How it works · Find an advisor · Scouting trips · My RetireVibes

**Actual footer on all 4 destination pages:** Destinations · Find an advisor · Scouting trips · My RetireVibes

"How it works" is missing from all 4 destination page footers.

---

### Grammar and Copy — Issues Found

1. **Mérida vibe card:** "The Yucatán has its own food, its own music, its own pace" — good copy. The next sentence "and Mérida hasn't been flattened for outsiders the way some places have" is vivid but could be read as an indirect dig at places like Cancún or Los Cabos, which are legitimate travel options. Minor, but worth knowing.

2. **Sarasota similar card for Mérida:** "only two hours from Miami" — Mérida to Miami is approximately 2.5 hours by direct flight. Mérida to Houston is closer to 2 hours. This is a minor inaccuracy worth tightening to "about 2.5 hours from Miami."

3. **Sarasota vibe card (family):** "grandkids three hours away on the East Coast" — demographic assumption. Suggest: "family on the East Coast, three hours by air."

4. No other grammar errors found across the four pages.

---

### Performance

- **Images:** All local paths (`images/*.jpg`), no external CDN dependencies. Fast, no broken-image risk from CDN changes. ✓
- **Google Fonts:** Loaded via CDN with preconnect links. Standard, acceptable. ✓
- **No JavaScript frameworks:** Pure vanilla JS. Fast, no bundle overhead. ✓
- **CSS:** Inline per-page styles with CSS variables. No specificity conflicts. ✓
- **No console errors expected** from the patterns reviewed.

---

## PRIORITY FIX LIST

### P0 — Fix before any external sharing (factual accuracy / legal exposure)

1. **Porto NHR section** — Update to: NHR closed March 31, 2025; IFICI replacement does not apply to retirees; consult a Portuguese tax advisor.

2. **Asheville Helene section** — Strengthen to honestly reflect the ongoing multi-year recovery. Give specifics, then make the honest case for Asheville's long-term appeal.

### P1 — Fix before launch (functional)

3. **Nav on all 4 destination pages** — Add "How it works" and "Find an advisor" links to match spec.

4. **Footer on all 4 destination pages** — Add "How it works."

5. **Porto scouting trip link** — Change from `href="#"` to `href="scouting-trip.html"`.

6. **Mérida scouting trip link** — Either build the page or link to `https://www.booking.com/searchresults.html?ss=Merida%2C+Mexico` temporarily.

### P2 — Fix before launch (content quality)

7. **Mérida stat strip** — Update "$2,000–2,800" to "$2,000–2,900" to match the numbers table.

8. **Sarasota insurance line** — Revise estimate to $400–$800/mo or add a strong caveat that Florida insurance rates vary significantly by flood zone and construction year.

9. **Sarasota numbers table** — Add HOA row: "HOA fees (condos/communities): $0–$800/mo — not included above; varies by property type."

10. **Sarasota stat strip** — Update "~$3,200/mo rent" to "~$2,200–$3,200/mo rent" to reflect the range.

11. **Sarasota family vibe card** — Change "grandkids three hours away" to "family on the East Coast, three hours by air."

12. **Sarasota similar card** — "two hours from Miami" → "about 2.5 hours from Miami."

### P3 — Nice to have

13. **Mérida** — Add one sentence noting Mérida costs have been rising faster than most destinations (~15%/year) due to expat demand, with recommendation to verify current listings.

14. **Mérida safety card** — Add brief context for what "safest large city in Mexico" means for a US audience.

15. **Share button** — Verify that clicking the share button on destination pages does something (either native share API or copy link). If not wired, wire it or remove the button.

16. **All scouting trip domestic links** — When `scouting-trip-domestic.html` is built, wire both Asheville and Sarasota handoff cards to the appropriate city param.

---

## SUMMARY

The site is in strong shape for a prototype. The design and writing quality is genuinely excellent — the "Day in the Life" sections and vibe card copy are above the bar for most consumer web products, let alone a first build. The core user flows (quiz → results → destination → handoff) are structurally sound.

The two issues that need to be fixed before any external sharing are both factual: the Porto NHR claim is wrong and a prospective retiree acting on it could make a significant financial mistake, and the Asheville Helene framing understates an ongoing situation that directly affects quality of life for anyone considering a move.

The nav inconsistency (all 4 destination pages missing 2 links) is the most widespread structural fix and should be done as a batch operation across all 4 files.

Everything else on the P2/P3 list is polish — real improvements, but nothing that breaks the experience.
