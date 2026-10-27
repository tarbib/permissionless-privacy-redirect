import { SITES, loadInstances, saveInstances } from './sites.js';

const instances = await loadInstances();
const list = document.getElementById('sites');

for (const site of SITES) {
  const origins = site.hosts.map((host) => `*://${host}/*`);

  const instance = document.createElement('input');
  instance.value = instances[site.id] ?? '';
  instance.placeholder = `${site.frontend} instance, e.g. https://…`;
  instance.spellcheck = false;
  instance.setAttribute('aria-label', `${site.frontend} instance`);
  instance.oninput = () => instance.setCustomValidity('');
  instance.onchange = async () => {
    try {
      const url = new URL(instance.value.includes('://') ? instance.value : `https://${instance.value}`);
      if (!/^https?:$/.test(url.protocol)) throw new Error();
      instances[site.id] = instance.value = url.origin;
    } catch {
      instance.setCustomValidity('Enter an address like https://example.org');
      instance.reportValidity();
      return;
    }
    await saveInstances(instances);
  };

  // A site is on when the browser has granted access to it: its redirect
  // rules can't fire without that access.
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.checked = await chrome.permissions.contains({ origins });
  toggle.onchange = async () => {
    if (toggle.checked && !instances[site.id]) {
      toggle.checked = false;
      instance.setCustomValidity(`Enter a ${site.frontend} instance first`);
      instance.reportValidity();
      return;
    }
    if (toggle.checked) await chrome.permissions.request({ origins });
    else await chrome.permissions.remove({ origins });
    toggle.checked = await chrome.permissions.contains({ origins });
  };

  const label = document.createElement('label');
  label.append(toggle, `${site.name} → ${site.frontend}`);
  list.append(label, instance);
}
