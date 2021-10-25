const dataMapper = require("../dataMapper");

const mainController = {
  getHomePage: (req, res) => {
    const category = req.query.category;
    const country = req.query.country;

    dataMapper.getAllRecipes((err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("homePage", {
        recipes,
        selectedCategory: category,
        selectedCountry: country,
      });
    });
  },
};

module.exports = mainController;
