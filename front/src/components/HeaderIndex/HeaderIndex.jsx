import React from "react";

import styles from "./HeaderIndex.module.scss";

function HeaderIndex() {
  return (
    <header className={styles.header}>
      <div>
        <b>Les bonnes recettes d'Evy</b>
      </div>
      <div className={styles.menu}>
        <a className={styles.homeLink} href="/">
          <i className="fas fa-home"></i>
        </a>
        <button className={styles.filterButton} onclick="openSideNav()">
          <i className="fas fa-filter"></i>
        </button>
        <div className={styles.searchBar}>
          <input
            id="search"
            onkeyup="filterThumbnailsBySearch()"
            type="text"
            autocomplete="off"
            className={styles.search}
            placeholder="Rechercher une recette"
          />
          <button type="submit" className={styles.searchButton}>
            <div className="stove">&#127859;</div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderIndex;
