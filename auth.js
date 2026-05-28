function login(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(!user){
    alert("Crie uma conta primeiro!");
    return;
  }

  if(email === user.email && senha === user.senha){
    window.location.href = "home.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}

function irCadastro(){
  window.location.href = "cadastro.html";
}

function cadastrar(){

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("novoEmail").value;
  const senha = document.getElementById("novaSenha").value;

  const user = { nome, email, senha };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Conta criada com sucesso!");

  window.location.href = "index.html";
}
