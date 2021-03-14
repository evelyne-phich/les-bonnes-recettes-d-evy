import React from "react";

import styles from "./HeaderRecipes.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <b>Les bonnes recettes d'Evy</b>
      </div>
      <div className={styles.menu}>
        <a className={styles.homeLink} href="/">
          <i className="fas fa-home"></i>
        </a>
      </div>
    </header>
  );
}

export default HeaderRecipes;
