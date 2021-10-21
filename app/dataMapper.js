const client = require("./database");

const dataMapper = {
  getAllRecipes: (callback) => {
    const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" ORDER BY case "category" when 'Entrée' then 1 when 'Plat' then 2 when 'Dessert' then 3 end`;

    client.query(query, callback);
  },
  getRecipesByCategory: (category, callback) => {
    const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE "recipe"."category" = $1`;

    client.query(query, [category], callback);
  },
};

module.exports = dataMapper;
