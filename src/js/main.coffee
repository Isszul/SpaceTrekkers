require.config
  config:
    i18n:
      locale: "root"

  paths:
    templates: "../templates"
    jquery: "libs/jquery/jquery-min"
    underscore: "libs/underscore/underscore1.4.3-min"
    text: "libs/text/text"
    json2: "libs/json2/json2"
    backbone: "libs/backbone/backbone-min"
    "backbone.wreqr": "libs/backbone/backbone.wreqr.min"
    "backbone.babysitter": "libs/backbone/backbone.babysitter.min"
    "backbone.eventbinder": "libs/backbone/backbone.eventbinder.min"
    "backbone.marionette": "libs/backbone/backbone.marionette.min"

  shim:
    underscore:
      exports: "_"

    jquery:
      exports: "$"

    backbone:
      deps: ["underscore", "jquery"]
      exports: "Backbone"

    "backbone.wreqr":
      deps: ["backbone"]
      exports: "Wreqr"

    "backbone.babysitter":
      deps: ["backbone"]
      exports: "Babysitter"

    "backbone.eventbinder":
      deps: ["backbone"]
      exports: "Eventbinder"

    "backbone.marionette":
      deps: ["backbone", "backbone.eventbinder", "backbone.babysitter", "backbone.wreqr"]
      exports: "Marionette"


# Load our app module and pass it to our definition function
require ["app"], (App) ->
  window.app = App
  window.app.start()
