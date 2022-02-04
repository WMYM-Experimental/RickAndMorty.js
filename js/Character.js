class Character {
  // use destructuring for take the params from the json
  constructor({ image, name, status, gender, species, location }) {
    this.image = image;
    this.name = name;
    this.status = status;
    this.gender = gender;
    this.species = species;
    this.location = location;
    this.render();
  }

  // character info and image skeleton are built
  build() {
    const characterTemplate = `
    <div id="character-image-container">
        <img src="${this.image}" alt="${this.name}">
    </div>

    <div id="character-info-container">
        <div id="character-name" class="character-name">
            <h2 class="name">
            ${this.name}
            </h2>
        </div>

        <div id="character-about" class="character-about">
            <h3 class="character-fact"> Status: <span>${this.status}</span></h3>
            <h3 class="character-fact"> Location: <span>${this.location.name}</span></h3>
            <h3 class="character-fact"> Gender: <span>${this.gender}</span></h3>
            <h3 class="character-fact"> Spicie: <span>${this.species}</span></h3>
        </div>
    </div>
    `;
    return characterTemplate;
  }

  // the previous built is rendered
  render() {
    const characterContainer = document.getElementById("character-container");
    characterContainer.innerHTML = this.build();
  }
}

export { Character };
