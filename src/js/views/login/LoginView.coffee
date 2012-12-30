define ["jquery"
        "underscore"          
        "backbone.marionette"
        "models/user/UserModel"
        "text!templates/login/loginTemplate.html" 
        "translationUtil"
], ($, _, Marionette, UserModel, LoginTemplate, TranslationUtil) ->

  # Class def for the login view.
  LoginView = Marionette.ItemView.extend(
  	
  	#template is shown on the region when a .show is passed this view
    template: TranslationUtil.geti18nTemplate LoginTemplate
    
    #Show a message explaining that the user has failed to log in
    showFailedLoginMessage: () -> 
    	$('#loginMessage').html TranslationUtil.geti18nString "failedLogin"
    
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