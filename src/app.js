'use strict'
var express = require('express');
var multer = require('multer');

// MongoDB variables
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://localhost:27017/file_meta';
var db;
var fileCollection;


var app = express();
// Initialize connection once
// Reuse database object in request handlers
MongoClient.connect(mongoUrl, function(err, database) {
  if(err) throw err;

  db = database;
  fileCollection = db.collection('file_meta');

  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
});