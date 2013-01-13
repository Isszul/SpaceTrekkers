
var sql = require('node-sqlserver');

// server connection info
var driver = 'SQL Server Native Client 11.0';
var server = '(local)\\SQLEXPRESS';
var user = 'sa';
var pwd = 'monkey123';
var database = 'marionettebase';
var useTrustedConnection = true;
var conn_str = "Driver={" + driver + "};Server=" + server + ";" + (useTrustedConnection == true ? "Trusted_Connection={Yes};" : "UID=" + user + ";PWD=" + pwd + ";") + "Database={" + database + "};";

exports.runSQLQuery = function (query, callback) {

    console.log("Connect String : " + conn_str)

    console.log("SQL : " + query);

    sql.query(conn_str, query, function (err, results) {


        console.log("Err : " + err);

        console.log(results);

        callback(err, results);

    });



};