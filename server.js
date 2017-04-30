const restify = require('restify');
const plugins = require('restify-plugins');
const server = restify.createServer();

server.use(plugins.gzipResponse());

server.put('image', (req, res) => {
    res.send(200, 'OK!');
});

// For testing
module.exports = server;

// For actually running the server  
if (!module.parent) {
    server.listen(8888);
    console.log('Listening on 8888');
}
