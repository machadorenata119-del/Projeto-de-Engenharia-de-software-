function mostrarSenha(){

  const senha = document.getElementById("senha");

  if(senha.type === "password"){
    senha.type = "text";
  }else{
    senha.type = "password";
  }

}

/* CADASTRO */

function cadastrar(){

  const nome =
  document.getElementById("nome").value;

  const email =
  document.getElementById("novoEmail").value;

  const senha =
  document.getElementById("novaSenha").value;

  // VALIDAÇÃO

  if(nome === "" || email === "" || senha === ""){

    alert("Preencha todos os campos!");

    return;

  }

  const usuario = {

    nome:nome,
    email:email,
    senha:senha

  };

  // SALVAR NO LOCALSTORAGE

  localStorage.setItem(
    "usuario",
    JSON.stringify(usuario)
  );

  alert("Conta criada com sucesso! ❤️");

  window.location.href = "login.html";

}

/* LOGIN */

function login(){

  const email =
  document.getElementById("email").value;

  const senha =
  document.getElementById("senha").value;

  const usuario =
  JSON.parse(localStorage.getItem("usuario"));

  // VERIFICA SE EXISTE CONTA

  if(!usuario){

    alert("Nenhuma conta cadastrada!");

    return;

  }

  // VERIFICA LOGIN

  if(
    email === usuario.email &&
    senha === usuario.senha
  ){

    localStorage.setItem("logado","true");

    alert("Login realizado com sucesso! 🐱");

    window.location.href = "index.html";

  }else{

    alert("Email ou senha incorretos!");

  }

}

/* SAIR */

function logout(){

  localStorage.removeItem("logado");

  window.location.href = "login.html";

}
