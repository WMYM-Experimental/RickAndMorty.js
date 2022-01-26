const RICK_API_URL = `https://rickandmortyapi.com/api/character/`;

class API {
  async getCharacter(idCharacter) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${idCharacter}`
    );
    // parsing response to json
    const data = await response.json();
    //this is an async method so it returns a promise
    return data;
  }
}

export { API, RICK_API_URL };
