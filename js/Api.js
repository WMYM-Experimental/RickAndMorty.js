const RICK_API_URL = `https://rickandmortyapi.com/api/character/2`;

class API {
  getCharacter() {
    fetch(RICK_API_URL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

export { API, RICK_API_URL };
