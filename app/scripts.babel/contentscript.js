'use strict';
/**
 * This script is executed on the DOM
 **/

//@TODO create HTMLService APIService

//Used to mark already done HTML a tags
var fasterLinksClass = 'fasterLinks';

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}


/**
 * remove http(s) and www from a URL
 **/
function removeProtocol(string){
  return string.replace('https://', '').replace('http://', '').replace('www.', '');
}


function replaceBackSlash(str) {
  while(str.indexOf('\\') !== -1){
    str = str.replace('\\', '');
  }

  return str;
}

function parseAPIResponse(apiReponse) {
  return apiReponse.replace('[', '').replace(']', '').split(',');
}

/**
 * remove spare ' from the URL
 * @param APIurl
 * @returns {string|void|XML}
 */
function cleanAPIURL(APIurl) {
  return APIurl.replace(new RegExp('"', 'g'), '');
}


function changeNodeView(element, fullURL) {
  element.setAttribute('href', fullURL);
  element.innerHTML = removeProtocol(fullURL);
}


function manageAPIResponse(element, apiReponse) {
  var apiURL =  parseAPIResponse(apiReponse);
  var realURL= cleanAPIURL(apiURL[1]);

  realURL = replaceBackSlash(realURL);

  changeNodeView(element,realURL);
}

function ajaxQuery(element, shortURL) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
      if(xmlhttp.status === 200){
        manageAPIResponse(element, xmlhttp.responseText);
      }
    }
  };

  xmlhttp.open('GET', 'https://linkpeelr.appspot.com/api?action=peel_all&url=' + shortURL + '&where=twitter.com&version=2.0.3', true);
  xmlhttp.send();
}

//http://linkpeelr.appspot.com/api?action=peel_all&url=http://bit.ly/1MbRrLt&where=twitter.com&version=2.0.3
//Preview 1 to get the URL
function shortURLGetter(element, shortURL){
  console.log('element', element);
  console.log('shortURL', shortURL);

  addClass(element, fasterLinksClass);
  ajaxQuery(element, shortURL);
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

      changeNodeView(parentNode, fullURL);
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

function isURL(url){
  return url !== '' && url !== null && (url.indexOf('http') !== -1 || url.indexOf('www')  !== -1);
}

function getallATags(){
  var aTags = document.querySelectorAll('.TweetTextSize a:not(.' + fasterLinksClass + ')');
  for(var i = 0; i < aTags.length; i++) {
    var url = aTags[i].getAttribute('href');

    if(isURL(url)){
      if(!url.match('t.co')) {
        shortURLGetter(aTags[i], url);
      }
    }
  }
}

var hostname = window.location.hostname;

switch (hostname) {
  case 'twitter.com':
    tCoUrls();
    getallATags();

    toCoBioURL(); //only once

    setInterval(tCoUrls, 3000); //SetInterval is used for infinite scroll on twitter
    setInterval(getallATags, 3000); //SetInterval is used for infinite scroll on twitter

    break;
  default:
    getallATags();
    setInterval(getallATags, 3000); //SetInterval is used for infinite scroll
    break;
}