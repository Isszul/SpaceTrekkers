
/* -------------------------------------------------------------------------
 * !!! AUTOMATICALLY GENERATED CODE !!!
 * -------------------------------------------------------------------------
 * This file was automatically generated by the OrangeBits compiler.  
 * Compiled on:  12/01/2013 21:22:29
 * Compiled by: ALEX-PC\Alex
 * Source: E:\Project\MarionetteBase-Coffeescript\client-src\js\utils\translationUtil.coffee      
 * -------------------------------------------------------------------------*/



define(["backbone", "i18n!nls/general", "handlebars"], function(Backbone, nls, Handlebars) {
  var TranslationUtil;
  TranslationUtil = Backbone.Model.extend({
    geti18nString: function(value) {
      var retVal;
      if (nls[value] != null) {
        retVal = nls[value];
      } else {
        retVal = value;
      }
      return retVal;
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
