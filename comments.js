// create web server
// launch web server
// listen for incoming requests
// handle request
// close server

// 1. require http module
const http = require('http');
const comments = require('./comments');

// 2. create web server
const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(comments));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

// 3. launch web server
server.listen(3000, 'listening on port 3000');