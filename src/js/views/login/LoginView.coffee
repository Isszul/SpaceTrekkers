define ["jquery",
        "underscore",           
        "backbone.marionette", 
        "models/user/UserModel", 
        "text!templates/login/loginTemplate.html" 
        "i18n!nls/general"
], ($, _, Marionette, UserModel, loginTemplate, nls) ->

  # Class def for the login view.
  LoginView = Marionette.ItemView.extend(
  	
  	#template is shown on the region when a .show is passed this view
    template: _.template(loginTemplate, nls)
    
    #Show a message explaining that the user has failed to log in
    showFailedLoginMessage: () -> 
    	$('#loginMessage').html nls.failedLogin
    
    #List the DOM events that this view handles.
    events:
    	
      #User has clicked the login button
      "click #loginButton": (el) ->
        el.preventDefault()
        #Create a user model
        userModel = new UserModel(
          username: $("#username").val()
          password: $("#password").val()
        )
        #attempt a login
        userModel.attemptLogin()
  )
  
  #Return the class definition
  LoginView