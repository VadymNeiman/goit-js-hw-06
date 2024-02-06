const userName = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");
const userNameOutputStart = userNameOutput.textContent;
userName.addEventListener("input", onInput);

function onInput(event) {
  const inputName = event.currentTarget.value;
  userNameOutput.textContent =
    inputName.length === 0 ? userNameOutputStart : inputName;
}
