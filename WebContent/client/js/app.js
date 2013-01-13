
define(["backbone", "backbone.marionette", "router", "modules/user/UserModule", "views/navbar/NavBarView", "views/plainOldTemplate/PlainOldTemplate", "views/tree/TreeView"], function(Backbone, Marionette, Router, UserModule, NavBarView, PlainOldTemplate, TreeView) {
  "use strict";

  var app;
  app = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {
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
    return this;
  });
  return app;
});
