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
      // to be compatible with legacy browsers
      targets: ['chrome >= 50'],
      // generate legacy browser's chunks
      renderLegacyChunks: true,
      // auto detect modern browser's polyfills
      modernPolyfills: true,
    }),
  ],
});

// note: vue3 don't support IE
