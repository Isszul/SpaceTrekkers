
define(["jquery", "underscore", "backbone.marionette", "translationUtil", "text!templates/crews/crewsTemplate.html"], function($, _, Marionette, TranslationUtil, CrewsTemplate) {
  var crewsView;
  crewsView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(CrewsTemplate),
    initialize: function() {
      return Backbone.Events.on("CrewsCollection:fetchedSuccessfully", this.reRender, this);
    },
    reRender: function(crews) {
      this.template = TranslationUtil.geti18nTemplate(CrewsTemplate, crews);
      return this.render();
    }
  });
  return crewsView;
});
