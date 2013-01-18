define ["backbone"
		"models/crew/CrewModel"
		"SocketIOHandler"		
], (Backbone, CrewModel, SocketIOHandler) ->

	#Class def for the ship model
	crewCollection = Backbone.Collection.extend

		model: CrewModel
		url: "/crews"

		getData: ->
			SocketIOHandler.socket.emit 'crews', (data) ->
				Backbone.Events.trigger "CrewsCollection:fetchedSuccessfully", data
				
		#	@fetch
		#		success: (collection, results) ->
		#			Backbone.Events.trigger "CrewsCollection:fetchedSuccessfully", results

	crewCollection
