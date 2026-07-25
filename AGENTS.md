# AGENTS.md — snap-contact-docs

Mirror of `CLAUDE.md` for non-Claude agents. Keep both in sync.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort). HARD STOP when doc work outpaces the change → ship, then ONE line. No new summary/status files unless asked. Full rule: `~/.claude/CLAUDE.md`.

## TL;DR

- Docusaurus 3 docs site for **SnapContact** (https://snapcontact.aoneahsan.com; Play `com.aoneahsan.snapcontact`).
- PUBLIC repo (`github.com/aoneahsan/snap-contact-docs`), yarn only, Node >=18.
- Live URL: https://snapcontact-docs.aoneahsan.com (Firebase Hosting `snap-contact-docs` + GitHub Pages).
- Dual hosting: `firebase.json` + `.firebaserc` (target `snap-contact-docs`) and `.github/workflows/deploy-gh-pages.yml` + `static/CNAME`.
- Build gates: `yarn typecheck` exit 0 · `yarn build` exit 0. Agent NEVER runs the dev server.
- Honest framing: document only real app features; match the app's privacy policy (no device-contacts/location/mic/SMS in v1.1, on-device OCR, bring-your-own-key messaging).
- No secrets — PUBLIC repo.
- One commit per batch; auto-push to remote `o`.

## Hard checks before editing

1. Does the feature you're about to document actually exist in the SnapContact app code? If unsure, verify, don't invent.
2. Did you keep `static/robots.txt` AI-bot allowlist + JSON-LD intact?
3. Did you run `yarn build` + `yarn typecheck` (both exit 0) before declaring done?

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Last Updated

2026-07-25


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
