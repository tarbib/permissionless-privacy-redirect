# Chrome Web Store listing

Text and answers for the Developer Dashboard. The name and summary come from `manifest.json`.

## Store listing

- **Category:** Privacy & Security
- **Language:** English
- **Store icon:** `icons/icon128.png`
- **Screenshot:** `store/screenshot-1280x800.png`
- **Small promo tile:** `store/promo-440x280.png`
- **Homepage URL:** https://github.com/tarbib/permissionless-privacy-redirect
- **Support URL:** https://github.com/tarbib/permissionless-privacy-redirect (or `/issues`, once Issues are enabled on the repo)

**Description** (plain text, paste as is):

```text
Open links to YouTube, Reddit, X and 13 other sites in privacy-friendly frontends, without giving any extension access to your browsing.

Most redirect extensions ask to "read and change your data" on the sites they redirect, or to read your browsing history. This one requests no permissions at all: it can't see your tabs, your history or the pages you visit. So it doesn't redirect pages by itself. Instead, you give it the links you want to open privately:

• In the address bar, type pr, a space and a link, then press Enter.
• Or click the toolbar icon, paste a link and press Enter.

The link opens directly on the frontend, so the original site is never contacted.

ON BRAVE: AUTOMATIC REDIRECTS
Brave can run small scripts on pages by itself. The popup builds one from your settings, so links you click on search engines open on their frontend automatically, still without giving the extension any permissions.

SUPPORTED SITES
• YouTube → Invidious
• X / Twitter → Nitter
• Reddit → Redlib
• Instagram → Proxigram
• TikTok → ProxiTok
• Wikipedia → Wikiless
• Medium → Scribe
• Stack Overflow → AnonymousOverflow
• Imgur → Rimgo
• IMDb → libremdb
• Quora → Quetre
• Fandom → BreezeWiki
• Genius → Dumb
• Bandcamp → Tent
• GitHub → GotHub
• Google Translate → SimplyTranslate (opens the translator; your text isn't carried over)

YOUR INSTANCES
Each site has an on/off switch and an instance field. Twelve come with a suggested public instance; replace any of them with one you trust or host yourself. Public instances come and go, so it's worth knowing a second one.

SENSITIVE LINKS STAY SAFE
Login, password-reset and account links open the frontend's home page instead, so tokens in them are never passed on.

PRIVACY
No data collection, no analytics and no network requests of its own. Your settings stay on your device. The frontend you open a link on sees that page address and your IP address, as the original site would have.

Open source (MIT): https://github.com/tarbib/permissionless-privacy-redirect

Not affiliated with any of the sites or frontends listed.
```

## Privacy practices

- **Single purpose:** Opens links to supported sites, such as YouTube and Reddit, in privacy-friendly frontends that the user chooses.
- **Permission justifications:** none; the extension requests no permissions.
- **Remote code:** No, I am not using remote code.
- **Data usage:** tick no data types, then tick the three certifications.
- **Privacy policy URL:** https://github.com/tarbib/permissionless-privacy-redirect/blob/main/PRIVACY.md

## Package

```sh
zip -r permissionless-privacy-redirect.zip manifest.json background.js sites.js popup.html popup.js go.html go.js brave.html brave.js icons -x icons/logo.svg
```
