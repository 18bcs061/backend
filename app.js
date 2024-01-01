// Import the 'http' module
const http = require('http');

// Create an HTTP server that listens on port 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Worldss!\n');
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
