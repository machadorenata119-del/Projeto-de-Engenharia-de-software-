// PROTEGER PÁGINAS

const pagina =
window.location.pathname;

if(
pagina.includes("home.html")
||
pagina.includes("cadastrar.html")
){

if(
localStorage.getItem("logado")
!== "true"
){

window.location.href =
"./index.html";

}

}

// LOGOUT

function logout(){

localStorage.removeItem(
"logado"
);

window.location.href =
"./index.html";

}

// DADOS

let animais =
JSON.parse(
localStorage.getItem("animais")
)
||
[
{
nome:"Thor",
raca:"Labrador",
idade:"2 anos",
imagem:"https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800",
descricao:"Muito brincalhão ❤️",
adotado:false
}
];

// SALVAR

function salvar(){

localStorage.setItem(
"animais",
JSON.stringify(animais)
);

}

// MOSTRAR

function mostrarAnimais(){

const cards =
document.getElementById("cards");

if(!cards) return;

cards.innerHTML = "";

animais.forEach((animal,index)=>{

cards.innerHTML += `

<div class="card">

<img src="${animal.imagem}">

<h3>${animal.nome}</h3>

<p>
${animal.raca}
•
${animal.idade}
</p>

<p>
${animal.descricao}
</p>

<div class="buttons">

<button onclick="adotar(${index})">

${animal.adotado ? "✅ Adotado" : "❤️ Adotar"}

</button>

<button onclick="editar(${index})">

✏️ Editar

</button>

<button onclick="excluir(${index})">

🗑️ Excluir

</button>

</div>

</div>

`;

});

}

// ADOTAR

function adotar(index){

animais[index].adotado =
true;

salvar();

mostrarAnimais();

}

// EDITAR

function editar(index){

const novoNome =
prompt(
"Novo nome:",
animais[index].nome
);

if(novoNome){

animais[index].nome =
novoNome;

salvar();

mostrarAnimais();

}

}

// EXCLUIR

function excluir(index){

animais.splice(index,1);

salvar();

mostrarAnimais();

}

mostrarAnimais();
function login(){

const email =
document.getElementById("email").value;

const senha =
document.getElementById("senha").value;

if(
email === "admin@gmail.com"
&&
senha === "123"
){

localStorage.setItem(
"logado",
"true"
);

window.location.href =
"./home.html";

}

else{

alert("❌ Login inválido");

}

}

