define ["jquery"
				"underscore",          
				"backbone.marionette" 
				"text!templates/desktop/desktopTemplate.html"
				"translationUtil"
				"jqueryui"
], ($, _,  Marionette, desktopTemplate, TranslationUtil) ->
	
	#Class definition for the desktop view	
	DesktopView = Marionette.ItemView.extend(
		
		template: TranslationUtil.geti18nTemplate desktopTemplate
		
		onShow: () ->
			$("#WelcomeDialog").dialog({
				modal: true
			})
		
	)
	
	#Return this definition to the caller.
	DesktopView