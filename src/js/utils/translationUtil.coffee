define ["backbone"
        "i18n!nls/general"
        "handlebars"
], (Backbone, nls, Handlebars) ->

  #Class def for the model
  translationUtil = Backbone.Model.extend(

    #translates a single string
    geti18nString: (value) ->
      nls[value] 
  
    
    #Translation a whole page with additional options 
    geti18nTemplate: (template, options) ->
      _template = Handlebars.compile(template)({ nls: nls, options: options })
      _template
      
  )
  new translationUtil