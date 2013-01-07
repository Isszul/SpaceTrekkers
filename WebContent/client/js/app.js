
define(["backbone", "backbone.marionette", "router", "models/user/UserModel", "views/login/LoginView", "views/navbar/NavBarView", "views/plainOldTemplate/PlainOldTemplate", "views/tree/TreeView", "modules/user/UserModule"], function(Backbone, Marionette, Router, UserModel, LoginView, NavBarView, PlainOldTemplate, TreeView, UserModule) {
  "use strict";

  var app;
  app = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {
      loginView: new LoginView(),
      desktopView: new PlainOldTemplate("templates/desktop/desktopTemplate.html"),
      navBarView: new NavBarView(),
      placeHolder: new PlainOldTemplate("templates/placeHolder/placeHolderTemplate.html"),
      treeView: new TreeView()
    },
    loadModules: function() {
      return this.module("UserModule", UserModule);
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
