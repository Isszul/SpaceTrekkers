define ["backbone"
		"backbone.marionette"
		"router"
		"modules/user/UserModule"
		"views/navbar/NavBarView"
		"views/plainOldTemplate/PlainOldTemplate"

		
], (Backbone, Marionette, Router, UserModule, NavBarView, PlainOldTemplate ) ->

	"use strict"
	
	# Class definition for the main Application
	app = new Marionette.Application
		
		# Single Models
		Models: {}
		
		# Collections of models
		Collections: {}
		
		#Registered views
		Views:
			desktopView: new PlainOldTemplate("templates/desktop/desktopTemplate.html")
			navBarView: new NavBarView()
	
		loadModules: ->
			@.module("UserModule", UserModule)


	# Setup the regions we will use on the page
	app.addRegions 
		navBar: "#navBar"
		mainRegion: "#mainRegion"
	
	# Add an initializer to setup the router
	app.addInitializer ->
		@app_router = new Router this
		this

		
	app

	








