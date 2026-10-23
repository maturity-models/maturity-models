import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				strict: true
			}),

			prerender: {
				// Hand-written in-page anchors in example pages do not always match
				// their heading's slug exactly: warn rather than fail the build.
				handleMissingId: 'warn',
				handleHttpError: 'fail'
			}
		})
	]
});
