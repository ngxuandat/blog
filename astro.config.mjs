// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ngxuandat.github.io',
  base: '/blog',
  trailingSlash: 'ignore',
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  // Keep old fastpages links working (old post URLs: see src/pages/markdown/).
  redirects: {
    '/categories': '/blog/tags/',
  },
});
