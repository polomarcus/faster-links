'use strict';
/**
 * This script is executed on the DOM
 * @TODO bit.ly
 **/

/**
 * remove http(s) and www from a URL
 **/
function removeProtocol(string){
  return string.replace('https://', '').replace('http://', '').replace('www.', '');
}

/**
 *  get all links on twitter, remove their t.co href in <a>
 *  display real URL in tweets
 **/
function tCoUrls(){
    //get all short URLs
    var allShortLinks = document.querySelectorAll('.js-display-url');
    for(var i = 0; i < allShortLinks.length; i++){
      //t.co case
      var parentNode = allShortLinks[i].parentNode;
      var fullURL = parentNode.getAttribute('data-expanded-url');
      parentNode.setAttribute('href', fullURL); //remove t.co from href
      parentNode.innerHTML = removeProtocol(fullURL);
    }
}

/**
 *  get bio links from twitter profiles, remove their t.co href in <a>
 **/
function toCoBioURL(){
    var bioLink = document.querySelector('.ProfileHeaderCard-urlText a');
    if(bioLink){
      var fullURL = bioLink.getAttribute('title');
      bioLink.setAttribute('href', fullURL);
    }
}

var hostname = window.location.hostname;

switch (hostname) {
  case 'twitter.com':
    tCoUrls();
    setInterval(tCoUrls, 3000); //SetInterval is used for infinite scroll on twitter

    toCoBioURL();

    break;
  default:
    break;
}
