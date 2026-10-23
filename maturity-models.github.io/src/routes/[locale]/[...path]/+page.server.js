import { error } from '@sveltejs/kit';
import { loadLocalePage, pageEntries, pagesOf } from '#lib/server/locale-pages.js';

export const prerender = true;

export const entries = pageEntries;

export async function load({ params }) {
	// With trailingSlash 'always' the rest parameter keeps its trailing "/".
	const path = params.path.replace(/\/$/, '');
	const page = pagesOf(params.locale).find((p) => p.path === path);
	const html = page && (await loadLocalePage(params.locale, path));
	if (!page || !html) error(404, 'Page not found');
	return { locale: params.locale, title: page.title, category: page.category, html };
}
