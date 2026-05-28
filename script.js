// VERIFICAR LOGIN

if(
localStorage.getItem("logado")
!== "true"
){

window.location.href =
"index.html";

}

// LOGOUT

function logout(){

localStorage.removeItem(
"logado"
);

window.location.href =
"index.html";

}

// LISTA DE ANIMAIS

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
},

{
nome:"Luna",
raca:"Persa",
idade:"1 ano",
imagem:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800",
descricao:"Muito carinhosa 🐱",
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

// MOSTRAR ANIMAIS

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

<button
class="adotar"
onclick="adotar(${index})">

${animal.adotado ? "✅ Adotado" : "❤️ Adotar"}

</button>

<button
class="editar"
onclick="editar(${index})">

✏️ Editar

</button>

<button
class="excluir"
onclick="excluir(${index})">

🗑️ Excluir

</button>

</div>

</div>

`;

});

}

// ADOTAR

function adotar(index){

animais[index].adotado = true;

salvar();

mostrarAnimais();

alert(
"🐾 Solicitação enviada!"
);

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

// CADASTRAR

function cadastrarAnimal(){

const nome =
document.getElementById("nome").value;

const raca =
document.getElementById("raca").value;

const idade =
document.getElementById("idade").value;

const imagem =
document.getElementById("imagem").value;

const descricao =
document.getElementById("descricao").value;

animais.push({

nome,
raca,
idade,
imagem,
descricao,
adotado:false

});

salvar();

window.location.href =
"home.html";

}

mostrarAnimais();
