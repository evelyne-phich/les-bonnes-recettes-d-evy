const express = require("express");
const bodyParser = require("body-parser");
const recipeResource = require("./resources/recipeResource");
const { CATEGORY } = require("./database/recipe");
const { recipes } = require("./database/recipe");

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
    starterRecipesJSON: JSON.stringify(starterRecipes), // JavaScript Object Notation
    dishRecipes: dishRecipes,
    dishRecipesJSON: JSON.stringify(dishRecipes), // JavaScript Object Notation
    dessertRecipes: dessertRecipes,
    dessertRecipesJSON: JSON.stringify(dessertRecipes), // JavaScript Object Notation
  });
});

app.get("/recipe/:recipeId", (request, response) => {
  const recipeId = request.params.recipeId;
  const foundRecipe = recipes.find((recipe) => recipe.id == recipeId);
  return response.render("recipes", { recipe: foundRecipe });
});

app.get("/login", (request, response) => {
  return response.render("login");
});

app.post("/login", (request, response) => {
  const correctUsername = "Miloca";
  const correctPassword = "Miloco";
  const username = request.body.username;
  const password = request.body.password;
  if (username === correctUsername && password === correctPassword) {
    return response.render("admin");
  } else {
    return response.send("Erreur d'authentification");
  }
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
