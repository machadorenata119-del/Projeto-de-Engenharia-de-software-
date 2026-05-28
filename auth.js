function mostrarSenha() {
  const senha = document.getElementById("senha");

  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("novoEmail").value;
  const senha = document.getElementById("novaSenha").value;

  const usuario = {
    nome,
    email,
    senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if(email === usuario.email && senha === usuario.senha){
    alert("Login realizado!");
    window.location.href = "index.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}

function logout(){
  window.location.href = "login.html";
}
