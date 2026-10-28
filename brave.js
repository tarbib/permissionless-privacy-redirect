import { braveRule, braveScriptlet, loadSettings } from './sites.js';

const settings = loadSettings();
document.getElementById('scriptlet').value = braveScriptlet(settings);
document.getElementById('rule').value = braveRule(settings);

for (const button of document.querySelectorAll('[data-copy]')) {
  button.onclick = async () => {
    const box = document.getElementById(button.dataset.copy);
    try {
      await navigator.clipboard.writeText(box.value);
      button.textContent = 'Copied';
    } catch {
      box.select(); // copying failed: leave it selected for Cmd+C
    }
  };
}
