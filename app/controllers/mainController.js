const dataMapper = require("../dataMapper");

const mainController = {
  getHomePage: (req, res) => {
    dataMapper.getAllRecipes((err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("homePage", {
        recipes,
      });
    });
  },
};

module.exports = mainController;
