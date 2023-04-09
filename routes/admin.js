const express = require('express');
const routes = express.Router();
const adminController = require('../controllers/admin');

routes.get('/add-product',adminController.getAdmin);

module.exports = routes;