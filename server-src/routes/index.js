

var user = require("../user"),
	ships = require("../ships"),
	crews = require("../crews");

exports.setupRouting = function (app) {

    // Routes
    app.get('/user', user.userLogin);

    app.get('/ships', ships.get);

    app.get('/crews', crews.get);

};