# Manual / User-Only Tasks — Snap Contact Docs

> The ONE place for everything only you (the human) can do. Fixed path: `docs/MANUAL-TASKS.md`.
> Global spec: `~/.claude/rules/manual-tasks.md`. Excluded from the published site (see
> `docusaurus.config.ts` → `docs.exclude`) because this repo is public.
> Last updated: 2026-10-14

## ⏳ Pending manual tasks

| # | Task | Why only you | Status |
|---|------|--------------|--------|
| 1 | Confirm the existing DNS configuration remains valid. The custom domain returned HTTPS 200 on 2026-10-14. | DNS registrar access is owner-controlled. | Verified live; recheck after DNS changes |
| 2 | Enable **Enforce HTTPS** in GitHub Pages settings. The Pages API shows workflow deployment and the custom domain configured, but `https_enforced=false` on 2026-10-14. | Repository settings and certificate status must be checked. | ☐ Pending |

`static/CNAME` already ships `snapcontact-docs.aoneahsan.com` inside `build/`, and `.github/workflows/deploy-pages.yml` builds and
publishes on every push to `main`. The live homepage and sitemap returned HTTPS 200 on 2026-10-14.

## ✅ Completed manual tasks

| # | Task | Resolution | Date |
|---|------|-----------|------|
| — | — | — | — |
