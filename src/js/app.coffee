define ["backbone"
		"backbone.marionette"
		"router"
		"models/user/UserModel"
		"views/login/LoginView"
		"views/navbar/NavBarView"
		"views/plainOldTemplate/PlainOldTemplate"
		"views/tree/TreeView"
		"modules/user/UserModule"
], (Backbone, Marionette, Router, UserModel, LoginView, NavBarView, PlainOldTemplate, TreeView, UserModule) ->

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
			treeView: new TreeView()
	
		loadModules: ->
			@.module("UserModule", UserModule)


	# Setup the regions we will use on the page
	app.addRegions 
		navBar: "#navBar"
		mainRegion: "#mainRegion"
	
	# Add an initializer to setup the router
	app.addInitializer ->
		@app_router = new Router @
		Backbone.history.start()


		
	app

	








