# Brand fonts

## Canela (hero sections only)

Place OpenType files here for local development:

- `Canela-Light.otf` (300) — required
- `Canela-Regular.otf` (400) — required
- `Canela-Thin.otf` (100)
- `Canela-LightItalic.otf` (300 italic)
- `Canela-Medium.otf` (500)

These files are gitignored (licensed). Before deploy, run:

```bash
pnpm fonts:pack-hero
```

Then in Vercel → Project Settings → Environment Variables, add:

- `FONTS_HERO_ARCHIVE_BASE64` — paste contents of `hero-fonts-bundle.base64.txt`
- `FONTS_HERO_REQUIRE` — `true` (optional; fails build if fonts are missing)

The build runs `prepare-hero-fonts.mjs`, which extracts Canela into `src/assets/fonts/canela/` and bundles it for hero typography via `next/font/local`.

## Neue Haas Grotesk (headings — optional)

- `NeueHaasGrotesk-Light.woff2` (300)
- `NeueHaasGrotesk-Roman.woff2` (400)
- `NeueHaasGrotesk-Medium.woff2` (500)

Body text uses **Inter** via Google Fonts.
