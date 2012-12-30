
require(["UserModel", "sinon"], function(UserModel) {
  return describe("UserModel", function() {
    var userModel;
    userModel = void 0;
    beforeEach(function() {
      userModel = new UserModel({
        username: "testUser",
        password: "testPassword"
      });
      return this;
    });
    afterEach(function() {
      userModel = null;
      return this;
    });
    it("should initialize with the provided username and password", function() {
      expect(userModel.username).toEqual("testUser");
      return expect(userModel.password).toEqual("testPassword");
    });
    it("should trigger a loginfailure event when the login request fails", function() {
      var eventCallback, server;
      eventCallback = sinon.spy();
      server = sinon.fakeServer.create();
      Backbone.Events.on("userModel:loginfailure", eventCallback, this);
      userModel.attemptLogin();
      server.requests[0].respond(404, {
        "Content-Type": "application/json"
      }, "");
      expect(eventCallback.calledOnce).toBeTruthy();
      return server.restore();
    });
    it("should trigger a loginfailure event when the login request contains validLogin: false", function() {
      var eventCallback, server;
      eventCallback = sinon.spy();
      server = sinon.fakeServer.create();
      Backbone.Events.on("userModel:loginfailure", eventCallback, this);
      userModel.attemptLogin();
      server.requests[0].respond(200, {
        "Content-Type": "application/json"
      }, JSON.stringify({
        validLogin: false
      }));
      expect(eventCallback.calledOnce).toBeTruthy();
      return server.restore();
    });
    return it("should trigger a loginsuccess event when the login request contains validLogin: true", function() {
      var eventCallback, server;
      eventCallback = sinon.spy();
      server = sinon.fakeServer.create();
      Backbone.Events.on("userModel:loginsuccess", eventCallback, this);
      userModel.attemptLogin();
      server.requests[0].respond(200, {
        "Content-Type": "application/json"
      }, JSON.stringify({
        validLogin: true
      }));
      expect(eventCallback.calledOnce).toBeTruthy();
      return server.restore();
    });
  });
});
