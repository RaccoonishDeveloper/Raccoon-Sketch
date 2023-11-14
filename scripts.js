const container = document.querySelector(".board");
const size = document.querySelector(".range");
const rangeSpecific = document.querySelector("#range__specific");
let isMouseDown = false;

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

window.onload = function () {
  function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    rangeSpecific.textContent = `${size} X ${size}`;
  }

  size.addEventListener("input", function (e) {
    rangeSpecific.textContent = `${e.target.value} X ${e.target.value}`;
  });

  size.addEventListener("change", function (e) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(e.target.value);
  });
  createGrid(16);
};

const color = document.querySelector(".color");
container.addEventListener("mousedown", function (e) {
  e.preventDefault();
  isMouseDown = true;
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = color.value;
  }
});

container.addEventListener("mouseup", function () {
  isMouseDown = false;
});
window.addEventListener("mouseup", function () {
  isMouseDown = false;
});

container.addEventListener("mouseover", function (e) {
  if (isMouseDown && e.target.classList.contains("square")) {
    e.target.style.backgroundColor = color.value;
  }
});
