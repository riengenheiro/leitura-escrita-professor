import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
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
