const dataMapper = require("../dataMapper");

const adminController = {
  getAdminPage: (req, res) => {
    const category = req.query.category;
    const country = req.query.country;

    dataMapper.getAllRecipes((err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("adminPage", {
        recipes,
        selectedCategory: category,
        selectedCountry: country,
      });
    });
  },
  getAdminAddRecipePage: (req, res) => {
    res.render("adminAddRecipePage");
  },
  postRecipe: (req, res) => {
    const {
      category,
      country,
      name,
      quantity,
      preparationTime,
      restTime,
      cookingTime,
      totalTime,
      image,
      ingredients,
      instructions,
    } = req.body;

    const recipe = {
      category,
      country,
      name,
      quantity,
      preparationTime,
      restTime,
      cookingTime,
      totalTime,
      image,
      ingredients,
      instructions: instructions.split("\r\n\r\n"),
    };

    dataMapper.postRecipe(recipe, (err, result) => {
      if (err) {
        return console.error(err);
      }
      const id = result.rows[0].id;
      res.redirect(`/recipe/${id}`);
    });
  },
  getUpdateRecipePage: (req, res) => {
    const id = req.params.id;

    dataMapper.getRecipeById(id, (err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipe = result.rows[0];

      res.render("adminUpdateRecipePage", {
        recipe,
      });
    });
  },
};

module.exports = adminController;
