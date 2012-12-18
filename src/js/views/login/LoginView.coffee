define ["models/user/UserModel", 
        "text!templates/login/loginTemplate.html", 
        "backbone.marionette", 
        "underscore", 
        "i18n!nls/general"
], (UserModel, loginTemplate, Marionette, _, nls) ->

  LoginView = Marionette.ItemView.extend(
    template: _.template(loginTemplate, nls)
    events:
      "click #loginButton": (el) ->
        el.preventDefault()
        userModel = new UserModel(
          username: $("#username").val()
          password: $("#password").val()
        )
        userModel.attemptLogin()
  )
  LoginView