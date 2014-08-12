module('Store');

test('Ember Data version', function() {
  equal(DS.VERSION, '1.0.0-beta.8.2a68c63a');
});

test('store uses DS.LSAdapter', function() {
  var store = App.__container__.lookup('store:main');
  var adapter = store.adapterFor('application');
  var name = adapter.constructor.toString();

  equal(name, 'DS.FixtureAdapter');
});
