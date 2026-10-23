// Picker locale values (sorted by code). A value is "ll_RR"; its URL slug and
// source directory under ../locales/ is the lowercase form with "_" replaced by
// "-" ("en_US" -> "en-us"). To add a locale: add its value here, add
// ../locales/<slug>/, and run `pnpm run content`. See spec/index.md.
export const LOCALES = ['ar_001', 'cy_001', 'cy_GB', 'en_001', 'en_GB', 'en_US', 'hi_001', 'hi_IN', 'zh_001', 'zh_CN'];

export const DEFAULT_LOCALE = 'en_US';

/** @param {string} value picker locale value @returns {string} URL slug */
export function localeToSlug(value) {
	return (value || DEFAULT_LOCALE).toLowerCase().replace(/_/g, '-');
}

/** Every URL slug that has a locale route. */
export const LOCALE_SLUGS = [...new Set(LOCALES.map(localeToSlug))];

export const DEFAULT_SLUG = localeToSlug(DEFAULT_LOCALE);

/** BCP 47 tag for a slug ("zh-tw" -> "zh-TW", "de-001" -> "de-001"). @param {string} slug */
export function slugToTag(slug) {
	const [lang, region] = slug.split('-');
	return region ? `${lang}-${region.length === 2 ? region.toUpperCase() : region}` : lang;
}

const RTL = new Set(['ar', 'ur', 'he', 'fa']);
/** @param {string} slug */
export function isRtlSlug(slug) {
	return RTL.has(slug.split('-')[0]);
}

/**
 * The route to send a visitor to, from the browser's language preferences
 * (`navigator.languages`, most preferred first). Used by the "/" page.
 * Per preference: the exact locale ("en-US" -> "en-us"), else the language's
 * world locale ("en-AU" -> "en-001"), else any locale of the same language.
 * With no match the result is the default
 * locale's route. See spec/index.md.
 * @param {readonly string[]} languages
 * @returns {string} a path such as "/en-us/"
 */
export function routeForLanguages(languages) {
	for (const raw of languages) {
		const parts = String(raw).trim().replace(/_/g, '-').toLowerCase().split('-').filter(Boolean);
		const lang = parts[0];
		if (!lang) continue;
		const region = parts.find((p, i) => i > 0 && /^([a-z]{2}|\d{3})$/.test(p));
		if (region && LOCALE_SLUGS.includes(`${lang}-${region}`)) return `/${lang}-${region}/`;
		const sameLanguage = LOCALE_SLUGS.includes(`${lang}-001`) ? `${lang}-001` : LOCALE_SLUGS.find((s) => s.split('-')[0] === lang);
		if (sameLanguage) return `/${sameLanguage}/`;
	}
	return `/${DEFAULT_SLUG}/`;
}
