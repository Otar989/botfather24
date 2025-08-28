import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://botfather24.example',
  integrations: [tailwind(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routingStrategy: 'pathname'
  }
});
