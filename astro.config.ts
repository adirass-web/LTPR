import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const githubPages = process.env.SITE_TARGET === 'github-pages';
const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  site: githubPages ? 'https://adirass-web.github.io' : 'https://cyberdrtabansky.com',
  base: githubPages ? '/LTPR' : undefined,
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(root, 'src'),
      },
    },
  },
});
