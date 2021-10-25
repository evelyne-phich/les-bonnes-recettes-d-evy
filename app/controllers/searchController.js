const dataMapper = require("../dataMapper");

const searchController = {
  getRecipesByName: (req, res) => {
    const category = req.query.category;
    const country = req.query.country;
    const recipeName = req.query.name;

    dataMapper.getRecipesByName(recipeName, (err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("homePage", {
        recipes,
        selectedCategory: category,
        selectedCountry: country,
        recipeName,
      });
    });
  },
};

module.exports = searchController;
