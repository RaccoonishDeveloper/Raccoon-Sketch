window.addEventListener("contextmenu", (e) => e.preventDefault());
window.onload = function () {
  const container = document.querySelector(".board__container");

  function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      container.appendChild(div);
    }
  }

  createGrid(16);
};
