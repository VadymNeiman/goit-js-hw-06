const inputEl = document.querySelector("#validation-input");
const validLenghtInput = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", OnBlur);

function OnBlur(event) {
  const lengthInput = event.currentTarget.value;

  if (lengthInput.length === validLenghtInput) {
    if (
      !inputEl.classList.contains("valid") &&
      !inputEl.classList.contains("invalid")
    ) {
      inputEl.classList.add("valid");
    } else {
      if (inputEl.classList.contains("invalid")) {
        inputEl.classList.replace("invalid", "valid");
      }
    }
  } else {
    if (
      !inputEl.classList.contains("valid") &&
      !inputEl.classList.contains("invalid")
    ) {
      inputEl.classList.add("invalid");
    } else {
      if (inputEl.classList.contains("valid")) {
        inputEl.classList.replace("valid", "invalid");
      }
    }
  }
}
