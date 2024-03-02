const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const userForm = event.currentTarget;
  const { email, password } = userForm.elements;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Всі поля мають бути заповнені!");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  userForm.reset();
}
