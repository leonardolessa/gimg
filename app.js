var Hapi = require('hapi');
var handlers = require('./handlers');

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
    host: process.env.DOMAIN || 'localhost',
    port: process.env.PORT || 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/{width}/{height?}',
    handler: handlers.index
});

// Start the server
server.start(function () {
    if (!process.env.DOMAIN) {
        console.log('Server running at:', server.info.uri);
    }
});
