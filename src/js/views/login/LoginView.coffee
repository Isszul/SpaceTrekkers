define ["jquery"
        "underscore"          
        "backbone.marionette"
        "models/user/UserModel"
        "text!templates/login/loginTemplate.html" 
        "translationUtil"
        "jqueryui"        
], ($, _, Marionette, UserModel, LoginTemplate, TranslationUtil) ->

	# Class def for the login view.
	LoginView = Marionette.ItemView.extend(
	
		#template is shown on the region when a .show is passed this view
		template: TranslationUtil.geti18nTemplate LoginTemplate
		
		#Show a message explaining that the user has failed to log in
		showFailedLoginMessage: () -> 
			$('#loginMessage').html TranslationUtil.geti18nString "failed_login"
			
		#Close the login modal
		hide: () ->
			$("#mainLoginDiv").dialog "close"
		
			
		#Show a modal form to prompt for login details
		onShow: () -> 
			$("#mainLoginDiv").dialog 
				closeOnEscape: false
				modal: true
				draggable: false 
				resizable: false
				open: () -> 
					$(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide()
				buttons: 
					loginButton: 
						text: (TranslationUtil.geti18nString "login_label")
						click: () -> 
							#Create a user model and attempt a login
							new UserModel(
							  username: $("#username").val()
							  password: $("#password").val()
							).attemptLogin()
							
		   	#Move to the front 
			$("#mainLoginDiv").dialog( "moveToTop" )
													
			#By Default focus on the username input
			$('#username').focus()
			
			#When we push enter on the username input advance to the password input
			$('#username').keypress (e) ->
				$('#password').focus() if(e.which == $.ui.keyCode.ENTER)
				
			#When we push enter on the password input attempt the login	
			$('#password').keypress (e) ->
				$('#mainLoginDiv').dialog('option', 'buttons').loginButton.click() if(e.which == $.ui.keyCode.ENTER)
					
					
	)
  
	#Return the class definition
	LoginView