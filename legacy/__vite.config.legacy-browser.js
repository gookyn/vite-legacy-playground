import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      targets: ['chrome >= 55'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
