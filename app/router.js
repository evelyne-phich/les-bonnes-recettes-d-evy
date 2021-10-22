const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const filterController = require("./controllers/filterController");

router.get("/", mainController.getHomePage);
router.get("/filter", filterController.getRecipesByCategoryAndCountry);

module.exports = router;
