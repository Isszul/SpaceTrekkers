
define(["backbone", "backbone.marionette"], function(Backbone, Marionette) {
  "use strict";

  var AppRouter;
  AppRouter = Marionette.AppRouter.extend({
    routes: {
      "desktop": "showDesktop",
      "logout": "logoutUser",
      "placeholder": "showPlaceHolder",
      "tree": "showTree",
      "": "showDesktop"
    },
    initialize: function(app) {
      this.bind('all', this.checkLoggedIn);
      this.app = app;
      this.app.navBar.show(this.app.Views.navBarView);
      return this;
    },
    showTree: function() {
      return this.app.mainRegion.show(this.app.Views.treeView);
    },
    showDesktop: function() {
      return this.app.mainRegion.show(this.app.Views.desktopView);
    },
    showPlaceHolder: function() {
      return this.app.mainRegion.show(this.app.Views.placeHolder);
    },
    logoutUser: function() {
      return Backbone.Events.trigger("userModel:logout");
    },
    checkLoggedIn: function() {
      if (!(this.app.Models.userModel != null)) {
        return this.app.mainRegion.show(this.app.Views.loginView);
      }
    }
  });
  return AppRouter;
});
