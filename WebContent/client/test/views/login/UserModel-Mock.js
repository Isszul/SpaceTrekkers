
define(["backbone"], function(Backbone) {
  var userModelMock;
  userModelMock = Backbone.Model.extend({
    attemptLogin: function() {
      return Backbone.Events.trigger("userModel:attemptLogin", this);
    }
  });
  return userModelMock;
});
