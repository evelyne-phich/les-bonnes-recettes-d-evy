const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const session = require("express-session");

const dataMapper = require("./app/dataMapper");

const router = require("./app/router");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret-les-bonnes-recettes-d-evy",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  dataMapper.getCategories((err, result) => {
    if (err) {
      return console.error(err);
    }
    res.locals.categories = result.rows;
    next();
  });
});

app.use((req, res, next) => {
  dataMapper.getCountries((err, result) => {
    if (err) {
      return console.error(err);
    }
    res.locals.countries = result.rows;
    next();
  });
});

app.use((req, res, next) => {
  if (req.url.startsWith("/admin") && req.url !== "/admin/login") {
    if (req.session.user === undefined) {
      res.send("Vous n'êtes pas autorisé à accéder à cette page.");
      return;
    }
    next();
  } else {
    next();
  }
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
