// Hand-authored hero strings (subheadline and the Translations label) and locale endonyms.
// Add an entry per locale; the landing page shows the hero only for locales listed here.
/** @type {Record<string, {tagline: string, translations: string}>} */
export const HERO = {
	'cy-001': {
		tagline: 'Modelau aeddfedrwydd i asesu pobl, prosesau a thechnoleg, gydag enghreifftiau o\'r byd go iawn.',
		translations: 'Cyfieithiadau: '
	},
	'cy-gb': {
		tagline: 'Modelau aeddfedrwydd i asesu pobl, prosesau a thechnoleg, gydag enghreifftiau o\'r byd go iawn.',
		translations: 'Cyfieithiadau: '
	},
	'en-001': {
		tagline: 'Maturity models to assess people, processes, and technology, with real-world examples.',
		translations: 'Translations: '
	},
	'en-gb': {
		tagline: 'Maturity models to assess people, processes, and technology, with real-world examples.',
		translations: 'Translations: '
	},
	'en-us': {
		tagline: 'Maturity models to assess people, processes, and technology, with real-world examples.',
		translations: 'Translations: '
	},
	'zh-001': {
		tagline: '用于评估人员、流程和技术的成熟度模型，附有真实案例。',
		translations: '翻译：'
	},
	'zh-cn': {
		tagline: '用于评估人员、流程和技术的成熟度模型，附有真实案例。',
		translations: '翻译：'
	}
};

/** @type {Record<string, string>} */
export const ENDONYMS = {
	'cy-001': 'Cymraeg',
	'cy-gb': 'Cymraeg',
	'en-001': 'English',
	'en-gb': 'English',
	'en-us': 'English',
	'zh-001': '中文',
	'zh-cn': '中文'
};

/** Heading id of each locale's examples section on its landing page (the header's "Examples" link). */
/** @type {Record<string, string>} */
export const EXAMPLES_ANCHOR = {
	'cy-001': 'enghreifftiau-o-fodelau-aeddfedrwydd',
	'cy-gb': 'enghreifftiau-o-fodelau-aeddfedrwydd',
	'en-001': 'maturity-model-examples',
	'en-gb': 'maturity-model-examples',
	'en-us': 'maturity-model-examples',
	'zh-001': '成熟度模型示例',
	'zh-cn': '成熟度模型示例'
};
