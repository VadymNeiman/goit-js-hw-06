const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfIngredients = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList = "item";
  itemEl.textContent = ingredient;
  return itemEl;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...arrayOfIngredients);
