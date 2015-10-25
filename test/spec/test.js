(function () {
  'use strict';

  describe('Tweeter tests', function () {
    it('should have a hostname variable', function () {
      assert.equal(hostname, 'localhost');
    });

    it('should remove protocol chars', function () {
      var url = 'http://www.fake.it';
      assert.equal(removeProtocol(url), 'fake.it');
    });

    it('should replace t.co link with real profile URL', function () {
     var profileURL = document.querySelector('.ProfileHeaderCard-urlText a');
     assert.equal(profileURL.getAttribute('href'), 'http://t.co/jJkLxp36yI');

     toCoBioURL()

     profileURL = document.querySelector('.ProfileHeaderCard-urlText a');
     assert.equal(profileURL.getAttribute('href'), 'http://www.wake-me-up.co');
    });

    it('should remove every t.co URLs with their real URLs', function () {
      var tweet = document.querySelector('#testExtension');
      assert.equal(tweet.getAttribute('href'), 'http://t.co/fdmQ6yXo8G');

      tCoUrls();

      //now we check that we do not have http://t.co/fdmQ6yXo8G anymore
      tweet = document.querySelector('#testExtension');
      assert.equal(tweet.getAttribute('href'), 'http://www.wake-me-up.co');
    });
  });
})();
