const button = document.querySelector(".button");
const form = document.querySelector(".form");
const errorMessage = document.querySelectorAll(".errorMessage");
const errorBlock = document.querySelectorAll(".error-block");
form.onsubmit = Control;

function Control(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let lastName = e.target.lastName.value;
  let email = e.target.email.value;
  let password = e.target.password.value;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  errorBlock.forEach(error => {
    error.classList.add("display-none")
  });

  if (name === null || name === "") {
    document.getElementById("nameError").classList.remove("display-none");
  }

  if (lastName === null || lastName === "") {
    document.getElementById("lastNameError").classList.remove("display-none");
  }

  if (!email.match(emailPattern)) {
    document.getElementById("emailError").classList.remove("display-none");
  }

  if (password === null || password === "") {
    document.getElementById("passwordError").classList.remove("display-none");
  }
}
