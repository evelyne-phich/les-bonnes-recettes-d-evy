const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const filterController = require("./controllers/filterController");
const searchController = require("./controllers/searchController");
const recipeController = require("./controllers/recipeController");
const adminController = require("./controllers/adminController");

router.get("/", mainController.getHomePage);
router.get("/filter", filterController.getRecipesByCategoryAndCountry);
router.get("/search", searchController.getRecipesByName);
router.get("/recipe/:id", recipeController.getRecipeById);
router.get("/admin", adminController.getAdminPage);
router.get("/admin/addRecipe", adminController.getAdminAddRecipePage);
router.get("/admin/updateRecipe/:id", adminController.getUpdateRecipePage);

router.post("/recipe", adminController.postRecipe);

module.exports = router;
