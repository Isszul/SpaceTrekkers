
define(["backbone", "backbone.marionette"], function(Backbone, Marionette) {
  "use strict";

  var AppRouter;
  AppRouter = Marionette.AppRouter.extend({
    routes: {
      "desktop": "showDesktop",
      "": "showDesktop"
    },
    initialize: function(app) {
      this.app = app;
      this.app.navBar.show(this.app.Views.navBarView);
      return this;
    },
    showDesktop: function() {
      return this.app.mainRegion.show(this.app.Views.desktopView);
    }
  });
  return AppRouter;
});
