import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: Update these if the repo name or account changes
const SITE = 'https://otar989.github.io/botfather24';
const BASE = '/botfather24/';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [tailwind(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routingStrategy: 'pathname'
  }
});
