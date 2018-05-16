var mongoose = require('mongoose');
var Schema = mongoose.Schema;
Comment = require('./comment');

var RecipeSchema = new Schema({
  title: String,
  description: String,
  ingredients: String,
  directions: String,
  image_url: String,
  votes: Number,
  comments: [Comment.schema]
});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
