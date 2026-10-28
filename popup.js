import { SITES, activeInstances, frontendUrl, loadSettings, saveSettings } from './sites.js';

const settings = loadSettings();
const { instances, off } = settings;

const link = document.getElementById('link');
link.oninput = () => link.setCustomValidity('');
link.onkeydown = (event) => {
  if (event.key !== 'Enter') return;
  const target = frontendUrl(link.value, activeInstances(settings));
  if (target) {
    chrome.tabs.create({ url: target });
  } else {
    link.setCustomValidity('Not a link to a site below that is turned on');
    link.reportValidity();
  }
};

const list = document.getElementById('sites');
for (const site of SITES) {
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  const instance = document.createElement('input');
  instance.value = instances[site.id];
  instance.placeholder = `${site.frontend} instance, e.g. https://…`;
  instance.spellcheck = false;
  instance.setAttribute('aria-label', `${site.frontend} instance`);

  // A site is on when it has an instance and you haven't turned it off.
  const showState = () => { toggle.checked = Boolean(instances[site.id]) && !off.has(site.id); };
  showState();

  toggle.onchange = () => {
    if (toggle.checked && !instances[site.id]) {
      toggle.checked = false;
      instance.setCustomValidity(`Enter a ${site.frontend} instance first`);
      instance.reportValidity();
      return;
    }
    if (toggle.checked) off.delete(site.id);
    else off.add(site.id);
    saveSettings(settings);
  };

  instance.oninput = () => instance.setCustomValidity('');
  instance.onchange = () => {
    const value = instance.value.trim();
    if (value) {
      try {
        const url = new URL(value.includes('://') ? value : `https://${value}`);
        if (!/^https?:$/.test(url.protocol)) throw new Error();
        instance.value = url.origin;
      } catch {
        instance.setCustomValidity('Enter an address like https://example.org');
        instance.reportValidity();
        return;
      }
    }
    instances[site.id] = instance.value;
    saveSettings(settings);
    showState();
  };

  const label = document.createElement('label');
  label.append(toggle, `${site.name} → ${site.frontend}`);
  const row = document.createElement('div');
  row.className = 'site';
  row.append(label, instance);
  list.append(row);
}
