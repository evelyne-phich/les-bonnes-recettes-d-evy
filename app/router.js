const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const filterController = require("./controllers/filterController");
const searchController = require("./controllers/searchController");

router.get("/", mainController.getHomePage);
router.get("/filter", filterController.getRecipesByCategoryAndCountry);
router.get("/search/name", searchController.getRecipesByName);

module.exports = router;
