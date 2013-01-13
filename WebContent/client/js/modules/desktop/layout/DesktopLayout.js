
define(["backbone", "backbone.marionette", "text!templates/desktop/desktopLayout.html", "views/plainOldTemplate/PlainOldTemplate"], function(Backbone, Marionette, DesktopLayout, PlainOldTemplate) {
  var desktopLayout;
  desktopLayout = Marionette.Layout.extend({
    template: DesktopLayout,
    regions: {
      desktoptop: "#desktop-top",
      desktopleft: "#desktop-left",
      desktopright: "#desktop-right"
    }
  });
  return desktopLayout;
});
