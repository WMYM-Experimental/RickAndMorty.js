// const RICK_API_URL = `https://rickandmortyapi.com/api/character/`;

class Api {
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

export { Api };

function fizzbuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  }
}

function show(num) {
  for (let i = 0; i <= num; i++) {
    fizzbuzz(i);
  }
}

show(5);
