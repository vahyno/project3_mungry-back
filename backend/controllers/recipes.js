var models = require('../models');
var Recipe = models.Recipe;


function index (req, res){
  Recipe.find({}, function(err, recipes){
    if (err) {
      console.log(err);
    } else {
      console.log('recipes = ',recipes);
      res.json(recipes);
    }
  })
}

function show (req, res){

}

function create (req, res){

}

function update (req, res){

}

function destroy(req, res){

}


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
