// capturando os elementos hmtl pelos ids
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmSenha = document.getElementById("confirm-senha");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// função para checkar os inputs do form
function checkInputs() {
  const usernameVal = username.value;
  const emailVal = email.value;
  const senhaVal = senha.value;
  const confirmSenhaVal = confirmSenha.value;

  // if para, caso haja erro, setar a mensagem de erro no campo do username
  if (usernameVal === "") {
    setErrorFor(username, "O nome de usuário é obrigatório!");
  } else {
    setSuccessFor(username);
  }

  // if para, caso haja erro, setar a mensagem de erro no campo do email
  if (emailVal === "") {
    setErrorFor(email, "O email é obrigatório!");
  } else if (!checkEmail(emailVal)) {
    setErrorFor(email, "Por favor insira um email válido");
  } else {
    setSuccessFor(email);
  }

  // if para, caso haja erro, setar a mensagem de erro no campo da senha
  if (senhaVal === "") {
    setErrorFor(senha, "A senha é obrigatória");
  } else if (senhaVal.length < 7) {
    setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres!");
  } else {
    setSuccessFor(senha);
  }

  // if para, caso haja erro, setar a mensagem de erro no campo da senha
  if (confirmSenhaVal === "") {
    setErrorFor(confirmSenha, "A confirmação de senha é obrigatória!");
  } else if (confirmSenhaVal !== senhaVal) {
    setErrorFor(confirmSenha, "As senhas não estão de acordo!");
  } else {
    setSuccessFor(confirmSenha);
  }
  // capturando todos os elementos com a classe "form-controller" (divs)
  const formControllers = form.querySelectorAll(".form-controller");
  // retornando todos os elementos que possuírem a classe "form-controller success"
  const formValido = [...formControllers].every((formController) => {
    return formController.className === "form-controller success";
  });
  // if utilizando a função de validação do formulário para imprimir no console a mensgem de êxito
  if (formValido) {
    console.log("O formulário está 100% válido!");
  }
}

// função para setar a classe e mensagem de erro
function setErrorFor(input, message) {
  const formController = input.parentElement;
  const small = formController.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adciona a classe de erro
  formController.className = "form-controller error";
}
// função para setar a classe sucesso
function setSuccessFor(input) {
  const formController = input.parentElement;

  // Adiciona a classe de sucesso
  formController.className = "form-controller success";
}

// regex para a validação do email
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
