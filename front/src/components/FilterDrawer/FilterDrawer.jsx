import React from "react";

import { CATEGORY, COUNTRY } from "../../database/recipes";
import styles from "./FilterDrawer.module.scss";
import { uniq } from "../../services/array";

function FilterDrawer(props) {
  const { recipes, setSideNavIsOpened, setCurrentFilter } = props;

  const starters = recipes.filter(
    (recipe) => recipe.category === CATEGORY.STARTER
  );

  const startersCountries = uniq(
    starters
      .map(function (recipe) {
        return recipe.country;
      })
      .sort(Intl.Collator().compare)
  );

  const dishes = recipes.filter((recipe) => recipe.category === CATEGORY.DISH);

  const dishesCountries = uniq(
    dishes
      .map(function (recipe) {
        return recipe.country;
      })
      .sort(Intl.Collator().compare)
  );

  const desserts = recipes.filter(
    (recipe) => recipe.category === CATEGORY.DESSERT
  );

  const dessertsCountries = uniq(
    desserts
      .map(function (recipe) {
        return recipe.country;
      })
      .sort(Intl.Collator().compare)
  );

  return (
    <div className={styles.view}>
      <div className={styles.category}>
        <button
          className={styles.categoryButton}
          onClick={() => {
            setSideNavIsOpened(false);
            setCurrentFilter({ category: CATEGORY.STARTER, country: null });
          }}
        >
          Toutes les entrées
        </button>
        <ul>
          {startersCountries.map(function (country) {
            return (
              <li>
                <button
                  onClick={() => {
                    setSideNavIsOpened(false);
                    setCurrentFilter({
                      category: CATEGORY.STARTER,
                      country: country,
                    });
                  }}
                >
                  {country}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.category}>
        <button
          className={styles.categoryButton}
          onClick={() => {
            setSideNavIsOpened(false);
            setCurrentFilter({ category: CATEGORY.DISH, country: null });
          }}
        >
          Tous les plats
        </button>
        <ul>
          {dishesCountries.map(function (country) {
            return (
              <li>
                <button
                  onClick={() => {
                    setSideNavIsOpened(false);
                    setCurrentFilter({
                      category: CATEGORY.DISH,
                      country: country,
                    });
                  }}
                >
                  {country}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.category}>
        <button
          className={styles.categoryButton}
          onClick={() => {
            setSideNavIsOpened(false);
            setCurrentFilter({ category: CATEGORY.DESSERT, country: null });
          }}
        >
          Tous les desserts
        </button>
        <ul>
          {dessertsCountries.map(function (country) {
            return (
              <li>
                <button
                  onClick={() => {
                    setSideNavIsOpened(false);
                    setCurrentFilter({
                      category: CATEGORY.DESSERT,
                      country: country,
                    });
                  }}
                >
                  {country}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FilterDrawer;
