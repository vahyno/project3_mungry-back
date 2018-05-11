//seed
var db = require('./models');

var comments = [{
  content: 'Yeah real tasty.',
}, {
  content: 'Easy to make, would do again.',
}, {
  content: 'Pretty good.',
}];


var seedRecipes = [{
  title: 'Thai Peanut Hummus',
  description: 'This Thai Peanut Hummus is filled with Thai peanut sauce ingredients like Sriracha, garlic, and ginger! A healthy gluten free and vegan snack!',
  ingredients: '1 15-oz. can Chickpeas, 1 handful Cilantro leaves, 2 small cloves Garlic, 1/4 tsp Ginger - ground, 2 Green onions, 1 Lime - zest and juice, 1/2 tbsp Honey, 2 tbsp Peanut butter, 2 tbsp Sriracha, Salt, Pepper',
  directions: 'Add chickpeas, peanut butter, Sriracha, ginger, garlic, honey/maple syrup/agave, and salt and pepper to taste into a food processor. Process until broken up. Scrape the sides with a spatula as needed. With the motor running, drizzle in olive oil and ice water. This will help the mixture come together and get super-smooth! Once the hummus is processed to your desired texture, taste and adjust seasoning as necessary. Mix in peanuts, green onions, and cilantro with a spatula. Serve with tortilla chips and a squeeze of lime.',
  image_url: 'https://swj0y6xl9l-flywheel.netdna-ssl.com/wp-content/uploads/2016/03/thai-peanut-hummus-56.jpg',
  votes: 12,
  comments: [comments[0], comments[1]],
},{
  title: 'Lemon and Herb Spaghetti Squash',
  description: 'This Lemon and Herb Spaghetti Squash with Roasted Shrimp is a lighter taken on shrimp scampi that is quick and easy, healthy and full of so much flavor!',
  ingredients: '12 oz large Shrimp, 3 cloves Garlic, 1 Lemon, 1 tsp Lemon - zest, 2 tbsp fresh Parsley, 2 Spaghetti squash - small to medium, 1 tsp Dijon mustard, 1/4 tsp Red pepper flakes, Salt, Cracked Pepper, 1 tbsp Olive oil, 2 tbsp Butter (grass fed), 1/4 cup Greek plain yogurt, 1/2 cup dry White wine',
  directions: `To make the spaghetti squash, preheat oven to 350 degrees F and cut squash right down the middle. Scoop out all the seeds and place cut side down on a baking sheet lightly sprayed with oil so they don’t stick. Bake the squash in the oven for 45 minutes until tender. Meanwhile in a large skillet, melt oil and butter over medium high heat, add shrimp and season with salt and pepper, sauteing for about 2 minutes. Add garlic and saute an additional 2 minutes until shrimp is cooked through remove from heat and set aside (you don’t want to overcook the shrimp) Add lemon juice, lemon zest, white wine, Dijon mustard and red pepper flakes and bring to a boil. Reduce heat and allow sauce to simmer until the spaghetti squash has finished baking. Remove the skillet from heat and take squash out of the oven. Scrape out all the strands of spaghetti using a fork, throw spaghetti squash into a colander and place in the sink, pressing gently with a paper towel to allow any excess water to drain out. Whisk yogurt in with the sauce until creamy and smooth then stir in chopped parsley. Toss with spaghetti squash and shrimp, serve and enjoy!`,
  image_url: 'http://www.eatyourselfskinny.com/wp-content/uploads/2016/02/spaghetti-squash-11-1.jpg',
  votes: 30,
  comments: [comments[2]],
},{
  title: 'Hash Browns',
  description: 'Feeling eluded by those perfectly crispy shredded hash browns? Learn how to make the perfect shredded hash brown potatoes-- just like your favorite diner.',
  ingredients: `4 tbsp Butter or bacon fat
                2 Potatoes
                1/8 tsp freshly ground Black pepper,
                1/2 tsp Sea salt`,
  directions: `Shred your potatoes. I don’t peel mine first, but you can if you want.
              Rinse your potatoes.
              I simply put my shredded potatoes in a colander, and rinse until the water is clear, not cloudy.
              Allow the potatoes to drain thoroughly. I like to squeeze ’em a bit to get out all the moisture I can, or you can pat them dry with a clean dish towel.
              Toss in the salt and pepper.
              Meanwhile, heat up the butter or bacon fat in your skillet until it’s melted.
              Place the potatoes in the pan, give them a quick stir, then leave them alone to cook on medium-low heat.
              The leaving alone part is important. Don’t fuss with them, just let them cook on that side for 8-10 minutes or so.
              Now give them a flip. I’m not talented enough to flip the entire potato mass at once, so I flip it in sections. It doesn’t matter how you do it, just get it flipped.
              Cook the other side 5-8 minutes, or until it’s that lovely shade of golden brown and appropriately crispy.
              Serve immediately. Accompany with ketchup if you want, or eat plain for pure shredded hash brown goodness.`,
  image_url: 'http://www.theprairiehomestead.com/wp-content/uploads/2015/06/shredded-hash-brown-recipe-2.jpg',
  votes: 1,
  comments: [],
}]

// Remove Comments

db.Recipe.remove({}, function(err, remove){
  console.log(err);

  db.Recipe.create(seedRecipes, function(err, createdRecipes){
    if (err) { return console.log('ERROR', err); }
    console.log("All Recipes:", createdRecipes);
    console.log(`You created ${createdRecipes.length} Recipes.`)
    process.exit();
  });
});
