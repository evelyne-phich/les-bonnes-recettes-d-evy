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

function filterThumbnailsBySearch() {
  let input = document.getElementById("search");

  // Filter Starter Recipes
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
    const newRecipeThumbnail = `
      <div class="recipeThumbnail">
        <img class="recipePhoto" src="${filteredStarterRecipes[i].pictureUrl}"/>
        <div class="recipeLegend">
          <div class="recipeCategory">${filteredStarterRecipes[i].category}</div>
          <div class="recipeName">${filteredStarterRecipes[i].name}</div>
        </div>
      </div>
    `;

    newHTMLForStarterRecipes = newHTMLForStarterRecipes + newRecipeThumbnail;
  }

  starterRecipesBlock.innerHTML = newHTMLForStarterRecipes;

  // Filter Dish Recipes
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
    const newRecipeThumbnail = `
      <div class="recipeThumbnail">
        <img class="recipePhoto" src="${filteredDishRecipes[i].pictureUrl}"/>
        <div class="recipeLegend">
          <div class="recipeCategory">${filteredDishRecipes[i].category}</div>
          <div class="recipeName">${filteredDishRecipes[i].name}</div>
        </div>
      </div>
    `;

    newHTMLForDishRecipes = newHTMLForDishRecipes + newRecipeThumbnail;
  }

  dishRecipesBlock.innerHTML = newHTMLForDishRecipes;

  // Filter Dessert Recipes
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
    const newRecipeThumbnail = `
      <div class="recipeThumbnail">
        <img class="recipePhoto" src="${filteredDessertRecipes[i].pictureUrl}"/>
        <div class="recipeLegend">
          <div class="recipeCategory">${filteredDessertRecipes[i].category}</div>
          <div class="recipeName">${filteredDessertRecipes[i].name}</div>
        </div>
      </div>
    `;

    newHTMLForDessertRecipes = newHTMLForDessertRecipes + newRecipeThumbnail;
  }

  dessertRecipesBlock.innerHTML = newHTMLForDessertRecipes;
}
