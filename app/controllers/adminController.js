const adminController = {
  getAdminPage: (req, res) => {
    res.render("adminPage");
  },
  getAddRecipePage: (req, res) => {
    res.render("addRecipePage");
  },
  postAddRecipe: (req, res) => {
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

    res.render("recipePage", {
      recipe: {
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
      },
    });
  },
};

module.exports = adminController;
