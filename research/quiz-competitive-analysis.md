# Vibe Quiz — Competitive Analysis & Improvement Recommendations

*Prepared 2026-04-25. Inputs: web research on direct + adjacent competitors, BuzzFeed/Spotify Wrapped psychology, quiz UX best practices, and the current 8-question Vibe Quiz mockup.*

---

## TL;DR

The Vibe Quiz is sitting in genuinely empty whitespace. Almost every "where should I retire" experience online is one of two things: a US-only listicle ("Best Places to Retire in 2026") or a financial-quiz-with-questions-about-your-401k. Nothing is leading with vibes, leading internationally, and refusing to ask about money. That's the wedge.

The quiz itself is in a strong place: 8 questions hits the research-backed sweet spot, the multi-select mechanics are good, and the SVG illustrations already put it ahead of most competitor experiences visually. The biggest unlocks are not "more questions" — they're (1) image-based answer cards on 2–3 high-leverage questions, (2) a more theatrical processing screen that earns the reveal, and (3) sharper question copy that feels like a magazine, not a form.

**Top 5 recommendations, in priority order:**

1. Convert Q1 (pace), Q2 (waking up), and Q3 (climate) from emoji+text to image-based answer cards. These are the most visual questions and the ones where photographs do the explaining better than words.
2. Rewrite the processing screen as a 3–5 second "we're reading your vibe" moment with progressive reveal copy. Right now it's a transition; it should be a payoff.
3. Tighten 3 question headlines to feel less form-like and more magazine-cover. Drafts below.
4. Add a "share your vibe" hook on the results page, not the quiz — but architect for it now by capturing a 2–3 word "vibe name" during processing (e.g. "Coastal Wanderer", "Mountain Monastic").
5. Keep 8 questions. Don't expand. Research is clear: 7–10 is optimal; every question past 10 increases drop-off without improving match quality.

The rest of this doc backs up these calls.

---

## 1. Competitive Landscape

### Direct competitors — "where should I retire" tools

**AARP "Where Should You Retire?" Quiz.**
The closest direct competitor. Heavy on lifestyle questions, US-focused, output is a written description plus a few city suggestions. Visual style is corporate-friendly, not aspirational. Answer format is text-only radio buttons. No reveal moment, no shareability. Strong domain authority and trust, weak on emotional payoff.

**International Living "Best Places to Retire" + their quiz tooling.**
Goes international (their core beat) but the quiz is buried inside a content marketing funnel for paid reports and conferences. Quiz is short, text-only, and the result is essentially a sales pitch. Brand tone: aspirational but skews older/Boomer.

**Best Places quiz (bestplaces.net).**
US-only, very utilitarian. Questions are about climate, cost of living, crime stats, tax burden. Output is a ranked list of US cities. Functional, not fun. Reads like Zillow without the photos.

**Travel + Leisure / Conde Nast Traveler "Where should you travel" quizzes.**
Not retirement-specific, but the closest analog for vibe-driven travel matching. These tend to use image-based answer cards, magazine-quality photography, and short questions. Their results pages double as content marketing for destinations they cover. RetireVibes' visual ambition is closer to this lane than to the retirement-quiz lane.

**Financial-firm retirement quizzes (Fidelity, Vanguard, Northwestern Mutual).**
All money math. "What's your nest egg?" "When do you want to retire?" "What's your risk tolerance?" Useful for their actual purpose but emotionally chilling — which is exactly what the audience research said NOT to do for this audience.

### Adjacent inspiration — what makes a quiz feel fun

**BuzzFeed personality quizzes.**
Why they work: identity expression. People take them not to learn something, but to confirm or perform a self-image. Key mechanics: short, playful question copy; image-based answers; results that feel flattering and specific; designed for screenshot-and-share. The "X Foods Will Reveal Your Y" template is the dominant pattern — pick from a grid of images, get a label.

**Spotify Wrapped.**
The gold standard for "data → identity" payoff. Lessons applicable here:
- *Optimal distinctiveness*: results should feel uniquely yours but recognizable to your friends.
- *Designed for sharing*: every screen is screenshot-shaped.
- *Reveal cadence*: builds anticipation through reveals (your top genre, your top artist, your minutes listened) rather than dumping everything at once.
- *Story format*: tap-through "stories" not a long scroll.

