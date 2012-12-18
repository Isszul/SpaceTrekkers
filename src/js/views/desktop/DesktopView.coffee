define ["text!templates/desktop/desktopTemplate.html", 
        "backbone.marionette", 
        "underscore", 
        "i18n!nls/general"
], (desktopTemplate, Marionette, _, nls) ->
  DesktopView = Marionette.ItemView.extend(template: _.template(desktopTemplate, nls))
  DesktopView