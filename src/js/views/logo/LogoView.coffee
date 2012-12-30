define ["jquery"
        "underscore"          
        "backbone.marionette"
        "text!templates/logo/logoTemplate.html" 
        "translationUtil"
], ($, _, Marionette, LogoTemplate, TranslationUtil) ->

	# Class def for the login view.
	LogoView = Marionette.ItemView.extend(
	
		#template is shown on the region when a .show is passed this view
		template: TranslationUtil.geti18nTemplate LogoTemplate

	)
  
	#Return the class definition
	LogoView