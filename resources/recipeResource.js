const recipeDao = require("../dataAccessObjects/recipeDao");

const getRecipes = async () => {
  let recipes = [];

  recipes = await recipeDao.findAll();

  return recipes;
};

module.exports = {
  getRecipes,
};
