import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      // only to be compatible with modern browsers
      // minimum support Native ESM, native ESM dynamic import, and import.meta
      targets: [
        'chrome >= 64',
        'edge >= 79',
        'safari >= 11.1',
        'firefox >= 67',
      ],
      // unnecessary generate legacy browser's chunks
      renderLegacyChunks: false,
      // auto detect modern browser's polyfills
      modernPolyfills: true,
      // or add manually
      // modernPolyfills: ['es/global-this'],
    }),
  ],
});
