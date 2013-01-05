define ["jquery"
        "underscore"          
        "backbone.marionette"
        "text!templates/tree/treeTemplate.html" 
        "translationUtil"
        "jstree"
], ($, _, Marionette, TreeTemplate, TranslationUtil, jstree) ->

	# Class def for the view.
	TreeView = Marionette.View.extend
	
		#template is shown on the region when a .show is passed this view
		template: TranslationUtil.geti18nTemplate TreeTemplate

		onShow: ->
			$("#tree").jstree
				"themes": 
					"theme": "default"
				
				"json_data":
					"data": [
						"data" : "test"
						"children" : [
							"data" : "child"
						]
					,	
						"data" : "test2"
						"children" : [
							"data" : "child2"
						]
					]
				"plugins" : [ "themes", "json_data", "ui", "crrm", "contextmenu" ]


  
	#Return the class definition
	TreeView
