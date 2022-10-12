const draw = document.querySelector(".draw");
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");
const classic = document.querySelector(".classic");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
let currentColor = "black";

function generateGrid(size) {
  draw.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  draw.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    draw.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
  }
}
// ----- sets the let mouseDown to false
// --- when mouse is clicked by user, changes value to true
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
// ------------------- when that value is true mouseOver works
function changeColor(event) {
  if (event.type === "mouseover" && !mouseDown) return;
  if (currentColor === "black") {
    event.target.style.backgroundColor = `${currentColor}`;
  } else if (currentColor === "white") {
    event.target.style.backgroundColor = "white";
  } else if (currentColor != "black") {
    event.target.style.backgroundColor = `${randomColor()}`;
  }
}

function randomColor() {
  let random = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return random;
}

small.addEventListener("click", () => {
  draw.innerHTML = "";
  currentColor = "black";
  generateGrid(8);
  medium.classList.remove("activeButton");
  large.classList.remove("activeButton");
  small.classList.add("activeButton");
});
medium.addEventListener("click", () => {
  draw.innerHTML = "";
  currentColor = "black";
  generateGrid(16);
  small.classList.remove("activeButton");
  large.classList.remove("activeButton");
  medium.classList.add("activeButton");
});
large.addEventListener("click", () => {
  draw.innerHTML = "";
  currentColor = "black";
  generateGrid(48);
  medium.classList.remove("activeButton");
  small.classList.remove("activeButton");
  large.classList.add("activeButton");
});
classic.addEventListener("click", () => {
  currentColor = "black";
  rainbow.classList.remove("activeButton");
  eraser.classList.remove("activeButton");
  clear.classList.remove("activeButton");
  classic.classList.add("activeButton");
});
rainbow.addEventListener("click", () => {
  randomColor();
  currentColor = `${randomColor()}`;
  classic.classList.remove("activeButton");
  eraser.classList.remove("activeButton");
  clear.classList.remove("activeButton");
  rainbow.classList.add("activeButton");
});
eraser.addEventListener("click", () => {
  currentColor = "white";
  rainbow.classList.remove("activeButton");
  classic.classList.remove("activeButton");
  clear.classList.remove("activeButton");
  eraser.classList.add("activeButton");
});
clear.addEventListener("click", () => {
  draw.innerHTML = "";
  currentColor = "black";
  generateGrid(16);
  rainbow.classList.remove("activeButton");
  eraser.classList.remove("activeButton");
  clear.classList.remove("activeButton");
  small.classList.remove("activeButton");
  large.classList.remove("activeButton");
  medium.classList.add("activeButton");
  classic.classList.add("activeButton");
});

generateGrid(16);
medium.classList.add("activeButton");
classic.classList.add("activeButton");
