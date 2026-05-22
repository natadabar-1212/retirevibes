/* RetireVibes — Magic Link System
 * Sends magic link emails via /api/send-magic-link (Vercel serverless + Resend).
 * No client-side API keys. Load BEFORE shared.js, no SDK dependency needed.
 */
(function () {

  /* ── Generate a magic link URL ─────────────────────────────── */
  function buildMagicLink(savedState) {
    try {
      var encoded = btoa(unescape(encodeURIComponent(JSON.stringify(savedState))));
      var base = window.location.origin;
      return base + '/my-retirevibes.html?rv=' + encodeURIComponent(encoded);
    } catch (e) {
      return window.location.origin + '/my-retirevibes.html';
    }
  }

  /* ── Send magic link email via serverless function ─────────── */
  window.sendMagicLinkEmail = function (email, savedState) {
    var link = buildMagicLink(savedState);
    return fetch('/api/send-magic-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, magic_link: link }),
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Send failed: ' + res.status);
        return res.json();
      })
      .catch(function (err) {
        console.error('Magic link send error:', err);
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
        var existing = {};
        try { existing = JSON.parse(localStorage.getItem('rv_saved') || '{}'); } catch (e) {}
        var merged = Object.assign({}, existing, state);
        if (existing.destinations && state.destinations) {
          var combined = state.destinations.slice();
          existing.destinations.forEach(function (d) {
            if (!combined.includes(d)) combined.push(d);
          });
          merged.destinations = combined;
        }
        localStorage.setItem('rv_saved', JSON.stringify(merged));
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
