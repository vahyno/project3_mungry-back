var models = require('../models');
var Recipe = models.Recipe;


function index (req, res){
  Recipe.find({}, function(err, recipes){
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('recipes = ',recipes);
      res.json(recipes);
    }
  })
}

function show (req, res){
  Recipe.findById(req.params.recipe_id, function(err, recipe){
    if (err){
      console.log('recipe err: ', err);
      res.send(err);
    } else {
      res.json(recipe);
    }
  });
}

function create (req, res){
  Recipe.create(req.body, function(err, newRecipe){
    if (err){
      console.log('New recipe err: ', err);
      res.send(err);
    }else {
      res.json(newRecipe);
    }
  })
}

function update (req, res){
  // Recipe.findByIdAndUpdate(req.params.recipe_id, {$set: req.body}, function(err, updatedRecipe){
  //   if (err) {
  //     console.log('updatedRecipe err: ', err);
  //     res.send(err);
  //   } else {
  //     console.log('updatedRecipe: ', updatedRecipe);
  //     res.json(updatedRecipe);
  //   }
  // });
  Recipe.findById(req.params.recipe_id, function(err, foundRecipe) {
    if (err) res.send(err);
    else {
      foundRecipe.title = req.body.title;
      foundRecipe.description = req.body.description;
      foundRecipe.ingredients = req.body.ingredients;
      foundRecipe.directions = req.body.directions;
      foundRecipe.image_url = req.body.image_url;
      foundRecipe.votes = req.body.votes;
      foundRecipe.comments = req.body.comments;

      foundRecipe.save();
      res.json(foundRecipe)
    }
  })
}

function destroy(req, res){
  Recipe.findByIdAndRemove(req.params.recipe_id, function(err, deletedRecipe){
    if (err){
      console.log('deletedRecipe err: ', err);
      res.send(err);
    } else {
      res.send('Recipe Deleted')
    }
  })
}


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
