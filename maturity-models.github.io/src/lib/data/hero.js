// Hand-authored hero strings (subheadline and the Translations label) and locale endonyms.
// Add an entry per locale; the landing page shows the hero only for locales listed here.
/** @type {Record<string, {tagline: string, translations: string}>} */
export const HERO = {
	'cy-gb': {
		tagline: 'Modelau aeddfedrwydd i asesu pobl, prosesau a thechnoleg, gydag enghreifftiau o\'r byd go iawn.',
		translations: 'Cyfieithiadau: '
	},
	'en-us': {
		tagline: 'Maturity models to assess people, processes, and technology, with real-world examples.',
		translations: 'Translations: '
	}
};

/** @type {Record<string, string>} */
export const ENDONYMS = {
	'cy-gb': 'Cymraeg',
	'en-us': 'English'
};

/** Heading id of each locale's examples section on its landing page (the header's "Examples" link). */
/** @type {Record<string, string>} */
export const EXAMPLES_ANCHOR = {
	'cy-gb': 'enghreifftiau-o-fodelau-aeddfedrwydd',
	'en-us': 'maturity-model-examples'
};
