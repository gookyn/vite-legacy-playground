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
    }) as Plugin,
  ],
});
