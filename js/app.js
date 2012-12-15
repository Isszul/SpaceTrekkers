// Filename: app.js
define([
  'backbone.marionette',
  'router' // Request router.js
], function(Marionette, Router){


  "use strict";

  var app = new Marionette.Application();

  app.addRegions({
    mainRegion: '#page'
  });

  app.addInitializer(function() {
      var app_router = new Router(this);
      Backbone.history.start();
  });

  return app;


});
