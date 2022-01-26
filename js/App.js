import { API, RICK_API_URL } from "./Api.js";

const api = new API();
console.log(await api.getCharacter(3));
