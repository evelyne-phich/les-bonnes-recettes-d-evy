const addIngredient = () => {
  const ingredientInput = document.createElement("input");
  ingredientInput.setAttribute("type", "text");
  ingredientInput.setAttribute("name", "ingredients[]");
  ingredientInput.id = "ingredient";

  const deleteIngredientButton = document.createElement("button");
  deleteIngredientButton.setAttribute("type", "button");
  deleteIngredientButton.className = "deleteIngredientButton";
  deleteIngredientButton.innerText = "-";

  const ingredientDiv = document.createElement("div");
  ingredientDiv.className = "ingredient";
  ingredientDiv.appendChild(ingredientInput);
  ingredientDiv.appendChild(deleteIngredientButton);

  const ingredientsDiv = document.getElementById("ingredients");
  ingredientsDiv.appendChild(ingredientDiv);

  deleteIngredientButton.onclick = () => {
    ingredientDiv.parentNode.removeChild(ingredientDiv);
  };
};

const deleteIngredient = () => {
  const ingredientDiv = document.getElementById("ingredient");
  ingredientDiv.parentNode.removeChild(ingredientDiv);
};
