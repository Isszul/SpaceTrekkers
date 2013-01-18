define ["backbone"
		"SocketIOHandler"
], (Backbone, SocketIOHandler) ->

	#Class def for the user model
	userModel = Backbone.Model.extend
		
		#Defaults values passed on empty contruction
		defaults:
			username: "unknown"
			password: "unknown"


		#Contructor
		initialize: (options) ->
			@username = options.username
			@password = options.password
			@

		#REST Url used when calling .save() .fetch() etc...
		url: -> 
            "user?username=#{@username}&password=#{@password}" 

        createUser: (firstname, surname, email, username, password) ->
        	#TODO: Add create user logic
        	@


		#Public function to attempt the login.
		attemptLogin: ->
			SocketIOHandler.socket.emit 'userLogin', @username, @password, (data) ->
				if data.validLogin == true
					Backbone.Events.trigger "userModel:loginsuccess", data
				else
					Backbone.Events.trigger "userModel:loginfailure", data

			#Call fetch internally but attach success and error handlers 
			#@fetch

		        #When the ajax call fails
			#	error: (userModel, jqXHR, options) ->
			#		Backbone.Events.trigger "userModel:loginfailure", userModel
			
				#When there is a successful request made (still need to validate and check the response)
			#	success: (userModel, response, options) ->
			#		Backbone.Events.trigger "userModel:loginsuccess", userModel if response.validLogin
			#		Backbone.Events.trigger "userModel:loginfailure", userModel if !response.validLogin



	
	
	#Return the userModel definition
	userModel
