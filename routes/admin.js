const express = require('express');
const routes = express.Router();

routes.get('/add-product',(req,res,next) => {
    res.send("<form action='/admin/add-product' method='POST'><input type='text' name='product' placeholder='Product'><input type='number' name='product' placeholder='Product Size'><button type='submit'>Submit</button></input></form>");
});

routes.post('/add-product',(req,res,next) => {
    console.log('This is admin');
    res.send('<h1>This is the Product</h1>');
});

module.exports = routes;