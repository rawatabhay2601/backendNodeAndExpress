const express = require('express');
const app = express();

app.use( (req,res,next) => {
    console.log('In the middleware');
    next();
})

app.use( (req,res,next) => {
    console.log('Next middleware');
    res.send('<h1>Hello from Express.js!!</h1>');
})


app.listen(3000);