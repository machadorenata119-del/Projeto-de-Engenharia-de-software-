function mostrarSenha(){

  const senha = document.getElementById("senha");

  if(senha.type === "password"){
    senha.type = "text";
  }else{
    senha.type = "password";
  }

}

function login(){

  const email = document.getElementById("email").value;

  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if(
    usuario &&
    email === usuario.email &&
    senha === usuario.senha
  ){

    localStorage.setItem("logado","true");

    alert("Login realizado com sucesso!");

    window.location.href = "index.html";

  }else{

    alert("Email ou senha incorretos!");

  }

}

function logout(){

  localStorage.removeItem("logado");

  window.location.href = "login.html";

}
