import React from "react";
import { CATEGORY, recipes } from "./database/recipes";

import HeaderIndex from "./components/HeaderIndex";
import RecipeCardsList from "./components/RecipeCardsList";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <HeaderIndex />
      <RecipeCardsList
        recipes={recipes.filter(
          (recipe) => recipe.category === CATEGORY.STARTER
        )}
      />
      <RecipeCardsList
        recipes={recipes.filter((recipe) => recipe.category === CATEGORY.DISH)}
      />
      <RecipeCardsList
        recipes={recipes.filter(
          (recipe) => recipe.category === CATEGORY.DESSERT
        )}
      />
    </div>
  );
}

export default App;
