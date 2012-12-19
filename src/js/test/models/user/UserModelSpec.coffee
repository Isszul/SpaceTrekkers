require ["backbone.marionette", 
		 "models/user/UserModel", 
         "sinon"
], (Marionette, UserModel) ->
	
	
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
      
    it "should trigger a loginfailure event when the login request fails", ->

      eventCallback = sinon.spy()
      server = sinon.fakeServer.create()
      
      window.Backbone.Events.on "userModel:loginfailure", eventCallback, this
      
      userModel.attemptLogin()
      
      server.requests[0].respond 404,
        "Content-Type": "application/json", 
        ""
        
      expect(eventCallback.calledOnce).toBeTruthy()
      server.restore()   
      
      
    it "should trigger a loginfailure event when the login request contains validLogin: false", ->

      eventCallback = sinon.spy()
      server = sinon.fakeServer.create()
      
      window.Backbone.Events.on "userModel:loginfailure", eventCallback, this
      
      userModel.attemptLogin()
      
      server.requests[0].respond 200,
        "Content-Type": "application/json"
      , JSON.stringify(
      	validLogin: false
      )
        
      expect(eventCallback.calledOnce).toBeTruthy()
      server.restore()         

    it "should trigger a loginsuccess event when the login request contains validLogin: true", ->
      eventCallback = sinon.spy()
      server = sinon.fakeServer.create()
      
      window.Backbone.Events.on "userModel:loginsuccess", eventCallback, this
      
      userModel.attemptLogin()
      
      server.requests[0].respond 200,
        "Content-Type": "application/json"
      , JSON.stringify(
      	validLogin: true
      )
        
      expect(eventCallback.calledOnce).toBeTruthy()
      server.restore()       	



