const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const dataMapper = require("./app/dataMapper");

const router = require("./app/router");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use((req, res, next) => {
  dataMapper.getCategories((err, result) => {
    if (err) {
      return console.error(err);
    }
    res.locals.categories = result.rows;
  });
  next();
});

app.use((req, res, next) => {
  dataMapper.getCountries((err, result) => {
    if (err) {
      return console.error(err);
    }
    res.locals.countries = result.rows;
  });
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
