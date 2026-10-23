<script>
	import { page } from '$app/state';
	import { queryFromSearch } from '#lib/search.js';
	import { isRtlSlug, slugToTag } from '#lib/locales.js';
	import SearchResults from '#lib/components/SearchResults.svelte';
	import { HERO, ENDONYMS } from '#lib/data/hero.js';

	let { data } = $props();

	const slug = $derived(data.locale);
	const rtl = $derived(isRtlSlug(slug));
	const hero = $derived(HERO[slug]);
	// location.search exists only in the browser; prerendering shows the contents.
	let query = $state('');
	$effect(() => {
		query = queryFromSearch(page.url.search);
	});
</script>

<svelte:head>
	<title>{query ? `${query} · ${slug}` : (data.landing?.hero.title ?? slug)}</title>
	{#if query}<meta name="robots" content="noindex" />{/if}
</svelte:head>

<section class="locale-search" lang={slugToTag(slug)} dir={rtl ? 'rtl' : 'ltr'}>
	{#if query}
		<h1>{query}</h1>
		<p class="locale-label">{slug}</p>
		<SearchResults {slug} />
	{:else if data.landing}
		<div class="intro">
			<h1>{data.landing.hero.title}</h1>
			{#if hero}<p class="hero-subheadline">{hero.tagline}</p>{/if}
			<p>{data.landing.hero.text}</p>
			{#if hero}
				<p class="hero-translations">
					{hero.translations}{#each Object.entries(ENDONYMS) as [code, name], i (code)}{i ? ', ' : ''}<a
							href="/{code}/"
							lang={slugToTag(code)}
							aria-current={code === slug ? 'page' : undefined}>{name}</a
						>{/each}
				</p>
			{/if}
		</div>
		<div class="prose">{@html data.landing.html}</div>
	{:else}
		<h1>{slug}</h1>
		<ul>
			{#each data.pages as p (p.path)}
				<li><a href="/{slug}/{p.path}/">{p.title}</a></li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.hero-subheadline {
		font-size: 1.25em;
		font-weight: 600;
	}
	.hero-translations {
		font-size: 0.9em;
	}
	.hero-translations a[aria-current='page'] {
		font-weight: 700;
		text-decoration: none;
	}
</style>
