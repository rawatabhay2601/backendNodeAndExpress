const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoute);
app.use(shopRoute);

app.use('/', (req,res,next) => {
    res.status(404).send("<h1 style='color:red'>Page Not Found !!!</h1>");
});

app.listen(3000);