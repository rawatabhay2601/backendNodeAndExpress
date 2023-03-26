const http = require('http');
const fs = require('fs');
let data = '';

const server = http.createServer((req,res) => {

    if(req.url === '/') {

        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write(`<body>${data}</body>`);
        res.write(`<body><form action='/message' method='POST'><div class='write'></div><input type='text' name='mesaage' placeholder='Exter Text...'></input><button type='submit'>Submit</button></form></body>`);
        res.write('</html>');
    }

    else if(req.url === '/message' && req.method==='POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
          })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            data = message;
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
})
server.listen(4000);