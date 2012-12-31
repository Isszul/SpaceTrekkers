define ["jquery"
        "underscore"          
        "backbone.marionette"
        "text!templates/navbar/navBarTemplate.html" 
        "translationUtil"
], ($, _, Marionette, NavBarTemplate, TranslationUtil) ->

	# Class def for the view.
	NavBarView = Marionette.ItemView.extend(
	
		#template is shown on the region when a .show is passed this view
		template: TranslationUtil.geti18nTemplate NavBarTemplate

	)
  
	#Return the class definition
	NavBarView