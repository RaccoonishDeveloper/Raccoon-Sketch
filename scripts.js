const container = document.querySelector(".board");
const size = document.querySelector(".range");
const rangeSpecific = document.querySelector("#range__specific");
const clearBtn = document.querySelector(".clear");
let isLeftMouseDown = false;
let isRightMouseDown = false;

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
  paint();
};

clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  });
});

const color = document.querySelector(".color");

function paint() {
  container.addEventListener("mousedown", function (e) {
    e.preventDefault();
    if (e.button === 0) {
      isLeftMouseDown = true;
      if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = color.value;
      }
    } else if (e.button === 2) {
      isRightMouseDown = true;
      if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      }
    }
  });

  container.addEventListener("mouseup", function (e) {
    if (e.button === 0) {
      isLeftMouseDown = false;
    }
    if (e.button === 2) {
      isRightMouseDown = false;
    }
  });

  window.addEventListener("mouseup", function (e) {
    if (e.button === 0) {
      isLeftMouseDown = false;
    }
    if (e.button === 2) {
      isRightMouseDown = false;
    }
  });

  container.addEventListener("mouseover", function (e) {
    if (isLeftMouseDown && e.target.classList.contains("square")) {
      e.target.style.backgroundColor = color.value;
    } else if (isRightMouseDown && e.target.classList.contains("square")) {
      // Modify this line
      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    }
  });
}
