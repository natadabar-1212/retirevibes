/* ═══════════════════════════════════════════════════════════
   RetireVibes — shared nav behaviour
   Handles: hamburger menu, active nav state, analytics
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Google Analytics 4 ───────────────────────────────────── */
  // Replace G-XXXXXXXXXX with your real Measurement ID from GA4.
  // Setup: analytics.google.com → Admin → Create Property → get Measurement ID.
  var GA_ID = 'G-W19300JTXV';
  if (!document.querySelector('script[src*="googletagmanager"]')) {
    var gas = document.createElement('script');
    gas.async = true;
    gas.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(gas);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  // Global helper — call rvTrack(eventName, { key: value }) anywhere
  window.rvTrack = function(event, props) {
    if (typeof gtag !== 'undefined') {
      gtag('event', event, props || {});
    }
  };

  /* ─── Global link tracking (internal + external) ───────────────
     One delegated listener covers every <a> on any page that loads
     shared.js. Fires:
       link_click      — internal navigation / anchors
       outbound_click  — any link to a different host
       affiliate_click — partner handoffs (property portals, travel,
                         advisor), with a category, so Handoff CTR
                         (core-loop step 4) is a first-class metric.
     No PII is sent — link text/URLs on this site are static UI. */
  (function () {
    // Non-partner external hosts (fonts, tag manager, CDNs) — excluded
    // from affiliate_click but still counted as outbound_click.
    var UTILITY_HOSTS = [
      'fonts.googleapis.com', 'fonts.gstatic.com', 'googletagmanager.com',
      'google-analytics.com', 'analytics.google.com', 'cdn.jsdelivr.net',
      'api.emailjs.com', 'schema.org', 'www.w3.org'
    ];
    var TRAVEL_HOSTS  = ['booking.com', 'expedia.com'];
    var ADVISOR_HOSTS = ['smartasset.com', 'napfa.org', 'xyplanningnetwork.com', 'garrettplanningnetwork.com', 'cfp.net'];

    function bareHost(h) { return (h || '').replace(/^www\./, ''); }
    function inList(host, list) {
      var b = bareHost(host);
      return list.some(function (d) { return b === d || b.endsWith('.' + d); });
    }

    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      if (!href || href === '#' || /^javascript:/i.test(href)) return; // skip dead/JS anchors; real #section jumps fall through as internal link_click

      var text = (a.textContent || '').trim().slice(0, 80);
      var page = window.location.pathname;

      // mailto:/tel: — count as a link_click with the scheme
      if (/^(mailto|tel):/i.test(href)) {
        window.rvTrack('link_click', { link_url: href, link_text: text, page_path: page, link_type: href.split(':')[0] });
        return;
      }

      var url;
      try { url = new URL(href, window.location.href); } catch (err) { return; }
      var outbound = url.host !== window.location.host;

      if (!outbound) {
        window.rvTrack('link_click', { link_url: url.pathname + url.search + url.hash, link_text: text, page_path: page });
        return;
      }

      window.rvTrack('outbound_click', { link_domain: bareHost(url.host), link_url: url.href, link_text: text, page_path: page });

      if (!inList(url.host, UTILITY_HOSTS)) {
        var category = inList(url.host, TRAVEL_HOSTS) ? 'travel'
                     : inList(url.host, ADVISOR_HOSTS) ? 'advisor'
                     : 'real_estate';
        window.rvTrack('affiliate_click', { partner: bareHost(url.host), category: category, link_url: url.href, page_path: page });
      }
    }, false);
  })();

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
  if (!page || page === '') page = 'index.html';

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

  /* ─── Destination real-estate link ────────────────────────── */
  // On any destination-[slug].html page, auto-set the real estate
  // handoff link to destinations/[slug]/real-estate/ so static
  // pages never need manual href updates.
  (function () {
    var match = (window.location.pathname.split('/').pop() || '').match(/^destination-(.+)\.html$/);
    if (!match) return;
    var slug = match[1];
    if (slug === 'detail') return; // destination-detail.html sets its own homesHref via page JS
    document.querySelectorAll('a[href*="real-estate"], a[href*="browse-homes"]').forEach(function (a) {
      a.href = 'destinations/' + slug + '/real-estate/';
    });
  })();
