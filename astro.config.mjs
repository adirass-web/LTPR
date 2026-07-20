import { defineConfig } from 'astro/config';

const githubPages = process.env.SITE_TARGET === 'github-pages';

export default defineConfig({
  site: githubPages ? 'https://adirass-web.github.io' : 'https://cyberdrtabansky.com',
  base: githubPages ? '/LTPR' : undefined,
  i18n: { defaultLocale: 'en', locales: ['en', 'he'], routing: { prefixDefaultLocale: true } },
});
