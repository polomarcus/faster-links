# Faster links - Chrome extension
Short URLs are a cool way to respect the *140 characters limit* on *witter* for example, but they *bring several issues* with them :
* Performance : due to redirections, we can *lose several seconds before landing* to our page
* Security : We cannot see the real links directly, can the website be *trust*? Is it *reliable*? 

## Download
Chrome webstore link : https://chrome.google.com/webstore/detail/ojggkiabpbjlckhpaphgdhhojgcpimah/publish-accepted

## Develop 
Most of information can be found here : https://github.com/yeoman/generator-chrome-extension

## Tests
All tests are located here : test/spec/test.js and use http://mochajs.org/
 
To execute them :
```
grunt test
```

## What's next ?
Right now, this extension only makes Twitter faster (t.co URLs).
It would be cool to add these APIs:
* https://bitly.com/
* http://unshorten.it/api

### Copyright
GNU GENERAL PUBLIC LICENSE

Icon from https://www.iconfinder.com/icons/353839/chain_link_seo_icon#size=128 under Creative Commons (Attribution 3.0 Unported)