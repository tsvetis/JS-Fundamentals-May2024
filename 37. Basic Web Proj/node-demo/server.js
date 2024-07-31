const http = require("http");
const fs = require("fs");

const htmlPage = fs.readFileSync("./index.html");

http
  .createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200);
    // res.write(`
    //     <h1>Hello World!</h1>
    //     <p>This is softuni course application! </p>
    //     `);

    res.write(htmlPage);
    res.end();
  })
  .listen(3300, () => console.log("Server is running on port 3300!!!!"));
