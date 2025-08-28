# Botfather24 Website

Static site built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), [motion-one](https://motion.dev) and MDX.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated in the `dist/` directory and can be deployed to any static hosting.

### Deploy to Jino

Upload the contents of `dist/` to your Jino hosting root.

### Deploy to GitHub Pages

1. Run `npm run build`.
2. Commit and push the `dist` folder to the `gh-pages` branch or configure Pages to serve from `dist`.
