
define(["backbone", "models/crew/CrewModel", "SocketIOHandler"], function(Backbone, CrewModel, SocketIOHandler) {
  var crewCollection;
  crewCollection = Backbone.Collection.extend({
    model: CrewModel,
    url: "/crews",
    getData: function() {
      return SocketIOHandler.socket.emit('crews', function(data) {
        return Backbone.Events.trigger("CrewsCollection:fetchedSuccessfully", data);
      });
    }
  });
  return crewCollection;
});
