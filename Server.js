const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url == '/home'){

        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body> Welcome to Home !!!</body>');
        res.write('</html>');
    }
    else if(req.url == '/about'){
        
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body> Welcome to About Us page !!!</body>');
        res.write('</html>');
    }
    else if(req.url == '/node'){
        
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body> Welcome to my Node Js project!!!</body>');
        res.write('</html>');
    }
})
server.listen(4000);