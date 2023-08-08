// 3-33 redirecting request
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  const reqMethod = req.method;

  if (reqUrl === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      `<body>
        <form action="/message" method="POST">
          <input name="message" type="text"/><button type="submit">send</button>
        </form>
      </body>`
    );
    res.write("</html>");
    res.end();
    // 此 return 是為了不執行下列程式碼, 又重新 set html
    return;
  }

  if (reqUrl === "/message" && reqMethod === "POST") {
    fs.writeFileSync("message.txt", "test...");
    // way 1
    // res.writeHead(302, { Location: "/" });
    
    // way 2
    res.statusCode = 302;
    res.setHeader('Location', '/')
    res.end();
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page from server</title></head>");
  res.write("<body><h1>Hello! There is from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
