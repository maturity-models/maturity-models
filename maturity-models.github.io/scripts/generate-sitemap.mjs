#!/usr/bin/env node
// Writes static/sitemap.xml from src/lib/locale-pages.json. URLs end in "/" to
// match `trailingSlash = 'always'` in src/routes/+layout.js. Reads only files
// inside this directory (it also runs in the standalone published repo).
//   pnpm run sitemap
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://maturity-models.github.io';

const paths = [];
const tree = JSON.parse(readFileSync(path.join(root, 'src/lib/locale-pages.json'), 'utf8'));
for (const [slug, pages] of Object.entries(tree)) {
	paths.push(`/${slug}/`);
	for (const p of pages) paths.push(`/${slug}/${p.path}/`);
}

const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const xml = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...paths.map((p) => `  <url><loc>${escapeXml(SITE + encodeURI(p))}</loc></url>`),
	'</urlset>',
	''
].join('\n');

writeFileSync(path.join(root, 'static/sitemap.xml'), xml);
console.log(`Wrote static/sitemap.xml (${paths.length} URLs).`);
