const characterContainer = document.getElementById("character-container");
class Character {
  constructor(image, name) {
    this.image = image;
    this.name = name;
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
        </div>
    </div>
    `;
    return characterTemplate;
  }
  render() {
    characterContainer.innerHTML = this.build();
  }
}

export { Character };
