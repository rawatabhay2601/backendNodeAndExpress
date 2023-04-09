const express = require('express');
const routes = express.Router();
const contactController = require('../controllers/contact');

routes.get('/contact',contactController.getContact);

module.exports = routes;