const recipeDao = require("../dataAccessObjects/recipeDao");

jest.mock("../dataAccessObjects/recipeDao");

test("recipeDao", () => {
  expect(recipeDao.findAll()).toEqual([]);

  recipeDao.findAll.mockReset();
});
