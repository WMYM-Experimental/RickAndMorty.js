const RICK_API_URL = `https://rickandmortyapi.com/api/character/`;

class API {
  async getCharacter(currentCharacterId) {
    // use id for take character info from the api
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${currentCharacterId}`
    );
    // parsing response to json
    const data = await response.json();
    // this is an async method so it returns a promise
    return data;
  }
}

export { API, RICK_API_URL };
