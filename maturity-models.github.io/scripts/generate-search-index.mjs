#!/usr/bin/env node
// Writes static/search/<slug>.json, one search index per locale, from the
// locale's pages plus its landing page. A locale's file contains only that
// locale's pages, which keeps /<slug>/?<query> from matching another locale.
// Reads the parent monorepo, so it runs with `pnpm run content`; output is committed.
//   pnpm run search-index
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import path from 'node:path';
import { headingsOf, landingFile, localeSlugs, pagesOf, plainText, read, siteRoot, titleOf } from './lib-locales.mjs';

const outDir = path.join(siteRoot, 'static/search');
const BUDGET = 1_000_000; // bytes per locale file
const SNIPPET_TEXT = 500;

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const slug of localeSlugs()) {
	const records = pagesOf(slug).map((p) => {
		const md = read(p.file);
		return {
			id: p.path,
			title: titleOf(md, path.basename(p.path)),
			section: p.category,
			kind: 'examples',
			url: `/${slug}/${p.path}/`,
			headings: headingsOf(md),
			text: plainText(md)
		};
	});
	const landing = landingFile(slug);
	if (landing) {
		const md = read(landing);
		records.push({ id: 'index', title: titleOf(md, slug), section: '', kind: 'readme', url: `/${slug}/`, headings: headingsOf(md).slice(1), text: plainText(md) });
	}
	let json = JSON.stringify({ locale: slug, records });
	if (Buffer.byteLength(json) > BUDGET) {
		for (const r of records) r.text = r.text.slice(0, SNIPPET_TEXT);
		json = JSON.stringify({ locale: slug, records, truncated: true });
	}
	writeFileSync(path.join(outDir, `${slug}.json`), json);
	console.log(`${slug}: ${records.length} records, ${(Buffer.byteLength(json) / 1024).toFixed(0)} KB`);
}
