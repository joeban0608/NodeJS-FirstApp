const http = require("http");

// create server
/* 
  // way1
  const rqListener = (req, res) => {

  }; 

  http.createServer(rqListener)
*/

// way2
const server = http.createServer((req, res) => {
  console.log("req", req);
  process.exit();
});

server.listen(3000);
