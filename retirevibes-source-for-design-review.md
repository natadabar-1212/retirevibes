# RetireVibes — Full Source Code for Design Review

> See `design-audit-brief.md` in this folder for audit scope, what's locked, and the deliverable format.
>
> **Live site:** https://natadabar-1212.github.io/retirevibes/
>
> **Stack:** Static HTML/CSS/JS — no framework, no build step. Each page has inline `<style>` blocks. Shared behavior lives in `shared.css` and `shared.js` only. `destinations-data.js` is a ~3,500-line flat JS array powering `destination-detail.html` (the dynamic template used for ~131 destinations).

---

## File index

| File | What it is |
|------|-----------|
| `shared.css` | Active nav state + mobile hamburger styles |
| `shared.js` | Nav hamburger behavior + active state detection |
| `homepage-mockup.html` | Homepage — hero, how it works, 6 destination cards, quiz CTA |
| `results-page-mockup.html` | Results page — #3→#2→#1 reveal, profile panel, handoff, save/share modals |
| `destination-detail.html` | Dynamic destination template for all ~131 destinations |
| `mockups/vibe-quiz.html` | Quiz shell — actual question/scene logic in `mockups/quiz/` subfolder |

---

## shared.css

```css
/* ═══════════════════════════════════════════════════════════
   RetireVibes — shared nav styles
   Handles: active state, mobile hamburger menu
   ═══════════════════════════════════════════════════════════ */

/* ─── Active nav link ──────────────────────────────────────── */
.nav-links a.nav-active {
  color: var(--terracotta, #C97B5A) !important;
}

/* ─── Hamburger button (hidden on desktop) ─────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 4px;
  border-radius: 6px;
  transition: background 0.2s ease;
}
.hamburger:hover { background: rgba(27,58,75,0.06); }
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--teal, #1B3A4B);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─── Mobile nav ────────────────────────────────────────────── */
@media (max-width: 980px) {
  .hamburger { display: flex; }
  .nav {
    position: sticky; top: 0; z-index: 50;
    padding: 16px 24px; flex-wrap: wrap;
  }
  .nav-links {
    display: none !important;
    width: 100%; flex-direction: column;
    gap: 0; padding: 8px 0 16px; order: 3;
  }
  .nav-links.open { display: flex !important; }
  .nav-links.open a,
  .nav-links.open a:not(.nav-cta) {
    display: block !important;
    padding: 13px 4px; font-size: 16px;
    border-bottom: 1px solid rgba(27,58,75,0.07);
    border-radius: 0;
  }
  .nav-links.open a:last-child { border-bottom: none; }
  .nav-links.open a.nav-cta {
    margin-top: 10px; text-align: center;
    border-radius: 999px !important;
    padding: 13px 20px !important;
    background: var(--teal, #1B3A4B);
    color: #fff !important; border-bottom: none !important;
  }
}
@media (max-width: 480px) {
  .nav { padding: 14px 20px; }
}
```

---

## shared.js

```js
(function () {
  'use strict';

  const nav      = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');

  if (nav && navLinks) {
    const btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(btn);

    function openMenu() {
      navLinks.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      navLinks.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });
    navLinks.addEventListener('click', closeMenu);
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  var page = window.location.pathname.split('/').pop();
  if (!page || page === '') page = 'homepage-mockup.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href') || '';
    if (href === '#' || href === '') return;
    var hrefPage = href.split('#')[0].split('?')[0].split('/').pop();
    if (hrefPage && hrefPage === page) link.classList.add('nav-active');
  });
})();
```

---

