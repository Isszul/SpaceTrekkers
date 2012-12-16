// Filename: router.js
define([
  'backbone.marionette'
], function(Marionette) {

  "use strict";
  var AppRouter = Marionette.AppRouter.extend({


    routes: {

      'desktop': 'showDesktop',

      // Default
      '': 'showLogin'
    },


    initialize: function() {

      window.app.on("userModel:loginsuccess", this.handleSuccessfulUserLogin, this);

    },

    showDesktop: function() {

      window.app.mainRegion.show(window.app.Views.desktopView);

    },

    showLogin: function() {


      window.app.mainRegion.show(window.app.Views.loginView);

    },



    handleSuccessfulUserLogin : function(userModel) {

      window.app.Models.userModel = userModel;
      this.navigate('#desktop', {trigger: true});

    }



  });


  return AppRouter;



});
