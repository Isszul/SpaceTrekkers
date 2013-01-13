
define(["jquery", "underscore", "backbone.marionette", "text!templates/signup/signupTemplate.html", "translationUtil", "bootstrap"], function($, _, Marionette, SignupTemplate, TranslationUtil) {
  var SignupView;
  SignupView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(SignupTemplate),
    hide: function() {
      return $("#mainSignupDiv").modal("hide");
    },
    onShow: function() {
      $("#mainSignupDiv").modal({
        keyboard: false,
        backdrop: 'static'
      });
      return $("#completeSignUp").unbind('click').click(function(e) {
        e.preventDefault();
        return Backbone.Events.trigger("signupView:signup", $('#signup-firstname').val(), $('#signup-surname').val(), $('#signup-email').val(), $('#signup-username').val(), $('#signup-password').val());
      });
    }
  });
  return SignupView;
});
