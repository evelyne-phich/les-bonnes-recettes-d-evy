function openSideNav() {
  let sideNav = document.getElementById("sideNav");
  sideNav.classList.add("sideNavIsOpen");
  let outsideOfSideNav = document.getElementById("outsideOfSideNav");
  outsideOfSideNav.classList.add("outsideOfSideNavIsOpen");
}

function closeSideNav() {
  let sideNav = document.getElementById("sideNav");
  sideNav.classList.remove("sideNavIsOpen");
  let outsideOfSideNav = document.getElementById("outsideOfSideNav");
  outsideOfSideNav.classList.remove("outsideOfSideNavIsOpen");
}
