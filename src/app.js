'use strict'
var express = require('express');
var multer = require('multer');

var app = express();
var upload = multer();

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');  
}); // end '/'

app.post('/', upload.single('metaFile'), function (req, res){	
	// size 	Size of the file in bytes
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
});

app.listen(3000, console.log('Server is running...'));