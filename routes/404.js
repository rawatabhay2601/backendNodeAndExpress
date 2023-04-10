const express = require('express');
const routes = express.Router();
const errorController = require('../controllers/404.js');

routes.use('/',errorController.getError);

module.exports = routes;