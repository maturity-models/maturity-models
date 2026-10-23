# Specification

Single source of truth for the Maturity Models repository. Everything else
(READMEs, `AGENTS.md`, the website) must agree with this file; when they
disagree, fix them to match the spec, or change the spec first.

## Repository

This is a monorepo.

| Path | What it is |
|---|---|
| `README.md` | The guide to maturity models; the landing page of the `en-us` locale |
| `locales/<code>/` | Content per locale (see [Locales](#locales)) |
| `maturity-models.github.io/` | Subproject: the published website (see [Website](#website)) |
| `spec/index.md` | This specification |

## Content

- A maturity model example is one directory containing `index.md`:
  `locales/<code>/examples/<category>/<name>/index.md`. A page may also sit at
  `locales/<code>/examples/<name>/` or nest deeper
  (`examples/software/enterprise-architecture/<name>/`). The directory path
  below `examples/` is the page's URL path.
- The page title is the first `# ` heading of `index.md`.
- Relative links in `README.md` and examples use the GitHub directory layout
  (`examples/<category>/<name>/index.md`); the site rewrites them to site URLs.
- Raw HTML tables are allowed in examples; the site closes unbalanced tags.

## Locales

- A locale is a directory `locales/<language>-<region>` in lowercase (`en-us`,
  `cy-gb`). The picker value is `ll_RR` (`en_US`); the URL slug is the directory
  name.
- `en-us` is the source locale. Its landing page is the repository `README.md`.
  Other locales supply their own `locales/<code>/index.md` as landing page.
- A locale directory with neither a landing page nor any `examples/**/index.md`
  is not a site locale.
- A locale need not translate the examples. A link in its landing page to an
  example it lacks resolves to the `en-us` page.
- Every directory under a locale (`examples/`, each category, each page) has a
  `.locale-peer-id`: a 32-character lowercase hexadecimal id plus a newline (one
  line only), identical across locales for the same topic. `README.md` beside an
  `index.md` is a symlink to it.
- Directory names are translated per locale, in the locale's language and script
  (`cy-gb`: `ystwyth/rhuglder-ystwyth`), so paths differ between locales. The
  language picker therefore finds the same page in another locale by
  `.locale-peer-id`, not by path, and falls back to that locale's landing page.
- Adding a locale to the site: add `ll_RR` to `LOCALES` in
  `maturity-models.github.io/src/lib/locales.js`, add its entries to
  `src/lib/data/hero.js` (`HERO`, `ENDONYMS`, `EXAMPLES_ANCHOR`: the heading id of
  its examples section), create `locales/<code>/`, run `pnpm run content`.
- Supported locales: `en-us` (source), `cy-gb` (Welsh: landing page and all 42
  examples, translated).
- `locales/cy-gb/locales-for-global-sharing-with-svelte/` is a translated note, not
  site content.

## Website

`maturity-models.github.io/`: SvelteKit 3 with `@sveltejs/adapter-static`, fully
prerendered, styled with the Lily Design System (`@lilydesignsystem/*`: headless
components, picker bar with theme, locale, text-size, share and link pickers; 45
themes in `static/themes/`). Same stack as the
`architecture-decision-record.github.io` site. Live at
**https://maturity-models.github.io** (success criterion: this URL serves the
site over HTTPS).

### URLs

| URL | Page |
|---|---|
| `/` | Language router: sends the visitor to the best-matching locale, else `/en-us/` |
| `/<locale>/` | Landing page, or search results for `/<locale>/?<query>` |
| `/<locale>/examples/<path>/` | One example |

Every URL ends in `/` (`trailingSlash = 'always'`). `/sitemap.xml`, `/robots.txt`,
`/llms.txt` and `/llms.json` are generated.

### Generated vs hand-authored

`pnpm run content` (in the subproject) regenerates, from `locales/` and
`README.md`: `src/content/locales/`, `src/lib/locale-pages.json`,
`static/search/<locale>.json`, `static/llms.*`, `static/sitemap.xml`,
`static/README.png`. Never hand-edit these; commit them, so the subproject builds
standalone. Nothing the built site needs may reference `../` at runtime.

### Checks (must pass before publishing)

```sh
pnpm install
pnpm run content
pnpm run check     # svelte-check: 0 errors
pnpm test          # unit tests
pnpm run build
pnpm run verify    # 0 broken internal links
pnpm run a11y      # axe-core: 0 violations (PW_CHANNEL=chrome to use installed Chrome)
```

### Accessibility and dependencies

- Links use the theme's text colour (not `--color-primary`) so contrast passes in
  all 45 themes.
- `typescript` stays on 6.x (SvelteKit 3 needs its JS API).
- `@lilydesignsystem/*` track latest.

### Publishing

The subproject is published to its own repository,
`maturity-models/maturity-models.github.io`, with `git subtree`, from the
monorepo root:

```sh
git subtree push --prefix=maturity-models.github.io \
  git@github.com:maturity-models/maturity-models.github.io.git main
```

`.github/workflows/deploy.yml` (at the subproject root, so it lands at the root
of the published repository) builds and deploys to GitHub Pages on each push to
`main`. The published repository's Pages source is **GitHub Actions**.
