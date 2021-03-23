import React from "react";
import RecipeCard from "../RecipeCard";

import styles from "./RecipeCardsList.module.scss";

function RecipeCardsList(props) {
  const { recipes } = props;

  return (
    <div className={styles.container}>
      {recipes.map(function (recipe) {
        return (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            category={recipe.category}
            name={recipe.name}
            imageUrl={recipe.thumbnailPictureUrl}
          />
        );
      })}
    </div>
  );
}

export default RecipeCardsList;
