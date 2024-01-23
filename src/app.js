const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateColorButton = document.getElementById("generate-color-button");
const colorElement = document.getElementById("color");
let color;

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

generateColorButton.addEventListener("click", displayColor);