## homepage-mockup.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>RetireVibes — Good RetireVibes Only</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="shared.css" />
<style>
  :root {
    --cream: #FBF6EE;
    --cream-soft: #F4ECDD;
    --terracotta: #C97B5A;
    --terracotta-dark: #A8593A;
    --teal: #1B3A4B;
    --teal-soft: #2E5468;
    --gold: #C8A064;
    --gold-soft: #E4C998;
    --sage: #93A89A;
    --warm-gray: #7A6E5F;
    --white: #FFFFFF;
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'Inter', -apple-system, system-ui, sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    background: var(--cream); color: var(--teal);
    font-family: var(--sans); font-size: 16px;
    line-height: 1.6; -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 50;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 48px;
    background: rgba(251, 246, 238, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(27, 58, 75, 0.06);
  }
  .wordmark { font-family: var(--serif); font-size: 24px; color: var(--teal); letter-spacing: -0.01em; text-decoration: none; }
  .wordmark em { color: var(--terracotta); font-style: normal; }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-links a { color: var(--teal); text-decoration: none; font-size: 15px; font-weight: 500; }
  .nav-links a:hover { color: var(--terracotta); }
  .nav-cta { padding: 12px 22px; background: var(--teal); color: var(--white) !important; border-radius: 999px; font-size: 14px; transition: all 0.25s ease; }
  .nav-cta:hover { background: var(--terracotta); color: var(--white) !important; }

  /* HERO */
  .hero { position: relative; min-height: 720px; display: flex; align-items: center; overflow: hidden; padding: 80px 48px 100px; }
  .hero-bg { position: absolute; inset: 0; background-image: url('images/porto.jpg'); background-size: cover; background-position: center; background-color: var(--sage); }
  .hero-bg::after {
    content: ""; position: absolute; inset: 0;
    background: linear-gradient(110deg, rgba(251,246,238,0.94) 0%, rgba(251,246,238,0.78) 38%, rgba(251,246,238,0.15) 65%, rgba(0,0,0,0.08) 100%);
  }
  .hero-inner { position: relative; z-index: 2; max-width: 640px; }
  .hero-kicker { font-family: var(--serif); font-style: italic; font-size: 18px; color: var(--terracotta); margin-bottom: 18px; letter-spacing: 0.01em; }
  .hero-headline { font-family: var(--serif); font-size: 76px; line-height: 1.02; color: var(--teal); letter-spacing: -0.02em; margin-bottom: 28px; }
  .hero-headline em { font-style: italic; color: var(--terracotta); }
  .hero-sub { font-size: 19px; line-height: 1.55; color: var(--teal-soft); margin-bottom: 36px; max-width: 560px; }
  .hero-sub strong { color: var(--terracotta-dark); font-weight: 600; }
  .hero-cta-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 18px 36px; background: var(--teal); color: var(--white);
    border: none; border-radius: 999px; font-family: var(--sans);
    font-size: 16px; font-weight: 500; letter-spacing: 0.01em;
    cursor: pointer; transition: all 0.25s ease; text-decoration: none;
  }
  .btn-primary:hover { background: var(--terracotta); transform: translateY(-1px); }
  .btn-primary .arrow { transition: transform 0.25s ease; }
  .btn-primary:hover .arrow { transform: translateX(4px); }
  .hero-meta { font-size: 13px; color: var(--warm-gray); letter-spacing: 0.04em; }

  /* REFRAME BAND */
  .reframe { background: var(--cream-soft); padding: 88px 48px; text-align: center; }
  .reframe-inner { max-width: 880px; margin: 0 auto; }
  .reframe-label { font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--warm-gray); margin-bottom: 14px; font-weight: 500; }
  .reframe h2 { font-family: var(--serif); font-size: 46px; line-height: 1.15; color: var(--teal); letter-spacing: -0.015em; margin-bottom: 22px; }
  .reframe h2 em { color: var(--terracotta); font-style: italic; }
  .reframe p { font-size: 18px; line-height: 1.6; color: var(--teal-soft); max-width: 680px; margin: 0 auto; }

  /* HOW IT WORKS */
  .how { padding: 100px 48px; max-width: 1240px; margin: 0 auto; }
  .section-head { text-align: center; margin-bottom: 64px; }
  .section-head .label { font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--warm-gray); font-weight: 500; }
  .section-head h2 { font-family: var(--serif); font-size: 46px; color: var(--teal); margin-top: 12px; line-height: 1.15; letter-spacing: -0.015em; }
  .section-head p { margin-top: 14px; color: var(--teal-soft); font-size: 17px; max-width: 560px; margin-left: auto; margin-right: auto; line-height: 1.55; }
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; }
  .step-num { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: var(--terracotta); color: var(--white); font-family: var(--serif); font-size: 22px; margin-bottom: 22px; }
  .step h3 { font-family: var(--serif); font-size: 28px; color: var(--teal); line-height: 1.2; margin-bottom: 12px; letter-spacing: -0.01em; }
  .step p { font-size: 15px; color: var(--teal-soft); line-height: 1.65; }

  /* DESTINATION CARDS */
  .destinations { padding: 60px 48px 100px; max-width: 1240px; margin: 0 auto; }
  .dest-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .dest-card-link { display: block; text-decoration: none; color: inherit; border-radius: 16px; }
  .dest-card { background: var(--white); border-radius: 16px; overflow: hidden; border: 1px solid rgba(27,58,75,0.06); transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
  .dest-card-link:hover .dest-card { transform: translateY(-4px); }
  .dest-photo { position: relative; height: 240px; background-size: cover; background-position: center; background-color: var(--sage); }
  .dest-photo::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.32) 100%); }
  .dest-flag { position: absolute; top: 16px; left: 16px; background: rgba(251,246,238,0.92); backdrop-filter: blur(6px); padding: 6px 12px; border-radius: 999px; font-size: 13px; color: var(--teal); font-weight: 500; z-index: 2; display: flex; align-items: center; gap: 6px; }
  .card-save { position: absolute; top: 14px; right: 14px; width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.92); backdrop-filter: blur(8px); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 17px; color: var(--warm-gray); z-index: 3; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
  .card-save:hover { color: var(--terracotta); transform: scale(1.06); }
  .card-save.saved { background: var(--terracotta); color: var(--white); }
  .dest-body { padding: 22px 22px 26px; }
  .dest-name { font-family: var(--serif); font-size: 28px; color: var(--teal); line-height: 1.15; letter-spacing: -0.01em; margin-bottom: 4px; }
  .dest-region { font-size: 13px; color: var(--warm-gray); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 12px; }
  .dest-vibe { font-family: var(--serif); font-style: italic; font-size: 16px; line-height: 1.5; color: var(--teal-soft); margin-bottom: 16px; }
  .dest-cost { display: flex; align-items: baseline; justify-content: space-between; padding-top: 14px; border-top: 1px solid rgba(27,58,75,0.08); }
  .dest-cost-label { font-size: 12px; color: var(--warm-gray); letter-spacing: 0.08em; text-transform: uppercase; }
  .dest-cost-value { font-family: var(--serif); font-size: 18px; color: var(--terracotta-dark); }

  /* SOCIAL PROOF */
  .social { background: var(--teal); color: var(--white); padding: 88px 48px; }
  .social-inner { max-width: 1240px; margin: 0 auto; text-align: center; }
  .social-stat { font-family: var(--serif); font-size: 64px; color: var(--gold-soft); letter-spacing: -0.02em; line-height: 1; margin-bottom: 12px; }
  .social-sub { font-size: 17px; color: rgba(255,255,255,0.78); margin-bottom: 56px; line-height: 1.5; }
  .quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align: left; }
  .quote { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 28px 26px; }
  .quote-text { font-family: var(--serif); font-style: italic; font-size: 19px; line-height: 1.5; color: var(--white); margin-bottom: 18px; }
  .quote-attr { font-size: 13px; color: rgba(255,255,255,0.6); letter-spacing: 0.04em; }
  .quote-attr strong { color: var(--gold-soft); font-weight: 500; }

  /* FINAL CTA */
  .final-cta { padding: 120px 48px; text-align: center; background: var(--cream); }
  .final-cta h2 { font-family: var(--serif); font-size: 60px; line-height: 1.1; color: var(--teal); letter-spacing: -0.02em; margin-bottom: 22px; max-width: 760px; margin-left: auto; margin-right: auto; }
  .final-cta h2 em { font-style: italic; color: var(--terracotta); }
  .final-cta p { font-size: 18px; color: var(--teal-soft); margin-bottom: 36px; max-width: 560px; margin-left: auto; margin-right: auto; }

  /* FOOTER */
  .footer { padding: 48px 48px 36px; border-top: 1px solid rgba(27,58,75,0.08); background: var(--cream-soft); }
  .footer-inner { max-width: 1240px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
  .footer-tag { font-family: var(--serif); font-style: italic; color: var(--terracotta); font-size: 16px; }
  .footer-links { display: flex; gap: 28px; }
  .footer-links a { color: var(--warm-gray); text-decoration: none; font-size: 14px; }
  .footer-links a:hover { color: var(--teal); }
  .footer-meta { font-size: 12px; color: var(--warm-gray); text-align: center; margin-top: 24px; }

  /* RESPONSIVE */
  @media (max-width: 980px) {
    .nav { padding: 14px 22px; }
    .nav-links a:not(.nav-cta) { display: none; }
    .hero { padding: 60px 22px 80px; min-height: 600px; }
    .hero-headline { font-size: 48px; }
    .hero-sub { font-size: 17px; }
    .reframe, .how, .destinations, .social, .final-cta { padding-left: 22px; padding-right: 22px; }
    .reframe h2, .section-head h2 { font-size: 32px; }
    .steps, .dest-grid, .quotes { grid-template-columns: 1fr; gap: 20px; }
    .final-cta h2 { font-size: 38px; }
    .social-stat { font-size: 44px; }
    .footer-inner { flex-direction: column; align-items: flex-start; }
  }
  @media (max-width: 480px) {
    .hero-headline { font-size: 38px; }
    .reframe h2, .section-head h2 { font-size: 28px; }
    .final-cta h2 { font-size: 30px; }
    .social-stat { font-size: 38px; }
    .step h3, .dest-name { font-size: 24px; }
    .quote-text { font-size: 17px; }
  }
</style>
</head>
<body>

<nav class="nav">
  <a class="wordmark" href="homepage-mockup.html">Retire<em>Vibes</em></a>
  <div class="nav-links">
    <a href="destinations.html">Destinations</a>
    <a href="my-retirevibes.html">My RetireVibes</a>
    <a href="mockups/vibe-quiz.html" class="nav-cta">Take the quiz →</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-inner">
    <p class="hero-kicker">Good RetireVibes only.</p>
    <h1 class="hero-headline">Where in the <em>world</em> should you retire?</h1>
    <p class="hero-sub">Take our vibe quiz and discover your top destinations — from coastal Portugal to the Yucatán to your own backyard — places that feel like <strong>the life you've been imagining</strong>.</p>
    <div class="hero-cta-row">
      <a class="btn-primary" href="mockups/vibe-quiz.html">Find my RetireVibes <span class="arrow">→</span></a>
      <span class="hero-meta">~2 minutes · no signup needed</span>
    </div>
  </div>
</section>

<section class="reframe">
  <div class="reframe-inner">
    <p class="reframe-label">A quick reframe</p>
    <h2>Retirement isn't one place. <em>It's your place.</em></h2>
    <p>Most retirement tools start with a number you don't have. RetireVibes starts somewhere better — with the kind of life you actually want. Then we show you the places where that life already exists, and what it costs to live there.</p>
  </div>
</section>

<section class="how" id="how">
  <div class="section-head">
    <span class="label">How it works</span>
    <h2>Three steps from "someday" to "actually, that one"</h2>
    <p>No spreadsheets. No nest-egg math. Just vibes, real places, and rough monthly costs.</p>
  </div>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <h3>Tell us your vibe</h3>
      <p>A few quick questions about climate, pace, lifestyle, and what makes a day feel good. About two minutes. No money questions, no age questions, no judgment.</p>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <h3>Meet your matches</h3>
      <p>Three destinations revealed countdown style. Each comes with a vibe profile and rough monthly cost, scaled to the lifestyle you described.</p>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <h3>Save, follow, plan</h3>
      <p>Save your matches and when you're ready: a financial advisor, a real estate browse, or a 7-day scouting trip — all one click away.</p>
    </div>
  </div>
</section>

<section class="destinations" id="destinations">
  <div class="section-head">
    <span class="label">A glimpse of the world</span>
    <h2>Where could you wake up?</h2>
    <p>A glimpse of what's possible. Your match could be any of these — or somewhere you haven't even considered yet.</p>
  </div>
  <div class="dest-grid">
    <a class="dest-card-link" href="destination-porto.html">
    <article class="dest-card">
      <div class="dest-photo" style="background-image: url('images/porto.jpg');">
        <span class="dest-flag">🇵🇹 Portugal</span>
        <button class="card-save" data-name="Porto" onclick="event.stopPropagation(); toggleSave('Porto')">♡</button>
      </div>
      <div class="dest-body">
        <h3 class="dest-name">Porto</h3>
        <div class="dest-region">Northern Portugal · Coastal</div>
        <p class="dest-vibe">Cobblestone old city, world-class wine, and a slower kind of European cool.</p>
        <div class="dest-cost">
          <span class="dest-cost-label">Upscale, from</span>
          <span class="dest-cost-value">~$3,200/mo</span>
        </div>
      </div>
    </article>
    </a>
    <!-- [4 more destination cards with same structure: Mérida, Asheville, Chiang Mai, Sarasota, Medellín] -->
  </div>
  <div style="text-align:center; margin-top:56px;">
    <a href="destinations.html" class="btn-primary">See all destinations <span class="arrow">→</span></a>
  </div>
</section>

<section class="social">
  <div class="social-inner">
    <div class="social-stat">27,400+</div>
    <p class="social-sub">Americans have found their RetireVibes so far.</p>
    <div class="quotes">
      <div class="quote">
        <p class="quote-text">"My number one was Lisbon. I'd literally never thought about Europe — I was sure my answer was going to be Florida."</p>
        <p class="quote-attr"><strong>Karen, 51</strong> · Naperville, IL</p>
      </div>
      <div class="quote">
        <p class="quote-text">"I was anxious about retirement. The quiz didn't ask about my savings even once and I came out feeling weirdly hopeful."</p>
        <p class="quote-attr"><strong>Marcus, 47</strong> · Atlanta, GA</p>
      </div>
      <div class="quote">
        <p class="quote-text">"Mérida came up as my number two and I'm planning a scouting trip in October. Suddenly there's a real plan, not just dread."</p>
        <p class="quote-attr"><strong>Linda, 54</strong> · Boulder, CO</p>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Your retirement should be the <em>best part of the story</em>, not the scariest.</h2>
  <p>About two minutes. Three places that might just change everything.</p>
  <a class="btn-primary" href="mockups/vibe-quiz.html">Find my RetireVibes <span class="arrow">→</span></a>
</section>

<footer class="footer">
  <div class="footer-inner">
    <div>
      <a class="wordmark" href="#">Retire<em>Vibes</em></a>
      <p class="footer-tag">Good RetireVibes only.</p>
    </div>
    <div class="footer-links">
      <a href="destinations.html">Destinations</a>
      <a href="#how-it-works">How it works</a>
      <a href="find-an-advisor.html">Find an advisor</a>
      <a href="scouting-trips.html">Scouting trips</a>
      <a href="my-retirevibes.html">My RetireVibes</a>
    </div>
  </div>
  <p class="footer-meta">RetireVibes is not a financial advisor. Cost estimates are illustrative; for retirement planning, talk to a fiduciary.</p>
</footer>

<!-- SAVE MODAL -->
<style>
  .modal-overlay { position: fixed; inset: 0; background: rgba(27,58,75,0.55); backdrop-filter: blur(8px); z-index: 100; display: none; align-items: center; justify-content: center; padding: 24px; }
  .modal-overlay.open { display: flex; }
  .modal-card { background: var(--cream); border-radius: 20px; max-width: 520px; width: 100%; padding: 48px 44px 40px; position: relative; box-shadow: 0 24px 60px rgba(27,58,75,0.25); }
  .modal-close { position: absolute; top: 18px; right: 18px; width: 36px; height: 36px; border: none; background: transparent; color: var(--warm-gray); font-size: 24px; cursor: pointer; border-radius: 50%; }
  .modal-close:hover { background: rgba(27,58,75,0.06); color: var(--teal); }
  .modal-eyebrow { font-size: 11px; color: var(--warm-gray); text-transform: uppercase; letter-spacing: 0.18em; font-weight: 500; margin-bottom: 12px; }
  .modal-title { font-family: var(--serif); font-size: 36px; color: var(--teal); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 14px; }
  .modal-title em { color: var(--terracotta); font-style: italic; }
  .modal-sub { font-size: 16px; color: var(--teal-soft); line-height: 1.55; margin-bottom: 28px; }
  .modal-input { width: 100%; padding: 16px 18px; border: 1px solid rgba(27,58,75,0.18); border-radius: 12px; font-family: inherit; font-size: 16px; color: var(--teal); margin-bottom: 14px; background: var(--white); }
  .modal-input:focus { outline: none; border-color: var(--terracotta); box-shadow: 0 0 0 3px rgba(201,123,90,0.15); }
  .modal-submit { width: 100%; padding: 16px 24px; background: var(--teal); color: var(--white); border: none; border-radius: 12px; font-family: inherit; font-size: 16px; font-weight: 500; cursor: pointer; }
  .modal-submit:hover { background: var(--terracotta); }
  .modal-fineprint { font-size: 12px; color: var(--warm-gray); margin-top: 16px; line-height: 1.5; }
  @media (max-width: 480px) { .modal-card { padding: 36px 26px 26px; } .modal-title { font-size: 28px; } }
</style>
<div class="modal-overlay" id="saveModal" role="dialog" aria-modal="true">
  <div class="modal-card">
    <button class="modal-close" onclick="closeSaveModal()">×</button>
    <div id="saveForm">
      <p class="modal-eyebrow">Save your RetireVibes</p>
      <h2 class="modal-title" id="saveModalTitle">Save <em>this place</em>.</h2>
      <p class="modal-sub">Just need your email so we can keep this saved for you. No password needed.</p>
      <form onsubmit="submitSave(event)">
        <input type="email" name="email" placeholder="your@email.com" required class="modal-input" />
        <button type="submit" class="modal-submit">Save it →</button>
      </form>
      <p class="modal-fineprint">No password to remember. Just save and come back anytime.</p>
    </div>
    <div id="saveSuccess" hidden>
      <p class="modal-eyebrow">Saved</p>
      <h2 class="modal-title">All set.</h2>
      <p class="modal-sub">Check your inbox — we sent a link you can use to come back anytime.</p>
      <button class="modal-submit" onclick="closeSaveModal()">Keep exploring</button>
    </div>
  </div>
</div>

<script src="shared.js"></script>
</body>
</html>
```

---

## results-page-mockup.html

> **Key UX mechanic:** Reverse countdown reveal — user sees Match #3 first, then clicks through to #2, then #1 (the hero reveal with confetti). Progress dots in the top bar track position. After #1: profile panel, "other matches" recap, handoff cards (advisor / homes / scouting), save + share.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>RetireVibes — Your Results</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root { /* same tokens as homepage */ }

  /* TOP BAR (results page has its own minimal header, no full nav) */
  .topbar { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 18px 36px; background: rgba(251,246,238,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(27,58,75,0.08); }
  .wordmark { font-family: var(--serif); font-size: 22px; color: var(--teal); }
  .wordmark em { color: var(--terracotta); font-style: normal; }
  .progress-dots { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--warm-gray); }
  .dot { width: 9px; height: 9px; border-radius: 50%; background: rgba(27,58,75,0.18); transition: all 0.4s ease; }
  .dot.active { background: var(--terracotta); transform: scale(1.25); }
  .dot.done { background: var(--teal); }

  /* SCREENS — one per match, only .active is visible */
  .stage { max-width: 1240px; margin: 0 auto; padding: 48px 36px 96px; }
  .screen { display: none; animation: screenIn 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
  .screen.active { display: block; }
  @keyframes screenIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  /* MATCH CARD — 2-column grid: photo | content */
  .card { display: grid; grid-template-columns: 1.15fr 1fr; background: var(--white); border-radius: 18px; overflow: hidden; border: 1px solid rgba(27,58,75,0.08); }
  .card.hero { grid-template-columns: 1.3fr 1fr; border: 1px solid rgba(200,160,100,0.35); }
  .photo { position: relative; min-height: 520px; background-size: cover; background-position: center; background-color: var(--sage); }
  .photo::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%); }
  .body { padding: 44px 44px 40px; display: flex; flex-direction: column; gap: 22px; }
  .card.hero .body { padding: 56px 52px 48px; gap: 26px; }
  .destination-name { font-family: var(--serif); font-size: 52px; line-height: 1.02; letter-spacing: -0.015em; color: var(--teal); }
  .card.hero .destination-name { font-size: 64px; }
  .tagline { font-family: var(--serif); font-style: italic; font-size: 22px; line-height: 1.45; color: var(--teal-soft); border-left: 2px solid var(--terracotta); padding-left: 18px; }
  .card.hero .tagline { font-size: 26px; }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag { font-size: 13px; padding: 7px 14px; border-radius: 999px; background: var(--cream-soft); color: var(--teal); }
  .tag.warm { background: rgba(201,123,90,0.14); color: var(--terracotta-dark); }
  .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding-top: 22px; border-top: 1px solid rgba(27,58,75,0.08); }
  .stat-label { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--warm-gray); margin-bottom: 6px; }
  .stat-value { font-family: var(--serif); font-size: 24px; color: var(--teal); }
  .stat-sub { font-size: 13px; color: var(--warm-gray); margin-top: 4px; }

  /* ADVANCE CTA (between reveals) */
  .advance-row { display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: 56px; text-align: center; }
  .advance-prompt { font-family: var(--serif); font-style: italic; font-size: 18px; color: var(--teal-soft); }
  .btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 32px; background: var(--teal); color: var(--white); border: none; border-radius: 999px; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.25s ease; }
  .btn:hover { background: var(--terracotta); transform: translateY(-1px); }

  /* #1 HERO BADGE */
  .hero-badge { display: inline-flex; align-items: center; gap: 12px; padding: 10px 22px; background: linear-gradient(95deg, var(--gold-soft), var(--gold), var(--gold-soft)); color: #5a4516; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; border-radius: 999px; margin-bottom: 18px; animation: shimmer 3s ease-in-out infinite; background-size: 200% 100%; }
  @keyframes shimmer { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

  /* PROFILE PANEL (below #1 card) */
  .profile-card { background: var(--cream-soft); border-radius: 18px; padding: 36px 44px; display: flex; align-items: flex-start; }
  .profile-left { flex-shrink: 0; width: 240px; padding-right: 40px; border-right: 1px solid rgba(27,58,75,0.1); margin-right: 40px; }
  .profile-card h3 { font-family: var(--serif); font-size: 26px; color: var(--teal); }

  /* HANDOFF SECTION */
  .handoff-section { background: var(--cream-soft); border-radius: 20px; padding: 56px 48px; }
  .handoff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .handoff-card { background: var(--white); border-radius: 14px; padding: 28px 26px; display: flex; flex-direction: column; gap: 12px; border: 1px solid rgba(27,58,75,0.06); }
  .handoff-card h4 { font-family: var(--serif); font-size: 22px; color: var(--teal); }
  .handoff-card p { font-size: 14px; color: var(--teal-soft); line-height: 1.55; flex: 1; }
  .handoff-card .cta { font-size: 14px; font-weight: 500; color: var(--terracotta); text-decoration: none; }

  /* SAVE / SHARE */
  .save-share { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .save-share-card { background: var(--white); border: 1px solid rgba(27,58,75,0.08); border-radius: 18px; padding: 36px 34px; display: flex; flex-direction: column; }
  .save-share-card h4 { font-family: var(--serif); font-size: 26px; color: var(--teal); margin-bottom: 8px; }
  .save-share-card p { font-size: 14px; color: var(--teal-soft); margin-bottom: 18px; }

  /* CONFETTI (subtle, paper-cutout rectangles + circles) */
  .confetti { position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
  .confetti span { position: absolute; width: 10px; height: 14px; opacity: 0; animation: fall 3.5s ease-in forwards; }
  @keyframes fall { 0% { transform: translateY(-40px) rotate(0deg); opacity: 0; } 8% { opacity: 1; } 100% { transform: translateY(110vh) rotate(540deg); opacity: 0; } }

  /* SHARE MODAL */
  .share-actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; }
  .share-option { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 18px 12px; border: 1px solid rgba(27,58,75,0.14); border-radius: 14px; background: var(--white); cursor: pointer; font-size: 13px; font-weight: 500; color: var(--teal); }
  .share-option:hover { border-color: var(--terracotta); color: var(--terracotta); transform: translateY(-2px); }

  /* RESPONSIVE */
  @media (max-width: 980px) {
    .card, .card.hero { grid-template-columns: 1fr; }
    .photo { min-height: 320px; }
    .body, .card.hero .body { padding: 32px 28px; }
    .destination-name { font-size: 38px; }
    .card.hero .destination-name { font-size: 44px; }
    .stage { padding: 32px 20px 64px; }
    .handoff-grid, .save-share, .other-matches { grid-template-columns: 1fr; }
    .profile-card { flex-direction: column; padding: 28px 24px; }
    .profile-left { width: 100%; border-right: none; padding-right: 0; margin-right: 0; border-bottom: 1px solid rgba(27,58,75,0.1); padding-bottom: 20px; margin-bottom: 20px; }
  }
</style>
</head>
<body>

<header class="topbar">
  <a class="wordmark" href="homepage-mockup.html" style="text-decoration:none;">Retire<em>Vibes</em></a>
  <div class="progress-dots" id="progressDots">
    <span class="match-step">Match <span id="matchStepNum">3</span> of 3</span>
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</header>

<!-- Vibe label bar (reads from localStorage) -->
<div class="vibe-bar" style="text-align:center; padding:22px 24px 0;">
  <div style="font-size:11px; color:var(--warm-gray); text-transform:uppercase; letter-spacing:0.18em; margin-bottom:6px;">Your retirement vibe is</div>
  <div id="vibeName" style="font-family:var(--serif); font-style:italic; font-size:22px; color:var(--terracotta);">Wandering Soul</div>
</div>

<main class="stage">

  <!-- MATCH #3 (first revealed) -->
  <section class="screen active" id="screen-3">
    <div class="match-label"><!-- Match 3 of 3 --></div>
    <div id="card-3-slot"><!-- Populated by results-matcher.js --></div>
    <div class="advance-row">
      <p class="advance-prompt">Intrigued? Keep going.</p>
      <button class="btn" onclick="goTo(2)">See match #2 <span class="arrow">→</span></button>
    </div>
  </section>

  <!-- MATCH #2 -->
  <section class="screen" id="screen-2">
    <div id="card-2-slot"></div>
    <div class="advance-row">
      <p class="advance-prompt">Ready for your number one?</p>
      <button class="btn" onclick="goTo(1)">Reveal my #1 match <span class="arrow">→</span></button>
      <button class="btn btn-ghost" onclick="goTo(3)">← Back to #3</button>
    </div>
  </section>

  <!-- MATCH #1 — HERO REVEAL -->
  <section class="screen hero-screen" id="screen-1">
    <div class="hero-badge">Your number one RetireVibes match</div>
    <p class="hero-headline" style="font-family:var(--serif); font-style:italic; font-size:34px; line-height:1.15; color:var(--teal); margin-bottom:28px;">Of every place in the world we considered for you — this is the one.</p>

    <div style="display:flex; flex-direction:column; gap:28px;">
      <div id="card-1-slot"></div>

      <!-- Retirement profile panel -->
      <aside class="profile-card">
        <div class="profile-left">
          <h3>Your retirement profile</h3>
          <div style="font-size:13px; color:var(--warm-gray); text-transform:uppercase; letter-spacing:0.12em;">Based on your answers</div>
          <div style="margin-top:auto; padding-top:24px; font-size:13px; color:var(--warm-gray);">
            <a href="#" onclick="openShareModal(); return false;" style="color:var(--terracotta); font-weight:500;">Share your retirement profile →</a>
          </div>
        </div>
        <div style="flex:1;">
          <p>You're drawn to <strong>walkable, warm, culturally rich places</strong> — the kind of city where you'd start the morning at a café and end the night at a candlelit dinner you didn't have to drive to.</p>
          <p>You want comfort without ostentation, neighbors who become friends, and the freedom to actually live somewhere — not just visit it.</p>
          <div class="tags" style="margin-top:6px;">
            <span class="tag">Slower pace</span>
            <span class="tag">Coastal &amp; walkable</span>
            <span class="tag warm">Community</span>
          </div>
        </div>
      </aside>
    </div>

    <!-- Other matches recap -->
    <div style="margin:64px 0 28px; text-align:center;">
      <span style="font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:var(--warm-gray);">Your other matches</span>
      <h2 style="font-family:var(--serif); font-size:36px; color:var(--teal); margin-top:10px;">Both still very much on the table</h2>
      <p style="margin-top:12px; color:var(--teal-soft); font-size:16px;">Three places, three different lives.</p>
    </div>
    <div class="other-matches" style="display:grid; grid-template-columns:1fr 1fr; gap:24px;" id="other-matches-slot"></div>

    <!-- Handoff -->
    <div style="margin:64px 0 28px; text-align:center;">
      <span style="font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:var(--warm-gray);">Next steps</span>
      <h2 style="font-family:var(--serif); font-size:36px; color:var(--teal); margin-top:10px;">Ready to take this further?</h2>
    </div>
    <section class="handoff-section">
      <div class="handoff-grid" id="handoff-slot"></div>
    </section>

    <!-- Save & share -->
    <div class="save-share" style="margin-top:48px;">
      <div class="save-share-card">
        <h4>Want these in your inbox?</h4>
        <p>We'll email your matches plus a link to come back anytime. No password needed.</p>
        <button class="btn" onclick="openSaveModal({type:'email-results'})">Email me my matches</button>
      </div>
      <div class="save-share-card">
        <h4>Share with a friend</h4>
        <p>Half the fun is comparing notes. Send your top match to someone who'd love this.</p>
        <button class="btn" style="background:var(--terracotta);" onclick="openShareModal()">Share my match</button>
      </div>
    </div>

    <p style="margin-top:36px; font-size:13px; color:var(--warm-gray); text-align:center; font-style:italic;">These are rough cost estimates, not financial advice.</p>

    <!-- Bottom nav -->
    <div style="margin-top:56px; padding:32px 0 16px; border-top:1px solid rgba(27,58,75,0.1); text-align:center;">
      <a href="homepage-mockup.html#destinations" style="font-size:16px; font-weight:600; color:var(--teal); text-decoration:none;">Browse all destinations →</a>
      &nbsp;&nbsp;·&nbsp;&nbsp;
      <a href="mockups/vibe-quiz.html" style="font-size:15px; color:var(--warm-gray); text-decoration:none;">Retake the quiz →</a>
    </div>
  </section>

</main>

<div class="confetti" id="confetti" aria-hidden="true"></div>

<!-- JS: screen switching, confetti, save/share modals -->
<!-- [Full modal HTML/JS same pattern as homepage save modal, plus share modal with copy link / email / native share options] -->

<script src="destinations-data.js"></script>
<script src="results-matcher.js"></script>
</body>
</html>
```

---

## destination-detail.html (dynamic template)

> This single file renders any of the ~131 destinations via `?id=porto-portugal`. It loads `destinations-data.js` and calls `renderPage(dest)` to inject the full page HTML. Key sections: hero with photo + back link, 5-cell stats strip (Cost · Housing Buy · Region · Visa · Language [intl only]), tags + compare box, cost breakdown by lifestyle tier, practical cards (Getting there · Visa · Healthcare), handoff (dark section), similar destinations.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title id="pageTitle">RetireVibes — Destination</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="shared.css" />
<style>
  :root { /* same 9 tokens */ }

  /* NAV — same pattern as homepage */
  .nav { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 18px 48px; background: rgba(251,246,238,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(27,58,75,0.06); }

  /* HERO — photo full-bleed, content at bottom, gradient overlay top→bottom */
  .hero { position: relative; min-height: 620px; display: flex; align-items: flex-end; overflow: hidden; padding: 80px 48px 60px; }
  .hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
  .hero-bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(27,58,75,0) 0%, rgba(27,58,75,0.15) 45%, rgba(27,58,75,0.82) 100%); }
  .hero-inner { position: relative; z-index: 2; width: 100%; max-width: 1240px; margin: 0 auto; color: var(--white); }
  .back-link { display: inline-flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.82); text-decoration: none; font-size: 14px; margin-bottom: 28px; }
  .hero-pill { display: inline-block; background: rgba(251,246,238,0.16); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); padding: 6px 14px; border-radius: 999px; font-size: 13px; margin-bottom: 18px; }
  .hero-title { font-family: var(--serif); font-size: 92px; line-height: 0.96; letter-spacing: -0.025em; margin-bottom: 20px; }
  .hero-tagline { font-family: var(--serif); font-style: italic; font-size: 23px; line-height: 1.38; color: rgba(255,255,255,0.9); max-width: 640px; margin-bottom: 30px; }
  /* Floating heart — top-right of hero */
  .hero-heart { position: absolute; top: 24px; right: 48px; z-index: 10; width: 52px; height: 52px; background: rgba(251,246,238,0.96); backdrop-filter: blur(12px); border: 1.5px solid rgba(255,255,255,0.5); border-radius: 50%; cursor: pointer; font-size: 22px; color: var(--terracotta); display: flex; align-items: center; justify-content: center; }

  /* STATS STRIP — 5-column on desktop, 2-column on mobile (5th cell spans both cols) */
  .stats-strip { background: var(--white); padding: 30px 48px; border-bottom: 1px solid rgba(27,58,75,0.06); }
  .stats-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
  .stat-cell:not(:last-child) { border-right: 1px solid rgba(27,58,75,0.08); padding-right: 20px; }
  .stat-label { font-size: 11px; color: var(--warm-gray); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px; font-weight: 500; }
  .stat-value { font-family: var(--serif); font-size: 22px; color: var(--teal); line-height: 1.2; }
  .stat-sub { font-size: 12px; color: var(--warm-gray); margin-top: 2px; }

  /* COST GRID — 4 lifestyle tiers */
  .cost-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
  .cost-card { background: var(--white); border: 1px solid rgba(27,58,75,0.08); border-radius: 16px; padding: 28px 24px; text-align: center; }
  .cost-card.highlight { border-color: var(--terracotta); background: var(--cream-soft); }
  .cost-tier { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--warm-gray); margin-bottom: 10px; }
  .cost-value { font-family: var(--serif); font-size: 38px; color: var(--teal); line-height: 1; letter-spacing: -0.02em; }

  /* PRACTICAL CARDS — 3-col grid */
  .practical-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .practical-card { background: var(--white); border: 1px solid rgba(27,58,75,0.08); border-radius: 16px; padding: 30px 28px; }
  .pc-icon { font-size: 28px; margin-bottom: 16px; }
  .practical-card h3 { font-family: var(--serif); font-size: 22px; color: var(--teal); margin-bottom: 12px; }
  .practical-card p { font-size: 14px; color: var(--teal-soft); line-height: 1.65; }

  /* HANDOFF — dark section, 3-col grid */
  .section-dark { background: var(--teal); color: var(--white); }
  .handoff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .handoff-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 30px 28px; }
  .handoff-card h3 { font-family: var(--serif); font-size: 24px; color: var(--white); }
  .handoff-card p { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.6; }
  .handoff-card a { font-size: 14px; color: var(--gold-soft); font-weight: 500; text-decoration: none; }

  /* COMPARE BOX */
  .compare-box { background: var(--white); border: 1px solid rgba(27,58,75,0.08); border-radius: 18px; padding: 36px 40px; border-left: 4px solid var(--terracotta); }
  .compare-box p { font-family: var(--serif); font-style: italic; font-size: 22px; line-height: 1.5; color: var(--teal-soft); }

  /* RESPONSIVE */
  @media (max-width: 980px) {
    .hero { padding: 60px 22px 44px; min-height: 480px; }
    .hero-title { font-size: 56px; }
    .stats-strip { padding: 24px 22px; }
    .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .stat-cell:not(:last-child) { border-right: none; padding-right: 0; border-bottom: 1px solid rgba(27,58,75,0.07); padding-bottom: 16px; }
    /* 5th stat cell (Language) spans full width on mobile */
    .stat-cell:nth-child(5) { grid-column: 1 / -1; border-bottom: none !important; padding-bottom: 0 !important; }
    .cost-grid { grid-template-columns: repeat(2, 1fr); }
    .practical-grid, .handoff-grid, .similar-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<nav class="nav">
  <a class="wordmark" href="homepage-mockup.html">Retire<em>Vibes</em></a>
  <div class="nav-links">
    <a href="destinations.html">Destinations</a>
    <a href="my-retirevibes.html">My RetireVibes</a>
    <a href="mockups/vibe-quiz.html" class="nav-cta">Take the quiz →</a>
  </div>
</nav>

<div id="pageContent">
  <!-- All content injected by renderPage(dest) in the JS below -->
</div>

<!-- INJECTED HTML STRUCTURE (for reference — generated by renderPage()): -->
<!--
  <section class="hero">
    <div class="hero-bg" style="background-image: url(...)"></div>
    <button class="hero-heart" id="heroHeart">♡</button>
    <div class="hero-inner">
      <a class="back-link" href="homepage-mockup.html">← All destinations</a>
      <div class="hero-pill">🇵🇹  Northern Portugal</div>
      <h1 class="hero-title">Porto</h1>
      <p class="hero-tagline">...</p>
      <a class="plan-link" href="#next-steps">Start exploring →</a>
    </div>
  </section>

  <div class="stats-strip">
    <div class="stats-inner">
      <div class="stat-cell">
        <div class="stat-label">Est. monthly cost</div>
        <div class="stat-value">~$3,200<span>/mo</span></div>
        <div class="stat-sub">Rent included</div>
      </div>
      <div class="stat-cell">
        <div class="stat-label">Housing — Buy</div>
        <div class="stat-value">~$250K–$550K</div>
        <div class="stat-sub">2BR apartment · Porto centro</div>
      </div>
      <div class="stat-cell">
        <div class="stat-label">Region</div>
        <div class="stat-value">Northern Portugal</div>
        <div class="stat-sub">Portugal</div>
      </div>
      <div class="stat-cell">
        <div class="stat-label">Visa & residency</div>
        <div class="stat-value">D7 Visa / Golden Visa</div>
        <div class="stat-sub">Residency details below</div>
      </div>
      <div class="stat-cell">  <!-- INTERNATIONAL ONLY -->
        <div class="stat-label">Language</div>
        <div class="stat-value">Portuguese</div>
        <div class="stat-sub">English spoken in tourist areas; Portuguese helpful day-to-day</div>
      </div>
    </div>
  </div>

  <!-- Tags + compare box, cost grid (4 tiers), practical cards (3), handoff (dark), similar (3) -->
-->

<footer><!-- same footer --></footer>

<script src="destinations-data.js"></script>
<script>
(function () {

  function findDest() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const name = params.get('name');
    if (id) return DESTINATIONS.find(d => d.id === id);
    if (name) {
      const n = decodeURIComponent(name).toLowerCase().trim();
      return DESTINATIONS.find(d => d.name.toLowerCase().trim() === n);
    }
    return null;
  }

  // ── getVisaInfo(dest) — returns { icon, title, body }
  // Keyed by dest.geographyOptions[0] and dest.country
  // geo: 0=US, 1=Canada, 2=Mexico/LatAm, 3=Caribbean, 4=Europe, 5=AUS/NZ, 6=Asia, 7=Africa
  // Country-specific entries for ~40 countries, geo-level catch-alls for the rest

  // ── getHealthcareInfo(dest) — returns { icon, title, body }
  // US: Medicare applies
  // Canada: Canadian public healthcare
  // Europe: EU Healthcare + Private (UK→NHS, Ireland→HSE)
  // AUS/NZ: Medicare (AU) + Private
  // Intl default: International Insurance Required

  // ── getGettingThereInfo(dest) — returns { icon, title, body }
  // US domestic: "US Domestic Flights"
  // Canada: "2–7 Hours from US"
  // Mexico/LatAm: "2–5 Hours" (Mexico) / "4–9 Hours" (rest)
  // Caribbean: "2–5 Hours"
  // Europe: "7–10 Hours"
  // AUS/NZ: "15–21 Hours"
  // Asia: "14–20 Hours"

  // ── getLanguageInfo(dest) — returns { lang, note } — INTERNATIONAL ONLY
  // Examples:
  //   Portugal → { lang: 'Portuguese', note: 'English spoken in tourist areas; Portuguese helpful day-to-day' }
  //   Japan    → { lang: 'Japanese',   note: 'English very limited; expat networks and apps are essential' }
  //   Philippines → { lang: 'Filipino + English', note: 'Both official — no language barrier for Americans' }
  //   Morocco  → { lang: 'Arabic + French', note: 'French widely used; English limited outside tourist areas' }

  function renderPage(dest) {
    // ... builds full page HTML and injects into #pageContent
    // Stats strip: 4 cells for domestic, 5 cells for international (adds Language)
    // Region display: strips redundant ", Country" suffix (e.g. "Yucatán, Mexico" → "Yucatán")
    // Cost highlight: checks localStorage rv_quiz_answers[4] to highlight matching lifestyle tier
  }

  const dest = findDest();
  if (dest) renderPage(dest);
  else document.getElementById('pageContent').innerHTML = '<div class="not-found">...</div>';

})();
</script>
<script src="shared.js"></script>
</body>
</html>
```

---

## mockups/vibe-quiz.html

> The quiz shell. All question logic, scene transitions, and answer collection live in separate files under `mockups/quiz/`. The quiz uses **Fraunces** (not DM Serif Display) and has its own `quiz/styles.css` — a separate design language from the main site.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RetireVibes — The Vibe Quiz</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="quiz/styles.css">
</head>
<body>
  <div class="app">
    <header class="header">
      <div class="logo">
        <span class="logo-mark"></span><span>Retire<em>Vibes</em></span>
      </div>
      <div class="progress-wrap" id="progressWrap" style="display:none;"></div>
      <a href="#" class="exit-link">Save & exit</a>
    </header>
    <main class="stage" id="stage"></main>
  </div>
  <script src="quiz/scenes.js"></script>
  <script src="quiz/option-scenes.js"></script>
  <script src="quiz/questions.js"></script>
  <script src="quiz/quiz.js"></script>
</body>
</html>
```

