define ["modules/user/views/LoginView",
		"models/user/UserModel",
		"modules/user/views/SignupView"
], (LoginView, UserModel, SignupView) ->

	(UserModule, MyApp, Backbone, Marionette, $, _) ->

		MyApp.Modules.UserModule = this

		MyApp.Views.loginView = new LoginView()
		MyApp.Views.signUpView = new SignupView();

		UserModule.handleSuccessfulUserLogin = (userModel) ->
			MyApp.Views.loginView.hide()
			MyApp.Models.userModel = userModel
			MyApp.app_router.navigate '', true
			MyApp.app_router.navigate 'desktop', true

		UserModule.handleUserLogout = ()  ->
			delete MyApp.Models.userModel

		UserModule.showFailedLoginMessage = () ->
			MyApp.Views.loginView.showFailedLoginMessage()

		UserModule.attemptLogin = () ->
			#Create a user model and attempt a login
			new UserModel
				username: $("#username").val()
				password: $("#password").val()
			.attemptLogin()

		#check if there is a usermodel @ app.models.userModel
		UserModule.checkLoggedIn = () ->
			MyApp.mainRegion.show MyApp.Views.loginView if not MyApp.Models.userModel?			

		#Raise a user logged out event
		UserModule.logoutUser = () ->
			Backbone.Events.trigger "userModel:logout"	

		UserModule.showSignUp = () ->
			MyApp.mainRegion.show MyApp.Views.signUpView

		UserModule.handleSignUpComplete = (firstname, surname, email, username, password) ->
			UserModel::createUser(firstname, surname, email, username, password)

		UserModule.addInitializer ->
			Backbone.Events.on "userModel:logout", @handleUserLogout, this
			Backbone.Events.on "userModel:loginsuccess", @handleSuccessfulUserLogin, this
			Backbone.Events.on "userModel:loginfailure", @showFailedLoginMessage, this

			Backbone.Events.on "loginView:signup", @showSignUp, this
			Backbone.Events.on "loginView:login", @attemptLogin, this

			Backbone.Events.on "signupView:signup", @handleSignUpComplete, this
			
			#Bind the login check to all the routes
			MyApp.app_router.bind 'all', @checkLoggedIn, this

			#logout route
			MyApp.app_router.route 'logout', 'logout', @logoutUser

