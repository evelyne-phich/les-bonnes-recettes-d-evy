const dataMapper = require("../dataMapper");

const mainController = {
  getHomePage: (req, res) => {
    dataMapper.getAllRecipes((err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("homePage", {
        recipes,
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
      });
    });
  },
};

module.exports = mainController;
