const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

const STATIC_PATH = process.env.STATIC_PATH || './public';
const PORT = process.env.PORT || 8000;
const serve = serveStatic(STATIC_PATH);

const server = http.createServer(function(req, res) {
  const done = finalhandler(req, res);
  serve(req, res, done);
});

console.log(`Server listening on port ${PORT}`);
server.listen(PORT);
