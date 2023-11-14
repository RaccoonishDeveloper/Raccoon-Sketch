const container = document.querySelector(".board");
const size = document.querySelector(".range");
const rangeSpecific = document.querySelector("#range__specific");

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

  size.addEventListener("change", function (e) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(e.target.value);
  });
  createGrid(16);
};

const color = document.querySelector(".color");
color.addEventListener("change", function (e) {
  paintGrid(e.target.value);
});
paintGrid(color.value);

function paintGrid(color) {
  console.log(color);
}
