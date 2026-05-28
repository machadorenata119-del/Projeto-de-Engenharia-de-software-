let pets = JSON.parse(localStorage.getItem("pets")) || [

  {
    id:1,
    nome:"Mingau",
    idade:4,
    raca:"Persa",
    imagem:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop",
    adotado:false
  },

  {
    id:2,
    nome:"Luna",
    idade:7,
    raca:"Siamês",
    imagem:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1200&auto=format&fit=crop",
    adotado:false
  },

  {
    id:3,
    nome:"Nina",
    idade:5,
    raca:"Maine Coon",
    imagem:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
    adotado:false
  }

];

function salvarPets(){

  localStorage.setItem("pets",JSON.stringify(pets));

}

function listarPets(){

  const lista = document.getElementById("listaPets");

  lista.innerHTML = "";

  pets.forEach((pet)=>{

    lista.innerHTML += `
    
      <div class="card">

        <img src="${pet.imagem}">

        <div class="card-content">

          <h3>${pet.nome}</h3>

          <p>🐾 Raça: ${pet.raca}</p>

          <p>🎂 Idade: ${pet.idade} meses</p>

          <p class="status">
            ${pet.adotado ? "❤️ Adotado" : "🐱 Disponível"}
          </p>

          <div class="acoes">

            <button class="btn-adotar"
              onclick="adotarPet(${pet.id})">
              Adotar
            </button>

            <button class="btn-editar"
              onclick="editarPet(${pet.id})">
              Editar
            </button>

            <button class="btn-excluir"
              onclick="excluirPet(${pet.id})">
              Excluir
            </button>

          </div>

        </div>

      </div>

    `;

  });

}

function adicionarPet(){

  const nome =
  document.getElementById("nomePet").value;

  const idade =
  document.getElementById("idadePet").value;

  const raca =
  document.getElementById("racaPet").value;

  const imagem =
  document.getElementById("imagemPet").value;

  const novoPet = {

    id:Date.now(),
    nome,
    idade,
    raca,
    imagem,
    adotado:false

  };

  pets.push(novoPet);

  salvarPets();

  listarPets();

}

function adotarPet(id){

  pets = pets.map((pet)=>{

    if(pet.id === id){

      pet.adotado = true;

    }

    return pet;

  });

  salvarPets();

  listarPets();

}

function excluirPet(id){

  pets = pets.filter((pet)=> pet.id !== id);

  salvarPets();

  listarPets();

}

function editarPet(id){

  const novoNome = prompt("Novo nome:");

  pets = pets.map((pet)=>{

    if(pet.id === id){

      pet.nome = novoNome;

    }

    return pet;

  });

  salvarPets();

  listarPets();

}

listarPets();
