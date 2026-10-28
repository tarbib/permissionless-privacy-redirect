import { activeInstances, frontendUrl, loadSettings } from './sites.js';

const link = decodeURIComponent(location.hash.slice(1));
const target = frontendUrl(link, activeInstances(loadSettings()));
if (target) location.replace(target);
else document.body.textContent = `Permissionless Privacy Redirect has no frontend for "${link}". Check that it's a link to a supported site, and that the site is turned on in the popup.`;
