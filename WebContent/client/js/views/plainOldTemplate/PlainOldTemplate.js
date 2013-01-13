
define(["jquery", "underscore", "backbone.marionette", "translationUtil"], function($, _, Marionette, TranslationUtil) {
  var plainOldTemplateView;
  plainOldTemplateView = Marionette.ItemView.extend({
    template: "<div>" + TranslationUtil.geti18nString('loading' + "</div>"),
    initialize: function(templateFileName, options) {
      var _template;
      _template = $.ajax({
        url: templateFileName,
        async: false
      });
      this.template = TranslationUtil.geti18nTemplate(_template.responseText, options);
      return this;
    }
  });
  return plainOldTemplateView;
});
