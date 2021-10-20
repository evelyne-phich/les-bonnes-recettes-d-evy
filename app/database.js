const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.PG_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
