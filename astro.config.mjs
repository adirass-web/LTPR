import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://cyberdrtabansky.com',
  i18n: { defaultLocale: 'en', locales: ['en', 'he'], routing: { prefixDefaultLocale: true } },
});
