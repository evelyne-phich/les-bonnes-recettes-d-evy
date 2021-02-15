const recipeDao = require("../dataAccessObjects/recipeDao");

const getRecipes = async () => {
  let recipes = [];

  recipes = await recipeDao.findAll();

  return recipes;
};

const getRecipeById = async (recipeId) => {
  /**
   * @param recipeId number
   *
   * @return recipe | undefined
   */
  let recipe = await recipeDao.findById(recipeId);

  return recipe;
};

module.exports = {
  getRecipes,
  getRecipeById,
};
