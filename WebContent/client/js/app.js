
define(["backbone", "backbone.marionette", "router", "models/user/UserModel", "views/login/LoginView", "views/desktop/DesktopView", "views/logo/LogoView"], function(Backbone, Marionette, Router, UserModel, LoginView, DesktopView, LogoView) {
  "use strict";

  var app;
  app = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {
      loginView: new LoginView(),
      desktopView: new DesktopView(),
      logoView: new LogoView()
    }
  });
  app.addRegions({
    logo: "#logo",
    mainRegion: "#page"
  });
  app.addInitializer(function() {
    this.app_router = new Router(this);
    return Backbone.history.start();
  });
  return app;
});
