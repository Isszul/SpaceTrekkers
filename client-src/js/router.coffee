# Filename: router.js
define ["backbone"
		"backbone.marionette"
], (Backbone, Marionette) ->
	"use strict"

	# Class definition for the AppRouter
	AppRouter = Marionette.AppRouter.extend
			
		#configures routes, these link the "/#" urls to functions.
		routes: {}

		# Constructor for this router
		# 	@param app A reference to the main application
		#
		initialize: (app) ->
			@app = app			
			@app.navBar.show @app.Views.navBarView
			@

			
	
	AppRouter
