# Within Group

Source for **https://within-group.com/**, the website of Within Group LLC.

Within Group sources and coordinates acquisitions of non-performing CRE and multifamily loans for a dedicated institutional capital partner. The site is a single landing page for loan sellers: regional and community banks, debt funds and mortgage REITs, CMBS and CLO special servicers, life companies, and loan sale advisors.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content, SEO tags, and structured data (Organization, Service, FAQPage) |
| `styles.css` | Design system: light and dark themes, type scale, layout |
| `script.js` | Theme toggle, hero screening animation, seller tabs, process progress |
| `404.html` | Branded "page not found" page (GitHub Pages serves it automatically) |
| `robots.txt` | Lets search engines and AI answer engines crawl the site |
| `sitemap.xml` | Tells search engines what to index |
| `llms.txt` | Plain-text summary of the firm and buy box for AI assistants |
| `site.webmanifest` | App name and icons for phones |
| `favicon.ico` | Browser tab icon |
| `CNAME` | Custom domain for GitHub Pages (leave unchanged) |
| `assets/fonts/` | Self-hosted Geist variable font |
| `assets/favicons/` | Favicons, including an SVG version |
| `assets/logos/` | Logo SVG and a square mark used in search results |
| `assets/og-image.png` | Preview image shown when the link is shared on LinkedIn, email, or text |

No build step, frameworks, or third-party services. Everything is static.

## Updating the buy box

The buy box appears in four places. Keep them consistent when it changes:

1. `index.html`: the hero terms row, the buy box table, the seller panels, and the FAQ answers
2. `index.html`: the `FAQPage` and `Service` structured data in the `<script type="application/ld+json">` block at the top
3. `llms.txt`
4. `assets/og-image.png` (if the headline figures change)

After any content change, update `<lastmod>` in `sitemap.xml`.

## Themes

The site follows the visitor's system light/dark setting until they use the toggle in the header. Their choice is then remembered in their browser.

## Disclaimer

Within Group LLC sources and coordinates loan sale transactions on behalf of its capital partner. Within Group is not a broker-dealer and does not offer or solicit securities. All indications of interest are non-binding and subject to diligence, documentation, and capital partner approval.

© 2026 Within Group LLC
