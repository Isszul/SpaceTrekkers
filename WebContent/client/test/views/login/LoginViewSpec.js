
require(["LoginView", "text!templates/login/loginTemplate.html", "sinon", "jquery"], function(LoginView, LoginTemplate) {
  return describe("LoginView", function() {
    var loginView, testRegion;
    loginView = void 0;
    testRegion = void 0;
    beforeEach(function() {
      loginView = new LoginView();
      testRegion = new Backbone.Marionette.Region({
        el: "#testRegion"
      });
      return this;
    });
    afterEach(function() {
      loginView = null;
      testRegion = null;
      $('#testRegion').html('');
      $('#mainLoginDiv').modal("hide");
      return this;
    });
    it("should initialize with the default login view template ", function() {
      return expect(loginView.template).toEqual(LoginTemplate);
    });
    it("should show the mainLoginDiv modal login", function() {
      testRegion.show(loginView);
      return expect($('#mainLoginDiv').html().length).toBeGreaterThan(0);
    });
    return it("should attempt a user login when the login button is clicked", function() {
      var eventCallback;
      testRegion.show(loginView);
      eventCallback = sinon.spy();
      Backbone.Events.on("userModel:attemptLogin", eventCallback, this);
      $("#loginButton").click();
      return expect(eventCallback.calledOnce).toBeTruthy();
    });
  });
});
