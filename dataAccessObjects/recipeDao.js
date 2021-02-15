const { recipes } = require("../database/recipe");

const findAll = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(recipes);
      }, 500);
    } catch (error) {
      reject(error);
    }
  });

const findById = (recipeId) => {
  const recipeFound = recipes.find(
    (recipe) => recipe.id === parseInt(recipeId)
  );

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(recipeFound);
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  findAll,
  findById,
};
