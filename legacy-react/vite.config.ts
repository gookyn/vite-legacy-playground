import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  // Works on both development and production build environments
  esbuild: {
    // Configure this value when the browser version of the development environment is lower
    target: 'chrome64',
    include: /\.(js|ts|jsx|tsx)$/,
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
      targets: ['chrome >= 55'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
