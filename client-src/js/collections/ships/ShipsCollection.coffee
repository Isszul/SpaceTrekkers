define ["backbone"
		"models/ship/ShipModel"
], (Backbone, ShipModel) ->

	#Class def for the ship model
	shipsCollection = Backbone.Collection.extend

		model: ShipModel
		url: "/ships"

		getData: ->
			@fetch
				success: (collection, results) ->
					Backbone.Events.trigger "ShipsCollection:fetchedSuccessfully", results

	shipsCollection
