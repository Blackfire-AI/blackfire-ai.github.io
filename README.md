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

- **brigada:** the SVGs in `assets/brigada/` are copied unmodified from
  `Blackfire-AI/brigada` `docs/brand/` (commit 7fe5dc1). Follow its README: never
  set the wordmark in a typeface, leave two cells of clear space, keep it at least
  96 px wide, and use hi-vis `#FF5A1F` only for the foreman cell. That is why
  `/brigada/` uses no orange anywhere else.
- **Blackfire AI:** the flame mark (option A, "Black flame") comes from the
  "Blackfire AI Logo" design canvas, Identity v0.1. It isn't final yet. The mark
  appears inline in each page's header and in `assets/blackfire/`.
- **Type:** Space Grotesk and JetBrains Mono, from Google Fonts.

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
