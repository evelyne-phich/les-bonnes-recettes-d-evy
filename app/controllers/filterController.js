const dataMapper = require("../dataMapper");

const { categories, countries } = require("../data-categories-countries");

const arrayIntersection = (array1, array2) => {
  return array1.filter((value1) => {
    let sameValue = false;

    array2.forEach((value2) => {
      if (JSON.stringify(value1) === JSON.stringify(value2)) {
        sameValue = true;
      }
    });

    return sameValue;
  });
};

const filterController = {
  getRecipesByCategoryAndCountry: (req, res) => {
    const category = req.query.category;
    const country = req.query.country;

    dataMapper.getRecipesByCategory(category, (err, categoryResult) => {
      if (err) {
        return console.error(err);
      }

      const recipesByCategory = categoryResult.rows;

      dataMapper.getRecipesByCountry(country, (err, countryResult) => {
        if (err) {
          return console.error(err);
        }

        const recipesByCountry = countryResult.rows;

        const filteredRecipes = arrayIntersection(
          recipesByCategory,
          recipesByCountry
        );

        res.render("homePage", {
          recipes: filteredRecipes,
          selectedCategory: category,
          selectedCountry: country,
          categories,
          countries,
        });
      });
    });
  },
};

module.exports = filterController;
