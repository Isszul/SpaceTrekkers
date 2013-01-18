
define(["backbone", "SocketIOHandler"], function(Backbone, SocketIOHandler) {
  var userModel;
  userModel = Backbone.Model.extend({
    defaults: {
      username: "unknown",
      password: "unknown"
    },
    initialize: function(options) {
      this.username = options.username;
      this.password = options.password;
      return this;
    },
    url: function() {
      return "user?username=" + this.username + "&password=" + this.password;
    },
    createUser: function(firstname, surname, email, username, password) {
      return this;
    },
    attemptLogin: function() {
      return SocketIOHandler.socket.emit('userLogin', this.username, this.password, function(data) {
        if (data.validLogin === true) {
          return Backbone.Events.trigger("userModel:loginsuccess", data);
        } else {
          return Backbone.Events.trigger("userModel:loginfailure", data);
        }
      });
    }
  });
  return userModel;
});
