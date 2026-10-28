# Permissionless Privacy Redirect

Opens YouTube, X, Reddit, Instagram, TikTok, Wikipedia, Medium, Stack Overflow, Imgur, IMDb, Quora, Fandom, Genius, Bandcamp, GitHub and Google Translate links in privacy-friendly frontends, on instances you choose. **It requires no permissions.**

Fork of [nzmcno/privacy-redirect-plus](https://github.com/nzmcno/privacy-redirect-plus), rebuilt after farside.link (which every redirect went through) shut down.

## How it works

With no permissions, the extension can't see your tabs, your browsing or any page. So instead of redirecting on its own, it opens the links you give it:

- **Address bar:** type `pr`, a space and a link (for example `pr youtube.com/watch?v=…`), then press Enter.
- **Popup:** paste a link and press Enter.

The link opens directly on the frontend, so the original site is never contacted. Content links (videos, posts, articles…) open the same page on the frontend. Any other link to a supported site (login, password reset, account pages) opens the frontend's home page, so tokens in those links aren't passed on.

Automatic redirects can't work without permissions: a browser only lets an extension act on sites it has access to.

## Automatic redirects in Brave

Brave can run small scripts on pages by itself (custom scriptlets, Brave 1.75+), which gets you automatic redirects while the extension keeps no permissions. Click **Redirect clicked links automatically (Brave)** in the popup: it builds a script and a filter rule from your settings and explains where to paste them in `brave://settings/shields/filters`.

- Links you click on common search engines (DuckDuckGo, Google, Bing, Brave Search, Startpage, Ecosia, Kagi) are rewritten before the original site is contacted.
- Pages on a supported site that you open some other way, such as from another app, switch to the frontend as soon as they start loading, so that site still sees the first request.
- Only content pages are converted, so you can still sign in to the original sites. Update the script after changing your instances.

## Instances

Each site in the popup has an on/off checkbox and an instance field, prefilled where a working public instance was found. Public instances come and go, so change them freely; your own self-hosted one works too. Turning a site off keeps its instance for when you turn it back on.

| Site | Frontend | Opens as the same page | Suggested instance |
| --- | --- | --- | --- |
| YouTube | Invidious | videos, shorts, channels, playlists, search, youtu.be links | invidious.tiekoetter.com |
| X / Twitter | Nitter | posts, profiles | nitter.tiekoetter.com |
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

## Adding a site

Add an entry to `SITES` in `sites.js`.

## Disclaimer

Not affiliated with YouTube, X, Reddit or any other site listed here. Frontends are run by third parties unless you host them yourself: they may go down, change, or log what you view, and using them may break some sites' terms of service. This makes your browsing more private, not anonymous.

## License

[MIT](LICENSE)
