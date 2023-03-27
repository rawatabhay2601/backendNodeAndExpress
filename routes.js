const fs = require('fs');
let data = '';

let handleRoutes = (req,res) => {

    if(req.url === '/') {

        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write(`<body>${data}</body>`);
        res.write(`<body><form action='/message' method='POST'><div class='write'></div><input type='text' name='mesaage' placeholder='Exter Text...'></input><button type='submit'>Submit</button></form></body>`);
        res.write('</html>');
        return res.end();
        
    }

    else if(req.url === '/message' && req.method==='POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
          })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            data = parsedBody.split('=')[1];
            fs.writeFile('message.txt',data, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write(`<body>Hello this is my Node Project</body>`);
    res.write('</html>');
    res.end();
}

// module.exports = handleRoutes;
// // --------------------------------------------------------------------------------------------
// module.exports.handler = handleRoutes;
// module.exports.someText = 'This is a message!!';
// --------------------------------------------------------------------------------------------
exports.handler = handleRoutes;
exports.someText = 'This is a message!!';