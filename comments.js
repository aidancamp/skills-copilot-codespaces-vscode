// Create web server
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(request, response){
    // Read