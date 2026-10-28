// Sites whose links Permissionless Privacy Redirect can open in a privacy-friendly frontend,
// on the instance you set in the popup.
//
// - hosts: the site's addresses.
// - redirects: [regex, path] pairs. A link matching the regex opens at
//   <instance><path>, with \1, \2… filled in from the regex groups. Other links
//   to the site (login, password-reset, account pages…) open the instance's
//   home page instead, so tokens in them are never passed on.
// - keep: links that always go to the home page, even if a redirect matches.
// - instance: suggested instance, one that worked when this list was updated.
//
// `id`s key the saved instances, so never reuse or renumber one.
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
    redirects: [
      [String.raw`^https?://(?:www\.)?(?:x|twitter)\.com/(\w+/status/.*)`, String.raw`/\1`],
      [String.raw`^https?://(?:www\.)?(?:x|twitter)\.com/(\w+)/?(?:\?.*)?$`, String.raw`/\1`],
    ],
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
    keep:[String.raw`^https?://github\.com/(?:login|logout|sessions?|password_reset|settings|signup|join|account|orgs|users)(?:[/?]|$)`],
  },
  {
    id: 16, name: 'Google Translate', frontend: 'SimplyTranslate', instance: 'https://simplytranslate.org',
    hosts: ['translate.google.com'],
    // SimplyTranslate only takes text by POST, so this opens its home page.
    redirects: [[String.raw`^https?://translate\.google\.com/.*`, '/']],
  },
];

// The frontend URL for a link, or null if it isn't on a supported site that
// has an instance set.
export function frontendUrl(link, instances) {
  const text = link.trim();
  let url;
  try {
    url = new URL(text.includes('://') ? text : `https://${text}`);
  } catch {
    return null;
  }
  const site = SITES.find((s) => s.hosts.some((host) => (host.startsWith('*.')
    ? url.hostname === host.slice(2) || url.hostname.endsWith(host.slice(1))
    : url.hostname === host)));
  const instance = site && instances[site.id];
  if (!instance) return null;
  const matches = (regex) => new RegExp(regex, 'i').test(url.href);
  if (!site.keep?.some(matches)) {
    for (const [regex, path] of site.redirects) {
      if (matches(regex)) return url.href.replace(new RegExp(regex, 'i'), instance + path.replace(/\\(\d)/g, '$$$1'));
    }
  }
  return `${instance}/`;
}

// Settings are kept in the extension's own localStorage: no permission needed.
// `instances` maps site ids to instance URLs; `off` holds the ids of sites you
// turned off.
export function loadSettings() {
  const saved = JSON.parse(localStorage.getItem('instances') ?? '{}');
  return {
    instances: Object.fromEntries(SITES.map((site) => [site.id, saved[site.id] ?? site.instance ?? ''])),
    off: new Set(JSON.parse(localStorage.getItem('off') ?? '[]')),
  };
}

export function saveSettings({ instances, off }) {
  localStorage.setItem('instances', JSON.stringify(instances));
  localStorage.setItem('off', JSON.stringify([...off]));
}

// The instances of the sites that are turned on.
export function activeInstances({ instances, off }) {
  return Object.fromEntries(SITES.map((site) => [site.id, off.has(site.id) ? '' : instances[site.id]]));
}

// Brave can run a small script on pages (Shields > Content filtering > Custom
// scriptlets), which an extension without permissions can't. This builds one
// from your settings: on other pages it rewrites links to supported sites as
// you click them, so the original site is never contacted; on a supported site
// itself it moves to the frontend as the page starts loading. Only content
// pages are converted, so account pages keep working.
export function braveScriptlet(settings) {
  const instances = activeInstances(settings);
  const rules = SITES.filter((site) => instances[site.id]).flatMap((site) => site.redirects.map(
    ([regex, path]) => [regex, instances[site.id] + path.replace(/\\(\d)/g, '$$$1'), site.keep ?? []]));
  return `(() => {
  const rules = ${JSON.stringify(rules)};
  const convert = (href) => {
    for (const [regex, target, keep] of rules) {
      const re = new RegExp(regex, 'i');
      if (re.test(href) && !keep.some((k) => new RegExp(k, 'i').test(href))) return href.replace(re, target);
    }
    return null;
  };
  const here = convert(location.href);
  if (here) return location.replace(here);
  const rewrite = (event) => {
    const link = event.target.closest && event.target.closest('a[href]');
    const target = link && convert(link.href);
    if (target) link.href = target;
  };
  addEventListener('click', rewrite, true);
  addEventListener('auxclick', rewrite, true);
})();
`;
}

// Brave filter rules must name the sites they apply to: common search engines,
// whose result links get rewritten, plus the supported sites themselves.
const SEARCH_ENGINES = ['duckduckgo.com', 'google.com', 'bing.com', 'search.brave.com', 'startpage.com', 'ecosia.org', 'kagi.com'];

export function braveRule(settings) {
  const instances = activeInstances(settings);
  const sites = SITES.filter((site) => instances[site.id]).flatMap((site) => site.hosts.map((host) => host.replace(/^\*\./, '')));
  return `${[...new Set([...SEARCH_ENGINES, ...sites])].join(',')}##+js(user-permissionless-redirect.js)`;
}
