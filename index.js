var express = require('express');
var app = express.Router();
var port = 3000;

app.get('/',function(req,res){
    res.render('home.html');
})

app.listen(port);
console.log('connected to: '+port)