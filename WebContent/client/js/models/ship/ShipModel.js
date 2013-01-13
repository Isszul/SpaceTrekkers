
define(["backbone"], function(Backbone) {
  var shipModel;
  shipModel = Backbone.Model.extend({
    defaults: {
      icon: "plane",
      name: "",
      level: 0,
      damage: 100
    },
    initialize: function(options) {
      this.icon = options.icon;
      this.name = options.name;
      this.level = options.level;
      this.damage = options.damage;
      return this;
    },
    url: function() {
      return "ship";
    }
  });
  return shipModel;
});
