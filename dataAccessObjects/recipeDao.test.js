const recipeDao = require("./recipeDao");

test("recipeDao", () => {
  jest.spyOn(recipeDao, "findAll");
  recipeDao.findAll.mockImplementation(() => []);

  expect(recipeDao.findAll()).toEqual([]);

  recipeDao.findAll.mockRestore();
});
