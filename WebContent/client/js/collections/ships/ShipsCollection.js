
define(["backbone", "models/ship/ShipModel", "SocketIOHandler"], function(Backbone, ShipModel, SocketIOHandler) {
  var shipsCollection;
  shipsCollection = Backbone.Collection.extend({
    model: ShipModel,
    url: "/ships",
    getData: function() {
      return SocketIOHandler.socket.emit('ships', function(data) {
        return Backbone.Events.trigger("ShipsCollection:fetchedSuccessfully", data);
      });
    }
  });
  return shipsCollection;
});
