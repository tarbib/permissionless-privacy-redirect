# PrivacyRedirect+

Redirects YouTube, Reddit, X, Medium, Fandom, Imgur and Stack Overflow to privacy-friendly frontends.

Private fork of [nzmcno/privacy-redirect-plus](https://github.com/nzmcno/privacy-redirect-plus), rebuilt after farside.link (which every redirect went through) shut down.

## How it works

- **No install-time permissions.** Every site starts off. Turning one on in the popup asks the browser for access to that site only; turning it off gives the access back.
- **The browser does the redirect.** Redirects are [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) rules in [rules.json](rules.json), applied before the request leaves your machine, so the original site never receives it. There is no background script: the extension's code never sees a URL.
- **Only content pages are redirected.** Login, password-reset and other account pages stay on the original site.

| Site | What gets redirected | Frontend |
| --- | --- | --- |
| YouTube | videos, shorts, channels, playlists, search, youtu.be links | [invidious.tiekoetter.com](https://invidious.tiekoetter.com) |
| Reddit | `/r/…`, `/u/…`, `/user/…` | [safereddit.com](https://safereddit.com) |
| X / Twitter | posts (`/<user>/status/…`) | [nitter.tiekoetter.com](https://nitter.tiekoetter.com) |
| Medium | articles | [scribe.rip](https://scribe.rip) |
| Fandom | wiki pages | [breezewiki.com](https://breezewiki.com) |
| Imgur | albums, galleries, direct images | [rimgo.privacyredirect.com](https://rimgo.privacyredirect.com) |
| Stack Overflow | questions | [overflow.hostux.net](https://overflow.hostux.net) |

Public instances come and go. To use another one (or your own), change its address in `rules.json` and reload the extension.

## Install

1. Open `brave://extensions` (or `chrome://extensions`) and turn on **Developer mode**.
2. Click **Load unpacked** and select this folder.
3. Click the toolbar icon and switch on the sites you want.

## Adding a site

Add a rule to `rules.json`, its hosts to `optional_host_permissions` in `manifest.json`, and a line to `SITES` in `popup.js`.
