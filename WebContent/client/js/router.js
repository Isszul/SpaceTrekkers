
define(["backbone", "backbone.marionette"], function(Backbone, Marionette) {
  "use strict";

  var AppRouter;
  AppRouter = Marionette.AppRouter.extend({
    routes: {},
    initialize: function(app) {
      this.app = app;
      this.app.navBar.show(this.app.Views.navBarView);
      return this;
    }
  });
  return AppRouter;
});
