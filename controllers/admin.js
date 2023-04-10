const path = require('path');
const Products = require('../models/admin-add-product');

exports.getAdmin = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','admin-add-product.html'));
};

exports.postAdmin = (req,res,next) => {
    const prod = new Products(req.body.product);
    prod.save();
    Products.fetchAll();
    res.redirect('/shop');
};