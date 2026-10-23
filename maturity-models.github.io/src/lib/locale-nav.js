// Where the language picker goes when a locale is chosen: the same page in the
// new locale when it exists there (same path below the locale), otherwise the
// locale's landing page.
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
	const pages = /** @type {Record<string, {path: string}[]>} */ (localePages)[toSlug] ?? [];
	return pages.some((p) => p.path === rest) ? `/${toSlug}/${rest}/` : `/${toSlug}/`;
}
