define ["backbone"
], (Backbone) ->

	#Class def for the ship model
	shipModel = Backbone.Model.extend
		
		#Defaults values passed on empty contruction
		defaults:
			icon:"plane"
			name:""
			level:0
			damage:100


		#Contructor
		initialize: (options) ->
			@icon = options.icon
			@name = options.name
			@level = options.level
			@damage = options.damage
			@

		#REST Url used when calling .save() .fetch() etc...
		url: -> "ship" 

	
	
	#Return the userModel definition
	shipModel
