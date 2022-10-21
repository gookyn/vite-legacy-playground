import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      // to be compatible with legacy browsers
      targets: ['ie >= 11'],
      // generate legacy browser's chunks
      renderLegacyChunks: true,
      /**
       * auto detect
       */
      modernPolyfills: true,
      /**
       * or add manually
       */
      // only for legacy browsers
      // polyfills: ['es/global-this', 'es/array/includes'],
      // only for modern browsers
      // modernPolyfills: ['es/global-this'],
    }),
  ],
});
