const addIngredient = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "ingredients[]");
  input.placeholder = "Ingrédient";

  const ingredientsDiv = document.getElementById("ingredients");
  ingredientsDiv.appendChild(input);
};

const addInstruction = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "instructions[]");
  input.placeholder = "Instruction";

  const instructionsDiv = document.getElementById("instructions");
  instructionsDiv.appendChild(input);
};
