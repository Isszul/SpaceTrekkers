define ["backbone.marionette", 
        "router", 
        "models/user/UserModel", 
        "views/login/LoginView", 
        "views/desktop/DesktopView"
], (Marionette, Router, UserModel, LoginView, DesktopView) ->

  "use strict"
  app = new Marionette.Application(
    Models: {}
    Collections: {}
    Views:
      loginView: new LoginView()
      desktopView: new DesktopView()
  )
  
  app.addRegions mainRegion: "#page"
  
  app.addInitializer ->
    @app_router = new Router this
    Backbone.history.start()

  app
  
