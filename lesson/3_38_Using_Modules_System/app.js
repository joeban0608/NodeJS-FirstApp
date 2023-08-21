// 3-38 Using the Node Modules System
const http = require("http");
const { requestHandler, requestText } = require("./routes");
const server = http.createServer(requestHandler);
console.log('requestText', requestText)

server.listen(3000);
