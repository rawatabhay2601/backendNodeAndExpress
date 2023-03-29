const express = require('express');
const bodyParser = require('body-parser');
const app = express();

 
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='product' placeholder='Product'><input type='number' name='product' placeholder='Product Size'><button type='submit'>Submit</button></input></form>");
    
});

app.use('/product', (req,res,next) => {
    console.log('Product',req.body['product'][0]);
    console.log('Product-Size',req.body['product'][1]);
    res.redirect('/');
});

app.use('/', (req,res,next) => {
    res.send('<h1>Hello from Express.js!!</h1>');
});

app.listen(3000);