// quiz.js — Vibe Quiz state, render, and event handling
// Depends on: SCENES (scenes.js), QUESTIONS (questions.js)

// ---------- Retirement facts (shown in right panel per question) ----------
const FACTS = [
  {
    stat: '300+',
    unit: 'days of sunshine',
    body: 'The top-ranked retirement destinations — Algarve, Sarasota, Mérida — average over 300 sunny days a year. Climate isn\'t everything, but it changes everything.',
    icon: '☀️'
  },
  {
    stat: '70%',
    unit: 'of retirees say it matters',
    body: 'Access to nature — coastlines, mountains, parks — is one of the top predictors of retirement happiness and daily wellbeing.',
    icon: '🌿'
  },
  {
    stat: 'The best retirement',
    unit: 'isn\'t a place — it\'s a rhythm.',
    body: 'Retirees with the highest life satisfaction didn\'t just find a beautiful backdrop. They found a daily pace that genuinely feels like theirs.',
    icon: '☕'
  },
  {
    stat: '700,000+',
    unit: 'Americans living abroad',
    body: 'Over 700,000 Americans currently collect Social Security while living outside the US. The world is more open than most people realize.',
    icon: '🌍'
  },
  {
    stat: '20–40%',
    unit: 'less per month',
    body: 'Most retirees spend significantly less than during their working years — especially outside major US cities. Lifestyle abroad often costs less and feels like more.',
    icon: '💛'
  },
  {
    stat: 'Rent first.',
    unit: 'Then decide.',
    body: 'Many expats and relocators recommend renting for 1–2 years before buying anywhere new. You get to know a place before you commit to it.',
    icon: '🔑'
  },
  {
    stat: 'Purpose',
    unit: 'outlasts leisure.',
    body: 'Studies show retirees with a clear sense of purpose and community report higher life satisfaction — and tend to live longer, healthier lives.',
    icon: '🎯'
  }
];

// ---------- State ----------
const state = {
  step: 'welcome',  // 'welcome' | number 0..N-1 | 'processing'
  answers: Array(QUESTIONS.length).fill(null),
};

// ---------- DOM refs ----------
const stage = document.getElementById('stage');
const progressWrap = document.getElementById('progressWrap');

// ---------- Progress dots ----------
function renderProgressDots(currentIdx) {
  // currentIdx: 0..N-1 (in quiz), N (processing/done)
  const total = QUESTIONS.length;
  let html = '';
  for (let i = 0; i < total; i++) {
    let cls = 'progress-dot';
    if (currentIdx > i) cls += ' completed';
    else if (currentIdx === i) cls += ' current';
    html += `<span class="${cls}"></span>`;
  }
  progressWrap.innerHTML = html;
}

// ---------- Top-level render ----------
const exitLink = document.querySelector('.exit-link');

function render() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  stage.innerHTML = '';
  if (state.step === 'welcome') {
    progressWrap.style.display = 'none';
    if (exitLink) exitLink.style.display = 'none';
    renderWelcome();
  } else if (state.step === 'processing') {
    progressWrap.style.display = 'flex';
    if (exitLink) exitLink.style.display = 'none';
    renderProcessing();
  } else {
    progressWrap.style.display = 'flex';
    if (exitLink) exitLink.style.display = '';
    const idx = state.step;
    renderProgressDots(idx);
    renderQuestion(idx);
  }
}

// ---------- Welcome ----------
function renderWelcome() {
  const div = document.createElement('div');
  div.className = 'welcome screen';
  div.innerHTML = `
    <div class="welcome-scene">${SCENES.welcome}</div>
    <div class="welcome-inner">
      <div class="welcome-kicker">Good RetireVibes Only</div>
      <h1 class="welcome-title">Find where retirement<br/>feels right.</h1>
      <p class="welcome-sub">
        Take the 2-minute Vibe Quiz and we'll match you with three retirement
        destinations — US and worldwide — that actually fit who you are.
      </p>
      <div class="welcome-meta">
        <span>✦ Three destinations matched to your vibe</span>
        <span>✦ US and international destinations</span>
        <span>✦ No financial info needed</span>
      </div>
      <button class="btn btn-welcome">Find my RetireVibes →</button>
    </div>
  `;
  div.querySelector('.btn-welcome').addEventListener('click', start);
  stage.appendChild(div);
}

