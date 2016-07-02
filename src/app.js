'use strict';
var express = require('express');
var multer = require('multer');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var upload = multer();

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');  
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

app.listen(process.env.PORT || 3000, console.log('Server is running...'));