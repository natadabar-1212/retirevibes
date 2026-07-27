# RetireVibes — Go-to-Market & Traffic Plan

**Author:** Marketing Lead (Claude)
**Date:** 2026-07-25
**Context:** Site is live on Vercel, launch-blocking QA + P0s cleared. Approach = **soft launch first** (organic, watch the funnel), then scale what works. Email capture is deferred to v2, so acquisition carries the whole load right now and retention is capped until email exists.

---

## The one thing to internalize

**The quiz is the wedge.** Almost every post, pin, and link drives to **"Take the quiz →"**, not the homepage. The 2-minute quiz is the magic moment — it's low-commitment, it's shareable, and it's where someone goes from browsing to *"this is about me."* Homepage traffic that doesn't reach the quiz is a near-miss.

## Who we're talking to

Americans 40–55, **anxious not curious.** They feel behind on money and half-expect another tool to confirm it. We never confirm the fear. We lead with possibility and specificity, and we hand them a small, safe first step.

Message pillars:
1. **Reframe the anxiety.** "Most retirement tools start with a number you don't have. We start somewhere better." Acknowledge the wondering, then offer the next small step.
2. **Specificity beats benefits.** "Mérida costs roughly half what Sarasota does" beats "find affordable retirement." Real places, real monthly costs, real vibes.
3. **Low commitment.** Two minutes, no signup, no income questions.

**Brand guardrail (non-negotiable):** never make money claims *about the user.* Destination-to-destination cost comparisons are fine; "stretch your money" / "you can afford" is a fail. All copy routes through Brand/Copy before it ships.

---

## Phase 0 — Soft launch (weeks 1–3): organic, ~$0

**Goal:** real funnel signal, not scale. Success = a few hundred quiz starts and clean read on where people drop.

### 1. Pinterest — the top channel (organic first)
- **Why:** travel discovery engine, female 40+ skew, evergreen + search-driven, and pins keep working for months. Best audience fit we have.
- **Do:** business account; boards by *vibe* ("Coastal retirement," "Slow-living towns," "Retire abroad on a budget") and by destination. 15–20 opening pins, then 3–5/week. Every pin → the quiz or a destination page (both now have canonical images).
- **Creative:** your real destination photography + a specific hook in the caption. No stock retiree-on-a-beach.
- **Metric:** outbound clicks → quiz starts. **Effort:** M setup, S ongoing.

### 2. Value-first community seeding (careful)
- **Where:** r/ExpatFIRE, r/retirement, r/SlowTravel; a handful of expat/retirement Facebook groups.
- **Rule:** participate genuinely; share the quiz only where it actually answers someone's question. One spammy drop gets you banned and burns the channel. Think "helpful regular," not "marketer."
- **Metric:** referral sessions + quiz starts from these sources. **Effort:** S–M, ongoing.

### 3. Personal network (highest-quality early signal)
- **Do:** ask 20–30 people in or near the target age to take the quiz and tell you the one confusing moment. This is your fastest, most honest feedback loop before any stranger sees it.
- **Metric:** completion + qualitative notes.

### 4. SEO foundation (plant now, compounds later) — with SEO/AEO agent
- **Do:** confirm sitemap + robots, meta titles/descriptions, and schema on the 132 destination pages; make sure "retire in [place]" long-tail is indexable. This won't move soft-launch numbers but it's the cheapest durable traffic you'll ever get, and it takes months to mature — so start the clock now.
- **Metric:** pages indexed, first impressions in Search Console.

---

## Phase 1 — After ~3 weeks of data: scale what works

Gate every paid dollar on the Phase 0 funnel looking healthy (strong quiz completion + handoff clicks). Then:

- **Pinterest Ads first** (lowest CPM, best fit), then **Meta** interest targeting (50+ travel/retirement/expat). Start tiny — $10–20/day per test — with a defined **kill criterion** (e.g., cost-per-quiz-completion above $X after 7 days → stop).
- **YouTube / TikTok:** slow-living + expat content has huge watch time; organic-first, test one format before spending.
- **Podcast + newsletter placements** in personal-finance / slow-travel / lifestyle-design space — high-trust, audience-aligned.

**Two flags for this phase (PM/legal crossover):** (a) paid marketing that drives *significant* traffic is the trigger that makes **attorney review** launch-relevant again — loop Legal in before you scale spend; (b) the accounts you'll advertise on (Pinterest/Meta/etc.) don't exist yet — that's checklist item 60 and a prerequisite.

---

## The scorecard (watch weekly)

Four numbers, mapped to the core loop — all now instrumented in GA4:

| Metric | Event | What "good" looks like (rough) |
|---|---|---|
| Quiz start rate | `quiz_start` / sessions | 25–40% of sessions that land on a quiz-CTA page |
| Quiz completion | `quiz_complete` / `quiz_start` | 60%+ (below that, a question is losing people) |
| Save rate | `destination_saved`* | directional — are matches compelling enough to keep? |
| Handoff CTR | `affiliate_click` | any meaningful rate = the "ready to act" signal |

\* `destination_saved` isn't wired yet — it's the one remaining core-loop event to instrument (small add).

---

## The biggest structural gap: retention

Email is the retention engine, and it's deferred to v2 — so right now every visitor is essentially one-and-done, and (because saves are device-local) a returning user on a new phone looks brand new. **Do not read low return numbers as failure during soft launch.** If acquisition + completion + handoff look strong but return is weak, that's the signal that **v2 email + accounts** is the highest-leverage next build — not that the product is missing.

---

## Immediate next steps

1. Create the Pinterest business account + first boards (prerequisite for the top channel).
2. I draft channel-by-channel briefs (hooks, board structure, 10 opening pin captions) → route copy through Brand/Copy.
3. Coordinate with SEO/AEO agent on the indexability checklist.
4. Wire the `destination_saved` event so the save step is measurable.
5. Pick a soft-launch "flip it on" date and the first channel to start with.
