const listOfCategories = document.querySelectorAll(".item");

console.log("Number of categories: ", listOfCategories.length);
console.log("");

listOfCategories.forEach(function (categorie) {
  console.log("Category: ", categorie.firstElementChild.textContent);
  console.log("Elements: ", categorie.lastElementChild.children.length);
  console.log("");
});
