define ["jquery"
		"underscore"          
		"backbone.marionette"
		"translationUtil"
		"text!templates/ships/shipsTemplate.html"

], ($, _, Marionette, TranslationUtil, ShipsTemplate) ->

	# Class def for the view.
	shipsView = Marionette.ItemView.extend

		template: TranslationUtil.geti18nTemplate ShipsTemplate

		initialize: () ->
			Backbone.Events.on "ShipsCollection:fetchedSuccessfully", @.reRender, this

		reRender: (ships) ->
			@.template =  TranslationUtil.geti18nTemplate ShipsTemplate, ships
			@.render()


	shipsView
