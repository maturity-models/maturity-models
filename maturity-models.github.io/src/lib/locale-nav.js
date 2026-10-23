// Where the language picker goes when a locale is chosen: the same page in the
// new locale when it exists there, otherwise the locale's landing page. "The same
// page" is the page with the same .locale-peer-id, because directory names are
// translated per locale.
import localePages from './locale-pages.json';
import { localeToSlug, LOCALE_SLUGS } from './locales.js';

/** @param {string} pathname */
function decode(pathname) {
	try {
		return decodeURI(pathname);
	} catch {
		return pathname;
	}
}

/**
 * @param {string} pathname current path
 * @param {string} toValue picker locale value being chosen (e.g. "en_US")
 * @returns {Promise<string>} path to navigate to
 */
export async function pathForLocale(pathname, toValue) {
	const toSlug = localeToSlug(toValue);
	const parts = decode(pathname).split('/').filter(Boolean);
	if (parts.length < 2 || !LOCALE_SLUGS.includes(parts[0])) return `/${toSlug}/`;
	const rest = parts.slice(1).join('/');
	const all = /** @type {Record<string, {path: string, peer?: string}[]>} */ (localePages);
	const peer = (all[parts[0]] ?? []).find((p) => p.path === rest)?.peer;
	const target = peer ? (all[toSlug] ?? []).find((p) => p.peer === peer) : undefined;
	return target ? `/${toSlug}/${target.path}/` : `/${toSlug}/`;
}
