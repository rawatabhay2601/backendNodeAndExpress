const path = require('path');

exports.postSuccessMessage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','success.html'));
};
