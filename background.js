chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  //sendResponse({farewell:"goodbye"});
  //console.debug(arg1);
  chrome.tabs.create({ url: message.url, selected: false });
});

chrome.browserAction.onClicked.addListener(function(tab) {
	//alert();
});
