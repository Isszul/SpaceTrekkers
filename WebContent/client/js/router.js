
define(["backbone", "backbone.marionette"], function(Backbone, Marionette) {
  "use strict";

  var AppRouter;
  AppRouter = Marionette.AppRouter.extend({
    routes: {
      "desktop": "showDesktop",
      "logout": "logoutUser",
      "placeholder": "showPlaceHolder",
      "": "showDesktop"
    },
    initialize: function(app) {
      Backbone.Events.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);
      Backbone.Events.on("userModel:loginfailure", this.handleUnsuccessfulUserLogin, this);
      this.bind('all', this.checkLoggedIn);
      this.app = app;
      this.app.navBar.show(this.app.Views.navBarView);
      return this;
    },
    showDesktop: function() {
      return this.app.mainRegion.show(this.app.Views.desktopView);
    },
    showPlaceHolder: function() {
      return this.app.mainRegion.show(this.app.Views.placeHolder);
    },
    logoutUser: function() {
      delete this.app.Models.userModel;
      return Backbone.Events.trigger("userModel:logout");
    },
    checkLoggedIn: function() {
      if (!(this.app.Models.userModel != null)) {
        return this.app.mainRegion.show(this.app.Views.loginView);
      }
    },
    handleSuccessfulUserLogin: function(userModel) {
      this.app.Views.loginView.hide();
      this.app.Models.userModel = userModel;
      this.showDesktop();
      return this.navigate('#desktop', true);
    },
    handleUnsuccessfulUserLogin: function() {
      return this.app.Views.loginView.showFailedLoginMessage();
    }
  });
  return AppRouter;
});
