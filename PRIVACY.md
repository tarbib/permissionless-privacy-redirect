# Privacy

Permissionless Privacy Redirect requests no permissions, collects nothing and makes no network requests of its own.

- It has no access to your tabs, browsing history or any website. It only sees the links you give it, by typing `pr` and a link in the address bar or pasting one in its popup.
- Your settings (instances, and which sites are on) are kept in the extension's local storage on your device, not synced.

## What the frontends see

A link you open goes straight to the frontend instance. That instance, run by a third party unless you host it yourself, sees the page address and your IP address. The original site isn't contacted. Pick instances you trust; you can change them in the popup.
