define([
'backbone'
], function (Backbone) {

    var userModel = Backbone.Model.extend({

        defaults: {
            username: "unknown",
            password: "unknown"
        },

        initialize: function (options) {
            this.username = options.username;
            this.password = options.password;
        },

        url: function () {
            return 'test/?username=' + this.username + "&password=" + this.password;
        }

    });

    return userModel;

});