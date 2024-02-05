let counterValue = 0;
const valueEl = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", valueDecrement);
btnIncrement.addEventListener("click", valueIncrement);

console.log(counterValue);

function valueDecrement() {
  counterValue -= 1;
  counterUpdate();
}

function valueIncrement() {
  counterValue += 1;
  counterUpdate();
}

function counterUpdate() {
  valueEl.textContent = counterValue;
}
