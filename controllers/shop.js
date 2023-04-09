const path = require('path');

exports.getShops = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
};