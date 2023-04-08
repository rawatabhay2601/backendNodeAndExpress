const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/shop',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
});

module.exports = routes;