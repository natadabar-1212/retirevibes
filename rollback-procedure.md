# RetireVibes — Rollback Procedure

**Last updated:** 2026-06-01

---

## When to roll back

- A deploy broke a page or feature that was working before
- An affiliate link stopped resolving correctly
- The quiz or results page is returning errors
- GA4 events stopped firing after a code change

---

## Option 1 — Vercel dashboard (fastest, ~30 seconds)

1. Go to [vercel.com](https://vercel.com) and open the RetireVibes project
2. Click **Deployments** in the left nav
3. Find the last known-good deployment (check the timestamp)
4. Click the **three dots (⋯)** next to it → **Promote to Production**
5. Vercel instantly serves that deployment — no git changes needed

Use this when you need to roll back immediately and don't have time to debug.

---

## Option 2 — Git revert (preferred for documented rollbacks)

Use when you want a clean git history showing the rollback.

```bash
# Find the commit hash to revert to
git log --oneline -10

# Revert a specific commit (creates a new commit undoing it)
git revert <commit-hash>
git push
```

Vercel auto-deploys on push — production updates within ~60 seconds.

To revert multiple commits back to a known-good state:

```bash
git revert <oldest-bad-commit>..<newest-bad-commit>
git push
```

---

## Option 3 — Hard reset (last resort)

Only use if you need to completely discard recent commits.

```bash
# Find the commit hash you want to reset to
git log --oneline -10

# Reset to that commit (discards all commits after it)
git reset --hard <commit-hash>
git push --force
```

⚠️ Force push rewrites history. Use sparingly.

---

## After rolling back

1. Verify the site is working at retirevibes.com
2. Check that the quiz flow works end-to-end
3. Confirm GA4 is still firing (check Realtime in GA4 dashboard)
4. Note what caused the bad deploy so the fix can be made properly before re-deploying

---

## Contacts

- **Vercel dashboard:** vercel.com (login with Natalie's account)
- **GitHub repo:** github.com/natadabar-1212/retirevibes
- **GA4:** analytics.google.com (Measurement ID: G-W19300JTXV)
