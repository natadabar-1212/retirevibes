// results-matcher.js — RetireVibes quiz matching algorithm + results page population
// Depends on: destinations-data.js (must load first)
//
// Answer indices (current order — Geography moved to Q2, Pace to Q3):
//   Q[0] weather:    0=warm/sunny  1=four seasons  2=mild/temperate  3=cool/crisp
//   Q[1] setting:    0=beach  1=lake/river  2=mountains  3=city  4=small town  5=countryside
//   Q[2] geography:  0=US  1=Canada  2=Mexico/LatAm  3=Caribbean  4=Europe  5=Australia/NZ  6=Asia  7=Africa
//   Q[3] pace:       0=full-throttle  1=mixed  2=slow/easy  3=social-first  (single-select)
//   Q[4] lifestyle:  0=simple/comfortable  1=comfortable+extras  2=upscale  3=luxury
//   Q[5] housing:    0=own  1=rent  2=resort/community  3=non-traditional  4=not sure
//   Q[6] priorities: 0=adventure  1=community  2=peace/simplicity  3=purpose  4=health  5=culture/arts

(function () {

  // ─── Read quiz answers from localStorage ───────────────────────────
  // After removing the partner/solo question, answers has 7 elements (indices 0–6).
  // Legacy: if stored array has 8 elements (old format with partner/solo at [6]),
  // priorities were at [7] — detect this and remap so scoring is correct.
  let answers = [];
  try {
    const raw = localStorage.getItem('rv_quiz_answers');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        if (parsed.length === 8) {
          // Old format: [weather, setting, pace, geo, lifestyle, housing, partner, priorities]
          // Remap: drop index 6 (partner) AND swap pace/geo to new order [weather, setting, geo, pace, ...]
          answers = [parsed[0], parsed[1], parsed[3], parsed[2], parsed[4], parsed[5], parsed[7]];
        } else {
          answers = parsed;
        }
      }
    }
  } catch (e) {}

  // ─── Score each destination ─────────────────────────────────────────
  function scoreDestination(dest) {
    let score = 0;

    // Q[2] Geography — hard gate. If user picked specific regions,
    // destinations outside those regions get a big penalty.
    const geoAns = answers[2]; // array
    if (Array.isArray(geoAns) && geoAns.length > 0) {
      const matches = dest.geographyOptions.some(g => geoAns.includes(g));
      if (matches) score += 25;
      else score -= 40;
    }

    // Q[0] Weather — single select
    // Weather is a strong preference signal — penalise destinations that don't
    // offer the user's climate at all, so e.g. a warm-sunny destination never
    // beats a cool/crisp one just because it scores well on lifestyle/priorities.
    const weatherAns = answers[0];
    if (typeof weatherAns === 'number' && dest.weatherMatch && dest.weatherMatch.length > 0) {
      if (dest.weatherMatch[0] === weatherAns) score += 22; // primary match
      else if (dest.weatherMatch.includes(weatherAns)) score += 10; // secondary match
      else score -= 15; // no match at all — hard to overcome
    }

    // Q[1] Setting — multi-select (up to 2)
    // "Where you wake up" is a top-tier signal — weighted to match weather.
    const settingAns = answers[1];
    if (Array.isArray(settingAns) && dest.settingMatch && dest.settingMatch.length > 0) {
      settingAns.forEach(s => {
        if (dest.settingMatch[0] === s) score += 20; // primary
        else if (dest.settingMatch.includes(s)) score += 10; // secondary
      });
    }

    // Q[3] Pace — single-select
    const paceAns = answers[3];
    if (typeof paceAns === 'number' && dest.paceMatch && dest.paceMatch.length > 0) {
      if (dest.paceMatch[0] === paceAns) score += 12; // primary
      else if (dest.paceMatch.includes(paceAns)) score += 7; // secondary
    }

    // Q[4] Lifestyle — single select
    const lifestyleAns = answers[4];
    if (typeof lifestyleAns === 'number' && dest.lifestyleMatch) {
      if (dest.lifestyleMatch.includes(lifestyleAns)) score += 16;
      else if (dest.lifestyleMatch.some(l => Math.abs(l - lifestyleAns) === 1)) score += 6;
    }

    // Q[5] Housing — soft signals (not a hard gate, just nudges)
    const housingAns = answers[5];
    if (Array.isArray(housingAns) && dest.housing) {
      // User wants to own → slight penalty if buy info mentions restricted foreign ownership
      if (housingAns.includes(0)) {
        const buyInfo = (dest.housing.buy || '').toLowerCase();
        if (buyInfo.includes('lease') || buyInfo.includes('restricted')) score -= 8;
      }
      // Resort/community preference → nudge toward domestic destinations
      if (housingAns.includes(2) && !dest.isInternational) score += 5;
      // Non-traditional (RV/boat/slow travel) → slight penalty for international (visa complexity)
      if (housingAns.includes(3) && dest.isInternational) score -= 4;
    }

    // Q[6] Priorities — multi-select (up to 3) — index 6 after partner/solo question removed
    const priorityAns = answers[6];
    if (Array.isArray(priorityAns)) {
      priorityAns.forEach(p => {
        if (dest.priorityMatch && dest.priorityMatch.includes(p)) score += 7; // values matter, but less than where/what climate
      });
    }

    return score;
  }

  // ─── Rank destinations ──────────────────────────────────────────────
  // When the user selects 2+ regions, enforce one result per selected region
  // so they always get geographic variety — not 3 from the same country.
  function rankDestinations() {
    const scored = DESTINATIONS.map(d => ({ dest: d, score: scoreDestination(d) }));
    scored.sort((a, b) => b.score - a.score);

    const geoAns = answers[2]; // array of selected region indices

    if (Array.isArray(geoAns) && geoAns.length >= 2) {
      const result = [];
      const usedIds = new Set();

      // For each selected region (in the order they appear in geoAns),
      // pick the highest-scoring destination from that region not yet chosen.
      geoAns.forEach(function(regionIdx) {
        const best = scored.find(function(s) {
          return !usedIds.has(s.dest.id) &&
                 Array.isArray(s.dest.geographyOptions) &&
                 s.dest.geographyOptions.includes(regionIdx);
        });
        if (best) {
          result.push(best);
          usedIds.add(best.dest.id);
        }
      });

      // Re-sort the regional winners by overall score so #1 is still the best match.
      result.sort((a, b) => b.score - a.score);

      // If we have 3+ diverse results, return them.
      if (result.length >= 3) {
        return result.slice(0, 3).map(s => s.dest);
      }

      // Fewer than 3 (e.g. a region had no matches) — fill remaining from top overall.
      for (const s of scored) {
        if (result.length >= 3) break;
        if (!usedIds.has(s.dest.id)) {
          result.push(s);
          usedIds.add(s.dest.id);
        }
      }
      result.sort((a, b) => b.score - a.score);
      return result.slice(0, 3).map(s => s.dest);
    }

    // Single region or "anywhere" — pure score ranking.
    return scored.slice(0, 3).map(s => s.dest);
  }

  // ─── Get cost estimate for a destination ────────────────────────────
  function getCostEstimate(dest) {
    const lifestyleAns = typeof answers[4] === 'number' ? answers[4] : 1;
    const cost = dest.costPerMonth[lifestyleAns];
    return cost ? '~$' + cost.toLocaleString() : '~$2,400';
  }

  // ─── Generate profile card text from quiz answers ───────────────────
  function generateProfileText() {
    const weatherLabels = ['warm and sunny', 'four-season', 'mild and temperate', 'cool and crisp'];
    const settingLabels = ['coastal', 'lakeside', 'mountain', 'urban', 'small-town', 'open-country'];
    const paceLabels = ['full throttle — out doing things most days', 'a good mix of active and slow days', 'slow and easy — unhurried, no fixed agenda', 'social first — your pace follows your people'];
    const lifestyleLabels = ['simple and comfortable', 'comfortable with extras', 'upscale and enjoyable', 'the best of everything'];
    const priorityLabels = ['adventure and new experiences', 'community and belonging', 'peace and simplicity', 'purpose and passion', 'health and wellness', 'culture and creativity'];

    const weatherAns = typeof answers[0] === 'number' ? weatherLabels[answers[0]] : 'comfortable';
    const settingAns = Array.isArray(answers[1]) && answers[1].length > 0
      ? answers[1].slice(0, 2).map(i => settingLabels[i]).join(' or ')
      : 'the right kind of';
    const paceAns = typeof answers[3] === 'number' ? paceLabels[answers[3]] : 'balanced';
    const lifestyleAns = typeof answers[4] === 'number' ? lifestyleLabels[answers[4]] : 'comfortable';
    const topPriorities = Array.isArray(answers[6]) && answers[6].length > 0
      ? answers[6].slice(0, 3).map(i => priorityLabels[i])
      : ['community', 'peace', 'purpose'];

    return {
      para1: `You're drawn to <strong>${weatherAns} weather</strong> in a <strong>${settingAns} setting</strong> — a place where the environment itself feels like part of the life you're building.`,
      para2: `Your ideal pace is <strong>${paceAns}</strong>, and your lifestyle vision is <strong>${lifestyleAns}</strong>. You want ${topPriorities.join(', ')} — not just a destination, but a home.`,
      traits: topPriorities.map(p => `<span class="tag warm">${p.split(' ')[0].charAt(0).toUpperCase() + p.split(' ')[0].slice(1)}</span>`).join('')
    };
  }

  // ─── Build card HTML ────────────────────────────────────────────────
  function buildCard(dest, rank, compact) {
    const cost = getCostEstimate(dest);
    const destPage = dest.page || ('destination-detail.html?id=' + dest.id);
    const learnLink = `<a class="learn-link" href="${destPage}">Learn more about ${dest.name}</a>`;
    const tags = (dest.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

    if (compact) {
      return `
        <article class="card compact">
          <div class="photo" style="background-image: url('${dest.photo}');">
            <button class="card-save" data-name="${dest.name}" onclick="toggleSave('${dest.name}')" aria-label="Save ${dest.name}">♡</button>
            <div class="photo-cap">${dest.photoCap}</div>
          </div>
          <div class="body">
            <div>
              <div class="country"><span class="flag">${dest.flag}</span><span>Match #${rank} · ${dest.region}</span></div>
              <h1 class="destination-name">${dest.name}</h1>
            </div>
            <p class="tagline">${dest.tagline}</p>
            <div class="stats">
              <div>
                <div class="stat-label">Est. monthly cost</div>
                <div class="stat-value">${cost}<span style="font-size:13px;color:var(--warm-gray);">/mo</span></div>
                <div class="stat-sub" style="font-size:11px;">${(dest.housing && dest.housing.rent) ? 'Rent ' + dest.housing.rent + ' included' : ''}</div>
              </div>
              <div>
                <div class="stat-label">Housing — Buy</div>
                <div class="stat-value">${(dest.housing && dest.housing.buy) || 'Varies'}</div>
              </div>
            </div>
            <div class="actions">
              <button class="save-heart" data-name="${dest.name}" onclick="toggleSave('${dest.name}')" aria-label="Save ${dest.name}">
                <span class="heart-icon">♡</span> Save ${dest.name}
              </button>
              ${learnLink}
            </div>
          </div>
        </article>`;
    }

    return `
      <article class="card${rank === 1 ? ' hero' : ''}">
        <div class="photo" style="background-image: url('${dest.photo}');">
          <button class="card-save" data-name="${dest.name}" onclick="toggleSave('${dest.name}')" aria-label="Save ${dest.name}">♡</button>
          <div class="photo-cap">${dest.photoCap}</div>
        </div>
        <div class="body">
          <div>
            <div class="country"><span class="flag">${dest.flag}</span><span>${dest.region}</span></div>
            <h1 class="destination-name">${dest.name}</h1>
          </div>
          <p class="tagline">${dest.tagline}</p>
          <div class="tags">${tags}</div>
          <div class="stats">
            <div>
              <div class="stat-label">Est. monthly cost</div>
              <div class="stat-value">${cost}<span style="font-size:16px;color:var(--warm-gray);">/mo</span></div>
              <div class="stat-sub">${(dest.housing && dest.housing.rent) ? 'Rent ' + dest.housing.rent + ' included' : 'Based on your quiz answers'}</div>
            </div>
            <div>
              <div class="stat-label">Housing — Buy</div>
              <div class="stat-value">${(dest.housing && dest.housing.buy) || 'Varies'}</div>
              <div class="stat-sub">${(dest.housing && dest.housing.buyDesc) || ''}</div>
            </div>
          </div>
          ${dest.compare ? `<div class="compare">${dest.compare}</div>` : ''}
          <div class="actions">
            <button class="save-heart" data-name="${dest.name}" onclick="toggleSave('${dest.name}')" aria-label="Save ${dest.name}">
              <span class="heart-icon">♡</span> Save ${dest.name}
            </button>
            ${learnLink}
          </div>
        </div>
      </article>`;
  }

  // ─── Build handoff cards for #1 match ───────────────────────────────
  function buildHandoffCards(top) {
    const advisorLabel = top.isInternational ? 'retiring abroad' : 'US retirement';
    const advisorDesc = top.isInternational
      ? 'RetireVibes doesn\'t do the financial math — but our advisor partners do. Get matched with a fiduciary who specializes in retirement abroad.'
      : 'Social Security timing, Medicare, RMDs — our advisor partners handle the details. Get matched with a fiduciary who specializes in US retirement.';
    const homesLabel = `Browse homes in ${top.name}`;
    const homesDesc = top.isInternational
      ? `Real listings — apartments, houses, and condos in ${top.name}. No commitment, just curiosity.`
      : `Active listings in ${top.name} — from starter homes to waterfront estates. See what the market looks like.`;
    const homesPartner = top.isInternational ? 'via Idealista / local partner' : 'via Zillow / Realtor.com';
    const browseLink = top.browseHomesPage || (top.isInternational ? 'browse-homes-international.html' : 'browse-homes-domestic.html');
    const advisorLink = top.advisorPage || (top.isInternational ? 'advisor-international.html' : 'advisor-domestic.html');
    const scoutLink = top.isInternational ? 'scouting-trip-detail.html?id=' + top.id : 'scouting-trip-domestic.html?city=' + top.id;

    return `
      <div class="handoff-card">
        <div class="icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A4B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <h4>Talk to a retirement advisor</h4>
        <p>${advisorDesc}</p>
        <a class="cta" href="${advisorLink}">Find an advisor →</a>
      </div>
      <div class="handoff-card">
        <div class="icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A4B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>
        </div>
        <h4>${homesLabel}</h4>
        <p>${homesDesc}</p>
        <a class="cta" href="${browseLink}">Explore ${top.name} homes →</a>
        <span class="partner">${homesPartner}</span>
      </div>
      <div class="handoff-card">
        <div class="icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A4B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8z"/></svg>
        </div>
        <h4>Plan a scouting trip</h4>
        <p>Spend 7–10 days living like a local. Walk the neighborhoods, eat where locals eat, see if the vibe holds up in person.</p>
        <a class="cta" href="${scoutLink}">Plan my trip →</a>
        <span class="partner">via Booking.com</span>
      </div>`;
  }

  // ─── Populate the page ───────────────────────────────────────────────
  function populatePage(ranked) {
    const [first, second, third] = ranked;

    // Match #3
    const card3 = document.getElementById('card-3-slot');
    if (card3) card3.innerHTML = buildCard(third, 3, false);

    // Match #2
    const card2 = document.getElementById('card-2-slot');
    if (card2) card2.innerHTML = buildCard(second, 2, false);

    // Match #1 hero card
    const card1 = document.getElementById('card-1-slot');
    if (card1) card1.innerHTML = buildCard(first, 1, false);

    // Profile card
    const profile = generateProfileText();
    const profileText = document.getElementById('profile-text-slot');
    if (profileText) {
      profileText.innerHTML = `
        <p>${profile.para1}</p>
        <p>${profile.para2}</p>
        <div class="profile-traits">${profile.traits}</div>`;
    }

    // Other matches (compact cards below hero)
    const otherMatches = document.getElementById('other-matches-slot');
    if (otherMatches) {
      otherMatches.innerHTML =
        buildCard(second, 2, true) +
        buildCard(third, 3, true);
    }

    // Handoff cards
    const handoff = document.getElementById('handoff-slot');
    if (handoff) handoff.innerHTML = buildHandoffCards(first);

    // Share modal text — update to reflect actual #1 match
    const shareQuote = document.getElementById('share-quote-slot');
    if (shareQuote) {
      shareQuote.textContent = `"Just found out my top retirement match is ${first.name}, ${first.country} ${first.flag} — took the RetireVibes quiz and I'm kind of obsessed. What's yours?"`;
    }

    // Wire up share functions with correct destination
    window._rvTopMatch = first;
  }

  // ─── Determine vibe archetype label from quiz answers ──────────────────
  function getVibeLabel(ans) {
    const weather    = ans[0];
    const settings   = Array.isArray(ans[1]) ? ans[1] : [];
    const geo        = Array.isArray(ans[2]) ? ans[2] : [];  // geography now at index 2
    const pace       = typeof ans[3] === 'number' ? ans[3] : -1; // pace now single-select at index 3
    const priorities = Array.isArray(ans[6]) ? ans[6] : [];

    const scores = {
      'The Sun-Chaser':        0,
      'The Cultured Wanderer': 0,
      'The Simplicity Seeker': 0,
      'The Active Explorer':   0,
      'The Global Citizen':    0,
    };

    // Sun-Chaser: warm + beach + slow/social pace
    if (weather === 0) scores['The Sun-Chaser'] += 3;
    if (settings.includes(0)) scores['The Sun-Chaser'] += 2;
    if (pace === 2 || pace === 3) scores['The Sun-Chaser'] += 1;

    // Cultured Wanderer: mixed or social pace + culture/arts priority
    if (pace === 1 || pace === 3) scores['The Cultured Wanderer'] += 3;
    if (priorities.includes(5)) scores['The Cultured Wanderer'] += 2;
    if (priorities.includes(3)) scores['The Cultured Wanderer'] += 1;

    // Simplicity Seeker: slow/easy pace + peace
    if (pace === 2) scores['The Simplicity Seeker'] += 3;
    if (priorities.includes(2)) scores['The Simplicity Seeker'] += 2;
    if (priorities.includes(1)) scores['The Simplicity Seeker'] += 1;

    // Active Explorer: full-throttle pace + adventure/health + mountains/nature
    if (pace === 0) scores['The Active Explorer'] += 3;
    if (priorities.includes(0)) scores['The Active Explorer'] += 2;
    if (settings.includes(2) || settings.includes(5)) scores['The Active Explorer'] += 1;
    if (priorities.includes(4)) scores['The Active Explorer'] += 1;

    // Global Citizen: international geography + adventure or culture
    if (geo.some(g => g > 0)) scores['The Global Citizen'] += 2;
    if (geo.includes(6) || geo.includes(7)) scores['The Global Citizen'] += 2;
    if (pace === 0 && priorities.includes(5)) scores['The Global Citizen'] += 1;

    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  }

  // ─── Init ────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof DESTINATIONS === 'undefined') {
      console.warn('RetireVibes: destinations-data.js not loaded');
      return;
    }

    // If no quiz answers, redirect to the quiz
    if (!answers || answers.length === 0) {
      window.location.replace('mockups/vibe-quiz.html');
      return;
    }

    const ranked = rankDestinations();
    populatePage(ranked);

    // ── Save results to localStorage so My RetireVibes can display them ──
    try {
      const vibeLabel = getVibeLabel(answers);
      const profile   = generateProfileText();
      const topThree  = ranked.slice(0, 3).map(d => ({
        name:         d.name,
        country:      d.country,
        flag:         d.flag,
        photo:        d.photo,
        page:         d.page || ('destination-detail.html?id=' + d.id),
        tagline:      d.tagline,
        region:       d.region,
        costPerMonth: d.costPerMonth
      }));
      localStorage.setItem('rv_vibe_label', vibeLabel);
      localStorage.setItem('rv_quiz_matches', JSON.stringify({
        matches:      topThree,
        vibeLabel:    vibeLabel,
        profilePara1: profile.para1,
        profilePara2: profile.para2,
        savedAt:      new Date().toISOString()
      }));
    } catch(e) {}

    // Update save heart states after dynamic content loads
    if (typeof updateSaveHeartStates === 'function') {
      updateSaveHeartStates();
    }
  });

})();
