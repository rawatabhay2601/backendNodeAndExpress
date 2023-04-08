const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/contact',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
});

module.exports = routes;