const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.PG_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log("before");
client.connect();
console.log("after");

module.exports = client;
