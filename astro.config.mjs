import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.mehdijamali.no',
  integrations: [sitemap()],
  build: { format: 'directory' },
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
});
