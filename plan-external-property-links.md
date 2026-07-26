# Plan — External Property-Portal Links

**Authors:** Product Lead + Project Manager (Claude)
**Date:** 2026-07-22
**Trigger:** Natalie found the Adelaide "Buy" link 404s (`domain.com.au/sale/?suburb=adelaide` is not a real Domain URL).

---

## The problem, framed

Every real-estate page has "Rent" / "Buy" CTAs that deep-link into a **country-appropriate property portal** (Zillow, Idealista, Domain, Inmuebles24, etc.). There are **47 portal URL templates** in `generate-real-estate.js` → `getListings()`. Each was **hand-guessed** — the domain is right, but the *path format* is assumed.

- Some patterns are valid (Zillow's `/homes/for_sale/CITY_rb/` works).
- Some are wrong (Domain's `/sale/?suburb=X` 404s).
- **We don't know how many of the other 45 break** — they were never resolution-tested. The QA link crawl verified internal links and external *domains*, not external URL *resolution*.

**Why it matters (Product):** the "Browse homes" CTA is part of the **Handoff** step of the core loop and a future **revenue** surface. A 404 there breaks trust at the exact moment a user is ready to act. Reliability > precision here.

**The real long-term fix:** these are currently *informational, unmonetized* links. The intended monetization is **affiliate partnerships** (Idealista, Zillow, etc.), which supply **correct, tracked URLs**. Guessed deep-links are a stopgap that will keep silently breaking as portals change their schemes.

---

## Product decision

**Reliability first. No user hits a 404 from a "Browse homes" CTA at launch.** Precise, pre-filtered deep-linking is a nice-to-have that (a) must not block launch and (b) should ultimately come from affiliate integrations, not hand-guessed URLs.

---

## The plan (phased)

### Phase 0 — Pre-launch: make every link safe (owner: CTO; QA verifies)

Replace the guessed deep-links with each portal's **stable search entry point** so nothing 404s. Two flavors — **PM recommends 0A** for a guaranteed-clean launch:

- **0A — Safe base URLs for all 47 (recommended).** Point each portal link to its working rent/buy search landing page (e.g. `domain.com.au/rent/` and `/sale/` search, `zillow.com`, `idealista.pt`…). User filters by area on arrival. **Guaranteed zero 404s, one change, ships today, zero residual risk.** Trade-off: loses the pre-filled location.
- **0B — Hybrid.** Verify the correct deep-link format for the ~8–10 highest-traffic markets (US, Portugal, Spain, Mexico, Italy, France, Australia, Greece) via WebFetch, keep pre-filtering where confirmed, safe-base-URL the long tail. More precise; more effort; residual risk on portals that are JS-rendered/unverifiable.

Either way: **the copy already says "Browse homes in [City]"** — landing on a portal's search page still fits that promise.

### Phase 1 — Post-launch: affiliate integrations (owner: Affiliate-Partnerships + CTO)

Pursue portal affiliate/referral programs (Idealista, Zillow, Realtor.com, Domain, etc.). Replace stopgap links with **tracked affiliate URLs** — correct by construction and revenue-generating. This is the intended end state and aligns with the monetization roadmap. Sequence by market size.

### Phase 2 — Ongoing: external-link health monitor (owner: DevOps/QA)

Portal URLs drift. Stand up a **scheduled monthly check** that pings every external property URL and flags any non-200s, so breakage is caught proactively instead of by a user. (Can be a simple scheduled task.)

---

## Process fix (PM)

The earlier "all links checked" QA claim covered **internal** links + external **domains** only. **External URL *resolution* is a separate verification track** that was missed. Actions:
- Add "external property links resolve (spot-check per portal)" to the manual test plan.
- Phase 2 monitor makes this ongoing rather than manual.

---

## Decision needed from Natalie

**Phase 0 flavor: 0A (safe base URLs for all — recommended, ships today, zero 404s) or 0B (verify top markets + base-URL the rest)?**

Everything else (affiliate integrations, monitor) is sequenced post-launch and doesn't block.
