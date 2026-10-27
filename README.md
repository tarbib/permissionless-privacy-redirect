# PrivacyRedirect+

Redirects YouTube, X, Reddit, Instagram, TikTok, Wikipedia, Medium, Stack Overflow, Imgur, IMDb, Quora, Fandom, Genius, Bandcamp, GitHub and Google Translate to privacy-friendly frontends, on instances you choose.

Fork of [nzmcno/privacy-redirect-plus](https://github.com/nzmcno/privacy-redirect-plus), rebuilt after farside.link (which every redirect went through) shut down.

## How it works

- **No install-time permissions.** Every site starts off. Turning one on asks the browser for access to that site only; turning it off gives the access back.
- **You choose the instance.** Each site has an instance field in the popup, prefilled where a working public instance was found. Public instances come and go, so change them freely; your own self-hosted one works too.
- **The browser does the redirect.** Redirects are [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) rules, applied before the request leaves your machine, so the original site never receives it. The extension's code never sees a URL.
- **Only content pages are redirected.** Login, password-reset, OAuth and account pages stay on the original site.

| Site | Frontend | What gets redirected | Suggested instance |
| --- | --- | --- | --- |
| YouTube | Invidious | videos, shorts, channels, playlists, search, youtu.be links | invidious.tiekoetter.com |
| X / Twitter | Nitter | posts | nitter.tiekoetter.com |
| Reddit | Redlib | `/r/`, `/u/`, `/user/` pages | safereddit.com |
| Instagram | Proxigram | posts, reels, profiles | — |
| TikTok | ProxiTok | profiles, videos | — |
| Wikipedia | Wikiless | articles, all languages | wikiless.tiekoetter.com |
| Medium | Scribe | articles | scribe.rip |
| Stack Overflow | AnonymousOverflow | questions | overflow.hostux.net |
| Imgur | Rimgo | albums, galleries, direct images | rimgo.privacyredirect.com |
| IMDb | libremdb | titles, people | libremdb.pussthecat.org |
| Quora | Quetre | questions, answers, profiles | — |
| Fandom | BreezeWiki | wiki pages | breezewiki.com |
| Genius | Dumb | lyrics | — |
| Bandcamp | Tent | artists, albums, tracks | tent.sny.sh |
| GitHub | GotHub | repositories and files | gothub.r4fo.com |
| Google Translate | SimplyTranslate | opens the translator (your text isn't carried over) | simplytranslate.org |

"—" means no working public instance was found when this list was made (October 2026): enter one to use that site.

## Install

1. Open `brave://extensions` (or `chrome://extensions`) and turn on **Developer mode**.
2. Click **Load unpacked** and select this folder.
3. Click the toolbar icon, check the instances, and switch on the sites you want.

## Adding a site

Add an entry to `SITES` in `sites.js`, and its hosts to `optional_host_permissions` in `manifest.json`.
