
define(["jquery", "underscore", "backbone.marionette", "text!templates/logo/logoTemplate.html", "translationUtil"], function($, _, Marionette, LogoTemplate, TranslationUtil) {
  var LogoView;
  LogoView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(LogoTemplate)
  });
  return LogoView;
});
