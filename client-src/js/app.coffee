define ["backbone"
		"jquery"
		"backbone.marionette"
		"router"
		"modules/user/UserModule"
		"modules/desktop/DesktopModule"
		"views/navbar/NavBarView"
], (Backbone, $, Marionette, Router, UserModule, DesktopModule, NavBarView) ->

	"use strict"
	
	# Class definition for the main Application
	app = new Marionette.Application
		
		# Single Models
		Models: {}

		# Modules 
		Modules: {}

		# Layouts
		Layouts: {}
		
		# Collections of models
		Collections: {}
		
		#Registered views
		Views:
			navBarView: new NavBarView()


		loadModules: ->
			#@module("UserModule", UserModule)
			@module("DesktopModule", DesktopModule)


	# Setup the regions we will use on the page
	app.addRegions 
		navBar: "#navBar"
		mainRegion: "#mainRegion"

	# Add an initializer to setup the router
	app.addInitializer ->
		@app_router = new Router this
		this

		
	app

	








