import { API, RICK_API_URL } from "./Api.js";
import { Character } from "./Character.js";

const api = new API();
let currentCharacterId = 1;

async function init(initId) {
  const characterData = await api.getCharacter(initId);
  const char = new Character(characterData);
  return char;
}

init(currentCharacterId);
