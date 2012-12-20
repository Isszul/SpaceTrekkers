require ["views/login/LoginView"  
         "sinon" 
         "text!templates/login/loginTemplate.html"  
], (LoginView, LoginTemplate) ->
	
	
	describe "LoginView", ->

		loginView = undefined

		beforeEach ->
			loginView = new LoginView()

		afterEach ->
  			loginView = null

		it "should initialize with the default login view template ", ->
  			expect(loginView.template).toEqual LoginTemplate

     