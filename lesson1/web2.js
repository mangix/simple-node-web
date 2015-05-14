var http = require('http');

http.createServer(function(req,res){
  res.end('hello web2');
}).listen(9000);
