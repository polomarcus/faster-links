# Faster links - Chrome extension 
![CodeShip status](https://codeship.com/projects/4e9da340-5350-0133-0aa6-76919038d6b2/status?branch=master) [![Build Status](https://travis-ci.org/polomarcus/faster-links.svg?branch=master)](https://travis-ci.org/polomarcus/faster-links) [![codecov.io](https://codecov.io/github/polomarcus/faster-links/coverage.svg?branch=master)](https://codecov.io/github/polomarcus/faster-links?branch=master)
## Download
Chrome webstore link : https://chrome.google.com/webstore/detail/ojggkiabpbjlckhpaphgdhhojgcpimah
## For all you shortened URLs haters!

**TL,DR** : 

Remove all shortened URLs with the real URLs to **save precious seconds** and finally know **where we click.** for [Twitter](http://twitter.com/) and [TweetDeck](https://tweetdeck.twitter.com)



Twitter **redirects every URLs to t.co** in order to track clicks, OK cool, why not, but it makes us *waste some precious seconds* of our life everytime we click on a link on Twitter.
To counter that, this extension **replaces all links with a t.co redirect** and **all shortened URLS** (bit.ly and so on) with their **real URLs**, and also **display the full URL** on the tweet because **who gives a f. about the 140 chars limit** on Tweeter?




## Without Faster links
![alt tag](https://raw.githubusercontent.com/polomarcus/faster-links/master/app/images/TweetWithoutFasterLink.png)
## With Faster links
![alt tag](https://raw.githubusercontent.com/polomarcus/faster-links/master/app/images/TweetWithFasterLink.png)

## Develop 
```
grunt watch
```

Code here : https://github.com/polomarcus/faster-links/tree/master/app/scripts.babel

Most of information can be found here : https://github.com/yeoman/generator-chrome-extension

## Tests
All tests are located here : test/spec/test.js and use http://mochajs.org/
 
Execute them :
```
grunt test
```

## What's next ?
Right now, this extension only makes Twitter faster (t.co URLs).
It would be cool to add these APIs for other websites :
* https://bitly.com/
* http://unshorten.it/api

## Credit
LinksPeelr API : https://github.com/ibagrak/linkpeelr

### Copyright
GNU GENERAL PUBLIC LICENSE

Icon from https://www.iconfinder.com/icons/353839/chain_link_seo_icon#size=128 under Creative Commons (Attribution 3.0 Unported)
