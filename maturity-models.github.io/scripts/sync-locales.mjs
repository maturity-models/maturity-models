#!/usr/bin/env node
// Copies every locale's pages from ../locales/<slug>/examples/**/index.md (and
// the landing page: the locale's index.md, or ../README.md for en-us) into
// src/content/locales/<slug>/, and writes src/lib/locale-pages.json, the
// per-locale page list that drives the /<locale>/ and /<locale>/examples/** routes.
// Reads the parent monorepo, so it runs with `pnpm run content`; the copied files
// are committed. Never hand-edit src/content/locales/.
//   pnpm run locales
import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { landingFile, localeSlugs, pagesOf, read, repoRoot, siteRoot, titleOf } from './lib-locales.mjs';

const outRoot = path.join(siteRoot, 'src/content/locales');
rmSync(outRoot, { recursive: true, force: true });

const tree = {};
let count = 0;
const slugs = localeSlugs();
for (const slug of slugs) {
	const landing = landingFile(slug);
	if (landing) {
		mkdirSync(path.join(outRoot, slug), { recursive: true });
		copyFileSync(landing, path.join(outRoot, slug, 'index.md'));
	}
	tree[slug] = pagesOf(slug).map((p) => {
		const dest = path.join(outRoot, slug, `${p.path}.md`);
		mkdirSync(path.dirname(dest), { recursive: true });
		copyFileSync(p.file, dest);
		count += 1;
		return { path: p.path, category: p.category, peer: p.peer, title: titleOf(read(p.file), path.basename(p.path)) };
	});
}

// The README's banner image, served from the site root.
const banner = path.join(repoRoot, 'README.png');
if (existsSync(banner)) copyFileSync(banner, path.join(siteRoot, 'static/README.png'));

writeFileSync(path.join(siteRoot, 'src/lib/locale-pages.json'), JSON.stringify(tree));
console.log(`Synced ${count} page(s) for ${slugs.length} locale(s) into src/content/locales/ and src/lib/locale-pages.json`);
