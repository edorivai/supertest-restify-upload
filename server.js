const restify = require('restify');
const server = restify.createServer();

server.use(restify.gzipResponse());

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
