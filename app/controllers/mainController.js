const dataMapper = require("../dataMapper");

const categories = [
  {
    value: "Toutes-les-catégories",
    label: "Toutes les catégories",
  },
  {
    value: "Entrée",
    label: "Entrées",
  },
  {
    value: "Plat",
    label: "Plats",
  },
  {
    value: "Dessert",
    label: "Desserts",
  },
];

const mainController = {
  getHomePage: (req, res) => {
    dataMapper.getAllRecipes((err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("homePage", {
        recipes,
        categories,
      });
    });
  },
  getRecipesByCategory: (req, res) => {
    const category = req.query.category;

    if (category === "Toutes-les-catégories") {
      return res.redirect("/");
    }

    dataMapper.getRecipesByCategory(category, (err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipesByCategory = result.rows;

      res.render("homePage", {
        recipes: recipesByCategory,
        selectedCategory: category,
        categories,
      });
    });
  },
};

module.exports = mainController;
