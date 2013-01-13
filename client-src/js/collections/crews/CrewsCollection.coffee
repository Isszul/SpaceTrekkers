define ["backbone"
		"models/crew/CrewModel"
], (Backbone, CrewModel) ->

	#Class def for the ship model
	crewCollection = Backbone.Collection.extend

		model: CrewModel
		url: "/crews"

		getData: ->
			@fetch
				success: (collection, results) ->
					Backbone.Events.trigger "CrewsCollection:fetchedSuccessfully", results

	crewCollection
