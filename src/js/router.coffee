# Filename: router.js
define ["backbone"
		"backbone.marionette"
], (Backbone, Marionette) ->
	"use strict"

	# Class definition for the AppRouter
	AppRouter = Marionette.AppRouter.extend(
			
		#configures routes, these link the "/#" urls to functions.
		routes:
			
			# route when navigating to #/desktop 
			"desktop": "showDesktop"

			#logout route
			"logout": "logoutUser"
			
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

		#Logs the user out (deletes app.Models.userModel)
		logoutUser: () ->
			delete @app.Models.userModel
			@app.Views.navBarView.showUsernameOnNavBar "..."
			@navigate('#')

		#check if there is a usermodel @ app.models.userModel
		checkLoggedIn: () ->
			@app.mainRegion.show @app.Views.loginView if not @app.Models.userModel?

		#Handles a successful login attempt and navigates the user to the desktop.
		handleSuccessfulUserLogin: (userModel) ->
			@app.Views.loginView.hide()
			@showDesktop()
			@app.Models.userModel = userModel
			@app.Views.navBarView.showUsernameOnNavBar userModel.username
			@
			
		#Handles an unsuccessful login attempt and instructs the login view to show an error message
		handleUnsuccessfulUserLogin: () ->
			@app.Views.loginView.showFailedLoginMessage()
			
	)
	AppRouter
