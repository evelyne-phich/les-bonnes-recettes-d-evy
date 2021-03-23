import React from "react";
import { useParams } from "react-router-dom";

import { recipes } from "../../database/recipes";
import RecipePageIntroduction from "../../components/RecipePageIntroduction";
import RecipePageInstructions from "../../components/RecipePageInstructions";

function RecipePage() {
  let { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

  if (recipe === undefined) {
    return <div>NOT FOUND</div>;
  } else {
    return (
      <div>
        <RecipePageIntroduction
          category={recipe.category}
          country={recipe.country}
          name={recipe.name}
          preparationTime={recipe.preparationTime}
          restTime={recipe.restTime}
          cookingTime={recipe.cookingTime}
          totalTime={recipe.totalTime}
          quantity={recipe.quantity}
          imageUrl={recipe.pictureUrl}
        />
        <RecipePageInstructions
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      </div>
    );
  }
}

export default RecipePage;
