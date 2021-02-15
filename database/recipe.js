const CATEGORY = {
  STARTER: "Entrée",
  DISH: "Plat",
  DESSERT: "Dessert",
};

const COUNTRY = {
  CHINESE: "Chinois",
  FRENCH: "Français",
  AMERICAN: "Américain",
  INDOCHINESE: "Indochinois",
  VIETNAMESE: "Vietnamien",
  MAGHREBIAN: "Maghrébin",
  ITALIAN: "Italien",
  SPANISH: "Espagnol",
};

const recipes = [
  {
    id: 1,
    category: CATEGORY.STARTER,
    name: "Oeufs de cent ans",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613243723/PXL_20201124_183850908.PORTRAIT_uk155u.jpg",
    pictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_416/v1613243723/PXL_20201124_183850908.PORTRAIT_uk155u.jpg",
    country: COUNTRY.CHINESE,
    preparationTime: "15 min",
    cookingTime: "0 min",
    totalTime: "15 min",
    quantity: "Pour 6 oeufs",
    ingredients: [
      "Sucre",
      "Echalotes au vinaigre",
      "Vinaigre noir",
      "Coriandre",
    ],
    instructions: [],
  },
  {
    id: 2,
    category: CATEGORY.DISH,
    name: "Loc Lac",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613238723/PXL_20201121_182427531.PORTRAIT_inomef.jpg",
    country: COUNTRY.INDOCHINESE,
  },
  {
    id: 3,
    category: CATEGORY.DISH,
    name: "Zha Jiang Mian",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613243456/149990910_1909050255915243_2559880426026161432_n_vzjh1u.jpg",
    country: COUNTRY.CHINESE,
  },
  {
    id: 4,
    category: CATEGORY.DISH,
    name: "Phô",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613239803/PXL_20201123_114903231_imx8m2.jpg",
    country: COUNTRY.VIETNAMESE,
  },
  {
    id: 5,
    category: CATEGORY.DISH,
    name: "Couscous",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613239750/PXL_20201027_183743640_t7rwhs.jpg",
    country: COUNTRY.MAGHREBIAN,
  },
  {
    id: 6,
    category: CATEGORY.DISH,
    name: "Risotto aux fruits de mer",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613247390/PXL_20201219_190638040_dqc5jb.jpg",
    country: COUNTRY.ITALIAN,
  },
  {
    id: 7,
    category: CATEGORY.DISH,
    name: "Risotto au parmesan et aux champignons",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613250039/PXL_20201116_184513904_zjtt8k.jpg",
    country: COUNTRY.ITALIAN,
  },
  {
    id: 8,
    category: CATEGORY.DISH,
    name: "Paella",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613247588/PXL_20201212_185415853_zoxijq.jpg",
    country: COUNTRY.SPANISH,
  },
  {
    id: 9,
    category: CATEGORY.DESSERT,
    name: "Cookies aux pépites de chocolat",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_800/v1613251503/20200505_141945_i7w7gs.jpg",
    country: COUNTRY.AMERICAN,
  },
  {
    id: 10,
    category: CATEGORY.DESSERT,
    name: "Fondant au chocolat",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613248504/PXL_20201124_142407044_ij9czu.jpg",
    country: COUNTRY.FRENCH,
  },
  {
    id: 11,
    category: CATEGORY.DESSERT,
    name: "Cake à la banane et aux pépites de chocolat",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_800/v1613250625/PXL_20201118_151233557.PORTRAIT_nbgupp.jpg",
    country: COUNTRY.FRENCH,
  },
  {
    id: 12,
    category: CATEGORY.DESSERT,
    name: "Cake au matcha et aux framboises",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_800/v1613251982/20200530_125217_fgt9ya.jpg",
    country: COUNTRY.FRENCH,
  },
  {
    id: 13,
    category: CATEGORY.DESSERT,
    name: "Cake marbré au chocolat",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_800/v1613251769/20200529_151900_i5y051.jpg",
    country: COUNTRY.FRENCH,
  },
  {
    id: 14,
    category: CATEGORY.DESSERT,
    name: "Cake aux myrtilles",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_800/v1613252173/20200704_122544_wymbci.jpg",
    country: COUNTRY.FRENCH,
  },
  {
    id: 15,
    category: CATEGORY.DESSERT,
    name: "Crêpes",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613250373/PXL_20201101_151424265_o5xjqp.jpg",
    country: COUNTRY.FRENCH,
  },
];

module.exports = {
  CATEGORY,
  recipes,
};
