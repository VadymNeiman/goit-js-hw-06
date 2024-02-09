const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("change", onSlide);

function onSlide(event) {
  textEl.style.fontSize = `${inputEl.value}px`;
}
