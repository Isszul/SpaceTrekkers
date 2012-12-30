
define(["backbone", "i18n!nls/general", "handlebars"], function(Backbone, nls, Handlebars) {
  var TranslationUtil;
  TranslationUtil = Backbone.Model.extend({
    geti18nString: function(value) {
      return nls[value];
    },
    geti18nTemplate: function(template, options) {
      var _template;
      _template = Handlebars.compile(template)({
        nls: nls,
        options: options
      });
      return _template;
    }
  });
  return new TranslationUtil();
});
