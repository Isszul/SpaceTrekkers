define ["backbone"
		"backbone.marionette"
		"router"
		"models/user/UserModel"
		"views/login/LoginView"
		"views/navbar/NavBarView"
		"views/plainOldTemplate/PlainOldTemplate"
], (Backbone, Marionette, Router, UserModel, LoginView, NavBarView, PlainOldTemplate) ->

	"use strict"
	
	# Class definition for the main Application
	
	app = new Marionette.Application
		
		# Single Models
		Models: {}
		
		# Collections of models
		Collections: {}
		
		#Registered views
		Views:
			loginView: new LoginView()
			desktopView: new PlainOldTemplate("templates/desktop/desktopTemplate.html")
			navBarView: new NavBarView()
			placeHolder: new PlainOldTemplate("templates/placeHolder/placeHolderTemplate.html")
	
		handleSuccessfulUserLogin: (userModel) ->
			@Views.loginView.hide()
			@Models.userModel = userModel
			@app_router.showDesktop() #if we are on the desktop the navigate call does nothing below
			@app_router.navigate '#desktop', true

		handleUserLogout: () ->
			delete @Models.userModel

	# Setup the regions we will use on the page
	app.addRegions 
		navBar: "#navBar"
		mainRegion: "#mainRegion"
	
	# Add an initializer to setup the router
	app.addInitializer ->
		Backbone.Events.on "userModel:logout", @handleUserLogout, this
		Backbone.Events.on "userModel:loginsuccess", @handleSuccessfulUserLogin, this
		@app_router = new Router this
		Backbone.history.start()

		
	app

	








