# Repository Guidelines

## Project Structure & Module Organization

- `src/pages/`: Route entrypoints (Astro pages). File names map to URLs (e.g. `src/pages/agenda.astro`).
- `src/components/`: Reusable UI components grouped by feature (e.g. `src/components/home/`, `src/components/common/`).
- `src/layouts/`: Page layouts (e.g. `src/layouts/BaseLayout.astro`).
- `src/content/`: Astro Content Collections (Markdown/data content). Schemas live in `src/content/config.ts`.
- `src/assets/` and `public/`: Images and static files. CMS configuration is in `public/admin/`.
- Generated/output (do not edit/commit): `.astro/`, `dist/`, `node_modules/`.

## Build, Test, and Development Commands

Use `pnpm` (lockfile: `pnpm-lock.yaml`).

- `pnpm install`: Install dependencies.
- `pnpm dev`: Start local dev server.
- `pnpm build`: Production build to `dist/`.
- `pnpm preview`: Serve the built site locally.
- `pnpm astro check`: Type/content checks via Astro (@astrojs/check).
- `pnpm lint` / `pnpm lint:fix`: Run ESLint (and auto-fix where safe).
- `pnpm format` / `pnpm format:check`: Format or verify formatting with Prettier.

## Coding Style & Naming Conventions

- Formatting is enforced by Prettier (`.prettierrc`): 2-space indentation, single quotes, semicolons, ~80 char width.
- Linting uses ESLint with TypeScript + Astro recommendations (`eslint.config.js`).
- Component files: `PascalCase.astro` (e.g. `src/components/common/SectionTitle.astro`).
- Non-component scripts: prefer `kebab-case.ts` (e.g. `src/scripts/admin-kontak.ts`).
- Prefer TS path aliases from `tsconfig.json` (e.g. `@components/*`, `@lib/*`).

## Testing Guidelines

This repo does not include a dedicated unit test runner; treat these as the “test suite”:

- `pnpm astro check` for type/content validation.
- `pnpm lint` and `pnpm format:check` for code quality.
- `pnpm build` to catch build-time regressions.

For content changes, run `pnpm dev` and verify affected routes manually.

## Commit & Pull Request Guidelines

- Commit history is short and mostly uses simple, lowercase, descriptive subjects (e.g. “properly configured contact form”), with a few placeholder numeric commits. Prefer clear, action-oriented subjects.
- PRs should include: a brief summary, the affected pages/routes, and screenshots for UI/layout changes.
- Before opening a PR, run: `pnpm format:check && pnpm lint && pnpm astro check && pnpm build`.

## Content & CMS Notes

- Content collection entries must match `src/content/config.ts` schemas.
- `berita` slugs follow `YYYY-MM-DD-slug.md` (see `public/admin/config.yml`). Keep dates and frontmatter consistent.
