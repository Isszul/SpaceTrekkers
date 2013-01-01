
define(["backbone", "backbone.marionette"], function(Backbone, Marionette) {
  "use strict";

  var AppRouter;
  AppRouter = Marionette.AppRouter.extend({
    routes: {
      "desktop": "showDesktop",
      "logout": "logoutUser",
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
    logoutUser: function() {
      delete this.app.Models.userModel;
      this.app.Views.navBarView.showUsernameOnNavBar("...");
      return this.navigate('#');
    },
    checkLoggedIn: function() {
      if (!(this.app.Models.userModel != null)) {
        return this.app.mainRegion.show(this.app.Views.loginView);
      }
    },
    handleSuccessfulUserLogin: function(userModel) {
      this.app.Views.loginView.hide();
      this.showDesktop();
      this.app.Models.userModel = userModel;
      this.app.Views.navBarView.showUsernameOnNavBar(userModel.username);
      return this;
    },
    handleUnsuccessfulUserLogin: function() {
      return this.app.Views.loginView.showFailedLoginMessage();
    }
  });
  return AppRouter;
});
