const express = require("express");
const bodyParser = require("body-parser");
const recipeResource = require("./resources/recipeResource");

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

  return response.render("index", {
    recipes: recipes,
  });
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
