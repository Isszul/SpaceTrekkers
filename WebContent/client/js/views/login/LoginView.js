
define(["jquery", "underscore", "backbone.marionette", "models/user/UserModel", "text!templates/login/loginTemplate.html", "translationUtil", "bootstrap"], function($, _, Marionette, UserModel, LoginTemplate, TranslationUtil) {
  var LoginView;
  LoginView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(LoginTemplate),
    showFailedLoginMessage: function() {
      return $('#loginMessage').html(TranslationUtil.geti18nString("failed_login"));
    },
    hide: function() {
      return $("#mainLoginDiv").modal("hide");
    },
    onShow: function() {
      $("#mainLoginDiv").modal({
        keyboard: false,
        backdrop: 'static'
      });
      $("#loginButton").click(function(e) {
        e.preventDefault();
        return new UserModel({
          username: $("#username").val(),
          password: $("#password").val()
        }).attemptLogin();
      });
      $('#username').focus();
      $('#username').keypress(function(e) {
        if (e.which === 13) {
          return $('#password').focus();
        }
      });
      $('#password').keypress(function(e) {
        if (e.which === 13) {
          return $("#loginButton").click();
        }
      });
      return this;
    }
  });
  return LoginView;
});
