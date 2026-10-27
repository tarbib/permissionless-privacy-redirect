// A site is "on" when the browser has granted access to it: the rules in
// rules.json can only redirect sites the extension has been given access to.
// Hosts must also be listed in manifest.json's optional_host_permissions.
const SITES = {
  'YouTube → Invidious': ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'],
  'Reddit → Redlib': ['reddit.com', 'www.reddit.com', 'old.reddit.com'],
  'X / Twitter → Nitter': ['x.com', 'www.x.com', 'twitter.com', 'www.twitter.com'],
  'Medium → Scribe': ['medium.com'],
  'Fandom → BreezeWiki': ['*.fandom.com'],
  'Imgur → Rimgo': ['imgur.com', 'i.imgur.com'],
  'Stack Overflow → AnonymousOverflow': ['stackoverflow.com'],
};

const list = document.getElementById('sites');

for (const [name, hosts] of Object.entries(SITES)) {
  const origins = hosts.map((host) => `*://${host}/*`);
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.checked = await chrome.permissions.contains({ origins });
  toggle.onchange = async () => {
    if (toggle.checked) await chrome.permissions.request({ origins });
    else await chrome.permissions.remove({ origins });
    toggle.checked = await chrome.permissions.contains({ origins });
  };

  const label = document.createElement('label');
  label.append(toggle, name);
  list.append(label);
}
