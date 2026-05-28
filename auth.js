function cadastrar(){

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("novoEmail").value;
  const senha = document.getElementById("novaSenha").value;

  if(!nome || !email || !senha){
    alert("Preencha tudo!");
    return;
  }

  const user = { nome, email, senha };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Conta criada!");

  window.location.href = "index.html";
}

function login(){

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(!user){
    alert("Crie uma conta primeiro!");
    return;
  }

  if(email === user.email && senha === user.senha){

    localStorage.setItem("logado","true");

    window.location.href = "home.html";

  }else{
    alert("Dados incorretos!");
  }
}

function logout(){
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}
