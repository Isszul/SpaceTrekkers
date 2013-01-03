# Filename: router.js
define ["backbone"
		"backbone.marionette"
], (Backbone, Marionette) ->
	"use strict"

	# Class definition for the AppRouter
	AppRouter = Marionette.AppRouter.extend
			
		#configures routes, these link the "/#" urls to functions.
		routes:
			
			#route when navigating to #/desktop 
			"desktop": "showDesktop"

			#logout route
			"logout": "logoutUser"

			#placeholder
			"placeholder": "showPlaceHolder"
			
			#Default route
			"": "showDesktop"

		# Constructor for this router
		# 	@param app A reference to the main application
		#
		initialize: (app) ->
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

		#Raise a user logged out event
		logoutUser: () ->
			Backbone.Events.trigger "userModel:logout"			

		#check if there is a usermodel @ app.models.userModel
		checkLoggedIn: () ->
			@app.mainRegion.show @app.Views.loginView if not @app.Models.userModel?


			
			
	
	AppRouter
