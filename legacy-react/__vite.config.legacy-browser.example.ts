import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  // for production build environments only
  build: {
    // minimum support es2015
    target: 'es2015',
  },
  plugins: [
    react(),
    // For production build environments only
    legacy({
      /**
       * 1. Try changing these values
       * 2. Run `pnpm build`, see the output files in dist directory
       * 3. Run `pnpm preview`, see the actual loaded files in different versions of browsers
       */
      // to be compatible with legacy browsers
      targets: ['ie >= 11'],
      // generate legacy browser's chunks
      renderLegacyChunks: true,
      // auto detect modern browser's polyfills
      modernPolyfills: true,
    }) as Plugin,
  ],
});
