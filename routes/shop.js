const express = require('express');
const routes = express.Router();
const shopController = require('../controllers/shop');

routes.get('/shop',shopController.getShops);

module.exports = routes;