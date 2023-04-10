const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');
const contactRoute = require('./routes/contact.js');
const errorRoute = require('./routes/404.js');
const successRoute = require('./routes/success.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);
app.use(errorRoute);

app.listen(3000);