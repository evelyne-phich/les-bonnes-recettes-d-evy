import React from "react";

import styles from "./RecipeCard.module.scss";

function RecipeCard(props) {
  const { id, category, name, imageUrl } = props;

  return (
    <a href={`/recipe/${id}`}>
      <div className={styles.thumbnail}>
        <img className={styles.photo} src={imageUrl} />
        <div className={styles.legend}>
          <div className={styles.category}>{category}</div>
          <div className={styles.name}>{name}</div>
        </div>
      </div>
    </a>
  );
}

export default RecipeCard;
