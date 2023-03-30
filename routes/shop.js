const express = require('express');
const routes = express.Router();

routes.get('/product',(req,res,next) => {
    console.log('this is the shop');
    res.send('<h1>Hello from Shop.js!!!</h1>');
});

module.exports = routes;