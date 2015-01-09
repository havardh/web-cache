'use strict';

var console = chrome.extension.getBackgroundPage().console;


register('google', 'http://webcache.googleusercontent.com/search?q=cache:'); 
register('way-back', 'https://web.archive.org/web/*/');

function register(id, prefix) {
  document.getElementById(id).addEventListener('click', function() {
    chrome.windows.getCurrent(function(window) {
      chrome.tabs.query({
        active: true,
        windowId: window.id
      } , function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        var index = tab.index + 1;
        chrome.tabs.create({
          url: prefix + url,
          index: index
        });

      });

    });
  });
}
