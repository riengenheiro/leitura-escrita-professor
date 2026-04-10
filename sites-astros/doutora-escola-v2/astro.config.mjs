import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  vite: {
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../../shared'),
      },
    },
  },
});
