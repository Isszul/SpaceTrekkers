
define(["backbone", "jquery", "atmosphere", "backbone.marionette", "router", "modules/user/UserModule", "modules/desktop/DesktopModule", "views/navbar/NavBarView"], function(Backbone, $, Atmosphere, Marionette, Router, UserModule, DesktopModule, NavBarView) {
  "use strict";

  var app;
  app = new Marionette.Application({
    Models: {},
    Modules: {},
    Layouts: {},
    Collections: {},
    Views: {
      navBarView: new NavBarView()
    },
    SocketIO: null,
    loadModules: function() {
      return this.module("DesktopModule", DesktopModule);
    }
  });
  app.addRegions({
    navBar: "#navBar",
    mainRegion: "#mainRegion"
  });
  app.addInitializer(function() {
    this.app_router = new Router(this);
    this.SocketIO = $.atmosphere.subscribe({
      url: document.location.toString() + 'chat',
      contentType: "application/json",
      logLevel: 'debug',
      transport: 'websocket',
      fallbackTransport: 'long-polling'
    });
    return this;
  });
  return app;
});
