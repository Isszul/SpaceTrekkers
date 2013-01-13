define ["backbone"
], (Backbone) ->

	#Class def for the ship model
	crewModel = Backbone.Model.extend
		
		#Defaults values passed on empty contruction
		defaults:
			icon:"plane"
			name:""
			level:0
			specialisation: ""
			hp: 100
			exp: 0


		#Contructor
		initialize: (options) ->
			@icon = options.icon
			@name = options.name
			@level = options.level
			@specialisation = options.specialisation
			@hp = options.hp
			@exp = options.exp			
			@

		#REST Url used when calling .save() .fetch() etc...
		url: -> "crew" 

	
	
	#Return the userModel definition
	crewModel
