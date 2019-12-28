chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({'url': chrome.extension.getURL('f.html')}, function(tab) {
      // Tab opened.
    });
  });