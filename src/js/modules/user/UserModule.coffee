define ["views/login/LoginView"], (LoginView) ->

	(UserModule, MyApp, Backbone, Marionette, $, _) ->

		MyApp.Views.loginView = new LoginView()

		UserModule.handleSuccessfulUserLogin = (userModel) ->
			MyApp.Views.loginView.hide()
			MyApp.Models.userModel = userModel
			MyApp.app_router.showDesktop() #if we are on the desktop the navigate call does nothing below
			MyApp.app_router.navigate '#desktop', true

		UserModule.handleUserLogout = ()  ->
			delete MyApp.Models.userModel

		UserModule.showFailedLoginMessage = () ->
			MyApp.Views.loginView.showFailedLoginMessage()

		UserModule.addInitializer ->
			Backbone.Events.on "userModel:logout", @handleUserLogout, @
			Backbone.Events.on "userModel:loginsuccess", @handleSuccessfulUserLogin, @	
			Backbone.Events.on "userModel:loginfailure", @showFailedLoginMessage, @
		