// ---------- Question ----------
function renderQuestion(idx) {
  const q = QUESTIONS[idx];

  // Right panel — retirement fact card
  const right = document.createElement('section');
  right.className = 'panel-right fact-panel';
  const fact = FACTS[idx] || FACTS[0];
  right.innerHTML = `
    <div class="fact-card">
      <div class="fact-icon">${fact.icon}</div>
      <div class="fact-stat">${fact.stat}</div>
      <div class="fact-unit">${fact.unit}</div>
      <p class="fact-body">${fact.body}</p>
    </div>
    <div class="fact-caption">${q.caption}</div>
  `;

  // Left panel — question + options
  const left = document.createElement('section');
  left.className = 'panel-left screen';
  let body = '';

  if (q.type === 'slider') {
    const val = state.answers[idx] ?? q.default;
    body = `
      <div class="slider-wrap">
        <div class="slider-value" id="sliderVal">${val}</div>
        <div class="slider-label" id="sliderLabel">${q.live(val)}</div>
        <input type="range" min="${q.min}" max="${q.max}" value="${val}" id="slider"/>
        <div class="slider-ticks">
          <span>${q.min}</span>
          <span>${Math.round((q.min + q.max) / 2)}</span>
          <span>${q.max}</span>
        </div>
      </div>
    `;
  } else if (q.useImages) {
    // Illustrated answer cards (inline SVG from OPTION_SCENES)
    const colClass = q.cols === 3 ? 'cols-3' : '';
    const selected = state.answers[idx];
    body = `
      <div class="options image-grid ${colClass}" id="opts">
        ${q.options.map((o, i) => {
          const val = o.value !== undefined ? o.value : i;
          const isSel = q.type === 'multi'
            ? Array.isArray(selected) && selected.includes(val)
            : selected === val;
          const art = o.svg
            ? `<span class="img-svg">${o.svg}</span>`
            : (o.img ? `<span class="img-svg" style="background-image: url('${o.img}');"></span>` : '');
          return `
            <button class="option-image ${isSel ? 'selected' : ''}" data-i="${i}">
              ${art}
              <span class="img-overlay"></span>
              <span class="img-label">${o.label}</span>
              <span class="img-check"></span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  } else {
    const colClass = q.cols === 2 ? 'two-col' : (q.cols === 3 ? 'three-col' : '');
    const selected = state.answers[idx];
    body = `
      <div class="options ${colClass}" id="opts">
        ${q.options.map((o, i) => {
          const isSel = q.type === 'multi'
            ? Array.isArray(selected) && selected.includes(i)
            : selected === i;
          return `
            <button class="option ${isSel ? 'selected' : ''}" data-i="${i}">
              <span class="emoji">${o.emoji}</span>
              <span>${o.label}</span>
              <span class="check"></span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  left.innerHTML = `
    <div class="q-num">${q.part} · Q${idx + 1}</div>
    <h2 class="q-title">${q.title}</h2>
    ${q.hint ? `<p class="q-hint">${q.hint}</p>` : ''}
    ${body}
    <div class="nav-row">
      <button class="btn btn-ghost">← Back</button>
      <button class="btn btn-primary" id="nextBtn" disabled>
        ${idx === QUESTIONS.length - 1 ? 'See my matches' : 'Next'} →
      </button>
    </div>
  `;

  left.querySelector('.btn-ghost').addEventListener('click', back);
  left.querySelector('#nextBtn').addEventListener('click', next);

  stage.appendChild(left);
  stage.appendChild(right);

  // Wire up
  if (q.type === 'slider') {
    const slider = document.getElementById('slider');
    const valEl = document.getElementById('sliderVal');
    const labEl = document.getElementById('sliderLabel');
    if (state.answers[idx] == null) state.answers[idx] = q.default;
    slider.addEventListener('input', (e) => {
      const v = parseInt(e.target.value);
      valEl.textContent = v;
      labEl.textContent = q.live(v);
      state.answers[idx] = v;
    });
    document.getElementById('nextBtn').disabled = false;
  } else {
    const opts = document.getElementById('opts');
    opts.addEventListener('click', (e) => {
      const btn = e.target.closest('.option, .option-image');
      if (!btn) return;
      const i = parseInt(btn.dataset.i);
      // Use option's explicit value (e.g. Asia value:6) if defined, otherwise use button index
      const v = q.options[i] && q.options[i].value !== undefined ? q.options[i].value : i;
      if (q.type === 'multi') {
        let arr = Array.isArray(state.answers[idx]) ? [...state.answers[idx]] : [];
        if (arr.includes(v)) {
          arr = arr.filter(x => x !== v);
        } else {
          arr.push(v);
          // If a max is set and we've exceeded it, drop the oldest selection
          if (q.max && arr.length > q.max) arr.shift();
        }
        state.answers[idx] = arr;
      } else {
        state.answers[idx] = v;
      }
      // Re-toggle selected class on all option buttons (text or image)
      opts.querySelectorAll('.option, .option-image').forEach((el) => {
        const k = parseInt(el.dataset.i);
        const kv = q.options[k] && q.options[k].value !== undefined ? q.options[k].value : k;
        const isSel = q.type === 'multi'
          ? Array.isArray(state.answers[idx]) && state.answers[idx].includes(kv)
          : state.answers[idx] === kv;
        el.classList.toggle('selected', isSel);
      });
      updateNext(idx);
      // Auto-advance on single-select after a brief delay so the selection registers visually
      if (q.type === 'single') {
        setTimeout(next, 650);
      }
    });
    updateNext(idx);
  }
}

function updateNext(idx) {
  const q = QUESTIONS[idx];
  const btn = document.getElementById('nextBtn');
  const a = state.answers[idx];
  let ok = false;
  if (q.type === 'slider') ok = true;
  else if (q.type === 'multi') ok = Array.isArray(a) && a.length > 0;
  else ok = typeof a === 'number';
  btn.disabled = !ok;
}

// ---------- Navigation ----------
function start() {
  state.step = 0;
  render();
}
function back() {
  if (state.step === 0) { state.step = 'welcome'; }
  else if (typeof state.step === 'number') { state.step -= 1; }
  render();
}
function next() {
  if (typeof state.step === 'number') {
    if (state.step < QUESTIONS.length - 1) {
      state.step += 1;
      render();
    } else {
      state.step = 'processing';
      render();
    }
  }
}

// ---------- Vibe label ----------
// Generate a 2-word retirement vibe (e.g. "Coastal Wanderer") from answers.
// Adjective comes from landscape (Q1, multi → first selection).
// Noun comes from pace (Q3, single — now at index 3 after Geography moved to Q2).
function generateVibeLabel() {
  // Q1 options order: beach / lake / mountain / city / town / countryside
  const landscapeAdj = ['Coastal', 'Lakeside', 'Mountain', 'Urban', 'Village', 'Pastoral'];
  // Q3 options order: full-throttle / mixed / slow-easy / social-first
  const paceNoun = ['Adventurer', 'Explorer', 'Wanderer', 'Host'];

  const landAns = state.answers[1];
  const landIdx = Array.isArray(landAns) && landAns.length > 0 ? landAns[0] : 0;
  const paceAns = state.answers[3];
  const paceIdx = typeof paceAns === 'number' ? paceAns : 2;

  const adj = landscapeAdj[landIdx] ?? 'Wandering';
  const noun = paceNoun[paceIdx] ?? 'Soul';
  return `${adj} ${noun}`;
}

// ---------- Processing screen ----------
// 3-stage progressive reveal (~3.7s) → vibe label moment.
function renderProcessing() {
  const div = document.createElement('div');
  div.className = 'processing screen';

  const vibeLabel = generateVibeLabel();
  const abroad = Array.isArray(state.answers[2]) && state.answers[2].some(i => i !== 0);

  div.innerHTML = `
    <div class="processing-bg">${SCENES.processing}</div>
    <div class="processing-inner">
      <div class="reveal-stack" id="revealStack">
        <div class="reveal-stage" data-i="0">Reading your vibe…</div>
        <div class="reveal-stage" data-i="1">Cross-referencing destinations${abroad ? ' worldwide' : ''}…</div>
        <div class="reveal-stage" data-i="2">Finding what fits…</div>
      </div>
      <div class="vibe-label-wrap" id="vibeWrap">
        <div class="vibe-eyebrow">Your retirement vibe is</div>
        <div class="vibe-label">${vibeLabel}</div>
        <p class="vibe-tagline">We've matched you with three destinations that feel like home for a ${vibeLabel.toLowerCase()}.</p>
        <div style="margin-top:36px;">
          <button class="btn btn-welcome" id="revealBtn">Reveal my matches →</button>
        </div>
      </div>
    </div>
  `;
  stage.appendChild(div);

  div.querySelector('#revealBtn').addEventListener('click', function() {
    try {
      localStorage.setItem('rv_vibe_label', vibeLabel);
      localStorage.setItem('rv_quiz_answers', JSON.stringify(state.answers));
    } catch(e) {}
    var depth = window.location.pathname.includes('/mockups/') ? '../' : '';
    window.location.href = depth + 'results-page-mockup.html';
  });

  const stages = div.querySelectorAll('.reveal-stage');
  const stack = div.querySelector('#revealStack');
  const vibeWrap = div.querySelector('#vibeWrap');

  // Show each stage in sequence
  stages.forEach((el, i) => {
    setTimeout(() => el.classList.add('shown'), 400 + i * 1100);
  });
  // Fade the stack out, then reveal the vibe label
  const fadeAt = 400 + stages.length * 1100 + 400;
  setTimeout(() => {
    stack.style.transition = 'opacity 0.5s ease';
    stack.style.opacity = '0';
  }, fadeAt);
  setTimeout(() => {
    vibeWrap.classList.add('shown');
  }, fadeAt + 500);
}

// ---------- Init ----------
render();
