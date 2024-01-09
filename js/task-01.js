// console.log(
//   "Number of categories: ",
//   document.querySelectorAll(".item").length
// );

const listOfCategories = document.querySelectorAll(".item");

console.log("Number of categories: ", listOfCategories.length);
console.log("");

// for (let i = 0; i < listOfCategories.length; i += 1) {
//   console.log("Category: ", listOfCategories[i].firstElementChild.textContent);
// }

// for (const categorie of listOfCategories) {
//   console.log("Category: ", categorie.firstElementChild.textContent);
//   console.log("Elements: ", categorie.lastElementChild.children.length);
//   console.log("");
// }

listOfCategories.forEach(function (categorie) {
  console.log("Category: ", categorie.firstElementChild.textContent);
  console.log("Elements: ", categorie.lastElementChild.children.length);
  console.log("");
});
