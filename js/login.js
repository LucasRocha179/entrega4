document.addEventListener("DOMContentLoaded", () => {
  // const form = document.querySelector("form");
  // const emailInput = document.getElementById("email");
  // const passwordInput = document.getElementById("password");
  // form.addEventListener("submit", (event) => {
  //   if (!emailInput.value) {
  //     event.preventDefault();
  //     alert("Por favor, digite um e-mail válido.");
  //   }
  //   if (!passwordInput.value) {
  //     event.preventDefault();
  //     alert("Por favor, digite sua senha.");
  //   }
  // });
});

function navigate(page) {
  window.location = `../${page}.html`;
}

function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function goToHome() {
  document.login_form.action = "../home.html";
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!validarEmail(emailInput.value)) {
    event.preventDefault();
    alert("Por favor, digite um e-mail válido.");
  } else if (!passwordInput.value) {
    event.preventDefault();
    alert("Por favor, digite sua senha.");
  } else {
    form.submit();
    this.navigate("home");
  }
  return false;
}

function loginUser() {
  document.login_form.action = this.goToHome();
  return false;
}

function registerUser() {
  document.login_form.action = this.navigate("register");
  return false;
}
