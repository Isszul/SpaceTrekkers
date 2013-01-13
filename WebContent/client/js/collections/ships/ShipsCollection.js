
define(["backbone", "models/ship/ShipModel"], function(Backbone, ShipModel) {
  var shipsCollection;
  shipsCollection = Backbone.Collection.extend({
    model: ShipModel,
    url: "/ships",
    getData: function() {
      return this.fetch({
        success: function(collection, results) {
          return Backbone.Events.trigger("ShipsCollection:fetchedSuccessfully", results);
        }
      });
    }
  });
  return shipsCollection;
});
