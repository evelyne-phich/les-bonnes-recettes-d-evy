const dataMapper = require("../dataMapper");

const { categories, countries } = require("../data-categories-countries");

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
        categories,
        countries,
      });
    });
  },
};

module.exports = mainController;
