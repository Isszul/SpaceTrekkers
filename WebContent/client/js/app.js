
define(["backbone", "backbone.marionette", "router", "models/user/UserModel", "views/login/LoginView", "views/desktop/DesktopView", "views/navbar/NavBarView"], function(Backbone, Marionette, Router, UserModel, LoginView, DesktopView, NavBarView) {
  "use strict";

  var app;
  app = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {
      loginView: new LoginView(),
      desktopView: new DesktopView(),
      navBarView: new NavBarView()
    }
  });
  app.addRegions({
    navBar: "#navBar",
    mainRegion: "#mainRegion"
  });
  app.addInitializer(function() {
    this.app_router = new Router(this);
    return Backbone.history.start();
  });
  return app;
});
