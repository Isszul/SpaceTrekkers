
define(["modules/user/views/LoginView", "models/user/UserModel", "modules/user/views/SignupView"], function(LoginView, UserModel, SignupView) {
  return function(UserModule, MyApp, Backbone, Marionette, $, _) {
    MyApp.Modules.UserModule = this;
    MyApp.Views.loginView = new LoginView();
    MyApp.Views.signUpView = new SignupView();
    UserModule.handleSuccessfulUserLogin = function(userModel) {
      MyApp.Views.loginView.hide();
      MyApp.Models.userModel = userModel;
      MyApp.app_router.navigate('', true);
      return MyApp.app_router.navigate('desktop', true);
    };
    UserModule.handleUserLogout = function() {
      return delete MyApp.Models.userModel;
    };
    UserModule.showFailedLoginMessage = function() {
      return MyApp.Views.loginView.showFailedLoginMessage();
    };
    UserModule.attemptLogin = function() {
      return new UserModel({
        username: $("#username").val(),
        password: $("#password").val()
      }).attemptLogin();
    };
    UserModule.checkLoggedIn = function() {
      if (!(MyApp.Models.userModel != null)) {
        return MyApp.mainRegion.show(MyApp.Views.loginView);
      }
    };
    UserModule.logoutUser = function() {
      return Backbone.Events.trigger("userModel:logout");
    };
    UserModule.showSignUp = function() {
      return MyApp.mainRegion.show(MyApp.Views.signUpView);
    };
    UserModule.handleSignUpComplete = function(firstname, surname, email, username, password) {
      return UserModel.prototype.createUser(firstname, surname, email, username, password);
    };
    return UserModule.addInitializer(function() {
      Backbone.Events.on("userModel:logout", this.handleUserLogout, this);
      Backbone.Events.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);
      Backbone.Events.on("userModel:loginfailure", this.showFailedLoginMessage, this);
      Backbone.Events.on("loginView:signup", this.showSignUp, this);
      Backbone.Events.on("loginView:login", this.attemptLogin, this);
      Backbone.Events.on("signupView:signup", this.handleSignUpComplete, this);
      MyApp.app_router.bind('all', this.checkLoggedIn, this);
      return MyApp.app_router.route('logout', 'logout', this.logoutUser);
    });
  };
});
