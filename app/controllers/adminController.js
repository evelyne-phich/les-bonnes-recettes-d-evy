const dataMapper = require("../dataMapper");

const adminController = {
  getAdminPage: (req, res) => {
    res.render("adminPage");
  },
  getAddRecipePage: (req, res) => {
    res.render("addRecipePage");
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
};

module.exports = adminController;
