//requirements
require('dotenv').config();
const express = require('express');
const app = express();


var recipesController = require('./controllers/recipes');
var commentsController = require('./controllers/comments');


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
app.get('/api/profiles', function(req, res){
  res.json({
    name:"Emma & Michal",
    githubUserNames: ["emmazingjane","vahyno"],
    githubLinks: ["https://github.com/emmazingjane","https://github.com/vahyno"],
  })
});

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

//Recipe Routes
app.get('/api/recipes', recipesController.index);
app.post('/api/recipes', recipesController.create);
app.get('/api/recipes/:recipe_id', recipesController.show);
app.put('/api/recipes/:recipe_id', recipesController.update);
app.delete('/api/recipes/:recipe_id', recipesController.destroy);

//Comment Routes
app.get('/api/recipes/:recipe_id/comments', commentsController.index);
app.post('/api/recipes/:recipe_id/comments', commentsController.create);
// app.get('/api/recipes/:recipe_id/comments/:comment_id', commentsController.show);
// app.put('/api/recipes/:recipe_id/comments/:comment_id', commentsController.update);
app.delete('/api/recipes/:recipe_id/comments/:comment_id', commentsController.destroy);


// server start
let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`HTTP server listening at localhost ${ port } <3`);
});
