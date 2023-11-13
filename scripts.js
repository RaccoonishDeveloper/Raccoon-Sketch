window.addEventListener("contextmenu", (e) => e.preventDefault());
window.onload = function () {
  const container = document.querySelector(".board");

  function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }

  createGrid(60);
};
