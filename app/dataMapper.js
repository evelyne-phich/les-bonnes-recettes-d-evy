const client = require("./database");

const dataMapper = {
  getAllRecipes: (callback) => {
    const query = `SELECT * FROM "recipe" ORDER BY case "category" when 'Entrée' then 1 when 'Plat' then 2 when 'Dessert' then 3 end`;

    client.query(query, callback);
  },
};

module.exports = dataMapper;
