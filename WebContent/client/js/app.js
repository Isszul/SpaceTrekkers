
define(["backbone", "backbone.marionette", "router", "models/user/UserModel", "views/login/LoginView", "views/navbar/NavBarView", "views/plainOldTemplate/PlainOldTemplate"], function(Backbone, Marionette, Router, UserModel, LoginView, NavBarView, PlainOldTemplate) {
  "use strict";

  var app;
  app = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {
      loginView: new LoginView(),
      desktopView: new PlainOldTemplate("templates/desktop/desktopTemplate.html"),
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
