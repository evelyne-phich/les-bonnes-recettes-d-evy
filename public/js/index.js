const { CATEGORY } = require("../../database/recipe");

function openSideNav() {
  let sideNav = document.getElementById("sideNav");
  sideNav.classList.add("sideNavIsOpen");
  let outsideOfSideNav = document.getElementById("outsideOfSideNav");
  outsideOfSideNav.classList.add("outsideOfSideNavIsOpen");
}

function closeSideNav() {
  let sideNav = document.getElementById("sideNav");
  sideNav.classList.remove("sideNavIsOpen");
  let outsideOfSideNav = document.getElementById("outsideOfSideNav");
  outsideOfSideNav.classList.remove("outsideOfSideNavIsOpen");
}

function createRecipeThumbnail(recipe) {
  return `
    <div class="recipeThumbnail">
      <img class="recipePhoto" src="${recipe.pictureUrl}"/>
      <div class="recipeLegend">
        <div class="recipeCategory">${recipe.category}</div>
        <div class="recipeName">${recipe.name}</div>
      </div>
    </div>
  `;
}

function filterThumbnailsBySearch() {
  let input = document.getElementById("search");

  // Search Starter Recipes by name or category
  const filteredStarterRecipes = starterRecipes.filter(
    (recipe) =>
      recipe.name
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          input.value
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        ) ||
      recipe.category
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          input.value
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
  );

  const starterRecipesBlock = document.getElementById("starterRecipes");

  let newHTMLForStarterRecipes = "";

  for (let i = 0; i < filteredStarterRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(filteredStarterRecipes[i]);

    newHTMLForStarterRecipes = newHTMLForStarterRecipes + newRecipeThumbnail;
  }

  starterRecipesBlock.innerHTML = newHTMLForStarterRecipes;

  // Search Dish Recipes by name or category
  const filteredDishRecipes = dishRecipes.filter(
    (recipe) =>
      recipe.name
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          input.value
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        ) ||
      recipe.category
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          input.value
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
  );

  const dishRecipesBlock = document.getElementById("dishRecipes");

  let newHTMLForDishRecipes = "";

  for (let i = 0; i < filteredDishRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(filteredDishRecipes[i]);

    newHTMLForDishRecipes = newHTMLForDishRecipes + newRecipeThumbnail;
  }

  dishRecipesBlock.innerHTML = newHTMLForDishRecipes;

  // Search Dessert Recipes by name or category
  const filteredDessertRecipes = dessertRecipes.filter(
    (recipe) =>
      recipe.name
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          input.value
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        ) ||
      recipe.category
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          input.value
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
  );

  const dessertRecipesBlock = document.getElementById("dessertRecipes");

  let newHTMLForDessertRecipes = "";

  for (let i = 0; i < filteredDessertRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(filteredDessertRecipes[i]);

    newHTMLForDessertRecipes = newHTMLForDessertRecipes + newRecipeThumbnail;
  }

  dessertRecipesBlock.innerHTML = newHTMLForDessertRecipes;
}

// Filter by category
function showAllStarters() {
  closeSideNav();

  const starterRecipesBlock = document.getElementById("starterRecipes");

  let newHTMLForStarterRecipes = "";

  for (let i = 0; i < starterRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(starterRecipes[i]);

    newHTMLForStarterRecipes = newHTMLForStarterRecipes + newRecipeThumbnail;
  }

  starterRecipesBlock.innerHTML = newHTMLForStarterRecipes;

  const dishRecipesBlock = document.getElementById("dishRecipes");

  dishRecipesBlock.innerHTML = "";

  const dessertRecipesBlock = document.getElementById("dessertRecipes");

  dessertRecipesBlock.innerHTML = "";

  let input = document.getElementById("search");

  input.value = "";
}

function showAllDishes() {
  closeSideNav();

  const dishRecipesBlock = document.getElementById("dishRecipes");

  let newHTMLForDishRecipes = "";

  for (let i = 0; i < dishRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(dishRecipes[i]);

    newHTMLForDishRecipes = newHTMLForDishRecipes + newRecipeThumbnail;
  }

  dishRecipesBlock.innerHTML = newHTMLForDishRecipes;

  const starterRecipesBlock = document.getElementById("starterRecipes");

  starterRecipesBlock.innerHTML = "";

  const dessertRecipesBlock = document.getElementById("dessertRecipes");

  dessertRecipesBlock.innerHTML = "";

  let input = document.getElementById("search");

  input.value = "";
}

function showAllDesserts() {
  closeSideNav();

  const dessertRecipesBlock = document.getElementById("dessertRecipes");

  let newHTMLForDessertRecipes = "";

  for (let i = 0; i < dessertRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(dessertRecipes[i]);

    newHTMLForDessertRecipes = newHTMLForDessertRecipes + newRecipeThumbnail;
  }

  dessertRecipesBlock.innerHTML = newHTMLForDessertRecipes;

  const starterRecipesBlock = document.getElementById("starterRecipes");

  starterRecipesBlock.innerHTML = "";

  const dishRecipesBlock = document.getElementById("dishRecipes");

  dishRecipesBlock.innerHTML = "";

  let input = document.getElementById("search");

  input.value = "";
}
