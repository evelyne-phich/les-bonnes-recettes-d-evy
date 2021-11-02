const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);
console.log(bcrypt.hashSync("XIIIthebest", salt));

const dataMapper = require("../dataMapper");

const adminController = {
  getAdminPage: (req, res) => {
    const category = req.query.category;
    const country = req.query.country;

    dataMapper.getAllRecipes((err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipes = result.rows;

      res.render("adminPage", {
        recipes,
        selectedCategory: category,
        selectedCountry: country,
      });
    });
  },
  getAddRecipePage: (req, res) => {
    res.render("adminAddRecipePage");
  },
  postRecipe: (req, res) => {
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

    const recipe = {
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
    };

    dataMapper.postRecipe(recipe, (err, result) => {
      if (err) {
        return console.error(err);
      }
      const id = result.rows[0].id;
      res.redirect(`/recipe/${id}`);
    });
  },
  getUpdateRecipePage: (req, res) => {
    const id = req.params.id;

    dataMapper.getRecipeById(id, (err, result) => {
      if (err) {
        return console.error(err);
      }

      const recipe = result.rows[0];

      res.render("adminUpdateRecipePage", {
        recipe,
      });
    });
  },
  putRecipe: (req, res) => {
    const {
      id,
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

    const recipe = {
      id,
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
    };

    dataMapper.putRecipe(recipe, (err) => {
      if (err) {
        return console.error(err);
      }

      res.redirect(`/recipe/${id}`);
    });
  },
  deleteRecipe: (req, res) => {
    const id = req.params.id;

    dataMapper.deleteRecipe(id, (err) => {
      if (err) {
        return console.error(err);
      }

      res.redirect("/admin");
    });
  },
  getLoginPage: (req, res) => {
    res.render("adminLoginPage");
  },
  postLoginPage: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    dataMapper.getLoginUsername(username, (err, result) => {
      if (err) {
        return res.send(`Les identifiants de connexion sont incorrects.`);
      }

      const foundUser = result.rows[0];

      if (foundUser === undefined) {
        return res.send(`Les identifiants de connexion sont incorrects.`);
      }

      if (bcrypt.compareSync(password, foundUser.password)) {
        request.session.user = user;

        res.redirect("/admin");
      }
    });
  },
};

module.exports = adminController;
