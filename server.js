
/**
 * Module dependencies.
 */

var express = require('express'),
    io = require('socket.io'),
    routes = require('./server-src/routes');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/WebContent/client'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

routes.setupRouting(app);

var socket = io.listen(app);

socket.configure(function () {
  socket.set('transports', ['websocket', 'flashsocket', 'xhr-polling']);
});

app.listen(process.env.port || 3000);



socket.on('connection', function (client) {

    console.log("Socket.IO connection***");

    routes.setupRoutingSocketIO(client);

});

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
