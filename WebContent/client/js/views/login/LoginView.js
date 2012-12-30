
define(["jquery", "underscore", "backbone.marionette", "models/user/UserModel", "text!templates/login/loginTemplate.html", "translationUtil", "jqueryui"], function($, _, Marionette, UserModel, LoginTemplate, TranslationUtil) {
  var LoginView;
  LoginView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(LoginTemplate),
    showFailedLoginMessage: function() {
      return $('#loginMessage').html(TranslationUtil.geti18nString("failed_login"));
    },
    hide: function() {
      return $("#mainLoginDiv").dialog("close");
    },
    onShow: function() {
      $("#mainLoginDiv").dialog({
        closeOnEscape: false,
        modal: true,
        draggable: false,
        resizable: false,
        open: function() {
          return $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        },
        buttons: {
          loginButton: {
            text: TranslationUtil.geti18nString("login_label"),
            click: function() {
              return new UserModel({
                username: $("#username").val(),
                password: $("#password").val()
              }).attemptLogin();
            }
          }
        }
      });
      $("#mainLoginDiv").dialog("moveToTop");
      $('#username').focus();
      $('#username').keypress(function(e) {
        if (e.which === $.ui.keyCode.ENTER) {
          return $('#password').focus();
        }
      });
      return $('#password').keypress(function(e) {
        if (e.which === $.ui.keyCode.ENTER) {
          return $('#mainLoginDiv').dialog('option', 'buttons').loginButton.click();
        }
      });
    }
  });
  return LoginView;
});
