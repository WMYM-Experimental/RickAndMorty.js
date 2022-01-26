const characterContainer = document.getElementById("character-container");
class Character {
  // use destructuring
  constructor({ image, name, status, gender, species }) {
    this.image = image;
    this.name = name;
    this.status = status;
    this.gender = gender;
    this.species = species;
    this.render();
  }
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
            <h3 class="character-fact"> Status: ${this.status}</h3>
            <h3 class="character-fact"> Gender: ${this.gender}</h3>
            <h3 class="character-fact"> Spicie: ${this.species}</h3>
        </div>

        <button class="next-btn">
        Next
        </button>
    </div>
    `;
    return characterTemplate;
  }
  render() {
    characterContainer.innerHTML = this.build();
  }
}

export { Character };
