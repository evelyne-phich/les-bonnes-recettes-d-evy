const client = require("./database");

const convertJSArrayToPSQLArray = (strings) => {
  let psqlArray = "'{";

  strings.forEach((a, index) => {
    const escapedA = a
      .replaceAll("'", "''")
      .replaceAll(",", "\\,")
      .replaceAll('"', '\\"');

    if (index === strings.length - 1) {
      psqlArray = psqlArray + escapedA;
    } else {
      psqlArray = psqlArray + escapedA + ", ";
    }
  });

  psqlArray = psqlArray + "}'";

  return psqlArray;
};

const dataMapper = {
  getCategories: (callback) => {
    const query = `SELECT DISTINCT "recipe"."category", case "category" when 'Entrée' then 1 when 'Plat' then 2 when 'Dessert' then 3 end FROM "recipe" ORDER BY case "category" when 'Entrée' then 1 when 'Plat' then 2 when 'Dessert' then 3 end`;

    client.query(query, callback);
  },
  getCountries: (callback) => {
    const query = `SELECT DISTINCT "recipe"."country" FROM "recipe" ORDER BY "recipe"."country" ASC`;

    client.query(query, callback);
  },
  getAllRecipes: (callback) => {
    const query = `SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" ORDER BY case "category" when 'Entrée' then 1 when 'Plat' then 2 when 'Dessert' then 3 end`;

    client.query(query, callback);
  },
  getRecipesByCategory: (category, callback) => {
    if (category === "Toutes-les-catégories") {
      const query = `SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe"`;

      client.query(query, callback);
    } else {
      const query = `SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE "recipe"."category" = $1`;

      client.query(query, [category], callback);
    }
  },
  getRecipesByCountry: (country, callback) => {
    if (country === "Tous-les-types-de-cuisine") {
      const query = `SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe"`;

      client.query(query, callback);
    } else {
      const query = `SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE "recipe"."country" = $1`;

      client.query(query, [country], callback);
    }
  },
  getRecipesByName: (recipeName, callback) => {
    const query = `SELECT "recipe"."id", "recipe"."pictureUrl", "recipe"."category", "recipe"."name" FROM "recipe" WHERE unaccent("recipe"."name") ILIKE unaccent($1)`;

    client.query(query, [`%${recipeName}%`], callback);
  },
  getRecipeById: (id, callback) => {
    const query = `SELECT * FROM "recipe" WHERE "recipe"."id" = $1`;

    client.query(query, [id], callback);
  },
  postRecipe: (recipe, callback) => {
    const query = `INSERT INTO "recipe"
    (
    "category",
    "name",
    "pictureUrl",
    "country",
    "preparationTime",
    "restTime",
    "cookingTime",
    "totalTime",
    "quantity",
    "ingredients",
    "instructions"
    )
    VALUES
    (
    '${recipe.category}',
    '${recipe.country}',
    '${recipe.name}',
    '${recipe.quantity}',
    '${recipe.preparationTime}',
    '${recipe.restTime}',
    '${recipe.cookingTime}',
    '${recipe.totalTime}',
    '${recipe.image}',
    ${convertJSArrayToPSQLArray(recipe.ingredients)},
    ${convertJSArrayToPSQLArray(recipe.instructions)}
    )
    RETURNING "id"`;

    client.query(query, [], callback);
  },
};

module.exports = dataMapper;
