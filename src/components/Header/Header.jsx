import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./Header.module.scss";
import FilterDrawer from "../FilterDrawer";

function Header(props) {
  const {
    recipes,
    setCurrentFilter,
    filterButtonIsHidden,
    searchBarIsHidden,
    setSearch,
  } = props;

  const [sideNavIsOpened, setSideNavIsOpened] = useState(false);

  function openSideNav() {
    sideNavIsOpened === false
      ? setSideNavIsOpened(true)
      : setSideNavIsOpened(false);
  }

  return (
    <header className={styles.header}>
      <Drawer
        anchor={"bottom"}
        open={sideNavIsOpened === true}
        onClose={() => {
          setSideNavIsOpened(false);
        }}
      >
        <FilterDrawer
          recipes={recipes}
          setSideNavIsOpened={setSideNavIsOpened}
          setCurrentFilter={setCurrentFilter}
        />
      </Drawer>
      <div>
        <b>Les bonnes recettes d'Evy</b>
      </div>
      <div className={styles.menu}>
        <a className={styles.homeLink} href="/">
          <i className="fas fa-home"></i>
        </a>
        {filterButtonIsHidden ? null : (
          <button className={styles.filterButton} onClick={openSideNav}>
            <i className="fas fa-filter"></i>
          </button>
        )}
        {searchBarIsHidden ? null : (
          <Paper className={styles.searchBar}>
            <InputBase
              className={styles.input}
              placeholder="Rechercher une recette"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </Paper>
        )}
      </div>
    </header>
  );
}

export default Header;
