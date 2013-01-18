define ["backbone"
		"models/ship/ShipModel"
		"SocketIOHandler"
], (Backbone, ShipModel, SocketIOHandler) ->

	#Class def for the ship model
	shipsCollection = Backbone.Collection.extend

		model: ShipModel
		url: "/ships"

		getData: ->
			SocketIOHandler.socket.emit 'ships', (data) ->
				Backbone.Events.trigger "ShipsCollection:fetchedSuccessfully", data

		#	@fetch
		#		success: (collection, results) ->
		#			Backbone.Events.trigger "ShipsCollection:fetchedSuccessfully", results

	shipsCollection
