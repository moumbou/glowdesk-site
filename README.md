# glowdesk-site

The public website for Glowdesk, free shop management software for cosmetics stores in Algeria. Plain HTML, CSS and one small script, no build step. Same setup as quire-site.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page: features, expiry tracking, till, languages, free, download, FAQ, contact |
| `download/index.html` | Redirects straight to `Glowdesk-Setup.exe` from the latest release |
| `changelog.html` | Release notes; the static list is replaced by the live releases from GitHub |
| `privacy.html` | Privacy statement (French + Arabic) |
| `license.html` | Terms of use (French + Arabic) |
| `site.js` | Arabic translations + language switch, and fetches the latest release from `api.github.com/repos/moumbou/glowdesk-releases` to fill version, date, size and download links |
| `img/` | Screenshots (WebP) and icons |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

French is written directly in the HTML. Arabic lives in the `AR` dictionary at the top of `site.js`, keyed by the `data-i18n` attribute of each element. The visitor's choice is remembered, and Arabic is picked automatically when the browser is in Arabic. `?lang=ar` forces it.

## Publishing

GitHub Pages from the `main` branch, root folder
(Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/`).
Every push to `main` goes live within a minute or two at `https://moumbou.github.io/glowdesk-site/`.

Custom domain (optional, e.g. `glowdesk.bouzidi-abderrahim.dev`): Settings → Pages → Custom domain, then in Cloudflare DNS add a `CNAME` record `glowdesk` → `moumbou.github.io` with the proxy **off** (grey cloud), and tick *Enforce HTTPS* once GitHub has issued the certificate.

## Updating

- New release: nothing to do, the version and changelog come from the releases repo.
- Contact block: fill `CONTACT` at the top of `site.js` (WhatsApp number and/or email). It stays hidden while both are empty.
- New text: edit the French in the HTML and the same key in `AR` in `site.js`.
- New screenshot: replace the file in `img/` under the same name (WebP, 2160×1350).
