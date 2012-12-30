
define(["jquery", "underscore", "backbone.marionette", "text!templates/desktop/desktopTemplate.html", "translationUtil", "jqueryui"], function($, _, Marionette, desktopTemplate, TranslationUtil) {
  var DesktopView;
  DesktopView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(desktopTemplate),
    onShow: function() {
      return $("#WelcomeDialog").dialog({
        modal: true
      });
    }
  });
  return DesktopView;
});
