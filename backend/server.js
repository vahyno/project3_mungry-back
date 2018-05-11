//requirements
require('dotenv').config();

var express = require('express');
var app = express();

//middleware

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());



// server start
let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`'HTTP server listening at localhost ${ port } <3`);
});
