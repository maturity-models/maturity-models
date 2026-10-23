# Maturity Models — website

SvelteKit 3 static site (`@sveltejs/adapter-static`) for <https://maturity-models.github.io>.
The specification is `../spec/index.md`: read it first and keep it in sync.

- Generated, never hand-edited: `src/content/locales/`, `src/lib/locale-pages.json`,
  `static/search/`, `static/llms.*`, `static/sitemap.xml`, `static/README.png`. Edit
  `../locales/` or `../README.md`, then `pnpm run content`.
- Everything the built site needs lives inside this directory (it is published alone via
  `git subtree`); never reference `../` at runtime.
- Run `pnpm run check`, `pnpm test`, `pnpm run build`, `pnpm run verify` and
  `pnpm run a11y` before publishing.
- `typescript` stays on 6.x.
