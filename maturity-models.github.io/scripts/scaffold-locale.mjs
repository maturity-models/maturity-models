#!/usr/bin/env node
// Creates the directory skeleton of a translated locale from a mapping file:
// for every line "<en-us path>\t<locale path>" (paths below examples/), makes
// ../locales/<code>/examples/<locale path>/ with the same .locale-peer-id as the
// en-us page, plus the ids of each parent directory, and a README.md symlink to
// index.md where one exists. Idempotent. Reads the parent monorepo.
//   node scripts/scaffold-locale.mjs <code> <mapping.tsv>
import { copyFileSync, existsSync, lstatSync, mkdirSync, readFileSync, symlinkSync } from 'node:fs';
import path from 'node:path';
import { localesRoot, SECTION, SOURCE } from './lib-locales.mjs';

const [code, mapFile] = process.argv.slice(2);
if (!code || !mapFile) {
	console.error('usage: scaffold-locale.mjs <code> <mapping.tsv>');
	process.exit(2);
}

const dirs = new Map(); // en-us dir (below examples/) -> locale dir
for (const line of readFileSync(mapFile, 'utf8').split('\n')) {
	if (!line.trim()) continue;
	const [en, loc] = line.split('\t');
	const es = en.split('/');
	const ls = loc.split('/');
	if (es.length !== ls.length) throw new Error(`segment count differs: ${en} -> ${loc}`);
	for (let i = 0; i < es.length; i++) {
		const k = es.slice(0, i + 1).join('/');
		const v = ls.slice(0, i + 1).join('/');
		if (dirs.has(k) && dirs.get(k) !== v) throw new Error(`conflicting translation of ${k}: ${dirs.get(k)} vs ${v}`);
		dirs.set(k, v);
	}
}
dirs.set('', '');

const copyId = (from, to) => {
	mkdirSync(to, { recursive: true });
	copyFileSync(path.join(from, '.locale-peer-id'), path.join(to, '.locale-peer-id'));
};
copyId(path.join(localesRoot, SOURCE), path.join(localesRoot, code));
let made = 0;
for (const [en, loc] of dirs) {
	const from = path.join(localesRoot, SOURCE, SECTION, en);
	const to = path.join(localesRoot, code, SECTION, loc);
	copyId(from, to);
	const readme = path.join(to, 'README.md');
	if (existsSync(path.join(to, 'index.md')) && !existsSync(readme) && !lstatSync(readme, { throwIfNoEntry: false })) symlinkSync('index.md', readme);
	made++;
}
const readme = path.join(localesRoot, code, 'README.md');
if (existsSync(path.join(localesRoot, code, 'index.md')) && !lstatSync(readme, { throwIfNoEntry: false })) symlinkSync('index.md', readme);
console.log(`${code}: ${made} directories with .locale-peer-id`);
