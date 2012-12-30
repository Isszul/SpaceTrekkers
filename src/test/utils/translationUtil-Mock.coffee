define ["backbone"
], (Backbone) ->

	#Class def for the model
	translationUtil = Backbone.Model.extend(

		#translates a single string
		geti18nString: (value) ->
			value 
		
		#Translation a whole page with additional options 
		geti18nTemplate: (template, options) ->
			template
			
	)
	new translationUtil