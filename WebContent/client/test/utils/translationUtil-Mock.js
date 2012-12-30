
define(["backbone"], function(Backbone) {
  var TranslationUtil;
  TranslationUtil = Backbone.Model.extend({
    geti18nString: function(value) {
      return value;
    },
    geti18nTemplate: function(template, options) {
      return template;
    }
  });
  return new TranslationUtil();
});
