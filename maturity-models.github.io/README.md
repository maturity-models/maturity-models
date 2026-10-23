# Maturity Models — website

The published website for the [Maturity Models](https://github.com/maturity-models/maturity-models)
project. Live at <https://maturity-models.github.io>.

Built with [SvelteKit](https://svelte.dev/docs/kit) (`@sveltejs/adapter-static`, fully
prerendered) and the [Lily Design System](https://lilydesignsystem.com/). Content is
Markdown from the parent repo's `README.md` and `locales/`, rendered at build time with
[marked](https://marked.js.org/). The specification is `../spec/index.md`.

```sh
pnpm install
pnpm run content   # sync locales, search indexes, llms.txt/json, sitemap.xml
pnpm run dev       # http://localhost:5173
pnpm run build     # prerender into build/
pnpm run check && pnpm test && pnpm run verify
```

Never hand-edit `src/content/`, `src/lib/locale-pages.json`, `static/search/`,
`static/llms.*` or `static/sitemap.xml`: edit `../locales/` or `../README.md` and run
`pnpm run content`. Publishing is described in `../spec/index.md#publishing`.
