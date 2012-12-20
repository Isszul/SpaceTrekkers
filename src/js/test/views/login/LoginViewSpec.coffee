require ["views/login/LoginView"  
         "text!templates/login/loginTemplate.html"  
         "sinon"
], (LoginView, LoginTemplate) ->
	
	
	describe "LoginView", ->

		loginView = undefined
		testRegion = undefined

		beforeEach ->
			loginView = new LoginView()
			testRegion = new Backbone.Marionette.Region( 
				el: "#testRegion"
			)
		afterEach ->
  			loginView = null
  			testRegion = null
  			$('#testRegion').html ''

		it "should initialize with the default login view template ", ->
  			expect(loginView.template).toEqual LoginTemplate


		it "should render to the #testRegion", ->
			testRegion.show(loginView)
			expect($('#testRegion').html().length).toBeGreaterThan 0

		
		it "should attempt a user login when the login button is clicked", ->
			testRegion.show(loginView)
			eventCallback = sinon.spy()
      
			Backbone.Events.on "userModel:attemptLogin", eventCallback, this
			
			$('#loginButton').click()
			
			expect(eventCallback.calledOnce).toBeTruthy