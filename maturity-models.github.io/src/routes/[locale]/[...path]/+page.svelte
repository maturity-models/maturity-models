<script>
	import { EXAMPLES_ANCHOR } from '#lib/data/hero.js';
	import { slugToTag, isRtlSlug } from '#lib/locales.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<a class="back-link" href="/{data.locale}/#{EXAMPLES_ANCHOR[data.locale]}">&larr; Maturity Models</a>

<div class="prose" lang={slugToTag(data.locale)} dir={isRtlSlug(data.locale) ? 'rtl' : 'ltr'}>
	{@html data.html}
</div>
