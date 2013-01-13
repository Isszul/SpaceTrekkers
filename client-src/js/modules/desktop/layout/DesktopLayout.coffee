define ["backbone"
		"backbone.marionette"
		"text!templates/desktop/desktopLayout.html" 
		"views/plainOldTemplate/PlainOldTemplate"
], (Backbone, Marionette, DesktopLayout, PlainOldTemplate) ->

	desktopLayout = Marionette.Layout.extend

		template: DesktopLayout

		regions: 
			desktoptop: "#desktop-top"
			desktopleft: "#desktop-left"
			desktopright: "#desktop-right"

	desktopLayout