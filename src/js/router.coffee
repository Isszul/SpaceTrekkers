# Filename: router.js
define ["backbone"
		"backbone.marionette"
], (Backbone, Marionette) ->
	"use strict"

	# Class definition for the AppRouter
	AppRouter = Marionette.AppRouter.extend
			
		#configures routes, these link the "/#" urls to functions.
		routes:
			
			# route when navigating to #/desktop 
			"desktop": "showDesktop"

			#logout route
			"logout": "logoutUser"

			#placeholder
			"placeholder": "showPlaceHolder"
			
			# Default route
			"": "showDesktop"

		# Constructor for this router
		# 	@param app A reference to the main application
		#
		initialize: (app) ->
			Backbone.Events.on "userModel:loginsuccess", @handleSuccessfulUserLogin, this
			Backbone.Events.on "userModel:loginfailure", @handleUnsuccessfulUserLogin, this
			@bind 'all', @checkLoggedIn
			@app = app			
			@app.navBar.show @app.Views.navBarView
			@

		#Shows the desktop in the main Region
		showDesktop: () ->
			@app.mainRegion.show @app.Views.desktopView

		#Show the placeholder
		showPlaceHolder: () ->
			@app.mainRegion.show @app.Views.placeHolder

		#Logs the user out (deletes app.Models.userModel)
		logoutUser: () ->
			delete @app.Models.userModel
			Backbone.Events.trigger "userModel:logout"
			

		#check if there is a usermodel @ app.models.userModel
		checkLoggedIn: () ->
			@app.mainRegion.show @app.Views.loginView if not @app.Models.userModel?

		#Handles a successful login attempt and navigates the user to the desktop.
		handleSuccessfulUserLogin: (userModel) ->
			@app.Views.loginView.hide()
			@app.Models.userModel = userModel
			@showDesktop() #if we are on the desktop the navigate call does nothing below
			@navigate '#desktop', true
			
			
		#Handles an unsuccessful login attempt and instructs the login view to show an error message
		handleUnsuccessfulUserLogin: () ->
			@app.Views.loginView.showFailedLoginMessage()
			
	
	AppRouter
