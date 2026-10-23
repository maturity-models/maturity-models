import { error } from '@sveltejs/kit';
import { LOCALE_SLUGS } from '#lib/locales.js';
import { landingOf, localeSlugsWithContent, pagesOf } from '#lib/server/locale-pages.js';

export const prerender = true;

export function entries() {
	return localeSlugsWithContent().map((locale) => ({ locale }));
}

export async function load({ params }) {
	if (!LOCALE_SLUGS.includes(params.locale)) error(404, 'Locale not found');
	return { locale: params.locale, pages: pagesOf(params.locale), landing: await landingOf(params.locale) };
}
