
define(["views/login/LoginView"], function(LoginView) {
  return function(UserModule, MyApp, Backbone, Marionette, $, _) {
    MyApp.Views.loginView = new LoginView();
    UserModule.handleSuccessfulUserLogin = function(userModel) {
      MyApp.Views.loginView.hide();
      MyApp.Models.userModel = userModel;
      MyApp.app_router.showDesktop();
      return MyApp.app_router.navigate('#desktop', true);
    };
    UserModule.handleUserLogout = function() {
      return delete MyApp.Models.userModel;
    };
    UserModule.showFailedLoginMessage = function() {
      return MyApp.Views.loginView.showFailedLoginMessage();
    };
    return UserModule.addInitializer(function() {
      Backbone.Events.on("userModel:logout", this.handleUserLogout, this);
      Backbone.Events.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);
      return Backbone.Events.on("userModel:loginfailure", this.showFailedLoginMessage, this);
    });
  };
});
