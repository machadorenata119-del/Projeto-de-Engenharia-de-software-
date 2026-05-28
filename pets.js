let pets = JSON.parse(localStorage.getItem("pets")) || [];

function salvar(){
  localStorage.setItem("pets", JSON.stringify(pets));
}

function adicionarPet(){

  const pet = {
    id: Date.now(),
    nome: nomePet.value,
    idade: idadePet.value,
    raca: racaPet.value,
    imagem: imagemPet.value,
    adotado:false
  };

  pets.push(pet);
  salvar();
  listar();
}

function listar(){

  listaPets.innerHTML = "";

  pets.forEach(p => {

    listaPets.innerHTML += `
      <div class="card">
        <img src="${p.imagem}">
        <div class="card-content">

          <h3>${p.nome}</h3>
          <p>${p.raca}</p>

          <p>${p.adotado ? "❤️ Adotado" : "🐾 Disponível"}</p>

          <button onclick="adotar(${p.id})">Adotar</button>
          <button onclick="excluir(${p.id})">Excluir</button>

        </div>
      </div>
    `;
  });
}

function adotar(id){
  pets = pets.map(p => p.id === id ? {...p, adotado:true} : p);
  salvar();
  listar();
}

function excluir(id){
  pets = pets.filter(p => p.id !== id);
  salvar();
  listar();
}

listar();

