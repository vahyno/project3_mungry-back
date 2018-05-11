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





module.exports.index= index;
module.exports.create = create;
// module.exports.update = update;
module.exports.destroy = destroy;
