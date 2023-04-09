const path = require('path');

exports.getAdmin = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','admin-add-product.html'));
};
