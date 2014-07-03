function checkPage(tabId) {
    chrome.tabs.sendRequest(tabId, {}, undefined);
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
    if (change.status == 'complete') {
        checkPage(tabId);
    }
});