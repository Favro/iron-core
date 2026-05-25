Package.describe({
  name: 'iron:core',
  summary: 'Iron namespace and utilities.',
  version: '1.0.11',
  git: 'https://github.com/iron-meteor/iron-core'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@3.4');

  // dependencies
  api.use('underscore');
  api.use('ejson'); // for cloning

  api.addFiles('lib/version_conflict_error.js');
  api.addFiles('lib/iron_core.js');

  // symbol exports
  api.export('Iron');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@3.4');
  api.use('iron:core');
  api.use('tinytest');
  api.use('test-helpers');
  api.addFiles('test/iron_core_test.js');
});
