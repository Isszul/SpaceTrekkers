

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
		if(user.isLoggedInByClient(client)){
			ships.getShips(callback);
		};
	});

	client.on('crews', function(callback) {
		if(user.isLoggedInByClient(client)){		
			crews.getCrews(callback);
		};			
	});

	client.on('userLogin', function(username, password, callback){
		user.validateLogin(username, password, callback, client);
	});

}