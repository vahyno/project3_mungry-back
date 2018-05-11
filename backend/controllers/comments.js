var models = require('../models');
var Comment = models.Comment;
var Recipe = models.Recipe;

function index(req, res) {
  Recipe.findById(req.params.recipe_id, function(err, recipe) {
    if (err) {
      console.log(err);
      res.send(err);
    }else {
      var comments = recipe.comments;
      console.log('All comments: ', comments);
      res.json(comments);
    }
  });
}

function create(req, res){
  Comment.create(req.body, function(err, createdComment){
    if (err){
      console.log('createdComment err: ', err);
      res.send(err);
    } else {
      Recipe.findById(req.params.recipe_id, function(err, foundRecipe){
        if (err){
          console.log('foundRecipe err: ',err);
          res.send(err);
        }else {
          recipe.comments.push(createdComment);
          recipe.save();
          res.json(createdComment);
          console.log(createdComment);
        }
      });
    }
  });
}

function destroy(req, res){
  Comment.findByIdAndRemove(req.params.comment_id, function(err, deletedComment){
    if (err){
      console.log('deletedComment err:',err);
      res.send(err);
    } else {
      Recipe.findByIdAndUpdate(req.params.recipe_id,
      {$pull: {comments: {_id: req.params.comment_id}}}, function (err){
        if (err){
          console.log('deletedComment err :',err);
          res.send(err);
        } else {
          res.send('Success: deletedComment')
        }
      });
    }
  });
}

module.exports.index= index;
module.exports.create = create;
// module.exports.update = update;
module.exports.destroy = destroy;
