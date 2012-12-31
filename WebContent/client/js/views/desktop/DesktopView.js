
define(["jquery", "underscore", "backbone.marionette", "text!templates/desktop/desktopTemplate.html", "translationUtil"], function($, _, Marionette, desktopTemplate, TranslationUtil) {
  var DesktopView;
  DesktopView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(desktopTemplate)
  });
  return DesktopView;
});
