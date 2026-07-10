# CLAUDE.md — snap-contact-docs

Public Docusaurus documentation site for the **SnapContact** app.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

## Identity

| Key | Value |
|---|---|
| Repo | `snap-contact-docs` (PUBLIC — GitHub Pages) |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Package manager | yarn (NEVER npm/pnpm) |
| Node | >=18 |
| Author | Ahsan Mahmood ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)) |
| Live URL | https://snap-contact-docs.aoneahsan.com (Firebase Hosting site `snap-contact-docs` + GitHub Pages) |
| Documents the app at | https://snapcontact.aoneahsan.com (private app repo `github.com/aoneahsan/snapcontact`) |
| Google Play | https://play.google.com/store/apps/details?id=com.aoneahsan.snapcontact |
| Content tracker | `snapcontact` app repo → `docs/tracking/snap-contact-docs-content-tracker.json` |
| Build gates | `yarn typecheck` exit 0 · `yarn build` (→ `./build`) exit 0 |
| Dev ports | start 5962 · serve 5963 |

## Critical rules

| Rule | Detail |
|---|---|
| Yarn only | Never `npm install` / `pnpm add`. Only `yarn.lock`. |
| No dev server in agent runs | Agent runs `yarn build` + `yarn typecheck` only. The user runs `yarn start`. |
| Single source of truth | Every documented feature MUST exist in the SnapContact app code. No invented features, stats, or claims. |
| Honest framing | Say what the app does NOT do (no device-contacts/location/mic/SMS in v1.1; bring-your-own-key messaging; on-device OCR). Match the app's privacy policy. |
| Author credit | About page surfaces "Built by Ahsan Mahmood" via `.sc-author-card`. |
| One commit per batch | One commit per docs batch; auto-push to `o` (this is a `projects/` repo). |
| No secrets | This is a PUBLIC repo. Never commit env/secrets/keys. |

## Dual hosting

1. Firebase Hosting (`snap-contact-docs`): `yarn firebase:deploy`.
2. GitHub Pages: `.github/workflows/deploy-gh-pages.yml` on push to `main` + `static/CNAME`.

## CLAUDE.md + AGENTS.md sync (IRON-SOLID)

Every rule lives in BOTH files. Update one → update the other.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Last Updated

2026-06-23


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)
