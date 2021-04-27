//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//port no

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/static',express.static(path.join(__dirname, 'public')));


//testing
app.get('/',(req, res)=>{
	res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/register',(req, res)=>{
	res.sendFile(path.join(__dirname,'/public/test.html'));
});

app.listen(port,()=>{
	console.log('Server started at port: '+port);
});
