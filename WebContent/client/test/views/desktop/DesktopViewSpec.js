
require(["DesktopView", "text!templates/desktop/desktopTemplate.html", "sinon", "jquery"], function(DesktopView, DesktopTemplate) {
  return describe("DesktopView", function() {
    var desktopView, testRegion;
    desktopView = void 0;
    testRegion = void 0;
    beforeEach(function() {
      desktopView = new DesktopView();
      testRegion = new Backbone.Marionette.Region({
        el: "#testRegion"
      });
      return this;
    });
    afterEach(function() {
      desktopView = null;
      testRegion = null;
      $('#testRegion').html('');
      $('#WelcomeDialog').dialog("close");
      return this;
    });
    it("should initialize with the default desktop view template ", function() {
      return expect(desktopView.template).toEqual(DesktopTemplate);
    });
    return it("should render a welcome dialog", function() {
      testRegion.show(desktopView);
      return expect($('#WelcomeDialog').html().length).toBeGreaterThan(0);
    });
  });
});
