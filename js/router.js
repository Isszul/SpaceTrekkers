// Filename: router.js
define([
  'views/login/LoginView'
], function(LoginView) {
  
  var AppRouter = Backbone.Marionette.AppRouter.extend({

    routes: {
      // Default
      '*actions': 'defaultAction'
    },

    initialize: function(app){

      this.app = app;
      this.loginView = new LoginView();

    },


    defaultAction : function (actions) {
       // We have no matching route, lets display the home page 
      this.app.mainRegion.show(this.loginView);

    }


  });


  return AppRouter;
 


});
