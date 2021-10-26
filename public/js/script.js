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
  const ingredientDiv = document.querySelector(".ingredient");
  ingredientDiv.parentNode.removeChild(ingredientDiv);
};

const addInstruction = () => {
  const instructionInput = document.createElement("input");
  input.setAttribute("type", "text");
  instructionInput.setAttribute("name", "instructions[]");
  instructionInput.id = "instruction";

  const instructionsDiv = document.getElementById("instructions");
  instructionsDiv.appendChild(instructionInput);
};
