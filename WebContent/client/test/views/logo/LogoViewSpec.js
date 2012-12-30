
require(["LogoView", "text!templates/logo/logoTemplate.html"], function(LogoView, logoTemplate) {
  return describe("LogoView", function() {
    var logoView, testRegion;
    logoView = void 0;
    testRegion = void 0;
    beforeEach(function() {
      logoView = new LogoView();
      testRegion = new Backbone.Marionette.Region({
        el: "#testRegion"
      });
      return this;
    });
    afterEach(function() {
      logoView = null;
      testRegion = null;
      $('#testRegion').html('');
      return this;
    });
    it("should initialize with the default view template ", function() {
      return expect(logoView.template).toEqual(logoTemplate);
    });
    return it("should render a logo dialog", function() {
      testRegion.show(logoView);
      return expect($('#testRegion').html().length).toBeGreaterThan(0);
    });
  });
});
