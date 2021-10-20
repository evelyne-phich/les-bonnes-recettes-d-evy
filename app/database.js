const { Client } = require("pg");

const client = new Client(process.env.PG_URL);
console.log("before");
client.connect();
console.log("after");

module.exports = client;
