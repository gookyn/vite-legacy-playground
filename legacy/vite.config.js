import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      /**
       * 1. Try changing these values
       * 2. Run `pnpm build`, see the output files in dist directory
       * 3. Run `pnpm preview`, see the actual loaded files in different versions of browsers
       */
      targets: ['chrome >= 55'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
