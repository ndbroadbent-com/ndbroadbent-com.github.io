# ndbroadbent.com

Personal portfolio website built with [Astro](https://astro.build).

## Development

```bash
bun install
bun run dev
```

Visit `http://localhost:4321`

## Building

```bash
bun run build
```

## Deployment

The site is deployed to GitHub Pages using a nested git repository approach:

- The `source` branch contains the Astro source code
- The `master` branch (in the `dist/` directory) contains the built static files

To deploy:

```bash
./deploy.sh
```

This script will:
1. Build the site with `bun run build`
2. Commit the built files in the `dist/` directory
3. Push to the `master` branch (GitHub Pages)
4. Push source changes to the `source` branch

## Project Structure

- `src/pages/index.astro` - Main page
- `src/layouts/Layout.astro` - Base layout with theme support
- `src/components/` - Reusable components
  - `Hero.astro` - Bio section with skills and experience
  - `Portfolio.astro` - Project showcase
  - `Contact.astro` - Contact information
  - `ThemeToggle.astro` - Dark mode toggle button
- `public/` - Static assets (images, favicons)

## Features

- ✨ One-page portfolio design
- 🌓 Dark mode with theme toggle (System/Dark/Light)
- 📊 Plausible Analytics integration
- 📱 Fully responsive
- ⚡ Built with Astro for optimal performance
- 🚀 Using Bun for fast builds and installs
