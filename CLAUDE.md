# SnapContact public docs

**Last context pass:** 2026-10-14. **Next routine context pass:** 2026-11-13.

This public `aoneahsan/snap-contact-docs` repository on `main` is the standalone Docusaurus site for the private sibling `../snapcontact/` product. Use the product source and its verified state for facts; do not copy contacts, tokens, keys or private implementation data into this repository. Current docs describe the legacy Firebase architecture. The owner plans later Supabase redevelopment, so do not invent the new architecture in public copy.

`.github/workflows/deploy-pages.yml` deploys GitHub Pages after each `main` push, with `static/CNAME` for `snapcontact-docs.aoneahsan.com`. The repository has no Firebase Hosting config. Run `yarn install --immutable`, `yarn typecheck`, `yarn build`, and inspect the built site in a controlled desktop/mobile browser before pushing. The 2026-10-14 local gates passed. Check the Pages run and live domain after pushing. A docs render does not verify authenticated app or extension behavior.

Keep this file and `CLAUDE.md` synchronized. The workspace fleet/context trackers hold current maintenance evidence and the 30-day cooldown. Use Yarn for local work. Do not install owner-created client packages. No real secrets belong in public or private Git.
