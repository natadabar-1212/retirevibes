// results-matcher.js — RetireVibes quiz matching algorithm + results page population
// Depends on: destinations-data.js (must load first)

(function () {

  // ─── Read quiz answers from localStorage ───────────────────────────
  let answers = [];
  try {
    const raw = localStorage.getItem('rv_quiz_answers');
    if (raw) answers = JSON.parse(raw);
  } catch (e) {}

  // ─── Score each destination ─────────────────────────────────────────
  function scoreDestination(dest) {
    let score = 0;

    // Q[3] Geography — hard gate. If user picked specific regions,
    // destinations outside those regions get a big penalty.
    const geoAns = answers[3]; // array or null
    if (Array.isArray(geoAns) && geoAns.length > 0) {
      const matches = dest.geographyOptions.some(g => geoAns.includes(g));
      if (matches) score += 25;
      else score -= 40;
    }

    // Q[0] Weather — single select
    const weatherAns = answers[0];
    if (typeof weatherAns === 'number') {
      if (dest.weatherMatch[0] === weatherAns) score += 18; // primary match
      else if (dest.weatherMatch.includes(weatherAns)) score += 9; // secondary match
    }

    // Q[1] Setting — multi-select (up to 2)
    const settingAns = answers[1];
    if (Array.isArray(settingAns)) {
      settingAns.forEach(s => {
        if (dest.settingMatch[0] === s) score += 14; // primary
        else if (dest.settingMatch.includes(s)) score += 8; // secondary
      });
    }

    // Q[2] Pace — multi-select
    const paceAns = answers[2];
    if (Array.isArray(paceAns)) {
      paceAns.forEach(p => {
        if (dest.paceMatch[0] === p) score += 12; // primary
        else if (dest.paceMatch.includes(p)) score += 7; // secondary
      });
    }

    // Q[4] Lifestyle — single select
    const lifestyleAns = answers[4];
    if (typeof lifestyleAns === 'number') {
      if (dest.lifestyleMatch.includes(lifestyleAns)) score += 16;
      else if (dest.lifestyleMatch.some(l => Math.abs(l - lifestyleAns) === 1)) score += 6;
    }

    // Q[7] Priorities — multi-select (up to 3)
    const priorityAns = answers[7];
    if (Array.isArray(priorityAns)) {
      priorityAns.forEach(p => {
        if (dest.priorityMatch.includes(p)) score += 10;
      });
    }

    return score;
  }

  // ─── Rank destinations ──────────────────────────────────────────────
  function rankDestinations() {
    const scored = DESTINATIONS.map(d => ({ dest: d, score: scoreDestination(d) }));
    scored.sort((a, b) => b.score - a.score);
    return scored.map(s => s.dest);
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
    const paceLabels = ['active and adventurous', 'creative and cultural', 'relaxed and unhurried', 'social and connected'];
    const lifestyleLabels = ['simple and comfortable', 'comfortable with extras', 'upscale and enjoyable', 'the best of everything'];
    const priorityLabels = ['adventure and new experiences', 'community and belonging', 'peace and simplicity', 'purpose and passion', 'health and wellness', 'culture and creativity'];

    const weatherAns = typeof answers[0] === 'number' ? weatherLabels[answers[0]] : 'comfortable';
    const settingAns = Array.isArray(answers[1]) && answers[1].length > 0
      ? answers[1].slice(0, 2).map(i => settingLabels[i]).join(' or ')
      : 'the right kind of';
    const paceAns = Array.isArray(answers[2]) && answers[2].length > 0
      ? paceLabels[answers[2][0]]
      : 'balanced';
    const lifestyleAns = typeof answers[4] === 'number' ? lifestyleLabels[answers[4]] : 'comfortable';
    const topPriorities = Array.isArray(answers[7]) && answers[7].length > 0
      ? answers[7].slice(0, 3).map(i => priorityLabels[i])
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
    const learnLink = dest.page
      ? `<a class="learn-link" href="${dest.page}">Learn more about ${dest.name}</a>`
      : '';
    const tags = dest.tags.map(t => `<span class="tag">${t}</span>`).join('');

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
              </div>
              <div>
                <div class="stat-label">2BR home</div>
                <div class="stat-value">${dest.housing.buy}</div>
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
              <div class="stat-label">Est. monthly lifestyle cost</div>
              <div class="stat-value">${cost}<span style="font-size:16px;color:var(--warm-gray);">/mo</span></div>
              <div class="stat-sub">Based on your lifestyle preference</div>
            </div>
            <div>
              <div class="stat-label">Housing snapshot</div>
              <div class="stat-value">${dest.housing.buy}</div>
              <div class="stat-sub">${dest.housing.buyDesc} · ${dest.housing.rent} to rent</div>
            </div>
          </div>
          <div class="compare">${dest.compare}</div>
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

    return `
      <div class="handoff-card">
        <div class="icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A4B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <h4>Talk to a retirement advisor</h4>
        <p>${advisorDesc}</p>
        <a class="cta" href="${top.advisorPage}">Find an advisor →</a>
        <span class="partner">via SmartAsset</span>
      </div>
      <div class="handoff-card">
        <div class="icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A4B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>
        </div>
        <h4>${homesLabel}</h4>
        <p>${homesDesc}</p>
        <a class="cta" href="${top.browseHomesPage}">Explore ${top.name} homes →</a>
        <span class="partner">${homesPartner}</span>
      </div>
      <div class="handoff-card">
        <div class="icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3A4B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8z"/></svg>
        </div>
        <h4>Plan a scouting trip</h4>
        <p>Spend 7–10 days living like a local. Walk the neighborhoods, eat where locals eat, see if the vibe holds up in person.</p>
        <a class="cta" href="${top.scoutingPage}">Plan my trip →</a>
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

  // ─── Init ────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof DESTINATIONS === 'undefined') {
      console.warn('RetireVibes: destinations-data.js not loaded');
      return;
    }

    // If no quiz answers, show defaults (keep existing cards as-is)
    if (!answers || answers.length === 0) return;

    const ranked = rankDestinations();
    populatePage(ranked);

    // Update save heart states after dynamic content loads
    if (typeof updateSaveHeartStates === 'function') {
      updateSaveHeartStates();
    }
  });

})();
