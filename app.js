const http = require('http');
const fs = require('fs');
let data = '';
let routes = require('./routes'); 
console.log(routes.someText);
const server = http.createServer(routes.handler);
server.listen(4000);