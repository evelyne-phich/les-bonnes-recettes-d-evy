const express = require("express");
const bodyParser = require("body-parser");
const recipeResource = require("./resources/recipeResource");
const { CATEGORY } = require("./database/recipe");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Accueil
app.get("/", async (request, response) => {
  const recipes = await recipeResource.getRecipes();

  const starterRecipes = recipes.filter(
    (recipe) => recipe.category === CATEGORY.STARTER
  );
  const dishRecipes = recipes.filter(
    (recipe) => recipe.category === CATEGORY.DISH
  );
  const dessertRecipes = recipes.filter(
    (recipe) => recipe.category === CATEGORY.DESSERT
  );

  return response.render("index", {
    starterRecipes: starterRecipes,
    dishRecipes: dishRecipes,
    dessertRecipes: dessertRecipes,
  });
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
