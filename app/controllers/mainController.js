const dataMapper = require("../dataMapper");

const { categories, countries } = require("../data-categories-countries");

const mainController = {
  getHomePage: (req, res) => {
    const category = req.query.category;
    const country = req.query.country;

    if (
      category === "Toutes-les-catégories" &&
      country === "Tous-les-types-de-cuisine"
    ) {
      return res.redirect("/");
    }

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
