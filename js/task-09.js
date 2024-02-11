function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickColorChange() {
  const page = document.querySelector("body");
  const colorValue = document.querySelector(".color");

  const currentColor = getRandomHexColor();

  page.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;
}

const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", onClickColorChange);
