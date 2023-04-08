const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','admin-add-product.html'));
});


module.exports = routes;