import { API, RICK_API_URL } from "./Api.js";
import { Character } from "./Character.js";

const api = new API();
const char = new Character();
char.render(3, 5);

async function init(initId) {
  const character = await api.getCharacter(initId);
}

init(3);
