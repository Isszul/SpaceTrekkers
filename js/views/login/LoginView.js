define([
	'models/user/UserModel',
	'text!templates/login/loginTemplate.html',
    'backbone.marionette'
], function (UserModel, homeTemplate, Marionette) {


    var HomeView = Marionette.ItemView.extend({

        template: homeTemplate,

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

    return HomeView;

});
