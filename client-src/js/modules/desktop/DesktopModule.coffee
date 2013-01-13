define ["views/plainOldTemplate/PlainOldTemplate"
		"modules/desktop/layout/DesktopLayout"
], (PlainOldTemplate, DesktopLayout) ->

	(DesktopModule, MyApp, Backbone, Marionette, $, _) ->

		MyApp.Modules.DesktopModule = DesktopModule	
		
		MyApp.Layouts.desktopLayout = new DesktopLayout()

		MyApp.Views.splashView = new PlainOldTemplate("templates/splash/splashTemplate.html")
		MyApp.Views.crewView = new PlainOldTemplate("templates/crew/crewTemplate.html")
		MyApp.Views.shipsView = new PlainOldTemplate("templates/ships/shipsTemplate.html")

		DesktopModule.app = MyApp

		#Shows the desktop in the main Region
		DesktopModule.showDesktop =  ->
			@app.mainRegion.show @app.Layouts.desktopLayout	

			@app.Layouts.desktopLayout.desktoptop.show @app.Views.splashView	
			@app.Layouts.desktopLayout.desktopleft.show @app.Views.shipsView
			@app.Layouts.desktopLayout.desktopright.show @app.Views.crewView	


		DesktopModule.addInitializer ->
			#show desktop route
			MyApp.app_router.route 'desktop', 'desktop', @showDesktop		
			MyApp.app_router.route '', '', @showDesktop		
	