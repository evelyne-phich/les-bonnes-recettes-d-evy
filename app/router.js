const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");

router.get("/", mainController.getHomePage);
router.get("/category", mainController.getRecipesByCategory);

module.exports = router;
