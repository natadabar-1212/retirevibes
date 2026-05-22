/* RetireVibes — Magic Link Email (Vercel Serverless Function)
 * POST /api/send-magic-link
 * Body: { email: string, magic_link: string }
 *
 * SECURITY: RESEND_API_KEY is stored as a Vercel environment variable.
 * It is never exposed to the browser.
 */

module.exports = async function handler(req, res) {

  // ── CORS ───────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', 'https://retirevibes.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ── Validate input ─────────────────────────────────────────────
  const { email, magic_link } = req.body || {};

  if (!email || !magic_link) {
    return res.status(400).json({ error: 'Missing email or magic_link' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // ── Send via Resend ────────────────────────────────────────────
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RetireVibes <hello@retirevibes.com>',
        to: [email],
        subject: 'Your RetireVibes matches — come back anytime ✨',
        html: buildEmailHtml(magic_link),
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('Resend API error:', err);
      return res.status(500).json({ error: 'Email service error' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
};


/* ── Email template ────────────────────────────────────────────── */
function buildEmailHtml(magic_link) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your RetireVibes matches</title>
</head>
<body style="margin:0;padding:0;background:#FBF6EE;font-family:-apple-system,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FBF6EE;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid rgba(27,58,75,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#1B3A4B;padding:32px 40px;">
              <p style="margin:0;font-family:Georgia,serif;font-size:26px;color:#FBF6EE;letter-spacing:-0.01em;">Retire<em style="color:#C97B5A;font-style:italic;">Vibes</em></p>
              <p style="margin:8px 0 0;font-family:Georgia,serif;font-style:italic;color:rgba(255,255,255,0.65);font-size:14px;">Good RetireVibes Only.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:32px;color:#1B3A4B;line-height:1.1;letter-spacing:-0.02em;">Your matches are <em style="color:#C97B5A;font-style:italic;">saved</em>.</h1>
              <p style="margin:0 0 28px;font-size:16px;color:#2E5468;line-height:1.65;">Click below any time to come back to your RetireVibes — your top destination matches, your vibe profile, all right where you left them.</p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:#C97B5A;border-radius:999px;">
                    <a href="${magic_link}" style="display:inline-block;padding:16px 32px;color:#FFFFFF;text-decoration:none;font-size:16px;font-weight:500;font-family:-apple-system,system-ui,sans-serif;white-space:nowrap;">Take me to my matches →</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:13px;color:#7A6E5F;line-height:1.65;">
                If the button doesn't work, copy this link into your browser:<br>
                <span style="color:#C97B5A;word-break:break-all;font-size:12px;">${magic_link}</span>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;"><div style="height:1px;background:rgba(27,58,75,0.07);"></div></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background:#F4ECDD;">
              <p style="margin:0 0 6px;font-size:12px;color:#7A6E5F;line-height:1.6;">RetireVibes is not a financial advisor. Nothing in this email constitutes financial, tax, legal, or immigration advice. Cost estimates are approximations for comparison purposes only.</p>
              <p style="margin:0;font-size:12px;color:#7A6E5F;">© 2025 RetireVibes &nbsp;·&nbsp; <a href="https://retirevibes.com" style="color:#7A6E5F;text-decoration:none;">retirevibes.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
