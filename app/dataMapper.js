const client = require("./database");

const dataMapper = {
  getAllRecipes: (callback) => {
    const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" ORDER BY case "category" when 'Entrée' then 1 when 'Plat' then 2 when 'Dessert' then 3 end`;

    client.query(query, callback);
  },
  getRecipesByCategory: (category, callback) => {
    if (category === "Toutes-les-catégories") {
      const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe"`;

      client.query(query, callback);
    } else {
      const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE "recipe"."category" = $1`;

      client.query(query, [category], callback);
    }
  },
  getRecipesByCountry: (country, callback) => {
    if (country === "Tous-les-types-de-cuisine") {
      const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe"`;

      client.query(query, callback);
    } else {
      const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE "recipe"."country" = $1`;

      client.query(query, [country], callback);
    }
  },
  getRecipesByName: (recipeName, callback) => {
    const query = `SELECT "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE unaccent("recipe"."name") ILIKE unaccent($1)`;

    client.query(query, [`%${recipeName}%`], callback);
  },
};

module.exports = dataMapper;
