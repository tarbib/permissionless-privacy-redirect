# Privacy

PrivacyRedirect+ collects nothing, stores nothing and makes no network requests of its own.

- It installs with access to no websites, and can act only on the sites you switch on.
- It has no background script and no code that reads URLs, pages, tabs or history. Redirects are rules the browser applies itself.
- The only state is which sites you've switched on, which the browser keeps as granted permissions.

## What the frontends see

A redirected page is loaded from the frontend instead of the original site. That instance, run by a third party unless you host it yourself, sees the page address and your IP address, as the original site would have. The original site gets nothing for that page load. Pick instances you trust; they're listed in `rules.json`.
