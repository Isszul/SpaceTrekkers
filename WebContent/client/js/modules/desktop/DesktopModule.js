
define(["views/plainOldTemplate/PlainOldTemplate", "modules/desktop/layout/DesktopLayout", "views/ships/ShipsView", "views/crews/CrewsView", "collections/crews/CrewsCollection", "collections/ships/ShipsCollection"], function(PlainOldTemplate, DesktopLayout, ShipsView, CrewsView, CrewsCollection, ShipsCollection) {
  return function(DesktopModule, MyApp, Backbone, Marionette, $, _) {
    MyApp.Modules.DesktopModule = DesktopModule;
    MyApp.Layouts.desktopLayout = new DesktopLayout();
    MyApp.Collections.crewsCollection = new CrewsCollection();
    MyApp.Collections.shipsCollection = new ShipsCollection();
    MyApp.Views.splashView = new PlainOldTemplate("templates/splash/splashTemplate.html");
    MyApp.Views.crewView = new CrewsView();
    MyApp.Views.shipsView = new ShipsView();
    DesktopModule.app = MyApp;
    DesktopModule.showDesktop = function() {
      this.app.mainRegion.show(this.app.Layouts.desktopLayout);
      this.app.Layouts.desktopLayout.desktoptop.show(this.app.Views.splashView);
      this.app.Layouts.desktopLayout.desktopleft.show(this.app.Views.shipsView);
      return this.app.Layouts.desktopLayout.desktopright.show(this.app.Views.crewView);
    };
    DesktopModule.handleSuccessfulUserLogin = function() {
      MyApp.Collections.crewsCollection.getData();
      return MyApp.Collections.shipsCollection.getData();
    };
    return DesktopModule.addInitializer(function() {
      MyApp.app_router.route('desktop', 'desktop', this.showDesktop);
      MyApp.app_router.route('', '', this.showDesktop);
      return Backbone.Events.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);
    });
  };
});
