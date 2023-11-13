window.onload = function () {
  const container = document.querySelector(".board");
  const size = document.querySelector(".range");
  const rangeSpecific = document.querySelector("#range__specific");
  size.addEventListener("change", function (e) {
    // Remove all existing squares
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    // Create a new grid with the selected size
    createGrid(e.target.value);
  });

  const color = document.querySelector(".color");
  paintGrid(color.value);
  color.addEventListener("change", function (e) {
    paintGrid(e.target.value);
  });

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
  createGrid(16);
};

function paintGrid(color) {}

window.addEventListener("contextmenu", (e) => e.preventDefault());
// disables contextmenu
