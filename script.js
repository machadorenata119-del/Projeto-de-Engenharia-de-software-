// VERIFICAR LOGIN

if(
    localStorage.getItem("logado")
    !== "true"
){

    window.location.href =
    "login.html";

}


const adotar = document.querySelectorAll(".adotar");

adotar.forEach(botao => {

    botao.addEventListener("click", () => {

        alert("🐾 Solicitação de adoção enviada com sucesso!");

    });

});
