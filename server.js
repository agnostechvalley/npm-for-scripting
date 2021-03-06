'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
	port: process.env.PORT || 3000
});

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		return reply('Welcome to Hapi');
	}
});

server.route({
	method: 'GET',
	path: '/ping',
	handler: function (request, reply) {
		return reply('Pong pong pong!');
	}
});

server.start(err => {
	if (err) {
		throw err;
	}

	console.log('Server running at: ', server.info.uri);
});
