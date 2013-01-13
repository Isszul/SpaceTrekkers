
require(["NavBarView", "text!templates/navbar/navBarTemplate.html"], function(NavBarView, NavBarTemplate) {
  return describe("NavBarView", function() {
    var navBarView, testRegion;
    navBarView = void 0;
    testRegion = void 0;
    beforeEach(function() {
      navBarView = new NavBarView();
      testRegion = new Backbone.Marionette.Region({
        el: "#testRegion"
      });
      return this;
    });
    afterEach(function() {
      navBarView = null;
      testRegion = null;
      $('#testRegion').html('');
      return this;
    });
    it("should initialize with the default view template ", function() {
      return expect(navBarView.template).toEqual(NavBarTemplate);
    });
    return it("should render a logo dialog", function() {
      testRegion.show(navBarView);
      return expect($('#testRegion').html().length).toBeGreaterThan(0);
    });
  });
});
