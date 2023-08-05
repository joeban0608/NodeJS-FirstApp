// Sending Response
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page from server</title></head>");
  res.write("<body><h1>Hello! There is from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
