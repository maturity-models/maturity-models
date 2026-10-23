// Server-only: loads and renders a locale's Markdown pages at build time.
// Used by src/routes/[locale]/**/+page.server.js. Sources are the copies in
// src/content/locales/<slug>/ (see scripts/sync-locales.mjs).
import { Marked } from 'marked';
import localePages from '#lib/locale-pages.json';

/** @typedef {{path: string, category: string, title: string}} Page */
/** @type {Record<string, Page[]>} */
const tree = localePages;

const files = import.meta.glob('/src/content/locales/**/*.md', { query: '?raw', import: 'default' });

/** Heading slug: letters, marks, numbers, "-" and "_" kept; spaces become "-". @param {string} text */
export function slugify(text) {
	return text
		.trim()
		.toLowerCase()
		.replace(/<[^>]+>/g, '')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/[^\p{L}\p{M}\p{N}\-_ ]/gu, '')
		.replace(/ /g, '-');
}

/** @param {string} slug @returns {Page[]} */
export const pagesOf = (slug) => tree[slug] ?? [];

export const localeSlugsWithContent = () => Object.keys(tree);

export function pageEntries() {
	return Object.entries(tree).flatMap(([locale, pages]) => pages.map((p) => ({ locale, path: p.path })));
}

/**
 * Resolve a relative Markdown link, written for the GitHub directory layout, to
 * a site URL. `base` is the page's own path inside the locale ("" for the landing
 * page). Returns null if it is not a known page.
 * @param {string} slug @param {string} base @param {string} href
 */
function resolveLink(slug, base, href) {
	const [target, fragment = ''] = href.split('#');
	if (!target) return null;
	let path;
	try {
		path = decodeURI(new URL(decodeURI(target), `http://x/${base}`).pathname);
	} catch {
		return null;
	}
	const rel = path
		.split('/')
		.filter(Boolean)
		.filter((p, i, a) => !(i === a.length - 1 && /^(index|README)\.md$/.test(p)))
		.join('/');
	const pages = pagesOf(slug);
	let found = pages.find((p) => p.path === rel)?.path;
	// Stale README links omit the category ("examples/<name>"): accept a unique match on the last segment.
	if (!found && rel.startsWith('examples/')) {
		const name = rel.split('/').pop();
		const matches = pages.filter((p) => p.path.split('/').pop() === name);
		if (matches.length === 1) found = matches[0].path;
	}
	return found ? `/${slug}/${found}/${fragment && '#' + fragment}` : null;
}

/**
 * Example pages embed raw HTML tables, some left unclosed or with empty header cells.
 * An unclosed <table> swallows the page's footer and breaks landmarks; empty <th> fail
 * accessibility checks. Close what is open and turn empty header cells into data cells.
 * @param {string} html
 */
function repairHtml(html) {
	const count = (/** @type {RegExp} */ re) => (html.match(re) ?? []).length;
	for (const tag of ['table', 'tr', 'td', 'th', 'ul']) {
		const missing = count(new RegExp(`<${tag}[\\s>]`, 'gi')) - count(new RegExp(`</${tag}>`, 'gi'));
		if (missing > 0) html += `</${tag}>`.repeat(missing);
	}
	return html.replace(/<th([^>]*)>\s*<\/th>/gi, '<td$1></td>');
}

/**
 * Render markdown to HTML with stable heading ids and site-resolved links.
 * @param {string} markdown @param {string} slug @param {string} base
 */
function render(markdown, slug, base) {
	const marked = new Marked({ gfm: true });
	const seen = new Map();
	marked.use({
		renderer: {
			// Code blocks scroll sideways on narrow screens; tabindex makes them reachable by keyboard.
			code({ text, lang }) {
				const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				const language = lang?.split(/\s/)[0];
				return `<pre tabindex="0"><code${language ? ` class="language-${language}"` : ''}>${escaped}\n</code></pre>\n`;
			},
			heading({ tokens, depth }) {
				const inner = this.parser.parseInline(tokens);
				let id = slugify(inner);
				const n = seen.get(id);
				seen.set(id, (n ?? -1) + 1);
				if (n !== undefined) id = `${id}-${n + 1}`;
				return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
			}
		},
		walkTokens(token) {
			if (token.type === 'image' && !/^([a-z][a-z0-9+.-]*:|\/)/i.test(token.href)) {
				// The README's banner image is served from the site root.
				token.href = '/' + token.href.split('/').pop();
				return;
			}
			if (token.type !== 'link' || /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(token.href)) return;
			const resolved = resolveLink(slug, base, token.href);
			if (resolved) token.href = resolved;
		}
	});
	const html = marked.parse(markdown.replace(/src="README\.png"/g, 'src="/README.png"').replace(/^> \[!(?:IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]\n/gim, ''), { async: false });
	return repairHtml(html);
}

/**
 * Load one page rendered to HTML; `path` omitted for the landing page.
 * @param {string} slug @param {string} [path]
 */
export async function loadLocalePage(slug, path) {
	const load = files[`/src/content/locales/${slug}/${path ? path + '.md' : 'index.md'}`];
	if (!load) return null;
	return render(await load(), slug, path ? path + '/' : '');
}

/** Landing page: the hero (title + first paragraph) and the rendered body. @param {string} slug */
export async function landingOf(slug) {
	const load = files[`/src/content/locales/${slug}/index.md`];
	if (!load) return null;
	const markdown = (await load()).replace(/<!--[\s\S]*?-->/g, '');
	const title = /^#\s+(.+)$/m.exec(markdown)?.[1].trim() ?? slug;
	const after = markdown.replace(/^#\s+.+$/m, '');
	const text = (/^(?!\s*(?:[#<!\-*>|]|\d+\.))\s*(\S[^\n]*)$/m.exec(after)?.[1] ?? '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
	return { hero: { title, text }, html: render(after, slug, '') };
}
