define ["backbone"
], (Backbone) ->

	#Class def for the model
	TranslationUtil = Backbone.Model.extend

		#translates a single string
		geti18nString: (value) ->
			value 
		
		#Translation a whole page with additional options 
		geti18nTemplate: (template, options) ->
			template
			
	
	new TranslationUtil()
