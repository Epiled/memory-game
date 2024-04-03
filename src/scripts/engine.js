import bichinhos from "../db/emojis.js";
import pokemons from "../db/pokemon.js";
import digimon from "../db/digimon.js";
import yugioh from "../db/yugioh.js";

const gameType = document.querySelector("[data-game]").dataset.game;

let emojis = []
let typeDefault = false;

switch (gameType) {
  case 'pokemon':
    emojis = pokemons;
    break;
  case 'digimon':
    emojis = digimon;
    break;
  case 'yugioh':
    emojis = yugioh;
    break;
  default:
    typeDefault = true;
    emojis = bichinhos;
}

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.classList.add('item');

  if(typeDefault) {
    box.innerHTML = shuffleEmojis[i];
  } else {
    const img = document.createElement('img');
    img.src = `./src/assets/${gameType}/sprites/${emojis[i]}`;
    img.classList.add('item__image');
    box.appendChild(img); // Adiciona a imagem ao elemento div
  }

  box.onclick = handleClick
  document.querySelector('.game').appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }

  openCards = [];

  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    alert('Você venceu');
  }
}