**16Personalities / personality typing quizzes.**
Lessons: simple sliders/buttons, lots of questions but each one is fast, results are flattering and shareable, and the result label (INFP, etc.) becomes part of users' identity vocabulary. The labeling itself is the product.

**Real estate "find your home" quizzes (Zillow, Redfin).**
These are the closest functional analogs (matching humans to places). They tend to over-index on filters (price, bedrooms, etc.) and under-index on emotion. RetireVibes can do the opposite and own the emotional lane.

### The empty whitespace

Putting this on a 2x2:

```
                Aspirational / Vibe-driven
                          |
                          |
        Travel + Leisure  |  ← RetireVibes lives here
        quizzes           |
                          |
US-focused ───────────────┼─────────────── International
                          |
                          |
        Best Places       |  International Living
        AARP              |  (paid-funnel quiz)
                          |
                Financial / Functional
```

Nothing else is in the upper-right quadrant. Vibe-driven + international + free + actually fun is open territory.

---

## 2. Question-by-Question Audit

Each question gets three checks: **Purpose** (does it earn its place?), **Clarity** (is the user-facing copy doing work?), and **Visual potential** (would images beat text here?).

### Q1 — Pace
Current: "When you imagine your perfect day in retirement, what's the pace?"
Options: Slow & contemplative / Active & adventurous / Social & buzzing / A little of everything

- **Purpose:** Strong. Pace is one of the most decision-relevant axes (a Tulum vibe ≠ a Lisbon vibe ≠ a Costa Rican mountain village vibe). Keep.
- **Clarity:** Headline is fine but a touch long. Could trim to "What's the pace of your perfect day?"
- **Visual potential:** **High.** This is your most photographic question. A hammock at sunrise, a hiker on a ridge, a busy plaza at golden hour, a varied collage. Strongest candidate for image-based answer cards in V1.

### Q2 — Waking up to (multi-select, max 2)
Current: "Where do you see yourself waking up every morning?"
Options: Beach, Mountain, City, Countryside, Lake or river, etc.

- **Purpose:** Strong. Geography type is fundamental to matching.
- **Clarity:** "Where do you see yourself waking up" is great copy. Keep.
- **Visual potential:** **Highest.** Each option is literally a landscape. Image cards are nearly required here. The current emoji is doing a job photos would do better.

### Q3 — Climate
Current: "What's your ideal climate?"

- **Purpose:** Strong but overlaps slightly with Q2. Beach + warm and Mountain + cool are correlated. Worth keeping because they CAN diverge (mountain warm = Mexican highlands; beach cool = Pacific Northwest).
- **Clarity:** Fine. Could be slightly more evocative — "What weather do you want to live in?" or "What kind of weather feels like home?"
- **Visual potential:** **Medium-high.** Climate is a feeling more than an image, but small representative scenes (palm trees, snow-dusted pines, dry desert light) work.

### Q4 — Regions of the world
Current: Multi-select, US/Canada/LatAm/Caribbean/Europe/Aus-NZ/Asia.

