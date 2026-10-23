#!/usr/bin/env node
// Checks a published locale in a real browser: the landing page renders the hero
// headline, subheadline, introduction paragraph and the "Translations:" sentence,
// every example page in locale-pages.json answers 200, and the language picker
// takes you to the same page in English.
//   node scripts/verify-live-locale.mjs <slug> [origin]
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const [slug, origin = 'https://maturity-models.github.io'] = process.argv.slice(2);
if (!slug) {
	console.error('usage: verify-live-locale.mjs <slug> [origin]');
	process.exit(2);
}
const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = JSON.parse(readFileSync(path.join(siteRoot, 'src/lib/locale-pages.json'), 'utf8'))[slug] ?? [];
const problems = [];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
await page.goto(`${origin}/${slug}/`);
await page.waitForTimeout(800);
const hero = {
	headline: await page.locator('.intro h1').innerText(),
	subheadline: await page.locator('.hero-subheadline').innerText().catch(() => ''),
	introduction: (await page.locator('.intro p').nth(1).innerText().catch(() => '')).slice(0, 80),
	translations: await page.locator('.hero-translations').innerText().catch(() => '')
};
for (const [k, v] of Object.entries(hero)) if (!v.trim()) problems.push(`landing ${k} is empty`);
console.log(JSON.stringify(hero, null, 1));

let bad = 0;
for (const p of pages) {
	const res = await page.request.get(`${origin}/${slug}/${p.path.split('/').map(encodeURIComponent).join('/')}/`);
	if (res.status() !== 200) {
		bad++;
		problems.push(`${res.status()} ${p.path}`);
	}
}
console.log(`${pages.length} example pages checked, ${bad} not 200`);

const sample = pages.find((p) => p.peer);
if (sample) {
	await page.goto(`${origin}/${slug}/${sample.path.split('/').map(encodeURIComponent).join('/')}/`);
	await page.waitForTimeout(800);
	await page.locator('.site-header-controls .locale-picker-button').click();
	await page.locator('.locale-picker-option', { hasText: /^English$/ }).first().click();
	await page.waitForTimeout(1500);
	console.log('picker -> English:', decodeURI(new URL(page.url()).pathname));
	if (!/^\/en-001\/examples\//.test(new URL(page.url()).pathname)) problems.push(`picker went to ${page.url()}`);
}
await browser.close();
for (const p of problems) console.log('PROBLEM', p);
process.exit(problems.length ? 1 : 0);
