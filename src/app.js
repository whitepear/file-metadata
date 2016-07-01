'use strict'
var express = require('express');
var multer = require('multer');

var app = express();
var upload = multer();

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');  
}); // end '/'

app.post('/', upload.single('metaFile'), function (req, res){	
	console.log('Post request received.');
	if (req.file) {
		console.log('File exists.');
		res.json({ size: req.file.size });
	} else {
		console.log('File not found.');
	}
});

app.listen(3000, console.log('Server is running...'));