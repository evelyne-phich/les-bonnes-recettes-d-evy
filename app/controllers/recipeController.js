const dataMapper = require("../dataMapper");

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
      });
    });
  },
};

module.exports = recipeController;
