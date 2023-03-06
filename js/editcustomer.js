document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function() {
        $('#telefone').mask('(00) 00000-0000');
    });
});

function navigate(page) {
  window.location = `../${page}.html`;
}

function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validate() {
  const form = document.querySelector("form");
  const nomeInput = form.querySelector("#nome");
  const emailInput = form.querySelector('input[type="email"]');
  const cidadeInput = form.querySelector("#cidade");
  const enderecoInput = form.querySelector("#endereco");
  const telefoneInput = form.querySelector("#telefone");

  if (!nomeInput.value) {
    alert("Por favor, preencha o campo nome completo.");
    return;
  }

  if (!validarEmail(emailInput.value)) {
    alert("Por favor, digite um email válido.");
    return;
  }

  if (!cidadeInput.value) {
    alert("Por favor, preencha o campo cidade.");
    return;
  }

  if (!enderecoInput.value) {
    alert("Por favor, preencha o campo endereço.");
    return;
  }

  if (!telefoneInput.value) {
    alert("Por favor, preencha o campo telefone.");
    return;
  }

  alert("Cliente alterado com sucesso!")
  form.submit();
  this.navigate("customers");
}
