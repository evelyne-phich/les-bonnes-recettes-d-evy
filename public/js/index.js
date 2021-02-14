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

function hideStarterRecipes() {
  const starterRecipesBlock = document.getElementById("starterRecipes");

  starterRecipesBlock.innerHTML = "";
}

function hideDishRecipes() {
  const dishRecipesBlock = document.getElementById("dishRecipes");

  dishRecipesBlock.innerHTML = "";
}

function hideDessertRecipes() {
  const dessertRecipesBlock = document.getElementById("dessertRecipes");

  dessertRecipesBlock.innerHTML = "";
}

function clearSearchBar() {
  let input = document.getElementById("search");

  input.value = "";
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

  hideDishRecipes();

  hideDessertRecipes();

  clearSearchBar();
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

  hideStarterRecipes();

  hideDessertRecipes();

  clearSearchBar();
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

  hideStarterRecipes();

  hideDishRecipes();

  clearSearchBar();
}

//Filter by country
function showStartersByCountry(country) {
  closeSideNav();

  const filteredStarterRecipes = starterRecipes.filter(
    (recipe) => recipe.country === country
  );

  const starterRecipesBlock = document.getElementById("starterRecipes");

  let newHTMLForStarterRecipes = "";

  for (let i = 0; i < filteredStarterRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(filteredStarterRecipes[i]);

    newHTMLForStarterRecipes = newHTMLForStarterRecipes + newRecipeThumbnail;
  }

  starterRecipesBlock.innerHTML = newHTMLForStarterRecipes;

  hideDishRecipes();

  hideDessertRecipes();

  clearSearchBar();
}

function showDishesByCountry(country) {
  closeSideNav();

  const filteredDishRecipes = dishRecipes.filter(
    (recipe) => recipe.country === country
  );

  const dishRecipesBlock = document.getElementById("dishRecipes");

  let newHTMLForDishRecipes = "";

  for (let i = 0; i < filteredDishRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(filteredDishRecipes[i]);

    newHTMLForDishRecipes = newHTMLForDishRecipes + newRecipeThumbnail;
  }

  dishRecipesBlock.innerHTML = newHTMLForDishRecipes;

  hideStarterRecipes();

  hideDessertRecipes();

  clearSearchBar();
}

function showDessertsByCountry(country) {
  closeSideNav();

  const filteredDessertRecipes = dessertRecipes.filter(
    (recipe) => recipe.country === country
  );

  const dessertRecipesBlock = document.getElementById("dessertRecipes");

  let newHTMLForDessertRecipes = "";

  for (let i = 0; i < filteredDessertRecipes.length; i++) {
    const newRecipeThumbnail = createRecipeThumbnail(filteredDessertRecipes[i]);

    newHTMLForDessertRecipes = newHTMLForDessertRecipes + newRecipeThumbnail;
  }

  dessertRecipesBlock.innerHTML = newHTMLForDessertRecipes;

  hideStarterRecipes();

  hideDishRecipes();

  clearSearchBar();
}