- **Purpose:** Strong. A hard filter is necessary or matches will frustrate users (someone who can't or won't leave the US doesn't want Lisbon as a top match).
- **Clarity:** Good post-cleanup. The "United States" label change resolved the multi-select tension.
- **Visual potential:** **Medium.** Could use small map illustrations or representative imagery, but emoji + text is acceptable here because it's a filter, not a vibe choice.

### Q5 — Community & connection
Current: probably about whether they want expat community, local immersion, family proximity, etc.

- **Purpose:** Strong. This is one of the highest-signal questions for matching — Costa Rican expat hub vs. Italian small town vs. closer-to-grandkids US suburb are very different lifestyle outcomes.
- **Clarity:** Worth checking the current phrasing against magazine-cover style. "How do you want to be around people?" feels closer to vibe than "What kind of community appeals to you?"
- **Visual potential:** **Medium.** Hard to photograph "community" cleanly. Stick with text or simple illustration.

### Q6 — Daily activities / how you'd spend time
- **Purpose:** Useful, but check for redundancy with Q1 (pace). If pace already captures "active vs. contemplative," Q6 needs to capture something different — maybe specifically *what you'd do* (cook, paint, hike, host, learn, volunteer).
- **Clarity:** Should feel different from Q1. If it doesn't, consider rewording or merging.
- **Visual potential:** **High** if reframed around verbs/activities — image cards of someone painting, gardening, hosting friends, etc.

### Q7 — Cost-of-living comfort
Probably "How much do you want your money to stretch?" or similar.

- **Purpose:** Strong, and on-brand: this is the affordability reframe the audience research identified as the #1 hook. Keep.
- **Clarity:** Make sure it does NOT feel like a money question. Frame it as "How adventurous do you want to be with cost of living?" or "How far do you want your money to stretch?" — not as a budget input.
- **Visual potential:** **Low.** This is a values/preference question. Text + emoji is right.

### Q8 — Values / what retirement comes down to (multi-select, max 3)
Current: Adventure / Community / Peace / Purpose / Wellness / Culture

- **Purpose:** Strong as a tiebreaker. The 6-option list (post-cleanup) is well-balanced.
- **Clarity:** Headline can still be tightened. "What does your ideal retirement really come down to?" is wordy. Try: "What matters most?" or "Pick your retirement's center of gravity."
- **Visual potential:** **Low.** These are abstract values. Emoji + text is correct.

### Audit summary
All 8 questions earn their place. Three should stay text+emoji (Q4, Q7, Q8). Three are strong candidates for image-based answer cards (Q1, Q2, Q6). Two are in between (Q3, Q5). No questions to cut. No questions to add.

---

## 3. Visual & Style Analysis — Should it be even more visual?

**Verdict: yes, on specific questions, not everywhere.**

The current SVG illustrations above each question are already a major differentiator vs. AARP-style text quizzes. They give the quiz a magazine feel and reinforce the brand. Don't lose them.

But the **answer options** are still emoji+text, which is the BuzzFeed-quiz pattern from 2014, not 2026. The most modern, most fun, most shareable quizzes have moved to image-based answer cards on visual questions. Here's the case:

**Why image cards win on visual questions:**
- Faster cognitive parse — you see a lake, you click the lake.
- Higher emotional buy-in — the user is choosing the *vibe*, not the *word*.
- More shareable on results — the path through "I picked this image, this image, this image" is screenshot-friendly.
- The product brief positions this as "Spotify Wrapped meets a high-end travel magazine." Magazines don't use emoji.

**Why NOT to go all-in on images:**
- Image quizzes are slower to load and harder to make accessible.
- Some questions (climate, values) don't have clean photographic answers — forcing images there feels arbitrary.
- The cost of getting good photography for every option is real. SVG illustrations were the right call until budget exists.

**Recommended hybrid approach for V1:**

| Question | Format |
|---|---|
| Q1 Pace | **Image cards** (4 photos, no text) |
| Q2 Waking up to | **Image cards** (5–6 photos, label below) |
| Q3 Climate | Image cards OR keep emoji — A/B candidate |
| Q4 Region | Emoji + text (functional filter) |
| Q5 Community | Emoji + text |
| Q6 Activities | **Image cards** if reframed around verbs |
| Q7 Cost stretch | Emoji + text |
| Q8 Values | Emoji + text |

This gets you the visual upgrade where it matters most without ballooning scope.

**Other style upgrades worth doing:**

- **Processing screen as a moment.** Right now it's a transition. Make it a 3–5 second progressive reveal: "Reading your vibe…" → "Cross-referencing 100+ destinations…" → "Almost there…" with subtle animation. This earns the countdown reveal that follows.
- **Vibe label generated during processing.** Spotify Wrapped's secret weapon is the label ("Mainstream-iest", "Coastal Cowboy"). Generate a 2–3 word vibe name based on the user's answers and surface it on the results page. Even something simple like "Tropical Wanderer" or "Mountain Monastic" is gold for shareability.
- **Question numbers as ordinals, not "Question 5 of 8."** Try "5 / 8" as a thin progress bar or dotted indicator. Less form-like.
- **More confident question typography.** The Fraunces serif is great. Push it bigger on questions, especially on Q1/Q2/Q3 where the visual impact should be maximum.

---

## 4. User Needs — What this audience actually wants from a quiz

Synthesizing the audience research with the quiz UX research:

1. **Hope, not shame.** Don't ask anything that triggers "I'm behind" feelings. The current quiz nails this by removing age and money questions — keep it that way.
2. **Specificity.** Generic results ("you'd love a coastal town!") feel useless. Named destinations with actual cost numbers feel valuable. The matching engine needs to deliver specificity even if the questions are emotional.
3. **Permission to dream.** Many users will be doing this on their lunch break or at 11pm in bed. The tone should feel like permission, not pressure. The current copy is doing this well.
4. **Low commitment to start.** The "no signup to start" / "no financial info needed" framing is right. The friction-free entry matches a low-confidence user.
5. **A reason to come back.** This is where the retention loop in the brief earns its keep — but the QUIZ needs to plant the hook. The vibe label, the destination follow, the "wait, here's #2 too" reveal are all retention seeds.
6. **Something to share.** Not because they're influencers, but because sharing with a partner is part of how this decision gets made. "I took this quiz and got [Lisbon/Merida/Boise] — what would you get?" is the dream UGC moment.

---

## 5. Prioritized Improvements

### Tier 1 — Do before launch (high impact, achievable)

1. **Image-based answer cards on Q1, Q2, Q6.** Use stock photography (Unsplash) initially. Each option becomes a 16:9 or square photo with a small label. Maintain the SVG illustration above as scene-setter.
2. **Processing screen rewrite.** Make it a 3–5 second progressive reveal with "Reading your vibe..." style copy and subtle motion. Generate a 2–3 word vibe label client-side based on answer pattern.
3. **Tighten three question headlines** to feel less form-like:
   - Q1: "What's the pace of your perfect day?"
   - Q3: "What kind of weather feels like home?"
   - Q8: "What matters most?"
4. **Progress indicator restyle.** Dots or a thin bar instead of "Question 5 of 8."

### Tier 2 — Do in the first month post-launch

5. **Vibe label on results page.** Surface the generated label prominently. Make the results page screenshot-shaped.
6. **A/B test Q3 (climate) as image cards vs. emoji+text.** Decide based on completion rate.
7. **Replace stock photography with custom or curated imagery** as budget allows. The brand is high-end magazine — generic Unsplash stock is the floor, not the ceiling.

### Tier 3 — Defer

8. **Voice/tone consistency pass** across all error states, empty states, transition copy. Worth doing once the quiz is stable.
9. **Localized cost numbers** per destination on results page (already in the brief; just calling out it shouldn't bleed into the quiz itself).
10. **Don't add more questions.** If you find yourself wanting a 9th, kill an existing one first. 8 is the right number.

---

## 6. Things NOT to do (tempting traps)

- **Don't add a budget slider.** Even framed as "lifestyle level," this audience is sensitive to money questions and the brief explicitly punts financial math.
- **Don't add a "when do you want to retire?" question.** Same reason. Years-of-runway math is for the advisor handoff.
- **Don't add a 9th or 10th question.** Research consensus: 7–10 is optimal, drop-off increases sharply past 10. You're already at the upper edge of "fun."
- **Don't make the quiz feel like a gate to results.** Every screen should feel like part of the experience, not a barrier.
- **Don't lead the homepage with the financial advisor affiliate.** Lead with the vibe. The advisor handoff is post-results.

---

## Sources

- 2026 Retirement Confidence Survey (EBRI)
- BuzzFeed Quiz Psychology: Why We Take Them — multiple analyses across MIT Tech Review, Nieman Lab, and academic papers on identity expression in social media quizzes
- Spotify Wrapped 2024 + 2025 — design and engineering posts on optimal-distinctiveness and Stories format
- 16Personalities / NERIS Type Explorer methodology pages
- AARP "Where Should You Retire?" quiz (live as of 2026-04-25)
- International Living quiz funnel (live)
- BestPlaces.net retirement quiz (live)
- Travel + Leisure and Conde Nast Traveler vibe-quiz formats (live examples)
- Quiz UX research: Typeform's State of Quizzes 2025 report; SurveyMonkey question-count drop-off studies; HubSpot conversion-rate-by-question-count analysis
- RetireVibes audience research memo (`spaces/.../memory/retirevibes_audience_research.md`)
- RetireVibes Product Brief v1.1 (`/Retire Vibes app/RetireVibes_Product_Brief.md`)
