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
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_358/v1613508634/PXL_20201124_183850908.PORTRAIT_qaxreq.jpg",
    mobilePictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613508634/PXL_20201124_183850908.PORTRAIT_qaxreq.jpg",
    country: COUNTRY.CHINESE,
    preparationTime: "15 min",
    restTime: "30 min",
    cookingTime: "0 min",
    totalTime: "45 min",
    quantity: "Pour 6 oeufs",
    ingredients: [
      "Sucre",
      "Echalotes au vinaigre",
      "Vinaigre noir",
      "Coriandre",
    ],
    instructions: [
      "Ecaler les oeufs.",
      "Les couper en 4 dans le sens de la longueur et les disposer dans un plat.",
      "Ajouter un peu de sucre.",
      "Réserver au frais pendant 30 min.",
      "Laver la coriandre.",
      "Ajouter des échalotes au vinaigre dans le plat.",
      "Verser du vinaigre noir.",
      "Disposer de la coriandre par-dessus.",
    ],
  },
  {
    id: 2,
    category: CATEGORY.DISH,
    name: "Loc Lac",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613491099/PXL_20201121_182427531.PORTRAIT_1_g8defd.jpg",
    pictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_584/v1613491099/PXL_20201121_182427531.PORTRAIT_1_g8defd.jpg",
    mobilePictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613491099/PXL_20201121_182427531.PORTRAIT_1_g8defd.jpg",
    country: COUNTRY.INDOCHINESE,
    preparationTime: "15 min",
    cookingTime: "30 min",
    restTime: "1 H 00 min",
    totalTime: "1 H 45 min",
    quantity: "Pour 4 personnes",
    ingredients: [
      "500 g de merlan de boeuf",
      "3 gousses d'ail",
      "3 cs de sauce soja salée",
      "5 cs de sauce huître",
      "3 verres de riz thaï",
      "2 cs de concentré de tomates",
      "4 cs de ketchup",
      "4 oeufs",
      "1 concombre",
      "4 tomates",
      "2 oignons",
      "1 citron vert",
      "Sel",
      "Poivre",
      "Huile de tournesol",
    ],
    instructions: [
      "Couper le boeuf en cubes, émincer les gousses d'ail, puis les mettre dans un bol.",
      "Ajouter la sauce soja et la sauce huître.",
      "Mélanger et laisser mariner au frais pendant au moins 1 heure.",
      "Rincer le riz et le cuire dans un cuiseur à riz.",
      "Couper le concombre en demi-rondelles, les tomates en rondelles et les oignons en lamelles.",
      "Répartir et disposer le tout sur 4 assiettes.",
      "Dans un ramequin, presser le citron, ajouter du sel et du poivre, puis mélanger.",
      "Dans un wok chauffé, verser un peu d'huile de tournesol et ajouter le riz cuit.",
      "Ajouter le concentré de tomates et le ketchup, puis faire revenir le tout jusqu'à ce que le mélange soit homogène.",
      "Disposer le riz sur les assiettes.",
      "Faire revenir le boeuf dans le wok à feu vif pendant 5 minutes.",
      "Dans une poêle chauffée, verser un peu d'huile et cuire les oeufs au plat à feu moyen pendant 3 min.",
      "Disposer le boeuf sur les oignons et les oeufs sur le riz dans les assiettes.",
    ],
  },
  {
    id: 3,
    category: CATEGORY.DISH,
    name: "Zha Jiang Mian",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613243456/149990910_1909050255915243_2559880426026161432_n_vzjh1u.jpg",
    pictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_368/v1613509187/149990910_1909050255915243_2559880426026161432_n_mxm0mu.jpg",
    mobilePictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613509187/149990910_1909050255915243_2559880426026161432_n_mxm0mu.jpg",
    country: COUNTRY.CHINESE,
    preparationTime: "30 min",
    cookingTime: "45 min",
    restTime: "0 min",
    totalTime: "1 H 15 min",
    quantity: "Pour 4 personnes",
    ingredients: [
      "5 gousses d'ail",
      "2 échalotes",
      "1 oignon",
      "400 g de palette de porc",
      "4 cs de sauce au soja salée",
      "1 cs de poivre",
      "2 cs de sucre roux",
      '1 cs de "Chen Nian Hua Tiao Wine"',
      "5 cs de sauce huître",
      "2 cs de sauce saveur abalone",
      "1 cc de Maïzena",
      "1 paquet de tofu aux 5 épices",
      "Huile de tournesol",
      '1 cs de sauce "chili bean" (Toban Djan)',
      "2 cs de sauce soja salée",
      '2 cs de sauce "mushroom dark soy sauce"',
      "1 concombre",
      "Pousses de soja",
      "Coriandre",
      "Ciboulette",
      "1 kg d'udon",
    ],
    instructions: [
      "Emincer les gousses d'ail, les échalotes et l'oignon, puis réserver.",
      "Rincer la palette de porc et la couper en morceaux.",
      "Mixer le porc avec la sauce au soja salée.",
      'Assaisonner le porc haché avec du poivre, du sucre, du vin "Chen Nian Hua Tiao", de la sauce huître, de la sauce saveur abalone et de la maïzena, puis réserver.',
      "Rincer le tofu aux 5 épices et le couper en dés, puis réserver.",
      "Dans un wok chauffé à feu vif, verser un peu d'huile de tournesol.",
      "Ajouter l'oignon, puis l'ail et les échalotes, pour les faire dorer.",
      'Ajouter la sauce "chili bean" (Toban Djan).',
      "Ajouter le porc haché.",
      "Ajouter le tofu aux 5 épices.",
      'Ajouter la sauce soja salée et la sauce "mushroom dark soy sauce".',
      "Ajouter 75 cl d'eau bouillante et laisser mijoter pendant 2 minutes.",
      "Ajouter 30 cl d'eau bouillante et laisser mijoter pendant 2 minutes.",
      "Couvrir et laisser mijoter pendant 30 minutes à feu doux.",
      "Laver et couper le concombre, les pousses de soja, la coriandre et la ciboulette.",
      "Juste avant le service, cuire les udon.",
      "Disposer les udon dans les bols, verser la sauce au porc et au tofu par-dessus, puis parsemer de concombre, pousses de soja, coriandre et ciboulette.",
    ],
  },
  {
    id: 4,
    category: CATEGORY.DISH,
    name: "Phô",
    thumbnailPictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613239803/PXL_20201123_114903231_imx8m2.jpg",
    pictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_368/v1613509671/PXL_20201123_114903231_ljbsyr.jpg",
    mobilePictureUrl:
      "https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_256/v1613509671/PXL_20201123_114903231_ljbsyr.jpg",
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
