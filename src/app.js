'use strict'
var express = require('express');
var multer = require('multer');

var app = express();

app.get('/', function (req, res) {
	res.send('Root.');
});

app.listen('8000', console.log('Server is running...'));