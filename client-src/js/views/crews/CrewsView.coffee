define ["jquery"
		"underscore"          
		"backbone.marionette"
		"translationUtil"
		"text!templates/crews/crewsTemplate.html"

], ($, _, Marionette, TranslationUtil, CrewsTemplate) ->

	# Class def for the view.
	crewsView = Marionette.ItemView.extend

		template: TranslationUtil.geti18nTemplate CrewsTemplate

		initialize: () ->
			Backbone.Events.on "CrewsCollection:fetchedSuccessfully", @.reRender, this

		reRender: (crews) ->
			@.template =  TranslationUtil.geti18nTemplate CrewsTemplate, crews
			@.render()


	crewsView