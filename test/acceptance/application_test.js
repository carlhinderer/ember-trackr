module('Application', {
  setup: function() {
    App.reset();
  }
});

test('footer', function() {
  visit('/').then(function() {
    var year = new Date().getFullYear();
    var expect = 'Copyright © ' + year + ' EmberTrackr Inc.';
    var actual = $.trim(find('footer').text());

    equal(actual, expect);
  });
});
