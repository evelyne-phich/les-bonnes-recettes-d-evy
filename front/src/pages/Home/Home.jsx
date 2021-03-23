import React, { useState } from "react";

import { CATEGORY, recipes } from "../../database/recipes";
import RecipeCardsList from "../../components/RecipeCardsList";
import Header from "../../components/Header";

function Home() {
  const [currentFilter, setCurrentFilter] = useState({
    category: null,
    country: null,
  });

  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    if (search !== "") {
      if (
        recipe.name
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            search
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) ||
        recipe.category
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            search
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (currentFilter.category === null && currentFilter.country === null) {
        return true;
      }
      if (currentFilter.category !== null && currentFilter.country === null) {
        return recipe.category === currentFilter.category;
      }
      if (currentFilter.category !== null && currentFilter.country !== null) {
        return (
          recipe.category === currentFilter.category &&
          recipe.country === currentFilter.country
        );
      }
    }
  });

  return (
    <div>
      <Header
        recipes={recipes}
        setCurrentFilter={setCurrentFilter}
        setSearch={setSearch}
      />
      <RecipeCardsList
        recipes={filteredRecipes.filter(
          (recipe) => recipe.category === CATEGORY.STARTER
        )}
      />
      <RecipeCardsList
        recipes={filteredRecipes.filter(
          (recipe) => recipe.category === CATEGORY.DISH
        )}
      />
      <RecipeCardsList
        recipes={filteredRecipes.filter(
          (recipe) => recipe.category === CATEGORY.DESSERT
        )}
      />
    </div>
  );
}

export default Home;
