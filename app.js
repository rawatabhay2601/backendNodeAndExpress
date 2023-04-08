const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');
const contactRoute = require('./routes/contact.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);

app.use('/', (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);