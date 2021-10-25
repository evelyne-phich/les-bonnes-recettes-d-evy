const { categories, countries } = require("../data-categories-countries");

const adminController = {
  getAdminPage: (req, res) => {
    res.render("adminPage", {
      categories,
      countries,
    });
  },
  getAddRecipePage: (req, res) => {
    res.render("addRecipePage", {
      categories,
      countries,
    });
  },
};

module.exports = adminController;
