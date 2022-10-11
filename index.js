const draw = document.querySelector(".draw");
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");
const classic = document.querySelector(".classic");
const rainbow = document.querySelector(".rainbow");
const clear = document.querySelector(".clear");
const initialColor = "white";
let currentColor = "black";

function generateGrid(size) {
  // ---------- created the divs
  draw.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  draw.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    draw.insertAdjacentElement("beforeend", square);
    draw.addEventListener("mousedown", function () {
      square.className = `${currentColor}`;
    });

    square.addEventListener("contextmenu", function () {
      window.addEventListener("contextmenu", (e) => e.preventDefault());
    });
  }
}

generateGrid(8);

small.addEventListener("click", function () {
  draw.innerHTML = "";
  generateGrid(8);
});
medium.addEventListener("click", function () {
  draw.innerHTML = "";
  generateGrid(16);
});
large.addEventListener("click", function () {
  draw.innerHTML = "";
  generateGrid(48);
});
classic.addEventListener("click", function () {
  currentColor = "black";
});
