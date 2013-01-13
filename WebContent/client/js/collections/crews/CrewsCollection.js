
define(["backbone", "models/crew/CrewModel"], function(Backbone, CrewModel) {
  var crewCollection;
  crewCollection = Backbone.Collection.extend({
    model: CrewModel,
    url: "/crews",
    getData: function() {
      return this.fetch({
        success: function(collection, results) {
          return Backbone.Events.trigger("CrewsCollection:fetchedSuccessfully", results);
        }
      });
    }
  });
  return crewCollection;
});
