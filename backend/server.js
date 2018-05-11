//requirements
require('dotenv').config();
const express = require('express');
const app = express();


var recipesController = require('../controllers/recipes');
var commentsController = require('../controllers/comments');


//middleware

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes

app.get('/', function (req, res) {
    res.send('Hello World!!!');
});

//Recipe Routes
app.get('/api/recipes', recipesController.index);

//Comment Routes


// server start
let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`HTTP server listening at localhost ${ port } <3`);
});
