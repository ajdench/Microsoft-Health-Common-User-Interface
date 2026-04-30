// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pagePlugin from '@pelagornis/page';

function ensureWrappedSlashes(pathname) {
	if (!pathname || pathname === '/') {
		return '/';
	}
	return `/${pathname.replace(/^\/+|\/+$/g, '')}/`;
}

function stripTrailingSlash(pathname) {
	if (pathname === '/') {
		return '';
	}
	return pathname.replace(/\/+$/, '');
}

const astroSite = process.env.ASTRO_SITE_URL ?? 'http://localhost:4321';
const astroBase = ensureWrappedSlashes(process.env.ASTRO_BASE_PATH ?? '/');

function withBase(pathname) {
	const normalizedPath = ensureWrappedSlashes(pathname);
	if (astroBase === '/') {
		return normalizedPath;
	}
	return `${stripTrailingSlash(astroBase)}${normalizedPath}`;
}

// https://astro.build/config
export default defineConfig({
	site: astroSite,
	base: astroBase,
	integrations: [
		starlight({
			title: 'MSH CUI Wiki',
			description:
				'A local Astro/Starlight window into the Microsoft Health Common User Interface LLM Wiki corpus.',
			customCss: ['./src/styles/global.css'],
			components: {
				Head: '/src/components/Head.astro',
				Search: '/src/components/Search.astro',
				TableOfContents: '/src/components/TableOfContents.astro',
			},
			plugins: [
				pagePlugin({
					navigation: [
						{ href: withBase('/'), label: 'Wiki' },
						{ href: withBase('/wiki/overview/health-cui-overview/'), label: 'Overview' },
						{ href: withBase('/wiki/source-notes/toolkit-mirror-mscui/'), label: 'Sources' },
						{ href: withBase('/derived/inventories/source-inventory/'), label: 'Inventories' },
					],
				}),
			],
			sidebar: [
				{
					label: 'Core',
					items: [
						{ label: 'README', slug: 'readme' },
						{ label: 'AGENTS', slug: 'agents' },
						{ label: 'Log', slug: 'log' },
					],
				},
				{
					label: 'Wiki',
					items: [
						{ label: 'Overview', autogenerate: { directory: 'wiki/overview' } },
						{ label: 'Chronology', autogenerate: { directory: 'wiki/chronology' } },
						{ label: 'Concepts', autogenerate: { directory: 'wiki/concepts' } },
						{
							label: 'Guidance Domains',
							autogenerate: { directory: 'wiki/guidance-domains' },
						},
						{ label: 'Entities', autogenerate: { directory: 'wiki/entities' } },
						{ label: 'Controls', autogenerate: { directory: 'wiki/controls' } },
						{ label: 'Mappings', autogenerate: { directory: 'wiki/mappings' } },
						{ label: 'Source Notes', autogenerate: { directory: 'wiki/source-notes' } },
					],
				},
				{
					label: 'Derived',
					items: [
						{ label: 'Inventories', autogenerate: { directory: 'derived/inventories' } },
						{
							label: 'Normalized Markdown',
							autogenerate: { directory: 'derived/normalized-markdown' },
						},
					],
				},
				{
					label: 'Provenance',
					items: [
						{ label: 'Metadata', autogenerate: { directory: 'raw/metadata' } },
						{ label: 'Manifests', autogenerate: { directory: 'raw/manifests' } },
					],
				},
			],
		}),
	],
});
