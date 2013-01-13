
/*
 * GET home page.
 */

var db = require('../db');

exports.userLogin = function (req, res) {


    var username = req.query["username"];
    var password = req.query["password"];

    var validLogin = false;

    db.runSQLQuery("SELECT * FROM [user] WHERE [username] = '" + username + "' AND [password] = '" + password + "';", function (err, results) {

        if (results.length == 0) {

            validLogin = false;

        } else {

            validLogin = (results[0].username === username);
        }

        res.send({

            validLogin: validLogin

        });

    });



};
