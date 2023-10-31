const input = document.querySelector(".input-search");
const btn = document.querySelector(".btn");
const pokemonName = document.querySelector(".pokemon-name-h1");
const pokemonPic = document.querySelector(".pokemon-left-detail");
const pokemonNumber = document.querySelector(".number-pokemon");
const pokemonType = document.querySelector(".pokemon-type");
const pokemonSecondType = document.querySelector(".pokemon-type-second");
const pokemonDetailsBG = document.querySelector(".pokemon-details");
const pokemonHeight = document.querySelector(".height-span");
const pokemonWeight = document.querySelector(".weight-span");
const pokemonAbility = document.querySelector(".ability-paragraph");
const pokemonSecondAbility = document.querySelector(
  ".second-ability-paragraph"
);
const pokemonDiv = document.querySelector(".pokemon-box");

const getPokemon = async () => {
  let pokemon = input.value.toLowerCase();
  pokemonDiv.classList.add("show");

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  pokemonName.innerHTML = data.name;
  pokemonPic.innerHTML = `<img class="pokemon-pic slide-in-top" src="${data.sprites.other.dream_world.front_default}" alt="Pokemon picture">`;
  pokemonNumber.innerHTML = data.order < 99 ? "0" + data.order : data.order;
  input.value = "";

  if (data.types.length == 2) {
    pokemonType.innerHTML = data.types[0].type.name;
    pokemonType.classList = `${data.types[0].type.name}`;
    pokemonSecondType.innerHTML = data.types[1].type.name;
    pokemonSecondType.classList = `${data.types[1].type.name}`;
  } else {
    pokemonType.innerHTML = data.types[0].type.name;
    pokemonType.classList = `${data.types[0].type.name}`;
    pokemonSecondType.classList.add("remove");
  }

  pokemonDetailsBG.classList = `${data.types[0].type.name}-gradient`;

  pokemonHeight.innerHTML = "0," + data.height + "m";
  pokemonWeight.innerHTML = data.weight + "kg";

  pokemonAbility.innerHTML = data.abilities[0].ability.name;
  console.log(data);
  pokemonSecondAbility.innerHTML = data.abilities[1].ability.name;
};

btn.addEventListener("click", () => {
  getPokemon();
});
