const CATEGORY = {
  DISH: "Plat",
  STARTER: "Entrée",
  DESSERT: "Dessert",
};

const COUNTRY = {
  CHINA: "Chinois",
  FRENCH: "Français",
  UNITED_STATES: "Etats-unis",
};

const recipes = [
  {
    category: CATEGORY.STARTER,
    name: "Oeufs de cent ans",
    pictureUrl: "",
    country: COUNTRY.CHINA,
  },
  {
    category: CATEGORY.STARTER,
    name: "Burrata et tomate",
    pictureUrl: "",
    country: COUNTRY.FRENCH,
  },
  {
    category: CATEGORY.STARTER,
    name: "Betterave cuite à la sauce Caesar",
    pictureUrl: "",
    country: COUNTRY.FRENCH,
  },
  {
    category: CATEGORY.DISH,
    name: "Zha Jiang Mian",
    pictureUrl: "",
    country: COUNTRY.CHINESE,
  },
  {
    category: CATEGORY.DISH,
    name: "Pilons de poulet marinés au four",
    pictureUrl: "",
    country: COUNTRY.FRENCH,
  },
  {
    category: CATEGORY.DISH,
    name: "Chili con carne",
    pictureUrl: "",
    country: COUNTRY.UNITED_STATES,
  },
  {
    category: CATEGORY.DESSERT,
    name: "Cookies aux pépites de chocolat",
    pictureUrl: "",
    country: COUNTRY.UNITED_STATES,
  },
  {
    category: CATEGORY.DESSERT,
    name: "Fondant au chocolat",
    pictureUrl: "",
    country: COUNTRY.FRENCH,
  },
];

module.exports = {
  recipes,
};
