// Hand-authored hero strings (subheadline and the Translations label) and locale endonyms.
// Add an entry per locale; the landing page shows the hero only for locales listed here.
/** @type {Record<string, {tagline: string, translations: string}>} */
export const HERO = {
	'ar-001': {
		tagline: 'نماذج النضج: قياس القدرات وتحسينها خطوة بخطوة',
		translations: 'الترجمات: '
	},
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
	'hi-001': {
		tagline: 'लोगों, प्रक्रियाओं और प्रौद्योगिकी का आकलन करने के लिए परिपक्वता मॉडल, वास्तविक दुनिया के उदाहरणों के साथ।',
		translations: 'अनुवाद: '
	},
	'hi-in': {
		tagline: 'लोगों, प्रक्रियाओं और प्रौद्योगिकी का आकलन करने के लिए परिपक्वता मॉडल, वास्तविक दुनिया के उदाहरणों के साथ।',
		translations: 'अनुवाद: '
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
	'ar-001': 'العربية',
	'cy-001': 'Cymraeg',
	'cy-gb': 'Cymraeg',
	'en-001': 'English',
	'en-gb': 'English',
	'en-us': 'English',
	'hi-001': 'हिन्दी',
	'hi-in': 'हिन्दी',
	'zh-001': '中文',
	'zh-cn': '中文'
};

/** Heading id of each locale's examples section on its landing page (the header's "Examples" link). */
/** @type {Record<string, string>} */
export const EXAMPLES_ANCHOR = {
	'ar-001': 'أمثلة-على-نماذج-النضج',
	'cy-001': 'enghreifftiau-o-fodelau-aeddfedrwydd',
	'cy-gb': 'enghreifftiau-o-fodelau-aeddfedrwydd',
	'en-001': 'maturity-model-examples',
	'en-gb': 'maturity-model-examples',
	'en-us': 'maturity-model-examples',
	'hi-001': 'परिपक्वता-मॉडल-के-उदाहरण',
	'hi-in': 'परिपक्वता-मॉडल-के-उदाहरण',
	'zh-001': '成熟度模型示例',
	'zh-cn': '成熟度模型示例'
};
