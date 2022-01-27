import { Api } from "./Api.js";
import { Character } from "./Character.js";

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

const api = new Api();
let currentCharacterId = 1;

function validStep(currentCharacterId) {
  if (currentCharacterId == 1) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "flex";
  }
}

async function init(currentCharacterId) {
  validStep(currentCharacterId);
  const characterData = await api.getCharacter(currentCharacterId);
  const char = new Character(characterData);
  return char;
}

nextBtn.addEventListener("click", async () => {
  currentCharacterId += 1;
  init(currentCharacterId);
});

previousBtn.addEventListener("click", async () => {
  currentCharacterId -= 1;
  init(currentCharacterId);
});

init(currentCharacterId);
