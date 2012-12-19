# Filename: router.js
define ["backbone.marionette"
], (Marionette) ->
  "use strict"
  AppRouter = Marionette.AppRouter.extend(
    routes:
      desktop: "showDesktop"
      
      # Default
      "": "showLogin"

    initialize: ->
      window.app.on "userModel:loginsuccess", @handleSuccessfulUserLogin, this
      window.app.on "userModel:loginfailure", @handleUnsuccessfulUserLogin, this

    showDesktop: ->
      window.app.mainRegion.show window.app.Views.desktopView

    showLogin: ->
      window.app.mainRegion.show window.app.Views.loginView

    handleSuccessfulUserLogin: (userModel) ->
      window.app.Models.userModel = userModel
      @navigate "#desktop",
        trigger: true
      
    handleUnsuccessfulUserLogin: () ->
      window.app.Views.loginView.showFailedLoginMessage()
      
  )
  AppRouter
