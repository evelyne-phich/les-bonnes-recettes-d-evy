import React from "react";

import styles from "./RecipePageIntroduction.module.scss";

function RecipePageIntroduction(props) {
  const {
    category,
    country,
    name,
    preparationTime,
    restTime,
    cookingTime,
    totalTime,
    quantity,
    imageUrl,
  } = props;

  return (
    <div className={styles.introduction}>
      <div className={styles.title}>
        <div className={styles.category}>{category}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.time}>
          <div className={styles.preparationTime}>
            <i className="fas fa-mitten"></i>
            {preparationTime}
          </div>
          <div className={styles.restTime}>
            <i className="far fa-pause-circle"></i>
            {restTime}
          </div>
          <div className={styles.cookingTime}>
            <i className="fab fa-hotjar"></i>
            {cookingTime}
          </div>
          <hr />
          <div className={styles.totalTime}>
            <i className="far fa-clock"></i>
            {totalTime}
          </div>
        </div>
        <div className={styles.quantity}>{quantity}</div>
      </div>
      <div className={styles.photoContainer}>
        <img className={styles.photo} src={imageUrl} />
      </div>
    </div>
  );
}

export default RecipePageIntroduction;
