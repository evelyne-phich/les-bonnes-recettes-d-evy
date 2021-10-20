// const dataMapper = require("../dataMapper");

const mainController = {
  getHomePage: (req, res) => {
    // dataMapper.getAllRecipes((err, result) => {
    //   if (err) {
    //     return console.error(err);
    //   }

    //   const recipes = result.rows;
    //   const countries = [];

    //   for (const recipe of recipes) {
    //     if (
    //       !countries.find(
    //         (country) => recipe.country.toLowerCase() === country.toLowerCase()
    //       )
    //     ) {
    //       countries.push(recipe.country);
    //     }
    //   }

    //   res.render("homePage", {
    //     recipes,
    //     countries,
    //   });
    // });
    res.render("homePage", {
      recipes: [],
      countries: [],
    });
  },
};

module.exports = mainController;
