define ["jquery"
	"underscore"
	"backbone.marionette"
	"translationUtil"
], ($, _, Marionette, TranslationUtil) ->

	# Class def for the view.
	plainOldTemplateView = Marionette.ItemView.extend

		template: "<div>" + TranslationUtil.geti18nString 'loading' + "</div>"

		initialize: (templateFileName, options) ->

			_template = $.ajax 
				url: templateFileName
				async: false

			@template = TranslationUtil.geti18nTemplate _template.responseText, options

			@
	

	#Return the class definition
	plainOldTemplateView
