#!/usr/bin/env node
// Writes static/llms.txt and static/llms.json from the en-us pages in
// src/lib/locale-pages.json and the LOCALES array in src/lib/locales.js, so the
// lists and counts never drift from the site. Reads only files inside this
// directory (it also runs in the standalone published repo).
//   pnpm run llms
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://maturity-models.github.io';
const REPO = 'https://github.com/maturity-models/maturity-models';
const TITLE = 'Maturity Models';
const SUMMARY =
	'A maturity model is a business tool used to assess people/culture, processes/structures, and objects/technology. This site is a guide to maturity models and a curated set of real-world examples.';

const tree = JSON.parse(readFileSync(path.join(root, 'src/lib/locale-pages.json'), 'utf8'));
const examples = (tree['en-us'] ?? []).map((p) => ({ title: p.title, category: p.category, url: `${SITE}/en-us/${p.path}/` }));

const localeMatch = /export const LOCALES = \[([^\]]*)\]/.exec(readFileSync(path.join(root, 'src/lib/locales.js'), 'utf8'));
const locales = localeMatch ? [...localeMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];

const txt = [
	`# ${TITLE}`,
	'',
	`> ${SUMMARY} Source: ${REPO}`,
	'',
	'## Guide',
	'',
	`- [Maturity Models](${SITE}/en-us/): what maturity models are, levels, perspectives, FAQ, and rebuttals`,
	'',
	'## Examples',
	'',
	...examples.map((p) => `- [${p.title}](${p.url})`),
	'',
	'## Optional',
	'',
	`- [Source repository](${REPO}): README, specification (spec/), locales`,
	''
].join('\n');

const json = { name: TITLE, summary: SUMMARY, site: SITE, repository: REPO, counts: { examples: examples.length, locales: locales.length }, examples, locales };

writeFileSync(path.join(root, 'static/llms.txt'), txt);
writeFileSync(path.join(root, 'static/llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`Wrote static/llms.txt and static/llms.json (${examples.length} examples, ${locales.length} locales).`);
