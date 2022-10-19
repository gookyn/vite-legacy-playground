# vite-legacy-playground

🏒 Have fun with vite compatibility!

## Dependencies version

- vite: v2.9.4
- @vitejs/plugin-legacy: v1.8.1

## Compatible with lower version modern browsers

Minimum support [Native ESM](https://caniuse.com/es6-module), [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta).

Corresponding version:

- chrome >= 64
- edge >= 79
- safari >= 11.1
- firefox >= 67

> Note: Not fully compatible with lower old versions!

```javascript
// vite.config.js

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  // Works on both development and production build environments
  esbuild: {
    // Configure this value when the browser version of the development environment is lower
    target: 'chrome64',
    include: /\.(ts|jsx|tsx)$/,
  },
  // For production build environments only
  build: {
    /**
     * The final built browser-compatible target, minimum support to es2015
     *
     * Note: In vite v3.0 and above, this value may be overridden by @vitejs/plugin-legacy
     */
    target: 'es2015',
    /**
     * Configure the css compression target separately, or use the default configuration
     *
     * Note: This option has a different default value in vite and @vitejs/plugin-legacy
     */
    cssTarget: 'chrome61',
  },
  plugins: [
    // For production build environments only
    legacy({
      /**
       * Expected compatible target browser version range
       *
       * The example here is in the configuration format of browserslist
       * (https://github.com/browserslist/browserslist)
       */
      targets: [
        'chrome >= 64',
        'edge >= 79',
        'safari >= 11.1',
        'firefox >= 67',
      ],
      /**
       * Whether to ignore detecting browserslist config sources
       *
       * Will be passed to babel, the browserslist configuration source will be automatically detected in @babel/preset-env
       * as browserslist in package.json or .browserslistrc in root
       *
       * The example here only gets from incoming targets
       */
      ignoreBrowserslistConfig: true,
      /**
       * Whether to generate legacy browser compatibility chunks
       *
       * The examples here are only compatible with modern browsers, so it is not necessary to generate
       */
      renderLegacyChunks: false,
      /**
       * Polyfills required by modern browsers
       *
       * Since some low-version modern browsers do not support the new syntax
       * You need to load polyfills corresponding to the syntax to be compatible
       * At build, all required polyfills are packaged according to the target browser version range
       * But when the page is accessed, only the required part is loaded depending on the browser version
       *
       * Two configuration methods:
       *
       * 1. true
       *  - Automatically load all required polyfills based on the target browser version range
       *  - Demerit: will introduce polyfills that are not needed by modern browsers in higher versions,
       *    as well as more aggressive polyfills.
       *
       * 2、string[]
       *  - Add low-version browser polyfills as needed
       *  - example: ['es/global-this', 'proposals/object-from-entries']
       *  - Demerit: It needs to be added manually, which is inflexible;
       *    it will be discovered after the production is deployed, resulting in production failure! ! !
       */
      modernPolyfills: true,
    }),
  ],
});
```
