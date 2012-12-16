define([
	'models/user/UserModel',
	'text!templates/login/loginTemplate.html',
    'backbone.marionette'
], function (UserModel, loginTemplate, Marionette) {


    var LoginView = Marionette.ItemView.extend({

        template: loginTemplate,

        events: {

            "click #loginButton": function (el) {

                el.preventDefault();

                var userModel = new UserModel({ 
                    username: $('#username').val(), 
                    password: $('#password').val() 
                });

                userModel.fetch({

                    success: function () {
                        console.log("logged in OK");
                    },

                    error: function () {
                        console.log("error in login");
                    }

                });
            }
        }

    });

    return LoginView;

});
