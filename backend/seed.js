//seed
var db = require('./models');

var comments = [{
  content: 'Yeah real tasty.',
}, {
  content: 'Easy to make, would do again.',
}, {
  content: 'Awesome!!!!!!!.',
}];


var seedRecipes = [{
  title: 'Thai Peanut Hummus',
  description: 'This Thai Peanut Hummus is filled with Thai peanut sauce ingredients like Sriracha, garlic, and ginger! A healthy gluten free and vegan snack!',
  ingredients: '1 15-oz. can Chickpeas, 1 handful Cilantro leaves, 2 small cloves Garlic, 1/4 tsp Ginger - ground, 2 Green onions, 1 Lime - zest and juice, 1/2 tbsp Honey, 2 tbsp Peanut butter, 2 tbsp Sriracha, Salt, Pepper',
  directions: 'Add chickpeas, peanut butter, Sriracha, ginger, garlic, honey/maple syrup/agave, and salt and pepper to taste into a food processor. Process until broken up. Scrape the sides with a spatula as needed. With the motor running, drizzle in olive oil and ice water. This will help the mixture come together and get super-smooth! Once the hummus is processed to your desired texture, taste and adjust seasoning as necessary. Mix in peanuts, green onions, and cilantro with a spatula. Serve with tortilla chips and a squeeze of lime.',
  image_url: `/public/imgs/thai-peanut-hummus.jpg`,
  votes: 12,
  comments: [comments[0], comments[1]],
},{
  title: 'Avocado Quinoa Bowl',
  description: `So much goodness in a single bowl but it still only takes 15 minutes to throw together! Find tofu, a heap of veggies, avocado, and quinoa in here, all jazzed up with a handful of spices. Whoever thought eating vegan meant skimping on nutrition should meet this recipe.`,
  ingredients: `6 egg whites or 100g crumbled extra firm tofu,
                ½ cup chopped broccolini or broccoli
                ¼ cup halved cherry tomatoes
                ¼ cup sliced mushrooms
                1 cup kale - torn into pieces
                ½ cup grated carrot
                ½ teaspoon yellow curry powder
                ¼ teaspoon garlic powder
                ¼ teaspoon onion powder
                ¼ teaspoon paprika
                ¼ teaspoon salt
                ⅛ teaspoon pepper
                1 halved lime
                ½ cup cooked quinoa
                ¼ sliced avocado
                ¼ cup deli sprouts or micro-greens`,
  directions: `Heat a wok or saucepan at medium to high heat.
In a small bowl mix together the spices and salt and pepper.
When the wok/pan is nice and hot add in broccolini, carrot, and mushrooms and a splash of water, cook for 3-4 minutes until the vegetable become tender.
Reduce heat to medium and add in the kale and cherry tomatoes and spice mix, continue sauteing until the kale is wilted, add little splashes of water as needed so the vegetables do not stick or burn.
Squeeze in the juice of half a lime and pour in the egg whites. Allow the egg whites to sit for a minute until they begin to cook through, then scramble them together with the vegetables. (If you are using tofu just scramble with the vegetables until the tofu begins to brown slightly or heats through).
Once the eggs are cooked fully, transfer the mixture to a bowl with quinoa and top the quinoa.
Top the vegetable mixture with sliced avocado and sprouts, and garnish with another squeeze of lime and some additional salt and pepper if preferred.
Enjoy!`,
  image_url: `/public/imgs/keylimepie.jpg`,
  votes: 30,
  comments: [],
},{
  title: 'Key Lime Pie',
  description: 'This is the 1999 American Pie Council\'s National Pie Championship\'s first place winner',
  ingredients: `5 egg beaten yolks ,
                1 (14 ounce) can sweetened condensed milk,
                1/2 cup key lime juice,
                1 (9 inch) prepared graham cracker crust`,
  directions: `Preheat oven to 375 degrees F (190 degrees C).
Combine the egg yolks, sweetened condensed milk and lime juice. Mix well. Pour into unbaked graham cracker shell.
Bake in preheated oven for 15 minutes. Allow to cool. Top with whipped topping and garnish with lime slices if desired.`,
  image_url: `/public/imgs/keylimepie.jpg`,
  votes: 310,
  comments: [comments[2]],
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
