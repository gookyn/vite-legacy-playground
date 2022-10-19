import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      // minimum support Native ESM, native ESM dynamic import, and import.meta
      targets: [
        'chrome >= 64',
        'edge >= 79',
        'safari >= 11.1',
        'firefox >= 67',
      ],
      renderLegacyChunks: false,
      modernPolyfills: true,
    }),
  ],
});
