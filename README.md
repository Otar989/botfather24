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

This repo includes an Actions workflow that builds Astro and deploys the `dist/` artifact to GitHub Pages.

How to enable:
- Ensure your repository is named `botfather24` (or update `site`/`base` in `astro.config.mjs`).
- In repo Settings → Pages, set Source to “GitHub Actions”.
- Push to `main` (or `master`) — the `Deploy Astro to GitHub Pages` workflow will build and publish.

Notes:
- `astro.config.mjs` uses `site=https://otar989.github.io/botfather24` and `base=/botfather24/` for proper asset paths.
- A `.nojekyll` file is included to avoid Jekyll processing.
