require ["models/user/UserModel", 
         "sinon"
], (UserModel) ->
  describe "UserModel", ->
    userModel = undefined
    beforeEach ->
      userModel = new UserModel(
        username: "testUser"
        password: "testPassword"
      )

    afterEach ->
      userModel = null

    it "should initialize with the provided username and password", ->
      expect(userModel.username).toEqual "testUser"
      expect(userModel.password).toEqual "testPassword"

    it "should attempt to get the users details when .fetch is called", ->
      successcallback = sinon.spy()
      failurecallback = sinon.spy()
      server = sinon.fakeServer.create()
      userModel.fetch
        success: successcallback
        failure: failurecallback

      server.requests[0].respond 200,
        "Content-Type": "application/json"
      , JSON.stringify([
        sessionID: "1234567890"
        validLogin: "true"
      ])
      expect(successcallback.calledOnce).toBeTruthy()
      expect(failurecallback.calledOnce).toBeFalsy()
      server.restore()


