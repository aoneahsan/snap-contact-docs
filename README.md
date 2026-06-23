# SnapContact Docs

Public documentation site for **SnapContact** — a contact intelligence and lead-capture app for Android and the web.

- **App:** https://snapcontact.aoneahsan.com
- **Google Play:** https://play.google.com/store/apps/details?id=com.aoneahsan.snapcontact
- **Docs (this site):** https://snap-contact-docs.aoneahsan.com
- **Source app repo:** private (`github.com/aoneahsan/snapcontact`)

Built with [Docusaurus 3](https://docusaurus.io/). MIT-licensed. Maintained by [Ahsan Mahmood](https://aoneahsan.com).

## Local development

This repo is **yarn-only** (never npm/pnpm).

```bash
yarn install         # install dependencies
yarn start           # dev server on http://localhost:5962
yarn build           # production build → ./build
yarn typecheck       # tsc --noEmit
yarn serve           # preview the built site on :5963
```

## Deployment (dual hosting)

The same `./build` output is served two ways:

1. **Firebase Hosting** — site `snap-contact-docs`:
   ```bash
   yarn firebase:deploy
   ```
2. **GitHub Pages** — via `.github/workflows/deploy-gh-pages.yml` on push to `main`, at the custom domain in `static/CNAME` (`snap-contact-docs.aoneahsan.com`).

## Structure

```
docs/                 Markdown documentation (Diátaxis-ish: intro, getting-started, features, guides, privacy)
src/css/custom.css    Brand palette (blue #3B82F6 / green #22C55E)
src/pages/index.tsx   Landing page
static/               robots.txt, llms.txt, humans.txt, security.txt, CNAME, brand SVGs
docusaurus.config.ts  Site config + JSON-LD (WebSite, Organization, SoftwareApplication)
sidebars.ts           Manual sidebar
firebase.json         Firebase Hosting config
```

## Honesty rule

Every page documents only what the SnapContact app actually does today. No fabricated features, stats, or claims; permission and privacy posture matches the app's privacy policy.
