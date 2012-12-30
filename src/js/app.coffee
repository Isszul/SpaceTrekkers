define ["backbone.marionette"
				"router"
				"models/user/UserModel"
				"views/login/LoginView"
				"views/desktop/DesktopView"
], (Marionette, Router, UserModel, LoginView, DesktopView) ->

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
	)
	
	# Setup the regions we will use on the page
	app.addRegions 
		mainRegion: "#page"
	
	# Add an initializer to setup the router
	app.addInitializer ->
		@app_router = new Router this
		Backbone.history.start()
		
	app

	
