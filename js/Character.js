const characterImageContainer = document.getElementById(
  "character-image-container"
);

const characterInfoContainer = document.getElementById(
  "character-info-container"
);

const infoTemplate = `
<div id="character-name" class="character-name">
    <h2 class="name">
    Rick And Morty
    </h2>
</div>

<div id="character-about" class="character-about">
</div>
`;

class Character {
  render() {
    characterInfoContainer.innerHTML = infoTemplate;
  }
}

export { Character };
