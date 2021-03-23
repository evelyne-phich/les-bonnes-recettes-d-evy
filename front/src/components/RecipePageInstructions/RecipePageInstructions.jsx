import React from "react";

import styles from "./RecipePageInstructions.module.scss";

function RecipePageInstructions(props) {
  const { ingredients, instructions } = props;

  return (
    <div className={styles.recipe}>
      <ul className={styles.ingredients}>
        Ingrédients
        <hr />
        {ingredients.map(function (ingredient) {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <ol className={styles.instructions}>
        Instructions
        <hr />
        {instructions.map(function (instruction) {
          return <li>{instruction}</li>;
        })}
      </ol>
    </div>
  );
}

export default RecipePageInstructions;
