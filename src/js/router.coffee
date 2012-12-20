# Filename: router.js
define ["backbone.marionette"], (Marionette) ->
  "use strict"

  # Class definition for the AppRouter
  AppRouter = Marionette.AppRouter.extend(
		  
    #configures routes, these link the "#/" urls to functions.
    
    routes:
    	
      # route when navigating to #/desktop 
      "desktop": "showDesktop"
      
      # Default route
      "": "showLogin"

    # Constructor for this router
    # 	@param app A reference to the main application
    #
    initialize: (app) ->
      Backbone.Events.on "userModel:loginsuccess", @handleSuccessfulUserLogin, this
      Backbone.Events.on "userModel:loginfailure", @handleUnsuccessfulUserLogin, this
      @app = app

    #Shows the desktop in the main Region
    showDesktop: ->
      @app.mainRegion.show @app.Views.desktopView

    #Show the login view in the main Region
    showLogin: ->
      @app.mainRegion.show @app.Views.loginView

    #Handles a successful login attempt and navigates the user to the desktop.
    handleSuccessfulUserLogin: (userModel) ->
      @app.Models.userModel = userModel
      @navigate "#desktop",
        trigger: true
      
    #Handles an unsuccessful login attempt and instructs the login view to show an error message
    handleUnsuccessfulUserLogin: () ->
      @app.Views.loginView.showFailedLoginMessage()
      
  )
  AppRouter
