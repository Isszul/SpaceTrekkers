

var user = require("../user"),
	ships = require("../ships"),
	crews = require("../crews");

exports.setupRouting = function (app) {

    // Routes
    app.get('/user', user.userLogin);

    app.get('/ships', ships.get);

    app.get('/crews', crews.get);

};


exports.setupRoutingSocketIO = function(client) {

	client.on('ships', function(callback) {
		callback(ships.getShips());
	});

	client.on('crews', function(callback) {
		callback(crews.getCrews());
	});

	client.on('userLogin', function(username, password, callback){
		user.isValidLogin(username, password, callback);
	});

}