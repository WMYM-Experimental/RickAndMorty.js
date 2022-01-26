import { API, RICK_API_URL } from "./Api.js";
import { Character } from "./Character.js";

const api = new API();
const char = new Character();

char.render();
console.log(await api.getCharacter(3));
