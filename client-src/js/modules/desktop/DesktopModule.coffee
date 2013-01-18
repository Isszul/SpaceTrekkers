define ["views/plainOldTemplate/PlainOldTemplate"
		"modules/desktop/layout/DesktopLayout"
		"views/ships/ShipsView"
		"views/crews/CrewsView"
		"collections/crews/CrewsCollection"
		"collections/ships/ShipsCollection"
], (PlainOldTemplate, DesktopLayout, ShipsView, CrewsView, CrewsCollection, ShipsCollection) ->

	(DesktopModule, MyApp, Backbone, Marionette, $, _) ->

		MyApp.Modules.DesktopModule = DesktopModule	
		
		MyApp.Layouts.desktopLayout = new DesktopLayout()

		MyApp.Collections.crewsCollection = new CrewsCollection()
		MyApp.Collections.shipsCollection = new ShipsCollection()

		MyApp.Views.splashView = new PlainOldTemplate("templates/splash/splashTemplate.html")
		MyApp.Views.crewView = new CrewsView()
		MyApp.Views.shipsView = new ShipsView()

		DesktopModule.app = MyApp

		#Shows the desktop in the main Region
		DesktopModule.showDesktop =  () ->
			@app.mainRegion.show @app.Layouts.desktopLayout	

			@app.Layouts.desktopLayout.desktoptop.show @app.Views.splashView	
			@app.Layouts.desktopLayout.desktopleft.show @app.Views.shipsView
			@app.Layouts.desktopLayout.desktopright.show @app.Views.crewView	

		DesktopModule.handleSuccessfulUserLogin  = () ->
			MyApp.Collections.crewsCollection.getData()	
			MyApp.Collections.shipsCollection.getData()

		DesktopModule.addInitializer () ->
			#show desktop route
			MyApp.app_router.route 'desktop', 'desktop', @showDesktop		
			MyApp.app_router.route '', '', @showDesktop	

			Backbone.Events.on "userModel:loginsuccess", @handleSuccessfulUserLogin, this
