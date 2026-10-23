// Shared by the content scripts: finds every locale under ../locales/ and
// every page (an index.md below <locale>/examples/) in it.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const repoRoot = path.resolve(siteRoot, '..');
export const localesRoot = path.join(repoRoot, 'locales');
export const SECTION = 'examples';
export const SOURCE = 'en-us';

export const plainText = (md) =>
	md
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/```[^\n]*\n/g, '\n')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/^\s{0,3}#{1,6}\s+/gm, '')
		.replace(/^\s*[-*+>]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/[|`*_~]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

export const titleOf = (md, fallback) => {
	const m = /^#\s+(.+)$/m.exec(md);
	return m ? plainText(m[1]) : fallback;
};

export const headingsOf = (md) => {
	let fence = false;
	const out = [];
	for (const line of md.split('\n')) {
		if (line.startsWith('```')) fence = !fence;
		const m = !fence && /^#{1,6}\s+(.+?)\s*#*$/.exec(line);
		if (m) out.push(plainText(m[1]));
	}
	return out;
};

/** Locale directories that have a landing page or at least one page; others (e.g. notes-only) are skipped. */
export const localeSlugs = () =>
	readdirSync(localesRoot, { withFileTypes: true })
		.filter((e) => e.isDirectory() && /^[a-z]{2,3}-[a-z0-9]{2,3}$/.test(e.name))
		.map((e) => e.name)
		.filter((slug) => landingFile(slug) || pagesOf(slug).length)
		.sort();

/** Landing page source: the locale's own index.md; the source locale falls back to the repo README.md. */
export const landingFile = (slug) => {
	const own = path.join(localesRoot, slug, 'index.md');
	if (existsSync(own)) return own;
	const readme = path.join(repoRoot, 'README.md');
	return slug === SOURCE && existsSync(readme) ? readme : null;
};

/** Every page of a locale: { path: "examples/<category>/<name>", category, file, peer }, sorted. `peer` is the .locale-peer-id shared with the same page in other locales. */
export function pagesOf(slug) {
	const base = path.join(localesRoot, slug, SECTION);
	const out = [];
	if (!existsSync(base)) return out;
	(function walk(dir) {
		for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
			if (!e.isDirectory()) continue;
			const sub = path.join(dir, e.name);
			if (existsSync(path.join(sub, 'index.md'))) {
				const rel = path.relative(base, sub).split(path.sep);
				const idFile = path.join(sub, '.locale-peer-id');
				const peer = existsSync(idFile) ? readFileSync(idFile, 'utf8').trim() : '';
				out.push({ path: `${SECTION}/${rel.join('/')}`, category: rel.slice(0, -1).join('/'), file: path.join(sub, 'index.md'), peer });
			}
			walk(sub);
		}
	})(base);
	return out;
}

export const read = (f) => readFileSync(f, 'utf8');
