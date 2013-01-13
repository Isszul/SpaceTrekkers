
define(["backbone"], function(Backbone) {
  var crewModel;
  crewModel = Backbone.Model.extend({
    defaults: {
      icon: "plane",
      name: "",
      level: 0,
      specialisation: "",
      hp: 100,
      exp: 0
    },
    initialize: function(options) {
      this.icon = options.icon;
      this.name = options.name;
      this.level = options.level;
      this.specialisation = options.specialisation;
      this.hp = options.hp;
      this.exp = options.exp;
      return this;
    },
    url: function() {
      return "crew";
    }
  });
  return crewModel;
});
