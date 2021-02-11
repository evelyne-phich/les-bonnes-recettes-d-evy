const { findAll } = require("../dataAccessObjects/recipeDao");

const getRecipes = async () => {
  let recipes = [];

  recipes = await findAll();

  return recipes;
};

module.exports = {
  getRecipes,
};
