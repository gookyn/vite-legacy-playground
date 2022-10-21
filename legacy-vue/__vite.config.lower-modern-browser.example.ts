import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  // works on both development and production build environments
  esbuild: {
    // configure this value when the browser version of the development environment is lower
    // minimum support es2015
    // https://esbuild.github.io/api/#target
    target: 'es2015',
  },
  // for production build environments only
  build: {
    // minimum support es2015
    target: 'es2015',
  },
  plugins: [
    vue(),
    // for production build environments only
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
    }),
  ],
});
