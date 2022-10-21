# vite-legacy-playground

🏒 Have fun with vite compatibility!

## Background

Vite's default target is modern browsers, there may be some confusion if you want to be compatible with legacy browsers and lower version modern browsers, so several sample configurations are provided to help understand and use.

## Dependencies version

- vite: v2.9.4
- @vitejs/plugin-legacy: v1.8.1

## Playground

- js
- vue
- react

## How to play

Take basic js as an example:

### Change directory

```bash
cd legacy
```

### Install

```bash
pnpm install
```

### Modify configure

Experiment with different compatible targets by modifying vite.config.js.

You can refer to the provided example configuration:

- `__vite.config.legacy-browser.example.js` for legacy browsers
- `__vite.config.lower-modern-browser.example.js` for lower modern browsers

There will also be some simple test cases, for examples: `global-this`, `array`.

### Dev

```bash
pnpm dev
```

Open http://localhost:3000/ and browser console

### Build

```bash
pnpm build
```

Check if the `dist/` directory is as expected.

### Preview

```bash
pnpm preview
```

Open http://localhost:4173/ and browser console in different versions of browsers and verify the results.

---

Have fun! 😊
