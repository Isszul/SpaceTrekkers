define ["jquery"
        "underscore"          
        "backbone.marionette"
        "text!templates/navbar/navBarTemplate.html" 
        "translationUtil"
], ($, _, Marionette, NavBarTemplate, TranslationUtil) ->

	# Class def for the view.
	NavBarView = Marionette.ItemView.extend
	
		#template is shown on the region when a .show is passed this view
		template: TranslationUtil.geti18nTemplate NavBarTemplate

		initialize:  ->
			Backbone.Events.on "userModel:loginsuccess", @showUsernameOnNavBar, @
			Backbone.Events.on "userModel:logout", @blankUsernameOnNavBar, @
			

		blankUsernameOnNavBar:  ->
			$("#username_navbar").html('...')

		showUsernameOnNavBar: (userModel) ->
			$("#username_navbar").html(userModel.username)

  
	#Return the class definition
	NavBarView
