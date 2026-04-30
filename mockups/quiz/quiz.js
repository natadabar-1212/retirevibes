// quiz.js — Vibe Quiz state, render, and event handling
// Depends on: SCENES (scenes.js), QUESTIONS (questions.js)

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
function render() {
  stage.innerHTML = '';
  if (state.step === 'welcome') {
    progressWrap.style.display = 'none';
    renderWelcome();
  } else if (state.step === 'processing') {
    progressWrap.style.display = 'flex';
    renderProgressDots(QUESTIONS.length);
    renderProcessing();
  } else {
    progressWrap.style.display = 'flex';
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
      <button class="btn btn-welcome" onclick="start()">Find my RetireVibes →</button>
    </div>
  `;
  stage.appendChild(div);
}

// ---------- Question ----------
function renderQuestion(idx) {
  const q = QUESTIONS[idx];

  // Right panel — hero scene (inline SVG)
  const right = document.createElement('section');
  right.className = 'panel-right';
  const scene = SCENES[q.sceneKey] || SCENES.welcome;
  right.innerHTML = `
    <div class="hero-scene">${scene}</div>
    <div class="hero-caption">${q.caption}</div>
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
          const isSel = q.type === 'multi'
            ? Array.isArray(selected) && selected.includes(i)
            : selected === i;
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
      <button class="btn btn-ghost" onclick="back()">← Back</button>
      <button class="btn btn-primary" id="nextBtn" onclick="next()" disabled>
        ${idx === QUESTIONS.length - 1 ? 'See my matches' : 'Next'} →
      </button>
    </div>
  `;

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
      if (q.type === 'multi') {
        let arr = Array.isArray(state.answers[idx]) ? [...state.answers[idx]] : [];
        if (arr.includes(i)) {
          arr = arr.filter(x => x !== i);
        } else {
          arr.push(i);
          // If a max is set and we've exceeded it, drop the oldest selection
          if (q.max && arr.length > q.max) arr.shift();
        }
        state.answers[idx] = arr;
      } else {
        state.answers[idx] = i;
      }
      // Re-toggle selected class on all option buttons (text or image)
      opts.querySelectorAll('.option, .option-image').forEach((el) => {
        const k = parseInt(el.dataset.i);
        const isSel = q.type === 'multi'
          ? Array.isArray(state.answers[idx]) && state.answers[idx].includes(k)
          : state.answers[idx] === k;
        el.classList.toggle('selected', isSel);
      });
      updateNext(idx);
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
// Adjective comes from landscape (Q2, multi → first selection).
// Noun comes from pace (Q3, single).
function generateVibeLabel() {
  // Q2 options order: beach / lake / mountain / city / town / countryside
  const landscapeAdj = ['Coastal', 'Lakeside', 'Mountain', 'Urban', 'Village', 'Pastoral'];
  // Q3 options order: active / creative / relaxed / social
  const paceNoun = ['Adventurer', 'Aesthete', 'Wanderer', 'Host'];

  const landAns = state.answers[1];
  const landIdx = Array.isArray(landAns) && landAns.length > 0 ? landAns[0] : 0;
  const paceAns = state.answers[2];
  const paceIdx = Array.isArray(paceAns) && paceAns.length > 0 ? paceAns[0] : 2;

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
  const abroad = Array.isArray(state.answers[3]) && state.answers[3].some(i => i !== 0);

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
          <button class="btn btn-welcome" onclick="try{localStorage.setItem('rv_vibe_label','${vibeLabel}');localStorage.setItem('rv_quiz_answers',JSON.stringify(state.answers))}catch(e){};window.location.href='../results-page-mockup.html'">Reveal my matches →</button>
        </div>
      </div>
    </div>
  `;
  stage.appendChild(div);

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
