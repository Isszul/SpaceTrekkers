
define(["jquery", "underscore", "backbone.marionette", "text!templates/login/loginTemplate.html", "translationUtil", "bootstrap"], function($, _, Marionette, LoginTemplate, TranslationUtil) {
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
      $("#loginButton").unbind('click').click(function(e) {
        e.preventDefault();
        return Backbone.Events.trigger("loginView:login");
      });
      $("#signupButton").unbind('click').click(function(e) {
        e.preventDefault();
        return Backbone.Events.trigger("loginView:signup");
      });
      setTimeout(function() {
        return $('#username').focus();
      }, 500);
      return this;
    }
  });
  return LoginView;
});
