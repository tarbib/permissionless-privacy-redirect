// Sites the extension can redirect, each to an instance of a privacy-friendly
// frontend that you choose in the popup.
//
// - hosts: optional host permissions, requested only when you switch the site on.
// - redirects: [regex, path] pairs (RE2 syntax). A top-level navigation whose
//   URL matches the regex goes to <instance><path>, with \1, \2… filled in from
//   the regex groups. They only match content pages, so login, password-reset
//   and OAuth links stay on the original site.
// - keep: pages that are never redirected, even if a redirect matches.
// - instance: suggested instance, one that worked when this list was updated.
//
// Rule ids are <site id> * 100 + n, so never reuse or renumber an id.
export const SITES = [
  {
    id: 1, name: 'YouTube', frontend: 'Invidious', instance: 'https://invidious.tiekoetter.com',
    hosts: ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'],
    redirects: [
      [String.raw`^https?://(?:www\.|m\.)?youtube\.com/((?:watch|shorts/|@|channel/|c/|user/|playlist|results).*)`, String.raw`/\1`],
      [String.raw`^https?://youtu\.be/([\w-]+)\??(.*)`, String.raw`/watch?v=\1&\2`],
    ],
  },
  {
    id: 2, name: 'X / Twitter', frontend: 'Nitter', instance: 'https://nitter.tiekoetter.com',
    hosts: ['x.com', 'www.x.com', 'twitter.com', 'www.twitter.com'],
    redirects: [[String.raw`^https?://(?:www\.)?(?:x|twitter)\.com/(\w+/status/.*)`, String.raw`/\1`]],
  },
  {
    id: 3, name: 'Reddit', frontend: 'Redlib', instance: 'https://safereddit.com',
    hosts: ['reddit.com', 'www.reddit.com', 'old.reddit.com'],
    redirects: [[String.raw`^https?://(?:www\.|old\.)?reddit\.com/((?:r|u|user)/.*)`, String.raw`/\1`]],
  },
  {
    id: 4, name: 'Instagram', frontend: 'Proxigram',
    hosts: ['instagram.com', 'www.instagram.com'],
    // Posts, reels and profiles; the query (share tracking) is dropped.
    redirects: [[String.raw`^https?://(?:www\.)?instagram\.com/((?:p|reel|tv)/[\w-]+|[\w.]+)/?(?:\?.*)?$`, String.raw`/\1`]],
  },
  {
    id: 5, name: 'TikTok', frontend: 'ProxiTok',
    hosts: ['tiktok.com', 'www.tiktok.com'],
    redirects: [[String.raw`^https?://(?:www\.)?tiktok\.com/(@[\w.-]+(?:/video/\d+)?)/?(?:\?.*)?$`, String.raw`/\1`]],
  },
  {
    id: 6, name: 'Wikipedia', frontend: 'Wikiless', instance: 'https://wikiless.tiekoetter.com',
    hosts: ['*.wikipedia.org'],
    redirects: [[String.raw`^https?://([a-z-]+)\.(?:m\.)?wikipedia\.org/wiki/([^?]*).*`, String.raw`/wiki/\2?lang=\1`]],
    keep: [String.raw`^https?://[a-z-]+\.(?:m\.)?wikipedia\.org/wiki/Special:`],
  },
  {
    id: 7, name: 'Medium', frontend: 'Scribe', instance: 'https://scribe.rip',
    hosts: ['medium.com'],
    // Articles only: their last path segment ends in a 12-hex-digit post id.
    redirects: [[String.raw`^https?://medium\.com/([^?]+-[0-9a-f]{12}(?:\?.*)?)$`, String.raw`/\1`]],
  },
  {
    id: 8, name: 'Stack Overflow', frontend: 'AnonymousOverflow', instance: 'https://overflow.hostux.net',
    hosts: ['stackoverflow.com'],
    redirects: [[String.raw`^https?://stackoverflow\.com/(questions/\d+.*)`, String.raw`/\1`]],
  },
  {
    id: 9, name: 'Imgur', frontend: 'Rimgo', instance: 'https://rimgo.privacyredirect.com',
    hosts: ['imgur.com', 'i.imgur.com'],
    redirects: [
      [String.raw`^https?://imgur\.com/((?:a|gallery)/.*)`, String.raw`/\1`],
      [String.raw`^https?://i\.imgur\.com/(.*)`, String.raw`/\1`],
    ],
  },
  {
    id: 10, name: 'IMDb', frontend: 'libremdb', instance: 'https://libremdb.pussthecat.org',
    hosts: ['imdb.com', 'www.imdb.com', 'm.imdb.com'],
    redirects: [[String.raw`^https?://(?:www\.|m\.)?imdb\.com/((?:title|name)/.*)`, String.raw`/\1`]],
  },
  {
    id: 11, name: 'Quora', frontend: 'Quetre',
    hosts: ['quora.com', 'www.quora.com'],
    // Questions, answers and profiles; the query (tracking ids) is dropped.
    redirects: [[String.raw`^https?://(?:www\.)?quora\.com/((?:profile/)?[^/?]+-[^/?]+(?:/answer/[^/?]+)?)/?(?:\?.*)?$`, String.raw`/\1`]],
  },
  {
    id: 12, name: 'Fandom', frontend: 'BreezeWiki', instance: 'https://breezewiki.com',
    hosts: ['*.fandom.com'],
    redirects: [[String.raw`^https?://([\w-]+)\.fandom\.com/wiki/(.*)`, String.raw`/\1/wiki/\2`]],
    keep: [String.raw`^https?://[\w-]+\.fandom\.com/wiki/Special:`],
  },
  {
    id: 13, name: 'Genius', frontend: 'Dumb',
    hosts: ['genius.com'],
    redirects: [[String.raw`^https?://genius\.com/([\w%-]+-lyrics)(?:\?.*)?$`, String.raw`/\1`]],
  },
  {
    id: 14, name: 'Bandcamp', frontend: 'Tent', instance: 'https://tent.sny.sh',
    hosts: ['*.bandcamp.com'],
    redirects: [
      [String.raw`^https?://([\w-]+)\.bandcamp\.com/(album|track)/([\w-]+).*`, String.raw`/release.php?artist=\1&type=\2&name=\3`],
      [String.raw`^https?://([\w-]+)\.bandcamp\.com/(?:music)?/?(?:\?.*)?$`, String.raw`/artist.php?name=\1`],
    ],
    keep: [String.raw`^https?://(?:www|daily)\.bandcamp\.com/`],
  },
  {
    id: 15, name: 'GitHub', frontend: 'GotHub', instance: 'https://gothub.r4fo.com',
    hosts: ['github.com'],
    redirects: [[String.raw`^https?://github\.com/([\w.-]+/[\w.-]+(?:/(?:tree|blob)/.*)?)/?(?:\?.*)?$`, String.raw`/\1`]],
    // Two-segment account URLs (e.g. /password_reset/<token>) look like /<owner>/<repo>.
    // Kept short: Chrome rejects regexes over 2KB compiled, and one bad rule rejects them all.
    keep: [String.raw`^https?://github\.com/(?:login|logout|sessions?|password_reset|settings|signup|join|account|orgs|users)(?:[/?]|$)`],
  },
  {
    id: 16, name: 'Google Translate', frontend: 'SimplyTranslate', instance: 'https://simplytranslate.org',
    hosts: ['translate.google.com'],
    // SimplyTranslate only takes text by POST, so this opens its home page.
    redirects: [[String.raw`^https?://translate\.google\.com/.*`, '/']],
  },
];

// The redirect rules double as the settings store (no "storage" permission):
// each site's instance is read back from its rules.
export async function loadInstances() {
  const instances = {};
  for (const rule of await chrome.declarativeNetRequest.getDynamicRules()) {
    const target = rule.action.redirect?.regexSubstitution;
    if (target) instances[Math.floor(rule.id / 100)] = new URL(target).origin;
  }
  return instances;
}

export async function saveInstances(instances) {
  const existing = await chrome.declarativeNetRequest.getDynamicRules();
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: existing.map((rule) => rule.id),
    addRules: SITES.filter((site) => instances[site.id]).flatMap((site) => {
      let id = site.id * 100;
      const rule = (priority, action, regexFilter) =>
        ({ id: ++id, priority, action, condition: { regexFilter, resourceTypes: ['main_frame'] } });
      return [
        ...site.redirects.map(([regex, path]) =>
          rule(1, { type: 'redirect', redirect: { regexSubstitution: instances[site.id] + path } }, regex)),
        ...(site.keep ?? []).map((regex) => rule(2, { type: 'allow' }, regex)),
      ];
    }),
  });
}
