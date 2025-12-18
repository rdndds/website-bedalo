# Repository Guidelines

## Project Structure & Module Organization
- Root config: `astro.config.mjs`, `tsconfig.json`, `eslint.config.js`, `vercel.json`. Built assets land in `dist/`; static passthrough files live in `public/`.
- Application code sits under `src/`: pages (`pages/`), shared layouts (`layouts/`), UI pieces (`components/`), global styles (`styles/`), content entries (`content/`), data helpers (`data/`), assets imported via bundling (`assets/`), and utilities/types (`lib/`, `types/`). Path aliases like `@components/*` and `@content/*` are defined in `tsconfig.json`.

## Build, Test, and Development Commands
- Install: `pnpm install`
- Develop: `pnpm dev` (serves on http://localhost:4321 with hot reload)
- Production build: `pnpm build` → outputs to `dist/`
- Preview built site: `pnpm preview`
- Static analysis: `pnpm lint` (ESLint) / `pnpm lint:fix` to apply fixes
- Formatting: `pnpm format:check` and `pnpm format`
- Type and Astro diagnostics: `pnpm astro check` (available via the Astro CLI)

## Coding Style & Naming Conventions
- TypeScript is strict; prefer typed props/params and explicit return types for utilities in `src/lib`.
- Formatting is handled by Prettier (2-space indent, semicolons, single quotes in JS/TS). Run `pnpm format` before pushing.
- Components and layouts use PascalCase (`HeroSection.astro`), utilities use camelCase, and route/content slugs use kebab-case.
- Keep imports using the provided aliases over long relative paths.

## Testing & Quality
- No automated tests are defined yet; treat `pnpm lint`, `pnpm format:check`, and `pnpm astro check` as the baseline gate before any PR.
- When adding tests in the future, colocate near source files or mirror the `src/` tree, and prefer data-driven cases for `src/data` utilities.
- Perform manual QA on the preview build for layout regressions and link integrity before merging.

## Commit & Pull Request Guidelines
- Current history uses short summaries; prefer imperative, present-tense messages with scope, e.g., `Add gallery carousel` or `Fix hero spacing`. Commit every change with a meaningful message that explains intent, not just the files touched.
- For PRs, include: what changed, why, how to verify (commands like `pnpm lint && pnpm build`), and screenshots/GIFs for visual updates. Link related issues or tickets when available.
- Keep changes scoped; if a PR touches both content and layout, note both areas in the description. Update docs or `public/` assets alongside code changes to keep previews accurate.

## Security & Configuration Tips
- Do not commit secrets; use `.env` files and document required variables in the PR. Prefer local `.env` over hardcoded values in `src/data` or `astro.config.mjs`.
- For external assets, place public files in `public/` when they must remain unbundled; otherwise, import from `src/assets` so Astro optimizes them at build time.
