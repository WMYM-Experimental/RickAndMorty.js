import { API, RICK_API_URL } from "./Api.js";
import { Character } from "./Character.js";

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

const api = new API();
let currentCharacterId = 1;

function validStep(currentCharacterId) {
  if (currentCharacterId == 1) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "inline-block";
  }
}

async function init(currentCharacterId) {
  validStep(currentCharacterId);
  const characterData = await api.getCharacter(currentCharacterId);
  const char = new Character(characterData);
  return char;
}

nextBtn.addEventListener("click", async () => {
  currentCharacterId = currentCharacterId + 1;
  init(currentCharacterId);
});

previousBtn.addEventListener("click", async () => {
  currentCharacterId = currentCharacterId - 1;
  init(currentCharacterId);
});

init(currentCharacterId);