**Note for reviewer:** The quiz uses Fraunces (a different serif) instead of DM Serif Display. This is likely a design inconsistency worth flagging — the brand uses DM Serif Display everywhere else.

---

## destinations-data.js (structure reference — not full file)

> 3,500+ lines. Flat array of ~131 destination objects. Not included in full — see live file at the GitHub Pages URL. Structure of each object:

```js
{
  id: 'porto-portugal',
  name: 'Porto',
  country: 'Portugal',
  flag: '🇵🇹',
  region: 'Northern Portugal',        // used in hero pill + Region stat block
  tagline: 'Cobblestone old city…',
  compare: 'Porto costs roughly half what coastal California does…',
  photo: 'https://images.unsplash.com/…',
  photoCap: 'Porto, Portugal',
  isInternational: true,
  geographyOptions: [4],              // 0=US, 1=CA, 2=MX/LatAm, 3=Caribbean, 4=EU, 5=AUS/NZ, 6=Asia, 7=Africa
  tags: ['Walkable', 'Wine culture', 'Expat community', 'Coastal', 'European charm'],
  costPerMonth: { 0: 1900, 1: 3200, 2: 4800, 3: 7000 }, // indexed by lifestyle tier (0=Simple, 1=Comfortable, 2=Upscale, 3=Luxury)
  housing: {
    rent: '~$900–$1,400',
    buy: '~$250K–$550K',
    buyDesc: '2BR apartment · Porto centro'
  },
  // Scoring weights for quiz matching (Q1–Q8 answers → destination score):
  weights: { weather: [0,0,0,1], ... }
}
```
