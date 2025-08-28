import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// NOTE: Если теперь используете собственный домен (например botfather24.ru) меняем site/base.
// Если продолжаете публиковать в GitHub Pages под /botfather24/, верните эти значения.
const SITE = process.env.DEPLOY_DOMAIN || 'https://botfather24.ru';
// Для кастомного домена base должен быть '/'. Для GitHub Pages с под-путём нужен '/botfather24/'.
const BASE = process.env.DEPLOY_BASE || '/';

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
