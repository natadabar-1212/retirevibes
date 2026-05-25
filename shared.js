/* ═══════════════════════════════════════════════════════════
   RetireVibes — shared nav behaviour
   Handles: hamburger menu, active nav state, analytics
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Plausible Analytics ──────────────────────────────────── */
  // Cookie-free, privacy-first. No consent banner needed.
  if (!document.querySelector('script[data-domain="retirevibes.com"]')) {
    var plausible = document.createElement('script');
    plausible.defer = true;
    plausible.setAttribute('data-domain', 'retirevibes.com');
    plausible.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(plausible);
  }

  /* ─── Hamburger menu ───────────────────────────────────────── */
  const nav      = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');

  if (nav && navLinks) {

    // Give nav-links an id so the hamburger can reference it
    if (!navLinks.id) navLinks.id = 'primary-nav';

    // Inject hamburger button
    const btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'primary-nav');
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

    // Close when a nav link is clicked (e.g. navigating to anchor)
    navLinks.addEventListener('click', function () {
      closeMenu();
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ─── Active nav state ─────────────────────────────────────── */
  // Get current page filename (e.g. "find-an-advisor.html")
  var page = window.location.pathname.split('/').pop();
  if (!page || page === '') page = 'homepage-mockup.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href') || '';

    // Skip pure anchors and empty hrefs
    if (href === '#' || href === '') return;

    // Extract just the filename, stripping hash and query string
    var hrefPage = href.split('#')[0].split('?')[0].split('/').pop();

    if (hrefPage && hrefPage === page) {
      link.classList.add('nav-active');
    }
  });

})();
