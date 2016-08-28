document.body.addEventListener('click', function(arg1, arg2) {
	console.debug("Element was clicked: " + arg1.path[0].tagName);
	var event = arg1;
	if (event.altKey) {
		if ('img' === arg1.path[0].tagName.toLowerCase()) {
			//window.open(arg1.path[0].src,'_blank');
			// TODO: to open it in a background tab, do this
			// in your background.js:
			//chrome.tabs.create({ url: arg1.path[0].src });
			
			chrome.runtime.sendMessage({ url : arg1.path[0].src}, function(response) {
			  //console.log(response.farewell);
			});
		}
	}
}, true);
