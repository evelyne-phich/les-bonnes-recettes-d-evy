const client = require("./database");

const dataMapper = {
  getAllRecipes: (callback) => {
    const query = `SELECT * FROM "recipe"`;

    client.query(query, callback);
  },
};

module.exports = dataMapper;
