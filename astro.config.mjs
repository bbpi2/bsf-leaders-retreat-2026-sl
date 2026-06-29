// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://bbpi2.github.io",
	base: "/bsf-leaders-retreat-2026-sl",
	integrations: [
		starlight({
			title: '',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/bbpi2' }],
		}),
	],
});
