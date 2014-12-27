(function(window) {
  "use strict";

  var karma = window.__karma__;

  // Put Karma into an asynchronous waiting mode until we have loaded our
  // tests.
  karma.loaded = function() {};

  // Set the application endpoint.
  require.config({
    baseUrl: "base/app"
  });

  var specs = Object.keys(karma.files)
    // Convert the files object to an array of file paths.
    .map(function(id) { return karma.files[id]; })
    // Tests that end with `.spec.js' and existing either `app` or `test`
    // directories are automatically loaded.
    .filter(function(file) {
      return /^\/base\/(app|test)\/.*\.spec\.js$/.test(file);
    });

  // Load all specs and start Karma.
  require(specs, karma.start);
})(this);
