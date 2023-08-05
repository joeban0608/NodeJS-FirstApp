const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // Change this to the desired port number

const server = http.createServer((req, res) => {
  // Determine the file path of the requested file
  const filePath = path.join(__dirname, 'index.html');

  // Read the HTML file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If an error occurs (e.g., file not found), send a 404 response
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      // If the file is read successfully, send a 200 OK response with the HTML content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});