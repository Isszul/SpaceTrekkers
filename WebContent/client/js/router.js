
define(["backbone", "backbone.marionette"], function(Backbone, Marionette) {
  "use strict";

  var AppRouter;
  AppRouter = Marionette.AppRouter.extend({
    routes: {
      "desktop": "showDesktop",
      "": "showDesktop"
    },
    initialize: function(app) {
      Backbone.Events.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);
      Backbone.Events.on("userModel:loginfailure", this.handleUnsuccessfulUserLogin, this);
      this.bind('all', this.checkLoggedIn);
      this.app = app;
      this.app.logo.show(this.app.Views.logoView);
      return this;
    },
    showDesktop: function() {
      return this.app.mainRegion.show(this.app.Views.desktopView);
    },
    checkLoggedIn: function() {
      if (!(this.app.Models.userModel != null)) {
        return this.app.mainRegion.show(this.app.Views.loginView);
      }
    },
    handleSuccessfulUserLogin: function(userModel) {
      this.app.Views.loginView.hide();
      this.app.Models.userModel = userModel;
      return this;
    },
    handleUnsuccessfulUserLogin: function() {
      return this.app.Views.loginView.showFailedLoginMessage();
    }
  });
  return AppRouter;
});
