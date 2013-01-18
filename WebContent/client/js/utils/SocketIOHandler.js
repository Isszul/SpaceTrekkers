
define(["backbone", "SocketIO"], function(Backbone, SocketIO) {
  var SocketIOHandler;
  SocketIOHandler = Backbone.Model.extend({
    socket: io.connect('http://localhost')
  });
  return new SocketIOHandler();
});
