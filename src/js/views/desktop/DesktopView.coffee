define ["jquery",
        "underscore",           
        "backbone.marionette", 
        "text!templates/desktop/desktopTemplate.html", 
        "i18n!nls/general"
], ($, _,  Marionette, desktopTemplate, nls) ->
	
  #Class definition for the desktop view	
  DesktopView = Marionette.ItemView.extend(
  	
  	template: _.template(desktopTemplate, nls)
  	
  )
  
  #Return this definition to the caller.
  DesktopView