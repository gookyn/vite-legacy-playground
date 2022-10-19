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
       * 2. Run the build command to see the dist directory
       * 3. Run the preview command to see the actual loaded files in different versions of browsers
       */
      targets: ['chrome >= 55'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
