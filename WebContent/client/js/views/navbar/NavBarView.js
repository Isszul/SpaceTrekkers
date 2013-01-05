
define(["jquery", "underscore", "backbone.marionette", "text!templates/navbar/navBarTemplate.html", "translationUtil"], function($, _, Marionette, NavBarTemplate, TranslationUtil) {
  var NavBarView;
  NavBarView = Marionette.View.extend({
    template: TranslationUtil.geti18nTemplate(NavBarTemplate),
    initialize: function() {
      Backbone.Events.on("userModel:loginsuccess", this.showUsernameOnNavBar, this);
      return Backbone.Events.on("userModel:logout", this.blankUsernameOnNavBar, this);
    },
    blankUsernameOnNavBar: function() {
      return $("#username_navbar").html('...');
    },
    showUsernameOnNavBar: function(userModel) {
      return $("#username_navbar").html(userModel.username);
    }
  });
  return NavBarView;
});
