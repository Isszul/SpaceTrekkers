
define(["jquery", "underscore", "backbone.marionette", "translationUtil", "text!templates/ships/shipsTemplate.html"], function($, _, Marionette, TranslationUtil, ShipsTemplate) {
  var shipsView;
  shipsView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(ShipsTemplate),
    initialize: function() {
      return Backbone.Events.on("ShipsCollection:fetchedSuccessfully", this.reRender, this);
    },
    reRender: function(ships) {
      this.template = TranslationUtil.geti18nTemplate(ShipsTemplate, ships);
      return this.render();
    }
  });
  return shipsView;
});
