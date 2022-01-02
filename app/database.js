const { Client } = require("pg");

const devConfig = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
};

const prodConfig = {
  connectionString: process.env.PG_URL,
  ssl: {
    rejectUnauthorized: false,
  },
}

const client = new Client(
  !!process.env.PG_URL ? prodConfig : devConfig
);

client.connect();

module.exports = client;
