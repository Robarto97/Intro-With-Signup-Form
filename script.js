const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submitBtn = document.querySelector("#submit");

const errorMsg = document.querySelectorAll(".errorMessage");
const icons = document.querySelectorAll(".icon");
const emailValidate = /^\w+([\.-_]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/g;

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
  if (!firstName.value) {
    errorMsg[0].classList.add("show");
    icons[0].classList.add("show");
    firstName.classList.add("showError");
  } else {
    errorMsg[0].classList.remove("show");
    icons[0].classList.remove("show");
    firstName.classList.remove("showError");
  }

  if (!lastName.value) {
    errorMsg[1].classList.add("show");
    icons[1].classList.add("show");
    lastName.classList.add("showError");
  } else {
    errorMsg[1].classList.remove("show");
    icons[1].classList.remove("show");
    lastName.classList.remove("showError");
  }

  if (!email.value || !email.value.match(emailValidate)) {
    errorMsg[2].classList.add("show");
    icons[2].classList.add("show");
    email.classList.add("showError");
    document.querySelector("#email").placeholder = "email@example/com";
  } else {
    if (email.value.match(emailValidate)) {
      errorMsg[2].classList.remove("show");
      icons[2].classList.remove("show");
      email.classList.remove("showError");
      document.querySelector("#email").placeholder = "Email Address";
    }
  }

  if (!password.value) {
    errorMsg[3].classList.add("show");
    icons[3].classList.add("show");
    password.classList.add("showError");
  } else {
    errorMsg[3].classList.remove("show");
    icons[3].classList.remove("show");
    password.classList.remove("showError");
  }

  if (
    firstName.value &&
    lastName.value &&
    email.value.match(emailValidate) &&
    password.value
  ) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  }
}
