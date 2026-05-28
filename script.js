// VERIFICAR LOGIN

if(
window.location.pathname.includes("home")
||
window.location.pathname.includes("cadastrar")
){

    if(
    localStorage.getItem("logado")
    !== "true"
    ){

        window.location.href =
        "index.html";

    }

}

// LOGOUT

function logout(){

    localStorage.removeItem(
        "logado"
    );

    window.location.href =
    "index.html";

}

// LISTA

let animais =
JSON.parse(
localStorage.getItem("animais")
) || [];

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

                <button
                class="adotar"
                onclick="adotar(${index})">

                ${
                animal.adotado
                ?
                "✅ Adotado"
                :
                "❤️ Adotar"
                }

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

// ADOTAR

function adotar(index){

    animais[index].adotado = true;

    salvar();

    mostrarAnimais();

}

// EDITAR

function editar(index){

    let novoNome =
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
