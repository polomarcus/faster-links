'use strict';

//Twitter
var allShortLinks = document.querySelectorAll('.js-display-url');
for(var i = 0; i < allShortLinks.length; i++){
	var parentNode = allShortLinks[i].parentNode;
	var fullURL = parentNode.getAttribute('data-expanded-url');
	parentNode.setAttribute('href', fullURL);
	parentNode.innerHTML = fullURL;
}