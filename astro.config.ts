import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  compressHTML: true,
  site: 'https://cyberdrtabansky.com',
  integrations: [
    sitemap({
      filter: (page) => ['/en/', '/en/media/'].some((route) => page.endsWith(route)),
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(root, 'src'),
      },
    },
  },
});
