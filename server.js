var http = require("http");
var socket = require("socket.io");
var express = require("express");
var logger = require("morgan");
var httpserver, app, io;
// Define routers
var apiV1 = require('./api1.js');
var port;
var io;
var apptitle = 'express';
port=1234;
app = express();
app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(logger("short"));
app.use(express.static(__dirname+"/static"));

app.get('/',function(req,res){
 res.render('index',{title: apptitle});
});


// router
app.use('/api/v1',apiV1);

httpserver = http.createServer(app);
io = socket.listen(httpserver);

httpserver.listen(port,function(){
 console.log("Server started and listening on port " + port);    
});
