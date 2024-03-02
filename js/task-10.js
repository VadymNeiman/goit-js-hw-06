function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  createBoxes(numberInput.value);
});

btnDestroy.addEventListener("click", destroyBoxses);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0, h = 30; i < amount; i += 1, h += 10) {
    const box = document.createElement("div");
    box.style.marginTop = "4px";
    box.style.width = `${h}px`;
    box.style.height = `${h}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  divBoxes.append(...boxes);
}

function destroyBoxses() {
  divBoxes.innerHTML = "";
}
