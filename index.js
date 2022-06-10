'use strict';

const os = require('os');
os.hostname = () => 'localhost';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});

const init = async () => {

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response('Hello home!');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    //module.exports = server;
};

init();

module.exports = server;
