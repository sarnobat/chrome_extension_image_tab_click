document.body.addEventListener('click', function(arg1, arg2) {
	console.debug("Element was clicked: " + arg1.path[0].tagName);
	var event = arg1;
	if (event.altKey) {
		if ('img' === arg1.path[0].tagName.toLowerCase()) {
			window.open(arg1.path[0].src);
		}
	}
}, true);
