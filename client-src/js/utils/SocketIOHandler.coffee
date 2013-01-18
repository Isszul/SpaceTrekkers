define ["backbone"
		"SocketIO"

], (Backbone, SocketIO) ->

	#Class def for the model
	SocketIOHandler = Backbone.Model.extend

		socket : io.connect 'http://localhost'

	
	new SocketIOHandler()