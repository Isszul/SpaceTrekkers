
define(["backbone", "backbone.marionette", "router", "models/user/UserModel", "views/login/LoginView", "views/navbar/NavBarView", "views/plainOldTemplate/PlainOldTemplate", "views/tree/TreeView"], function(Backbone, Marionette, Router, UserModel, LoginView, NavBarView, PlainOldTemplate, TreeView) {
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
    handleSuccessfulUserLogin: function(userModel) {
      this.Views.loginView.hide();
      this.Models.userModel = userModel;
      this.app_router.showDesktop();
      return this.app_router.navigate('#desktop', true);
    },
    handleUserLogout: function() {
      return delete this.Models.userModel;
    }
  });
  app.addRegions({
    navBar: "#navBar",
    mainRegion: "#mainRegion"
  });
  app.addInitializer(function() {
    this.app_router = new Router(this);
    Backbone.Events.on("userModel:logout", this.handleUserLogout, this);
    Backbone.Events.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);
    return Backbone.history.start();
  });
  return app;
});
