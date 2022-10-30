const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".btn");

const firstNameIcon = document.querySelector(".error_1");
const lastNameIcon = document.querySelector(".error_2");
const emailIcon = document.querySelector(".error_3");
const passwordIcon = document.querySelector(".error_4");

const firstNameText = document.querySelector(".error_text1");
const lastNameText = document.querySelector(".error_text2");
const emailText = document.querySelector(".error_text3");
const passwordText = document.querySelector(".error_text4");

button.addEventListener("click", function () {
  //first name errors

  if (firstName.value === "") {
    firstName.classList.add("active");
    firstNameIcon.style.display = "block";
    firstNameText.style.display = "block";
  } else {
    firstName.classList.remove("active");
    firstNameIcon.style.display = "none";
    firstNameText.style.display = "none";
  }

  // last name errors

  if (lastName.value === "") {
    lastName.classList.add("active");
    lastNameIcon.style.display = "block";
    lastNameText.style.display = "block";
  } else {
    lastName.classList.remove("active");
    lastNameIcon.style.display = "none";
    lastNameText.style.display = "none";
  }

  // email errors

  if (email.value === "") {
    email.classList.add("active");
    emailIcon.style.display = "block";
    emailText.style.display = "block";
    emailText.textContent = "email cannot be empty";
  } else {
    email.classList.remove("active");
    emailIcon.style.display = "none";
    emailText.style.display = "none";
    emailText.textContent = "Looks like this is not an email";
  }

  // email wrong

  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(emailFormat)) {
    email.classList.remove("active");
    emailIcon.style.display = "none";
    emailText.style.display = "none";
  } else {
    email.classList.add("active");
    emailIcon.style.display = "block";
    emailText.style.display = "block";
  }

  // password errors

  if (password.value === "") {
    password.classList.add("active");
    passwordIcon.style.display = "block";
    passwordText.style.display = "block";
  } else {
    password.classList.remove("active");
    passwordIcon.style.display = "none";
    passwordText.style.display = "none";
  }
});
