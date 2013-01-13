
define(["views/plainOldTemplate/PlainOldTemplate", "modules/desktop/layout/DesktopLayout"], function(PlainOldTemplate, DesktopLayout) {
  return function(DesktopModule, MyApp, Backbone, Marionette, $, _) {
    MyApp.Modules.DesktopModule = DesktopModule;
    MyApp.Layouts.desktopLayout = new DesktopLayout();
    MyApp.Views.splashView = new PlainOldTemplate("templates/splash/splashTemplate.html");
    MyApp.Views.crewView = new PlainOldTemplate("templates/crew/crewTemplate.html");
    MyApp.Views.shipsView = new PlainOldTemplate("templates/ships/shipsTemplate.html");
    DesktopModule.app = MyApp;
    DesktopModule.showDesktop = function() {
      this.app.mainRegion.show(this.app.Layouts.desktopLayout);
      this.app.Layouts.desktopLayout.desktoptop.show(this.app.Views.splashView);
      this.app.Layouts.desktopLayout.desktopleft.show(this.app.Views.shipsView);
      return this.app.Layouts.desktopLayout.desktopright.show(this.app.Views.crewView);
    };
    return DesktopModule.addInitializer(function() {
      MyApp.app_router.route('desktop', 'desktop', this.showDesktop);
      return MyApp.app_router.route('', '', this.showDesktop);
    });
  };
});
