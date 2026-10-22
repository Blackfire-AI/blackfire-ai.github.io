# blackfire-ai.com

Static site for Blackfire AI, served by GitHub Pages at <https://blackfire-ai.com>.
Plain HTML and CSS, no build step.

| Path | Page |
|------|------|
| `/` (`index.html`) | Blackfire AI home: intro and the product list |
| `/brigada/` | brigada product landing |
| `404.html` | Not-found page (GitHub Pages serves it) |

## Adding a product

1. Make `/<product>/index.html`, copying the header and footer from `brigada/index.html`.
2. Put its page styles in `assets/<product>.css` and its brand files in `assets/<product>/`.
3. Add an `<article class="product">` card to the products list in `index.html`.

## Brand

One mark for the company and every product: the Blackfire flame (ink body,
hi-vis `#FF5A1F` core). Products don't get their own symbol; they differ by name
and descriptor only.

| File | Use |
|------|-----|
| `assets/blackfire/lockup-on-{light,dark}.svg` | Blackfire AI: flame + **blackfire** / AI INFRASTRUCTURE |
| `assets/brigada/lockup-on-{light,dark}.svg` | brigada: flame + **brigada** / BY BLACKFIRE AI |
| `assets/blackfire/flame.svg` | the mark alone |
| `assets/blackfire/favicon.svg`, `app-icon.svg` | ink tile, paper flame, hi-vis core (all pages) |

- **Type:** name in Space Grotesk 700, lower case, tracking −0.035em; descriptor in
  Space Grotesk 500, caps, tracking +0.42em, Steel `#555555` (`#A3A7AE` on dark).
  The lockup SVGs have text converted to paths, so they render without the font.
- **Colour:** hi-vis only in the flame core. Lockups come in an on-light (ink) and an
  on-dark (paper) version; pick with `<picture>` and `prefers-color-scheme`.
- **New product:** copy a lockup, change the name, keep "BY BLACKFIRE AI".
- The old brigada pixel files (`assets/brigada/wordmark-*`, `mark-*`, `favicon-*`,
  `app-icon.svg`) are no longer used by the site.

## Local preview

```sh
python3 -m http.server 8787 --bind 127.0.0.1
# open http://127.0.0.1:8787/ and http://127.0.0.1:8787/brigada/
```

Use absolute paths (`/assets/...`). They work on Pages because the site is served
from the domain root.

## Deploy

GitHub Pages serves the `main` branch root, and `CNAME` holds the custom domain.
DNS is at GoDaddy:

- apex `blackfire-ai.com`: A records `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` (optionally AAAA `2606:50c0:8000::153` to `8003::153`);
- `www`: CNAME `blackfire-ai.github.io`.
