import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  // Works on both development and production build environments
  esbuild: {
    // Configure this value when the browser version of the development environment is lower
    target: 'chrome64',
  },
  plugins: [
    vue(),
    // For production build environments only
    legacy({
      /**
       * 1. Try changing these values
       * 2. Run `pnpm build`, see the output files in dist directory
       * 3. Run `pnpm preview`, see the actual loaded files in different versions of browsers
       */
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
