(function () {
  'use strict';

  describe('API tests', function() {
    it('should parse API response', function() {
      var apiResponse = '[test,test2]';
      var arrayToTest = parseAPIResponse(apiResponse);

        assert.equal(arrayToTest[0], 'test');
        assert.equal(arrayToTest[1], 'test2');
    });

    it('should remove " from API response URL', function() {
      var apiResponseURL = '"http://test.com"';

      assert.equal(cleanAPIURL(apiResponseURL), 'http://test.com');
    });
  });

  describe('Tweeter tests', function () {
    it('should have a hostname variable', function () {
      assert.equal(hostname, 'localhost');
    });

    it('should remove protocol chars', function () {
      var url = 'http://www.fake.it';
      assert.equal(removeProtocol(url), 'fake.it');
    });

    it('should tell if this is a url', function () {
      var url = 'http://www.fake.it';
      var fakeURL = 'FAKE';

      assert.equal(isURL(url), true);
      assert.equal(isURL(fakeURL), false);
    });


    it('should tell if this is a url', function () {
      var url = 'http:\/\/www.fake.it';
      var fakeURL = 'FAKE';

      assert.equal(replaceBackSlash(url), 'http://www.fake.it');
    });


    it('should add a class to a HTML element', function () {
      var tweet = document.querySelector('#testExtension');
      assert.equal(tweet.getAttribute('class'), 'twitter-timeline-link');

      addClass(tweet, 'test');

      assert.equal(tweet.getAttribute('class'), 'twitter-timeline-link test');
    });

    it('should replace t.co link with real profile URL', function () {
     var profileURL = document.querySelector('.ProfileHeaderCard-urlText a');
     assert.equal(profileURL.getAttribute('href'), 'http://t.co/jJkLxp36yI');

     toCoBioURL();

     profileURL = document.querySelector('.ProfileHeaderCard-urlText a');
     assert.equal(profileURL.getAttribute('href'), 'http://www.wake-me-up.co');
    });

    it('should remove every t.co URLs with their real URLs', function () {
      var tweet = document.querySelector('#testExtension');
      tweet.setAttribute('href', 'http://t.co/fdmQ6yXo8G');

      tCoUrls();

      //now we check that we do not have http://t.co/fdmQ6yXo8G anymore
      assert.equal(tweet.getAttribute('href'), 'http://www.wake-me-up.co');
    });

    it('should change href and innerHTML', function () {
      var tweet = document.querySelector('#testExtension');
      tweet.setAttribute('href', 'http://t.co/fdmQ6yXo8G');

      changeNodeView(tweet, 'http://awesome_url.com');

      assert.equal(tweet.getAttribute('href'), 'http://awesome_url.com');
      assert.equal(tweet.innerHTML, 'awesome_url.com');
    });
  });
})();
