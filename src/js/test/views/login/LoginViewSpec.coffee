require ["backbone.marionette",
		 "views/login/LoginView"  
         "sinon"
], (Marionette, LoginView) ->
	
	
	describe "LoginView", ->

		loginView = undefined

		beforeEach ->
			loginView = new LoginView()

		afterEach ->
  			loginView = null

		it "should initialize ", ->
  			expect(loginView.template).toEqual ""

     