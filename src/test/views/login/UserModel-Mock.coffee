define ["backbone"
], (Backbone) ->

  #Class def for the user model mock
	userModelMock = Backbone.Model.extend
		#Public function to attempt the login.
		attemptLogin: ->
			Backbone.Events.trigger "userModel:attemptLogin", @

  
  #Return the userModel-Mock definition
	userModelMock