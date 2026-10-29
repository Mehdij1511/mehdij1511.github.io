import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mehdij1511.github.io',
  integrations: [sitemap()],
  build: { format: 'directory' },
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
});
