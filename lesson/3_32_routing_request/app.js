// 3-32 routing request
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
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

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page from server</title></head>");
  res.write("<body><h1>Hello! There is from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
