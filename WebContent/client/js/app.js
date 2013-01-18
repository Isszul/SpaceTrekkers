
define(["backbone", "jquery", "backbone.marionette", "router", "modules/user/UserModule", "modules/desktop/DesktopModule", "views/navbar/NavBarView"], function(Backbone, $, Marionette, Router, UserModule, DesktopModule, NavBarView) {
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
    return this;
  });
  return app;
});
