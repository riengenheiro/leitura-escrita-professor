import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dislexia.doutoraescola.com.br',
  integrations: [tailwind()],
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
