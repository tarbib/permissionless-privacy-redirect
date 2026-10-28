// Address-bar keyword: type "pr", a space and a link to open it in its frontend.
chrome.omnibox.setDefaultSuggestion({ description: 'Open in its privacy-friendly frontend' });
chrome.omnibox.onInputEntered.addListener((text, disposition) => {
  // go.html does the work: only extension pages can read the saved instances.
  const url = chrome.runtime.getURL(`go.html#${encodeURIComponent(text)}`);
  if (disposition === 'currentTab') chrome.tabs.update({ url });
  else chrome.tabs.create({ url, active: disposition === 'newForegroundTab' });
});
