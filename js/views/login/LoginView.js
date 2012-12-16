define([
    'models/user/UserModel',
    'text!templates/login/loginTemplate.html',
    'backbone.marionette',
    'underscore',
    'i18n!nls/general'
], function(UserModel, loginTemplate, Marionette, _, nls) {


    var LoginView = Marionette.ItemView.extend({

        template: _.template(loginTemplate, nls),

        events: {

            'click #loginButton': function(el) {

                el.preventDefault();

                var userModel = new UserModel({
                    username: $('#username').val(),
                    password: $('#password').val()
                });

                userModel.fetch({

                    success: function() {
                        console.log('logged in OK');
                    },

                    error: function() {
                        console.log('error in login');
                    }

                });
            }
        }

    });

    return LoginView;

});
