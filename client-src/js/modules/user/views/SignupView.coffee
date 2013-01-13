define ["jquery"
		"underscore"          
		"backbone.marionette"
		"text!templates/signup/signupTemplate.html" 
		"translationUtil"
		"bootstrap"        
], ($, _, Marionette, SignupTemplate, TranslationUtil) ->

	# Class def for the signup view.
	SignupView = Marionette.ItemView.extend
	
		#template is shown on the region when a .show is passed this view
		template: TranslationUtil.geti18nTemplate SignupTemplate
		
			
		#Close the login modal
		hide:  ->
			$("#mainSignupDiv").modal "hide"
			
		#Show a modal form to prompt for login details
		onShow:  -> 

			$("#mainSignupDiv").modal
				keyboard: false
				backdrop: 'static'

			$("#completeSignUp").unbind('click').click (e) ->
				e.preventDefault()
				Backbone.Events.trigger "signupView:signup", 
					$('#signup-firstname').val(),
					$('#signup-surname').val(),
					$('#signup-email').val(),
					$('#signup-username').val(),
					$('#signup-password').val()
			
					
  
	#Return the class definition
	SignupView
