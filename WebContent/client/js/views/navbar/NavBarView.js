
define(["jquery", "underscore", "backbone.marionette", "text!templates/navbar/navBarTemplate.html", "translationUtil"], function($, _, Marionette, NavBarTemplate, TranslationUtil) {
  var NavBarView;
  NavBarView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(NavBarTemplate),
    showUsernameOnNavBar: function(username) {
      return $("#username_navbar").html(username);
    }
  });
  return NavBarView;
});
