const adminController = {
  getAdminPage: (req, res) => {
    res.render("adminPage");
  },
  getAddRecipePage: (req, res) => {
    res.render("addRecipePage");
  },
};

module.exports = adminController;
