function navigate(page) {
  window.location = `../${page}.html`;
}

function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function registerNewUser() {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const nomeInput = document.getElementById("nome");
  const passwordInput = document.getElementById("password");
  const confirmacaoInput = document.getElementById("confirmacao");

  if (!validarEmail(emailInput.value)) {
    alert("Por favor, digite um e-mail válido.");
  } else if (!nomeInput.value) {
    alert("Por favor, digite seu nome.");
  } else if (!passwordInput.value) {
    alert("Por favor, digite sua senha.");
  } else if (!confirmacaoInput.value) {
    alert("Por favor, confirme sua senha.");
  } else if (passwordInput.value != confirmacaoInput.value) {
    alert("As senhas não são iguais, verifique.");
  } else {
    form.submit();
    alert("Usuário cadastrado!");
    this.navigate("login");
  }
  return false;
}

function registerUser() {
  document.register_form.action = this.registerNewUser();
  return false;
}

function goBack() {
  document.register_form.action = this.navigate("login");
  return false;
}
