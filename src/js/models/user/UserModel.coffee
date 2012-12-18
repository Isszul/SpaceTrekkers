define ["backbone"
], (Backbone) ->
  userModel = Backbone.Model.extend(
    defaults:
      username: "unknown"
      password: "unknown"

    initialize: (options) ->
      @username = options.username
      @password = options.password

    url: ->
      "test/?username=" + @username + "&password=" + @password

    attemptLogin: ->
      @fetch
        success: (userModel, response, options) ->
          console.log "logged in OK"
          window.app.trigger "userModel:loginsuccess", userModel

        error: (userModel, jqXHR, options) ->
          console.log "error in login"
          window.app.trigger "userModel:loginsuccess", userModel

  )
  userModel
