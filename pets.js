let pets = JSON.parse(localStorage.getItem("pets")) || [];

function salvarPets() {
  localStorage.setItem("pets", JSON.stringify(pets));
}

function adicionarPet() {

  const nome = document.getElementById("nomePet").value;
  const idade = document.getElementById("idadePet").value;
  const raca = document.getElementById("racaPet").value;
  const imagem = document.getElementById("imagemPet").value;

  const pet = {
    id: Date.now(),
    nome,
    idade,
    raca,
    imagem,
    adotado: false
  };

  pets.push(pet);

  salvarPets();
  listarPets();
}

function listarPets() {

  const lista = document.getElementById("listaPets");

  lista.innerHTML = "";

  pets.forEach((pet) => {

    lista.innerHTML += `
      <div class="card">
        <img src="${pet.imagem}" alt="${pet.nome}">

        <div class="card-content">
          <h3>${pet.nome}</h3>

          <p>Idade: ${pet.idade} meses</p>
          <p>Raça: ${pet.raca}</p>

          <p>Status:
            ${pet.adotado ? "❤️ Adotado" : "🐾 Disponível"}
          </p>

          <div class="acoes">
            <button onclick="adotarPet(${pet.id})">
              Adotar
            </button>

            <button onclick="editarPet(${pet.id})">
              Editar
            </button>

            <button onclick="excluirPet(${pet.id})">
              Excluir
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function adotarPet(id){

  pets = pets.map((pet) => {
    if(pet.id === id){
      pet.adotado = true;
    }
    return pet;
  });

  salvarPets();
  listarPets();
}

function excluirPet(id){

  pets = pets.filter((pet) => pet.id !== id);

  salvarPets();
  listarPets();
}

function editarPet(id){

  const novoNome = prompt("Novo nome:");

  pets = pets.map((pet) => {

    if(pet.id === id){
      pet.nome = novoNome;
    }

    return pet;
  });

  salvarPets();
  listarPets();
}

listarPets();
