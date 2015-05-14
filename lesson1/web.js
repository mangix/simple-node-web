var http = require("http");

http.createServer(function (req, res) {
    res.end("hello world1");
}).listen(3000);
