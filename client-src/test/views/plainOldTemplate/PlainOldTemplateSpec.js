
/* -------------------------------------------------------------------------
 * !!! AUTOMATICALLY GENERATED CODE !!!
 * -------------------------------------------------------------------------
 * This file was automatically generated by the OrangeBits compiler.  
 * Compiled on:  12/01/2013 21:22:30
 * Compiled by: ALEX-PC\Alex
 * Source: E:\Project\MarionetteBase-Coffeescript\client-src\test\views\plainOldTemplate\PlainOldTemplateSpec.coffee      
 * -------------------------------------------------------------------------*/



require(["PlainOldTemplate", "text!templates/desktop/desktopTemplate.html", "sinon", "jquery"], function(PlainOldTemplate, DesktopTemplate) {
  return describe("PlainOldTemplate", function() {
    var plainOldTemplate, testRegion;
    plainOldTemplate = void 0;
    testRegion = void 0;
    beforeEach(function() {
      plainOldTemplate = new PlainOldTemplate("../templates/desktop/desktopTemplate.html");
      testRegion = new Backbone.Marionette.Region({
        el: "#testRegion"
      });
      return this;
    });
    afterEach(function() {
      plainOldTemplate = null;
      testRegion = null;
      $('#testRegion').html('');
      return this;
    });
    return it("should (in this test) initialize with the default desktop view template ", function() {
      return expect(plainOldTemplate.template).toEqual(DesktopTemplate);
    });
  });
});
