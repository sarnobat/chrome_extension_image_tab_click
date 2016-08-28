document.body.addEventListener('click', function(arg1, arg2) {
//	console.debug('mouse was clicked: ' + arg1);
	console.debug(arg1.path[0]);
	window.open(arg1.path[0].src);
}, true);
