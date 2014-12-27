define(function(require, exports, module) {
  "use strict";

  var Backbone = require("backbone");
  var Router = require("./router");

  // Patch Backbone to work with jQuery.
  Backbone.$ = require("jquery");

  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  var router = new Router();

  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.
  Backbone.history.start({ pushState: true, root: "/" });
});
