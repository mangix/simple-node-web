var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'node'
});

http.createServer(function(req,res){
    connection.query('select * from Team' , function(error , results){
        if(error){
            res.end(error.stack);
        }else{
            res.end(JSON.stringify(results));
        }
    });
}).listen(3000);
