define ["backbone"
		"backbone.marionette"
		"router"
		"models/user/UserModel"
		"views/login/LoginView"
		"views/desktop/DesktopView"
		"views/navbar/NavBarView"
], (Backbone, Marionette, Router, UserModel, LoginView, DesktopView, NavBarView) ->

	"use strict"
	
	# Class definition for the main Application
	
	app = new Marionette.Application(
		
		# Single Models
		Models: {}
		
		# Collections of models
		Collections: {}
		
		#Registered views
		Views:
			loginView: new LoginView()
			desktopView: new DesktopView()
			navBarView: new NavBarView()
	)
	
	# Setup the regions we will use on the page
	app.addRegions 
		navBar: "#navBar"
		mainRegion: "#mainRegion"
	
	# Add an initializer to setup the router
	app.addInitializer ->
		@app_router = new Router this
		Backbone.history.start()
		
	app

	
