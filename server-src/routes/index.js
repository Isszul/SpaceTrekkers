

var user = require("../user");

exports.setupRouting = function (app) {

    // Routes
    app.get('/user', user.userLogin);

};