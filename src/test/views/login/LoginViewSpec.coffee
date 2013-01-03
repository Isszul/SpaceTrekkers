require ["LoginView"  
         "text!templates/login/loginTemplate.html"  
         "sinon"
         "jquery"
], (LoginView, LoginTemplate) ->
	
	
	describe "LoginView", ->

		loginView = undefined
		testRegion = undefined

		beforeEach ->
			loginView = new LoginView()
			testRegion = new Backbone.Marionette.Region
				el: "#testRegion"
			@

		afterEach ->
  			loginView = null
  			testRegion = null
  			$('#testRegion').html ''
  			$('#mainLoginDiv').modal "hide" 
  			@

		it "should initialize with the default login view template ", -> 
  			expect(loginView.template).toEqual LoginTemplate
		
		it "should show the mainLoginDiv modal login", ->
			testRegion.show(loginView)
			expect($('#mainLoginDiv').html().length).toBeGreaterThan 0

		it "should attempt a user login when the login button is clicked", ->
			testRegion.show(loginView)
			eventCallback = sinon.spy()
			Backbone.Events.on "userModel:attemptLogin", eventCallback, @
			$("#loginButton").click()
			expect(eventCallback.calledOnce).toBeTruthy()
			
			
			
			
			