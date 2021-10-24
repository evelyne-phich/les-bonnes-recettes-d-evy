const dataMapper = require("../dataMapper");

const { categories, countries } = require("../data-categories-countries");

const recipeController = {
  getRecipeById: (req, res) => {
    const id = req.params.id;

    dataMapper.getRecipeById(id, (err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipe = result.rows[0];

      res.render("recipePage", {
        recipe,
        categories,
        countries,
      });
    });
  },
};

module.exports = recipeController;
