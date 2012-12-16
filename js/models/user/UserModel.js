define([
'backbone'
], function(Backbone) {

    var userModel = Backbone.Model.extend({

        defaults: {
            username: 'unknown',
            password: 'unknown'
        },

        initialize: function(options) {
            this.username = options.username;
            this.password = options.password;
        },

        url: function() {
            return 'test/?username=' + this.username +
                '&password=' + this.password;
        },

        attemptLogin: function(){

            this.fetch({

                success: function(userModel, response, options) {
                    console.log('logged in OK');
                    window.app.trigger("userModel:loginsuccess", userModel);                    
                },

                error: function(userModel, jqXHR, options) {
                    console.log('error in login');
                    window.app.trigger("userModel:loginsuccess", userModel);
                }
            });

        }

    });

    return userModel;

});
