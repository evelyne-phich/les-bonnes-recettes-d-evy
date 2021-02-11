const { recipes } = require("../database/recipe");

const findAll = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(recipes);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  findAll,
};
