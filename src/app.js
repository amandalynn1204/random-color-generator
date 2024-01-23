const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorElement = document.getElementById("color");
const generateColorButton = document.getElementById("generate-color-button");
const saveColorButton = document.getElementById("save-color-button");
const savedColorsElement = document.getElementById("saved-colors");
let color = "#D8EAF7";

function getColor() {
  return Math.floor(Math.random() * hex.length);
}

function displayColor() {
  color = "#";
  for (let index = 0; index < 6; index++) {
    color += hex[getColor()];
  }

  colorElement.innerHTML = color;
  document.body.style.backgroundColor = color;
}

function saveCurrentColor() {
  savedColorsElement.innerHTML += `<li>${color}</li>`;
  savedColorsElement.classList.add("saved-colors");
}

generateColorButton.addEventListener("click", displayColor);
saveColorButton.addEventListener("click", saveCurrentColor);
