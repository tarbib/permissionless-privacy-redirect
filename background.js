import { SITES, loadInstances, saveInstances } from './sites.js';

// Redirect rules are applied by the browser itself and survive restarts, so
// this only runs on install/update: it rebuilds them with the current patterns,
// keeping your instances and suggesting one where none is set yet.
chrome.runtime.onInstalled.addListener(async () => {
  const instances = await loadInstances();
  for (const site of SITES) instances[site.id] ??= site.instance;
  await saveInstances(instances);
});
