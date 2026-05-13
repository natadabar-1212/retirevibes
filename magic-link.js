/* RetireVibes — Magic Link System
 * Handles EmailJS sending + magic link generation + restoration
 * Load AFTER emailjs SDK, BEFORE shared.js
 *
 * SECURITY: This file is public (client-side SDK). The public key is
 * intentionally visible here — EmailJS is designed for this.
 * To prevent abuse: go to emailjs.com → Settings → Allowed Origins
 * and restrict this key to https://retirevibes.com only.
 */
(function () {

  var PUBLIC_KEY   = 'Vs96hHAo_yZcWkOtg';
  var SERVICE_ID   = 'service_wgzh7ds';
  var TEMPLATE_ID  = 'template_wdsrhxf';

  /* ── Init EmailJS once ─────────────────────────────────────── */
  var _ready = false;
  function ensureInit() {
    if (_ready || !window.emailjs) return;
    emailjs.init({ publicKey: PUBLIC_KEY, blockHeadless: true });
    _ready = true;
  }

  /* ── Generate a magic link URL ─────────────────────────────── */
  function buildMagicLink(savedState) {
    try {
      var encoded = btoa(unescape(encodeURIComponent(JSON.stringify(savedState))));
      // Always points to my-retirevibes.html in the same directory
      var base = window.location.href.replace(/\/[^/]*$/, '');
      return base + '/my-retirevibes.html?rv=' + encodeURIComponent(encoded);
    } catch (e) {
      return window.location.origin + '/my-retirevibes.html';
    }
  }

  /* ── Send magic link email via EmailJS ─────────────────────── */
  window.sendMagicLinkEmail = function (email, savedState) {
    ensureInit();
    if (!window.emailjs) {
      console.warn('EmailJS not loaded');
      return Promise.resolve();
    }
    var link = buildMagicLink(savedState);
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email:   email,
      magic_link: link
    }).catch(function (err) {
      console.error('EmailJS error:', err);
    });
  };

  /* ── Restore saved state from magic link on arrival ─────────── */
  window.restoreFromMagicLink = function () {
    try {
      var params = new URLSearchParams(window.location.search);
      var rv = params.get('rv');
      if (!rv) return false;
      var state = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(rv)))));
      if (state && state.email) {
        // Merge with any existing local state — prefer incoming data
        var existing = {};
        try { existing = JSON.parse(localStorage.getItem('rv_saved') || '{}'); } catch (e) {}
        // Merge destinations arrays
        var merged = Object.assign({}, existing, state);
        if (existing.destinations && state.destinations) {
          var combined = state.destinations.slice();
          existing.destinations.forEach(function (d) {
            if (!combined.includes(d)) combined.push(d);
          });
          merged.destinations = combined;
        }
        localStorage.setItem('rv_saved', JSON.stringify(merged));
        // Clean URL so refresh doesn't re-restore
        if (window.history && window.history.replaceState) {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
        return true;
      }
    } catch (e) {
      console.warn('Magic link restore failed:', e);
    }
    return false;
  };

})();
