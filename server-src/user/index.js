
/*
 * GET home page.
 */

var db = require('../db');
var clients = {};
var users = {};


exports.userLogin = function (req, res) {

    var username = req.query["username"];
    var password = req.query["password"];

    exports.isValidLogin(username, password, function(result){
        res.send(result);
    });

};




exports.isLoggedInByUsername = function(username){
    return (users[username] !=  null);
}

exports.isLoggedInByClient = function(client){
    return (clients[client.id] != null);
}


exports.validateLogin = function(username, password, callback, client) {

    var validLogin = false;

    db.runSQLQuery("SELECT * FROM [user] WHERE [username] = '" + username + "' AND [password] = '" + password + "';", 

        function (err, results) {

            if (results.length == 0) {
                validLogin = false;
            } else {
                validLogin = (results[0].username === username);
            }

            if (validLogin == true) {
                users[username] = client.id;
                clients[client.id] = client;
            }

            callback({
                "username": username,
                "validLogin": validLogin
            });

        }
    );

};
