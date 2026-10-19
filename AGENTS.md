# AGENTS.md

## Deploy (most important)

- To deploy: run `npm run deploy`
  - Stages all changes, auto-generates the commit message from the changed files, commits, and pushes to `main`
  - Optional custom message: `npm run deploy -- "your message"`
- Pushing to `main` auto-deploys via GitHub Actions (~30–60 seconds). Never push to the `gh-pages` branch manually — CI owns it.
- Track deploys: https://github.com/U-ness-dev/PortfolioYounesBenAli/actions

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build. Must set `GH_PAGES=true` env var for GitHub Pages base path (`/PortfolioYounesBenAli/`); CI sets this automatically. Local builds without it use `/` (fine for preview).
- `npm run preview` — preview the local build
- `npm run typecheck` — TypeScript check (`tsc --noEmit`)
- `npm run deploy` — commit + push (see above)

## Project facts

- Vite + React + TypeScript + GSAP portfolio site
- Deployed to GitHub Pages from the `gh-pages` branch
- CI workflow: `.github/workflows/deploy.yml`, triggers on every push to `main`
- Site URL: https://u-ness-dev.github.io/PortfolioYounesBenAli/
